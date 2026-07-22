interface StatProps {
  label: string
  value: string | number | undefined | null
}
export default function RecipeStat({ label, value }: StatProps) {
  return (
    <div key={label} className='px-8 py-5 text-center text-line'>
      {/* TODO: format data */}
      <span className='block text-lg font-semibold font-fraunces text-[#3B2E22]'>
        {value}
      </span>
      <span
        className='text-[11px] uppercase tracking-wide text-ink-faint'
        style={{ letterSpacing: "0.06em" }}
      >
        {label}
      </span>
    </div>
  )
}
