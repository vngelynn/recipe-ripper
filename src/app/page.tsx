"use client"
import { useState } from "react"
import { useExtractRecipe } from "../hooks/useExtractRecipe"
import UrlForm from "../components/UrlForm"
import RecipePreview from "@/components/RecipePreview"

export default function Home() {
  const [submittedUrl, setSubmittedUrl] = useState("")

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
    <div className='flex flex-col flex-1 items-center justify-center font-sans'>
      <main className='flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start'>
        <h1>gathered pantry</h1>
        <UrlForm onUrlSubmit={handleCheckRecipe} isDisabled={isWorking} />
        {/* TODO: show loading crean if isWorking */}
        {/* TODO: handle display for errors */}
        {recipe && <RecipePreview recipe={recipe} />}
      </main>
    </div>
  )
}
