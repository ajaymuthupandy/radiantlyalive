import type { Shala } from './types'

/** Brand story and studio facts, from the radiantlyalive.com homepage, /ytt and /shala-rental. */
export const brandStory = {
  vision: 'Our Vision is to empower people through yoga',
  visionDetail:
    'Building confidence, strength and clarity, and growing a global community of committed, inspired people.',
  moreThanStudio:
    'Radiantly Alive is a space to grow – on and off the mat. Whether you’re here for a class, a retreat, or teacher training, you’ll gain real tools to feel stronger in your body, clearer in your mind, and more connected to yourself and others.',
  belonging: 'This isn’t just about poses, it’s about progress, purpose, and belonging.',
  rooted:
    'Radiantly Alive has been here since 2010. We didn’t come to visit. We built here: five shalas, a teaching lineage, a community rooted in this particular ground.',
  place:
    'The rhythm of the days, the density of practice in the air, the light in the shalas: Ubud holds you in a way no other place can.',
}

/** The five shalas, verbatim from radiantlyalive.com/shala-rental. */
export const shalas: Shala[] = [
  { id: 'river', name: 'River Shala', ambience: 'Warm and inviting, featuring earthy décor, and the river sound.', size: '20,4m x 7,25m', capacity: '60 mats', feature: 'Spacious and vibrant. Perfect for the ceremonies, and sound journeys.', image: 'shalaRiver' },
  { id: 'jungle', name: 'Jungle Shala', ambience: 'Lively and vivid, with jungle and river view.', size: '13,8m x 7,77m', capacity: '30-33 mats', feature: 'With glass walls and AC. This shala could be a cozy home for small groups.', image: 'shalaJungle' },
  { id: 'bamboo', name: 'Bamboo Shala', ambience: 'Minimalistic and calming, with the bamboo tree view and the river sound.', size: '10,8m x 7,5m', capacity: '20-25 mats', feature: 'This shala is perfect for meditation and deep practice.', image: 'shalaBamboo' },
  { id: 'upper', name: 'Upper Shala', ambience: 'Bright, with large windows, wooden floor, indoor plants, on the second floor.', size: '13,25m x 9,2m', capacity: '70+ mats', feature: 'Our biggest shala, spacious and bright.', image: 'shalaUpper' },
  { id: 'sky', name: 'Sky Shala', ambience: 'Warm, intimate.', size: '12m x 7m', capacity: '16 hangmats', feature: 'Hammocks, perfect for fly high or aerial yoga.', image: 'shalaSky' },
]

/** Amenities, in the source's own words (radiantlyalive.com/shala-rental). */
export const shalaAmenities = [
  'Our shalas are stocked with mats, blocks, straps, bolsters, and blankets',
  'Enjoy the use of changing rooms, restrooms, and cozy cafe area',
  'Rent by the hour, day, or week',
]

/** The Radiantly Alive Leadership Path, from radiantlyalive.com/ra-movement-academy. */
export const leadershipStages = [
  { name: 'Seed', theme: 'Awakening', body: 'Rising from the role of student into the role of teacher.', requirement: 'RYT 200 · 0–2 years teaching' },
  { name: 'Bud', theme: 'Emergence', body: 'From simply sharing to lasting impact.', requirement: 'E-RYT or RYT 500 · 2+ years teaching' },
  { name: 'Blossom', theme: 'Expansion', body: 'Guiding others with presence.', requirement: 'E-RYT 500 · 3+ years · 5 short trainings or retreats led' },
  { name: 'Pod', theme: 'Transmission', body: 'Seeding and growing the Movement, beyond yourself.', requirement: 'E-RYT 500+ · 5+ years · 3 YTTs co-facilitated' },
]

export const alumniCities = ['Barcelona', 'Berlin', 'Paris', 'Amsterdam']
