import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { isExternalHref, resolveHref } from '@/lib/routes'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'link'
type Tone = 'light' | 'dark'

interface ButtonProps {
  href: string
  children: React.ReactNode
  variant?: Variant
  /** Surface the button sits on. */
  tone?: Tone
  className?: string
  /** Hide the external-link arrow. */
  plain?: boolean
  'aria-label'?: string
}

/**
 * One job per colour: saffron is the action, everything else stays quiet.
 * Primary is the same on every surface; secondary and link take the surface's text colour.
 */
const styles: Record<Variant, Record<Tone, string>> = {
  primary: {
    light: 'bg-saffron text-ink hover:bg-saffron-deep',
    dark: 'bg-saffron text-ink hover:bg-saffron-deep',
  },
  secondary: {
    light: 'border border-current/40 text-ink hover:border-current',
    dark: 'border border-current/40 text-cream hover:border-current',
  },
  link: {
    light: 'text-ink',
    dark: 'text-cream',
  },
}

/** @deprecated use isExternalHref from '@/lib/routes' */
export const isExternal = isExternalHref

/** The one button system: primary, secondary or text link. Only links that leave the site carry an arrow (↗). */
export function Button({ href: rawHref, children, variant = 'primary', tone = 'light', className, plain, ...rest }: ButtonProps) {
  const href = resolveHref(rawHref)
  const external = isExternalHref(href)
  const isLink = variant === 'link'

  const classes = cn(
    'type-button inline-flex items-center gap-2 transition-colors duration-300',
    isLink
      ? 'min-h-11 py-2 underline decoration-current/35 underline-offset-[0.35em] hover:decoration-current'
      : 'min-h-12 justify-center rounded-control px-6 py-3 text-center',
    styles[variant][tone],
    className,
  )

  const content = (
    <>
      {children}
      {external && !plain && <ArrowUpRight aria-hidden className="size-4 shrink-0" strokeWidth={1.75} />}
    </>
  )

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {content}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    )
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  )
}
