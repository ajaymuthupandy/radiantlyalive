import type { PageContent } from '../types'

/** Source: https://www.radiantlyalive.com/studio-workshops-events-ubud */
export const page: PageContent = {
  path: '/studio-workshops-events-ubud',
  title: 'Workshops & Events',
  description:
    'What’s on at the studio. Workshops, sound journeys, ceremonies, and teachers passing through at Radiantly Alive in Ubud, Bali.',
  parent: { label: 'Ubud Studio', href: '/classes' },
  hero: {
    eyebrow: 'Workshop & Events · Ubud, Bali',
    title: 'What’s on at *the studio.*',
    lead: 'Come often enough and the practice starts to feel familiar. These are the days it stops being. Workshops, sound journeys, ceremonies, and teachers passing through.',
    image: 'studioWorkshopsHero',
  },
  blocks: [
    {
      type: 'embed',
      id: 'schedule',
      widget: 'momence-workshops',
      tone: 'paper',
      heading: 'Workshops & *Events*',
      lead: '[Terms of service](/terms-of-service-studio)',
      fallback: { label: 'View on Momence', href: 'https://momence.com/Radiantly-Alive' },
    },
  ],
}
