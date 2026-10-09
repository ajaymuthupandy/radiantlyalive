'use client'

import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Plus } from 'lucide-react'
import { Rich } from '@/components/blocks/Rich'
import { cn } from '@/lib/utils'

interface AccordionItem {
  question: string
  answer: string
}

/** FAQ disclosure list: real buttons with aria-expanded / aria-controls. */
export function Accordion({ items, tone = 'light' }: { items: AccordionItem[]; tone?: 'light' | 'dark' }) {
  const baseId = useId()
  const [open, setOpen] = useState<number | null>(0)
  const reduce = useReducedMotion()
  const dark = tone === 'dark'

  return (
    <div className={cn('border-b', dark ? 'border-cream/15' : 'hairline')}>
      {items.map((item, i) => {
        const isOpen = open === i
        const panelId = `${baseId}-panel-${i}`
        const buttonId = `${baseId}-button-${i}`
        return (
          <div key={item.question} className={cn('border-t', dark ? 'border-cream/15' : 'hairline')}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className={cn('type-h3', dark ? 'text-cream' : 'text-ink')}>
                  {item.question}
                </span>
                <span
                  aria-hidden
                  className={cn(
                    'grid size-10 shrink-0 place-items-center rounded-full border transition-transform duration-500 ease-[var(--ease-out-expo)]',
                    dark ? 'border-cream/30' : 'border-ink/20',
                    isOpen && 'rotate-45',
                  )}
                >
                  <Plus className="size-4" strokeWidth={1.75} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  // Same properties on server and client (no hydration mismatch); reduced motion only drops the duration
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: reduce ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className={cn('type-body measure space-y-3 pr-14 pb-7', dark ? 'text-mist' : 'text-ink-soft')}>
                    {item.answer.split(/\n{2,}/).map((para, p) => (
                      <p key={p}>
                        <Rich text={para} />
                      </p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
