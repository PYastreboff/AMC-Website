import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PageHero({ title, subtitle, crumb }) {
  return (
    <section className="pt-40 pb-14 sm:pt-48 sm:pb-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 text-center">
        {crumb && (
          <Link
            to={crumb.to}
            className="mb-8 inline-flex items-center gap-1.5 text-[11px] font-medium tracking-[0.22em] text-mute uppercase transition-colors hover:text-gold"
          >
            <ArrowLeft size={13} />
            {crumb.label}
          </Link>
        )}
        <h1 className="headline mx-auto max-w-4xl text-balance text-4xl leading-[1.08] text-ink sm:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-mute sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}