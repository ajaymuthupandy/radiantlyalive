import type { PageContent } from '../types'

/** Source: https://www.radiantlyalive.com/careers */
export const page: PageContent = {
  path: '/careers',
  title: 'Careers at Radiantly Alive',
  description: 'Careers at Radiantly Alive: join our radiant team in the heart of Ubud! Want to teach at our studio in Ubud? Apply here.',
  parent: { label: 'RA Movement', href: '/radiantly-alive-teachers' },
  hero: {
    eyebrow: 'Careers',
    title: 'Careers at *Radiantly Alive*',
    lead: 'Join our radiant team in the heart of Ubud!',
    image: 'moveCareers',
  },
  blocks: [
    {
      type: 'intro',
      align: 'center',
      eyebrow: 'Careers',
      heading: 'We’re *Hiring!*',
      paragraphs: [
        'Want to teach at our studio in Ubud?',
      ],
      ctas: [{ label: 'Apply here', href: 'https://docs.google.com/forms/d/e/1FAIpQLSd1SZhcI7xaheQWEo4H2bK561DKtXM1UuOtqYq8430PZAMlXg/viewform' }],
    },
  ],
}
