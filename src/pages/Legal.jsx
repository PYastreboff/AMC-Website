import PageHero from '../components/PageHero'

const PRIVACY = {
  title: 'Privacy',
  intro: 'The Australian Male Choir respects your privacy. This page explains what we collect when you contact us and how we use it.',
  sections: [
    { h: 'What we collect', body: 'When you submit an enquiry we collect the details you provide — name, email address, phone number, organisation and the particulars of your event (date, location, audience size and message).' },
    { h: 'How we use it', body: 'We use your details solely to respond to your enquiry, prepare quotes and co-ordinate any booking. We never sell or rent your information.' },
    { h: 'Who we share it with', body: 'Your information is seen only by members of the AMC bookings team and, where relevant, the service providers we use to operate the website and email.' },
    { h: 'Storage & retention', body: 'Enquiries are held for as long as needed to complete your booking and for a reasonable period afterwards for reference. You may ask us to see or delete the information we hold about you at any time.' },
    { h: 'Contact', body: 'For any privacy request, write to us via the contact page and we will respond within two business days.' },
  ],
}

const TERMS = {
  title: 'Terms',
  intro: 'These terms cover the services we describe on this website — performances by the Australian Male Choir, quotes and bookings.',
  sections: [
    { h: 'Quotes & estimates', body: 'All quotations are free, non-binding and valid for 30 days from the date they are issued unless stated otherwise.' },
    { h: 'Booking & confirmation', body: 'A booking is confirmed once a contract or invoice is accepted and any deposit is received. Guest numbers, timing and programme are finalised in writing before the event.' },
    { h: 'Programme & ensemble', body: 'The repertoire and ensemble size described in your confirmation are delivered as agreed. Changes to the occasion (date, venue, duration) after confirmation may affect pricing.' },
    { h: 'Cancellations', body: 'Cancellation fees may apply depending on how close to the event you cancel. Our team will confirm the applicable policy at quote stage.' },
    { h: 'Media & safety', body: 'The choir complies with Australian workplace health and safety requirements at venues. Unless agreed otherwise, AMC retains rights to photographs and recordings of its own performances.' },
  ],
}

export default function Legal({ section }) {
  const data = section === 'privacy' ? PRIVACY : TERMS
  return (
    <>
      <PageHero title={data.title} />
      <section className="py-16 sm:py-24">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          <p className="text-base leading-relaxed text-mute">{data.intro}</p>
          <div className="mt-4">
            {data.sections.map((s) => (
              <div key={s.h}>
                <h2 className="headline mt-12 text-2xl text-ink">{s.h}</h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-mute">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}