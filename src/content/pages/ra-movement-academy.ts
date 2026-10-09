import type { PageContent } from '../types'
import { yearsRunning } from '@/data/site'

/** Source: https://www.radiantlyalive.com/ra-movement-academy */
export const page: PageContent = {
  path: '/ra-movement-academy',
  title: 'RA Movement & Leadership Path',
  description:
    'Evolve from local yoga teacher to global community leader. The Radiantly Alive Leadership Path is a four-stage path of teaching evolution: Seed, Bud, Blossom and Pod.',
  parent: { label: 'RA Movement', href: '/radiantly-alive-teachers' },
  hero: {
    eyebrow: 'Radiantly Alive Movement',
    title: 'Evolve from Local Yoga Teacher to *Global Community Leader*',
    image: 'moveHeroCeremony',
    ctas: [{ label: 'Where are you in your journey?', href: '#journey' }],
  },
  blocks: [
    {
      type: 'split',
      eyebrow: 'The Radiantly Alive Movement',
      heading: 'The Radiantly Alive Movement *& Leadership Path*',
      paragraphs: [
        `What started in our Bali studio over ${yearsRunning()} years ago is now evolving into something greater, a global Movement fueled by RA teachers, guides, and leaders like you, who carry the yoga light into every corner of the world.`,
        'This is an invitation to grow with us, to receive guidance and support that will empower you to carry the Radiantly Alive and Bali spirit beyond borders, leading retreats and trainings in your own country and community.',
        'We will collaborate, co-create, celebrate and support each other’s growth.',
        'This Movement needs Radiant leaders; grounded, awake, and abundant; join our Leadership Path and Be one!',
        'Tell us where you are in your journey as a teacher and we will share which opportunities we have to collaborate.',
      ],
      ctas: [{ label: 'Where are you in your journey?', href: '#journey' }],
      image: 'moveCeremonyCircle',
      imageSide: 'right',
      shape: 'arch',
    },
    {
      type: 'split',
      tone: 'paper',
      eyebrow: 'Leadership Path',
      heading: 'The *Leadership Path*',
      paragraphs: [
        'It’s the living journey that grows Radiantly Alive teachers into radiant leaders to become the pillars of our movement.',
        'It’s how we cultivate mastery together, expand your impact, and bring abundance into your teaching.',
        'A four-stage path of teaching evolution, designed to empower you from the inside out!',
        'Supporting teachers to grow and thrive in purpose and prosperity.',
      ],
      image: 'moveLeadershipPath',
      imageSide: 'left',
      shape: 'rect',
    },
    {
      type: 'intro',
      tone: 'crimson',
      align: 'center',
      heading: '“Like the LOTUS, we too have the ability to rise from the mud, bloom out of the darkness, and *radiate into the world.*”',
      paragraphs: [
        'For thousands of years, the lotus has symbolized the human journey; rising from the depths, unfolding in its own time, and offering its beauty back to the world. Much like this path, a yoga leader grows through phases of opening, sharing, embodying, and ultimately giving back.',
        'Inspired by this cycle, our Leadership Path follows the natural stages of the lotus: Seed, Bud, Blossom, and Pod; each reflecting a step of growth, expansion, and contribution to your yoga community.',
      ],
    },
    {
      type: 'cards',
      id: 'journey',
      eyebrow: 'Seed · Bud · Blossom · Pod',
      heading: 'Where are you in *your journey?*',
      columns: 4,
      aspect: 'square',
      items: [
        {
          image: 'moveLevelSeed',
          badge: 'Level 1',
          eyebrow: 'Awakening',
          title: 'SEED',
          text: 'Rising from the role of student, awakening into the role of teacher.',
          bullets: ['YTT Assistance', 'Teaching Mentorship', 'Support RA Global Events', 'International Visibility: RA Teachers Directory'],
          note: '**Certifications:** RYT 200 · 0-2 Years Teaching',
        },
        {
          image: 'moveLevelBud',
          badge: 'Level 2',
          eyebrow: 'Emergence',
          title: 'BUD',
          text: 'Emerging from simply sharing, maturing into lasting impact.',
          bullets: [
            'YTT Assistance + Teach Sadhana',
            'Facilitator Mentorship',
            'Co-Facilitate RA Global Events',
            'International Visibility: RA Teachers Directory + Online Classes',
          ],
          note: '**Certifications:** E-RYT or RYT 500 · Min 2 Years Teaching',
        },
        {
          image: 'moveLevelBlossom',
          badge: 'Level 3',
          eyebrow: 'Expansion',
          title: 'BLOSSOM',
          text: 'Expanding and contracting, guiding others with presence.',
          bullets: [
            'YTT Facilitator in Training',
            'YTT Mentorship',
            'Lead RA Global Events',
            'International Visibility: RA Teachers Directory + Your Short Trainings on our Web',
          ],
          note: '**Certifications:** E-RYT 500 · Min 3 Years Teaching · 5 Short Trainings or Retreats led',
        },
        {
          image: 'moveLevelPod',
          badge: 'Level 4',
          eyebrow: 'Transmission',
          title: 'POD',
          text: 'Seeding, spreading, growing the Movement, beyond your self.',
          bullets: [
            'YTT Lead',
            'Mentor',
            'Lead RA Global Events',
            'International Visibility: RA Teachers Directory + Online YTT + Face and Voice of RA',
          ],
          note: '**Certifications:** E-RYT 500+ · Min 5 Years Teaching · 3 YTTs Co-Facilitated',
        },
      ],
    },
    {
      type: 'features',
      id: 'apply',
      tone: 'paper',
      eyebrow: 'How to Join:',
      heading: '4 Milestones & Steps on your *Leadership Path*',
      lead: 'opening to opportunities · commiting to responsibilities',
      numbered: true,
      columns: 4,
      items: [
        { label: 'Step 1', title: 'Define Where You Are', text: 'Complete the form and tell us where you see yourself in your teaching journey.' },
        { label: 'Step 2', title: 'Confirmation', text: 'Within 10 days you will receive an email confirmation with access to relevant opportunities.' },
        { label: 'Step 3', title: 'Apply for Opportunities', text: 'Browse and apply for roles that align to your path.' },
        { label: 'Step 4', title: 'Lead & Grow', text: 'Unlock teaching experiences and mentorships, harness opportunities that fuel income.' },
      ],
      ctas: [{ label: 'JOIN NOW!', href: '/movement-category-form' }],
    },
    {
      type: 'cards',
      eyebrow: 'Real Experiences from Your Peers:',
      heading: 'What RA Teachers *want you to know…*',
      columns: 3,
      aspect: 'portrait',
      items: [
        {
          image: 'moveLaura',
          eyebrow: '— Laura, Level 2 BUD (Germany)',
          title: '"The Evolution Happened Fast"',
          text: 'The opportunity came fast – I was offered the paid support role for the next training, stepping into a completely new position. Radiantly Alive doesn\'t just teach you; they actively create pathways for your evolution. Every time you come back, people know you. There\'s a sense of really knowing each other based on the same values we learn here. It\'s a second family that gives you community, friendships, and opportunities to grow faster than you imagined."',
        },
        {
          image: 'moveLiz',
          eyebrow: '— Liz, Level 3 BLOSSOM (Germany)',
          title: '“The RA Movement Opens Doors”',
          text: '"I\'ve known Radiantly Alive for 8 years, I did my 300hr in 2020, and the doors just keep opening. I\'ve facilitated modules in YTTs, organized a reunion in Munich with Rafael and Sanna, and return to Bali regularly to stay connected with this family. Radiantly Alive opened my eyes on a personal level – showing me how I want to proceed as a teacher and what kind of light I want to share with my community. The things you learn here are something you can truly take and spread within your own world"',
        },
        {
          image: 'moveAlexandra',
          eyebrow: '— Alexandra, Level 1 SEED (France)',
          title: '"From Nervous to Confident"',
          text: '"Assisting the facilitators during the training was so special because it was one of my dreams to help them and see the trainings from another perspective – not as a student, but as a teacher and as a member of the RA family. Coming back to assist in Bali nine months after my 200hr completely transformed my confidence as a teacher. I went from nervous about adjustments to feeling like a real mentor for new students.."',
        },
      ],
    },
    {
      type: 'split',
      tone: 'paper',
      eyebrow: 'Perhaps it’s your time',
      heading: 'Your Growth *Journey Awaits*',
      paragraphs: [
        'Every respected yoga teacher and mentor started exactly where you are – with a love for sharing yoga and a sense that there are more ways to serve.',
        'The Radiantly Alive Leadership Path has supported 500+ teachers in deepening their impact and expanding their light to a global yoga community. **Perhaps it\'s your time.**',
        'We\'d love to hear about your journey and how the RA Leadership Path can support your growth.',
      ],
      ctas: [{ label: 'JOIN NOW!', href: '/movement-category-form' }],
      image: 'moveCommunity',
      imageSide: 'right',
      shape: 'rect',
    },
    {
      type: 'faq',
      heading: 'Frequently Asked *Questions*',
      items: [
        {
          question: "What if I'm not experienced enough?",
          answer:
            "The beauty of our 4-phase path is that it meets you where you are. Phase 1 starts with supporting roles and gentle mentoring, building your confidence organically. You don't have to be perfect – you have to be willing to grow and serve.",
        },
        {
          question: 'Six years seems like a long time – is there a faster path?',
          answer:
            "Just like becoming a doctor, lawyer, or master craftsperson, true expertise requires discipline, dedication and time. Quick certifications create basic teachers. Our Movement creates leaders. The timeline ensures you're equipped and prepared for each phase of responsibility.",
        },
        {
          question: "What if I don't want to travel internationally?",
          answer:
            'While international opportunities are available, many of our community members focus on regional development, online programs, and local mentorship. The Movement provides opportunites aligned to different lifestyles and callings.',
        },
        {
          question: "Is this about building a business or staying true to yoga's spiritual roots?",
          answer:
            "The RA Movement is about deepening service and impact while staying true to yoga's authentic teachings. Many of our teachers find that expanding their reach actually deepens their spiritual practice and connection to the tradition.",
        },
      ],
    },
    {
      type: 'cta',
      eyebrow: 'RA Movement',
      heading: 'Are you ready to be part of our MOVEMENT supporting the RA community and deepening your impact beyond that of a local teacher?',
      image: 'moveJoinCeremony',
      ctas: [{ label: 'YES! I want to join', href: '#apply' }],
    },
  ],
}
