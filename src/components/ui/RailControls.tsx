'use client'

import { useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Previous/next buttons for a native scroll-snap rail (the rail itself is
 * server-rendered and fully usable by touch, trackpad and keyboard).
 */
export function RailControls({ railId, label, tone = 'light' }: { railId: string; label: string; tone?: 'light' | 'dark' }) {
  const [edges, setEdges] = useState({ start: true, end: false })

  useEffect(() => {
    const rail = document.getElementById(railId)
    if (!rail) return
    const update = () =>
      setEdges({
        start: rail.scrollLeft <= 4,
        end: rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4,
      })
    update()
    rail.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      rail.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [railId])

  const scroll = (dir: 1 | -1) => {
    const rail = document.getElementById(railId)
    rail?.scrollBy({ left: dir * rail.clientWidth * 0.8, behavior: 'smooth' })
  }

  const btn = cn(
    'grid size-12 place-items-center rounded-full border transition-colors disabled:opacity-30',
    tone === 'dark' ? 'border-cream/30 hover:bg-cream hover:text-plum' : 'border-ink/20 hover:bg-plum hover:text-cream',
  )

  return (
    <div className="flex gap-2" role="group" aria-label={label}>
      <button type="button" className={btn} onClick={() => scroll(-1)} disabled={edges.start} aria-controls={railId}>
        <ArrowLeft aria-hidden className="size-4" strokeWidth={1.75} />
        <span className="sr-only">Previous</span>
      </button>
      <button type="button" className={btn} onClick={() => scroll(1)} disabled={edges.end} aria-controls={railId}>
        <ArrowRight aria-hidden className="size-4" strokeWidth={1.75} />
        <span className="sr-only">Next</span>
      </button>
    </div>
  )
}
