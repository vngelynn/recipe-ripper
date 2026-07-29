"use client"
import { useState } from "react"
import { useExtractRecipe } from "../hooks/useExtractRecipe"
import UrlForm from "../components/UrlForm"
import RecipePreview from "@/components/RecipePreview"
import Navbar from "@/components/Navbar"
import { ChevronLeft } from "lucide-react"

const IS_STYLING = true

export default function Home() {
  const [submittedUrl, setSubmittedUrl] = useState("")

  const {
    data: recipe,
    isLoading,
    isFetching,
    isError,
    error,
  } = useExtractRecipe({
    submittedUrl: submittedUrl,
    isStylingMode: IS_STYLING,
  })

  const handleCheckRecipe = (url: string) => {
    setSubmittedUrl(url)
  }

  if (isError) {
    console.log("Query error occured: ", error.message)
  }
  const isWorking = isLoading || isFetching

  return (
    <div className='min-h-screen w-full bg-cream text-ink'>
      <Navbar />
      <div className='max-w-4xl mx-auto px-10 pb-24'>
        <a className='inline-flex items-center gap-1.5 text-sm font-medium mb-5 cursor-pointer text-ink-soft font-sans-serif'>
          <ChevronLeft size={15} />
          Back
        </a>

        <UrlForm onUrlSubmit={handleCheckRecipe} isDisabled={isWorking} />
        {/* TODO: show loading crean if isWorking */}
        {/* TODO: handle display for errors */}
        {recipe && <RecipePreview recipe={recipe} />}
      </div>
    </div>
  )
}
