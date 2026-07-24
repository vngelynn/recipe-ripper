"use client"
import { useState } from "react"
import RecipeStat from "./RecipeStat"
import type { Recipe } from "./types"
import { Bookmark, Home } from "lucide-react"

export default function RecipePreview({ recipe }: { recipe: Recipe }) {
  const [checked, setChecked] = useState(() => new Set())
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

  const toggleIngredient = (i) => {
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
      <div className='relative text-center px-10 pt-11 pb-9 bg-gradient-to-r bg-[160deg] from-sage-pale to-cream-deep'>
        <button
          // onClick={() => setSaved((s) => !s)}
          className='absolute top-7 right-7 w-11 h-11 rounded-full flex items-center justify-center bg-card border-[1.5px] border-line shadow-[0_3px_8px_rgba(59,46,34,0.1)] transition-colors duration-200'
          aria-label='Save recipe'
        >
          <Bookmark
            size={18}
            // className={`${saved ? "text-terra fill-terra" : "text-terra fill-none"} transition-all duration-200`}
          />
        </button>
        <Home
          size={34}
          strokeWidth={1.4}
          className='mx-auto mb-4 text-terra-deep'
        />
        <div className='text-sm font-semibold mb-1 text-terra-deep italic font-fraunces'>
          caution! PREVIEW ONLY, click save!
        </div>
        <h1 className='text-4xl mb-2 font-fraunces font-medium italic'>
          {name}
        </h1>
        <p className='text-sm text-ink-soft font-sans-serif'>
          clipped from{" "}
          <span className='font-semibold text-ink'>
            {" "}
            {/* TODO: add get source logic to display clipped from {$} */}source
            here.com
          </span>
        </p>
      </div>
      <div className='flex justify-center divide-x text-line font-sans-serif border-b-[1.5px] border-dashed'>
        {/* TODO: investigate 3rd element of servings data response */}
        <RecipeStat label='servings' value={servings[0]} />
        <RecipeStat label='prepTime' value={prepTime} />
        <RecipeStat label='cookTime' value={cookTime} />
        <RecipeStat label='totalTime' value={totalTime} />
      </div>
      <div className='grid md:grid-cols-2'>
        {/* ingredients */}
        <div className='p-9 md:border-r text-line border-b-[0]'>
          <p
            className='text-xs font-bold uppercase mb-4 text-[#59654A] font-sans-serif'
            style={{
              letterSpacing: "0.08em",
            }}
          >
            ingredients
          </p>
          <ul>
            {ingredients.map((item, i) => (
              <li
                key={i}
                onClick={() => toggleIngredient(i)}
                className='flex items-start gap-3 py-2.5 text-[15px] cursor-pointer select-none text-ink border-b last:border-b-0 border-line] font-serif'
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
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* steps */}
        <div className='p-9'>
          <p
            className='text-xs font-bold uppercase mb-4 font-sans-serif'
            style={{
              color: "#59654A",
              letterSpacing: "0.08em",
            }}
          >
            Steps
          </p>
          <ol>
            {instructions.map((step, i) => (
              <li
                key={i}
                className='relative pl-11 pb-6 last:pb-0 text-[15.5px] leading-relaxed text-ink font-serif'
              >
                <span className='absolute left-0 top-0 w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-semibold bg-terra text-[#FBF3E9]'>
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        {/* note band */}
        <div className='md:col-span-2 mx-9 mb-9 rounded-xl px-6 py-5 text-sm italic bg-cream-deep text-ink-soft font-serif'>
          {/* TODO: */}
          add user notes here
        </div>
      </div>
    </div>
  )
}
