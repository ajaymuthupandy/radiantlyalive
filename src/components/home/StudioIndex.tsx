'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Media } from '@/components/ui/Media'
import type { MediaKey } from '@/data/media'
import { cn } from '@/lib/utils'

interface Offering {
  label: string
  text: string
  href: string
  image: MediaKey
}

/**
 * The studio's offerings as an index, the way a printed programme lists
 * them: one line each, set large. On desktop the photograph beside the list
 * follows whichever line is hovered or focused; on phones each line carries
 * its own small photograph.
 */
export function StudioIndex({ items }: { items: readonly Offering[] }) {
  const [active, setActive] = useState(0)

  return (
    <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-10">
      <div className="relative hidden lg:col-span-5 lg:block">
        <div className="shape-arch sticky top-[calc(var(--header-height)+2rem)] aspect-[4/5] overflow-hidden bg-sand" data-arch>
          {items.map((item, i) => (
            <Media
              key={item.href}
              asset={item.image}
              fill
              alt=""
              sizes="(min-width: 1024px) 38vw, 1px"
              className={cn(
                'object-cover transition-[opacity,transform] duration-700 ease-[var(--ease-out-expo)]',
                i === active ? 'scale-100 opacity-100' : 'scale-[1.04] opacity-0',
              )}
            />
          ))}
        </div>
      </div>

      <ol className="border-b hairline lg:col-span-7" data-stagger>
        {items.map((item, i) => (
          <li key={item.href} className="border-t hairline" data-stagger-item>
            <Link
              href={item.href}
              onPointerEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group grid grid-cols-[4.5rem_1fr] items-center gap-x-5 py-5 lg:grid-cols-1 lg:py-6"
            >
              <span className="relative aspect-square overflow-hidden rounded-frame bg-sand lg:hidden">
                <Media asset={item.image} fill alt="" sizes="72px" className="object-cover" />
              </span>
              <span className="transition-transform duration-500 ease-[var(--ease-out-expo)] lg:group-hover:translate-x-2">
                <span
                  className={cn(
                    'type-display-sm block transition-colors duration-300',
                    i === active ? 'lg:text-ink' : 'lg:text-ink/55',
                  )}
                >
                  {item.label}
                </span>
                <span className="type-small mt-1 block text-ink-soft">{item.text}</span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  )
}
