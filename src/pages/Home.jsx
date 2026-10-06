import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ArrowRight, ArrowUpRight, Compass } from 'lucide-react'
import ArtPlaceholder from '../components/ArtPlaceholder'
import SectionHeading from '../components/SectionHeading'
import { Button } from '../components/Button'
import { EVENT_CATEGORIES, repertoireGenres } from '../data/siteData'
import { CategoryIcon } from '../components/CategoryIcons'
import { b } from '../lib/base'

const facts = [
  { value: '50+', label: 'Professional singers on call' },
  { value: '200+', label: 'Performances delivered' },
  { value: '18', label: 'Countries performed in' },
  { value: '4', label: 'Voice sections, tenor to bass' },
]

export default function Home() {
  return (
    <>
      <Hero />
      <EventsBand />
      <WhyBook />
      <RepertoireBand />
      <FactsBand />
      <CTABand />
    </>
  )
}

const heroClips = [
  b('/videos/hero/hero-2.mp4'),
  b('/videos/hero/hero-3.mp4'),
  b('/videos/hero/hero-4.mp4'),
  b('/videos/hero/hero-5.mp4'),
  b('/videos/hero/hero-1.mp4'),
]

function Hero() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroClips.length), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative flex min-h-screen flex-col">
      {/* muted background video */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <video
          key={slide}
          src={heroClips[slide]}
          className="hero-fade h-full w-full object-cover"
          autoPlay
          muted
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/85 via-bg/70 to-bg" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-5 pb-24 pt-44 text-center sm:px-8">
        <p className="label">Presenting the</p>
        <h1 className="headline mt-5 text-4xl leading-[1.04] text-ink sm:text-6xl lg:text-7xl xl:text-8xl">
          Australian Male Choir
        </h1>
        <p className="mt-7 max-w-xl text-base leading-relaxed text-mute sm:text-lg">
          Professional male voices — from harmonised Italian arias to jazz and pop.
          Performances of every scale, in Australia and around the world.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button to="/enquire" className="w-auto">Enquire / Book AMC</Button>
          <Button to="/events" variant="line" className="w-auto">Explore performances</Button>
        </div>
      </div>

      <div className="relative z-10 mx-auto pb-7">
        <div className="h-10 w-px bg-line-2" aria-hidden="true" />
      </div>
    </section>
  )
}

function EventsBand() {
  return (
    <section className="bg-bg-1 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          title="Events we perform"
          sub="Every performance is shaped to the occasion — from sold-out concert halls to ceremonies remembered for years."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {EVENT_CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              to={`/events/${cat.slug}`}
              className="group flex flex-col border border-line bg-bg p-8 transition-colors hover:border-gold/40"
            >
              <div className="flex items-center justify-between">
                <CategoryIcon slug={cat.slug} size={20} className="text-gold" />
                <ArrowUpRight size={16} className="text-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
              </div>
              <h3 className="headline mt-6 text-xl text-ink transition-colors group-hover:text-gold">{cat.label}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-mute">{cat.description}</p>
              <div className="mt-6 flex items-baseline justify-between">
                <span className="label">{cat.points ? cat.size : 'The archive'}</span>
                <span className="text-[11px] font-medium tracking-[0.2em] text-mute uppercase">Read more</span>
              </div>
            </Link>
          ))}

          <Link
            to="/enquire"
            className="group flex flex-col items-start justify-center border border-dashed border-line-2 p-8 transition-colors hover:border-gold/50"
          >
            <Compass size={20} className="text-gold" />
            <h3 className="headline mt-6 text-xl text-ink">Not sure which fits?</h3>
            <p className="mt-2 text-sm leading-relaxed text-mute">
              Start an enquiry and we’ll help you shape the right performance.
            </p>
            <span className="label mt-6 inline-flex items-center gap-2 transition-colors group-hover:text-gold">
              Enquire <ArrowRight size={13} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

function WhyBook() {
  const points = [
    { n: '01', title: 'Professionally trained', text: 'Individually trained opera vocalists performing as one disciplined ensemble.' },
    { n: '02', title: 'Genre versatility', text: 'Arias, jazz, pop, sacred and Australian classics — curate the programme you need.' },
    { n: '03', title: 'Any scale', text: 'From a two-thousand-seat concert hall to twenty guests on a harbour cruiser.' },
    { n: '04', title: 'Truly international', text: 'Proven on Australian and international stages, on any continent.' },
  ]
  return (
    <section className="bg-bg py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <SectionHeading
          title="Why book AMC"
          sub="Concerts, corporate galas, weddings, private parties and community celebrations — delivered to one standard: the concert stage."
        />
        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <ArtPlaceholder image={b("/images/gallery/65.jpg")} className="aspect-[4/5] lg:col-span-4" />
          <div className="grid gap-x-14 gap-y-12 sm:grid-cols-2 lg:col-span-8">
            {points.map((p) => (
              <div key={p.n}>
                <h3 className="headline text-xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function RepertoireBand() {
  return (
    <section className="bg-bg-1 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHeading
              center={false}
              rule={false}
              title="Genres & repertoire"
              sub="Six signature genres, curated per audience and occasion. Each programme is rehearsed specially for your event."
            />
            <Button to="/enquire" variant="line" className="mt-10 w-auto">
              Enquire about our repertoire
            </Button>
          </div>

          <div>
            {repertoireGenres.map((g) => (
              <div key={g.genre} className="flex items-baseline justify-between gap-6 border-b border-line py-5">
                <h3 className="headline text-lg text-ink">{g.genre}</h3>
                <span className="hidden text-right text-xs leading-relaxed text-dim sm:block">
                  {g.examples.slice(0, 3).join(' · ')}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function FactsBand() {
  return (
    <section className="bg-bg py-20 sm:py-24" aria-label="The choir in figures">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-px overflow-hidden lg:grid-cols-4">
          {facts.map((f, i) => (
            <div key={f.label} className={`flex flex-col items-center px-4 py-10 text-center sm:py-12 ${i % 2 === 1 ? 'bg-[#151517]' : 'bg-bg-1'}`}>
              <p className="headline text-4xl text-ink sm:text-5xl">{f.value}</p>
              <p className="label mt-4">{f.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTABand() {
  return (
    <section className="bg-bg-1 py-24 text-center sm:py-36">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
        <Compass size={22} className="mx-auto text-gold" aria-hidden="true" />
        <h2 className="headline mt-7 text-3xl leading-snug text-ink sm:text-5xl">
          Bring the male choir to your<br className="hidden sm:block" /> next occasion
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mute">
          One enquiry is all it takes. We respond within two business days with availability,
          ensemble options and a tailored quote.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button to="/enquire" className="w-auto px-10 py-4">Enquire now</Button>
        </div>
      </div>
    </section>
  )
}