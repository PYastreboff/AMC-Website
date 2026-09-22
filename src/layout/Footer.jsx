import { Link } from 'react-router-dom'
import { Mail, MapPin } from 'lucide-react'
import Logo from '../components/Logo'
import { CONTACT_CITY, CONTACT_EMAIL } from '../data/siteData'

const exploreLinks = [
  { label: 'About', to: '/about' },
  { label: 'Events We Perform', to: '/events' },
  { label: 'Enquire / Book', to: '/enquire' },
]

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/"><Logo /></Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-mute">
              Professional male voices performing from harmonised Italian arias to jazz and pop —
              for concerts, corporate events, weddings and private occasions, at home and abroad.
            </p>
            <div className="mt-7">
              <Link to="/enquire" className="btn btn-gold">Enquire / Book AMC</Link>
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="label-light">Explore</h3>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.to} className="text-sm text-mute transition-colors hover:text-gold">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="label-light">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-mute">
              <li className="flex items-center gap-3">
                <Mail size={14} className="shrink-0 text-gold" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-gold">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={14} className="shrink-0 text-gold" />
                {CONTACT_CITY}
              </li>
            </ul>
            <Link to="/enquire" className="btn btn-gold mt-7">
              Enquire / Book AMC
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-[11px] tracking-wider text-dim uppercase sm:flex-row">
          <p>
            © {new Date().getFullYear()} Australian Male Choir · Website by{' '}
            <a
              href="https://www.linkedin.com/in/peter-yastreboff-6a9664313/"
              target="_blank"
              rel="noreferrer noopener"
              className="transition-colors hover:text-gold"
            >
              Peter Y.
            </a>
          </p>
          <p className="flex gap-6">
            <Link to="/privacy" className="transition-colors hover:text-gold">Privacy</Link>
            <Link to="/terms" className="transition-colors hover:text-gold">Terms</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}