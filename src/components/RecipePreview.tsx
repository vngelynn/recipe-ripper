import RecipeStat from "./RecipeStat"
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
      <div className='grid grid-cols-2 gap-3 sm:grid-cols-4'>
        {/* TODO: investigate 3rd element of servings data response */}
        <RecipeStat label='servings' value={servings[0]} />
        <RecipeStat label='prepTime' value={prepTime} />
        <RecipeStat label='cookTime' value={cookTime} />
        <RecipeStat label='totalTime' value={totalTime} />
      </div>
    </div>
  )
}
