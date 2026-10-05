# Site Inventory

What the rebuild takes from **radiantlyalive.com** (content, assets, navigation, links, functionality) and from **houseofom.com** (UI/UX patterns only), and where each piece lives in this codebase.

Audit date: 2026-10-05. The raw source was fetched page by page (HTML + text) for every URL in the header, footer and folder redirects.

---

## 1. Navigation (source of truth: `src/data/navigation.ts`)

The source header has five folders. None of the folder titles is a page; each folder URL redirects to its first item. The rebuild keeps the same labels, order, nesting and URLs, and presents each folder as a mega menu.

| Folder | Folder URL (→ redirect) | Items (label → URL) |
| --- | --- | --- |
| **Yoga Teacher Trainings** | `/ytt` → `/yoga-teacher-training-2026-1` | Start Here → `/yoga-teacher-training-2026-1`<br>200hr Bali → `/200hr-yoga-teacher-training-ra-vinyasa-ubud`<br>300hr Bali → `/300hr-yoga-teacher-training-ra-vinyasa-ubud`<br>Hybrid Training → `/ytt-hybrid`<br>  └ Bali Hybrid → `/200h-ytt-ra-vinyasa-hybrid-bali-eng`<br>  └ Morocco Hybrid → `/200h-ytt-ra-vinyasa-hybrid-morocco-eng`<br>En Español (label only on source, `href="#"`)<br>  └ 200hr Inmersión Bali → `/200hour-yoga-teacher-training-spanish-1`<br>  └ 200hr Híbrido Bali → `/200hour-yoga-teacher-training-spanish`<br>Leadership Path → `/ra-movement-academy` |
| **Ubud Studio** | `/ubud-studio` → `/classes` | Class Schedule → `/classes`<br>Studio Workshops & Events \| Ubud → `/studio-workshops-events-ubud`<br>Short Trainings → `/short-trainings-overview`<br>Studio Healings → `/healing-studio`<br>Our Teachers → `/our-teachers`<br>Shala Rental → `/shala-rental` |
| **Retreats & Events** | `/european-events` → `/retreats` | Bali Retreats → `/retreats` |
| **Online Studio** | `/online-studio` → `/ra-online-monthly-membership` | Online Studio & Community → `/ra-online-monthly-membership`<br>Online Events & Trainings → `/online-events`<br>Online Healings → `/bali-healings-online` |
| **RA Movement** | `/ra-movement` → `/radiantly-alive-teachers` | RA Teachers Worldwide → `/radiantly-alive-teachers`<br>Referral Program → `/referral-program`<br>YTT Scholarship Waitlist → `/ytt-scholarship-waitlist`<br>Subscribe to our Newsletter → `/newsletter-subscribe`<br>Careers → `/careers` |

Rebuild notes:
- "En Español" has no page on the source; in the menu it links to the Inmersión page and shows both Spanish programs as nested options.
- Each mega menu adds an intro (eyebrow, title, line) and a feature card (image + CTA). All of their copy is taken from the folder's own source pages.
- Desktop: hover with intent delays, click to pin, WAI disclosure-navigation keyboard model (Enter/Space, ArrowDown into the panel, Up/Down within it, Left/Right/Home/End across folders, Escape returns focus). Mobile: full-screen dialog with one accordion per folder, focus trap, Escape, scroll lock.
- Header CTA "Book a Class" → `/classes` (the source's main conversion page).

### Footer (source → `FOOTER_NAV`, `LEGAL_NAV`)

| Column | Links |
| --- | --- |
| Let's connect | info@radiantlyalive.com · Radiantly Alive Yoga Studio, Jl. Jembawan No. 3, Ubud, Bali · Google Maps · Instagram, Facebook, YouTube, TikTok |
| Ubud Studio | Class Schedule, Workshops & Events, Healings, Our Teachers, Shala Rental, Careers |
| Grow With Us | Yoga Teacher Training, Short Training, Retreats, Online Studio, Leadership Path |
| RA Movement (added: mirrors the header folder) | RA Teachers Worldwide, Referral Program, YTT Scholarship Waitlist, Subscribe to our Newsletter, Careers |
| Legal | Privacy Policy (`/radiantly-alive-privacy-policy`), Terms of Service (`/terms-of-service-studio`, on source), Contact |
| Signature | "Come for Yoga · Stay for Family", newsletter "Join the Community" |

### Announcement bar (`src/data/site.ts → ANNOUNCEMENT`)

Source (Squarespace announcement bar settings): *"Join our November 200HR & 300HR Yoga Teacher Trainings — Limited spots available → Enrol today!"* → `/yoga-teacher-training-2026-1`. The rebuild keeps the message and link, adds a close button whose dismissal is remembered per message `id`, and collapses the bar once the page scrolls.

---

## 2. Pages and routes

Every page is at its **original path**. Inner pages are `PageContent` documents in `src/content/pages/<path>.ts`, rendered by `src/components/templates/ContentPage.tsx`. Their copy is verbatim from the source page.

| Route | Source page | Notes |
| --- | --- | --- |
| `/` | Homepage | Hero, vision + manifesto film, "Your Yoga Home" + 6 offerings, Teacher Trainings, "Come for Yoga - Feel Radiantly Alive", Stay Connected, Online Studio. Added per brief: Teachers rail, RA Movement, graduate words, closing CTA. Copy in `src/content/home.ts`. |
| `/yoga-teacher-training-2026-1` | Start Here | Programs (`#proof`), comparison table (`#comparison`), Why Bali, six reasons, daily rhythm, graduate quote. |
| `/200hr-yoga-teacher-training-ra-vinyasa-ubud` | 200H Bali Immersion | Two source films (lite YouTube), modules, faculty, cohorts (`#cohort`), pricing (`#investment`), FAQ. |
| `/300hr-yoga-teacher-training-ra-vinyasa-ubud` | 300H Advanced | Dates (`#dates`), pricing (`#investment`), faculty, FAQ. |
| `/ytt-hybrid` | Hybrid overview | Bali / Morocco / Spanish variants. |
| `/200h-ytt-ra-vinyasa-hybrid-bali-eng` | Bali Hybrid | Dates (`#dates`), guide sign-up, FAQ. |
| `/200h-ytt-ra-vinyasa-hybrid-morocco-eng` | Morocco Hybrid | Three source films, Taroudant travel/medical info with original external links. |
| `/200hour-yoga-teacher-training-spanish-1` | 200hr Inmersión Bali (Spanish) | `lang="es"`, lead form `#mi-seccion`. |
| `/200hour-yoga-teacher-training-spanish` | 200hr Híbrido Bali (Spanish) | `lang="es"`, scholarship link. |
| `/ra-movement-academy` | Leadership Path | Seed → Bud → Blossom → Pod, join steps, testimonials, FAQ. |
| `/classes` | Class Schedule | **Live Ribbon/Momence weekly schedule** (`#schedule`), passes with Momence purchase links (`#pass`), policies, filterable class descriptions (`#desc`), private classes. |
| `/studio-workshops-events-ubud` | Workshops & Events | **Live Momence host-schedule widget** (`#schedule`). |
| `/short-trainings-overview` | Short Trainings | Posters (uncropped), dates, faculty, "RESERVE NOW" links. |
| `/healing-studio` | Studio Healings | 8 practitioners and their modality links. |
| `/our-teachers` | Our Teachers | 23 teachers, verbatim bios (`src/data/teachers.ts`). |
| `/shala-rental` | Shala Rental | 5 shalas: size, capacity, prices, features. |
| `/retreats` | Bali Retreats | → `/wellness-retreat-bali`. |
| `/wellness-retreat-bali` | Me-Time. My Way. | 4/8-day options, inclusions, add-ons, partner hotels. |
| `/ra-online-monthly-membership` | Online Studio & Community | Trial CTAs → Mighty Networks sign-up. |
| `/online-events` | Online Events & Trainings | Three training posters. |
| `/bali-healings-online` | Online Healings | 4 practitioners, modality links. |
| `/radiantly-alive-teachers` | RA Teachers Worldwide | 20 graduate cards → source profiles, 33 country categories. |
| `/referral-program` | Referral Program | Steps, email + WhatsApp contacts. |
| `/ytt-scholarship-waitlist` | Scholarship Waitlist | Waitlist form. |
| `/newsletter-subscribe` | Newsletter | Newsletter form. |
| `/careers` | Careers | Google Form link. |
| `/radiantly-alive-privacy-policy` | Privacy Policy | Full text. |
| `/contact` | (no source page) | Kept from the previous build. Target for the source's popup forms (see §5). |

Permanent redirects (`src/lib/redirects.ts`): the five folder URLs, `/200h-ytt-ra-vinyasa-hybrid` → `/ytt-hybrid`, and the previous build's routes (`/trainings…`, `/workshops`, `/healings`, `/teachers`, `/online`, `/about`).

### Source pages not rebuilt (linked to radiantlyalive.com automatically)

`resolveHref` (`src/lib/routes.ts`) keeps rebuilt paths internal and sends any other source path to the live site, so no link breaks:

- Store products: `/tt-classes-retreats/p/...` (training purchase pages).
- Detail pages: `/bali-healing/*` and other healing modalities, the online healing modality pages, the short-training detail pages, the online training pages, `/radiantly-alive-teachers/<slug>` profiles and `/category/<Country>`.
- Forms and terms: `/movement-category-form`, `/ra-teacher-directory-form`, `/ytt-scholarship`, `/accommodation`, `/terms-of-service`, `/terms-of-service-studio`, `/wellnes-tc`.

---

## 3. Brand assets

| Asset | Source | Local |
| --- | --- | --- |
| Logo (four-petal emblem) | `ra-logo50x50.png`: the only published logo file (50×50 white PNG, also the OG image) | `public/assets/brand/radiantly-alive-logo-original-50.png` (original) and `radiantly-alive-logo.svg` (1:1 vector trace of that PNG). `src/components/brand/Logo.tsx` inlines the traced path. |
| Wordmark | The lockup used in Radiantly Alive's own film ("RADIANTLY ALIVE" in spaced serif capitals beside the emblem) | Set in the display font next to the emblem. |
| Favicon / apple icon | Emblem | `src/app/icon.svg`, `src/app/apple-icon.png` |
| Yoga Alliance badges | `200-RYS.png`, `300-RYS.png`, `YACEP.png` | `public/assets/brand/yoga-alliance-*.png` |
| Review badges | `greview-128.jpeg`, `trip-advisor-128.jpeg` | `public/assets/brand/*-badge.jpg` |

**Replace when available:** ask Radiantly Alive for the master vector logo. The trace matches the published mark, but a 50px raster is the only source.

---

## 4. Hero film

- The source hero is a still photograph (`Radiantly Alive 2020-2349.jpg`, 1200×800) with a parallax effect. Its section video config is `videoSourceProvider: none`.
- The only Radiantly Alive film is **"Welcome to Radiantly Alive"** (YouTube `8iAwM_JQs68`), embedded on the source homepage as the manifesto video.
- Implementation (`src/components/hero/HeroVideo.tsx`):
  1. **Native video (preferred):** drop encoded files into `public/videos/hero/` (names in `HERO_VIDEO.local`, `src/data/site.ts`). They are detected at build time and played as `<video autoplay muted loop playsinline poster>`, with a separate 720p file for phones.
  2. **Until then:** desktop visitors get the official YouTube film as a muted, chromeless, letterbox-cropped background loop (no-cookie host). It loads only after the page is idle and fades in only once frames are playing.
  3. Phones without an encoded file, Save-Data and `prefers-reduced-motion` keep the poster (`heroJungleShala`, 2400px, the LCP image).
  - Pause/play control (WCAG 2.2.2); playback pauses when the hero leaves the viewport.
  - "Watch our Manifesto Video" opens the same film with sound in a dialog.
- The film was **not** downloaded from YouTube (platform terms). See README, "Hero video", for encoding commands once Radiantly Alive supplies the master file.

---

## 5. Functionality preserved

| Source functionality | Rebuild |
| --- | --- |
| Class schedule + booking (Ribbon weekly view, host 5617) | Same widget, same config, lazy-mounted (`embed` block `ribbon-schedule`) |
| Workshops calendar (Momence host-schedule, `session_type=workshop`) | Same widget, same attributes (`embed` block `momence-workshops`) |
| Class pass purchases | Exact momence.com membership links |
| Training purchases | Exact `/tt-classes-retreats/p/...` store links (early bird / regular) |
| Online studio trial | `https://radiantly-alive-online-community.mn.co/sign_up` |
| Newsletter / waitlist / guide sign-ups (Squarespace forms) | `form` blocks: POST to `NEXT_PUBLIC_NEWSLETTER_ENDPOINT` / `NEXT_PUBLIC_WAITLIST_ENDPOINT`, otherwise they open the original source form |
| Popup forms without URLs ("Make an appointment", "Book private class", shala rental, training contact) | `/contact?topic=…` (prefilled topic), or the source's own mailto where the page publishes one (wellness retreat: Johanne's address; trainings: ra.ytt@/info@) |
| Careers application | Original Google Form |
| Manifesto + training films | Lite YouTube embeds (no-cookie, load on click) |
| Class description browsing | Filterable list (`class-filter`), all 35 source descriptions |

---

## 6. Assets

Every image comes from radiantlyalive.com. Each one is listed with its source URL (or as a pre-existing local file) in a manifest under `scripts/media/`. `node scripts/media.mjs` downloads, optimises (≤2000px JPEG / palette PNG) and regenerates the typed registry `src/data/media.ts` (dimensions, alt text, blur placeholder).

| Manifest | Entries | Covers |
| --- | --- | --- |
| `core.json` | 76 | Assets from the first build (studio, community, teachers, trainings, online, retreats) |
| `home.json` | 8 | Homepage offering tiles, Yoga Alliance + review badges |
| `trainings-en.json` | 16 | Start Here, 200H, 300H |
| `trainings-hybrid.json` | 37 | Hybrid overview, Bali, Morocco |
| `trainings-es.json` | 22 | Spanish programs |
| `studio.json` | 18 | Classes, healings, shalas, short trainings |
| `retreats.json` + `retreats-online.json` | 40 | Retreats, online studio, online healings |
| `movement.json` | 38 | Leadership Path, teacher directory, referral |

Alt text was written after looking at each photograph. Rights to confirm before public launch: event posters with guest-teacher likenesses, all teacher and graduate portraits, and `ubud-rice-terraces.jpg` (possibly stock on the source).

---

## 7. Source content notes (for Radiantly Alive)

These are kept verbatim but are worth correcting at the source:

- The Morocco Hybrid FAQ is copied from the Bali page: several answers mention Bali/Ubud, one repeats half a sentence, and "Will I have free time?" starts with "However,". Its "Hybrid Journey" says "before arriving in Bali".
- The Bali Hybrid FAQ "Is accommodation included?" answer on the live site is placeholder text ("PLACEHOLDER — Confirm per track…"), so it was omitted.
- Graduate figures differ across pages (900+ vs 1,000+, 80+ vs 90+ countries); each page keeps its own wording.
- The 200H page says "Two cohorts open for 2026" but lists only November.
- Typos kept as published: "bellow", "commiting", "opportunites", "Whataspp".

---

## 8. UI/UX reference: House of Om (patterns only)

Studied for layout and interaction; none of its text, images, logo, data or code is used.

| Pattern observed | Applied as |
| --- | --- |
| Full-bleed cinematic hero, centred serif statement, one primary CTA | Home hero: film + poster, centred display headline, "Find your path" / "Class Schedule" |
| Mega dropdown grouping programs | Five editorial mega menus (intro · links · feature card) |
| One idea per section: serif headline → short copy → image → CTA | Every content block follows this order |
| Warm off-white canvas, muted green, photography provides the colour | Canvas `#F4EEE3`, jungle/moss greens, plum and saffron from the RA brand |
| Large program cards, trust strip after the hero | Image-led program/offering cards, credential line in the hero, key-facts strip under inner heroes |
| Conversational close ("Let's map out your path") | Image-backed CTA band at the end of each page |
| Weaknesses avoided | Carousels hiding content (replaced by visible grids/rails), exit-intent modal, icon-font payload |
