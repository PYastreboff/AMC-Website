# Australian Male Choir — Website

Marketing website for the Australian Male Choir (AMC), a group of Australian male
singers — professionally trained opera vocalists — performing across a wide range
of genres, from harmonised Italian arias to jazz and pop.

## Stack

- **React 19** + **Vite 8** — fast static SPA
- **Tailwind CSS v4** — responsive styling via the `@tailwindcss/vite` plugin
- **React Router v7** — client-side routing
- **Lucide React** — icons (brand/social icons are inline SVGs, see `src/components/SocialIcons.jsx`)

## Pages

| Route                | Purpose                                   |
| -------------------- | ----------------------------------------- |
| `/`                  | Home (hero, featured events, CTA)          |
| `/about`             | About hub — Our Story / Choir / Repertoire |
| `/about/story`       | Our Story                                  |
| `/about/choir`       | Meet the Choir                             |
| `/about/repertoire`  | Genres & Repertoire                        |
| `/events`            | Events We Perform hub                      |
| `/events/:slug`      | Event type page (concerts, corporate, weddings, private, past) |
| `/media`             | Video, photos, audio                      |
| `/enquire`           | Primary conversion — bookings & contact; accepts `?category=` to preselect a booking type |
| `/news`              | News list                                 |
| `/news/:slug`        | News article                              |
| `/privacy`           | Privacy policy                            |
| `/terms`             | Terms of service                          |

> `/contact` redirects to `/enquire` — contact and bookings share one page.

## Development

```bash
npm install
npm run dev      # start dev server
npm run lint     # oxlint
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Configuring content

All copy, events, repertoire, media items, news and contact details live in
`src/data/siteData.js` — a single file to customise without touching components.

Images are represented by `src/components/ArtPlaceholder.jsx`. To swap in real
photography/video, add assets to `public/` and replace the placeholder usage in
each page (or set image URLs in `siteData.js`).

## Placing images

Place real images in `public/images/` and reference them as `/images/your-file.jpg`.
The events data already carries an `image` field for this purpose.

## Notes

- Social links in `siteData.js` point to platform homepages — update with real AMC profiles.

## GitHub Pages deployment (this branch)

This branch (`gh-pages-formspree`) deploys the site to **GitHub Pages**, with
the contact form powered by **Formspree** — Pages is static-only, so there is no
server runtime (no API functions).

### One-time setup

1. **Formspree** — create a form at https://formspree.io, then add a repository
   variable `VITE_FORMSPREE_ID` (Settings → Secrets and variables → Actions →
   Variables) with the form ID (the `xxxxxxxx` in `https://formspree.io/f/xxxxxxxx`).
   Submissions arrive by email; the free plan allows 50/month. A confirmation
   auto-reply to the visitor needs Formspree's paid tier — the on-page
   "Enquiry received" message covers the basics for free.
2. **Pages** — Settings → Pages → Build and deployment → Source:
   **GitHub Actions**.
3. **Custom domain** — Settings → Pages → Custom domain, then point DNS at
   GitHub Pages (`A` records for `185.199.108–111.153` and a `CNAME` for
   `www` → `PYastreboff.github.io`). Once the DNS check passes, enable
   **Enforce HTTPS**.

### How it works

- Pushing to `gh-pages-formspree` runs `.github/workflows/deploy.yml`: install →
  `vite build` (with `VITE_FORMSPREE_ID` injected) → `scripts/gh-pages-404.mjs`
  → publish `dist/`.
- Pages can't rewrite unknown paths to `index.html`, so deep links would 404.
  The build emits a `dist/404.html` that saves the intended path and bounces to
  `/`; a small script in `index.html` restores the URL before React Router
  boots. This assumes the site sits at the root of the custom domain
  (`base: '/'` — the default).
- The form in `src/pages/Enquire.jsx` POSTs to Formspree via AJAX. The hidden
  field is named `_gotcha`, Formspree's honeypot convention — Formspree
  silently drops submissions where it's filled. In `npm run dev` the form is
  never posted (to avoid burning Formspree submissions).