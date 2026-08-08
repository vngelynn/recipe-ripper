"use client"
import React, { useState } from "react"
import { Link2, Scissors } from "lucide-react"
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
      <h1 className='text-4xl mb-1.5 font-fraunces text-bold'>
        Skim a new recipe
      </h1>
      <p className='text-[15px] mb-8 text-ink-soft font-Lora'>
        Enter a recipe URL and we'll do the rest.
      </p>
      <div
        className='rounded-2xl p-2 mb-4 bg-card'
        style={{
          boxShadow:
            "0 2px 0 rgba(59,46,34,0.05), 0 10px 28px rgba(59,46,34,0.09)",
        }}
      >
        <div className='rounded-[11px] px-7 py-8 border-dashed border-[1.5px] border-line-strong'>
          <p className='text-[12px] font-bold uppercase mb-2.5 text-ink-soft tracking-[0.08em] font-inter text-left'>
            Recipe URL
          </p>
          <form className='flex gap-2.5' onSubmit={handleSubmit}>
            <div
              className={`flex-1 flex items-center gap-2.5 bg-white rounded-[10px] px-4 border-solid ${isDisabled ? "border-terra" : "border-line"}`}
              style={{ borderWidth: "1.5px" }}
            >
              <Link2 size={16} className='flex-shrink-0 text-ink-faint' />
              <input
                id='urlField'
                type='recipeUrl'
                value={recipeUrl}
                onChange={(e) => setRecipeUrl(e.target.value)}
                placeholder='https://example.com.recipe'
                disabled={isDisabled}
                className='flex-1 py-3.5 bg-transparent outline-none text-[14.5px] text-ink font-inter'
              />
            </div>

            <button
              type='submit'
              disabled={isDisabled}
              className='whitespace-nowrap flex items-center gap-2 px-6 rounded-[9px] font-semibold text-[14.5px] transition-transform active:scale-[0.98] bg-terra font-inter text-[#FBF3E9]'
              style={{
                opacity: isDisabled ? 0.7 : 1,
                cursor: isDisabled ? "default" : "pointer",
              }}
            >
              <Scissors size={15} />
              {/* TODO: fix display text logic, showing skimmed at first look */}
              {isDisabled ? "Skimming" : recipeUrl ? "Skim Recipe" : "Skimmed"}
            </button>
          </form>
          <p className='text-center text-xs mt-4 font-ink-faint font-inter'>
            Works with most recipe blogs, food magazines, and cooking sites.
          </p>
        </div>
      </div>
    </div>
  )
}
