import { useQuery } from "@tanstack/react-query"

export async function extractRecipe(url: string) {
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
export function useExtractRecipe(submittedUrl: string) {
  return useQuery({
    queryKey: recipeKeys.extract(submittedUrl),
    queryFn: () => extractRecipe(submittedUrl),
    enabled: submittedUrl !== "",
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
  })
}
