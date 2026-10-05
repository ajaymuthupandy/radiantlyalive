import Link from 'next/link'
import type { ComponentPropsWithoutRef } from 'react'
import { isExternalHref, resolveHref } from '@/lib/routes'

type SmartLinkProps = Omit<ComponentPropsWithoutRef<'a'>, 'href'> & { href: string }

/**
 * Text link that resolves source-site paths (see resolveHref): internal
 * routes use next/link, everything else opens in a new tab and says so to
 * screen readers.
 */
export function SmartLink({ href: rawHref, children, ...rest }: SmartLinkProps) {
  const href = resolveHref(rawHref)

  if (/^(mailto:|tel:)/.test(href)) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    )
  }

  if (isExternalHref(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    )
  }

  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  )
}
