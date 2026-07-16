"use client"
import { useState } from "react"

interface UrlFormProps {
  updateRecipeUrl: (newUrl: string) => void
  url: string
  getRecipe: () => void
}
export default function UrlForm({
  updateRecipeUrl,
  url,
  getRecipe,
}: UrlFormProps) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    getRecipe()
  }

  return (
    <div className='flex flex-col gap-4 text-base font-medium sm:flex-row'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='urlField'>URL:</label>
        <input
          id='urlField'
          type='recipeUrl'
          value={url}
          onChange={(e) => updateRecipeUrl(e.target.value)}
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
