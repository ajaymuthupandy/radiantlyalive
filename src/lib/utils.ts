import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Formats an ISO date range (YYYY-MM-DD) as "6 – 8 Oct 2026" style text. */
export function formatDateRange(start: string, end?: string) {
  const s = new Date(`${start}T00:00:00Z`)
  const e = end ? new Date(`${end}T00:00:00Z`) : undefined
  const day = (d: Date) => d.getUTCDate()
  const month = (d: Date) => d.toLocaleString('en-GB', { month: 'short', timeZone: 'UTC' })
  const year = (d: Date) => d.getUTCFullYear()

  if (!e) return `${day(s)} ${month(s)} ${year(s)}`
  if (year(s) !== year(e)) return `${day(s)} ${month(s)} ${year(s)} – ${day(e)} ${month(e)} ${year(e)}`
  if (month(s) !== month(e)) return `${day(s)} ${month(s)} – ${day(e)} ${month(e)} ${year(e)}`
  return `${day(s)} – ${day(e)} ${month(e)} ${year(e)}`
}

/** Zero-pads an index for editorial numbering: 1 -> "01". */
export function pad(n: number) {
  return String(n).padStart(2, '0')
}
