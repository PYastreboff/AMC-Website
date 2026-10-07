import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ArtPlaceholder from '../components/ArtPlaceholder'
import { b } from '../lib/base'

const timeline = [
  { n: '01', title: 'The founding voices', text: 'A gathering of Australian male singers bound by one belief: that blended male voices are among music’s most powerful instruments.' },
  { n: '02', title: 'A professional company', text: 'The choir formalises, drawing in professionally trained opera vocalists from Australia’s leading conservatoria and opera companies.' },
  { n: '03', title: 'Beyond opera', text: 'The repertoire grows past classical work — jazz standards, popular song and contemporary arrangements join the fold.' },
  { n: '04', title: 'International stages', text: 'AMC begins touring abroad, performing from embassies to major festivals across Asia, Europe and beyond.' },
  { n: '05', title: 'Australia’s versatile choir', text: 'From two-thousand-seat concert halls to the most intimate private functions, in Australia and internationally.' },
]

const values = [
  { n: '01', title: 'Tradition', text: 'Decades of choral craft and disciplined vocal technique.' },
  { n: '02', title: 'Versatility', text: 'A genre-spanning repertoire built for any audience.' },
  { n: '03', title: 'Connection', text: 'Performances tuned to the people in the room — never a stiff show.' },
  { n: '04', title: 'Excellence', text: 'Professional artists who rehearse every programme to a world-class standard.' },
]

export default function OurStory() {
  return (
    <>
      <PageHero
        title="Our story"
        subtitle="The Australian Male Choir is a company of Australian male singers, incorporating professionally trained opera vocalists, performing across a wide range of genres, from harmonised Italian arias to jazz and pop."
        crumb={{ to: '/about', label: 'About' }}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <ArtPlaceholder image={b("/images/our-story.jpg")} className="aspect-[21/9]" />
        </div>
      </section>

      <section className="bg-bg-1 py-24 sm:py-32">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8">
          <p className="label">Our story</p>
          <div className="mt-8 grid gap-12 lg:grid-cols-5 lg:gap-20">
            <p className="font-serif text-2xl leading-normal text-ink italic lg:col-span-2">
              Voices tuned to any room — the concert hall or the wedding aisle.
            </p>
            <div className="space-y-6 text-base leading-relaxed text-mute lg:col-span-3">
              <p>
                Rooted in the opera houses and conservatoria of Australia, AMC’s members are
                individually professionally trained. Together they form an instrument with a range
                far wider than any single voice — thunderous bass foundations, soaring tenors and
                harmonies fine-blended across every genre.
              </p>
              <p>
                AMC performs within Australia and internationally, delivering everything from
                large-scale concerts to small, private performances. Today we sing for concert
                audiences, corporate clients, wedding parties and private guests alike — always
                reading the room, always in tune with the moment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <SectionHeading title="Milestones" />
          <div className="relative mt-16">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-line" aria-hidden="true" />
            <div className="space-y-12">
              {timeline.map((t) => (
                <div key={t.n} className="relative grid gap-2 pl-14 sm:grid-cols-12 sm:gap-8">
                  <span className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center bg-bg text-[11px] font-semibold tracking-[0.18em] text-gold ring-1 ring-line" aria-hidden="true">
                    {t.n}
                  </span>
                  <div className="sm:col-span-12">
                    <h3 className="headline text-xl text-ink">{t.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mute">{t.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bg py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <SectionHeading title="The values behind the voices" />
          <div className="mt-16 grid gap-x-14 gap-y-12 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.n}>
                <h3 className="headline text-xl">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mute">{v.text}</p>
              </div>
            ))}
          </div>
          </div>
      </section>
    </>
  )
}