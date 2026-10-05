# Radiantly Alive: website rebuild

A rebuild of **radiantlyalive.com** in Next.js. It keeps Radiantly Alive's content, logo, assets, navigation (including every mega-menu folder), URLs and booking functionality, and recomposes the UI in a premium editorial language inspired by **houseofom.com**.

> **Come for Yoga. Stay for Family.**

- [`SITE_INVENTORY.md`](SITE_INVENTORY.md): navigation tree, page/route map, preserved functionality, brand and video assets, asset manifests, House of Om pattern notes.
- [`DESIGN_SYSTEM.md`](DESIGN_SYSTEM.md): colour, type, spacing, header and mega menu, content blocks, motion and accessibility rules.

---

## Quick start

Requirements: Node.js ≥ 20.9.

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build      # all 31 pages are statically prerendered
npm run start
```

Optional environment variables (copy `.env.example` to `.env.local`):

| Variable | Purpose | Without it |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical URL for metadata, sitemap, JSON-LD | `VERCEL_PROJECT_PRODUCTION_URL` on Vercel, else `http://localhost:3000` |
| `NEXT_PUBLIC_NEWSLETTER_ENDPOINT` | JSON `POST { email, name?, form }` for newsletter forms | Opens the original Radiantly Alive sign-up form |
| `NEXT_PUBLIC_WAITLIST_ENDPOINT` | Same, for the scholarship waitlist and guide sign-ups | Opens the original source form |
| `NEXT_PUBLIC_CONTACT_ENDPOINT` | JSON `POST` for `/contact` | Opens the visitor's email app with the message prepared |

**Deploying to Vercel:** import the repo (Next.js is detected), set `NEXT_PUBLIC_SITE_URL`, deploy.

---

## What was built

### Pages (all at their radiantlyalive.com paths)

Home · Start Here · 200hr Bali · 300hr Bali · Hybrid Training · Bali Hybrid · Morocco Hybrid · 200hr Inmersión Bali (es) · 200hr Híbrido Bali (es) · Leadership Path · Class Schedule · Studio Workshops & Events · Short Trainings · Studio Healings · Our Teachers · Shala Rental · Bali Retreats · Wellness Retreat · Online Studio & Community · Online Events & Trainings · Online Healings · RA Teachers Worldwide · Referral Program · YTT Scholarship Waitlist · Newsletter · Careers · Privacy Policy · Contact.

The source's folder URLs (`/ytt`, `/ubud-studio`, `/european-events`, `/online-studio`, `/ra-movement`) and this project's earlier routes redirect permanently (`src/lib/redirects.ts`). Source pages that were not rebuilt (store products, healing/short-training detail pages, teacher profiles, forms) are linked to radiantlyalive.com automatically by `resolveHref` (`src/lib/routes.ts`), so no link is dead.

### Functionality preserved

- **Live class schedule + booking:** the same Ribbon/Momence weekly widget (host 5617) on `/classes`; pass purchases link to the exact Momence memberships.
- **Live workshops calendar:** the same Momence host-schedule widget on `/studio-workshops-events-ubud`.
- **Training purchases:** the exact early-bird and regular store links.
- **Online studio trial:** Mighty Networks sign-up.
- **Forms:** newsletter, waitlist and guide sign-ups post to configurable endpoints, otherwise they open the original forms. The source's URL-less popup forms go to `/contact?topic=…`, or to the email address the page itself publishes.
- **Films:** the manifesto and training films play inline (lite YouTube, no-cookie).

### Hero video

The source hero is a photograph, and Radiantly Alive's only film is "Welcome to Radiantly Alive" on YouTube. `HeroVideo` supports both:

1. **Preferred:** put encoded copies of the film (from Radiantly Alive's master) in `public/videos/hero/`. They are picked up at build time and played as a native muted, looping, inline `<video>` with the poster:
   ```bash
   ffmpeg -i master.mov -an -vf "scale=1920:-2" -c:v libvpx-vp9 -b:v 2.2M -row-mt 1 public/videos/hero/radiantly-alive-hero-1080.webm
   ffmpeg -i master.mov -an -vf "scale=1920:-2" -c:v libx264 -crf 24 -preset slow -movflags +faststart public/videos/hero/radiantly-alive-hero-1080.mp4
   ffmpeg -i master.mov -an -vf "scale=1280:-2" -c:v libx264 -crf 26 -preset slow -movflags +faststart public/videos/hero/radiantly-alive-hero-720.mp4
   ```
   Aim for ≤ 8 MB at 1080p and ≤ 4 MB at 720p, 15–30 s loops, no audio track.
2. **Until then:** on desktop the YouTube film plays as a muted, chromeless, cropped background, loaded after the page is idle and faded in once playing. Phones, Save-Data and reduced-motion visitors see the poster, which is always the LCP image.

The film was not downloaded from YouTube (platform terms).

---

## Stack

| Concern | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, Turbopack), React 19.2, TypeScript (strict) |
| Styling | Tailwind CSS 4, tokens in `src/app/globals.css` (`@theme`) |
| Fonts | `next/font`: Cormorant Garamond (display) + Manrope (text) |
| Motion | GSAP + ScrollTrigger + SplitText (scroll storytelling), Lenis (smooth scroll, on GSAP's ticker), Motion (mobile menu, dialog, accordion), CSS transitions (mega menu) |
| Icons / images | Lucide React; `next/image` (AVIF/WebP) with a generated media registry |

shadcn/ui was evaluated and not added: the few primitives needed are small, accessible and styled to the design system.

## Project structure

```
src/
  app/                    one folder per source URL (+ sitemap, robots, icons, 404, error)
  animations/             GSAP modules (reveal, text, image, parallax, stagger, horizontal pin)
  components/
    announcement-bar/     AnnouncementBar (server) + DismissAnnouncement (client)
    navbar/               SiteHeader: scroll states, mega-menu controller (client)
    mega-menu/            MegaMenuPanel
    mobile-menu/          MobileMenu (client dialog)
    hero/                 HomeHero (server), HeroVideo, HeroMotion (client)
    home/                 homepage sections
    blocks/               content block renderer + blocks, LiveWidget, EmailForm, LiteYouTube
    templates/            ContentPage (hero + blocks + JSON-LD)
    brand/  cards/  footer/  motion/  sections/  ui/
  content/
    types.ts              PageContent + block model (CMS contract)
    home.ts               homepage copy (verbatim)
    pages/<path>.ts       one document per inner page (verbatim source copy)
    ui-strings.ts         interface wording per language (en/es)
  data/                   site facts & integrations, navigation, media registry, teachers, classes, studio, testimonials
  lib/                    routes/resolveHref, redirects, SEO helpers, Lenis handle, utils
public/assets/            brand + photography by topic (descriptive names)
public/videos/hero/       drop-in location for the encoded hero film
scripts/media.mjs         asset pipeline; manifests in scripts/media/*.json
```

**Server vs client:** pages, blocks and sections are Server Components. Client JavaScript is limited to the header and menus, hero film and motion, the two motion providers, and the interactive pieces (accordion, class filter, forms, live widgets, video players, rail controls).

## Editing content

- **A page's copy:** edit `src/content/pages/<path>.ts`. Blocks are typed; RichText supports `*italic*`, `**bold**`, `[label](href)`.
- **Navigation:** `src/data/navigation.ts`. **Announcement bar:** `ANNOUNCEMENT` in `src/data/site.ts` (change `id` when the message changes).
- **Teachers / classes / shalas:** `src/data/teachers.ts`, `classes.ts`, `studio.ts`.
- **Images:** add `{ key, url, file, maxWidth, alt }` to a manifest in `scripts/media/`, run `node scripts/media.mjs`, then reference it as `<Media asset="key" />` or by key in a page document.

> Do not add a route-level `loading.tsx` around page content: the animation scanner mutates page DOM after hydration (see `ScrollAnimations.tsx`).

## Quality

- **Accessibility:** skip link; landmarks; one H1 per page; keyboard-operable mega menu (WAI disclosure pattern); focus-trapped mobile menu and dialogs with Escape; visible focus rings; 44px targets; alt text written per photo; `lang="es"` on Spanish pages; hero film pause control; full reduced-motion mode.
- **SEO:** per-page title, description, canonical, Open Graph/Twitter; sitemap of all routes; JSON-LD for Organization + studio, BreadcrumbList on every inner page, Course for trainings, Service for healings and shala rental.
- **Performance:** every route is static; `next/image` with explicit `sizes` and blur placeholders (no CLS); only the hero image is preloaded; third-party widgets and YouTube load only on demand (near the viewport, on click, or after idle).

## Verified

- `npm run lint` and `npm run build` are clean (31 pages prerendered).
- Browser QA on the production build: all 28 routes at 390px and 1440px return 200, with one H1 each, no horizontal overflow, no broken images, no console errors and no missing alt text. Mega menu hover, click and keyboard paths, the mobile menu and announcement dismissal were exercised. Both live booking widgets render real schedules.

## Known limitations

- **Logo:** traced from the only published file (50px PNG). Swap in Radiantly Alive's master vector when available (`public/assets/brand/`, `Logo.tsx`).
- **Hero film:** needs an encoded master in `public/videos/hero/` for mobile playback and to drop the YouTube dependency on desktop.
- **Forms:** Squarespace form backends can't be reused. Configure the endpoints above, or the forms keep handing off to the original pages.
- **Store, detail pages and teacher profiles** remain on radiantlyalive.com (linked).
- **Rights:** confirm usage rights for event posters (guest-teacher likenesses), portraits, and the rice-terrace image before public launch.
- Source copy errors kept verbatim are listed in `SITE_INVENTORY.md` §7.
