interface HowToStep {
  "@type": "HowToStep"
  text: string
  name: string
  url: string
}
export interface Recipe {
  name: string
  ingredients: string[]
  instructions: HowToStep[]
  image: string
  servings: string[]
  prepTime: string
  cookTime: string
  totalTime: string
}
