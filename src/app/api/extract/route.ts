import { NextResponse } from "next/server"
import { extractRecipe } from "../../../lib/recipeExtractor"

export async function POST(request: Request) {
  const body = await request.json()
  const extractedRecipe = extractRecipe(body.url)

  return NextResponse.json({
    recipe: extractedRecipe,
  })
}
