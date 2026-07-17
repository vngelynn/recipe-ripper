import RecipeDetails from "./RecipeDetails"

// TODO: export types to types.ts
interface HowToStep {
  "@type": "HowToStep"
  text: string
  name: string
  url: string
}
interface recipe {
  name: string
  ingredients: string[]
  instructions: HowToStep[]
  image: string
  servings: string[]
  prepTime: string
  cookTime: string
  totalTime: string
}

export default function RecipePreview(recipe: recipe) {
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
