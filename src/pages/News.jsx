import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import PageHero from '../components/PageHero'
import ArtPlaceholder from '../components/ArtPlaceholder'
import { newsData } from '../data/siteData'

export default function News() {
  const [featured, ...rest] = newsData
  return (
    <>
      <PageHero
        title="Latest from the choir"
        subtitle="Tours, repertoire, community initiatives and announcements from the Australian Male Choir."
      />

      {/* Featured */}
      <section className="py-14">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <Link to={`/news/${featured.slug}`} className="group block">
            <ArtPlaceholder image={featured.image} className="aspect-[21/9]" />
            <div className="mt-8 grid gap-4 sm:grid-cols-12 sm:items-end">
              <div className="sm:col-span-9">
                <p className="label">{featured.date} · {featured.tags[0]}</p>
                <h2 className="headline mt-3 text-2xl leading-snug text-ink transition-colors group-hover:text-gold sm:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mute sm:text-base">{featured.excerpt}</p>
              </div>
              <span className="flex items-center gap-2 text-[11px] font-medium tracking-[0.22em] text-mute uppercase transition-colors group-hover:text-gold sm:col-span-3 sm:justify-end">
                Read story <ArrowUpRight size={15} />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* More */}
      {rest.length > 0 && (
        <section className="bg-bg-1 py-20">
          <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
            <p className="label">More stories</p>
            <div className="mt-10">
              {rest.map((n) => (
                <Link key={n.slug} to={`/news/${n.slug}`} className="group grid gap-2 border-b border-line py-8 sm:grid-cols-12 sm:gap-8">
                  <p className="label sm:col-span-3 sm:pt-1.5">{n.date}</p>
                  <div className="sm:col-span-8">
                    <h3 className="headline text-xl text-ink transition-colors group-hover:text-gold sm:text-2xl">{n.title}</h3>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mute">{n.excerpt}</p>
                    <p className="label mt-4">{n.tags.join(' · ')}</p>
                  </div>
                  <span className="hidden items-start justify-end text-dim transition-colors group-hover:text-gold sm:col-span-1 sm:flex">
                    <ArrowRight size={18} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}