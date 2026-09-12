import { Check } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ArtPlaceholder from '../components/ArtPlaceholder'
import { Button } from '../components/Button'
import { repertoireGenres } from '../data/siteData'

const designPoints = [
  'Concert stand-alone programmes with full staging and narration',
  'Corporate sets with elegant interludes and signature closers',
  'Wedding ceremonies, from processional to recessional',
  'Private parties with conversational, mixed-genre songbooks',
  'Community and charity events with donation-friendly programming',
]

export default function Repertoire() {
  return (
    <>
      <PageHero
        title="Six genres, infinite occasions"
        subtitle="From harmonised Italian arias to jazz and pop. Every programme is curated by our music director around the venue, the guest list and the moment."
        crumb={{ to: '/about', label: 'Back to About' }}
      />

      <section className="pb-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div>
            {repertoireGenres.map((g) => (
              <div key={g.genre} className="grid gap-3 border-b border-line py-8 sm:grid-cols-12 sm:gap-8">
                <h3 className="headline text-xl text-ink sm:col-span-4 sm:text-2xl">{g.genre}</h3>
                <p className="text-sm leading-relaxed text-mute sm:col-span-5">{g.description}</p>
                <div className="sm:col-span-3">
                  <p className="label mb-2">Included</p>
                  <ul className="space-y-1.5">
                    {g.examples.map((ex) => (
                      <li key={ex} className="text-sm text-dim">{ex}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-1 py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <SectionHeading
                center={false}
                rule={false}
                title="A programme for your audience"
                sub="The music director shapes a set list around who is in the room — never a stock performance."
              />
              <ul className="mt-9 space-y-4">
                {designPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-mute">
                    <Check size={16} className="mt-0.5 shrink-0 text-gold" />
                    {p}
                  </li>
                ))}
              </ul>
              <Button to="/enquire" className="mt-10 w-auto">Request a programme</Button>
            </div>
            <ArtPlaceholder label="Programme curation" sub="Working notes — replace with real photography" className="aspect-[4/5]" />
          </div>
        </div>
      </section>
    </>
  )
}