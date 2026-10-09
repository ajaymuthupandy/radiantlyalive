import { cn } from '@/lib/utils'

/**
 * A hand-drawn lotus between two pen lines, used sparingly as a chapter
 * mark. The strokes are deliberately a little uneven, like ink. With
 * `data-draw` the lines draw themselves in as the mark scrolls into view
 * (src/animations/scrollEffects.ts).
 */
export function Flourish({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 240 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.15"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={cn('h-10 w-auto', className)}
      data-draw
    >
      {/* left and right pen lines */}
      <path d="M4 37.5c22-.6 44 .4 66-.2 10-.3 19 .1 27 .4" />
      <path d="M236 37.4c-22-.5-44 .5-66-.1-10-.3-19 .2-27 .5" />
      {/* centre petal */}
      <path d="M120 38c-7.5-6.2-9.6-15.4-.3-30.6 9.6 15.1 7.8 24.4.3 30.6" />
      {/* inner petals */}
      <path d="M118.6 37.6c-9.4-1.8-17.3-8.4-19.4-19.8 10.1 2.3 16.7 8.6 19.4 19.8" />
      <path d="M121.4 37.6c9.3-1.9 17.4-8.3 19.5-19.9-10.2 2.4-16.8 8.7-19.5 19.9" />
      {/* outer petals */}
      <path d="M116.8 38.1c-11.8.9-21.6-3.3-27.3-12.2 10.5-1.4 19.3 2.1 27.3 12.2" />
      <path d="M123.2 38.1c11.9.8 21.5-3.4 27.4-12.3-10.6-1.3-19.4 2.2-27.4 12.3" />
      {/* water line under the flower */}
      <path d="M104 41.6c5.4 1.3 10.6 1.7 16 1.6 5.6-.1 10.7-.6 16.2-1.7" />
    </svg>
  )
}
