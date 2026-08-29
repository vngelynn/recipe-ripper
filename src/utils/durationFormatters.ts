/**
 * Converts an ISO 8601 duration string into a number (used for calculations).
 */
export function getMinutesNumber(duration: string | undefined): number {
  if (!duration) return 0
  const hours = duration.match(/(\d+)H/)?.[1]
  const minutes = duration.match(/(\d+)M/)?.[1]
  return (Number(hours) || 0) * 60 + (Number(minutes) || 0)
}

/**
 * Formats an ISO string OR a raw minute number into a user-friendly time string.
 */
export function formatDuration(duration: string | number | undefined): string {
  if (!duration || duration === "PT0S") return "0 mins"

  const totalMinutes =
    typeof duration === "string" ? getMinutesNumber(duration) : duration

  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  const hrText = hours === 1 ? "hr" : "hrs"
  const minText = minutes === 1 ? "min" : "mins"

  if (hours > 0 && minutes > 0) {
    return `${hours} ${hrText} ${minutes} ${minText}`
  } else if (hours > 0) {
    return `${hours} ${hrText}`
  } else {
    return `${minutes} ${minText}`
  }
}
