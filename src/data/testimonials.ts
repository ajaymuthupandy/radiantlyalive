import type { Testimonial } from './types'

/** Graduate words published on radiantlyalive.com training pages (excerpted, not reworded). */
export const testimonials: Testimonial[] = [
  {
    id: 'julia-rossina',
    quote: 'I came to Bali wanting to teach. I left understanding myself.',
    name: 'Julia Rossina',
    context: '200H Bali Immersion, August 2023 · Now teaching in Rome',
  },
  {
    id: 'kelly-ford',
    quote:
      'The YTT is expansive, heart-opening, and such a journey for me. It’s like I’ve been waiting my whole life for this moment. I truly believe I’ve discovered the beginning of a sense of purpose.',
    name: 'Kelly Ford',
    context: 'USA · 200H, November 2025',
  },
  {
    id: 'zeedan',
    quote:
      'I chose Radiantly Alive because of its focus on community and being grounded. You can really feel how authentic the teachers and the studio are. I felt safe here from the beginning.',
    name: 'Zeedan',
    context: 'Sudan / Croatia · 200H, January 2026',
  },
  {
    id: 'kristina-meyers',
    quote:
      'One of the best experiences of my life. I connected with myself and different souls on a level I could never explain to anyone who was not there.',
    name: 'Kristina Meyers',
    context: '200H, February 2019',
  },
  {
    id: 'sandra',
    quote:
      'I wasn’t sure about becoming a teacher before the training, but after the training I feel ready and excited. It helped me see yoga as a holistic way of living, not only asanas.',
    name: 'Sandra',
    context: 'Indonesia · 200H, May 2026',
  },
  {
    id: 'liz',
    quote:
      'The doors just keep opening. I did my 300hr and Radiantly Alive has shown me what it actually looks like to walk this path long-term, as a teacher and as a person.',
    name: 'Liz',
    context: 'Germany · 300H graduate · RA Faculty Path',
  },
  {
    id: 'lucia-de-la-lama',
    quote:
      'What struck me most was how much I was able to learn. Everything was very well structured and organized. You can tell a great deal of work went into this.',
    name: 'Lucía de la Lama Suárez',
    context: '200H Hybrid, August 2026',
  },
  {
    id: 'mayra-falcon',
    quote:
      'It felt like a journey of self-discovery that helped me believe in myself more. I felt incredibly empowered, and I’ll carry this experience in my heart.',
    name: 'Mayra Falcón',
    context: '200H Hybrid, August 2026',
  },
  {
    id: 'laura',
    quote:
      'Every time you come back, people know you. It’s a second family that gives you community, friendships, and opportunities to grow faster than you imagined.',
    name: 'Laura',
    context: 'Germany · Leadership Path, Bud',
  },
]

export function getTestimonials(ids: string[]) {
  return ids.map((id) => testimonials.find((t) => t.id === id)).filter((t): t is Testimonial => Boolean(t))
}
