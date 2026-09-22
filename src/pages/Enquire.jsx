import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ArrowUpRight, Check, Clock, Mail, MapPin } from 'lucide-react'
import PageHero from '../components/PageHero'
import { Button } from '../components/Button'
import { CONTACT_CITY, CONTACT_EMAIL, EVENT_CATEGORIES } from '../data/siteData'

const notes = [
  { title: 'Response time', text: 'every enquiry within two business days' },
  { title: 'Ensemble sizes', text: 'from an intimate octet to the full choir of 50+' },
  { title: 'Lead time', text: 'up to 18 months ahead for weddings & Christmas' },
  { title: 'Obligations', text: 'quotations are free and non-binding' },
]

const contactRows = [
  { Icon: Mail, title: 'Email', value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
  { Icon: MapPin, title: 'Based in', value: CONTACT_CITY },
  { Icon: Clock, title: 'Office hours', value: 'Mon–Fri · 9am–5pm AEST' },
]

const BOOKABLE = new Set(['concerts', 'corporate', 'weddings', 'private'])
const enquiryTypes = EVENT_CATEGORIES.filter((c) => BOOKABLE.has(c.slug))

export default function Enquire() {
  const [searchParams] = useSearchParams()
  const preset = searchParams.get('category')

  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    eventType: BOOKABLE.has(preset) ? preset : 'general',
    date: '',
    city: '',
    audienceSize: '',
    message: '',
  })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    if (import.meta.env.DEV) {
      console.info('Dev mode: form not posted — submissions are delivered in production.')
      setSent(true)
      return
    }
    try {
      const botField = new FormData(e.currentTarget).get('bot-field') || ''
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, bot_field: botField }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => null)
        const detail = data && data.error ? `: ${data.error}` : ''
        throw new Error(`Submission failed${detail} (${res.status})`)
      }
      setSent(true)
    } catch (err) {
      console.error(err)
      setError('Something went wrong sending your enquiry. Please try again, or write to us at the address below.')
    }
  }

  return (
    <>
      <PageHero
        title="Let's plan your performance"
        subtitle="Bookings, questions, media or partnerships — one page for everything. Tell us about the occasion, and we'll respond within two business days."
      />

      <section className="bg-bg-1 py-20 sm:py-28">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-24">
            {/* Aside */}
            <aside className="lg:col-span-4">
              <p className="label">The details</p>
              <h2 className="headline mt-4 text-2xl">What to expect</h2>
              <ul className="mt-9">
                {notes.map((n) => (
                  <li key={n.title} className="flex items-baseline justify-between gap-6 border-b border-line py-4">
                    <span className="text-sm text-ink">{n.title}</span>
                    <span className="text-right text-xs leading-relaxed text-mute">{n.text}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <p className="label">Contact the office</p>
                <ul className="mt-5 space-y-3 text-sm text-mute">
                  {contactRows.map(({ Icon, title, value, href }) => (
                    <li key={title} className="flex items-center gap-3">
                      <Icon size={14} className="shrink-0 text-gold" />
                      {href ? (
                        <a href={href} className="text-ink underline decoration-line-2 underline-offset-4 hover:text-gold">{value}</a>
                      ) : (
                        <span>{value}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

              </aside>

            {/* Form */}
            <div className="lg:col-span-8">
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center border border-line py-24 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-bg">
                    <Check size={22} />
                  </span>
                  <h2 className="headline mt-7 text-3xl">Enquiry received</h2>
                  <p className="mt-4 max-w-md text-sm leading-relaxed text-mute">
                    Thank you, {form.name || 'friend'}. A member of the bookings team will be in touch at{' '}
                    <span className="text-ink">{form.email}</span> within two business days.
                  </p>
                  <Button variant="line" className="mt-8" onClick={() => setSent(false)}>Submit another enquiry</Button>
                </div>
              ) : (
                <form onSubmit={submit} name="enquiry">
                  <p className="hidden" aria-hidden="true">
                    <label>
                      Don’t fill this out if you’re human: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </p>
                  <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                    <Field label="Full name" required>
                      <input required value={form.name} onChange={set('name')} placeholder="Jane Citizen" className="field" />
                    </Field>
                    <Field label="Email" required>
                      <input required type="email" value={form.email} onChange={set('email')} placeholder="you@email.com" className="field" />
                    </Field>
                    <Field label="Phone">
                      <input
                        type="tel"
                        inputMode="tel"
                        value={form.phone}
                        onChange={set('phone')}
                        placeholder="+61 4 000 000 000"
                        pattern="[+0-9()\-. ]{8,25}"
                        title="Please enter a valid phone number, e.g. +61 4 123 456 789"
                        className="field"
                      />
                    </Field>
                    <Field label="Organisation">
                      <input value={form.organisation} onChange={set('organisation')} placeholder="Company, venue or family" className="field" />
                    </Field>
<Field label="Type of enquiry" required>
                <select required value={form.eventType} onChange={set('eventType')} className="field">
                  <option value="general">General enquiry</option>
                  {enquiryTypes.map((c) => (
                    <option key={c.slug} value={c.slug}>{c.label}</option>
                  ))}
                </select>
              </Field>
                    <Field label="Preferred date">
                      <input type="date" value={form.date} onChange={set('date')} className="field [color-scheme:dark]" />
                    </Field>
                    <Field label="Event city / location" required>
                      <input required value={form.city} onChange={set('city')} placeholder="Sydney, Melbourne, regional…" className="field" />
                    </Field>
                    <Field label="Approximate audience">
                      <select value={form.audienceSize} onChange={set('audienceSize')} className="field">
                        <option value="">Select…</option>
                        <option>Up to 10</option>
                        <option>Up to 50</option>
                        <option>Up to 100</option>
                        <option>Up to 500</option>
                        <option>Up to 1,000</option>
                        <option>Over 1,000</option>
                      </select>
                    </Field>
                    <div className="sm:col-span-2">
                      <Field label="About your event" required>
                        <textarea
                          required
                          value={form.message}
                          onChange={set('message')}
                          rows={5}
                          placeholder="Venue, occasion, musical style you have in mind, budget expectations…"
                          className="field resize-y"
                        />
                      </Field>
                    </div>
                  </div>

                  {error && (
                    <p className="mt-6 max-w-prose text-sm text-gold" role="alert">{error}</p>
                  )}

                  <div className="mt-10 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                    <p className="max-w-sm text-xs leading-relaxed text-dim">
                      By submitting you agree to be contacted regarding this enquiry. We never share your details.
                    </p>
                    <button type="submit" className="btn btn-gold w-auto sm:px-10">
                      Send enquiry <ArrowUpRight size={14} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="label block">
        {label} {required && <span className="text-gold">*</span>}
      </span>
      <div className="mt-2.5">{children}</div>
    </label>
  )
}