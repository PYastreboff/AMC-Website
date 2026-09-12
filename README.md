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

- The `/enquire` form posts to **Netlify Forms** (`name="enquiry"`). A
  hidden detector form lives in `index.html` so Netlify detects it at build
  time. Enable "Form notifications" in the Netlify dashboard to receive
  submissions by email (or use a Zapier/process-webhook integration).
  On non-Netlify hosts the POST returns the page (`200`), so success shows
  locally; the fetch URL can be changed in `src/pages/Enquire.jsx`.
- Social links in `siteData.js` point to platform homepages — update with real AMC profiles.