/* Generátor CZ podstránek Firemní záložna */
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

/* ---------- /jak-to-funguje/ ---------- */
pages.push({
  lang: 'cs', path: '/jak-to-funguje/', altPath: '/en/how-it-works/',
  title: 'Podnikatelská půjčka do 48 hodin — Firemní záložna',
  desc: 'Podnikatelská půjčka pro OSVČ i firmy. Od prvního zavolání k penězům na účtu do 48 hodin, ve třech krocích, s minimem dokumentů a bez bankovní byrokracie.',
  kicker: 'Podnikatelská půjčka',
  h1: 'Podnikatelská půjčka <em>krok za krokem</em>',
  sub: 'Tři kroky, minimum dokumentů a jasná časová osa. Od prvního kontaktu k penězům na účtu to trvá zpravidla dva pracovní dny.',
  heroForm: true,
  content: `        <span class="fz-kicker">Jak to probíhá</span>
        <h2 class="fz-h2">Tři kroky k penězům</h2>
        <div class="fz-stepper reveal">
          <div class="fz-stepper__step">
            <span class="fz-stepper__num">1</span>
            <h3>Ozvěte se</h3>
            <p>Vyplníte krátký formulář, nebo zavoláte na 771 528 747. Chceme jen jméno a kontakt, žádné rodné číslo ani výkazy.</p>
          </div>
          <div class="fz-stepper__step">
            <span class="fz-stepper__num">2</span>
            <h3>Připravíme nabídku</h3>
            <p>Specialista posoudí váš majetek a do 24 hodin máte na stole nezávaznou nabídku se všemi čísly.</p>
          </div>
          <div class="fz-stepper__step">
            <span class="fz-stepper__num">3</span>
            <h3>Peníze jsou u vás</h3>
            <p>Smlouvu přivezeme k podpisu k vám domů či do firmy. Po podpisu máte peníze na účtu do 48 hodin.</p>
          </div>
        </div>

        <div class="fz-prose" style="margin-top:64px;">
          <h2>Co najdete v nezávazné nabídce</h2>
          <ul>
            <li>výši úvěru a úrokovou sazbu (od 9,9 % p.a.),</li>
            <li>orientační měsíční splátku a délku splácení,</li>
            <li>všechny poplatky a RPSN, žádné položky schované v drobném písmu,</li>
            <li>podmínky předčasného splacení.</li>
          </ul>
          <p>Nabídka vás k ničemu nezavazuje. Když se rozhodnete jinak, nic se neděje.</p>

          <h2>Jaké dokumenty budete potřebovat</h2>
          <ul>
            <li><strong>Občanský průkaz</strong> pro ověření totožnosti.</li>
            <li><strong>IČO</strong>, úvěr poskytujeme podnikatelům a firmám na podnikatelské účely.</li>
            <li><strong>Doklady k zástavě</strong>: u nemovitosti stačí adresa či list vlastnictví (zbytek si dohledáme v katastru), u vozidel a strojů technický průkaz nebo doklad o vlastnictví.</li>
          </ul>
          <p>Výkazy, daňová přiznání ani reporty po vás v prvním kroku nechceme. Úvěr je zajištěn majetkem, proto se obejdeme bez bankovního papírování.</p>

          <h2>Co znamená „smlouvu přivezeme"?</h2>
          <p>Přesně to, co říkáme. Žádný anonymní online proces ani fronta na pobočce. <strong>Specialista za vámi přijede osobně</strong>, smlouvu s vámi projde lidskou řečí, zodpoví všechny otázky a podepíšete na místě. Vy se můžete dál věnovat podnikání.</p>
        </div>`,
});

/* ---------- /pro-koho/ ---------- */
pages.push({
  lang: 'cs', path: '/pro-koho/', altPath: '/en/who-its-for/',
  title: 'Pro koho — Firemní záložna',
  desc: 'Podnikatelské úvěry pro OSVČ, malé firmy i začínající podnikatele. Překlenutí cashflow, nákup vybavení, mzdy, nájem i rozjezd podnikání.',
  kicker: 'Pro koho',
  h1: 'Komu pomáháme <em>nejčastěji</em>',
  sub: 'OSVČ a malé firmy, kterým banka nevyšla vstříc — nebo jim to trvá moc dlouho. Posuzujeme po lidsku: vaši situaci a majetek, ne jen čísla ve scoringu.',
  content: `        <div class="fz-twocol">
          <div>
            <span class="fz-kicker">Pro koho</span>
            <h2 class="fz-h2">Kdo u nás půjčuje</h2>
            <div class="fz-icards">
              <div class="fz-icard reveal">
                <div class="fz-icard__icon"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
                <div>
                  <h3>OSVČ a živnostníci</h3>
                  <p>Řemeslníci, dopravci, služby. Čekáte na proplacení zakázky, ale materiál a lidi musíte zaplatit teď.</p>
                </div>
              </div>
              <div class="fz-icard reveal">
                <div class="fz-icard__icon"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div>
                <div>
                  <h3>Malé firmy (s.r.o.)</h3>
                  <p>Výroba, e-shop, služby. Stroj nebo zásoby před sezónou nepočkají na bankovní kolečko.</p>
                </div>
              </div>
              <div class="fz-icard reveal">
                <div class="fz-icard__icon"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 7l-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/></svg></div>
                <div>
                  <h3>Začínající podnikatelé</h3>
                  <p>Bez bonitní historie, ale s majetkem. Banka vás nevyslechne, my ano.</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <span class="fz-kicker">Co lze financovat</span>
            <h2 class="fz-h2">Na co peníze použijete</h2>
            <div class="fz-chipgrid">
              <div class="fz-icard reveal">
                <div class="fz-icard__icon"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg></div>
                <h3>Překlenutí cashflow</h3>
              </div>
              <div class="fz-icard reveal">
                <div class="fz-icard__icon"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.3 7 12 12l8.7-5"/><path d="M12 22V12"/></svg></div>
                <h3>Nákup vybavení a materiálu</h3>
              </div>
              <div class="fz-icard reveal">
                <div class="fz-icard__icon"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
                <h3>Mzdy a nájem</h3>
              </div>
              <div class="fz-icard reveal">
                <div class="fz-icard__icon"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 15l2 2 4-4"/></svg></div>
                <h3>Realizace zakázek</h3>
              </div>
              <div class="fz-icard reveal">
                <div class="fz-icard__icon"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg></div>
                <h3>Rozjezd podnikání</h3>
              </div>
              <div class="fz-icard reveal">
                <div class="fz-icard__icon"><svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg></div>
                <h3>Cokoliv pro podnikání</h3>
              </div>
            </div>
          </div>
        </div>

        <h2 class="fz-h2" style="text-align:center;max-width:none;margin-top:96px;">Typické situace</h2>
        <div class="fz-cards" style="margin-top:40px;">
          <div class="fz-card reveal">
            <h3>Řemeslník v tlaku cashflow</h3>
            <p class="fz-quote">„Čekám na proplacení velké zakázky, ale materiál a lidi musím zaplatit teď."</p>
            <p>Faktura se splatností 60 dní nezaplatí dodávku materiálu dnes. Posoudíme vaši dodávku, dílnu nebo byt a do 48 hodin máte peníze na překlenutí. Až zakázku proplatí, můžete splatit předčasně.</p>
          </div>
          <div class="fz-card reveal">
            <h3>Majitel malé firmy v růstu</h3>
            <p class="fz-quote">„Potřebuju koupit stroj a naskladnit před sezónou. Banka mě posuzuje jako čísla."</p>
            <p>Když se objeví příležitost, rozhoduje rychlost. Do zástavy vezmeme provozovnu, firemní vozy i stroje — klidně v kombinaci. Zajímá nás váš byznys, ne čistota výkazů.</p>
          </div>
          <div class="fz-card reveal">
            <h3>Rozjíždějící podnikatel</h3>
            <p class="fz-quote">„Banka mě bez historie ani nevyslechne."</p>
            <p>Bonitní historie ještě nestihla vzniknout? Pokud máte nemovitost — třeba i spoluvlastněnou — umíme dát šanci, kterou vám banka nedá. Řekneme na rovinu, co je možné.</p>
          </div>
        </div>

        <p style="margin-top:40px;font-size:14px;color:var(--text-muted);"><strong>Důležité:</strong> Úvěr je určen výhradně pro podnikatele a firmy na podnikatelské účely. Nejsme poskytovatelem spotřebitelských úvěrů.</p>`,
});

/* ---------- /zajisteni/ ---------- */
pages.push({
  lang: 'cs', path: '/zajisteni/', altPath: '/en/collateral/',
  title: 'Zajištění úvěru — nemovitost i movitý majetek — Firemní záložna',
  desc: 'Do zástavy vezmeme nemovitost, nebo kombinaci nemovitého a movitého majetku — auta, stroje, technologie. Flexibilní zajištění, které banka nenabídne.',
  kicker: 'Zajištění',
  h1: 'Co lze dát <em>do zástavy</em>',
  sub: 'Nemovitost — nebo kombinace nemovitého a movitého majetku. Auta, stroje a technologie do zástavy běžná konkurence nevezme. My ano.',
  content: `        <div class="fz-prose">
          <h2>Nemovitý majetek</h2>
          <ul class="fz-checklist" style="margin-bottom:16px;">
            ${check('<strong>Byt nebo dům</strong> — vlastní i spoluvlastněný')}
            ${check('<strong>Pozemek</strong> — stavební i jiný')}
            ${check('<strong>Komerční nemovitost</strong> — provozovna, dílna, sklad, kancelář')}
            ${check('<strong>Nemovitost jiné osoby</strong> — se souhlasem vlastníka (např. rodinného příslušníka)')}
          </ul>

          <h2>Movitý majetek — naše velká výhoda</h2>
          <p>Tam, kde hodnota nemovitosti nestačí na požadovanou výši úvěru, umíme zástavu <strong>doplnit movitým majetkem</strong>:</p>
          <ul class="fz-checklist" style="margin-bottom:16px;">
            ${check('<strong>Vozidla</strong> — osobní i užitková auta, dodávky, nákladní vozy')}
            ${check('<strong>Stroje</strong> — výrobní a stavební stroje, obráběcí centra')}
            ${check('<strong>Technologie</strong> — vybavení provozu, výrobní linky')}
          </ul>
          <p>Kombinace nemovitého a movitého majetku znamená, že dosáhnete na vyšší úvěr, než by vám dala samotná nemovitost — a než vám nabídne konkurence, která movitý majetek nebere vůbec.</p>

          <h2>Jak zajištění funguje v praxi</h2>
          <h3>Ocenění</h3>
          <p>Specialista hodnotu majetku posoudí rychle a bez zbytečné byrokracie — u nemovitosti vycházíme z katastru a tržního srovnání, u strojů a vozidel z dokladů a stavu. Žádné týdny čekání na znalecký posudek tam, kde to není nutné.</p>
          <h3>Majetek dál používáte</h3>
          <p>Zástava neznamená, že o majetek přicházíte nebo ho nemůžete používat. Dodávka dál jezdí, stroj dál vyrábí, v bytě dál bydlíte. Zástavní právo slouží jen jako jistota po dobu splácení — po splacení úvěru ho vymažeme.</p>
          <h3>Co to znamená pro výši úvěru</h3>
          <p>Výše úvěru se odvíjí od hodnoty zajištění. Orientačně platí: čím hodnotnější a likvidnější zástava, tím vyšší částka a lepší podmínky. Konkrétní poměr stanovíme při posouzení — na rovinu a předem.</p>
        </div>`,
});

/* ---------- /caste-dotazy/ ---------- */
const FAQ_ITEMS = [
  ['Jak rychle dostanu peníze?',
   'Nezávaznou nabídku připravíme do 24 hodin od prvního kontaktu. Po podpisu smlouvy — kterou vám přivezeme — máte peníze na účtu zpravidla do 48 hodin.'],
  ['Co všechno mohu dát do zástavy?',
   'Nemovitost (byt, dům, pozemek i komerční objekt), nebo kombinaci nemovitého a movitého majetku — auta, stroje, technologie. Flexibilní zajištění je naše hlavní výhoda. Podrobnosti najdete na stránce <a href="/zajisteni/">Zajištění</a>.'],
  ['Co když mě odmítla banka?',
   'Posuzujeme každou žádost individuálně — zajímá nás vaše podnikání a majetek, ne jen scoring a historie. Odmítnutí bankou pro nás není překážka.'],
  ['Musím dokládat příjmy nebo výkazy?',
   'Jen minimum. Úvěr je zajištěn majetkem, proto nepotřebujeme detailní výkazy ani dlouhou bonitní historii. Co přesně budeme potřebovat, vám řekne specialista hned v prvním hovoru.'],
  ['Kolik mě úvěr bude stát / jaká je RPSN?',
   'Úrok začíná na 9,9 % p.a. Konkrétní sazba a poplatky závisí na posouzení a zajištění. Vše dostanete předem v nezávazné nabídce včetně RPSN.'],
  ['Mohu úvěr splatit předčasně? Jsou s tím spojené poplatky?',
   'Ano, předčasné splacení je možné. Podmínky sjednáme přímo ve smlouvě a specialista vám je vysvětlí před podpisem — žádná drobná písmenka.'],
  ['Jakou výši úvěru mohu získat?',
   'Standardně od 50 000 Kč do 1 000 000 Kč, po individuálním posouzení až 5 000 000 Kč. Výše se odvíjí od hodnoty zajištění.'],
  ['Mohu ručit nemovitostí jiné osoby?',
   'Ano — se souhlasem vlastníka. Typicky jde o nemovitost rodinného příslušníka. Specialista s vámi projde, co je k tomu potřeba.'],
  ['Musím být podnikatel?',
   'Ano. Úvěry Firemní záložny jsou určeny výhradně OSVČ a firmám na podnikatelské účely. Spotřebitelské úvěry neposkytujeme.'],
  ['Co když mám záznam v registru?',
   'Záznam v registru není automatická stopka. Posuzujeme individuálně celou situaci — majetek, podnikání i důvod záznamu. Ozvěte se a probereme to na rovinu.'],
  ['Jak probíhá podpis smlouvy?',
   'Osobně — specialista smlouvu přiveze k vám domů nebo do firmy, projde ji s vámi bod po bodu a podepíšete na místě. Žádný anonymní online proces.'],
];

pages.push({
  lang: 'cs', path: '/caste-dotazy/', altPath: '/en/faq/',
  title: 'Časté dotazy — Firemní záložna',
  desc: 'Odpovědi na nejčastější otázky k podnikatelskému úvěru: rychlost, zástava, cena a RPSN, předčasné splacení, registry i odmítnutí bankou.',
  kicker: 'Časté dotazy',
  h1: 'Na co se ptáte <em>nejčastěji</em>',
  sub: 'Na rovinu a bez drobného písma. Když odpověď nenajdete, zavolejte na 771 528 747 — Aleš vám ji dá osobně.',
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

/* ---------- /o-nas/ ---------- */
pages.push({
  lang: 'cs', path: '/o-nas/', altPath: '/en/about/',
  title: 'O nás — Firemní záložna',
  desc: 'Přes 9 let na trhu s úvěry a investicemi a více než 265 mil. Kč půjčeno podnikatelům. Firemní záložna je značka investiční skupiny CFG.',
  kicker: 'O nás',
  h1: 'S námi to <em>má smysl</em>',
  sub: 'Budujeme pevné vztahy s podnikateli, kterým banky nevěří, a pro každou situaci hledáme řešení, které dává smysl.',
  content: `        <div class="fz-prose">
          <h2>Kdo jsme</h2>
          <p>Nejsme banka a nechceme jí být. Jsme podnikatelé, kteří financují jiné podnikatele, a budujeme pevné vztahy s lidmi, kterým banky nevěří. Víme, že zakázka nepočká na bankovní kolečko a že nejcennější, co podnikatel má, je čas. Proto děláme věci jinak: <strong>nabídka do 24 hodin, peníze do 48 hodin a smlouva dovezená k podpisu.</strong></p>

          <h2>Přes 9 let zkušeností</h2>
          <p>Na trhu s úvěry a investicemi působíme <strong>více než 9 let</strong> a za tu dobu jsme podnikatelům půjčili <strong>přes 265 milionů Kč</strong>. Podnikatelské úvěry poskytujeme od 50 000 do 1 000 000 Kč, po individuálním posouzení až do 5 milionů Kč.</p>

          <h2>Naše hodnoty</h2>
          <p>Jednáme férově a bez skrytých podmínek, řídíme se etickým kodexem a stavíme na čtyřech hodnotách:</p>
          <ul>
            <li><strong>Profesionalita</strong>: víme, co děláme, a za výsledkem si stojíme.</li>
            <li><strong>Bezpečí</strong>: vaše data i váš majetek jsou u nás v bezpečí.</li>
            <li><strong>Lidský přístup</strong>: jednáme s vámi jako s partnerem, ne jako s číslem.</li>
            <li><strong>Transparentnost</strong>: podmínky i poplatky znáte předem, žádné drobné písmo.</li>
          </ul>

          <h2>Kdo vás povede</h2>
          <p>U nás nemluvíte s call centrem. Za firmou stojí <strong>Ing. Petr Cimala</strong>, jednatel, a o vaši poptávku se osobně postará <strong>Aleš Mráz</strong>, úvěrový specialista, který se vám ozve, posoudí majetek, připraví nabídku a přiveze smlouvu k podpisu. Jedno číslo: <a href="tel:+420771528747">771 528 747</a>.</p>

          <h2>Zázemí skupiny CFG</h2>
          <p>Za Firemní záložnou stojí česká investiční skupina <a href="https://www.cfg.cz" target="_blank" rel="noopener">CFG</a>, která se dlouhodobě věnuje financování, pohledávkám a nemovitostem. Pro vás to znamená stabilitu a jistotu, že jednáte s partnerem se silným zázemím.</p>
        </div>`,
});

/* ---------- /kontakt/ ---------- */
pages.push({
  lang: 'cs', path: '/kontakt/', altPath: '/en/contact/',
  title: 'Kontakt — Firemní záložna',
  desc: 'Zavolejte na 771 528 747 (Po–Pá 9–17), napište, nebo se zastavte: Vinohradská 2828/151, Praha 3. Úvěrový specialista Aleš Mráz.',
  kicker: 'Kontakt',
  h1: 'Ozvěte se — <em>spolu to dáme</em>',
  sub: 'Zavolejte, napište, nebo vyplňte formulář níže — Aleš se vám ozve do 24 hodin v pracovní dny.',
  content: `        <div class="fz-contact-grid">
          <div class="fz-contact-card">
            <h2>Spojte se s námi</h2>
            <div class="fz-contact-row">
              <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span><a href="tel:+420771528747">771 528 747</a><br><span style="color:var(--text-muted);font-size:14px;">Po–Pá 9–17</span></span>
            </div>
            <div class="fz-contact-row">
              <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>
              <span><a href="mailto:info@firemnizalozna.cz">info@firemnizalozna.cz</a></span>
            </div>
            <div class="fz-contact-row">
              <svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Vinohradská 2828/151<br>130 00 Praha 3</span>
            </div>
            <div class="fz-contact-row" style="margin-top:12px;border-top:1px solid var(--divider-dark);padding-top:20px;">
              <img src="/assets/ales_mraz.webp" alt="Aleš Mráz, úvěrový specialista" width="56" height="56" style="border-radius:50%;object-fit:cover;background:#ddd;">
              <span><strong>Aleš Mráz</strong><br><span style="color:var(--text-muted);font-size:14px;">úvěrový specialista</span></span>
            </div>
          </div>
          <iframe class="fz-map" src="https://www.openstreetmap.org/export/embed.html?bbox=14.4554%2C50.0726%2C14.4754%2C50.0826&amp;layer=mapnik&amp;marker=50.0776%2C14.4654" title="Mapa — Vinohradská 2828/151, Praha 3" loading="lazy"></iframe>
        </div>`,
});

/* ---------- /ochrana-osobnich-udaju/ ---------- */
pages.push({
  lang: 'cs', path: '/ochrana-osobnich-udaju/', altPath: '/en/privacy/',
  title: 'Ochrana osobních údajů — Firemní záložna',
  desc: 'Informace o zpracování osobních údajů na webu firemnizalozna.cz — správce, účely, právní tituly, doba uchování a vaše práva.',
  kicker: 'Právní informace',
  h1: 'Ochrana osobních údajů',
  sub: 'Jak nakládáme s vašimi osobními údaji. Návrh textu — před spuštěním projde právní revizí dle skupinového standardu.',
  noForm: true,
  content: `        <div class="fz-prose">
          <p><em style="color:var(--fz-accent-dark);">[NÁVRH K PRÁVNÍ REVIZI — doplnit dle skupinového vzoru CFG]</em></p>
          <h2>Správce osobních údajů</h2>
          <p><span style="color:var(--fz-accent-dark);">[DOPLNIT: název provozovatele, IČO, sídlo]</span>, kontakt: <a href="mailto:info@firemnizalozna.cz">info@firemnizalozna.cz</a>, tel. 771 528 747.</p>
          <h2>Jaké údaje zpracováváme a proč</h2>
          <ul>
            <li><strong>Kontaktní formulář (poptávka úvěru):</strong> jméno, telefon, e-mail, obsah zprávy a údaje z kalkulačky (výše, délka, orientační splátka). Účel: vyřízení vaší poptávky a příprava nezávazné nabídky. Právní titul: provedení opatření před uzavřením smlouvy (čl. 6 odst. 1 písm. b) GDPR) a souhlas.</li>
            <li><strong>Technické údaje webu:</strong> v rozsahu uděleného souhlasu s cookies (viz <a href="/cookies/">Zásady cookies</a>).</li>
          </ul>
          <h2>Doba uchování</h2>
          <p>Údaje z poptávky uchováváme po dobu jednání o uzavření smlouvy, nejdéle <span style="color:var(--fz-accent-dark);">[DOPLNIT: doba dle skupinového standardu]</span>. Poté je smažeme.</p>
          <h2>Komu údaje předáváme</h2>
          <p>Údaje zpracováváme v rámci skupiny CFG a předáváme pouze zpracovatelům nezbytným pro vyřízení poptávky (IT infrastruktura, doručování zpráv). Údaje nepředáváme do třetích zemí mimo EU/EHP.</p>
          <h2>Vaše práva</h2>
          <ul>
            <li>právo na přístup k údajům a jejich kopii,</li>
            <li>právo na opravu a výmaz,</li>
            <li>právo vznést námitku a právo na omezení zpracování,</li>
            <li>právo na přenositelnost,</li>
            <li>právo odvolat souhlas,</li>
            <li>právo podat stížnost u Úřadu pro ochranu osobních údajů (uoou.gov.cz).</li>
          </ul>
          <p>Pro uplatnění práv nás kontaktujte na <a href="mailto:info@firemnizalozna.cz">info@firemnizalozna.cz</a>.</p>
        </div>`,
});

/* ---------- /cookies/ ---------- */
pages.push({
  lang: 'cs', path: '/cookies/', altPath: '/en/cookies/',
  title: 'Zásady cookies — Firemní záložna',
  desc: 'Jaké cookies používá web firemnizalozna.cz, k čemu slouží a jak můžete spravovat svůj souhlas.',
  kicker: 'Právní informace',
  h1: 'Zásady cookies',
  sub: 'Jaké cookies používáme, k čemu slouží a jak změníte své nastavení.',
  noForm: true,
  content: `        <div class="fz-prose">
          <p><em style="color:var(--fz-accent-dark);">[NÁVRH K PRÁVNÍ REVIZI — doplnit dle skupinového vzoru CFG]</em></p>
          <h2>Kategorie cookies</h2>
          <ul>
            <li><strong>Nezbytné</strong> — zajišťují základní chod webu a uložení vašeho souhlasu. Nelze je vypnout.</li>
            <li><strong>Analytické</strong> — pomáhají nám pochopit, jak web používáte (návštěvnost, použití kalkulačky). Načítají se až po vašem souhlasu.</li>
            <li><strong>Marketingové</strong> — slouží k měření kampaní. Načítají se až po vašem souhlasu.</li>
          </ul>
          <h2>Správa souhlasu</h2>
          <p>Souhlas můžete kdykoli změnit nebo odvolat:</p>
          <p><button class="btn btn--primary" data-cookie-settings type="button">Otevřít nastavení cookies</button></p>
          <h2>Jak dlouho souhlas platí</h2>
          <p>Vaše volba se ukládá v prohlížeči. Analytické a marketingové nástroje se bez souhlasu nenačítají.</p>
        </div>`,
});

/* ---------- /dekujeme/ ---------- */
pages.push({
  lang: 'cs', path: '/dekujeme/', altPath: '/en/thank-you/',
  title: 'Děkujeme — Firemní záložna',
  desc: 'Vaši poptávku jsme přijali. Úvěrový specialista se vám ozve do 24 hodin v pracovní dny.',
  kicker: 'Spolu to dáme',
  h1: 'Děkujeme, <em>máme to!</em>',
  sub: 'Vaše poptávka dorazila. Aleš Mráz, váš úvěrový specialista, se vám ozve do 24 hodin v pracovní dny — připravte si prosím představu, co chcete financovat a jaký majetek můžete nabídnout do zástavy.',
  noForm: true,
  content: `        <div class="fz-prose">
          <h2>Co bude dál</h2>
          <div class="fz-timeline">
            <div class="fz-timeline__item">
              <span class="fz-timeline__when">Do 24 hodin</span>
              <h3>Zavolá vám Aleš</h3>
              <p>Probere s vámi situaci, co potřebujete financovat a jaký máte majetek.</p>
            </div>
            <div class="fz-timeline__item">
              <span class="fz-timeline__when">Hned poté</span>
              <h3>Dostanete nezávaznou nabídku</h3>
              <p>Konkrétní čísla — výše, splátka, poplatky, RPSN. Nic vás k ničemu nezavazuje.</p>
            </div>
          </div>
          <p>Spěchá to? Zavolejte rovnou: <a href="tel:+420771528747"><strong>771 528 747</strong></a> (Po–Pá 9–17).</p>
          <p><a href="/" class="btn btn--ghost-dark">Zpět na úvodní stránku</a></p>
        </div>`,
});

/* ---------- write ---------- */
for (const p of pages) {
  const dir = path.join(OUT, p.path);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), page(p));
  console.log('written', p.path);
}
