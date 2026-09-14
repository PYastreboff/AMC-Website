import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ArtPlaceholder from '../components/ArtPlaceholder'
import { newsData } from '../data/siteData'

const body = [
  'For over seven decades, the Australian Male Choir has been defined by perfectly blended male voices and an unerring sense of occasion. This announcement marks an exciting new chapter for the ensemble as it continues to reach new audiences, at home and abroad.',
  'Every member of the choir is individually professionally trained — a detail that distinguishes AMC from amateur ensembles and explains the depth, power and polish of its performances. Whether singing grand opera, jazz standards or contemporary favourites, the choir performs with the discipline of the concert stage.',
  'From harmonised Italian arias to jazz and pop, the repertoire is as broad as the occasions we serve: concerts, corporate galas, weddings, private parties and community celebrations. Wherever an audience gathers, there is a programme that fits.',
]

const pullQuote = 'The discipline of the opera stage, the range of the modern repertoire — that is the Australian Male Choir.'

export default function NewsArticle() {
  const { slug } = useParams()
  const article = newsData.find((n) => n.slug === slug)
  if (!article) return <Navigate to="/news" replace />
  const others = newsData.filter((n) => n.slug !== article.slug)

  return (
    <article>
      <div className="mx-auto w-full max-w-3xl px-5 pt-44 pb-14 text-center sm:px-8">
        <Link
          to="/news"
          className="mb-9 inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.22em] text-mute uppercase transition-colors hover:text-gold"
        >
          <ArrowLeft size={13} />
          Back to news
        </Link>
        <p className="label">{article.date} — {article.tags[0]}</p>
        <h1 className="headline mt-5 text-3xl leading-[1.12] sm:text-5xl">{article.title}</h1>
        <p className="mt-6 font-serif text-lg leading-normal text-mute italic sm:text-xl">{article.excerpt}</p>
      </div>

      <div className="mx-auto w-full max-w-4xl px-5 sm:px-8">
        <ArtPlaceholder image={article.image} className="aspect-[21/10]" />
      </div>

      <div className="mx-auto w-full max-w-2xl px-5 py-16 sm:px-8">
        <div className="space-y-6 text-base leading-relaxed text-mute">
          <p className="text-lg text-ink">{body[0]}</p>
          {body.slice(1).map((p, i) => <p key={i}>{p}</p>)}
        </div>

        <blockquote className="mt-14 border-l border-gold pl-7">
          <p className="font-serif text-2xl leading-normal text-ink italic">{pullQuote}</p>
        </blockquote>

        <div className="mt-16">
          <p className="label">More stories</p>
          <div className="mt-5 grid gap-6 sm:grid-cols-2">
            {others.map((n) => (
              <Link key={n.slug} to={`/news/${n.slug}`} className="group">
                <p className="label">{n.date}</p>
                <h3 className="headline mt-2 text-lg text-ink transition-colors group-hover:text-gold">{n.title}</h3>
                <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.22em] text-mute uppercase transition-colors group-hover:text-gold">
                  Read <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}