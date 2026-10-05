import type { PageContent } from '../types'

/** Source: https://www.radiantlyalive.com/ytt-hybrid */
export const page: PageContent = {
  path: '/ytt-hybrid',
  title: '200-Hour Hybrid Yoga Teacher Training',
  description:
    'The training that fits around the life you already have. Study online from home, then complete it in person. Three programmes, two countries, two languages: one curriculum and one certification.',
  parent: { label: 'Yoga Teacher Trainings', href: '/yoga-teacher-training-2026-1' },
  hero: {
    eyebrow: '200-Hour Hybrid · Yoga Alliance RYS-200',
    title: 'The training that fits around *the life you already have.*',
    lead: 'Study online from home, then complete it in person. Three programmes, two countries, two languages: one curriculum and one certification.',
    image: 'hybridHubHero',
    imagePosition: '50% 35%',
    ctas: [{ label: 'EXPLORE TRAINING', href: '#explore' }],
    facts: [
      { label: 'Online', value: 'Roughly three months' },
      { label: 'In person', value: 'Ten days' },
      { label: 'Curriculum', value: 'Six modules, 200 hours' },
      { label: 'Certification', value: 'Yoga Alliance RYT‑200' },
    ],
  },
  blocks: [
    {
      type: 'intro',
      eyebrow: 'The format',
      heading: 'Two phases. *One complete training.*',
      paragraphs: [
        'You build the foundation from home over roughly three months: recorded modules, live sessions, homework that gets read. Then you travel for ten days and put it in a room.',
        'The point is not that it is spread out. The point is that you arrive already knowing the material, so the ten days are spent on the only thing that cannot be done remotely: teaching, being corrected, and teaching again.',
      ],
    },
    {
      type: 'cards',
      id: 'explore',
      tone: 'paper',
      eyebrow: 'Choose your Hybrid',
      heading: 'Same curriculum. Same certification. *Three ways to finish it.*',
      columns: 3,
      aspect: 'landscape',
      items: [
        {
          image: 'hybridBaliJungleShala',
          eyebrow: 'Ubud, Indonesia · 10 days',
          title: 'English in Bali',
          text: 'Begin online, then gather in the school we have run daily since 2010. Accommodation is not included, deliberately. Ubud has a hundred options and choosing your own is part of it.',
          bullets: [
            '**Upcoming cohorts**',
            'Online 9 Apr 2027 → in person 16 to 25 Jul 2027',
            'Online 18 Jun 2027 → in person 24 Sep to 3 Oct 2027',
          ],
          note: '**Lead teachers** Niko Kisic · Lucinda Muldoon',
          href: 'https://www.radiantlyalive.com/200h-ytt-ra-vinyasa-hybrid-bali-eng',
          ctaLabel: 'View the Bali Hybrid',
        },
        {
          image: 'hybridMoroccoPalais3',
          eyebrow: 'Taroudant, Morocco · 10 days',
          title: 'English in Morocco',
          text: 'Three to four hours from most of Europe instead of sixteen. Accommodation and meals are included at Palais Claudio Bravo, which is why the price is higher.',
          bullets: ['**Upcoming cohort**', 'Online 27 Aug 2027 → in person 3 to 12 Dec 2027'],
          note: '**Lead teacher** Laila Elidrissi',
          href: 'https://www.radiantlyalive.com/200h-ytt-ra-vinyasa-hybrid-morocco-eng',
          ctaLabel: 'View the Morocco Hybrid',
        },
        {
          image: 'hybridBaliGuide',
          eyebrow: 'Ubud, Indonesia · 10 días',
          title: 'Español en Bali',
          text: 'La misma formación, íntegramente en español, con profesorado hispanohablante. Mismo plan de estudios, misma certificación.',
          bullets: ['**Próxima convocatoria**', 'Online 5 Mar 2027 → presencial 4 a 13 Jun 2027'],
          note: '**Profesora principal** Niko Kisic',
          href: 'https://www.radiantlyalive.com/200hour-yoga-teacher-training-spanish',
          ctaLabel: 'Ver el programa en español',
        },
      ],
    },
    {
      type: 'intro',
      paragraphs: [
        'Our 2026 Hybrid cohorts have already begun. The next start is 5 March 2027 in Spanish and 9 April 2027 in English. If you want to begin sooner than that, [the 24‑day Immersion in Ubud runs 2 to 25 November 2026](https://www.radiantlyalive.com/200hr-yoga-teacher-training-ra-vinyasa-ubud), and we would rather point you there than hold you for eight months.',
        'Not sure which fits your schedule or your language? Write to us. We will tell you honestly, including if the answer is to wait for a later cohort.',
      ],
    },
    {
      type: 'split',
      tone: 'plum',
      heading: 'The question was never whether you have four weeks. *It was whether you were going to start.*',
      image: 'hybridHubQuote',
      imageSide: 'left',
    },
    {
      type: 'features',
      eyebrow: 'Whichever you choose',
      heading: 'Four things *do not change.*',
      numbered: true,
      columns: 4,
      items: [
        { label: 'Curriculum', title: 'The curriculum', text: 'Six modules, 200 hours, identical across all three programmes.' },
        { label: 'Certification', title: 'The certification', text: 'Yoga Alliance RYT‑200. You register the same way regardless of where you finish.' },
        { label: 'Structure', title: 'The structure', text: 'Roughly three months online, then ten days in person. Same split, same hours.' },
        { label: 'Standard', title: 'The standard', text: "No programme is the easier one. There isn't an easier one." },
      ],
    },
    {
      type: 'features',
      tone: 'paper',
      eyebrow: 'Who is this for',
      heading: 'The Hybrid may be right for you if…',
      columns: 3,
      items: [
        {
          title: "You can't step away for a month",
          text: "Work, family, or a life that doesn't pause for four weeks. Ten days is possible. Twenty‑four is not.",
        },
        {
          title: "You'd rather build than compress",
          text: 'Three months of steady study, then an immersion, instead of absorbing everything in a single intensive stretch.',
        },
        {
          title: 'You learn well on your own',
          text: 'The online phase asks for discipline. The structure supports it; it does not replace it.',
        },
      ],
      lead: 'It is not the right choice if you want the full retreat experience. If you can take four weeks and you want to disappear into it, [the 24‑day Bali Immersion](https://www.radiantlyalive.com/200hr-yoga-teacher-training-ra-vinyasa-ubud) is the better training for you. We would rather send you there.',
    },
    {
      type: 'split',
      eyebrow: 'After training',
      heading: 'Certification is *where it starts.*',
      paragraphs: [
        'You leave with an RYT-200 and you join an alumni network of 1,000+ teachers across 90+ countries, gatherings in Europe, opportunities to assist trainings, and a 300-hour path when you are ready for it.',
        'Some graduates go home and teach. A few end up carrying the work forward as faculty.',
      ],
      ctas: [{ label: 'SEE THE PATH', href: '/ra-movement-academy', variant: 'secondary' }],
      image: 'hybridMoroccoConnect',
      imageSide: 'right',
      shape: 'arch',
    },
    {
      type: 'testimonials',
      tone: 'paper',
      eyebrow: 'Graduates',
      items: [
        {
          quote: 'What struck me most was how much I was able to learn. Everything was very well structured and organized. You can tell a great deal of work went into this on the part of the teaching staff.',
          name: 'Lucía de la Lama Suárez',
          context: '200-Hour hybrid graduate, August 2026',
        },
        {
          quote: 'I chose Radiantly Alive because of its focus on community and being grounded. You can really feel how authentic the teachers and the studio are. I felt safe here from the beginning.',
          name: 'Zeedan',
          context: '200-Hour graduate, January 2026',
        },
        {
          quote: 'In my personal experience, it felt like a journey of self-discovery that helped me believe in myself more—and that’s what I loved about it! I felt incredibly empowered, and I’ll carry this experience in my heart.',
          name: 'Mayra Falcón',
          context: '200-Hour hybrid graduate, August 2026',
        },
      ],
    },
    {
      type: 'cta',
      eyebrow: 'Ready to begin',
      heading: 'Choose your programme and start.',
      text: 'A deposit holds your place. We will confirm everything and answer whatever is still open.',
      image: 'hybridBaliSadhana',
      ctas: [{ label: 'EXPLORE TRAININGS', href: '#explore' }],
    },
  ],
  schema: {
    type: 'course',
    name: '200-Hour Hybrid Yoga Teacher Training',
    description:
      'Study online from home, then complete it in person. Three programmes, two countries, two languages: one curriculum and one certification (Yoga Alliance RYT-200).',
  },
}
