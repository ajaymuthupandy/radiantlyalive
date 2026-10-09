'use client'

import { useId, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import type { UiStrings } from '@/content/ui-strings'
import { cn } from '@/lib/utils'

type Status = 'idle' | 'sending' | 'done' | 'error'

const ENDPOINTS = {
  newsletter: process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT,
  waitlist: process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT,
}

interface EmailFormProps {
  form: 'newsletter' | 'waitlist'
  fallbackHref: string
  submitLabel: string
  successMessage: React.ReactNode
  dark?: boolean
  strings: UiStrings
}

/**
 * Email capture. Posts `{ email, form }` as JSON to the configured endpoint
 * (NEXT_PUBLIC_NEWSLETTER_ENDPOINT / NEXT_PUBLIC_WAITLIST_ENDPOINT). Without
 * one it opens the original Radiantly Alive form instead of pretending to
 * subscribe anyone.
 */
export function EmailForm({ form, fallbackHref, submitLabel, successMessage, dark, strings }: EmailFormProps) {
  const id = useId()
  const [status, setStatus] = useState<Status>('idle')
  const endpoint = ENDPOINTS[form]

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const el = e.currentTarget
    const data = new FormData(el)

    if (!endpoint) {
      window.open(fallbackHref, '_blank', 'noopener,noreferrer')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email: data.get('email'), name: data.get('name') || undefined, form }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('done')
      el.reset()
    } catch {
      setStatus('error')
    }
  }

  const field = cn(
    'type-body min-h-13 w-full border-b bg-transparent py-3 focus:outline-none',
    dark ? 'border-cream/30 text-cream placeholder:text-cream/60 focus:border-saffron' : 'border-ink/25 text-ink placeholder:text-ink-soft/80 focus:border-plum',
  )

  return (
    <form onSubmit={onSubmit} className="w-full max-w-xl">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className="type-eyebrow">
            {strings.formName} <span className="normal-case opacity-70">{strings.formOptional}</span>
          </label>
          <input id={`${id}-name`} name="name" type="text" autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="type-eyebrow">
            {strings.formEmail}
          </label>
          <input id={`${id}-email`} name="email" type="email" required autoComplete="email" className={field} />
        </div>
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className={cn(
          'group type-button mt-8 inline-flex min-h-12 items-center gap-2.5 rounded-control px-6 transition-colors disabled:opacity-60',
          'bg-saffron text-ink hover:bg-saffron-deep',
        )}
      >
        {status === 'sending' ? strings.formSending : submitLabel}
        <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-1" strokeWidth={1.75} />
      </button>
      <p className={cn('type-small mt-4 min-h-5', dark ? 'text-mist' : 'text-ink-soft')} role="status" aria-live="polite">
        {status === 'done' && successMessage}
        {status === 'error' && strings.formError}
        {status === 'idle' && !endpoint && strings.formFallback}
      </p>
    </form>
  )
}
