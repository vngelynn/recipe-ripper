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

  scripts.each((_, element) => {
    const jsonText = $(element).text()

    try {
      const data = JSON.parse(jsonText)
      const recipe = findRecipe(data["@graph"])

      // TODO: implement logic to stove and display recipe
      if (recipe) {
        console.log("FOUND RECIPE!")
        console.log(recipe.name)
        console.log(recipe.recipeIngredient)
        console.log(recipe.recipeInstructions)
      }
    } catch (error) {
      console.log("Could not parse JSON")
    }
  })
}
