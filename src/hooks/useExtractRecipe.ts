import { useQuery } from "@tanstack/react-query"

import mockRecipeData from "../data/mockRecipe.json"

interface UseRecipeOptions {
  submittedUrl: string
  isStylingMode?: boolean // Optional parameter
}

export async function extractRecipe(url: string, isStylingMode?: boolean) {
  // 1. Mock Data Bypass
  if (isStylingMode) {
    await new Promise((resolve) => setTimeout(resolve, 300))
    return mockRecipeData.recipe
  }

  const response = await fetch("/api/extract", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url: url }),
  })

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`)
  }

  const resData = await response.json()
  return resData.recipe
}

export const recipeKeys = {
  extract: (url: string) => ["recipe", url] as const,
}

export function useExtractRecipe({
  submittedUrl,
  isStylingMode = false,
}: UseRecipeOptions) {
  return useQuery({
    queryKey: ["recipe", submittedUrl || "styling-mock", { isStylingMode }],
    queryFn: () => extractRecipe(submittedUrl, isStylingMode),
    enabled: isStylingMode ? true : submittedUrl !== "",
    staleTime: Infinity,
    gcTime: Infinity,
  })
}
