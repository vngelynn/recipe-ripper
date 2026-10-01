"use client"
import { useState } from "react"
import UrlForm from "../../components/UrlForm"
import RecipeDisplay from "@/components/RecipeDisplay"
import { ChevronLeft } from "lucide-react"
import PreviewNotice from "@/components/PreviewNotice"
import Link from "next/link"

export default function ExtractPage() {
  const [recipe, setRecipe] = useState(null)
  const [error, setError] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [extracted, setExtracted] = useState<boolean>(false)

  const extractRecipe = async (submittedUrl: string) => {
    try {
      setLoading(true)
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
      setRecipe(data.recipe)
      setExtracted(true)
      setLoading(false)
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message)
      } else {
        setError(String(error))
      }
    }
  }

  if (error) {
    // display error message
    console.log(error)
  }

  const handleCheckRecipe = (url: string) => {
    extractRecipe(url)
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
        <UrlForm onUrlSubmit={handleCheckRecipe} isDisabled={loading} />
        {/* TODO: handle display for errors */}
        {recipe && (
          <>
            <PreviewNotice /> <RecipeDisplay recipe={recipe} />
          </>
        )}
      </div>
    </div>
  )
}
