/**
 * Homepage copy. Facts come from radiantlyalive.com (homepage, /shala-rental,
 * /ra-movement-academy, the training pages); phrasing is kept plain and
 * specific. Each fact has one home on the page: stats live in the trainings
 * block, the tagline in the closing invitation, the film in the hero.
 * Layout lives in components/home/.
 */
import type { MediaKey } from '@/data/media'
import { INTEGRATIONS, SITE, yearsRunning } from '@/data/site'

export const hero = {
  heading: 'A global yoga community born in Bali.',
  lead: 'Daily classes in Ubud, Yoga Alliance teacher trainings in Bali and beyond, and an online studio for the days you can’t be here.',
  cta: { label: 'Explore teacher trainings', href: '/yoga-teacher-training-2026-1' },
} as const

export const studioHome = {
  heading: 'Your yoga home in Ubud',
  body: `Five shalas on ${SITE.address.street}, in the centre of Ubud. Classes run from morning to evening, with workshops, short trainings, retreats and healings in between.`,
  image: 'teacherAssisting' satisfies MediaKey,
  /** The six tiles of the source "Your Yoga Home" section, in order, with their own photographs. */
  offerings: [
    { label: 'Class schedule', text: 'Daily classes, passes and class descriptions', href: '/classes', image: 'trainingArtOfTeaching' },
    { label: 'Workshops & events', text: 'Workshops, sound journeys and ceremonies', href: '/studio-workshops-events-ubud', image: 'homeTileWorkshops' },
    { label: 'Short trainings', text: 'Immersions with visiting teachers', href: '/short-trainings-overview', image: 'trainingAssist' },
    { label: 'Retreats', text: 'Me-time, your way: a wellness retreat in Bali', href: '/retreats', image: 'templePurification' },
    { label: 'Shala rental', text: 'Five shalas for your retreat or training', href: '/shala-rental', image: 'homeTileShalaRental' },
    { label: 'Healings', text: 'Physical, emotional and spiritual healing', href: '/healing-studio', image: 'homeTileHealings' },
  ] satisfies { label: string; text: string; href: string; image: MediaKey }[],
} as const

export const teacherTrainings = {
  heading: `Teacher trainings, since ${SITE.foundingYear}`,
  paragraphs: [
    'Our 200-hour and 300-hour Yoga Alliance trainings run in Ubud, with hybrid formats in Bali and Morocco, taught in English or Spanish.',
    'They suit people starting out as much as teachers who want to go deeper, and they are led by the same teachers you meet in daily class.',
  ],
  image: 'ceremonyCircle' satisfies MediaKey,
  programs: [
    { label: '200H Level 1', href: '/200hr-yoga-teacher-training-ra-vinyasa-ubud', meta: 'Yoga Alliance RYT-200' },
    { label: '300H Level 2 (Advanced)', href: '/300hr-yoga-teacher-training-ra-vinyasa-ubud', meta: 'Yoga Alliance E-RYT 500' },
    { label: '200H in Spanish', href: '/200hour-yoga-teacher-training-spanish', meta: 'Yoga Alliance RYT-200' },
  ],
  /** From /yoga-teacher-training-2026-1. Shown here only, where they back up a decision. */
  proof: [
    { value: '900+', label: 'graduates' },
    { value: '80+', label: 'countries where they now teach' },
    { value: '4.9/5', label: 'on Yoga Alliance, from 150+ reviews' },
  ],
  badges: ['badgeRys200', 'badgeRys300', 'badgeYacep'] satisfies MediaKey[],
  reviewsHref: INTEGRATIONS.yogaAllianceReviews,
  cta: { label: 'Compare the trainings', href: '/yoga-teacher-training-2026-1' },
} as const

export const community = {
  image: 'cohortPanorama' satisfies MediaKey,
} as const

export const online = {
  heading: 'Practice wherever you are',
  body: 'Classes from our teachers in Ubud, to follow whenever it suits you: asana, meditation, mobility and sadhana. The first 14 days are free.',
  images: ['onlineHomePractice', 'onlineHomeMeditation', 'onlineHomePortrait'] satisfies MediaKey[],
  cta: { label: 'Start the free trial', href: INTEGRATIONS.onlineSignUp },
  secondary: { label: 'About the membership', href: '/ra-online-monthly-membership' },
} as const

export const teachersSection = {
  heading: 'Our teachers',
  cta: { label: 'Meet all our teachers', href: '/our-teachers' },
} as const

export const movement = {
  heading: 'The Movement and Leadership Path',
  paragraphs: [
    `What started in our Bali studio ${yearsRunning()} years ago has grown into a global Movement, carried by RA teachers, guides and leaders teaching in their own cities.`,
    'We collaborate, co-create, celebrate and support each other’s growth.',
  ],
  quote: '“Like the lotus, we too have the ability to rise from the mud, bloom out of the darkness, and radiate into the world.”',
  stages: [
    { name: 'Seed', theme: 'Awakening', text: 'Rising from the role of student, awakening into the role of teacher.' },
    { name: 'Bud', theme: 'Emergence', text: 'Emerging from simply sharing, maturing into lasting impact.' },
    { name: 'Blossom', theme: 'Expansion', text: 'Expanding and contracting, guiding others with presence.' },
    { name: 'Pod', theme: 'Transmission', text: 'Seeding, spreading, growing the Movement, beyond your self.' },
  ],
  image: 'communityJoy' satisfies MediaKey,
  directory: {
    heading: 'RA teachers around the world',
    text: 'Many of the teachers we have trained in Bali now teach in their hometowns and further afield. The directory lists where to find them.',
  },
  ctas: [
    { label: 'Join the Leadership Path', href: '/ra-movement-academy' },
    { label: 'Find an RA teacher', href: '/radiantly-alive-teachers' },
  ],
} as const

export const reviews = {
  heading: 'What graduates say',
  links: [
    {
      label: 'Google reviews',
      href: 'https://www.google.com/maps/place/Radiantly+Alive/@-8.5093321,115.2670196,15z/data=!4m8!3m7!1s0x2dd23dc75d03fb4d:0x3161793f68388fb5!8m2!3d-8.5093321!4d115.2670196!9m1!1b1!16s%2Fg%2F1yh5t906l?entry=ttu',
      image: 'badgeGoogleReviews',
    },
    { label: 'Tripadvisor reviews', href: INTEGRATIONS.tripadvisor, image: 'badgeTripadvisor' },
    { label: 'Yoga Alliance reviews', href: INTEGRATIONS.yogaAllianceReviews, image: 'badgeRys200' },
  ] satisfies { label: string; href: string; image: MediaKey }[],
} as const

export const finalCta = {
  heading: SITE.tagline,
  text: 'Drop in for a class this week, or write to us about a training.',
  image: 'graduationDance' satisfies MediaKey,
  ctas: [
    { label: 'Book a class', href: '/classes' },
    { label: 'Write to us', href: '/contact', variant: 'link' as const },
  ],
} as const
