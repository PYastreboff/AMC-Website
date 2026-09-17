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

  if (!RESEND_API_KEY || !CONTACT_TO) {
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
      body: JSON.stringify({ from: process.env.CONTACT_FROM || 'Australian Male Choir <onboarding@resend.dev>', to, subject, html }),
    })

  const rows = [
    ['Name', name],
    ['Email', email],
    ['Phone', phone],
    ['Organisation', organisation],
    ['Enquiry type', eventType],
    ['Preferred date', date],
    ['Location', city],
    ['Audience', audienceSize],
    ['Message', message],
  ].filter(([, v]) => v !== '')

  const detailRows = rows
    .map(
      ([k, v]) =>
        `<tr>
          <td style="padding:12px 16px;border-bottom:1px solid #ececec;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#8a8a8a;white-space:nowrap;width:1%;vertical-align:top;">${k}</td>
          <td style="padding:12px 16px;border-bottom:1px solid #ececec;font-size:14px;color:#333;vertical-align:top;">${v}</td>
        </tr>`
    )
    .join('')

  const sent = new Date().toLocaleString('en-AU', { timeZone: 'Australia/Sydney', dateStyle: 'long', timeStyle: 'short' })

  const ownerHtml = `
    <div style="font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif;max-width:580px;margin:0 auto;background:#0d0d0f;">
      <div style="background:#0d0d0f;padding:28px 32px;border-bottom:1px solid #2a2a2e;">
        <span style="font-size:15px;letter-spacing:0.18em;text-transform:uppercase;color:#c2a25b;font-weight:600;">Australian Male Choir</span>
        <div style="margin-top:4px;font-size:12px;color:#8a8a8a;">New enquiry · ${sent}</div>
      </div>
      <div style="background:#ffffff;padding:32px;">
        <table style="border-collapse:collapse;width:100%;margin:0;">${detailRows}</table>
        <p style="margin:24px 0 0;font-size:12px;color:#8a8a8a;">Reply to <span style="color:#c2a25b;">${email}</span> within two business days.</p>
      </div>
    </div>`

  const confirmHtml = `
    <div style="font-family:-apple-system,'Segoe UI',Helvetica,Arial,sans-serif;max-width:580px;margin:0 auto;background:#0d0d0f;">
      <div style="background:#0d0d0f;padding:28px 32px;border-bottom:1px solid #2a2a2e;">
        <span style="font-size:15px;letter-spacing:0.18em;text-transform:uppercase;color:#c2a25b;font-weight:600;">Australian Male Choir</span>
      </div>
      <div style="background:#ffffff;padding:32px;">
        <h1 style="margin:0 0 16px;font-size:22px;color:#111;font-weight:700;">Thank you for your enquiry${name ? `, ${name.split(' ')[0]}` : ''}</h1>
        <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#444;">
          We've received your message${eventType ? ` about a ${eventType} performance` : ''}${city ? ` in ${city}` : ''} and will be in
          touch within two business days with availability and options.
        </p>
        <p style="margin:0;font-size:15px;line-height:1.7;color:#444;">
          Best regards,<br /><span style="color:#b08f45;font-weight:600;">The Australian Male Choir</span>
        </p>
      </div>
    </div>`

  // Owner notification is what matters. The visitor confirmation is best-effort.
  const ownerRes = await send(CONTACT_TO, `New AMC enquiry${name ? ` · ${name}` : ''}`, ownerHtml)
  if (!ownerRes.ok) {
    res.status(502).json({ error: 'Failed to send email' })
    return
  }

  try {
    await send(email, 'Thank you for your enquiry · Australian Male Choir', confirmHtml)
  } catch {
    // visitor confirmation is non-fatal
  }

  res.status(200).json({ ok: true })
}