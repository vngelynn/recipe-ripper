"use client"
import { useState } from "react"
import RecipeStat from "./RecipeStat"
import type { Recipe } from "./types"
import { ChefHat } from "lucide-react"

export default function RecipeDisplay({ recipe }: { recipe: Recipe }) {
  const [checked, setChecked] = useState(() => new Set())

  const {
    url,
    name,
    ingredients,
    instructions,
    image,
    servings,
    prepTime,
    cookTime,
    totalTime,
  } = recipe

  const toggleIngredient = (i: number) => {
    setChecked((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  return (
    <div
      className='rounded-2xl overflow-hidden bg-card'
      style={{
        boxShadow:
          "0 2px 0 rgba(59,46,34,0.05), 0 10px 28px rgba(59,46,34,0.09)",
      }}
    >
      <div
        className={`relative flex flex-col items-center justify-center text-center px-10 pt-11 pb-9 overflow-hidden ${
          image
            ? ""
            : "bg-gradient-to-r from-[#927c6d] via-amber-900/40 to-orange-100"
        }`}
      >
        {image && (
          <>
            <img
              src={image}
              alt=''
              aria-hidden='true'
              className='absolute inset-0 w-full h-full object-cover object-center'
            />
            <div className='absolute inset-0 bg-[#F3E9D9]/75' />
          </>
        )}

        <div className='relative z-10 flex flex-col items-center'>
          <ChefHat
            size={34}
            strokeWidth={1.4}
            className='mx-auto mb-4 text-terra-deep'
          />

          <h1 className='text-4xl mb-2 font-fraunces font-medium italic text-ink'>
            {name}
          </h1>

          <p className='text-sm text-ink-soft font-inter break-words'>
            clipped from <span className='font-semibold text-ink'>{url}</span>
          </p>
        </div>
      </div>

      <div className='flex justify-center divide-x text-line font-inter border-b-[1.5px] border-dashed'>
        <RecipeStat label='servings' value={servings} />
        <RecipeStat label='prepTime' value={prepTime.replace(/^PT/, "")} />
        <RecipeStat label='cookTime' value={cookTime.replace(/^PT/, "")} />
        <RecipeStat label='totalTime' value={totalTime.replace(/^PT/, "")} />
      </div>
      <div className='grid md:grid-cols-[1fr_2fr]'>
        <div className='p-9 md:border-r text-line border-b-[0]'>
          <p
            className='text-xs font-bold uppercase mb-4 text-[#59654A] font-inter'
            style={{
              letterSpacing: "0.08em",
            }}
          >
            ingredients
          </p>
          <ul>
            {ingredients.map((ingredient, i) => {
              const match = ingredient.match(
                /^(.*?)\s+(\((?:[^()]|\([^()]*\))*\))$/,
              )
              return (
                <li
                  key={i}
                  onClick={() => toggleIngredient(i)}
                  className='flex items-start gap-3 py-2.5 text-[15px] cursor-pointer select-none text-ink border-b last:border-b-0 border-line] font-lora'
                >
                  <span
                    className={`border-[1.5px] transition-colors ${
                      checked.has(i)
                        ? "border-terra bg-terra"
                        : "border-[#CBB289] bg-transparent"
                    } mt-0.5 w-[17px] h-[17px] rounded-[5px] flex-shrink-0`}
                  />
                  <span
                    style={{
                      textDecoration: checked.has(i) ? "line-through" : "none",
                      opacity: checked.has(i) ? 0.55 : 1,
                    }}
                  >
                    {match ? match[1] : ingredient}
                    {match && (
                      <div className='mt-0.5 text-sm text-ink-soft font-lora'>
                        {match[2]}
                      </div>
                    )}
                  </span>
                </li>
              )
            })}
          </ul>
        </div>

        <div className='p-9'>
          <p
            className='text-xs font-bold uppercase mb-4 font-inter'
            style={{
              color: "#59654A",
              letterSpacing: "0.08em",
            }}
          >
            Steps
          </p>

          <ol className='space-y-0'>
            {instructions.map((step, i) => {
              const isSectionHeader = step.trim().endsWith(":")

              if (isSectionHeader) {
                return (
                  <li
                    key={i}
                    className='pt-3 pb-3 first:pt-0 text-sm font-bold uppercase tracking-wide text-terra-deep font-inter'
                  >
                    {step}
                  </li>
                )
              }

              const previousHeaderIndex = instructions
                .slice(0, i)
                .findLastIndex((previousStep) =>
                  previousStep.trim().endsWith(":"),
                )

              const stepNumber =
                instructions
                  .slice(previousHeaderIndex + 1, i)
                  .filter((previousStep) => !previousStep.trim().endsWith(":"))
                  .length + 1

              return (
                <li
                  key={i}
                  className='relative pl-11 pb-6 last:pb-0 text-[15.5px] leading-relaxed text-ink font-lora'
                >
                  <span className='absolute left-0 top-0 w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-semibold bg-terra text-[#FBF3E9]'>
                    {stepNumber}
                  </span>

                  {step}
                </li>
              )
            })}
          </ol>
        </div>

        <div className='md:col-span-2 mx-9 mb-9 rounded-xl px-6 py-5 text-sm italic bg-cream-deep text-ink-soft font-lora'>
          {/* TODO: Implement functionality */}
          add user notes here
        </div>
      </div>
    </div>
  )
}
