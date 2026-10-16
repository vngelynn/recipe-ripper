import axios from "axios"
import * as cheerio from "cheerio"
import { getMinutesNumber, formatDuration } from "@/utils/durationFormatters"

type RecipeInstruction =
  | string
  | { text: string }
  | {
      "@type": "HowToSection"
      name?: string
      itemListElement?: RecipeInstruction[]
    }

const cleanIngredient = (ingredient: string) => {
  return (
    ingredient
      // Decode HTML entities if they occur in ingredient text.
      .replace(/&amp;/g, "&")
      .replace(/&nbsp;/g, " ")

      // Remove whitespace immediately inside parentheses.
      .replace(/\(\s+/g, "(")
      .replace(/\s+\)/g, ")")

      // Remove stray commas immediately inside parentheses.
      .replace(/\(\s*,\s*/g, "(")
      .replace(/\s*,\s*\)/g, ")")

      // Collapse redundant double parentheses when the
      // inner content contains no other parentheses.
      .replace(/\(\(([^()]*)\)\)/g, "($1)")

      // Normalize remaining whitespace.
      .replace(/\s+/g, " ")
      .trim()
  )
}

const normalizeInstructions = (instructions: RecipeInstruction[]): string[] => {
  return instructions.flatMap((step) => {
    if (typeof step === "string") {
      return [step]
    }

    if ("itemListElement" in step && step.itemListElement) {
      const sectionInstructions = normalizeInstructions(step.itemListElement)

      return step.name
        ? [step.name, ...sectionInstructions]
        : sectionInstructions
    }

    if ("text" in step && step.text) {
      return [step.text]
    }

    return []
  })
}

function findRecipe(data: unknown) {
  if (!data || typeof data !== "object") {
    return null
  }

  if (Array.isArray(data)) {
    return (
      data.find((item) => {
        if (!item || typeof item !== "object") {
          return false
        }

        const type = (item as { "@type"?: string | string[] })["@type"]

        return (
          type === "Recipe" || (Array.isArray(type) && type.includes("Recipe"))
        )
      }) ?? null
    )
  }

  const object = data as {
    "@type"?: string | string[]
    "@graph"?: unknown
  }

  const type = object["@type"]

  if (type === "Recipe" || (Array.isArray(type) && type.includes("Recipe"))) {
    return data
  }

  if (Array.isArray(object["@graph"])) {
    return findRecipe(object["@graph"])
  }

  return null
}

function normalizeImage(image: unknown): string | null {
  if (typeof image === "string") {
    return image
  }

  if (Array.isArray(image)) {
    const stringImage = image.find((item) => typeof item === "string")

    if (stringImage) {
      return stringImage
    }

    const imageObjects = image.filter(
      (
        item,
      ): item is {
        url?: string
        width?: number
        height?: number
      } => typeof item === "object" && item !== null,
    )

    if (imageObjects.length === 0) {
      return null
    }

    const smallestImage = imageObjects.reduce((smallest, current) => {
      const smallestArea =
        (smallest.width ?? Infinity) * (smallest.height ?? Infinity)

      const currentArea =
        (current.width ?? Infinity) * (current.height ?? Infinity)

      return currentArea < smallestArea ? current : smallest
    })

    return smallestImage.url ?? null
  }

  return null
}

function normalizeServings(servings: unknown): string | null {
  if (typeof servings === "string") {
    if (servings.includes("serving")) return parseInt(servings).toString()
    return servings
  }

  if (typeof servings === "number") {
    return String(servings)
  }

  if (Array.isArray(servings)) {
    const firstString = servings.find((item) => typeof item === "string")

    return firstString ?? null
  }

  return null
}

export async function extractRecipe(url: string) {
  const response = await axios.get(url)

  const $ = cheerio.load(response.data)

  const scripts = $('script[type="application/ld+json"]')

  for (const element of scripts.toArray()) {
    const jsonText = $(element).text()

    try {
      const data = JSON.parse(jsonText)

      const recipe = findRecipe(data)

      if (recipe) {
        const {
          name,
          recipeIngredient: rawIngredients,
          recipeInstructions: rawInstructions,
          image: rawImage,
          recipeYield: rawServings,
          prepTime,
          cookTime,
          totalTime,
        } = recipe

        const image = normalizeImage(rawImage)
        const servings = normalizeServings(rawServings)
        const instructions = normalizeInstructions(rawInstructions ?? [])
        const ingredients = (rawIngredients ?? []).map((ingredient: string) =>
          cleanIngredient(ingredient),
        )

        const prepMinutes = getMinutesNumber(prepTime)
        const totalMinutes = getMinutesNumber(totalTime)

        let normalizedCookTime: string | number = cookTime

        if (cookTime === "PT0S" && prepTime && totalTime) {
          normalizedCookTime = Math.max(0, totalMinutes - prepMinutes)
        }

        return {
          url,
          name,
          ingredients,
          instructions,
          image,
          servings,
          prepTime: formatDuration(prepTime),
          cookTime: formatDuration(normalizedCookTime),
          totalTime: formatDuration(totalTime),
        }
      }
    } catch (error) {
      console.error("Request failed:", error)
    }
  }

  return null
}
