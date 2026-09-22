import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowRight, Menu, X } from 'lucide-react'
import Logo from '../components/Logo'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/enquire', label: 'Enquire' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const close = () => setMobileOpen(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-bg">
      {/* announcement strip */}
      <Link
        to="/enquire"
        className="group flex items-center justify-center gap-2 border-b border-line bg-bg-1 py-2 text-[10px] font-medium tracking-[0.22em] text-mute uppercase transition-colors hover:text-gold sm:tracking-[0.28em]"
      >
        Book AMC for your next event
        <ArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
      </Link>

      <div
        className={`border-b transition-colors ${scrolled ? 'border-line' : 'border-transparent'}`}
      >
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link to="/" aria-label="Australian Male Choir — home" onClick={close}>
            <Logo compact />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `text-[11px] font-medium tracking-[0.22em] uppercase transition-colors ${
                    isActive ? 'text-ink' : 'text-mute hover:text-gold'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/enquire"
            className="hidden btn btn-gold w-auto items-center px-5 py-2.5 lg:inline-flex"
          >
            Enquire
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-b border-line bg-bg lg:hidden" aria-label="Mobile">
          <ul className="px-5">
            {navLinks.map((l) => (
              <li key={l.to} className="border-b border-line last:border-b-0">
                <NavLink
                  to={l.to}
                  onClick={close}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-4 text-[12px] font-medium tracking-[0.22em] uppercase ${
                      isActive ? 'text-gold' : 'text-mute'
                    }`
                  }
                >
                  {l.label}
                  <ArrowRight size={13} />
                </NavLink>
              </li>
            ))}
            <li className="py-5">
              <Link to="/enquire" onClick={close} className="btn btn-gold w-full">
                Enquire / Book AMC
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}