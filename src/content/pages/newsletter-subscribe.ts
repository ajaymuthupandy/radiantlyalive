import type { PageContent } from '../types'

/** Source: https://www.radiantlyalive.com/newsletter-subscribe */
export const page: PageContent = {
  path: '/newsletter-subscribe',
  title: 'RA Newsletter',
  description:
    "Join 10,000+ Radiant Beings receiving monthly wisdom from Bali's heart – ancient teachings, real transformation stories, and practices that actually change your life.",
  parent: { label: 'RA Movement', href: '/radiantly-alive-teachers' },
  hero: {
    eyebrow: 'RA Newsletter',
    title: 'Yoga Wisdom, Community & *Bali Stories*',
    lead: "Join 10,000+ Radiant Beings receiving monthly wisdom from Bali's heart – ancient teachings, real transformation stories, and practices that actually change your life.",
    image: 'moveNewsletter',
    ctas: [{ label: 'Join the Community', href: '#subscribe' }],
  },
  blocks: [
    {
      type: 'form',
      id: 'subscribe',
      form: 'newsletter',
      eyebrow: 'RA Newsletter',
      heading: 'Join the *Community*',
      lead: 'Get insider updates, expert tips, and early access to classes and retreats.',
      fallbackHref: 'https://www.radiantlyalive.com/newsletter-subscribe',
      submitLabel: 'Submit',
      successMessage: 'We’re just getting started – see you in your inbox (and on the mat)!',
      privacyNote: 'Read our [Privacy Policy](/radiantly-alive-privacy-policy).',
    },
  ],
}
