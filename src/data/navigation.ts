/**
 * Site navigation, mirroring radiantlyalive.com's header folders exactly
 * (labels, order, nesting and URLs; see SITE_INVENTORY.md, "Navigation").
 * The mega menu adds an intro and a feature image per folder, using copy
 * from the source pages.
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
  label: string
  /** The source folder URL (redirects to the folder's first page). */
  href: string
  intro: { eyebrow: string; title: string; text: string }
  feature: { image: MediaKey; title: string; text: string; cta: { label: string; href: string } }
  links: NavLink[]
}

export const MAIN_NAV: NavGroup[] = [
  {
    id: 'trainings',
    label: 'Yoga Teacher Trainings',
    href: '/ytt',
    intro: {
      eyebrow: 'Yoga Teacher Training · Est. 2010',
      title: 'Your teacher training. In the place that changes everything.',
      text: 'Three programs rooted in 15 years of transformational practice in Ubud. One community.',
    },
    feature: {
      image: 'graduationWhite',
      title: 'Not sure which training is right for you?',
      text: 'Compare the programs side by side and choose the path that fits your life.',
      cta: { label: 'Start Here', href: '/yoga-teacher-training-2026-1' },
    },
    links: [
      { label: 'Start Here', href: '/yoga-teacher-training-2026-1', description: 'Find your path and compare the trainings' },
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
    label: 'Ubud Studio',
    href: '/ubud-studio',
    intro: {
      eyebrow: 'Our Bali Studio',
      title: 'Your Yoga Home',
      text: 'At the center of Ubud, our studio is more than a space, it’s the soul of Radiantly Alive.',
    },
    feature: {
      image: 'shalaJungle',
      title: 'Book Your Class',
      text: 'Schedules are published the week before. Or come to the studio and book directly with our reception staff.',
      cta: { label: 'Class Schedule', href: '/classes' },
    },
    links: [
      { label: 'Class Schedule', href: '/classes', description: 'Daily classes, passes and class descriptions' },
      { label: 'Studio Workshops & Events | Ubud', href: '/studio-workshops-events-ubud', description: 'Workshops, sound journeys, ceremonies' },
      { label: 'Short Trainings', href: '/short-trainings-overview', description: 'Immersions with visiting teachers' },
      { label: 'Studio Healings', href: '/healing-studio', description: 'Physical, emotional and spiritual healing' },
      { label: 'Our Teachers', href: '/our-teachers', description: 'Meet the teachers of the Ubud studio' },
      { label: 'Shala Rental', href: '/shala-rental', description: 'Five shalas for your retreat or training' },
    ],
  },
  {
    id: 'retreats',
    label: 'Retreats & Events',
    href: '/european-events',
    intro: {
      eyebrow: 'Bali Retreats',
      title: 'Take time to nourish yourself',
      text: 'A flexible retreat designed just for you, where you can curate your own experience and truly recharge.',
    },
    feature: {
      image: 'templePurification',
      title: 'Me-Time. My Way.',
      text: 'Wellness Retreat in Bali',
      cta: { label: 'Read more', href: '/wellness-retreat-bali' },
    },
    links: [{ label: 'Bali Retreats', href: '/retreats', description: 'Me-Time. My Way. Wellness Retreat in Bali' }],
  },
  {
    id: 'online',
    label: 'Online Studio',
    href: '/online-studio',
    intro: {
      eyebrow: 'RA Online Studios',
      title: 'Practice Wherever You Are',
      text: 'Yoga, movement, and mindfulness with a global community by your side.',
    },
    feature: {
      image: 'onlineHomePractice',
      title: 'Start your 14-day FREE trial',
      text: 'Practice anytime, anywhere, with a global community by your side.',
      cta: { label: 'Online Studio & Community', href: '/ra-online-monthly-membership' },
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
    href: '/ra-movement',
    intro: {
      eyebrow: 'RA Movement',
      title: 'A global community of committed, inspired individuals',
      text: 'Graduates teaching worldwide, the RA family and the ways to grow with it.',
    },
    feature: {
      image: 'communityJoy',
      title: 'RA Teachers Worldwide',
      text: 'Find a Radiantly Alive teacher near you.',
      cta: { label: 'Explore the directory', href: '/radiantly-alive-teachers' },
    },
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
export const HEADER_CTA = { label: 'Book a Class', href: '/classes' } as const

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
