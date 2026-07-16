"use client"
import { useState } from "react"
import UrlForm from "../components/UrlForm"

export default function Home() {
  const [recipeUrl, setRecipeUrl] = useState("")
  const [error, setError] = useState(null)
  const [responseData, setResponseData] = useState(null)

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
      setResponseData(data)
      setRecipeUrl("")
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className='flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
      <main className='flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start'>
        <UrlForm
          updateRecipeUrl={setRecipeUrl}
          url={recipeUrl}
          getRecipe={checkRecipe}
        />
      </main>
    </div>
  )
}
