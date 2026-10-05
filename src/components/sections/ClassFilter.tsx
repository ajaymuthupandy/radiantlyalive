'use client'

import { useState } from 'react'
import { ClassCard } from '@/components/cards/ClassCard'
import { classFamilies, classStyles } from '@/data/classes'
import type { ClassStyle } from '@/data/types'
import { cn } from '@/lib/utils'

type Family = ClassStyle['family'] | 'all'

/** Filterable class catalogue. Server-rendered with "All"; filtering is a progressive enhancement. */
export function ClassFilter() {
  const [family, setFamily] = useState<Family>('all')
  const visible = family === 'all' ? classStyles : classStyles.filter((c) => c.family === family)

  return (
    <div>
      <div role="group" aria-label="Filter classes by style" className="flex flex-wrap gap-2">
        {classFamilies.map((f) => {
          const active = family === f.id
          const count = f.id === 'all' ? classStyles.length : classStyles.filter((c) => c.family === f.id).length
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={active}
              onClick={() => setFamily(f.id)}
              className={cn(
                'type-nav min-h-11 rounded-full border px-4 transition-colors duration-300',
                active ? 'border-plum bg-plum text-cream' : 'border-ink/20 text-ink hover:border-ink',
              )}
            >
              {f.label} <span className={cn('ml-1 font-normal', active ? 'text-mist' : 'text-ink-soft')}>{count}</span>
            </button>
          )
        })}
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        Showing {visible.length} classes
      </p>

      <div className="mt-10 grid gap-x-12 md:grid-cols-2">
        {visible.map((item, i) => (
          <ClassCard key={item.id} item={item} index={i} detailed />
        ))}
      </div>
    </div>
  )
}
