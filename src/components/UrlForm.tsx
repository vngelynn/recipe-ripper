"use client"
import React, { useState } from "react"
import { Link2 } from "lucide-react"
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
    <div className='max-w-2xl mx-auto px-10 pt-6 pb-20 text-center'>
      <h1 className='text-4xl mb-1.5 font-fraunces text-bold'>Add a Recipe</h1>
      <p className='text-[15px] mb-8 text-ink-soft font-serif'>
        Enter a recipe URL and we'll do the rest.
      </p>

      <form
        className={`flex-1 flex items-center gap-2.5 bg-white rounded-[10px] px-4 border-solid ${isDisabled ? "border-terra" : "border-line"}`}
        style={{ borderWidth: "1.5px" }}
        onSubmit={handleSubmit}
      >
        <Link2 size={16} className='flex-shrink-0 text-ink-faint' />
        <input
          id='urlField'
          type='recipeUrl'
          value={recipeUrl}
          onChange={(e) => setRecipeUrl(e.target.value)}
          placeholder='https://example.com.recipe'
          disabled={isDisabled}
          className='flex-1 py-3.5 bg-transparent outline-none text-[14.5px] text-ink font-sans-serif'
        />

        <button
          type='submit'
          disabled={isDisabled}
          className='whitespace-nowrap px-6 rounded-[9px] font-semibold text-[14.5px] transition-transform active:scale-[0.98] bg-terra font-sans-serif text-[#FBF3E9]'
          style={{
            opacity: isDisabled ? 0.7 : 1,
            cursor: isDisabled ? "default" : "pointer",
          }}
        >
          {isDisabled
            ? "Importing…"
            : !isDisabled
              ? "Imported ✓"
              : "Import Recipe"}
        </button>
      </form>
    </div>
  )
}
