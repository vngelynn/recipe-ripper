type FieldProps = {
  label: string
  type?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  inputRight?: React.ReactNode
}

export default function Field({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  inputRight,
}: FieldProps) {
  return (
    <div className={label === "Password" ? "mb-0" : "mb-4"}>
      <div className='mb-1.5 flex items-center justify-between'>
        <label className='font-inter text-[12px] font-semibold uppercase tracking-[0.06em] text-ink-soft'>
          {label}
        </label>
      </div>

      <div className='relative'>
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className='w-full rounded-[9px] border-[1.5px] border-line bg-white px-3.5 py-3 pr-11 font-lora text-[15px] text-ink outline-none transition-colors placeholder:text-ink-faint focus:border-sage-deep'
        />

        {inputRight}
      </div>
    </div>
  )
}
