"use client"

import { ChevronLeft } from "lucide-react"
import Link from "next/link"

import PreviewNotice from "@/components/PreviewNotice"
import RecipeDisplay from "@/components/RecipeDisplay"
import UrlForm from "@/components/UrlForm"
import { useEffect, useRef, useState } from "react"

export default function ExtractPage() {
  const [recipe, setRecipe] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const [extracted, setExtracted] = useState(false)
  const recipeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (recipe && extracted) {
      recipeRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }, [recipe, extracted])

  const extractRecipe = async (submittedUrl: string) => {
    setLoading(true)
    setExtracted(false)
    setError("")
    setRecipe(null)

    try {
      const response = await fetch("/api/extract", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: submittedUrl,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data = await response.json()

      if (!data.recipe) {
        throw new Error("No recipe could be extracted from this URL.")
      }

      setRecipe(data.recipe)
      setExtracted(true)
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error))
    } finally {
      setLoading(false)
    }
  }

  const handleCheckRecipe = (url: string) => {
    return extractRecipe(url)
  }

  return (
    <div className='min-h-screen w-full bg-cream text-ink'>
      <div className='max-w-4xl mx-auto px-10 pb-24'>
        <Link
          href='/'
          className='inline-flex items-center gap-1.5 text-sm font-medium mb-5 cursor-pointer text-ink-soft font-inter'
        >
          <ChevronLeft size={15} />
          Back
        </Link>

        <div className='text-[11.5px] font-bold uppercase text-center mb-3 text-terra-deep font-inter tracking-[0.12em]'>
          Paste a link, keep only what matters
        </div>

        <UrlForm
          onUrlSubmit={handleCheckRecipe}
          isDisabled={loading}
          isExtracted={extracted}
        />

        {error && (
          <p className='mt-4 text-sm text-red-700 text-center' role='alert'>
            {error}
          </p>
        )}

        {recipe && (
          <div ref={recipeRef} className='scroll-mt-6'>
            <PreviewNotice />
            <RecipeDisplay recipe={recipe} />
          </div>
        )}
      </div>
    </div>
  )
}
