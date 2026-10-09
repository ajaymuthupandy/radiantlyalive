'use client'

import { useId, useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
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
    <form onSubmit={onSubmit} className="w-full" noValidate={false}>
      <label htmlFor={id} className="type-eyebrow text-saffron">
        Join the community
      </label>
      <p className="type-small mt-4 text-mist">
        Get insider updates, expert tips, and early access to classes and retreats.
      </p>
      <div className="mt-5 flex items-center border-b border-cream/30 focus-within:border-saffron">
        <input
          id={id}
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Email Address"
          className="type-body min-h-12 w-full bg-transparent text-cream placeholder:text-cream/70 focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className="grid size-12 shrink-0 place-items-center rounded-full text-cream transition-colors hover:bg-cream/10 disabled:opacity-50"
        >
          <ArrowRight className="size-5" strokeWidth={1.5} aria-hidden />
          <span className="sr-only">Sign Up</span>
        </button>
      </div>
      <p className="type-meta mt-3 text-mist empty:hidden" role="status" aria-live="polite">
        {status === 'done' && 'We’re just getting started – see you in your inbox (and on the mat)!'}
        {status === 'error' && 'Something went wrong. Please try again in a moment.'}
        {status === 'idle' && !ENDPOINT && 'Opens our newsletter sign-up page to confirm.'}
      </p>
      <p className="type-meta mt-2 text-mist/80">
        By signing up, you agree to receive emails from Radiantly Alive. You can unsubscribe at any time. Read more in our{' '}
        <Link href="/radiantly-alive-privacy-policy" className="underline underline-offset-4 hover:text-cream">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  )
}
