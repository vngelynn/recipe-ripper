"use client"
import { useState } from "react"
import { useExtractRecipe } from "../../hooks/useExtractRecipe"
import UrlForm from "../../components/UrlForm"
import RecipeDisplay from "@/components/RecipeDisplay"
import Navbar from "@/components/Navbar"
import { ChevronLeft } from "lucide-react"
import PreviewNotice from "@/components/PreviewNotice"
import Link from "next/link"

export default function ExtractPage() {
  const [submittedUrl, setSubmittedUrl] = useState<string>("")

  const {
    data: recipe,
    isLoading,
    isFetching,
    isError,
    error,
  } = useExtractRecipe(submittedUrl)

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
        <Link
          href='/'
          className='inline-flex items-center gap-1.5 text-sm font-medium mb-5 cursor-pointer text-ink-soft font-sans-serif'
        >
          <ChevronLeft size={15} />
          Back
        </Link>

        <UrlForm onUrlSubmit={handleCheckRecipe} isDisabled={isWorking} />
        {/* TODO: show loading screen if isWorking */}
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
