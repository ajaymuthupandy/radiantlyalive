# Design System

**Radiantly Alive:** photography carries the colour, Bagnard carries the voice, and everything else stays quiet. The system was tightened in October 2026 after a UI audit found the site read as template-built: too many typefaces, surfaces, accents, labels and arrows. The rule now is *fewer things, each with one job*.

Every token lives in `src/app/globals.css` (`@theme`). Components use the tokens, never raw hex values.

---

## 1. Colour

Values come from radiantlyalive.com's own theme tokens. Each colour has one job.

| Token | Hex | Role |
| --- | --- | --- |
| `canvas` | `#F5F0E8` | **The only light background** |
| `sand` | `#EDE5D5` | Inset panels and cards on canvas, image placeholders |
| `ink` | `#3A0D1F` | Primary text and headings |
| `ink-soft` | `#6E4B57` | Secondary text, captions, kickers |
| `plum` | `#4A1328` | **The only dark background**: header, panels, dark sections, footer |
| `saffron` | `#EF9000` | **Action only**: primary buttons, focus ring, active nav underline |
| `saffron-deep` | `#D98200` | Primary button hover |
| `crimson` | `#9B1823` | Small accents on light only (quote marks, inline links). Never a surface |
| `cream` | `#FFFDEB` | Text on plum |
| `mist` | `#E2CFCB` | Secondary text on plum |
| `shade` | `#1C0810` | Announcement bar, flat overlays on photography and film |

Retired: `paper` (duplicate of cream, and a second off-white that looked yellow next to canvas) and `wine`.

Content blocks still accept the old tones (`paper`, `sand`, `crimson`), but `surfaceOf()` in `components/blocks/Shell.tsx` renders them as canvas or plum. Two consecutive blocks on the same surface are separated by a hairline, not a colour change.

### Contrast (WCAG 2.2, measured)

| Pair | Ratio | Level |
| --- | --- | --- |
| ink / canvas | 14.7 | AAA |
| ink-soft / canvas | 6.6 | AA (AAA large) |
| crimson / canvas | 7.3 | AAA |
| cream / plum | 14.5 | AAA |
| mist / plum | 9.9 | AAA |
| ink / saffron (primary button) | 7.0 | AAA |

`saffron` on `canvas` is 2.1:1, so it is **never** used for text on light backgrounds.

### Section rhythm (homepage)

hero film → `canvas` (vision, studio) → `plum` (trainings) → photo band → `plum` (online) → `canvas` (teachers, movement, graduates, separated by hairlines) → photo band (closing invitation) → `plum` footer.

---

## 2. Typography

Two families: **Bagnard** for display, **Mulish** for everything else.

| Family | Token | Weights | Loading |
| --- | --- | --- | --- |
| **Bagnard** (Velvetyne, SIL OFL 1.1) | `font-display` | 400 | Self-hosted WOFF2 (`src/app/fonts`) via `next/font/local` |
| **Mulish** | `font-sans` | 400, 600, 700 | `next/font/google` |

Bagnard has one weight and no italic. `<em>` inside display headings renders as plain heading text: no slant and no colour turn. Accent-coloured last phrases were one of the clearest template tells. Bagnard lacks `—`, `¿` and `¡`; those glyphs fall back to Georgia. Copy uses the spaced en dash ( – ) throughout.

### Roles

There are eight roles. If a style isn't in this table, it doesn't go on the page. Components contain no raw `text-[…]` sizes on headings.

| Utility | Family / weight | Size | Use |
| --- | --- | --- | --- |
| `type-display-xl` | Bagnard 400 | 2.75 → 5.5rem | Hero h1 only |
| `type-display-lg` | Bagnard 400 | 2.25 → 3.75rem | Every section h2 and page h1 |
| `type-display-sm` | Bagnard 400 | 1.5 → 2rem | Card titles, pull quotes, stats |
| `type-h3` | Mulish 600 | 1.1875rem | List headings, menu items, names |
| `type-lead` / `type-body` | Mulish 400 | 1.0625–1.1875rem / 1–1.0625rem | Opening paragraph / all other copy |
| `type-small` | Mulish 400 | 0.875rem | Meta, captions, roles, credits |
| `type-nav` / `type-button` | Mulish 600 / 700 | 0.9375rem | Navigation / buttons |
| `type-label` | Mulish 700, 0.12em caps | 0.75rem | Footer column titles only |

`type-eyebrow` is a quiet sentence-case kicker (Mulish 600, 0.875rem). It appears only where a block has no heading; `BlockRenderer` drops a block's eyebrow when the block has a heading, because the kicker would only repeat it.

Rules:
- One `h1` per page. Section headings are `h2`, cards are `h3`.
- No uppercase tracked labels above headings.
- Numbers only where order is real (the Seed → Bud → Blossom → Pod path), never on cards, programmes or social links.
- Each fact has one home on a page. On the homepage: the stats sit in the trainings block, the tagline in the closing invitation, and the film in the hero.
- Year counts derive from `SITE.foundingYear` via `yearsRunning()` (`src/data/site.ts`), never hard-coded.

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
- **Stack:** heading → lead or copy `mt-6`; copy → CTA `mt-10`; block head → content `mt-12 md:mt-16`.
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
- **Chips:** filters and tags stay fully rounded so they read as tags, not buttons.
- **The arch** (`.shape-arch`) appears at most once per section.
- **Hairlines:** 1px `ink/10–14` on light, `cream/12–15` on dark. No drop shadows except the mega-menu panel.

---

## 5. Components

### Buttons (`src/components/ui/Button.tsx`)

| Variant | Style |
| --- | --- |
| `primary` | `saffron` bg, `ink` text, hover → `saffron-deep`. The same on every surface |
| `secondary` | 1px outline in `currentColor` at 40%, hover → full `currentColor` |
| `link` | Text with a quiet underline that strengthens on hover |

- `type-button`, height 3rem (48px), padding 1.5rem, `rounded-control`.
- No arrows, except the ↗ on links that leave the site.
- A section has at most one primary; a second action is a `link`.
- The header "Book a class", form submits and pricing "Purchase" use the same tokens.

### Cards

- **Offering cards** (homepage): 4:5 photograph, title in `type-display-sm` below it. No numbers, no arrow circles.
- **Content cards** (`cards` block): image, then a `type-h3` title, `type-small` text, with the link CTA pinned to the bottom (`mt-auto`).
- **TeacherCard / people:** 4:5 portrait, `type-h3` name, `type-small` role in `ink-soft`, `<details>` bio.
- **TestimonialCard:** Bagnard quote mark in crimson (mist on plum), `type-lead` quote, `type-small` name and context.

### Brand mark

The official emblem is inlined as a vector (`src/components/brand/Logo.tsx`) and takes `currentColor`. The lockup pairs it with "Radiantly Alive" in Bagnard, mixed case, at its natural spacing. The name is always visible, at every width. The favicon and apple-touch icon use plum and ivory.

### Header, announcement bar and menus

- **Announcement bar:** `shade`, `type-small`, one underlined link, no arrow.
- **Header:** solid `plum` from the first frame with a 1px `cream/10` rule. Four sections (Trainings, Studio, Retreats, Online) in `type-nav`. Each label is a real link to its hub page, and the active section has a saffron underline. Groups with more than one destination have a small chevron button for keyboard and touch. On the right sit a quiet "Schedule" text link and the saffron "Book a class". RA Movement lives in the footer and the mobile menu.
- **Panels:** open on hover after 150ms of intent, or via the chevron. They hold the destinations (`type-h3` + `type-small` description, sub-links as plain underlined text) and at most one featured item. They close on Escape, outside click, route change and after 48px of scroll.
- **Mobile:** full-screen `plum` dialog, groups in `type-display-sm`, links in `type-h3`, full-width saffron "Book a class".

### Content blocks (`src/components/blocks/`)

Inner pages are composed from typed blocks (`src/content/types.ts`), so every page shares one rhythm:

| Block | Layout |
| --- | --- |
| `intro` | Large statement, optional centred alignment and a small note |
| `split` | Image (4:5, rect or arch) beside heading / copy / bullets / CTAs, alternating sides |
| `features` | Hairline grid of items (2–4 columns), numbered only when `numbered` is set |
| `cards` | Image-led cards (portrait/landscape/square/natural), bullets, "Best for" note |
| `table` | Comparison table that becomes one card per column on phones |
| `pricing` | Rows of tiers with up to two price columns and purchase buttons |
| `schedule` | Sticky heading + timeline rows |
| `quote`, `testimonials`, `stats` | Proof |
| `faq` | Accessible accordion |
| `gallery` | Mosaic that adapts to 1–6 images |
| `people` | Portrait cards with `<details>` bios and link lists |
| `lists`, `prose` | Bulleted lists and long-form text (policies) |
| `video` | Lite YouTube (thumbnail + button; no-cookie player on click) |
| `embed` | Live Ribbon / Momence widgets, mounted near the viewport, with a fallback link |
| `form` | Email capture posting to a configurable endpoint |
| `cta` | Full-bleed image band with parallax, closing each page |

Interface strings follow the page language (`src/content/ui-strings.ts`), so Spanish pages are Spanish throughout.

### Section header pattern

```
Display headline                    (type-display-lg)
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
6. **Mobile is lighter.** Below 768px parallax is off, line reveals are shorter (0.7s), and nothing pins.

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
| `data-horizontal` | Pinned horizontal track. Available, but not used on the homepage: scroll-jacking fights trackpads |

Before JavaScript runs, `.js [data-reveal]` and similar elements are hidden. A 2.5s CSS fallback reveals them if scripts never load, so content can never be stranded.

---

## 8. Accessibility rules baked into the system

- Visible `:focus-visible` ring on every interactive element (saffron, 2px, offset 3px).
- A skip link is the first focusable element.
- Touch targets are ≥ 44×44px.
- Text over images always sits on a gradient that guarantees ≥ 4.5:1 in the text area.
- Headline animations never leave text unreadable: no blur, no letter scatter, and the final state is always static text.
- Motion components respect `useReducedMotion()`, and GSAP checks `matchMedia`.
