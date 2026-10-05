// No imports: this module is also loaded by next.config.ts.

/**
 * Source-site aliases and folder URLs, kept working as permanent redirects
 * (applied in next.config.ts). Folder targets match the source's own redirects.
 */
export const ROUTE_REDIRECTS: { source: string; destination: string }[] = [
  { source: '/ytt', destination: '/yoga-teacher-training-2026-1' },
  { source: '/ubud-studio', destination: '/classes' },
  { source: '/european-events', destination: '/retreats' },
  { source: '/online-studio', destination: '/ra-online-monthly-membership' },
  { source: '/ra-movement', destination: '/radiantly-alive-teachers' },
  { source: '/200h-ytt-ra-vinyasa-hybrid', destination: '/ytt-hybrid' },
  // Routes used by the previous version of this build
  { source: '/trainings', destination: '/yoga-teacher-training-2026-1' },
  { source: '/trainings/200-hour-bali-immersion', destination: '/200hr-yoga-teacher-training-ra-vinyasa-ubud' },
  { source: '/trainings/300-hour-advanced', destination: '/300hr-yoga-teacher-training-ra-vinyasa-ubud' },
  { source: '/trainings/200-hour-hybrid', destination: '/ytt-hybrid' },
  { source: '/workshops', destination: '/studio-workshops-events-ubud' },
  { source: '/healings', destination: '/healing-studio' },
  { source: '/teachers', destination: '/our-teachers' },
  { source: '/online', destination: '/ra-online-monthly-membership' },
  { source: '/about', destination: '/' },
]
