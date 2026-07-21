"use client"
import { useState } from "react"
interface UrlFormProps {
  onUrlSubmit: (url: string) => void
  isDisabled: boolean
}

export default function UrlForm({ onUrlSubmit, isDisabled }: UrlFormProps) {
  const [recipeUrl, setRecipeUrl] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!recipeUrl.trim()) return

    onUrlSubmit(recipeUrl)
    setRecipeUrl("")
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
          disabled={isDisabled}
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
