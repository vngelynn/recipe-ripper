"use client"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import UrlForm from "../components/UrlForm"
import RecipePreview from "@/components/RecipePreview"
import type { Recipe } from "../components/types"

export default function Home() {
  const [submittedUrl, setSubmittedUrl] = useState("")

  // TODO: export query function
  const {
    data: recipe,
    error,
    isLoading,
    isError,
    isFetching,
  } = useQuery({
    queryKey: ["recipe", submittedUrl],
    queryFn: async () => {
      const response = await fetch("/api/extract", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: submittedUrl }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const resData = await response.json()
      return resData.recipe
    },
    enabled: submittedUrl !== "",
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
  })

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
