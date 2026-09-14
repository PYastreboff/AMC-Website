import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import { b } from '../lib/base'
import SectionHeading from '../components/SectionHeading'
import ArtPlaceholder from '../components/ArtPlaceholder'
import { Button } from '../components/Button'

const hub = [
  {
    n: '01',
    title: 'Our Story',
    to: '/about/story',
    image: b('/images/gallery/1.jpg'),
    desc: 'Where the choir began and the values that still guide how we sing — tradition, craft and connection.',
  },
  {
    n: '02',
    title: 'Meet the Choir',
    to: '/about/choir',
    image: b('/images/gallery/61.jpg'),
    desc: 'The professionally trained singers behind the sound — from soaring tenors to our profound bass foundation.',
  },
  {
    n: '03',
    title: 'Genres & Repertoire',
    to: '/about/repertoire',
    image: b('/images/gallery/11.jpg'),
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

      <section className="py-16 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <ArtPlaceholder image={b("/images/gallery/8.jpg")} className="aspect-[21/9]" />
        </div>
      </section>

      <section className="bg-bg-1 py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <SectionHeading title="Begin with the choir" />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {hub.map((h) => (
              <Link
                key={h.n}
                to={h.to}
                className="group border border-line bg-bg transition-colors hover:border-gold/40"
              >
                <ArtPlaceholder image={h.image} className="aspect-[16/10]" />
                <div className="p-7">
                  <h3 className="headline text-xl text-ink transition-colors group-hover:text-gold">{h.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{h.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.2em] text-mute uppercase transition-colors group-hover:text-gold">
                    Read <ArrowUpRight size={14} />
                  </span>
                </div>
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