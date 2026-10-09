/**
 * Site navigation, mirroring radiantlyalive.com's header folders exactly
 * (labels, order, nesting and URLs; see SITE_INVENTORY.md, "Navigation").
 * The desktop header shows four of them as real links; each opens a short
 * list of destinations plus one featured item.
 */
import type { MediaKey } from './media'

export interface NavLink {
  label: string
  href: string
  /** One-line context shown in the mega menu (from the source page). */
  description?: string
  /** BCP-47 language of the destination page, when not English. */
  lang?: string
  children?: NavLink[]
}

export interface NavGroup {
  id: string
  /** Short label used in the header and mobile menu. */
  label: string
  /** The group's hub page: the top-level header item links here. */
  href: string
  /** Shown in the desktop header. Groups left out live in the footer and mobile menu. */
  inHeader: boolean
  /** One short featured destination beside the link list. */
  feature?: { image: MediaKey; title: string; cta: { label: string; href: string } }
  links: NavLink[]
}

export const MAIN_NAV: NavGroup[] = [
  {
    id: 'trainings',
    label: 'Trainings',
    href: '/yoga-teacher-training-2026-1',
    inHeader: true,
    feature: {
      image: 'graduationWhite',
      title: 'Not sure which training fits?',
      cta: { label: 'Compare the trainings', href: '/yoga-teacher-training-2026-1' },
    },
    links: [
      { label: 'Start here', href: '/yoga-teacher-training-2026-1', description: 'Compare the trainings side by side' },
      { label: '200hr Bali', href: '/200hr-yoga-teacher-training-ra-vinyasa-ubud', description: 'Our flagship 24-day immersion in Ubud' },
      { label: '300hr Bali', href: '/300hr-yoga-teacher-training-ra-vinyasa-ubud', description: 'Advanced 4-week immersion for certified teachers' },
      {
        label: 'Hybrid Training',
        href: '/ytt-hybrid',
        description: 'Online study + 10 days in-person immersion',
        children: [
          { label: 'Bali Hybrid', href: '/200h-ytt-ra-vinyasa-hybrid-bali-eng' },
          { label: 'Morocco Hybrid', href: '/200h-ytt-ra-vinyasa-hybrid-morocco-eng' },
        ],
      },
      {
        label: 'En Español',
        href: '/200hour-yoga-teacher-training-spanish-1',
        description: 'Profesorado de yoga 200 horas en español',
        lang: 'es',
        children: [
          { label: '200hr Inmersión Bali', href: '/200hour-yoga-teacher-training-spanish-1', lang: 'es' },
          { label: '200hr Híbrido Bali', href: '/200hour-yoga-teacher-training-spanish', lang: 'es' },
        ],
      },
      { label: 'Leadership Path', href: '/ra-movement-academy', description: 'Seed, Bud, Blossom, Pod: grow with RA after graduation' },
    ],
  },
  {
    id: 'studio',
    label: 'Studio',
    href: '/classes',
    inHeader: true,
    feature: {
      image: 'shalaJungle',
      title: 'Book a class',
      cta: { label: 'See this week’s schedule', href: '/classes' },
    },
    links: [
      { label: 'Class Schedule', href: '/classes', description: 'Daily classes, passes and class descriptions' },
      { label: 'Workshops & Events', href: '/studio-workshops-events-ubud', description: 'Workshops, sound journeys, ceremonies' },
      { label: 'Short Trainings', href: '/short-trainings-overview', description: 'Immersions with visiting teachers' },
      { label: 'Studio Healings', href: '/healing-studio', description: 'Physical, emotional and spiritual healing' },
      { label: 'Our Teachers', href: '/our-teachers', description: 'Meet the teachers of the Ubud studio' },
      { label: 'Shala Rental', href: '/shala-rental', description: 'Five shalas for your retreat or training' },
    ],
  },
  {
    id: 'retreats',
    label: 'Retreats',
    href: '/retreats',
    inHeader: true,
    links: [{ label: 'Bali Retreats', href: '/retreats', description: 'Me-Time. My Way. Wellness Retreat in Bali' }],
  },
  {
    id: 'online',
    label: 'Online',
    href: '/ra-online-monthly-membership',
    inHeader: true,
    feature: {
      image: 'onlineHomePractice',
      title: 'Try the online studio free for 14 days',
      cta: { label: 'About the membership', href: '/ra-online-monthly-membership' },
    },
    links: [
      { label: 'Online Studio & Community', href: '/ra-online-monthly-membership', description: 'Asana, meditation, mobility and sadhana' },
      { label: 'Online Events & Trainings', href: '/online-events', description: 'Yin, Reiki and Wise Women’s trainings' },
      { label: 'Online Healings', href: '/bali-healings-online', description: 'Be healed wherever you are' },
    ],
  },
  {
    id: 'movement',
    label: 'RA Movement',
    href: '/radiantly-alive-teachers',
    inHeader: false,
    links: [
      { label: 'RA Teachers Worldwide', href: '/radiantly-alive-teachers', description: 'Graduates teaching around the world' },
      { label: 'Referral Program', href: '/referral-program', description: 'Share the experience, earn rewards' },
      { label: 'YTT Scholarship Waitlist', href: '/ytt-scholarship-waitlist', description: 'Be first to apply when scholarships open' },
      { label: 'Subscribe to our Newsletter', href: '/newsletter-subscribe', description: 'Yoga wisdom, community & Bali stories' },
      { label: 'Careers', href: '/careers', description: 'Join our radiant team in Ubud' },
    ],
  },
]

/** Header call to action (the source's most-linked conversion page). */
export const HEADER_CTA = { label: 'Book a class', href: '/classes' } as const

/** Quiet text link beside the header CTA. */
export const HEADER_SCHEDULE = { label: 'Schedule', href: '/classes' } as const

/** Footer columns, as published on the source footer. */
export const FOOTER_NAV: { title: string; links: NavLink[] }[] = [
  {
    title: 'Ubud Studio',
    links: [
      { label: 'Class Schedule', href: '/classes' },
      { label: 'Workshops & Events', href: '/studio-workshops-events-ubud' },
      { label: 'Healings', href: '/healing-studio' },
      { label: 'Our Teachers', href: '/our-teachers' },
      { label: 'Shala Rental', href: '/shala-rental' },
      { label: 'Careers', href: '/careers' },
    ],
  },
  {
    title: 'Grow With Us',
    links: [
      { label: 'Yoga Teacher Training', href: '/yoga-teacher-training-2026-1' },
      { label: 'Short Training', href: '/short-trainings-overview' },
      { label: 'Retreats', href: '/retreats' },
      { label: 'Online Studio', href: '/ra-online-monthly-membership' },
      { label: 'Leadership Path', href: '/ra-movement-academy' },
    ],
  },
]

export const LEGAL_NAV: NavLink[] = [
  { label: 'Privacy Policy', href: '/radiantly-alive-privacy-policy' },
  { label: 'Terms of Service', href: '/terms-of-service-studio' },
  { label: 'Contact', href: '/contact' },
]

/** Flattens a nav tree, e.g. for active-state matching. */
export function flattenNav(links: NavLink[]): NavLink[] {
  return links.flatMap((link) => [link, ...flattenNav(link.children ?? [])])
}
