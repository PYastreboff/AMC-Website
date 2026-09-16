import { Music4 } from 'lucide-react'
import PageHero from '../components/PageHero'
import { Button } from '../components/Button'

export default function MeetTheChoir() {
  return (
    <>
      <PageHero
        title="The voices behind AMC"
        subtitle="Fifty-odd professionally trained vocalists, performing in configurations from an intimate octet to a full symphonic chorus."
        crumb={{ to: '/about', label: 'Back to About' }}
      />

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