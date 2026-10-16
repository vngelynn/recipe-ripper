interface HowToStep {
  "@type": "HowToStep"
  text: string
  name: string
  url: string
}
export interface Recipe {
  url: string
  name: string
  ingredients: string[]
  instructions: string[]
  image: string
  servings: string[]
  prepTime: string
  cookTime: string
  totalTime: string
}
