/**
 * Homepage copy, verbatim from https://www.radiantlyalive.com/ (and, for the
 * Teachers and RA Movement sections, from /our-teachers, /ra-movement-academy
 * and /radiantly-alive-teachers). Layout lives in components/home/.
 */
import type { MediaKey } from '@/data/media'
import { INTEGRATIONS } from '@/data/site'

export const studioHome = {
  eyebrow: 'Our Bali Studio',
  heading: 'Your Yoga Home',
  subheading: 'Explore our offerings and find your perfect practice',
  body: 'At the center of Ubud, our studio is more than a space, it’s the soul of Radiantly Alive. Practice, connect, and grow in an environment designed to support every step of your journey.',
  image: 'teacherAssisting' satisfies MediaKey,
  /** The six tiles of the source "Your Yoga Home" section, in order, with their own photographs. */
  offerings: [
    { label: 'Class Schedule', href: '/classes', image: 'trainingArtOfTeaching' },
    { label: 'Workshops & Events', href: '/studio-workshops-events-ubud', image: 'homeTileWorkshops' },
    { label: 'Short Trainings', href: '/short-trainings-overview', image: 'trainingAssist' },
    { label: 'Retreats', href: '/retreats', image: 'templePurification' },
    { label: 'Shala Rental', href: '/shala-rental', image: 'homeTileShalaRental' },
    { label: 'Healings', href: '/healing-studio', image: 'homeTileHealings' },
  ] satisfies { label: string; href: string; image: MediaKey }[],
} as const

export const teacherTrainings = {
  eyebrow: 'Yoga Teacher Trainings',
  heading: 'An Experience of a Lifetime',
  paragraphs: [
    'Step into your next chapter, whether you’re just starting out or deepening your path.',
    'Our immersive trainings in Ubud, Bali and across Europe are designed to build your skills, boost your confidence, and transform your understanding of yoga.',
    'Taught in English or Spanish, these programs are open to both aspiring and experienced teachers ready to grow - personally and professionally.',
  ],
  image: 'ceremonyCircle' satisfies MediaKey,
  programs: [
    { label: '200H Level 1 Training', href: '/200hr-yoga-teacher-training-ra-vinyasa-ubud', meta: '200H • Yoga Alliance RYT-200' },
    { label: '300H Level 2 (Advanced) Training', href: '/300hr-yoga-teacher-training-ra-vinyasa-ubud', meta: '300H • Yoga Alliance E-RYT 500' },
    { label: '200H Spanish Training', href: '/200hour-yoga-teacher-training-spanish', meta: '200H • Yoga Alliance RYT-200' },
  ],
  /** From /yoga-teacher-training-2026-1 ("900+ graduates · 80+ countries · 4.9/5 Yoga Alliance · Est. 2010"). */
  proof: [
    { value: '900+', label: 'graduates worldwide' },
    { value: '80+', label: 'countries where RA teachers practice' },
    { value: '4.9/5', label: 'Yoga Alliance rating, 150+ reviews' },
  ],
  badges: ['badgeRys200', 'badgeRys300', 'badgeYacep'] satisfies MediaKey[],
  reviewsHref: INTEGRATIONS.yogaAllianceReviews,
  cta: { label: 'Find your path', href: '/yoga-teacher-training-2026-1' },
} as const

export const community = {
  statement: 'Come for Yoga - Feel Radiantly Alive',
  image: 'cohortPanorama' satisfies MediaKey,
  stayConnected: {
    eyebrow: 'Our Community',
    heading: 'Stay Connected',
    body: 'Follow along for class updates, training news, retreat moments and daily inspiration from our Ubud shala and global community.',
    image: 'communityEmbrace' satisfies MediaKey,
  },
} as const

export const online = {
  eyebrow: 'Online Studio',
  heading: 'Practice Wherever You Are',
  body: 'Join our online studio for yoga, movement, and mindfulness designed to support your growth – physically, mentally, and emotionally. Practice anytime, anywhere, with a global community by your side.',
  images: ['onlineHomePractice', 'onlineHomeMeditation', 'onlineHomePortrait'] satisfies MediaKey[],
  cta: { label: 'Start your 14-day FREE trial', href: INTEGRATIONS.onlineSignUp },
  secondary: { label: 'Online Studio & Community', href: '/ra-online-monthly-membership' },
} as const

export const teachersSection = {
  eyebrow: 'Radiantly Alive',
  heading: 'Our Teachers',
  subheading: 'Get to know us',
  cta: { label: 'Meet all our teachers', href: '/our-teachers' },
} as const

export const movement = {
  eyebrow: 'RA Movement',
  heading: 'Radiantly Alive Movement & Leadership Path',
  paragraphs: [
    'What started in our Bali studio over 13 years ago is now evolving into something greater, a global Movement fueled by RA teachers, guides, and leaders like you, who carry the yoga light into every corner of the world.',
    'We will collaborate, co-create, celebrate and support each other’s growth.',
  ],
  quote: '“Like the LOTUS, we too have the ability to rise from the mud, bloom out of the darkness, and radiate into the world.”',
  stages: [
    { name: 'Seed', theme: 'Awakening', text: 'Rising from the role of student, awakening into the role of teacher.' },
    { name: 'Bud', theme: 'Emergence', text: 'Emerging from simply sharing, maturing into lasting impact.' },
    { name: 'Blossom', theme: 'Expansion', text: 'Expanding and contracting, guiding others with presence.' },
    { name: 'Pod', theme: 'Transmission', text: 'Seeding, spreading, growing the Movement, beyond your self.' },
  ],
  image: 'communityJoy' satisfies MediaKey,
  directory: {
    heading: 'RA Teachers Around The World',
    text: 'It’s been an incredible privilege to train these remarkable teachers at our Bali studio. Many are now sharing their gifts in their hometowns and across the globe, spreading the essence of yoga far and wide.',
  },
  ctas: [
    { label: 'Join our Leadership Path', href: '/ra-movement-academy' },
    { label: 'RA Teachers Worldwide', href: '/radiantly-alive-teachers' },
  ],
} as const

export const reviews = {
  eyebrow: 'What graduates say',
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
  heading: 'Come for Yoga. *Stay for Family.*',
  text: 'Join the Community. Get insider updates, expert tips, and early access to classes and retreats.',
  image: 'graduationDance' satisfies MediaKey,
  ctas: [
    { label: 'Find your path', href: '/yoga-teacher-training-2026-1' },
    { label: 'Class Schedule', href: '/classes' },
  ],
} as const
