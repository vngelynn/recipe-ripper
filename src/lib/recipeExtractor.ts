import axios from "axios"
import * as cheerio from "cheerio"

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

export async function extractRecipe(url: string) {
  const response = await axios.get(url)

  const $ = cheerio.load(response.data)

  const scripts = $('script[type="application/ld+json"]')

  for (const element of scripts.toArray()) {
    const jsonText = $(element).text()

    try {
      const data = JSON.parse(jsonText)

      const recipe = findRecipe(data)

      const instructions = recipe.recipeInstructions.map(
        (step: string | { text: string }) => {
          if (typeof step === "string") {
            return step
          }

          return step.text
        },
      )

      if (recipe) {
        const {
          name,
          recipeIngredient: ingredients,
          image,
          recipeYield: servings,
          prepTime,
          cookTime,
          totalTime,
        } = recipe

        return {
          name,
          ingredients,
          instructions,
          image,
          servings,
          prepTime,
          cookTime,
          totalTime,
        }
      }
    } catch (error) {
      console.error("Request failed:", error)
    }
  }

  return null
}
