/* Jednorázový generátor stránek Firemní záložna — šablona (hlavička, nav, footer, cookie) */
'use strict';

const BASE = 'https://www.firemnizalozna.cz';

/* EN verze zatím vypnutá — po spuštění /en/ přepnout na true a spustit oba generátory */
const EN_ENABLED = false;

const NAV = {
  cs: [
    ['/jak-to-funguje/', 'Jak to funguje'],
    ['/pro-koho/', 'Pro koho'],
    ['/zajisteni/', 'Zajištění'],
    ['/cena/', 'Cena'],
    ['/caste-dotazy/', 'FAQ'],
    ['/kontakt/', 'Kontakt'],
  ],
  en: [
    ['/en/how-it-works/', 'How it works'],
    ['/en/who-its-for/', 'Who it’s for'],
    ['/en/collateral/', 'Collateral'],
    ['/en/pricing/', 'Pricing'],
    ['/en/faq/', 'FAQ'],
    ['/en/contact/', 'Contact'],
  ],
};

const T = {
  cs: {
    skip: 'Přeskočit na obsah',
    cta: 'Zjistit nezávaznou nabídku', ctaHref: '/#kalkulacka',
    lang: 'EN', menuOpen: 'Otevřít menu', member: 'Člen skupiny',
    home: 'Domů',
    claim: 'Spolu to dáme.',
    footHeadline: 'Probereme to spolu — nezávazně',
    specName: 'Aleš Mráz', specRole: 'úvěrový specialista — ozve se vám osobně',
    formTitle: 'Zjistěte nezávaznou nabídku',
    fName: 'Jméno a příjmení *', fNamePh: 'Jan Novák',
    fPhone: 'Telefon', fEmail: 'E-mail', fEmailPh: 'jan@firma.cz',
    fMsg: 'Poznámka (nepovinné)', fMsgPh: 'Např. mám zájem o úvěr 300 000 Kč na 36 měsíců…',
    fGdprA: 'Souhlasím se ', fGdprLink: 'zpracováním osobních údajů', fGdprHref: '/ochrana-osobnich-udaju/',
    fHp: 'Nevyplňujte toto pole',
    submit: 'Zjistit nezávaznou nabídku',
    navHead: 'Navigace', contactHead: 'Kontakt', groupHead: 'Skupina CFG',
    groupDesc: 'Jsme členem investiční skupiny CFG — financování, pohledávky a nemovitosti pod jednou střechou.',
    hours: 'Po–Pá 9–17',
    legalOperator: '[DOPLNIT: provozovatel, IČO, sídlo]',
    legalPrivacy: 'Ochrana osobních údajů', privacyHref: '/ochrana-osobnich-udaju/',
    legalCookies: 'Zásady cookies', cookiesHref: '/cookies/',
    legalCookieSettings: 'Nastavení cookies',
    copy: '© 2026 Firemní záložna',
    footNav: [
      ['/jak-to-funguje/', 'Jak to funguje'], ['/pro-koho/', 'Pro koho'], ['/zajisteni/', 'Zajištění'],
      ['/cena/', 'Cena'], ['/caste-dotazy/', 'Časté dotazy'], ['/o-nas/', 'O nás'], ['/kontakt/', 'Kontakt'],
    ],
    sticky: 'Zavolejte mi — 771 528 747',
    ckTitle: 'Cookies na tomto webu',
    ckText: 'Nezbytné cookies potřebujeme pro chod webu. Analytické a marketingové použijeme jen s vaším souhlasem. <a href="/cookies/">Zásady cookies</a>',
    ckNecessary: 'Nezbytné (vždy aktivní)', ckAnalytics: 'Analytické', ckMarketing: 'Marketingové',
    ckSave: 'Uložit vybrané', ckAll: 'Přijmout vše', ckNone: 'Odmítnout', ckSettings: 'Nastavení',
    ctaBandTitle: 'Nabídku máte na stole do 24 hodin',
    ctaBandText: 'Nezávazně, bez výkazů a bez obíhání poboček. Spolu to dáme.',
    ctaBandBtn: 'Zjistit nezávaznou nabídku',
    pcKicker: 'Spolu to dáme',
    pcTitle: 'Ozvěte se — <em>do 24 hodin máte nabídku</em>',
    pcText: 'Stačí pár údajů. Aleš se vám ozve, probere vaši situaci a připravíme nezávaznou nabídku na míru.',
    pcSpecLabel: 'Specialista',
    footAbout: 'Podnikatelské úvěry zajištěné nemovitostí nebo movitým majetkem. Pro OSVČ a firmy.',
    ogLocale: 'cs_CZ',
  },
  en: {
    skip: 'Skip to content',
    cta: 'Get a no-obligation offer', ctaHref: '/en/#kalkulacka',
    lang: 'CZ', menuOpen: 'Open menu', member: 'Member of',
    home: 'Home',
    claim: 'We’re in this together.',
    footHeadline: 'Let’s talk it through — no strings attached',
    specName: 'Aleš Mráz', specRole: 'loan specialist — he will call you personally',
    formTitle: 'Get a no-obligation offer',
    fName: 'Full name *', fNamePh: 'John Smith',
    fPhone: 'Phone', fEmail: 'E-mail', fEmailPh: 'john@company.com',
    fMsg: 'Note (optional)', fMsgPh: 'E.g. I am interested in a loan of CZK 300,000 for 36 months…',
    fGdprA: 'I agree to the ', fGdprLink: 'processing of personal data', fGdprHref: '/en/privacy/',
    fHp: 'Do not fill in this field',
    submit: 'Get a no-obligation offer',
    navHead: 'Navigation', contactHead: 'Contact', groupHead: 'CFG Group',
    groupDesc: 'We are a member of the CFG investment group — financing, receivables and real estate under one roof.',
    hours: 'Mon–Fri 9 a.m.–5 p.m.',
    legalOperator: '[TO BE ADDED: operator, company ID, registered office]',
    legalPrivacy: 'Privacy policy', privacyHref: '/en/privacy/',
    legalCookies: 'Cookie policy', cookiesHref: '/en/cookies/',
    legalCookieSettings: 'Cookie settings',
    copy: '© 2026 Firemní záložna',
    footNav: [
      ['/en/how-it-works/', 'How it works'], ['/en/who-its-for/', 'Who it’s for'], ['/en/collateral/', 'Collateral'],
      ['/en/pricing/', 'Pricing'], ['/en/faq/', 'FAQ'], ['/en/about/', 'About us'], ['/en/contact/', 'Contact'],
    ],
    sticky: 'Call me — +420 771 528 747',
    ckTitle: 'Cookies on this website',
    ckText: 'We need necessary cookies for the website to work. Analytics and marketing cookies are used only with your consent. <a href="/en/cookies/">Cookie policy</a>',
    ckNecessary: 'Necessary (always active)', ckAnalytics: 'Analytics', ckMarketing: 'Marketing',
    ckSave: 'Save selection', ckAll: 'Accept all', ckNone: 'Reject', ckSettings: 'Settings',
    ctaBandTitle: 'Your offer within 24 hours',
    ctaBandText: 'No strings attached, no financial statements, no branch visits.',
    ctaBandBtn: 'Get a no-obligation offer',
    pcKicker: 'We’re in this together',
    pcTitle: 'Get in touch — <em>your offer within 24 hours</em>',
    pcText: 'Just a few details. Aleš will call you, discuss your situation and prepare a tailored no-obligation offer.',
    pcSpecLabel: 'Specialist',
    footAbout: 'Business loans secured by real estate or movable assets. For sole traders and companies.',
    ogLocale: 'en_GB',
  },
};

const PHONE_ICON = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
const CHECK_ICON = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
const CHEVRON_ICON = '<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';

function nav(lang, altPath) {
  const t = T[lang];
  const links = NAV[lang].map(([href, label]) => `        <a class="nav__item" href="${href}">${label}</a>`).join('\n');
  return `  <header class="nav">
    <div class="nav__inner">
      <div class="nav__brand">
        <a href="${lang === 'en' ? '/en/' : '/'}" class="nav__logo" aria-label="Firemní záložna">
          <img src="/assets/logo-fz.png" alt="Firemní záložna" width="140" height="47">
        </a>
        <a href="https://www.cfg.cz" class="nav__cfg-badge" target="_blank" rel="noopener">
          <span>${t.member}</span>
          <img src="/assets/logo-cfg.svg" alt="CFG" width="44" height="16">
        </a>
      </div>
      <button class="nav__burger" aria-label="${t.menuOpen}" aria-expanded="false" aria-controls="navLinks">
        <span></span><span></span><span></span>
      </button>
      <nav class="nav__links" id="navLinks" aria-label="Navigace">
${links}
        <a href="${t.ctaHref}" class="nav__item nav__cta">${t.cta}</a>
${EN_ENABLED ? `        <a href="${altPath}" class="nav__lang" lang="${lang === 'en' ? 'cs' : 'en'}" hreflang="${lang === 'en' ? 'cs' : 'en'}">${t.lang}</a>\n` : ''}      </nav>
    </div>
  </header>`;
}

function ctaBand(lang) {
  const t = T[lang];
  return `        <div class="fz-cta-band reveal">
          <div>
            <h2>${t.ctaBandTitle}</h2>
            <p>${t.ctaBandText}</p>
          </div>
          <a href="#kontakt" class="btn">${t.ctaBandBtn}</a>
        </div>`;
}

/* Pre-footer kontaktní sekce s lead formulářem (inspirace: kicker + gradient titulek + specialista vlevo, formulář vpravo) */
function preCta(lang) {
  const t = T[lang];
  return `    <section class="fz-precta" id="kontakt">
      <div class="fz-precta__inner">
        <div>
          <span class="fz-kicker">${t.pcKicker}</span>
          <h2>${t.pcTitle}</h2>
          <p class="fz-precta__text">${t.pcText}</p>
          <div class="fz-precta__spec">
            <img src="/assets/ales_mraz.webp" alt="${t.specName}, ${t.specRole.split(' — ')[0]}" width="56" height="56">
            <div>
              <div class="fz-precta__spec-label">${t.pcSpecLabel}</div>
              <div class="fz-precta__spec-name">${t.specName}</div>
              <a href="tel:+420771528747">${PHONE_ICON.replace('class="icon"', 'class="icon" style="width:14px;height:14px;vertical-align:-2px;margin-right:4px;"')}771 528 747</a>
            </div>
          </div>
        </div>
        <div class="fz-precta__form-card">
          <h3 class="fz-precta__form-title">${t.formTitle}</h3>
          <form class="footer__form" id="leadForm" action="/api/lead" method="post" novalidate>
            <input type="hidden" name="calcContext" id="leadCalcContext" value="">
            <div class="hp-field" aria-hidden="true">
              <label for="lead-company">${t.fHp}</label>
              <input type="text" id="lead-company" name="company" tabindex="-1" autocomplete="off">
            </div>
            <div class="footer__field">
              <label for="lead-name">${t.fName}</label>
              <input type="text" id="lead-name" name="name" autocomplete="name" placeholder="${t.fNamePh}" required>
              <span class="form-error" aria-live="polite"></span>
            </div>
            <div class="footer__form-row">
              <div class="footer__field">
                <label for="lead-phone">${t.fPhone}</label>
                <input type="tel" id="lead-phone" name="phone" inputmode="tel" autocomplete="tel" placeholder="777 123 456">
                <span class="form-error" aria-live="polite"></span>
              </div>
              <div class="footer__field">
                <label for="lead-email">${t.fEmail}</label>
                <input type="email" id="lead-email" name="email" inputmode="email" autocomplete="email" placeholder="${t.fEmailPh}">
                <span class="form-error" aria-live="polite"></span>
              </div>
            </div>
            <div class="footer__field">
              <label for="lead-message">${t.fMsg}</label>
              <textarea id="lead-message" name="message" rows="3" placeholder="${t.fMsgPh}"></textarea>
            </div>
            <div class="footer__gdpr">
              <input type="checkbox" id="lead-gdpr" name="gdpr" value="1" required>
              <label for="lead-gdpr">${t.fGdprA}<a href="${t.fGdprHref}" style="text-decoration:underline;">${t.fGdprLink}</a> *</label>
              <span class="form-error" aria-live="polite"></span>
            </div>
            <div class="form-status" id="leadStatus" role="status" aria-live="polite"></div>
            <button type="submit" class="footer__submit">${t.submit}</button>
          </form>
        </div>
      </div>
    </section>`;
}

/* Čistá světlá patička (logo + popis + CFG badge | navigace | kontakt | skupina) */
function footer(lang) {
  const t = T[lang];
  const navLinks = t.footNav.map(([href, label]) => `              <li><a href="${href}">${label}</a></li>`).join('\n');
  return `    <footer class="fz-footer">
      <div class="fz-footer__inner">
        <div class="fz-footer__brand">
          <img src="/assets/logo-fz.png" alt="Firemní záložna" width="150" height="50">
          <p>${t.footAbout}</p>
          <a href="https://www.cfg.cz" class="footer__cfg-badge" target="_blank" rel="noopener">
            <span>${t.member}</span>
            <img src="/assets/logo-cfg.svg" alt="CFG" width="44" height="16">
          </a>
        </div>
        <div class="footer__nav-group">
          <div class="footer__nav-heading">${t.navHead}</div>
          <ul class="footer__nav-list">
${navLinks}
          </ul>
        </div>
        <div class="footer__nav-group">
          <div class="footer__nav-heading">${t.contactHead}</div>
          <div class="footer__addr-block">
            <div class="footer__addr-name">Firemní záložna</div>
            <p><a href="tel:+420771528747"><strong>771 528 747</strong></a><br>${t.hours}</p>
            <address>Vinohradská 2828/151<br>130 00 Praha 3</address>
          </div>
        </div>
        <div class="footer__nav-group">
          <div class="footer__nav-heading">${t.groupHead}</div>
          <ul class="footer__nav-list">
            <li><a href="https://www.cfg.cz" target="_blank" rel="noopener">cfg.cz</a></li>
            <li><a href="https://www.comfortmoney.cz" target="_blank" rel="noopener">comfortmoney.cz</a></li>
            <li><a href="https://www.cfgre.cz" target="_blank" rel="noopener">cfgre.cz</a></li>
            <li><a href="https://www.abpohledavky.cz" target="_blank" rel="noopener">abpohledavky.cz</a></li>
            <li><a href="https://www.jamesapp.cz" target="_blank" rel="noopener">jamesapp.cz</a></li>
            <li><a href="https://www.cfgtech.cz" target="_blank" rel="noopener">cfgtech.cz</a></li>
          </ul>
        </div>
      </div>
      <div class="fz-footer__bottom">
        <span>${t.copy} · ${t.legalOperator}</span>
        <div class="fz-footer__bottom-links">
          <a href="${t.privacyHref}">${t.legalPrivacy}</a>
          <a href="${t.cookiesHref}">${t.legalCookies}</a>
          <a href="#" data-cookie-settings>${t.legalCookieSettings}</a>
        </div>
      </div>
    </footer>`;
}

function cookieBarAndScripts(lang) {
  const t = T[lang];
  return `  <div class="fz-cookies" id="cookieBar" role="dialog" aria-modal="false" aria-labelledby="cookieTitle">
    <h2 id="cookieTitle">${t.ckTitle}</h2>
    <p>${t.ckText}</p>
    <div class="fz-cookies__cats">
      <label class="fz-cookies__cat"><input type="checkbox" checked disabled> ${t.ckNecessary}</label>
      <label class="fz-cookies__cat"><input type="checkbox" id="ckAnalytics"> ${t.ckAnalytics}</label>
      <label class="fz-cookies__cat"><input type="checkbox" id="ckMarketing"> ${t.ckMarketing}</label>
      <button class="btn btn--primary" data-consent="custom" style="align-self:flex-start;">${t.ckSave}</button>
    </div>
    <div class="fz-cookies__btns">
      <button class="btn btn--primary" data-consent="all">${t.ckAll}</button>
      <button class="btn btn--cookie-ghost" data-consent="none">${t.ckNone}</button>
      <button class="btn btn--cookie-ghost" data-consent="settings">${t.ckSettings}</button>
    </div>
  </div>

  <script src="/js/main.js" defer></script>
  <script src="/js/calc.js" defer></script>
  <script src="/js/form.js" defer></script>`;
}

/**
 * page({ lang, path, altPath, title, desc, kicker, h1, sub, extraHead, content, noForm })
 * path/altPath are site-absolute ('/cena/', '/en/pricing/').
 * h1 může obsahovat <em>…</em> pro gradientový akcent; noForm vynechá pre-footer formulář.
 */
function page(p) {
  const t = T[p.lang];
  const csPath = p.lang === 'cs' ? p.path : p.altPath;
  const enPath = p.lang === 'en' ? p.path : p.altPath;
  const h1Text = p.h1.replace(/<[^>]+>/g, '');
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.home, item: BASE + (p.lang === 'en' ? '/en/' : '/') },
      { '@type': 'ListItem', position: 2, name: h1Text, item: BASE + p.path },
    ],
  };
  const html = `<!DOCTYPE html>
<html lang="${p.lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <title>${p.title}</title>
  <meta name="description" content="${p.desc}">
  <link rel="canonical" href="${BASE}${p.path}">${EN_ENABLED ? `
  <link rel="alternate" hreflang="cs" href="${BASE}${csPath}">
  <link rel="alternate" hreflang="en" href="${BASE}${enPath}">
  <link rel="alternate" hreflang="x-default" href="${BASE}${csPath}">` : ''}
  <meta property="og:type" content="website">
  <meta property="og:title" content="${p.title}">
  <meta property="og:description" content="${p.desc}">
  <meta property="og:url" content="${BASE}${p.path}">
  <meta property="og:image" content="${BASE}/assets/logo-fz.svg">
  <meta property="og:locale" content="${t.ogLocale}">
  <meta name="twitter:card" content="summary">
  <link rel="icon" href="/assets/logo-fz.svg" type="image/svg+xml">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Red+Hat+Display:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/cfg-base.css">
  <link rel="stylesheet" href="/css/brand.css">
  <link rel="stylesheet" href="/css/styles.css">
  <script type="application/ld+json">${JSON.stringify(breadcrumbLd)}</script>${p.extraHead || ''}
</head>
<body>
  <a class="skip-link" href="#main">${t.skip}</a>

${nav(p.lang, p.altPath)}

  <main id="main">
    <section class="fz-pagehero">
      <div class="fz-pagehero__inner">
        <span class="fz-kicker">${p.kicker || h1Text}</span>
        <h1>${p.h1}</h1>
        <p class="fz-pagehero__sub">${p.sub}</p>
      </div>
    </section>

    <section class="fz-section">
      <div class="fz-section__inner">
${p.content}
      </div>
    </section>

${p.noForm ? '' : preCta(p.lang)}
${footer(p.lang)}
  </main>

${cookieBarAndScripts(p.lang)}
</body>
</html>
`;

  /* Interní odkazy a assety relativně — web musí fungovat i bez Express serveru
     (Live Server / file z kořene monorepa). action="/api/lead" zůstává absolutní. */
  const depth = p.path.split('/').filter(Boolean).length;
  const rel = '../'.repeat(depth);
  return html.replace(/(href|src)="\//g, `$1="${rel}`);
}

module.exports = { page, preCta, footer, T, CHECK_ICON, CHEVRON_ICON, PHONE_ICON, BASE };
