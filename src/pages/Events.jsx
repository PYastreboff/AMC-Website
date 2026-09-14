import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Check, Compass } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import { Button } from '../components/Button'
import { EVENT_CATEGORIES } from '../data/siteData'
import { CategoryIcon } from '../components/CategoryIcons'

const steps = [
  { n: '01', title: 'Enquire', text: 'Tell us about the event, venue and audience. We respond within two business days.' },
  { n: '02', title: 'Craft the programme', text: 'The music director proposes a tailor-made set list and ensemble size.' },
  { n: '03', title: 'Rehearse', text: 'We finalise logistics and rehearse your programme specifically for the occasion.' },
  { n: '04', title: 'Perform', text: 'The choir arrives early and leaves your guests with a moment to remember.' },
]

const assurances = ['No-obligation quotes', 'Fully insured & compliant', 'Flexible timing & staging']

export default function Events() {
  return (
    <>
      <PageHero
        title="Events we perform"
        subtitle="From grand concert halls to intimate private celebrations — five ways to meet the choir, each built around the occasion."
      />

      {/* Category hub */}
      <section className="bg-bg-1 py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <SectionHeading title="Choose your occasion" />
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {EVENT_CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                to={`/events/${c.slug}`}
                className="group flex flex-col border border-line bg-bg p-8 transition-colors hover:border-gold/40"
              >
                <div className="flex items-center justify-between">
                  <CategoryIcon slug={c.slug} size={20} className="text-gold" />
                  <ArrowUpRight size={16} className="text-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                </div>
                <h3 className="headline mt-6 text-xl text-ink transition-colors group-hover:text-gold">{c.label}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-mute">{c.description}</p>
                <div className="mt-6 flex items-baseline justify-between">
                  <span className="label">{c.points ? c.size : 'The archive'}</span>
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

      {/* How it works */}
      <section className="bg-bg py-24 sm:py-32" id="how-it-works">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="label">How it works</p>
              <h2 className="headline mt-4 text-3xl sm:text-4xl">From enquiry to encore</h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-mute">
              A transparent process for every booking — no surprises, no jargon.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="group border border-line bg-bg-1 p-8 transition-colors hover:border-gold/40">
                <div className="flex items-center justify-between gap-3">
                  <span className="h-px w-8 bg-gold" />
                  <span className="headline text-2xl text-gold/80">{s.n}</span>
                </div>
                <h3 className="headline mt-6 text-xl text-ink transition-colors group-hover:text-gold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-6 rounded-sm border border-line bg-bg-1 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {assurances.map((a) => (
                <li
                  key={a}
                  className="flex items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] text-mute uppercase"
                >
                  <Check size={13} className="shrink-0 text-gold" />
                  {a}
                </li>
              ))}
            </ul>
            <Button to="/enquire" className="w-auto shrink-0">Enquire / Book AMC</Button>
          </div>
        </div>
      </section>

      <section className="bg-bg-1 py-20 text-center sm:py-24">
        <div className="mx-auto w-full max-w-2xl px-5 sm:px-8">
          <CategoryIcon slug="past" size={20} className="mx-auto text-gold" />
          <p className="headline mt-6 text-2xl sm:text-3xl">Curious what a performance looks like?</p>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-mute">
            Browse the archive of recent seasons — concerts, galas, tours and community appearances.
          </p>
          <Button to="/events/past" variant="line" className="mt-8 w-auto">
            See past performances
          </Button>
        </div>
      </section>
    </>
  )
}