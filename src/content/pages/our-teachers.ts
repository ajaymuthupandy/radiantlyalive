import type { PageContent } from '../types'

/**
 * Source: https://www.radiantlyalive.com/our-teachers
 * Teacher names, portraits and bios live in src/data/teachers.ts (verbatim
 * from the source, in its alphabetical order) and render via `teacher-grid`.
 */
export const page: PageContent = {
  path: '/our-teachers',
  title: 'Our Teachers',
  description:
    'Get to know us: the resident yoga teachers and practitioners of Radiantly Alive in Ubud, Bali, from Ashtanga, Vinyasa and Inside Flow to Yin, Kundalini, sound healing and meditation.',
  parent: { label: 'Ubud Studio', href: '/classes' },
  hero: {
    eyebrow: 'Radiantly Alive',
    title: 'Our *Teachers*',
    lead: 'Get to know us',
    image: 'teamEmbrace',
  },
  blocks: [
    {
      type: 'component',
      name: 'teacher-grid',
      eyebrow: 'Radiantly Alive',
      heading: 'Get to *know us*',
    },
    {
      type: 'split',
      tone: 'paper',
      heading: 'Nothing would be possible without *our amazing team* that supports us in the reception, housekeeping and office.',
      paragraphs: ['We love you all!'],
      image: 'teamStaff',
      imageSide: 'left',
      shape: 'rect',
    },
  ],
}
