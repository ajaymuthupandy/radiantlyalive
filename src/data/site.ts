/**
 * Business information and third-party integrations, verbatim from
 * radiantlyalive.com (see SITE_INVENTORY.md). Do not add unverified details.
 */
import type { MediaKey } from './media'

function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  return 'http://localhost:3000'
}

/** The live site. Pages not rebuilt here (store, detail pages, forms) link back to it. */
export const SOURCE_ORIGIN = 'https://www.radiantlyalive.com'

export const SITE = {
  name: 'Radiantly Alive',
  legalName: 'Radiantly Alive Yoga Studio',
  url: resolveSiteUrl(),
  /** Footer signature on the source site. */
  tagline: 'Come for Yoga. Stay for Family.',
  positioning: 'A global yoga community born in Bali.',
  description:
    'A global yoga community born in Bali. Deepen your practice with world-class teachers, transformative trainings and meaningful connections – in Bali, across Europe, or online.',
  email: 'info@radiantlyalive.com',
  yttEmail: 'ra.ytt@radiantlyalive.com',
  /** Published on /referral-program and the Spanish training pages. */
  whatsapp: { display: '+62 821 45210069', href: 'https://api.whatsapp.com/send?phone=6282145210069' },
  foundingYear: 2010,
  address: {
    street: 'Jl. Jembawan No. 3',
    locality: 'Ubud',
    region: 'Bali',
    country: 'ID',
    countryName: 'Indonesia',
  },
  mapsUrl: 'https://maps.app.goo.gl/mk6K3mDuQ1WsNA2LA',
  ogImage: '/assets/og/og-default.jpg',
} as const

/** Years the studio has been teaching, counted from the founding year so copy never goes stale. */
export const yearsRunning = () => new Date().getFullYear() - SITE.foundingYear

export const SOCIAL = [
  { label: 'Instagram', href: 'https://www.instagram.com/radiantlyaliveyoga/', icon: 'instagram' },
  { label: 'Facebook', href: 'https://www.facebook.com/RadiantlyAliveYoga', icon: 'facebook' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCCkYEQF-V40rg_DmKSuKBxg', icon: 'youtube' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@radiantlyaliveyoga', icon: 'tiktok' },
] as const

export type SocialIcon = (typeof SOCIAL)[number]['icon']

/**
 * Promotional bar above the header. Copy and link mirror the source site's
 * Squarespace announcement bar. Change `id` when the message changes so
 * visitors who dismissed the previous one see the new one.
 */
export const ANNOUNCEMENT = {
  id: 'nov-2026-ytt',
  enabled: true,
  message: 'November 200HR and 300HR teacher trainings: limited places left.',
  link: { label: 'Apply', href: '/yoga-teacher-training-2026-1' },
} as const

/**
 * Hero film. The source's only motion asset is the "Welcome to Radiantly
 * Alive" film on YouTube (also embedded on the source homepage).
 *
 * - Drop an encoded copy into public/videos/hero/ (see README, "Hero video")
 *   and it is used automatically as a native <video>.
 * - Until then, desktop visitors get the YouTube film as a muted background
 *   loop, loaded after the page is idle. Mobile, Save-Data and
 *   reduced-motion visitors get the poster image.
 */
export const HERO_VIDEO = {
  youtubeId: '8iAwM_JQs68',
  title: 'Welcome to Radiantly Alive',
  /** Skip the title card so the loop opens on footage. */
  youtubeStart: 6,
  /** Local files, checked at build time; first match per slot wins. */
  local: {
    desktop: ['/videos/hero/radiantly-alive-hero-1080.webm', '/videos/hero/radiantly-alive-hero-1080.mp4'],
    mobile: ['/videos/hero/radiantly-alive-hero-720.webm', '/videos/hero/radiantly-alive-hero-720.mp4'],
  },
  poster: 'heroJungleShala' satisfies MediaKey,
} as const

/** Booking, commerce and community platforms the source site hands off to. */
export const INTEGRATIONS = {
  /** Ribbon (Momence) weekly class schedule, as embedded on /classes. */
  ribbonSchedule: {
    src: 'https://withribbon.com/v2.0/weekly-view-plugin.js',
    host: '5617',
    token: '9022b90bb5',
    location: 'Radiantly Alive Ubud',
  },
  /** Momence host-schedule widget, as embedded on /studio-workshops-events-ubud. */
  momenceWorkshops: {
    src: 'https://momence.com/plugin/host-schedule/host-schedule.js',
    hostId: '5617',
    sessionType: 'workshop',
  },
  momenceStore: 'https://momence.com/Radiantly-Alive',
  onlineSignUp: 'https://radiantly-alive-online-community.mn.co/sign_up',
  careersForm:
    'https://docs.google.com/forms/d/e/1FAIpQLSd1SZhcI7xaheQWEo4H2bK561DKtXM1UuOtqYq8430PZAMlXg/viewform',
  teacherDirectoryForm: `${SOURCE_ORIGIN}/ra-teacher-directory-form`,
  yogaAllianceReviews: 'https://r.yogaalliance.org/SchoolProfileReviews?sid=9419',
  tripadvisor:
    'https://www.tripadvisor.com/Attraction_Review-g297701-d3335148-Reviews-Radiantly_Alive_Yoga_Studio-Ubud_Gianyar_Regency_Bali.html',
  manifestoVideoId: '8iAwM_JQs68',
} as const
