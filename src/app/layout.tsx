import type { Metadata, Viewport } from 'next'
import { Inter, Mulish } from 'next/font/google'
import localFont from 'next/font/local'
import { Footer } from '@/components/footer/Footer'
import { ScrollAnimations } from '@/components/motion/ScrollAnimations'
import { SmoothScroll } from '@/components/motion/SmoothScroll'
import { SiteHeader } from '@/components/navbar/SiteHeader'
import { AnnouncementBar, announcementScript } from '@/components/announcement-bar/AnnouncementBar'
import { JsonLd } from '@/components/ui/JsonLd'
import { SITE } from '@/lib/constants'
import { organizationJsonLd } from '@/lib/seo'
import './globals.css'

/** Bagnard (Velvetyne, SIL OFL 1.1): House of Om's display face. */
const display = localFont({
  src: './fonts/Bagnard-Regular.woff2',
  weight: '400',
  style: 'normal',
  variable: '--font-bagnard',
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
})

/** Mulish: House of Om's heading/UI face (H3, H4, navigation, buttons, eyebrows). */
const heading = Mulish({
  subsets: ['latin', 'latin-ext'],
  weight: ['600', '700'],
  variable: '--font-mulish',
  display: 'swap',
})

/** Inter: House of Om's text face. */
const sans = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} Yoga Studio | Ubud, Bali | Come for Yoga. Stay for Family.`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [
    'yoga Ubud',
    'yoga teacher training Bali',
    '200 hour yoga teacher training',
    '300 hour yoga teacher training',
    'yoga classes Ubud',
    'yoga retreat Bali',
    'online yoga',
  ],
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    locale: 'en_US',
    url: '/',
    images: [{ url: SITE.ogImage, width: 1200, height: 630, alt: 'Students meditating in the jungle shala at Radiantly Alive, Ubud' }],
  },
  twitter: { card: 'summary_large_image', images: [SITE.ogImage] },
  alternates: { canonical: '/' },
  formatDetection: { telephone: false },
}

export const viewport: Viewport = {
  themeColor: '#4a1328',
  colorScheme: 'light',
}

/** Marks JS as available before first paint so reveal states never flash. */
const jsFlag = `document.documentElement.classList.add('js');${announcementScript}`

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${display.variable} ${heading.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: jsFlag }} />
      </head>
      <body>
        <a
          href="#main"
          className="type-button fixed top-3 left-3 z-[var(--z-skip)] -translate-y-[200%] rounded-control bg-saffron px-5 py-3 text-crimson transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <SiteHeader announcement={<AnnouncementBar />} />
        <main id="main" tabIndex={-1} className="focus:outline-none">
          {children}
        </main>
        <Footer />
        <SmoothScroll />
        <ScrollAnimations />
        <JsonLd data={organizationJsonLd()} />
      </body>
    </html>
  )
}
