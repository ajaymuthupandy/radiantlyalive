import type { MetadataRoute } from 'next'
import { SITE } from '@/data/site'
import { LOCAL_ROUTES } from '@/lib/routes'

const PRIORITY: Record<string, number> = {
  '/': 1,
  '/yoga-teacher-training-2026-1': 0.9,
  '/200hr-yoga-teacher-training-ra-vinyasa-ubud': 0.9,
  '/300hr-yoga-teacher-training-ra-vinyasa-ubud': 0.9,
  '/classes': 0.9,
}

/** Every rebuilt page, at its radiantlyalive.com path. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return LOCAL_ROUTES.map((path) => ({
    url: `${SITE.url}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency: path === '/classes' || path === '/studio-workshops-events-ubud' ? 'weekly' : 'monthly',
    priority: PRIORITY[path] ?? (path.includes('privacy') ? 0.2 : 0.6),
  }))
}
