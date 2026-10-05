# Design System

**Radiantly Alive colour + House of Om typography:** a warm, art-directed system for Radiantly Alive. Photography carries the colour. Type carries the emotion. Motion carries the story.

Every token lives in `src/app/globals.css` (`@theme`). Components use the tokens, never raw hex values.

---

## 1. Colour (Radiantly Alive)

Every colour comes from radiantlyalive.com's own theme tokens: Squarespace `--accent-hsl`, `--black-hsl`, `--darkAccent-hsl`, `--lightAccent-hsl`, the section themes and the custom header CSS. No colour is invented; `ink-soft`, `mist` and `shade` are tints of the same plum.

| Token | Hex | Source on radiantlyalive.com | Role |
| --- | --- | --- | --- |
| `canvas` | `#F5F0E8` | `lightAccent` (light sections) | Page background |
| `paper` | `#FFFDEB` | ivory (light-bold sections) | Raised surfaces, cards, alternate sections |
| `sand` | `#EDE5D5` | white-bold section background | Quiet panels, image placeholders |
| `ink` | `#3A0D1F` | paragraph colour | Primary text and headings |
| `ink-soft` | `#6E4B57` | ink at reading strength | Secondary text, captions |
| `plum` | `#4A1328` | header, announcement and folder background | Primary dark surface: header, mega menu, footer, primary buttons |
| `wine` | `#5A162F` | `accent` | Inset surfaces on plum |
| `crimson` | `#9B1823` | `black` / dark section background | Accent text on light (eyebrows, heading emphasis, links), Online Studio surface, button hover |
| `saffron` | `#EF9000` | `darkAccent` | Accent on plum only: CTAs, eyebrows, numerals, heading emphasis |
| `cream` | `#FFFDEB` | text on dark sections | Text on dark surfaces |
| `mist` | `#E2CFCB` | (tint) | Secondary text on dark surfaces |
| `shade` | `#1C0810` | (tint) | Flat overlays on photography and film; keeps footage natural instead of casting it magenta |

### Accent per surface

One helper (`accentText` / `accentBg` in `components/blocks/Shell.tsx`) picks the accent for eyebrows, numerals and bullets:

| Surface | Accent |
| --- | --- |
| `canvas`, `paper`, `sand` | `crimson` |
| `plum` | `saffron` |
| `crimson` | `cream` (saffron is only 3.4:1 there) |

Heading emphasis (`<em>`) follows the same rule automatically through `--em-color`; the `surface-dark` utility switches it to saffron.

### Contrast (WCAG 2.2, measured)

| Pair | Ratio | Level |
| --- | --- | --- |
| ink / canvas | 14.7 | AAA |
| ink-soft / canvas | 6.6 | AA (AAA large) |
| crimson / canvas | 7.3 | AAA |
| cream / plum | 14.5 | AAA |
| mist / plum | 9.9 | AAA |
| saffron / plum (and plum on saffron buttons) | 6.1 | AA |
| cream / crimson | 8.0 | AAA |
| mist / crimson | 5.5 | AA |
| saffron / crimson | 3.4 | Large display text only |

`saffron` on `canvas` is 2.1:1, so it is **never** used for text on light backgrounds.

### Section rhythm

`plum` hero → `canvas` → `canvas` → `plum` (trainings) → full-bleed image → `paper` → `crimson` (online) → `canvas` → `paper` → `canvas` → image band → `plum` footer. Two dark sections never touch.

---

## 2. Typography (House of Om)

House of Om (houseofom.com) sets H1/H2 in **Bagnard** 400, H3/H4 in **Mulish** 600 and body copy in **Inter**, on a modest 1.25 ratio (H2 ≈ 46–55px, body 17–20px). This site uses the same three families in the same roles.

| Family | Token | Weights | Role | Loading |
| --- | --- | --- | --- | --- |
| **Bagnard** (Velvetyne, SIL OFL 1.1) | `font-display` | 400 | Display, H1, H2, serif H3, statement quotes, prices | Self-hosted WOFF2 (`src/app/fonts`, 7 KB) via `next/font/local` |
| **Mulish** | `font-heading` | 600, 700 | H3, H4, navigation, buttons, eyebrows | `next/font/google` |
| **Inter** | `font-sans` | 400, 500, 600 | Lead, body, small, captions, long quotes | `next/font/google` |

Bagnard has one weight and no italic. Emphasis inside display headings is therefore an **upright colour turn** (crimson on light, saffron on dark), never a synthesised slant. Bagnard lacks `—`, `¿` and `¡`; those glyphs fall back to Georgia.

### Scale (fluid `clamp()`, `src/app/globals.css`)

Every text element uses one of these utilities. Components contain no raw `text-[…]` sizes.

| Utility | Family / weight | Size | Line height | Use |
| --- | --- | --- | --- | --- |
| `type-display-xl` | Bagnard 400 | 2.75 → 5.75rem | 1.04 | Hero H1, full-bleed statements |
| `type-display-lg` | Bagnard 400 | 2.375 → 4.5rem | 1.06 | Page H1, section statements |
| `type-display-md` | Bagnard 400 | 2.125 → 3.375rem | 1.1 | Section H2, single quotes, stats |
| `type-display-sm` | Bagnard 400 | 1.5 → 2rem | 1.22 | Serif H3, menu folders, overlay card titles, prices |
| `type-h3` | Mulish 600 | 1.25 → 1.5rem | 1.3 | Card, feature, people and table titles |
| `type-h4` | Mulish 600 | 1.125rem | 1.35 | Menu links, FAQ questions, schedule times |
| `type-lead` | Inter 400 | 1.0625 → 1.25rem | 1.65 | Intro paragraphs, testimonial quotes |
| `type-body` | Inter 400 | 1 → 1.0625rem | 1.7 | Copy (also the `body` default) |
| `type-small` | Inter 400 | 0.9375rem | 1.6 | Card text, footer links, bios |
| `type-meta` | Inter 400 | 0.8125rem | 1.5 | Captions, dates, attributions, chips |
| `type-eyebrow` | Mulish 700, 0.18em, caps | 0.75rem | 1.3 | Section labels |
| `type-nav` | Mulish 600 | 0.875rem | 1.2 | Header navigation, filters, summaries |
| `type-button` | Mulish 700 | 0.875rem | 1.2 | All buttons |

Measures: `measure` (62ch) for body copy, `measure-lead` (40rem) for leads, `max-w-[15ch]` for the hero H1.

Rules:
- One `h1` per page. Section headings are `h2`, cards are `h3`.
- Large Bagnard is used intentionally, for hero and section statements only. Card titles and lists use Mulish.
- Multi-line quotes are set in Inter (`type-lead`); only single-sentence statements use Bagnard.

---

## 3. Spacing and layout

All layout values are CSS custom properties on `:root` in `globals.css`.

| Token | Value | Use |
| --- | --- | --- |
| `--container-max` | 90rem (1440px) | `.container-x` max width (header, sections, footer, rails) |
| `--gutter` | `clamp(1.25rem, 4vw, 3.5rem)` | `.container-x` padding, rail padding and snap |
| `--section-space` | `clamp(4.5rem, 9vw, 8rem)` | `.section-y` |
| `--section-space-tight` | `clamp(3.5rem, 6vw, 5rem)` | `.section-y-tight`, footer top |
| `--header-height` | 4.5rem (5rem ≥ 768px) | Header row, hero top padding, sticky offsets |

- **Grid:** 12 columns from `md`/`lg` with `gap-x-10` (`lg:gap-x-16` for image/text splits). Splits are image 5/12 plus text 6/12, with one empty column between.
- **Stack:** eyebrow → heading `mt-5`; heading → lead or copy `mt-6`; copy → CTA `mt-10`; block head → content `mt-12 md:mt-16`.
- Full-bleed rails start on the container's left edge: `px-[max(var(--gutter),calc((100% - var(--container-max))/2 + var(--gutter)))]`.

### Stacking order

| Layer | Token | Value |
| --- | --- | --- |
| Raised content | `--z-raised` | 10 |
| Mega-menu page scrim | `--z-scrim` | 40 |
| Header | `--z-header` | 50 |
| Mobile menu | `--z-dialog` | 60 |
| Video modal | `--z-dialog-top` | 70 |
| Skip link | `--z-skip` | 100 |

Breakpoints are the Tailwind defaults plus `xs` 30rem (480px) and `3xl` 105rem. Verified at 390, 768, 1024, 1280, 1440 and 1920.

---

## 4. Shape language

- **Frames:** `rounded-frame` (0.375rem) on images, cards, panels and video.
- **Controls:** `rounded-control` (0.5rem) on every button and the skip link, following House of Om's near-square buttons.
- **Chips:** filters, nested-program links and tags stay fully rounded so they read as tags, not buttons.
- **The arch** (`.shape-arch`) appears at most once per section.
- **Hairlines:** 1px `ink/10–14` on light, `cream/12–15` on dark. No drop shadows except the mega-menu panel.

---

## 5. Components

### Buttons (`src/components/ui/Button.tsx`)

| Variant | Light surface | Dark surface |
| --- | --- | --- |
| `primary` | `plum` bg, `cream` text, hover → `crimson` | `saffron` bg, `plum` text, hover → `cream` |
| `secondary` | 1px `plum/30` outline, hover → `plum` fill | 1px `cream/45` outline, hover → `cream` fill |
| `link` | Text + arrow, underline grows on hover, → `crimson` | same, `cream` → `saffron` |

- `type-button`, height 3rem (48px), padding 1.5rem, `rounded-control`.
- Below 480px, CTA groups stack at full width.
- The header "Book a Class", form submits, pricing "Purchase" and the error page use the same tokens.

### Cards

- **Offering cards** (homepage): uniform 4:5, title in `type-display-sm` over a plum gradient, numbered in saffron.
- **Content cards** (`cards` block): image, then a `type-h3` title, `type-small` text and chips, with the link CTA pinned to the bottom (`mt-auto`).
- **TeacherCard / people:** 4:5 portrait, `type-h3` name, eyebrow role, `<details>` bio.
- **TestimonialCard:** Bagnard quote mark, `type-lead` quote, `type-small` name, `type-meta` context.

### Brand mark

The official Radiantly Alive emblem is inlined as a vector (`src/components/brand/Logo.tsx`) and takes `currentColor`. The lockup pairs it with "RADIANTLY ALIVE" in Bagnard capitals at 0.2em tracking. The wordmark is hidden below 480px, and between 1024 and 1280px where the five navigation folders need the room. The favicon and apple-touch icon use plum and ivory.

### Header, announcement bar and mega menu

- **Announcement bar:** `crimson`, `type-meta`, cream underlined link.
- **Header:** transparent with cream text over heroes (with a `shade` veil); solid `plum` after 64px or while a menu is open, as on radiantlyalive.com. Navigation is `type-nav`; active and open states turn saffron. "Book a Class" is a saffron primary button.
- **Mega panels:** `plum`. Intro (eyebrow, `type-display-sm` statement, `type-small` text), links in `type-h4` with `type-meta` descriptions, nested programs as chips, and a feature card. Panels cap at `100dvh − header` and scroll inside if needed.
- **Mobile:** full-screen `plum` dialog, folders in `type-display-sm`, links in `type-h4`, full-width saffron "Book a Class".

### Content blocks (`src/components/blocks/`)

Inner pages are composed from typed blocks (`src/content/types.ts`), so every page shares one rhythm:

| Block | Layout |
| --- | --- |
| `intro` | Large statement, optional centred alignment and a small eyebrow note |
| `split` | Image (4:5, rect or arch) beside eyebrow / heading / copy / bullets / CTAs, alternating sides |
| `features` | Hairline grid of numbered items (2–4 columns) |
| `cards` | Image-led cards (portrait/landscape/square/natural), bullets, "Best for" note, link pills |
| `table` | Comparison table that becomes one card per column on phones |
| `pricing` | Rows of tiers with up to two price columns and purchase buttons |
| `schedule` | Sticky heading + timeline rows |
| `quote`, `testimonials`, `stats` | Proof, set in display serif |
| `faq` | Accessible accordion |
| `gallery` | Mosaic that adapts to 1–6 images |
| `people` | Portrait cards with `<details>` bios and link lists |
| `lists`, `prose` | Bulleted lists and long-form text (policies) |
| `video` | Lite YouTube (thumbnail + button; no-cookie player on click) |
| `embed` | Live Ribbon / Momence widgets, mounted near the viewport, with a fallback link |
| `form` | Email capture posting to a configurable endpoint |
| `cta` | Full-bleed image band with parallax, closing each page |

Tones (`canvas`, `paper`, `sand`, `plum`, `crimson`) alternate per page; two dark blocks never touch. Interface strings follow the page language (`src/content/ui-strings.ts`), so Spanish pages are Spanish throughout.

### Section header pattern

```
EYEBROW LABEL                       (type-eyebrow, accentText: crimson, saffron or cream)
Display headline with an *italic*   (type-display-md/lg)
turn.
Lead paragraph, max 36rem.          (type-lead, ink-soft)
```

---

## 6. Imagery

- Always `next/image` with intrinsic `width/height` from `src/data/media.ts` and `placeholder="blur"`, so there is zero CLS.
- Explicit `sizes` on every image. Only the hero uses `preload` (Next 16's replacement for `priority`).
- `object-position` is tuned per crop (faces and horizon kept in frame on mobile).
- Overlays are `plum` gradients to transparent; flat tints over photography and film use `shade`, never black.
- Photographs sit in `rounded-frame` (0.375rem) frames, never inside padded, shadowed "card" boxes.
- Posters with baked-in text (events, online trainings) render uncropped at their natural ratio.

---

## 7. Motion

### Principles

1. **Motion explains structure.** Reveals follow reading order, and parallax implies depth of place. Nothing loops.
2. **One gesture per section.** A section gets a headline reveal *or* a staggered group, plus at most one image effect.
3. **Transform and opacity only.** `clip-path` is used once per image, as a one-shot reveal. Nothing animates layout properties.
4. **Calm easing.** `power3.out` / `expo.out`. Durations: 0.6s (UI), 0.9–1.2s (reveals), scrubbed for parallax.
5. **Reduced motion is a first-class mode.** With `prefers-reduced-motion: reduce`:
   - Lenis is disabled (native scroll).
   - Parallax, pinning and horizontal scroll are off.
   - Reveals become instant (content is visible from first paint).
   - Counters show their final value.
6. **Mobile is lighter.** Below 768px parallax is off, line reveals are shorter (0.7s), and the testimonial pin becomes a vertical list.

### Library split

| Concern | Tool | Where |
| --- | --- | --- |
| Smooth scroll | Lenis (driven by `gsap.ticker`) | `src/components/motion/SmoothScroll.tsx` |
| Scroll reveals, text/image reveal, parallax, stagger, counters, horizontal pin | GSAP + ScrollTrigger + SplitText | `src/animations/*.ts`, wired by `src/components/motion/ScrollAnimations.tsx` |
| Hero entrance timeline | GSAP | `src/components/hero/HeroMotion.tsx` |
| Mobile menu, video modal, FAQ accordion | Motion (`motion/react`) | `src/components/mobile-menu/MobileMenu.tsx`, `src/components/ui/VideoModal.tsx`, `src/components/ui/Accordion.tsx` |
| Mega menu open/close, announcement collapse | CSS transitions (`clip-path`, `grid-template-rows`) | `globals.css` → "Header" |
| Hero film fade-in | CSS opacity transition after the first played frame | `src/components/hero/HeroVideo.tsx` |

### Declarative API (Server Components stay server-side)

Sections are Server Components. They opt into motion with data attributes, and one client component scans the page after each navigation:

| Attribute | Effect |
| --- | --- |
| `data-reveal` | Fade + rise 40px when 85% into view |
| `data-reveal-delay="0.2"` | Optional delay (seconds) |
| `data-text-reveal` | SplitText line mask reveal (headlines) |
| `data-image-reveal` | Clip-path from bottom + inner scale 1.08 → 1 |
| `data-parallax="0.15"` | Scrubbed `yPercent` drift; value = strength |
| `data-stagger` | Children with `data-stagger-item` reveal in sequence |
| `data-counter="900"` | Count-up on entry (`data-counter-suffix="+"`) |
| `data-horizontal` | Pinned horizontal track (desktop, motion allowed) |

Before JavaScript runs, `.js [data-reveal]` and similar elements are hidden. A 2.5s CSS fallback reveals them if scripts never load, so content can never be stranded.

---

## 8. Accessibility rules baked into the system

- Visible `:focus-visible` ring on every interactive element (saffron, 2px, offset 3px).
- A skip link is the first focusable element.
- Touch targets are ≥ 44×44px.
- Text over images always sits on a gradient that guarantees ≥ 4.5:1 in the text area.
- Headline animations never leave text unreadable: no blur, no letter scatter, and the final state is always static text.
- Motion components respect `useReducedMotion()`, and GSAP checks `matchMedia`.
