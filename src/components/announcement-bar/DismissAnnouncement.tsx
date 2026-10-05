'use client'

import { X } from 'lucide-react'

export function DismissAnnouncement({ id, storageKey }: { id: string; storageKey: string }) {
  const dismiss = () => {
    document.documentElement.dataset.announcement = 'dismissed'
    try {
      localStorage.setItem(storageKey, id)
    } catch {
      // Private mode: the bar still closes for this page view.
    }
    // Keep keyboard users in the header rather than dropping focus to <body>.
    document.querySelector<HTMLElement>('[data-header-home]')?.focus()
  }

  return (
    <button
      type="button"
      onClick={dismiss}
      className="absolute top-1/2 right-2 grid size-9 -translate-y-1/2 place-items-center rounded-full text-cream/75 transition-colors hover:bg-cream/10 hover:text-cream md:right-4"
    >
      <X aria-hidden className="size-4" strokeWidth={1.75} />
      <span className="sr-only">Dismiss announcement</span>
    </button>
  )
}
