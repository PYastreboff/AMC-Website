// GitHub Pages serves static files only — it can't rewrite unknown paths to
// index.html, so BrowserRouter deep links (/events, /enquire?category=weddings,
// …) would 404.
//
// This script generates dist/404.html from the built index.html. GitHub Pages
// serves it for any unknown path; it stores the intended location in
// sessionStorage and bounces to /, where the restore script in index.html
// puts the URL back before React Router boots. The site must live at the
// root of the custom domain (vite base: '/').
import { readFileSync, writeFileSync } from 'node:fs'

const html = readFileSync('dist/index.html', 'utf8')

const bounce = `<script>sessionStorage.setItem('spa-redirect', location.pathname + location.search + location.hash); location.replace('/')</script>`

if (!html.includes('<head>')) {
  throw new Error('dist/index.html does not contain <head> — check the build output')
}

// Insert first inside <head> so it runs before the app bundle and any assets load.
writeFileSync('dist/404.html', html.replace('<head>', `<head>${bounce}`))

console.log('Wrote dist/404.html (GitHub Pages SPA fallback)')
