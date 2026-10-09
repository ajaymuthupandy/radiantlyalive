'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { LogoMark } from '@/components/brand/Logo'

export default function ErrorBoundary({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <section aria-labelledby="error-title" className="flex min-h-svh items-center bg-plum pt-28 pb-20 text-cream">
      <div className="container-x">
        <LogoMark className="size-12 text-saffron" />
        <p className="type-eyebrow mt-10 text-mist">Something went wrong</p>
        <h1 id="error-title" className="type-display-lg mt-6 max-w-[16ch]">
          Let’s try that <em>again.</em>
        </h1>
        <p className="type-lead mt-7 max-w-xl text-mist">
          This page didn’t load as expected. It’s usually temporary.
          {error.digest && <span className="type-small mt-2 block">Reference: {error.digest}</span>}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => retry()}
            className="type-button inline-flex min-h-12 items-center rounded-control bg-saffron px-6 text-plum transition-colors hover:bg-cream"
          >
            Try again
          </button>
          <Link href="/" className="type-button inline-flex min-h-12 items-center rounded-control border border-cream/45 px-6 transition-colors hover:bg-cream hover:text-plum">
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}
