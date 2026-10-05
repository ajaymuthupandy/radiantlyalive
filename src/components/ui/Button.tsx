import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
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
  /** Hide the trailing arrow. */
  plain?: boolean
  'aria-label'?: string
}

const styles: Record<Variant, Record<Tone, string>> = {
  primary: {
    light: 'border border-plum bg-plum text-cream hover:border-crimson hover:bg-crimson',
    dark: 'border border-saffron bg-saffron text-plum hover:border-cream hover:bg-cream',
  },
  secondary: {
    light: 'border border-plum/30 text-ink hover:border-plum hover:bg-plum hover:text-cream',
    dark: 'border border-cream/45 text-cream hover:border-cream hover:bg-cream hover:text-plum',
  },
  link: {
    light: 'text-ink hover:text-crimson',
    dark: 'text-cream hover:text-saffron',
  },
}

/** @deprecated use isExternalHref from '@/lib/routes' */
export const isExternal = isExternalHref

/** The one button system: primary, secondary or arrow link. External URLs open in a new tab with an up-right arrow. */
export function Button({ href: rawHref, children, variant = 'primary', tone = 'light', className, plain, ...rest }: ButtonProps) {
  const href = resolveHref(rawHref)
  const external = isExternalHref(href)
  const Icon = external ? ArrowUpRight : ArrowRight
  const isLink = variant === 'link'

  const classes = cn(
    'group/btn type-button inline-flex items-center gap-2.5 transition-colors duration-300',
    isLink ? 'min-h-11 py-2' : 'min-h-12 justify-center rounded-control px-6 py-3 text-center',
    styles[variant][tone],
    className,
  )

  const content = (
    <>
      <span className={cn(isLink && 'bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 ease-[var(--ease-out-expo)] group-hover/btn:bg-[length:100%_1px]')}>
        {children}
      </span>
      {!plain && (
        <Icon
          aria-hidden
          className="size-4 shrink-0 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover/btn:translate-x-1"
          strokeWidth={1.75}
        />
      )}
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
