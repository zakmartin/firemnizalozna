/* Generátor EN podstránek Firemní záložna */
'use strict';
const fs = require('fs');
const path = require('path');
const { page, CHECK_ICON, CHEVRON_ICON } = require('./fz-tmpl.js');

const OUT = require('path').join(__dirname, '..', 'public');

const check = (html) => `<li>${CHECK_ICON}<span>${html}</span></li>`;
const faq = (q, a) => `          <details>
            <summary>${q}${CHEVRON_ICON}</summary>
            <p class="fz-faq__answer">${a}</p>
          </details>`;

const pages = [];

/* ---------- /en/how-it-works/ ---------- */
pages.push({
  lang: 'en', path: '/en/how-it-works/', altPath: '/jak-to-funguje/',
  title: 'How it works — Firemní záložna',
  desc: 'From the first call to money in your account within 48 hours. Three steps, minimal paperwork, and we bring the contract to you. Business loans without bank bureaucracy.',
  h1: 'How it works',
  sub: 'Three steps, minimal paperwork and a clear timeline. From first contact to money in your account, it usually takes two business days.',
  content: `        <div class="fz-prose">
          <h2>Step 1 — Get in touch <em style="color:var(--fz-accent-dark);font-style:italic;font-size:.7em;">(ring)</em></h2>
          <p>Fill in a short form or simply call <a href="tel:+420771528747"><strong>+420 771 528 747</strong></a>. In the first step we only need your <strong>name and contact details</strong> — no personal ID number, no financial statements, no attachments. Our specialist Aleš Mráz will call you back to discuss your situation and what you need to finance.</p>

          <h2>Step 2 — We prepare an offer <em style="color:var(--fz-accent-dark);font-style:italic;font-size:.7em;">(vroom)</em></h2>
          <p>The specialist assesses your assets — real estate, possibly combined with movable assets — and <strong>within 24 hours</strong> you have a no-obligation offer on the table. It includes:</p>
          <ul>
            <li>the loan amount and interest rate (from 9.9% p.a.),</li>
            <li>the indicative monthly instalment and repayment term,</li>
            <li>all fees and the APR — nothing hidden in the fine print,</li>
            <li>early repayment terms.</li>
          </ul>
          <p>The offer does not commit you to anything. If you decide otherwise, no problem.</p>

          <h2>Step 3 — The money is yours <em style="color:var(--fz-accent-dark);font-style:italic;font-size:.7em;">(cha-ching)</em></h2>
          <p>If the offer works for you, <strong>we bring the contract to you for signing</strong> — to your home, workshop or office, whatever suits you. After signing, we send the money; it is usually in your account <strong>within 48 hours</strong>.</p>

          <h2>What documents you will need</h2>
          <ul>
            <li><strong>Identity card</strong> — identity verification.</li>
            <li><strong>Business registration (IČO)</strong> — we provide loans to entrepreneurs and companies for business purposes.</li>
            <li><strong>Collateral documents</strong> — for real estate, the address or title deed is enough (we look up the rest in the land registry); for vehicles and machinery, the registration certificate or proof of ownership.</li>
          </ul>
          <p>We do not ask for financial statements, tax returns or reports in the first step. The loan is secured by assets — that is why we can do without bank paperwork.</p>

          <h2>Timeline — what happens when</h2>
          <div class="fz-timeline">
            <div class="fz-timeline__item">
              <span class="fz-timeline__when">Day 0</span>
              <h3>You get in touch</h3>
              <p>Form or phone. The specialist calls you back and discusses your situation.</p>
            </div>
            <div class="fz-timeline__item">
              <span class="fz-timeline__when">Within 24 hours</span>
              <h3>You have a no-obligation offer</h3>
              <p>Concrete numbers: amount, instalment, fees, APR. All upfront.</p>
            </div>
            <div class="fz-timeline__item">
              <span class="fz-timeline__when">After approval</span>
              <h3>Signing at your place</h3>
              <p>The specialist brings the contract, walks you through it point by point, and you sign.</p>
            </div>
            <div class="fz-timeline__item">
              <span class="fz-timeline__when">Within 48 hours</span>
              <h3>Money in your account</h3>
              <p>We send it right after signing and registering the pledge. You can pay for materials, wages, machinery.</p>
            </div>
          </div>

          <h2>What does "we bring the contract to you" mean?</h2>
          <p>Exactly what it says. No anonymous online process, no queueing at a branch — <strong>the specialist comes to you in person</strong>, goes through the contract with you in plain language, answers all your questions, and you sign on the spot. You can keep running your business.</p>
        </div>`,
});

/* ---------- /en/who-its-for/ ---------- */
pages.push({
  lang: 'en', path: '/en/who-its-for/', altPath: '/pro-koho/',
  title: 'Who it’s for — Firemní záložna',
  desc: 'Business loans for sole traders, small companies and new entrepreneurs. Bridging cash flow, buying equipment, wages, rent and business launch.',
  h1: 'Who we are here for',
  sub: 'For sole traders and small businesses that need money fast — and that the bank turned away. We assess like humans: your situation and assets, not just a scoring number.',
  content: `        <div class="fz-prose">
          <h2>Sole traders and craftsmen</h2>
          <p><em>"I'm waiting for a big invoice to be paid, but I have to pay for materials and people now. I don't have time to run around bank branches."</em></p>
          <p>We know the feeling. An invoice due in 60 days won't pay for today's material delivery. The bank wants reports and takes weeks — we assess your van, workshop or flat, and within 48 hours you have bridging money. Once the invoice is paid, you can repay early.</p>

          <h2>Small companies (Ltd.)</h2>
          <p><em>"I need to buy a machine and stock up before the season. The bank treats me as numbers, not as an entrepreneur."</em></p>
          <p>Manufacturing, e-commerce, services — when an opportunity appears, speed decides. As collateral we accept your premises, company vehicles and machines, even <strong>in combination</strong>. Individual assessment means we care about your business, not just the length of your history and the tidiness of your statements.</p>

          <h2>New entrepreneurs</h2>
          <p><em>"Without a track record, the bank won't even hear me out."</em></p>
          <p>Starting out and your credit history hasn't had time to build up? If you own real estate — even co-owned — we can give you the chance the bank won't. We assess your plan and collateral and tell you straight what is possible.</p>

          <h2>What entrepreneurs most often finance with us</h2>
          <ul class="fz-checklist" style="margin-bottom:16px;">
            ${check('<strong>Bridging cash flow</strong> — until customer payments arrive')}
            ${check('<strong>Equipment and materials</strong> — machines, tools, stock before the season')}
            ${check('<strong>Wages and rent</strong> — keeping operations running through a tough period')}
            ${check('<strong>Fulfilling contracts</strong> — taking a bigger job you lack free funds for')}
            ${check('<strong>Business launch</strong> — first equipment, premises, stock')}
          </ul>

          <p><strong>Important:</strong> Loans are intended exclusively for entrepreneurs and companies, for business purposes. We are not a consumer credit provider.</p>
        </div>`,
});

/* ---------- /en/collateral/ ---------- */
pages.push({
  lang: 'en', path: '/en/collateral/', altPath: '/zajisteni/',
  title: 'Loan collateral — real estate and movable assets — Firemní záložna',
  desc: 'As collateral we accept real estate or a combination of real estate and movable assets — cars, machines, technology. Flexible security a bank won’t offer.',
  h1: 'What can serve as collateral',
  sub: 'Real estate — or a combination of real estate and movable assets. Cars, machines and technology are collateral most competitors won’t accept. We do.',
  content: `        <div class="fz-prose">
          <h2>Real estate</h2>
          <ul class="fz-checklist" style="margin-bottom:16px;">
            ${check('<strong>Flat or house</strong> — owned or co-owned')}
            ${check('<strong>Land</strong> — building plots and other land')}
            ${check('<strong>Commercial property</strong> — premises, workshop, warehouse, office')}
            ${check('<strong>Property owned by another person</strong> — with the owner’s consent (e.g. a family member)')}
          </ul>

          <h2>Movable assets — our big advantage</h2>
          <p>Where the value of the property is not enough for the requested loan amount, we can <strong>top up the collateral with movable assets</strong>:</p>
          <ul class="fz-checklist" style="margin-bottom:16px;">
            ${check('<strong>Vehicles</strong> — cars, vans, trucks')}
            ${check('<strong>Machinery</strong> — production and construction machines, machining centres')}
            ${check('<strong>Technology</strong> — operational equipment, production lines')}
          </ul>
          <p>Combining real estate and movable assets means you can reach a higher loan than the property alone would allow — and higher than competitors who do not accept movable assets at all.</p>

          <h2>How collateral works in practice</h2>
          <h3>Valuation</h3>
          <p>The specialist assesses the value of your assets quickly and without unnecessary bureaucracy — for real estate we rely on the land registry and market comparison, for machines and vehicles on documents and condition. No weeks of waiting for an expert opinion where it is not needed.</p>
          <h3>You keep using your assets</h3>
          <p>A pledge does not mean losing your assets or being unable to use them. The van keeps driving, the machine keeps producing, you keep living in the flat. The pledge only serves as security during repayment — once the loan is repaid, we remove it.</p>
          <h3>What it means for the loan amount</h3>
          <p>The loan amount depends on the value of the collateral. As a rule of thumb: the more valuable and liquid the collateral, the higher the amount and the better the terms. We set the specific ratio during assessment — openly and in advance.</p>
        </div>`,
});

/* ---------- /en/pricing/ ---------- */
pages.push({
  lang: 'en', path: '/en/pricing/', altPath: '/cena/',
  title: 'Pricing and APR — Firemní záložna',
  desc: 'Transparent business loan pricing: interest from 9.9% p.a., fees agreed upfront, representative example with APR. Early repayment possible.',
  h1: 'What it costs',
  sub: 'Loan pricing upfront: interest from 9.9% p.a., fees agreed in advance and included in the APR. No surprises in the contract.',
  content: `        <div class="fz-prose">
          <h2>What makes up the price</h2>
          <ul>
            <li><strong>Interest from 9.9% p.a.</strong> — the specific rate depends on the assessment, loan amount and quality of collateral. You know the rate from the no-obligation offer before committing to anything.</li>
            <li><strong>Fees</strong> — agreed in advance and stated in the contract and the APR. <span style="color:var(--fz-accent-dark);">[TO BE ADDED: fee schedule — after business finalisation and legal review]</span></li>
            <li><strong>Repayment term</strong> — 6 to 60 months. A shorter loan means lower total costs; a longer one means a lower monthly instalment.</li>
          </ul>

          <h2>Representative example</h2>
          <div class="fz-price-example" style="max-width:480px;">
            <dl>
              <dt>Loan amount</dt><dd>CZK 300,000</dd>
              <dt>Term</dt><dd>24 months</dd>
              <dt>Interest rate</dt><dd>9.9% p.a.</dd>
              <dt>Indicative monthly instalment</dt><dd>CZK 13,830</dd>
              <dt>One-off fees</dt><dd class="fz-todo">[TBC] CZK</dd>
              <dt>Total payable</dt><dd class="fz-todo">[TBC] CZK</dd>
              <dt>APR</dt><dd class="fz-todo">[TBC] %</dd>
            </dl>
            <p class="fz-fineprint">The example is indicative. Specific terms are set after individual assessment and based on collateral. The APR and total amount will be added once the fee schedule is finalised and legally reviewed.</p>
          </div>

          <h2>Early repayment</h2>
          <p>You can repay the loan early — for instance, the moment a customer pays your invoice. Early repayment terms are agreed directly in the contract, and the specialist explains them <strong>before signing</strong>, not after.</p>

          <h2>Why we are not the cheapest — and why that makes sense for our clients</h2>
          <p>You can find providers with a lower rate. We do not compete on price, but on what an entrepreneur under pressure needs most: <strong>an offer within 24 hours, money within 48 hours, individual assessment and collateral including movable assets.</strong> When a contract or a season cannot wait, speed is cheaper than a missed opportunity.</p>

          <p class="fz-fineprint">We provide loans exclusively to entrepreneurs and companies for business purposes. This is not consumer credit within the meaning of Czech Act No. 257/2016 Coll.</p>
        </div>`,
});

/* ---------- /en/faq/ ---------- */
const FAQ_ITEMS = [
  ['How fast will I get the money?',
   'We prepare a no-obligation offer within 24 hours of first contact. After signing the contract — which we bring to you — the money is usually in your account within 48 hours.'],
  ['What can I use as collateral?',
   'Real estate (flat, house, land or commercial property), or a combination of real estate and movable assets — cars, machines, technology. Flexible collateral is our main advantage. See the <a href="/en/collateral/">Collateral</a> page.'],
  ['What if the bank turned me down?',
   'We assess every application individually — we care about your business and assets, not just scoring and history. A bank rejection is no obstacle for us.'],
  ['Do I have to provide income statements or reports?',
   'Only a minimum. The loan is secured by assets, so we don’t need detailed statements or a long credit history. The specialist will tell you exactly what is needed in the first call.'],
  ['How much will the loan cost / what is the APR?',
   'Interest starts at 9.9% p.a. The specific rate and fees depend on the assessment and collateral — you receive everything upfront in a no-obligation offer including the APR. More on the <a href="/en/pricing/">Pricing</a> page.'],
  ['Can I repay the loan early? Are there any fees?',
   'Yes, early repayment is possible. The terms are agreed directly in the contract and the specialist explains them before signing — no fine print.'],
  ['How much can I borrow?',
   'Typically from CZK 50,000 to CZK 1,000,000; after individual assessment up to CZK 5,000,000. The amount depends on the value of the collateral.'],
  ['Can I pledge property owned by someone else?',
   'Yes — with the owner’s consent. Typically a family member’s property. The specialist will walk you through what is needed.'],
  ['Do I have to be an entrepreneur?',
   'Yes. Firemní záložna loans are intended exclusively for sole traders and companies, for business purposes. We do not provide consumer credit.'],
  ['What if I have a record in a credit register?',
   'A register record is not an automatic stop. We assess the whole situation individually — assets, business and the reason for the record. Get in touch and we will discuss it openly.'],
  ['How does contract signing work?',
   'In person — the specialist brings the contract to your home or company, goes through it with you point by point, and you sign on the spot. No anonymous online process.'],
];

pages.push({
  lang: 'en', path: '/en/faq/', altPath: '/caste-dotazy/',
  title: 'FAQ — Firemní záložna',
  desc: 'Answers to the most common questions about our business loans: speed, collateral, pricing and APR, early repayment, credit registers and bank rejections.',
  h1: 'Frequently asked questions',
  sub: 'Straight answers, no fine print. If you can’t find yours, call +420 771 528 747 — Aleš will answer in person.',
  extraHead: `\n  <script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map(([q, a]) => ({
      '@type': 'Question', name: q,
      acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') },
    })),
  })}</script>`,
  content: `        <div class="fz-faq" style="margin-top:0;">
${FAQ_ITEMS.map(([q, a]) => faq(q, a)).join('\n')}
        </div>`,
});

/* ---------- /en/about/ ---------- */
pages.push({
  lang: 'en', path: '/en/about/', altPath: '/o-nas/',
  title: 'About us — Firemní záložna',
  desc: 'We run businesses ourselves, so we understand your needs. Firemní záložna is the CFG investment group’s brand for fast business financing.',
  h1: 'We run businesses ourselves. That’s why we understand you.',
  sub: 'Firemní záložna is the CFG investment group’s brand for fast business financing. We know what it’s like when cash flow can’t wait.',
  content: `        <div class="fz-prose">
          <h2>Who we are</h2>
          <p>We are not a bank and don’t want to be one. We are entrepreneurs financing other entrepreneurs. We know a contract won’t wait for the bank’s process, a season doesn’t care about scoring, and the most valuable thing an entrepreneur has is time. That’s why we do things differently: <strong>an offer within 24 hours, money within 48 hours, the contract delivered for signing.</strong></p>

          <h2>How we assess</h2>
          <p>A bank sees you as rows in a spreadsheet. We ask: what do you do, what do you need to finance, and what assets do you have? Individual assessment means we can say “yes” even where automated scoring said “no” — because we see the whole story, not just the numbers.</p>

          <h2>Your specialist</h2>
          <p>With us, you don’t talk to a call centre. Your loan is handled from the first call to the signature by <strong>Aleš Mráz, loan specialist</strong> — he calls you personally, assesses the assets, prepares the offer and brings the contract. One face, one name, one number: <a href="tel:+420771528747">+420 771 528 747</a>.</p>

          <h2>Backed by the CFG group</h2>
          <p>Behind Firemní záložna stands the Czech investment group <a href="https://www.cfg.cz" target="_blank" rel="noopener">CFG</a>, with a long-term focus on financing, receivables and real estate. For you, this means stability and the certainty that you are dealing with a partner with strong backing — one that will still be here in five years.</p>
          <p><span style="color:var(--fz-accent-dark);">[TO BE ADDED: unified group figures — loan volume, years on the market, number of clients]</span></p>
        </div>`,
});

/* ---------- /en/contact/ ---------- */
pages.push({
  lang: 'en', path: '/en/contact/', altPath: '/kontakt/',
  title: 'Contact — Firemní záložna',
  desc: 'Call +420 771 528 747 (Mon–Fri 9–17), write to us, or visit: Vinohradská 2828/151, Prague 3. Loan specialist Aleš Mráz.',
  h1: 'Contact',
  sub: 'Call, write, or fill in the form below — Aleš will get back to you within 24 hours on business days.',
  noCtaBand: true,
  content: `        <div class="fz-contact-grid">
          <div class="fz-contact-card">
            <h2>Get in touch</h2>
            <div class="fz-contact-row">
              <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span><a href="tel:+420771528747">+420 771 528 747</a><br><span style="color:var(--text-muted);font-size:14px;">Mon–Fri 9 a.m.–5 p.m.</span></span>
            </div>
            <div class="fz-contact-row">
              <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
              <span><a href="mailto:info@firemnizalozna.cz">info@firemnizalozna.cz</a></span>
            </div>
            <div class="fz-contact-row">
              <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Vinohradská 2828/151<br>130 00 Prague 3, Czech Republic</span>
            </div>
            <div class="fz-contact-row" style="margin-top:12px;border-top:1px solid var(--divider-dark);padding-top:20px;">
              <img src="/assets/ales_mraz.webp" alt="Aleš Mráz, loan specialist" width="56" height="56" style="border-radius:50%;object-fit:cover;background:#ddd;">
              <span><strong>Aleš Mráz</strong><br><span style="color:var(--text-muted);font-size:14px;">loan specialist</span></span>
            </div>
          </div>
          <iframe class="fz-map" src="https://www.openstreetmap.org/export/embed.html?bbox=14.4554%2C50.0726%2C14.4754%2C50.0826&amp;layer=mapnik&amp;marker=50.0776%2C14.4654" title="Map — Vinohradská 2828/151, Prague 3" loading="lazy"></iframe>
        </div>`,
});

/* ---------- /en/privacy/ ---------- */
pages.push({
  lang: 'en', path: '/en/privacy/', altPath: '/ochrana-osobnich-udaju/',
  title: 'Privacy policy — Firemní záložna',
  desc: 'Information on the processing of personal data on firemnizalozna.cz — controller, purposes, legal bases, retention periods and your rights.',
  h1: 'Privacy policy',
  sub: 'How we handle your personal data. Draft text — to be legally reviewed in line with the group standard before launch.',
  noCtaBand: true,
  content: `        <div class="fz-prose">
          <p><em style="color:var(--fz-accent-dark);">[DRAFT FOR LEGAL REVIEW — to be completed per the CFG group template]</em></p>
          <h2>Data controller</h2>
          <p><span style="color:var(--fz-accent-dark);">[TO BE ADDED: operator name, company ID, registered office]</span>, contact: <a href="mailto:info@firemnizalozna.cz">info@firemnizalozna.cz</a>, tel. +420 771 528 747.</p>
          <h2>What data we process and why</h2>
          <ul>
            <li><strong>Contact form (loan enquiry):</strong> name, phone, e-mail, message content and calculator data (amount, term, indicative instalment). Purpose: handling your enquiry and preparing a no-obligation offer. Legal basis: steps prior to entering into a contract (Art. 6(1)(b) GDPR) and consent.</li>
            <li><strong>Website technical data:</strong> to the extent of your cookie consent (see <a href="/en/cookies/">Cookie policy</a>).</li>
          </ul>
          <h2>Retention period</h2>
          <p>We keep enquiry data for the duration of contract negotiations, at most <span style="color:var(--fz-accent-dark);">[TO BE ADDED: period per group standard]</span>. Then we delete it.</p>
          <h2>Who we share data with</h2>
          <p>Data is processed within the CFG group and shared only with processors necessary for handling your enquiry (IT infrastructure, message delivery). We do not transfer data outside the EU/EEA.</p>
          <h2>Your rights</h2>
          <ul>
            <li>the right of access and to a copy of your data,</li>
            <li>the right to rectification and erasure,</li>
            <li>the right to object and to restriction of processing,</li>
            <li>the right to data portability,</li>
            <li>the right to withdraw consent,</li>
            <li>the right to lodge a complaint with the Czech Office for Personal Data Protection (uoou.gov.cz).</li>
          </ul>
          <p>To exercise your rights, contact us at <a href="mailto:info@firemnizalozna.cz">info@firemnizalozna.cz</a>.</p>
        </div>`,
});

/* ---------- /en/cookies/ ---------- */
pages.push({
  lang: 'en', path: '/en/cookies/', altPath: '/cookies/',
  title: 'Cookie policy — Firemní záložna',
  desc: 'What cookies firemnizalozna.cz uses, what they are for and how you can manage your consent.',
  h1: 'Cookie policy',
  sub: 'What cookies we use, what they are for and how to change your settings.',
  noCtaBand: true,
  content: `        <div class="fz-prose">
          <p><em style="color:var(--fz-accent-dark);">[DRAFT FOR LEGAL REVIEW — to be completed per the CFG group template]</em></p>
          <h2>Cookie categories</h2>
          <ul>
            <li><strong>Necessary</strong> — ensure the basic operation of the website and store your consent. They cannot be switched off.</li>
            <li><strong>Analytics</strong> — help us understand how you use the site (traffic, calculator usage). Loaded only after your consent.</li>
            <li><strong>Marketing</strong> — used for campaign measurement. Loaded only after your consent.</li>
          </ul>
          <h2>Managing consent</h2>
          <p>You can change or withdraw your consent at any time:</p>
          <p><button class="btn btn--primary" data-cookie-settings type="button">Open cookie settings</button></p>
          <h2>How long your consent lasts</h2>
          <p>Your choice is stored in your browser. Analytics and marketing tools are not loaded without consent.</p>
        </div>`,
});

/* ---------- /en/thank-you/ ---------- */
pages.push({
  lang: 'en', path: '/en/thank-you/', altPath: '/dekujeme/',
  title: 'Thank you — Firemní záložna',
  desc: 'We have received your enquiry. A loan specialist will contact you within 24 hours on business days.',
  h1: 'Thank you — we’ve got it!',
  sub: 'Your enquiry has arrived. Aleš Mráz, your loan specialist, will contact you within 24 hours on business days — please have an idea ready of what you want to finance and what assets you can offer as collateral.',
  noCtaBand: true,
  content: `        <div class="fz-prose">
          <h2>What happens next</h2>
          <div class="fz-timeline">
            <div class="fz-timeline__item">
              <span class="fz-timeline__when">Within 24 hours</span>
              <h3>Aleš will call you</h3>
              <p>He will discuss your situation, what you need to finance and what assets you have.</p>
            </div>
            <div class="fz-timeline__item">
              <span class="fz-timeline__when">Right after</span>
              <h3>You receive a no-obligation offer</h3>
              <p>Concrete numbers — amount, instalment, fees, APR. Nothing commits you to anything.</p>
            </div>
          </div>
          <p>In a hurry? Call right away: <a href="tel:+420771528747"><strong>+420 771 528 747</strong></a> (Mon–Fri 9 a.m.–5 p.m.).</p>
          <p><a href="/en/" class="btn btn--ghost-dark">Back to the homepage</a></p>
        </div>`,
});

/* ---------- write ---------- */
for (const p of pages) {
  const dir = path.join(OUT, p.path);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), page(p));
  console.log('written', p.path);
}
