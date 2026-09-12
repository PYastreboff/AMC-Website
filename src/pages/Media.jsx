import { useState } from 'react'
import { Camera, Headphones, MapPin, Play } from 'lucide-react'
import PageHero from '../components/PageHero'
import ArtPlaceholder from '../components/ArtPlaceholder'
import { Button } from '../components/Button'
import { audioItems, mediaItems, videoItems } from '../data/siteData'

const photoTabs = ['All', 'Concerts', 'Corporate', 'Weddings', 'Private', 'Tours']

const photoCards = [
  ...mediaItems.map((m) => {
    const tag =
      m.title.includes('Opera House') || m.title.includes('Festival') || m.title.includes('Recording')
        ? 'Concerts'
        : m.title.includes('Gala')
          ? 'Corporate'
          : m.title.includes('Wedding')
            ? 'Weddings'
            : 'Tours'
    return { ...m, tag }
  }),
  { id: 7, type: 'photo', title: 'Christmas Carols', location: 'Sydney Domain', tag: 'Concerts' },
  { id: 8, type: 'photo', title: 'Private Harbour Cruise', location: 'Sydney Harbour', tag: 'Private' },
]

function PlayGlyph() {
  return (
    <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-gold/70 text-gold transition-colors group-hover:bg-gold group-hover:text-bg">
      <Play size={18} className="ml-0.5" />
    </span>
  )
}

export default function Media() {
  const [tab, setTab] = useState('All')
  const filtered = tab === 'All' ? photoCards : photoCards.filter((p) => p.tag === tab)

  return (
    <>
      <PageHero
        title="Watch, listen, remember"
        subtitle="Video highlights, performance photography and studio recordings — a window into the sound and spirit of the choir."
      />

      {/* Video */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="flex items-baseline justify-between gap-6">
            <div>
              <p className="label">Video</p>
              <h2 className="headline mt-4 text-2xl sm:text-3xl">In performance</h2>
            </div>
            <Button href="https://youtube.com" variant="ghost" className="w-auto">
              Visit our YouTube ↗
            </Button>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-14 lg:grid-cols-3">
            {videoItems.map((v, i) => (
              <div key={v.id} className={i === 0 ? 'lg:col-span-3' : ''}>
                <button type="button" aria-label={`Play ${v.title}`} className="group block w-full cursor-pointer text-left">
                  <ArtPlaceholder label="" sub="Video still" className={i === 0 ? 'aspect-[21/9]' : 'aspect-[16/9]'} />
                </button>
                <div className="mt-4 flex items-center justify-between gap-4">
                  <h3 className="headline text-lg text-ink">{v.title}</h3>
                  <span className="flex shrink-0 text-[11px] tracking-[0.2em] text-dim uppercase">{v.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="bg-bg-1 py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <p className="label flex items-center gap-2">Photos <Camera size={13} className="text-gold" /></p>
              <h2 className="headline mt-4 text-2xl sm:text-3xl">Performance highlights</h2>
            </div>
            <nav className="flex flex-wrap gap-x-7 gap-y-3" aria-label="Photo categories">
              {photoTabs.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTab(t)}
                  aria-pressed={tab === t}
                  className={`text-[11px] font-medium tracking-[0.22em] uppercase transition-colors ${
                    tab === t ? 'text-gold underline decoration-gold/50 underline-offset-8' : 'text-mute hover:text-ink'
                  }`}
                >
                  {t}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-12">
            <p className="label mb-6">
              {filtered.length} {filtered.length === 1 ? 'photograph' : 'photographs'}
            </p>
            {filtered.length > 0 ? (
              <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
                {filtered.map((p) => (
                  <div key={p.id}>
                    <ArtPlaceholder label="" sub="Photograph" className="aspect-[3/4]" />
                    <div className="mt-4">
                      <h3 className="headline text-base text-ink">{p.title}</h3>
                      <p className="mt-1.5 flex items-center gap-1.5 text-[11px] tracking-[0.18em] text-dim uppercase">
                        <MapPin size={11} className="text-gold" />
                        {p.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="py-14 text-center text-sm text-mute">
                No photographs in this category yet — check back soon.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Audio */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <p className="label flex items-center gap-2">Recordings <Headphones size={13} className="text-gold" /></p>
          <h2 className="headline mt-4 text-2xl sm:text-3xl">Listen now</h2>

          <div className="mt-12">
            {audioItems.map((a) => (
              <button
                key={a.id}
                type="button"
                className="group grid w-full cursor-pointer grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-1 border-b border-line py-5 text-left sm:grid-cols-[auto_1fr_auto_auto]"
              >
                <PlayGlyph />
                <div>
                  <h3 className="headline text-lg text-ink transition-colors group-hover:text-gold sm:text-xl">{a.title}</h3>
                  <p className="label mt-1">{a.album}</p>
                </div>
                <p className="text-[11px] tracking-[0.2em] text-dim uppercase sm:w-24 sm:text-right">{a.duration}</p>
                <span className="hidden sm:block">
                  <Play size={14} className="text-line-2 transition-colors group-hover:text-gold" />
                </span>
              </button>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <p className="headline max-w-md text-xl">Hear the choir live at your event.</p>
            <Button to="/enquire" className="w-auto">Make an enquiry</Button>
          </div>
        </div>
      </section>
    </>
  )
}