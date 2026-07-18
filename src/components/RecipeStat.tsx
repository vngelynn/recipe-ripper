interface StatProps {
  label: string
  value: string | number | undefined | null
}
export default function RecipeStat({ label, value }: StatProps) {
  return (
    <div>
      {/* TODO: format data */}
      <p>{value}</p>
      <span>{label}</span>
    </div>
  )
}
