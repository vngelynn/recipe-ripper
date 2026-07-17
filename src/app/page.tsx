"use client"
import { useState } from "react"
import UrlForm from "../components/UrlForm"
import RecipePreview from "@/components/RecipePreview"
import type { Recipe } from "../components/types"

export default function Home() {
  const [recipeUrl, setRecipeUrl] = useState("")
  const [error, setError] = useState(null)
  const [recipe, setRecipe] = useState<Recipe | null>(null)

  const checkRecipe = async () => {
    try {
      const response = await fetch("/api/extract", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: recipeUrl,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }
      const data = await response.json()
      setRecipe(data.recipe)
      setRecipeUrl("")
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className='flex flex-col flex-1 items-center justify-center font-sans'>
      <main className='flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start'>
        <h1>gathered pantry</h1>
        <UrlForm
          updateRecipeUrl={setRecipeUrl}
          url={recipeUrl}
          getRecipe={checkRecipe}
        />
        {recipe && <RecipePreview recipe={recipe} />}
      </main>
    </div>
  )
}
