import type { PageContent } from '../types'

/** Source: https://www.radiantlyalive.com/online-events */
export const page: PageContent = {
  path: '/online-events',
  title: 'RA Online Studios: Online Events & Trainings',
  description:
    'Online Short Trainings from Radiantly Alive: Yin Yoga Teacher Training with Alicia Casillas, Wise Women’s Immersion with Devi Ma and Reiki Training with Alicia Casillas. Stay connected, stay radiantly alive.',
  parent: { label: 'Online Studio', href: '/ra-online-monthly-membership' },
  hero: {
    eyebrow: 'Online Events & Trainings',
    title: 'RA Online *Studios*',
    lead: 'stay connected • stay radiantly alive',
    image: 'stayEventsHero',
  },
  blocks: [
    {
      type: 'cards',
      eyebrow: 'Online',
      heading: 'Online Short *Training*',
      columns: 3,
      aspect: 'natural',
      items: [
        {
          image: 'stayEventYinPoster',
          title: 'Online | Yin Yoga Teacher Training with Alicia Casillas',
          href: 'https://www.radiantlyalive.com/yin-ytt-with-alicia-which-training-are-you-looking-for',
        },
        {
          image: 'stayEventWiseWomenPoster',
          title: 'Online | Wise Women’s Immersion with Devi Ma',
          href: 'https://www.radiantlyalive.com/wise-women-immersion-online-with-devi-ma',
        },
        {
          image: 'stayEventReikiPoster',
          title: 'Online | Reiki Training with Alicia Casillas',
          href: '/reiki-online-trainings-alicia',
        },
      ],
    },
  ],
}
