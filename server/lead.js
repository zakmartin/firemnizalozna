/* Lead pipeline: validace + doručovací adaptér (webhook / smtp dle env LEAD_DELIVERY) */
'use strict';

const MAX = { name: 200, phone: 40, email: 254, message: 4000, url: 500 };
const PHONE_RE = /^(\+?420)?\s?\d{3}\s?\d{3}\s?\d{3}$/;
const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;

function clip(v, max) {
  return typeof v === 'string' ? v.trim().slice(0, max) : '';
}

/** Validace + očištění vstupu. Vrací { ok, errors, lead }. */
function validate(body) {
  const errors = {};
  const lead = {
    name: clip(body.name, MAX.name),
    phone: clip(body.phone, MAX.phone),
    email: clip(body.email, MAX.email),
    message: clip(body.message, MAX.message),
    lang: clip(body.lang, 5) || 'cs',
    url: clip(body.url, MAX.url),
    utm: null,
    calculator: null,
    ts: new Date().toISOString(),
  };

  // jméno je povinné, výjimkou je rychlá žádost o zavolání (stačí telefon)
  if (!lead.name && !lead.phone) errors.name = 'required';
  if (!lead.phone && !lead.email) errors.contact = 'phone_or_email_required';
  if (lead.phone && !PHONE_RE.test(lead.phone)) errors.phone = 'invalid';
  if (lead.email && !EMAIL_RE.test(lead.email)) errors.email = 'invalid';

  // kalkulačka — jen whitelistovaná čísla
  let calc = body.calculator;
  if (typeof calc === 'string' && calc) {
    try { calc = JSON.parse(calc); } catch { calc = null; }
  }
  if (calc && typeof calc === 'object') {
    const num = (x) => (Number.isFinite(+x) ? +x : null);
    lead.calculator = {
      amount: num(calc.amount),
      months: num(calc.months),
      payment: num(calc.payment),
      rate: num(calc.rate),
    };
  }

  if (body.utm && typeof body.utm === 'object') {
    lead.utm = {};
    for (const [k, v] of Object.entries(body.utm)) {
      if (k.startsWith('utm_')) lead.utm[clip(k, 50)] = clip(String(v), 200);
    }
  }

  return { ok: Object.keys(errors).length === 0, errors, lead };
}

/* ---------- doručovací adaptéry ---------- */

async function deliverWebhook(lead) {
  const url = process.env.FORM_API_URL;
  if (!url) throw new Error('FORM_API_URL is not set (LEAD_DELIVERY=webhook)');
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ source: 'firemnizalozna.cz', type: 'lead', lead }),
    signal: AbortSignal.timeout(10000),
  });
  if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
}

async function deliverSmtp(lead) {
  // SMTP/SES adaptér — aktivace: LEAD_DELIVERY=smtp + SMTP_* env (Amazon SES SMTP endpoint)
  let nodemailer;
  try {
    nodemailer = require('nodemailer');
  } catch {
    throw new Error('nodemailer is not installed — run `npm i nodemailer` for LEAD_DELIVERY=smtp');
  }
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: +(process.env.SMTP_PORT || 587),
    secure: +(process.env.SMTP_PORT || 587) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
  const calcLine = lead.calculator && lead.calculator.amount
    ? `\nKalkulačka: ${lead.calculator.amount.toLocaleString('cs-CZ')} Kč / ${lead.calculator.months} měs. / splátka ${lead.calculator.payment} Kč (úrok od ${lead.calculator.rate} %)`
    : '';
  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.LEAD_EMAIL_TO,
    subject: `Nový lead z firemnizalozna.cz — ${lead.name}`,
    text: `Jméno: ${lead.name}\nTelefon: ${lead.phone || '—'}\nE-mail: ${lead.email || '—'}\nPoznámka: ${lead.message || '—'}${calcLine}\n\nJazyk: ${lead.lang}\nURL: ${lead.url}\nČas: ${lead.ts}`,
  });
}

async function deliver(lead) {
  const mode = (process.env.LEAD_DELIVERY || 'webhook').toLowerCase();
  if (mode === 'smtp') return deliverSmtp(lead);
  return deliverWebhook(lead);
}

module.exports = { validate, deliver };
