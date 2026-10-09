import type { Metadata } from 'next'
import Link from 'next/link'
import { LogoMark } from '@/components/brand/Logo'
import { Button } from '@/components/ui/Button'
import { MAIN_NAV } from '@/data/navigation'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <section aria-labelledby="nf-title" className="flex min-h-svh items-center bg-plum pt-28 pb-20 text-cream">
      <div className="container-x">
        <LogoMark className="size-12 text-saffron" />
        <p className="type-eyebrow mt-10 text-mist">Page not found (404)</p>
        <h1 id="nf-title" className="type-display-lg mt-6 max-w-[16ch] text-balance">
          This path leads <em>somewhere else.</em>
        </h1>
        <p className="type-lead mt-7 max-w-xl text-mist">
          The page you were looking for has moved or no longer exists. Take a breath, then choose where to go next.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/" tone="dark">
            Back to home
          </Button>
          <Button href="/contact" variant="secondary" tone="dark">
            Contact us
          </Button>
        </div>
        <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-2 border-t border-cream/15 pt-8">
          {MAIN_NAV.map((group) => (
            <li key={group.id}>
              <Link href={group.links[0].href} className="type-eyebrow inline-flex min-h-11 items-center text-mist hover:text-cream">
                {group.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
