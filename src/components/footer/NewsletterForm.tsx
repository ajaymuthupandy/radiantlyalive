'use client'

import { useId, useState } from 'react'
import Link from 'next/link'
import { SOURCE_ORIGIN } from '@/data/site'

type Status = 'idle' | 'sending' | 'done' | 'error'

const ENDPOINT = process.env.NEXT_PUBLIC_NEWSLETTER_ENDPOINT

/**
 * Posts `{ email }` as JSON to NEXT_PUBLIC_NEWSLETTER_ENDPOINT when configured
 * (e.g. a Mailchimp / ConvertKit / Formspree endpoint). Without one, it hands
 * off to the existing Radiantly Alive newsletter page, so the form never
 * pretends to subscribe someone.
 */
export function NewsletterForm() {
  const id = useId()
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const email = new FormData(form).get('email')

    if (!ENDPOINT) {
      window.open(`${SOURCE_ORIGIN}/newsletter-subscribe`, '_blank', 'noopener,noreferrer')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error(String(res.status))
      setStatus('done')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate={false}>
      <label htmlFor={id} className="sr-only">
        Email address
      </label>
      <div className="flex items-center gap-3 border-b border-cream/40 focus-within:border-saffron">
        <input
          id={id}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Your email address"
          className="type-body min-h-13 w-full bg-transparent text-cream placeholder:text-cream/60 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="type-button shrink-0 py-3 text-cream underline decoration-cream/40 underline-offset-4 transition-colors hover:decoration-cream disabled:opacity-50"
        >
          Sign up
        </button>
      </div>
      <p className="type-small mt-3 text-mist empty:hidden" role="status" aria-live="polite">
        {status === 'done' && 'Thank you. See you in your inbox, and on the mat.'}
        {status === 'error' && 'Something went wrong. Please try again in a moment.'}
      </p>
      <p className="type-small mt-2 text-center text-mist/80">
        {!ENDPOINT && 'Opens our sign-up page to confirm. '}Unsubscribe any time. See our{' '}
        <Link href="/radiantly-alive-privacy-policy" className="underline underline-offset-4 hover:text-cream">
          privacy policy
        </Link>
        .
      </p>
    </form>
  )
}
