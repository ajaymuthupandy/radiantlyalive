import { SOURCE_ORIGIN } from '@/data/site'
import { ROUTE_REDIRECTS } from './redirects'

export { ROUTE_REDIRECTS }

/**
 * Pages rebuilt in this app, at their radiantlyalive.com paths. Any other
 * source path (store products, healing and short-training detail pages,
 * forms) still lives on the source site, so links to it are sent there.
 */
export const LOCAL_ROUTES = [
  '/',
  '/contact',
  // Yoga Teacher Trainings
  '/yoga-teacher-training-2026-1',
  '/200hr-yoga-teacher-training-ra-vinyasa-ubud',
  '/300hr-yoga-teacher-training-ra-vinyasa-ubud',
  '/ytt-hybrid',
  '/200h-ytt-ra-vinyasa-hybrid-bali-eng',
  '/200h-ytt-ra-vinyasa-hybrid-morocco-eng',
  '/200hour-yoga-teacher-training-spanish-1',
  '/200hour-yoga-teacher-training-spanish',
  '/ra-movement-academy',
  // Ubud Studio
  '/classes',
  '/studio-workshops-events-ubud',
  '/short-trainings-overview',
  '/healing-studio',
  '/our-teachers',
  '/shala-rental',
  // Retreats & Events
  '/retreats',
  '/wellness-retreat-bali',
  // Online Studio
  '/ra-online-monthly-membership',
  '/online-events',
  '/bali-healings-online',
  // RA Movement
  '/radiantly-alive-teachers',
  '/referral-program',
  '/ytt-scholarship-waitlist',
  '/newsletter-subscribe',
  '/careers',
  // Legal
  '/radiantly-alive-privacy-policy',
] as const

const local = new Set<string>([...LOCAL_ROUTES, ...ROUTE_REDIRECTS.map((r) => r.source)])

/**
 * Resolves a source-site href to where it lives now: rebuilt paths stay
 * internal, everything else points at radiantlyalive.com.
 */
export function resolveHref(href: string): string {
  if (/^(mailto:|tel:|#)/.test(href)) return href

  let url: URL
  try {
    url = new URL(href, SOURCE_ORIGIN)
  } catch {
    return href
  }
  if (url.origin !== SOURCE_ORIGIN && url.hostname !== 'radiantlyalive.com') return href

  const path = decodeURI(url.pathname).replace(/\/$/, '') || '/'
  if (local.has(path)) return `${path}${url.search}${url.hash}`
  return `${SOURCE_ORIGIN}${url.pathname}${url.search}${url.hash}`
}

export function isExternalHref(href: string) {
  return /^(https?:|mailto:|tel:)/.test(href)
}

/** Whether `href` is the current page or one of its ancestors in the nav. */
export function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}
