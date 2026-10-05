import type { Metadata } from 'next'
import { media, type MediaKey } from '@/data/media'
import { SITE, SOCIAL } from './constants'

interface PageMeta {
  title: string
  description: string
  path: string
  image?: MediaKey
  locale?: 'en_US' | 'es_ES'
}

/** Per-page metadata with canonical URL, Open Graph and Twitter cards. */
export function buildMetadata({ title, description, path, image, locale = 'en_US' }: PageMeta): Metadata {
  const img = image ? media[image] : null
  const images = img
    ? [{ url: img.src, width: img.width, height: img.height, alt: img.alt }]
    : [{ url: SITE.ogImage, width: 1200, height: 630, alt: 'Students meditating in the jungle shala at Radiantly Alive, Ubud' }]

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      locale,
      url: path,
      title: `${title} | ${SITE.name}`,
      description,
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE.name}`,
      description,
      images: images.map((i) => i.url),
    },
  }
}

const absolute = (path: string) => new URL(path, SITE.url).toString()

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: SITE.address.street,
  addressLocality: SITE.address.locality,
  addressRegion: SITE.address.region,
  addressCountry: SITE.address.country,
}

export const organizationId = `${SITE.url}/#organization`

/** Organization + LocalBusiness for the Ubud studio. Only published facts. */
export function organizationJsonLd() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': organizationId,
      name: SITE.legalName,
      alternateName: SITE.name,
      url: SITE.url,
      logo: absolute('/icon.svg'),
      email: SITE.email,
      foundingDate: String(SITE.foundingYear),
      slogan: SITE.tagline,
      sameAs: SOCIAL.map((s) => s.href),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'SportsActivityLocation',
      '@id': `${SITE.url}/#studio`,
      name: SITE.legalName,
      description: SITE.description,
      url: SITE.url,
      email: SITE.email,
      image: absolute(SITE.ogImage),
      address: postalAddress,
      hasMap: SITE.mapsUrl,
      parentOrganization: { '@id': organizationId },
    },
  ]
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absolute(item.path),
    })),
  }
}

/** Course or Service schema for a content page (only facts stated on the page). */
export function pageSchemaJsonLd(
  schema: { type: 'course' | 'service'; name: string; description: string },
  path: string,
  lang: string,
) {
  const base = {
    '@context': 'https://schema.org',
    name: schema.name,
    description: schema.description,
    url: absolute(path),
    inLanguage: lang,
  }
  if (schema.type === 'course') {
    return {
      ...base,
      '@type': 'Course',
      provider: { '@type': 'Organization', '@id': organizationId, name: SITE.legalName, sameAs: SITE.url },
    }
  }
  return {
    ...base,
    '@type': 'Service',
    provider: { '@id': organizationId },
    areaServed: { '@type': 'Place', name: `${SITE.address.locality}, ${SITE.address.region}` },
  }
}
