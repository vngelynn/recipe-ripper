import axios from "axios"
import * as cheerio from "cheerio"

function findRecipe(data: any) {
  if (Array.isArray(data)) {
    return data.find((item) => item["@type"] === "Recipe")
  }

  if (data["@type"] === "Recipe") {
    return data
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

      const recipe = findRecipe(data["@graph"])

      if (recipe) {
        const {
          name,
          recipeIngredient: ingredients,
          recipeInstructions: instructions,
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
    } catch {
      console.log("Could not parse JSON")
    }
  }

  return null
}
