# AGENTS.md

Guidance for AI agents and maintainers working on the Australian Male Choir (AMC) marketing website.

## Mission & context

AMC is a group of Australian male singers, incorporating professionally trained opera vocalists, who perform
across a wide range of genres — from harmonised Italian arias to jazz and pop — both within Australia and
internationally, from large-scale concerts to small private performances.

The site has two jobs:

1. **Showcase** AMC’s performance history and range — establishing credibility, scale and versatility.
2. **Convert enquiries** — making it easy for event organisers, venues and private individuals to request AMC.

Structural core: **“Events We Perform”**, built as a categorised/navigable section (not a flat page) with the
categories Concerts (large-scale), Corporate Events, Weddings, Private Parties & Birthdays, and Past Performances.

## Stack

- **React 19 + Vite 8** — static SPA (`npm run dev`, `npm run build` → `dist/`)
- **Tailwind CSS v4** via `@tailwindcss/vite` (no `tailwind.config.js`; tokens live in `src/index.css`)
- **React Router v7** — `BrowserRouter`, SPA routing (GitHub Pages 404 bounce: `scripts/gh-pages-404.mjs` + restore script in `index.html`)
- **lucide-react** for UI icons; brand/social icons are inline SVGs (`src/components/SocialIcons.jsx`)
- **oxlint** via `npm run lint`

## Commands

```bash
npm install
npm run dev       # dev server (http://localhost:5173)
npm run lint      # oxlint
npm run build     # production build → dist/
npm run preview   # preview production build
```

Always run `npm run lint` and `npm run build` after making changes. Never leave the build or lint failing.

## Design system

Dark, minimal, ROMCA-influenced but distinct. No borders at the tops of sections; sections separate by
alternating backgrounds. No numbered “01/02” index labels anywhere. Hairline rules appear only as
row/bottom dividers and the header/footer edges.

### Tokens (`src/index.css`, `@theme`)

| Token | Value |
| --- | --- |
| `ink` | `#f4f3ef` |
| `mute` | `#989690` |
| `dim` | `#6e6d68` |
| `bg` | `#0b0b0c` |
| `bg-1` | `#121214` |
| `bg-2` | `#18181a` |
| `line` | `#26262a` |
| `line-2` | `#39393e` |
| `gold` | `#c2a25b` |
| `gold-2` | `#dcc084` |

Fonts: **Outfit** (sans, 100–600) + **Playfair Display** (serif, italic for pull quotes only).

### Component classes

- `.headline` — section/page titles: sans extralight, tracking-tight, sentence case.
- `.label` / `.label-light` — small letterspaced uppercase labels (mute / ink).
- `.btn`, `.btn-gold`, `.btn-line`, `.btn-ghost` — buttons (solid gold / outlined / text link).
- `.field`, `.field-line` — form inputs (bordered / underline).
- `.link-arrow` — text link with arrow.

### Shared components

- `src/components/PageHero.jsx` — interior page header: `title`, `subtitle`, optional `crumb`.
  Titles use `.headline` (not serif-caps; not oversized white blocks). No kickers/overlines.
- `src/components/SectionHeading.jsx` — `title`, `sub`, `center`, `rule`. Renders an
  `Ornament` (short hairlines + diamond) only when `rule` is true.
- `src/components/Ornament.jsx` — the `line ◆ line` divider used under centered headings.
- `src/components/ArtPlaceholder.jsx` — muted placeholder in place of real imagery (film-grain + faint logo mark from `/amc-mark.svg`).
- `src/components/CategoryIcons.jsx` — icon per event slug (`concerts`, `corporate`, `weddings`, `private`, `past`).
- `src/components/Logo.jsx`, `src/components/Button.jsx`, `src/components/SocialIcons.jsx`.
- `src/layout/Navbar.jsx`, `src/layout/Footer.jsx`.

## Routing (set)

| Route | Page |
| --- | --- |
| `/` | Home (hero “PRESENTING THE”, events band, why-book, repertoire band, facts, testimonials, latest, CTA) |
| `/about` | About hub → three child sections |
| `/about/story` | Our Story (story, milestones, values) |
| `/about/choir` | Meet the Choir |
| `/about/repertoire` | Genres & Repertoire |
| `/events` | Events We Perform hub + “How it works” |
| `/events/:slug` | Per-occasion page (concerts, corporate, weddings, private, past) |
| `/media` | Video / Photos / Recordings (photos are filterable by tab) |
| `/enquire` | Primary conversion page (merged contact) |
| `/contact` | `Navigate` → `/enquire` |
| `/news`, `/news/:slug` | News list + article |
| `/privacy`, `/terms` | Legal pages (placeholder copy in `src/pages/Legal.jsx`) |

## Content model

All copy, categories, events, repertoire, choir, news and media live in **`src/data/siteData.js`** — one file,
no content CMS. Key exports: `EVENT_CATEGORIES`, `eventsData`, `repertoireGenres`, `choirMembers`, `newsData`,
`mediaItems`, `videoItems`, `audioItems`, `socialLinks`, plus contact constants `CONTACT_EMAIL`,
`CONTACT_PHONE`, `CONTACT_CITY`. `audioItems` carries a `src`; files live in `public/audio/` and are played
inline on `/media` (a track renders "Recording coming soon" until its file exists). `videoItems` carry a `src`
plus `image` poster; drop files at `public/videos/video-N.mp4` (matched 1:1 by id). `/media` has a custom
player for both — gold ring play/pause, hairline seek bar, `elapsed · total` readout, mute + fullscreen for
video. Media playback is exclusive: a shared `mediaRefs` registry in `Media.jsx` pauses every other audio/video
element before anything new plays.

### EVENT_CATEGORIES shape

5 categories with slugs `concerts`, `corporate`, `weddings`, `private`, `past`. Each has `slug`, `label`,
`icon`, `description`. The four bookable ones also carry `size` (ensemble) and `points[]` (approach bullets),
which feed the `/events/:slug` pages. `past` is the archive (no `points`). Enquire’s dropdown lists the four
bookable categories only.

## Enquiry form & Formspree

`/enquire` is the only conversion target and the hub for contact details (email/phone/city/office hours/socials).

- Form posts to **Formspree** (AJAX `POST https://formspree.io/f/<id>`); the form ID comes from the
  `VITE_FORMSPREE_ID` repository variable injected at build time.
- `_gotcha` is the honeypot field — Formspree silently drops submissions where it's filled.
- On `import.meta.env.DEV` the submit short-circuits to the success screen (no POST) so localhost never
  burns submissions.
- Deep-links `/enquire?category=<slug>` preset the dropdown (bookable slugs only).
- Notifications go to `admin@australianmalechoir.com.au`; the free plan allows 50 submissions/month.

## Hosting

The site is published from `gh-pages-formspree` to **GitHub Pages** by
`.github/workflows/deploy.yml` (install → `vite build` → `scripts/gh-pages-404.mjs` → publish `dist/`).
The custom domain is `australianmalechoir.com.au`. There is no server runtime — no API functions.

## Imagery

Real photos are served from `public/images/`. The set is pulled from ROMCA’s site (AMC’s parent ensemble):

- `public/images/gallery/1–53.jpg` — the ROMCA concert gallery (already resized to ~1400px ∕ q70).
- `public/images/about-hero.jpg` — wide concert shot used for About/News headers.
- `public/images/hero-vid-placeholder.jpg` — home hero backdrop.
- `public/images/events/*.jpg` — ROMCA event posters (mostly unused; gallery photos back the events instead).

Wiring: every event in `eventsData` carries an `image` (`G(n)` = `/images/gallery/n.jpg`); `mediaItems` is the
filterable photo library for `/media` with `title/location/tag/image`; `videoItems` got a still per entry; news
stories carry an `image`. `ArtPlaceholder` renders a real photo when given an `image` prop (object-cover), else
its muted placeholder — caption text only shows in true placeholder mode.

## Known open items (do not “fix” these on your own)

- Social links in `siteData.js` point to platform homepages — real AMC profiles needed.
- Privacy/Terms copy in `src/pages/Legal.jsx` is generic placeholder text.
- Formspree: the account must be verified and the form's notification address confirmed in the dashboard.