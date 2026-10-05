import type { PageContent } from '../types'

/** Source: https://www.radiantlyalive.com/ytt-scholarship-waitlist */
export const page: PageContent = {
  path: '/ytt-scholarship-waitlist',
  title: 'Yoga Teacher Training Scholarship',
  description:
    'Dreaming of yoga teacher training in Bali but concerned about the cost? Our full scholarship program removes financial barriers. Join our priority waitlist to be first to apply when scholarships open in June 2027.',
  parent: { label: 'RA Movement', href: '/radiantly-alive-teachers' },
  hero: {
    eyebrow: 'Scholarship Program',
    title: 'Yoga Teacher Training *Scholarship*',
    lead: 'Unlock Your Potential with Radiantly Alive Scholarship Program',
    image: 'moveScholarship',
  },
  blocks: [
    {
      type: 'intro',
      eyebrow: 'Scholarship Program',
      heading: 'Be first to apply when scholarships *open in June 2027*',
      paragraphs: [
        'Dreaming of yoga teacher training in Bali but concerned about the cost? Our full scholarship program removes financial barriers, offering complete coverage for passionate practitioners who want to deepen their practice and share yoga with their communities.',
        'We\'ll be launching our 2027 scholarship applications around June 2027 for our 200hr YTT, 200hr YTT Hybrid (English & Spanish) and 300hr YTT Advanced programs. Join our priority waitlist to receive early notification when applications go live, giving you the advantage of being among the first to apply.',
      ],
    },
    {
      type: 'form',
      id: 'waitlist',
      form: 'waitlist',
      eyebrow: 'Priority waitlist',
      heading: 'Join our *priority waitlist*',
      lead: "Leave your email bellow and we'll notify you the moment applications open.",
      fallbackHref: 'https://www.radiantlyalive.com/ytt-scholarship-waitlist',
      submitLabel: 'Send',
      privacyNote: 'Read our [Privacy Policy](/radiantly-alive-privacy-policy).',
    },
  ],
}
