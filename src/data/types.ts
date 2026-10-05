/**
 * Content model. These interfaces are the contract between content and UI:
 * a CMS (e.g. Sanity) can replace the modules in src/data/ as long as it
 * returns these shapes.
 */
import type { MediaKey } from './media'

export type Intensity = 1 | 2 | 3

export interface ClassStyle {
  id: string
  title: string
  summary: string
  description: string
  intensity: Intensity
  /** Grouping used for filtering on /classes. */
  family: 'flow' | 'strength' | 'restore' | 'sound' | 'meditation' | 'energy'
  levels: string
  duration?: string
  featured?: boolean
}

export interface ClassPass {
  label: string
  standard: string
  local?: string
}

export interface Teacher {
  id: string
  name: string
  role: string
  image: MediaKey
  bio: string[]
  styles: string[]
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  context: string
}

export interface Shala {
  id: string
  name: string
  ambience: string
  size: string
  capacity: string
  feature: string
  image: MediaKey
}
