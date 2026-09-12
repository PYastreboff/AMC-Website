import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
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
          <div className="mt-16">
            {EVENT_CATEGORIES.map((c) => (
              <Link
                key={c.slug}
                to={`/events/${c.slug}`}
                className="group grid items-baseline gap-x-8 gap-y-1 border-b border-line py-7 transition-colors sm:grid-cols-12 sm:py-8"
              >
                <span className="headline text-2xl leading-snug text-ink transition-colors group-hover:text-gold sm:col-span-4 sm:text-3xl">
                  {c.label}
                </span>
                <span className="text-sm leading-relaxed text-mute sm:col-span-6">{c.description}</span>
                <span className="flex items-baseline justify-end gap-3 sm:col-span-2">
                  <span className="text-[11px] font-medium tracking-[0.22em] text-mute uppercase">Read</span>
                  <ArrowUpRight size={18} className="text-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold" />
                </span>
              </Link>
            ))}
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

          <div className="mt-14">
            {steps.map((s) => (
              <div key={s.n} className="grid gap-2 border-b border-line py-7 sm:grid-cols-12 sm:gap-8">
                <h3 className="headline text-lg text-ink sm:col-span-4 sm:text-xl">{s.title}</h3>
                <p className="text-sm leading-relaxed text-mute sm:col-span-8">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-3 text-sm text-mute sm:flex-row sm:items-center sm:justify-between">
            <p className="flex flex-wrap gap-x-8 gap-y-2">
              <span>No-obligation quotes</span>
              <span>Fully insured &amp; compliant</span>
              <span>Flexible timing &amp; staging</span>
            </p>
            <Button to="/enquire" className="w-auto">Enquire / Book AMC</Button>
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