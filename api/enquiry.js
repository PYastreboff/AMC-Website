export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  let body = req.body || {}
  if (typeof body === 'string') {
    try {
      body = JSON.parse(body)
    } catch {
      res.status(400).json({ error: 'Invalid JSON' })
      return
    }
  }

  const {
    name = '',
    email = '',
    phone = '',
    organisation = '',
    eventType = '',
    date = '',
    city = '',
    audienceSize = '',
    message = '',
    bot_field = '',
  } = body

  if (bot_field) {
    res.status(200).json({ ok: true })
    return
  }

  if (!email) {
    res.status(400).json({ error: 'Email is required' })
    return
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY
  const CONTACT_TO = process.env.CONTACT_TO
  const CONTACT_FROM = process.env.CONTACT_FROM

  if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) {
    res.status(500).json({ error: 'Email service not configured' })
    return
  }

  const send = (to, subject, html) =>
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ from: CONTACT_FROM, to, subject, html }),
    })

  const rows = [
    ['Name', name],
    ['Email', email],
    ['Phone', phone],
    ['Organisation', organisation],
    ['Type of enquiry', eventType],
    ['Preferred date', date],
    ['Location', city],
    ['Approximate audience', audienceSize],
    ['Message', message],
  ]
  const table = rows
    .map(([k, v]) => `<tr><td style="padding:10px 16px;border-bottom:1px solid #e5e5e5;color:#444;white-space:nowrap;">${k}</td><td style="padding:10px 16px;border-bottom:1px solid #e5e5e5;">${v}</td></tr>`)
    .join('')

  const ownerHtml = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="font-size:20px;margin:0 0 4px;">New AMC enquiry</h2>
      <p style="color:#888;margin:0 0 20px;font-size:13px;">${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney' })}</p>
      <table style="border-collapse:collapse;width:100%;font-size:14px;">${table}</table>
    </div>`

  const confirmHtml = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;">
      <h2 style="font-size:20px;margin:0 0 12px;">Thank you for your enquiry, ${name.split(' ')[0]}</h2>
      <p style="font-size:14px;line-height:1.6;color:#444;margin:0 0 12px;">
        We've received your message${eventType ? ` about ${eventType}` : ''}${city ? ` in ${city}` : ''} and will be
        in touch within two business days with availability and options.
      </p>
      <p style="font-size:14px;line-height:1.6;color:#444;margin:0;">
        Best regards,<br />The Australian Male Choir
      </p>
    </div>`

  const results = await Promise.all([
    send(CONTACT_TO, `New AMC enquiry from ${name || 'the website'}`, ownerHtml),
    send(email, 'Thank you for your enquiry · Australian Male Choir', confirmHtml),
  ])

  const failed = results.some((r) => !r.ok)
  if (failed) {
    res.status(502).json({ error: 'Failed to send email' })
    return
  }

  res.status(200).json({ ok: true })
}