import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { Button } from '../components/Button'

const hub = [
  {
    n: '01',
    title: 'Our Story',
    to: '/about/story',
    desc: 'Where the choir began and the values that still guide how we sing — tradition, craft and connection.',
  },
  {
    n: '02',
    title: 'Meet the Choir',
    to: '/about/choir',
    desc: 'The professionally trained singers behind the sound — from soaring tenors to our profound bass foundation.',
  },
  {
    n: '03',
    title: 'Genres & Repertoire',
    to: '/about/repertoire',
    desc: 'Six signature genres, from operatic bel canto to jazz, pop and the Australian songbook.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        title="About"
        subtitle="The Australian Male Choir is a company of professionally trained male voices performing across a wide range of genres, from harmonised Italian arias to jazz and pop. Choose where to begin."
      />

      <section className="bg-bg-1 py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <SectionHeading title="Begin with the choir" />
          <div className="mt-16">
            {hub.map((h) => (
              <Link
                key={h.n}
                to={h.to}
                className="group grid items-baseline gap-x-8 gap-y-1 border-b border-line py-7 transition-colors sm:grid-cols-12 sm:py-8"
              >
                <span className="headline text-2xl leading-snug text-ink transition-colors group-hover:text-gold sm:col-span-4 sm:text-3xl">
                  {h.title}
                </span>
                <span className="text-sm leading-relaxed text-mute sm:col-span-6">{h.desc}</span>
                <span className="flex items-baseline justify-end gap-3 sm:col-span-2">
                  <span className="text-[11px] font-medium tracking-[0.22em] text-mute uppercase">Read</span>
                  <ArrowUpRight size={18} className="text-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 text-center sm:py-32">
        <div className="mx-auto w-full max-w-2xl px-5 sm:px-8">
          <p className="headline text-2xl sm:text-3xl">Hear the choir before you book.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button to="/media" variant="line" className="w-auto">
              Watch &amp; listen
            </Button>
            <Button to="/enquire" className="w-auto">
              Make an enquiry
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}