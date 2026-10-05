/**
 * Shared constants. Business facts live in src/data/site.ts and navigation in
 * src/data/navigation.ts; this module re-exports them for convenience.
 */
import { INTEGRATIONS } from '@/data/site'

export { SITE, SOCIAL, SOURCE_ORIGIN, INTEGRATIONS, type SocialIcon } from '@/data/site'

/** Named destinations used by CTAs across the site. */
export const EXTERNAL = {
  classBooking: '/classes#schedule',
  workshopBooking: '/studio-workshops-events-ubud#schedule',
  shortTrainings: '/short-trainings-overview',
  onlineTrial: INTEGRATIONS.onlineSignUp,
  onlineEvents: '/online-events',
  healingsBooking: '/healing-studio',
  retreatApply: '/wellness-retreat-bali',
  shalaRental: '/shala-rental',
  leadershipPath: '/ra-movement-academy',
  careers: '/careers',
  newsletter: '/newsletter-subscribe',
  privacy: '/radiantly-alive-privacy-policy',
  manifestoVideoId: INTEGRATIONS.manifestoVideoId,
} as const
