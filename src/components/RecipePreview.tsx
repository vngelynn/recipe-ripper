import RecipeDetails from "./RecipeDetails"
import type { Recipe } from "./types"
export default function RecipePreview({ recipe }: { recipe: Recipe }) {
  const {
    name,
    ingredients,
    instructions,
    image,
    servings,
    prepTime,
    cookTime,
    totalTime,
  } = recipe

  return (
    <div>
      <div>
        CAUTION! this is a temporary preview, if you'd like to save, click here!
        <h1>
          <i>{name}</i>
        </h1>
        {/* TODO: add get source logic to display clipped from {$} */}
      </div>
      <div>
        <RecipeDetails />
      </div>
    </div>
  )
}
