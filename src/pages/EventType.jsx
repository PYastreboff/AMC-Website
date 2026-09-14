import { Link, useParams } from 'react-router-dom'
import { ArrowUpRight, Calendar, MapPin } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ArtPlaceholder from '../components/ArtPlaceholder'
import { Button } from '../components/Button'
import { EVENT_CATEGORIES, eventsData } from '../data/siteData'

const bookable = new Set(['concerts', 'corporate', 'weddings', 'private'])

export default function EventType() {
  const { slug } = useParams()
  const cat = EVENT_CATEGORIES.find((c) => c.slug === slug)

  if (!cat) {
    return (
      <section className="pt-44 pb-32 text-center">
        <div className="mx-auto w-full max-w-xl px-5 sm:px-8">
          <p className="label">404</p>
          <h1 className="headline mt-6 text-3xl">That occasion isn’t on our programme.</h1>
          <p className="mt-5 text-sm text-mute">
            We perform concerts, corporate events, weddings, private parties and more — but this page
            doesn’t exist.
          </p>
          <Button to="/events" className="mt-9">Back to events</Button>
        </div>
      </section>
    )
  }

  const isBookable = bookable.has(cat.slug)
  const catalogue = eventsData.filter((e) => e.category === cat.slug)

  return (
    <>
      <PageHero
        title={cat.label}
        subtitle={cat.description}
        crumb={{ to: '/events', label: 'Events' }}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <ArtPlaceholder
            image={catalogue[0]?.image || '/images/gallery/1.jpg'}
            className="aspect-[21/9]"
          />
        </div>
      </section>

      {isBookable ? (
        <section className="bg-bg-1 py-24 sm:py-32">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <div className="grid gap-x-16 gap-y-12 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-5">
                <SectionHeading
                  center={false}
                  title="The AMC approach"
                  sub="Every booking is a collaboration. Here’s how we shape a performance for this kind of occasion."
                />
              </div>
              <div className="lg:col-span-7">
                <p className="label">Ensembles</p>
                <p className="headline mt-3 text-xl">{cat.size}</p>
                <div className="mt-8">
                  {cat.points.map((p, i) => (
                    <div key={i} className="border-b border-line py-6">
                      <p className="text-base leading-relaxed text-mute">{p}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-bg-1 py-24 sm:py-32">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <SectionHeading
              title="From the archive"
              sub="A look back through recent seasons — the performances that shaped the choir, season by season."
            />
          </div>
        </section>
      )}

      <section className="py-16 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <p className="label">
            {isBookable ? 'Sample performances' : 'Recent seasons'}
          </p>
          <div className="mt-8">
            {catalogue.length > 0 ? (
              catalogue.map((e) => (
                <article
                  key={e.id}
                  className="grid grid-cols-1 gap-6 border-b border-line py-8 sm:grid-cols-12 sm:items-center"
                >
                  <div className="sm:col-span-3">
                    <ArtPlaceholder image={e.image} className="aspect-[4/3]" />
                  </div>
                  <div className="sm:col-span-7">
                    <h2 className="headline text-xl text-ink sm:text-2xl">{e.title}</h2>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-mute">{e.description}</p>
                    <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1 text-[11px] tracking-[0.18em] text-dim uppercase">
                      <span className="inline-flex items-center gap-2"><Calendar size={13} className="text-gold" />{e.date}</span>
                      <span className="inline-flex items-center gap-2"><MapPin size={13} className="text-gold" />{e.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-5 sm:col-span-2 sm:flex-col sm:items-end sm:gap-3">
                    {isBookable ? (
                      <Link to={`/enquire?category=${cat.slug}`} className="btn btn-line w-auto px-5 py-2.5">
                        Enquire
                      </Link>
                    ) : (
                      <span className="text-[11px] font-medium tracking-[0.22em] text-mute uppercase">Archived</span>
                    )}
                    <span className="hidden items-end text-dim sm:inline-flex">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </article>
              ))
            ) : (
              <p className="py-10 text-sm text-mute">Nothing here yet — check back soon.</p>
            )}
          </div>
        </div>
      </section>

      <section className="bg-bg-1 py-20 text-center sm:py-24">
        <div className="mx-auto w-full max-w-2xl px-5 sm:px-8">
          <p className="headline text-2xl sm:text-3xl">
            {isBookable ? `Planning a ${cat.label.toLowerCase()}?` : 'Have his next performance in mind?'}
          </p>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-mute">
            {isBookable
              ? 'Tell us about the occasion and we’ll respond with ideas and a no-obligation quote within two business days.'
              : 'Talk to us about a new performance — concerts, corporate events, weddings and private parties, anywhere in Australia or abroad.'}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {isBookable && (
              <Button to={`/enquire?category=${cat.slug}`} className="w-auto">
                Enquire about this
              </Button>
            )}
            <Button to="/enquire" variant={isBookable ? 'line' : undefined} className="w-auto">
              {isBookable ? 'General enquiry' : 'Make an enquiry'}
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}