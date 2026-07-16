"use client"
import { useState } from "react"

export default function UrlForm() {
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
    } catch (err) {
      setError(err.message)
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    checkRecipe()
  }

  return (
    <div className='flex flex-col gap-4 text-base font-medium sm:flex-row'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='urlField'>URL:</label>
        <input
          id='urlField'
          type='recipeUrl'
          value={recipeUrl}
          onChange={(e) => setRecipeUrl(e.target.value)}
          placeholder='Paste recipe URL'
          required
        />

        <button
          className='flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]'
          type='submit'
        >
          myjunk
        </button>
      </form>
    </div>
  )
}
