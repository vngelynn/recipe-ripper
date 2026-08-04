import { Eye } from "lucide-react"

export default function PreviewNotice() {
  return (
    <div className='py-5 mb-20 border-t-[1.5px] border-b-[1.5px] border-dashed border-line-strong'>
      <div className='flex items-center gap-1.5 text-[11.5px] font-bold uppercase mb-2 tracking-[0.12em] text-terra-deep font-sans-serif'>
        <Eye size={13} />
        Unsaved preview
      </div>
      <p className='text-[14.5px] mb-4 text-ink-soft font-sans-serif'>
        Save this recipe to access it later. Otherwise, if you leave this page,
        you'll need to import the recipe URL again.
      </p>
      <div className='flex gap-2.5'>
        <button
          //   onClick={handleSave}
          className='font-semibold text-[13.5px] rounded-lg px-4.5 py-2.5 bg-terra text-[#FBF3E9] font-sans-serif'
        >
          Save Recipe
        </button>
      </div>
    </div>
  )
}
