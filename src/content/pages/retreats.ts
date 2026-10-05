import type { PageContent } from '../types'

/** Source: https://www.radiantlyalive.com/retreats (also served at /european-events). */
export const page: PageContent = {
  path: '/retreats',
  title: 'Bali Retreats',
  description:
    'Take time to nourish yourself. Me-Time. My Way.: a flexible wellness retreat in Bali where you curate your own experience and truly recharge.',
  hero: {
    eyebrow: 'Retreats & Events',
    title: 'Bali Retreats',
    lead: 'Take time to nourish yourself',
    image: 'ubudRiceTerraces',
  },
  blocks: [
    {
      type: 'split',
      eyebrow: 'Wellness Retreat in Bali',
      heading: 'Me-Time. *My Way.*',
      paragraphs: [
        'In our busy lives, it’s easy to set high expectations and pressure ourselves to achieve more—whether for our jobs, families, or friends. Do you ever feel like you’re running on empty?',
        'Now is the perfect time to create space for yourself. Join us for a flexible retreat designed just for you, where you can curate your own experience and truly recharge. Let us help you rediscover your balance and nurture your well-being.',
      ],
      ctas: [{ label: 'Read more', href: '/wellness-retreat-bali' }],
      image: 'retreatsMeTime',
      imageSide: 'left',
      shape: 'arch',
    },
  ],
}
