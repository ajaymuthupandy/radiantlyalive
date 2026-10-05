import type { PageContent } from '../types'

/** Source: https://www.radiantlyalive.com/referral-program */
export const page: PageContent = {
  path: '/referral-program',
  title: 'Referral Program',
  description:
    'Our Referral Program allows you to share the transformational benefits of our programs with your network while also earning enticing incentives.',
  parent: { label: 'RA Movement', href: '/radiantly-alive-teachers' },
  hero: {
    eyebrow: 'RA Movement',
    title: 'Referral *Program*',
    lead: 'At Radiantly Alive, we believe that the best way to grow our family is through the love and support of our own. Our Referral Program allows you to share the transformational benefits of our programs with your network while also earning enticing incentives.',
    image: 'moveReferral',
  },
  blocks: [
    {
      type: 'features',
      eyebrow: 'Referral Program',
      heading: 'How it *Works:*',
      numbered: true,
      columns: 3,
      items: [
        {
          label: 'Step 1',
          title: 'Share the Radiantly Alive Experience',
          bullets: [
            'Let your friends, family, and yoga community know about our life-changing programs.',
            'Explain how Radiantly Alive has transformed your life and why you believe in our offerings.',
          ],
        },
        {
          label: 'Step 2',
          title: 'Earn Exciting Rewards',
          bullets: [
            'For each 200hr or 300hr student that you successfully initiate and signs up for the training, you receive $100 as a token of our gratitude.',
            'Plus, your referred students embark on their own transformative journeys.',
          ],
        },
        {
          label: 'Step 3',
          title: 'Support, Connect, and Grow Together',
          bullets: [
            "Our Referral Program is not just about incentives; it's about building a stronger Radiantly Alive family.",
            'You become a crucial link in connecting like-minded individuals to our vibrant community.',
          ],
        },
      ],
    },
    {
      type: 'intro',
      tone: 'paper',
      eyebrow: 'Earn Exciting Rewards',
      heading: 'You’ll receive $100 as a *token of our gratitude!*',
      paragraphs: [
        'If you have someone you have shared our programs with and you think they might be interested in joining, put them in contact with us through email ([ra.ytt@radiantlyalive.com](mailto:ra.ytt@radiantlyalive.com)) or WhatsApp ([+62 821 45210069](https://api.whatsapp.com/send?phone=6282145210069)). You’ll receive $100 as a token of our gratitude!',
        'If you refer 10 students, you will receive a **FREE TRAINING** at Radiantly Alive, allowing you to deepen your practice, expand your yoga path, and continue growing roots in the RA community.',
      ],
      ctas: [
        { label: 'ra.ytt@radiantlyalive.com', href: 'mailto:ra.ytt@radiantlyalive.com' },
        { label: 'WhatsApp +62 821 45210069', href: 'https://api.whatsapp.com/send?phone=6282145210069', variant: 'secondary' },
      ],
    },
    {
      type: 'cta',
      eyebrow: 'Support, Connect, and Grow Together',
      heading: 'Let\'s create a chain of inspiration and *transformation together.*',
      text: "By participating in our Referral Program, you're not just sharing the love for yoga; you're also contributing to the growth of our Radiantly Alive family.",
      image: 'moveCeremonyCircle',
      ctas: [
        { label: 'ra.ytt@radiantlyalive.com', href: 'mailto:ra.ytt@radiantlyalive.com' },
        { label: 'WhatsApp +62 821 45210069', href: 'https://api.whatsapp.com/send?phone=6282145210069', variant: 'secondary' },
      ],
    },
  ],
}
