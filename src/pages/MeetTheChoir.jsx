import { Music4 } from 'lucide-react'
import PageHero from '../components/PageHero'
import ArtPlaceholder from '../components/ArtPlaceholder'
import { Button } from '../components/Button'
import { choirMembers } from '../data/siteData'

export default function MeetTheChoir() {
  return (
    <>
      <PageHero
        title="The voices behind AMC"
        subtitle="Fifty-odd professionally trained vocalists, performing in configurations from an intimate octet to a full symphonic chorus."
        crumb={{ to: '/about', label: 'Back to About' }}
      />

      <section className="py-16 sm:py-24">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <ArtPlaceholder label="The full choir in concert" sub="Sydney · full chorus configuration" className="aspect-[21/9]" />
          <p className="mt-10 text-base leading-relaxed text-mute">
            Every roster draws on the same well of trained talent. For private events the choir
            performs as a compact professional ensemble of eight; for concerts, in full symphonic
            array of fifty or more.
          </p>
        </div>
      </section>

      <section className="bg-bg-1 py-24 sm:py-32">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <p className="label">Sections</p>
          <div className="mt-10 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
            {choirMembers.map((m) => (
              <div key={m.name}>
                <ArtPlaceholder label="" sub={`${contract(m.role)}`} className="aspect-[4/5]" />
                <div className="mt-5">
                  <p className="text-[11px] font-medium tracking-[0.28em] text-gold uppercase">{m.voiceType}</p>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{m.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg py-24 sm:py-32">
        <div className="mx-auto w-full max-w-4xl px-5 text-center sm:px-8">
          <Music4 size={20} className="mx-auto text-gold" aria-hidden="true" />
          <h2 className="headline mt-6 text-2xl sm:text-3xl">Featured soloists &amp; guest artists</h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-mute sm:text-base">
            The choir regularly features principal artists from Australian and international opera
            companies. For corporate and private events, we can craft a performance around a
            featured artist or a bespoke programme.
          </p>
          <Button to="/enquire" className="mt-9 w-auto">Enquire about a custom performance</Button>
        </div>
      </section>
    </>
  )
}

function contract(str) {
  return str.replace(' section', '').toUpperCase()
}