'use client'

import { useId, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { SITE } from '@/lib/constants'
import { cn } from '@/lib/utils'

const ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT

const TOPICS = [
  { value: 'training', label: 'Teacher training' },
  { value: 'classes', label: 'Classes & passes' },
  { value: 'private', label: 'Private class' },
  { value: 'retreat', label: 'Retreats' },
  { value: 'healing', label: 'Healings' },
  { value: 'online', label: 'Online studio' },
  { value: 'other', label: 'Something else' },
]

type Status = 'idle' | 'sending' | 'done' | 'error'

/**
 * Sends JSON to NEXT_PUBLIC_CONTACT_ENDPOINT when configured (Formspree,
 * a serverless function, a CRM webhook…). Without an endpoint it composes
 * an email in the visitor's mail app, so no message is silently lost.
 */
export function ContactForm() {
  const params = useSearchParams()
  const initialTopic = TOPICS.some((t) => t.value === params.get('topic')) ? params.get('topic')! : 'training'
  const programme = params.get('programme')
  const [status, setStatus] = useState<Status>('idle')
  const id = useId()

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>

    if (!ENDPOINT) {
      const topic = TOPICS.find((t) => t.value === data.topic)?.label ?? 'Enquiry'
      const subject = `${topic}${programme ? ` (${programme})` : ''}: ${data.name}`
      const body = `${data.message}\n\n${data.name}\n${data.email}`
      window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      setStatus('done')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, programme }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('done')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  const field = 'mt-2 block w-full border-b border-ink/25 bg-transparent py-3 text-ink placeholder:text-ink-soft/70 focus:border-plum focus:outline-none'

  return (
    <form onSubmit={onSubmit} className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className="type-eyebrow text-crimson">
            Your name
          </label>
          <input id={`${id}-name`} name="name" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className="type-eyebrow text-crimson">
            Email
          </label>
          <input id={`${id}-email`} name="email" type="email" required autoComplete="email" className={field} />
        </div>
      </div>

      <fieldset>
        <legend className="type-eyebrow text-crimson">What’s on your mind?</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <label key={t.value} className="cursor-pointer">
              <input type="radio" name="topic" value={t.value} defaultChecked={t.value === initialTopic} className="peer sr-only" />
              <span
                className={cn(
                  'type-nav inline-flex min-h-11 items-center rounded-full border border-ink/20 px-4 transition-colors',
                  'peer-checked:border-plum peer-checked:bg-plum peer-checked:text-cream peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-saffron',
                )}
              >
                {t.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor={`${id}-message`} className="type-eyebrow text-crimson">
          Message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          rows={5}
          placeholder="Tell us where you are in your journey, and anything you’d like to know."
          className={cn(field, 'resize-y')}
        />
      </div>

      <div className="flex flex-wrap items-center gap-6">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="type-button inline-flex min-h-12 items-center rounded-control bg-plum px-6 text-cream transition-colors hover:bg-crimson disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        <p className="type-meta text-ink-soft" role="status" aria-live="polite">
          {status === 'done' && (ENDPOINT ? 'Thank you! Your message has been sent.' : 'Your email app should open with your message ready to send.')}
          {status === 'error' && `Something went wrong. Please email us at ${SITE.email}.`}
          {status === 'idle' && !ENDPOINT && 'Sending opens your email app with the message prepared.'}
        </p>
      </div>
    </form>
  )
}
