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
  title: 'Informace o zpracování osobních údajů — Firemní záložna',
  desc: 'Informace o zpracování osobních údajů společností Firemní záložna a.s.: správce, účely, právní tituly, příjemci, doba uchování a vaše práva dle GDPR.',
  kicker: 'Právní informace',
  h1: 'Informace o zpracování osobních údajů',
  sub: 'Vaše práva a povinnosti související se zpracováním osobních údajů společností Firemní záložna a.s.',
  noForm: true,
  content: `        <div class="fz-prose">
          <h2>Úvodem</h2>
          <p>Níže naleznete informace o Vašich právech a povinnostech souvisejících se zpracováním Vašich osobních údajů společností Firemní záložna a.s.</p>
          <p>Vzhledem k tomu, že při zpracování osobních údajů dodržujeme všechny relevantní právní předpisy, především obecné nařízení EU č. 2016/679, o ochraně osobních údajů (dále jen „GDPR") a zákon č. 110/2019 Sb., o zpracování osobních údajů (dále jen „zákon o zpracování osobních údajů"), plníme tímto svou informační povinnost předložit Vám přehledné a srozumitelné informace o tom:</p>
          <ul>
            <li>kdo je správce a na koho se můžete obrátit, pokud máte dotaz týkající se zpracování osobních údajů;</li>
            <li>jaké osobní údaje shromažďujeme;</li>
            <li>z jakých zdrojů osobní údaje získáváme;</li>
            <li>zda jste povinni nám osobní údaje poskytnout;</li>
            <li>pro jaké účely zpracováváme osobní údaje bez Vašeho souhlasu;</li>
            <li>pro jaké účely zpracováváme osobní údaje pouze s Vaším souhlasem;</li>
            <li>jakým způsobem osobní údaje zpracováváme a jak je chráníme;</li>
            <li>komu osobní údaje předáváme;</li>
            <li>jakou dobu osobní údaje uchováváme; a</li>
            <li>jaká máte práva v souvislosti se zpracováním osobních údajů.</li>
          </ul>

          <h2>Na koho se můžete obrátit, pokud máte dotaz týkající se zpracování osobních údajů</h2>
          <p>Osobním údajem je každá informace vztahující se k identifikované či identifikovatelné fyzické osobě (subjektu údajů).</p>
          <p>Subjektem údajů je fyzická osoba, jíž se osobní údaje týkají, jedná se například o osobu, která požádá správce o poskytnutí služby nebo která je nebo bude ve smluvním či jiném právním vztahu ke správci (dále jen „Vy"). Subjektem údajů nejsou právnické osoby.</p>
          <p>Zpracováním jsou jakékoliv operace nebo soubor operací, které jsou prováděny s osobními údaji nebo soubory osobních údajů pomocí či bez pomoci automatizovaných postupů, jako je shromáždění, zaznamenání, uspořádání, strukturování, uložení, přizpůsobení nebo pozměnění, vyhledání, nahlédnutí, použití, zpřístupnění přenosem, šíření nebo jakékoli jiné zpřístupnění, seřazení či zkombinování, omezení, výmaz nebo zničení.</p>
          <p>Správcem je ten, kdo určuje účel a prostředky zpracování osobních údajů, provádí zpracování a odpovídá za něj. Správcem Vašich osobních údajů jsme my, společnost Firemní záložna a.s., sídlem Vinohradská 2828/151, Praha 3, 130 00, IČO: 055 62 597, zapsaná v obchodním rejstříku vedeném Městským soudem v Praze, pod sp. zn. B 22004 (dále jen „Správce" nebo „my"). Náš e-mail je <a href="mailto:info@firemnizalozna.cz">info@firemnizalozna.cz</a> a tel. číslo je +420 779 998 121.</p>
          <p>Za účelem ochrany osobních údajů jsme ustanovili pověřence pro ochranu osobních údajů, který mimo jiné dbá na to, aby veškeré zpracování osobních údajů u Správce probíhalo řádně a v souladu s právní úpravou. E-mail pověřence je <a href="mailto:dpo@firemnizalozna.cz">dpo@firemnizalozna.cz</a> a tel. číslo pověřence je +420 226 296 052.</p>
          <p>Zpracovatelem je ten, koho si Správce najímá, aby pro něj prováděl s osobními údaji zpracovatelské operace (například zprostředkovatel nebo společnost zpracovávající účetnictví).</p>

          <h2>Jaké osobní údaje shromažďujeme</h2>
          <p>Zpracováváme pouze osobní údaje, které nám umožní poskytovat řádně naše služby, dodržovat právní povinnosti a chránit naše oprávněné zájmy. Údaje shromažďujeme především o našich klientech, včetně potenciálních klientů, kteří se o naše služby a produkty zajímají nebo které jsme s naší nabídkou oslovili. Dále zpracováváme dle konkrétní situace údaje o dalších osobách, například o zástavcích, ručitelích, zástupcích klienta na základě plné moci nebo zákona, spoludlužnících, manželovi klienta atp.</p>
          <p>V případě, že projevíte zájem o produkty a služby, uchováváme Vámi poskytnuté osobní údaje, které nám umožní Vás kontaktovat, tedy jméno, příjmení, telefon a e-mailovou adresu. Tyto osobní údaje zpracováváme proto, abychom Vás mohli kontaktovat, identifikovat a pokračovat v postupu při uzavírání smlouvy.</p>
          <p>Za účelem poskytování našich služeb a pro uzavření nezbytných smluv k těmto službám (zejména poskytování podnikatelských úvěrů) shromažďujeme a zpracováváme kromě výše uvedených osobních údajů Vaše další identifikační údaje, kterými jsou titul, příp. datum narození (pokud nebylo rodné číslo přiděleno), místo narození, pohlaví, adresu trvalého, případně jiného pobytu, státní občanství, IČO, číslo Vašeho bankovního účtu, druh, číslo a dobu platnosti průkazu totožnosti a orgán, který průkaz vydal.</p>
          <p>Abychom Vám mohli v souladu s právními předpisy poskytnout úvěr, zpracováváme dále soubor Vámi poskytnutých informací týkajících se Vaší bonity, důvěryhodnosti a platební morálky a informace získané od zprostředkovatelů, obchodních partnerů, členů skupiny Comfort Finance Group CFG, popř. z registrů klientských informací.</p>
          <p>Pro plnění povinností dle zákona č. 253/2008 Sb., o některých opatřeních proti legalizaci výnosů z trestné činnosti a financování terorismu, zpracováváme Vaše rodné číslo. S Vaším souhlasem zpracováváme Vaše rodné číslo také za účelem jednoznačné identifikace v informačních systémech skupiny Comfort Finance Group CFG a v případě poskytování úvěru pro účely ověření Vaší bonity, důvěryhodnosti a platební morálky v registrech klientských informací.</p>
          <p>Vaše osobní údaje zpracováváme pouze v nezbytném rozsahu pro příslušný účel. Pokud jste nám k tomu udělili souhlas, využíváme výše uvedené osobní údaje i k dalším účelům (viz část Pro jaké účely zpracováváme osobní údaje pouze s Vaším souhlasem).</p>

          <h2>Z jakých zdrojů osobní údaje získáváme</h2>
          <p>Osobní údaje získáváme z několika zdrojů, a to vždy v souladu s právními předpisy na základě jednoho nebo více právních titulů.</p>
          <p>Základním zdrojem osobních údajů o Vás jste pro nás Vy sami. Osobní údaje nám sdělujete zejména prostřednictvím webového formuláře nebo při telefonickém hovoru v souvislosti s jednáním o uzavření smluvního či jiného právního vztahu.</p>
          <p>Dalším důležitým zdrojem, s nímž pracujeme, jsou tzv. veřejné zdroje, kdy se jedná o osobní údaje z veřejně přístupných rejstříků, seznamů a evidencí (obchodní rejstřík, živnostenský rejstřík, katastr nemovitostí, insolvenční rejstřík apod.) a z dalších veřejných zdrojů (včetně vybraných, pro řízení rizik relevantních informací, které o sobě zveřejníte nebo jsou Vámi zveřejněny na internetu a sociálních sítích).</p>
          <p>Jestliže k tomu od Vás máme souhlas, získáváme údaje dále též od zprostředkovatelů, obchodních partnerů či od členů skupiny Comfort Finance Group CFG, pokud jde o nabídku služeb a produktů členů skupiny.</p>
          <p>Vaše osobní údaje mohou dále též vznikat přímo i u nás, a to jak používáním našich služeb a produktů, tak naší interní činností (například rating klienta).</p>

          <h2>Jste povinni nám osobní údaje poskytnout?</h2>
          <p>Při uzavření a trvání smluvního vztahu jsme povinni zjišťovat a zpracovávat stanovené osobní údaje vyplývající z právních předpisů. K takovému zpracování není třeba Vašeho souhlasu a v případě, že nám právními předpisy požadované osobní údaje nesdělíte, nebude možné poskytnout naše produkty a služby. Obdobně se tak může stát v případě, že je poskytnutí údajů nezbytné k uzavření a plnění smlouvy s Vámi, plnění našich právních povinností nebo k ochraně našich oprávněných zájmů.</p>
          <p>V některých případech od Vás můžeme žádat udělení souhlasu se zpracováním osobních údajů k určitému účelu. Takový souhlas je vždy dobrovolný a pokud nám ho neposkytnete, nebude nijak omezen přístup k naší službě nebo produktu. Pokud souhlas udělíte, můžete ho kdykoliv odvolat.</p>

          <h2>Pro jaké účely zpracováváme osobní údaje bez Vašeho souhlasu</h2>
          <p>Zpracování osobních údajů bez Vašeho souhlasu je námi prováděno zejména pro tyto účely:</p>
          <ul>
            <li>plnění povinností vyplývajících z právních předpisů, přičemž se jedná především o:
              <ul>
                <li>provádění Vaší identifikace a plnění dalších povinností dle zákona č. 253/2008 Sb., o některých opatřeních proti legalizaci výnosů z trestné činnosti a financování terorismu;</li>
                <li>plnění povinností dle zákona č. 89/2012 Sb., občanský zákoník;</li>
                <li>plnění povinností dle zákona č. 563/1991 Sb., o účetnictví.</li>
              </ul>
            </li>
            <li>plnění smluvních povinností ze smlouvy uzavřené s Vámi, kdy tento účel zahrnuje i předávání Vašich osobních údajů třetím osobám, které využíváme pro plnění smluvních povinností, jejichž seznam je uveden v části Komu osobní údaje předáváme;</li>
            <li>za účelem ochrany našich práv a právem chráněných zájmů, například za účelem vymáhání pohledávek a uplatnění jiných nároků u soudů, přičemž tento účel zahrnuje i předání osobních údajů mezi společnostmi ve skupině Comfort Finance Group CFG pro posouzení možnosti získat požadovaný produkt a pro zajištění ochrany našich práv a právem chráněných zájmů;</li>
            <li>uchování a archivování údajů na základě a v souladu s právními předpisy.</li>
          </ul>
          <p>Při výkonu své činnosti jsme povinni postupovat obezřetně, s odbornou péčí a chránit zájmy nejen Vaše, ale i zájmy našeho vlastníka. V rámci plnění této povinnosti využíváme své příslušnosti ke skupině Comfort Finance Group CFG a spolupracujeme se společnostmi ve skupině, kde dochází k výměně informací týkajících se Vaší platební morálky, důvěryhodnosti a bonity. Na základě této spolupráce je tudíž možné lépe posoudit, zda je zvolený produkt pro Vás vhodný a odpovídá požadavkům obou smluvních stran.</p>

          <h2>Pro jaké účely zpracováváme osobní údaje pouze s Vaším souhlasem</h2>
          <p>Zpracování osobních údajů, které pro nás nevyplývá z právních předpisů a pro které nemáme právní titul, může být prováděno jen s Vaším souhlasem. Poskytnutí takového souhlasu je zcela na Vašem rozhodnutí a můžete ho kdykoliv odvolat. S Vaším souhlasem zpracováváme osobní údaje zejména pro tyto účely:</p>
          <h3>Vytvoření a předání nabídky služeb společností náležejících do skupiny Comfort Finance Group CFG</h3>
          <p>Jestliže nám udělíte souhlas k předání osobních údajů (včetně rodného čísla) za účelem obdržení informací o produktech a službách společností, které patří do skupiny Comfort Finance Group CFG, mohou Vám být zasílány zejména marketingové informace, a to e-mailem, adresovaným tiskem nebo prostřednictvím SMS. Pro možnost vytvořit nabídku plně odpovídající Vašim požadavkům jsou využívány i informace o tom, jaké naše služby využíváte nebo vyhledáváte. Přehled společností náležejících do skupiny Comfort Finance Group CFG naleznete v části Komu osobní údaje předáváme.</p>
          <h3>Pořízení a uchovávání kopií osobních dokladů, není-li vyžadováno zákony</h3>
          <p>Zejména pro účely bezpečnosti a ochrany Vašich zájmů a Vaší jednoznačné identifikace pořizujeme a uchováváme kopie Vašich průkazů totožnosti. Pokud není pořízení kopie dokladu nutnou podmínkou pro poskytnutí služby, činíme pouze opis údajů z průkazu totožnosti.</p>
          <h3>Používání rodného čísla pro účely jednoznačné identifikace v informačních systémech skupiny Comfort Finance Group CFG</h3>
          <p>Pro využití Vašeho rodného čísla jako jedinečného identifikátoru v našich systémech je nutný Váš souhlas. Smyslem takového využití je především Vaše jednoduchá a jednoznačná identifikace při poskytování služeb a omezení možných chyb, které vznikají při tom, když se jiné identifikační osobní údaje našich klientů shodují. Tímto zároveň plníme svou povinnost vykonávat činnosti obezřetně a chránit zájmy svých klientů.</p>
          <h3>Vytvoření a předání nabídky služeb a produktů našich obchodních partnerů</h3>
          <p>Jestliže nám udělíte souhlas k předání osobních údajů za účelem obdržení informací o produktech a službách našich obchodních partnerů, mohou Vám být zasílány zejména marketingové informace, a to e-mailem, adresovaným tiskem nebo prostřednictvím SMS. Přehled našich obchodních partnerů naleznete v části Komu osobní údaje předáváme.</p>

          <h2>Jakým způsobem osobní údaje zpracováváme a jak je chráníme</h2>
          <p>Vaše osobní údaje důsledně chráníme. Zpracování osobních údajů provádíme manuálně i v elektronických informačních systémech, které podléhají stálé a přísné fyzické, technické i procedurální kontrole. Pokud využíváme cloudových úložišť, jsou zásadně umístěna v rámci EU a vždy je zajištěn vysoký stupeň zabezpečení údajů.</p>
          <p>Veškeré osoby, které s osobními údaji přicházejí do styku v rámci plnění svých pracovních či smluvně převzatých povinností, jsou vázány mlčenlivostí a jsou řádně proškoleny.</p>
          <p>Vaše osobní údaje zásadně zpracováváme sami, případně uvnitř skupiny Comfort Finance Group CFG. Údaje předáváme mimo skupinu Comfort Finance Group CFG pouze, pokud k tomu máme Váš souhlas nebo pokud to vyžadují právní předpisy.</p>
          <p>Pokud někoho dalšího pověříme výkonem určité činnosti tvořící součást našich služeb, může při ní docházet ke zpracování příslušných osobních údajů. Takto pověřené osoby se stávají zpracovatelem osobních údajů. Zpracovatel je oprávněn nakládat s údaji výhradně pro účely výkonu činnosti, ke které jsme ho pověřili. V takovém případě není pro účely výkonu zpracovatelské činnosti vyžadován Váš souhlas, neboť takové zpracování umožňuje přímo právní předpis.</p>

          <h2>Komu osobní údaje předáváme</h2>
          <p>Vaše osobní údaje předáváme pouze v souladu s právními předpisy a pokud je vyžadován, tak pouze v souladu s Vaším souhlasem. Vaše osobní údaje nejsou předávány do třetích zemí mimo EU. Vaše osobní údaje předáváme následujícím subjektům:</p>
          <ul>
            <li>subjektům v rámci plnění povinností, které nám stanoví právní předpisy, například v souladu s AML zákonem, a to zejména soudům, orgánům činným v trestním řízení, správcům daně, soudním exekutorům, finančnímu arbitrovi, orgánům sociálního zabezpečení, registrům klientských informací (např. CBCB (Czech Banking Credit Bureau, a.s.), sídlem Štětkova 1638/18, Nusle, 140 00 Praha 4, IČ 26199696; CNCB (Czech Non-Banking Credit Bureau, z.s.p.o.), sídlem Štětkova 1638/18, Nusle, 140 00 Praha 4, IČ 71236384), orgánům dohledu v rámci výkonu jejich zákonných pravomocí;</li>
            <li>dalším subjektům, pokud je to nezbytné pro ochranu našich práv a právem chráněných zájmů, např. soudům, exekutorům, dražebníkům apod., v rozsahu nezbytném pro uplatnění našich nároků;</li>
            <li>osobám námi pověřeným k plnění jejích smluvních a zákonných povinností, včetně realizace práv ze smluvních vztahů, například účetním, poskytovatelům IT služeb, advokátům;</li>
            <li>členům skupiny Comfort Finance Group CFG, pokud jde o vyhodnocení platební morálky, důvěryhodnosti a bonity, případně o nabídku jejich služeb a produktů, kterými jsou:</li>
          </ul>
          <table>
            <thead><tr><th>Název subjektu</th><th>Adresa</th><th>IČ</th></tr></thead>
            <tbody>
              <tr><td>CFG Real Estate s.r.o.</td><td>Vinohradská 2828/151, 130 00 Praha 3</td><td>03628248</td></tr>
              <tr><td>CFG Private Equity a.s.</td><td>Vinohradská 2828/151, 130 00 Praha 3</td><td>06504591</td></tr>
              <tr><td>Comfort Money s.r.o.</td><td>Vinohradská 2828/151, 130 00 Praha 3</td><td>24209589</td></tr>
              <tr><td>CFG Funds s.r.o.</td><td>Vinohradská 2828/151, 130 00 Praha 3</td><td>05593832</td></tr>
            </tbody>
          </table>
          <p>obchodním partnerům, pokud jde o vyhodnocení platební morálky, důvěryhodnosti a bonity, případně o nabídku jejich služeb a produktů, kterými jsou:</p>
          <table>
            <thead><tr><th>Název subjektu</th><th>Adresa</th><th>IČ</th></tr></thead>
            <tbody>
              <tr><td>CEE Real Estate a.s.</td><td>Vinohradská 2828/151, 130 00 Praha 3</td><td>05895464</td></tr>
              <tr><td>Klub investorů a traderů s.r.o.</td><td>Vinohradská 2828/151, 130 00 Praha 3</td><td>24161179</td></tr>
              <tr><td>eastbutton s.r.o.</td><td>Vinohradská 2828/151, 130 00 Praha 3</td><td>29363209</td></tr>
              <tr><td>Catalyst Equity s.r.o.</td><td>Ondříčkova 2166/14, 130 00 Praha 3</td><td>24211559</td></tr>
              <tr><td>DQ Holding s.r.o.</td><td>Ondříčkova 2166/14, 130 00 Praha 3</td><td>05175780</td></tr>
            </tbody>
          </table>

          <h2>Jakou dobu osobní údaje uchováváme</h2>
          <p>Osobní údaje uchováváme po celou dobu, po kterou Vám poskytujeme své služby a produkty. Po skončení spolupráce omezujeme jejich použití, uchováváme je ale nadále. Máme totiž zákonnou povinnost uchovávat je po dobu dalších 10 let (archivační povinnost dle AML zákona a daňových předpisů).</p>
          <p>Pokud nám sdělíte svůj zájem, abychom Vás kontaktovali za účelem nabídky služeb a produktů, ale k žádným konkrétním jednáním nedojde ani nám neudělíte souhlas k dalšímu zpracování Vašich osobních údajů, tyto údaje smažeme 1 měsíc poté, co jste nám je poskytli.</p>
          <p>Pokud požádáte o poskytnutí podnikatelského úvěru, ale z jakéhokoliv důvodu nedojde k uzavření úvěrové smlouvy, zpracováváme Vaše osobní údaje získané v rámci žádosti a posuzování poptávky nejvýše po dobu 1 roku od zamítnutí nebo zpětvzetí žádosti.</p>
          <p>Osobní údaje, které zpracováváme na základě uděleného souhlasu, uchováváme po dobu platnosti tohoto souhlasu.</p>
          <p>Pokud zpracováváme údaje výhradně pro účely ochrany oprávněného zájmu, uchováváme je jen po dobu existence tohoto oprávněného zájmu (např. po dobu promlčecí lhůty).</p>

          <h2>Jaká máte práva v souvislosti se zpracováním osobních údajů</h2>
          <p>V oblasti ochrany osobních údajů máte právními předpisy garantována určitá práva, která vůči nám můžete uplatnit na e-mailu <a href="mailto:info@firemnizalozna.cz">info@firemnizalozna.cz</a>, telefonním čísle +420 779 998 121 nebo na adrese našeho sídla, tj. Vinohradská 2828/151, Praha 3, 130 00. Dále je Vám k dispozici i náš pověřenec pro ochranu osobních údajů na e-mailu <a href="mailto:dpo@firemnizalozna.cz">dpo@firemnizalozna.cz</a> a telefonním čísle +420 226 296 052.</p>
          <h3>Právo na přístup k osobním údajům</h3>
          <p>Máte právo na přístup ke svým osobním údajům a dalším souvisejícím informacím (např. účel, kategorie osobních údajů, doba uchování, zdroj). Máte právo požadovat i kopii zpracovávaných osobních údajů. Za její opakované poskytnutí Vám však můžeme účtovat poplatek odpovídající nákladům na zpracování a poskytnutí informace.</p>
          <h3>Právo na přenositelnost údajů</h3>
          <p>Pokud je pro Vás vhodné z hlediska usnadnění komunikace s jiným poskytovatelem služeb, máte právo po nás vyžadovat předání osobních údajů, které jsme od Vás nebo z jiných zdrojů získali za účelem zajištění poskytování našich služeb a produktů nebo na základě Vašeho souhlasu.</p>
          <h3>Právo na revizi rozhodnutí založeného výhradně na automatizovaném zpracování</h3>
          <p>V současné době neprovádíme rozhodování o poskytnutí služeb a produktů, které by bylo výhradně automatizované. Pokud bychom v rámci snah o zkvalitnění a zrychlení poskytovaných služeb a produktů zavedli například automatizované hodnocení a schvalování žádostí o poskytnutí úvěrů zcela bez lidského zásahu a Vy byste nesouhlasili s výsledkem posouzení, mohli byste takové rozhodnutí zpochybnit, vyjádřit se k němu a požádat nás o jeho přezkum.</p>
          <h3>Právo na opravu osobních údajů</h3>
          <p>Jestliže jsou Vaše osobní údaje nesprávné, nepřesné nebo došlo k jejich změně, máte právo na jejich opravu. S přihlédnutím k účelům, pro které tyto osobní údaje zpracováváme, máte rovněž právo na jejich doplnění.</p>
          <h3>Právo na výmaz osobních údajů</h3>
          <p>Osobní údaje mažeme automaticky neprodleně poté, co ztratíme právní titul k jejich zpracování (např. uplynula zákonná archivační doba 10 let od ukončení smlouvy, pokud nestanoví jiný právní předpis jinak). Přesto můžete uplatnit právo na jejich výmaz.</p>
          <h3>Právo na omezení zpracování osobních údajů</h3>
          <p>Máte rovněž právo na omezení zpracování osobních údajů, a to zejména tehdy, pokud se budeme zabývat Vaší námitkou proti zpracování osobních údajů nebo upozorněním na nepřesnost údajů.</p>
          <h3>Právo na odvolání souhlasu se zpracováním osobních údajů</h3>
          <p>Jestliže nám udělíte souhlas se zpracováním osobních údajů, máte právo jej kdykoli odvolat, přičemž to samé platí i pro souhlas s použitím rodného čísla. Po odvolání souhlasu ukončíme zpracování osobních údajů, k nimž nemáme jiný právní titul než Váš souhlas.</p>
          <h3>Právo podat námitku</h3>
          <p>V případě, že si nepřejete, abychom pokračovali ve zpracování, které provádíme na základě ochrany svého oprávněného zájmu, můžete uplatnit tzv. námitku. To je možné udělat několika způsoby:</p>
          <ul>
            <li>přímo v našich obchodních sděleních je včleněna možnost zastavení jejich zasílání daným komunikačním kanálem;</li>
            <li>pokud již nechcete, abychom Vám telefonovali, v rámci hovoru nám to prosím sdělte; a</li>
            <li>námitku lze zaslat na naše kontakty (viz výše).</li>
          </ul>
          <p>Námitka by měla být odůvodněna. Mělo by z ní být zřejmé, proč se domníváte, že dané zpracování nepříznivě zasahuje do Vašeho soukromí nebo ochrany Vašich práv a právem chráněných zájmů. Následně vyhodnotíme, zdali je ochrana našeho oprávněného zájmu nebo třetích osob stále silnější než dopad na klienta či potenciálního klienta. To neplatí pro zpracování pro účel přímého marketingu, kde je zpracování ukončeno automaticky po obdržení námitky. Platí přitom, že i po odhlášení se z marketingové komunikace Vás nadále můžeme kontaktovat, a to kvůli obsluze a plnění svých práv a povinností.</p>
          <h3>Právo podat stížnost ÚOOÚ</h3>
          <p>Pokud nesouhlasíte s čímkoliv ohledně zpracování osobních údajů, vždy máte právo obrátit se se stížností na Úřad pro ochranu osobních údajů, Pplk. Sochora 27, 170 00 Praha 7, <a href="https://www.uoou.cz" target="_blank" rel="noopener">www.uoou.cz</a>.</p>
          <p>Pokud jste nenalezli výše veškeré odpovědi na Vaše dotazy, které se týkají osobních údajů, nebo potřebujete některé informace podrobněji vysvětlit, pište na <a href="mailto:info@firemnizalozna.cz">info@firemnizalozna.cz</a> nebo volejte na +420 779 998 121. Současně je Vám k dispozici i náš pověřenec pro ochranu osobních údajů na telefonu +420 226 296 052 nebo e-mailu <a href="mailto:dpo@firemnizalozna.cz">dpo@firemnizalozna.cz</a>.</p>
        </div>`,
});

/* ---------- /zasady-zpracovani-cookies/ ---------- */
pages.push({
  lang: 'cs', path: '/zasady-zpracovani-cookies/', altPath: '/en/cookies/',
  title: 'Zásady zpracování cookies — Firemní záložna',
  desc: 'Jaké cookies web www.firemnizalozna.cz používá, k čemu slouží jednotlivé kategorie a jak můžete svůj souhlas kdykoli změnit nebo odvolat.',
  kicker: 'Právní informace',
  h1: 'Zásady zpracování cookies',
  sub: 'Jaké cookies používáme, k čemu slouží a jak změníte své nastavení.',
  noForm: true,
  content: `        <div class="fz-prose">
          <h2>Úvodem</h2>
          <p>Tyto zásady popisují, jak web <strong>www.firemnizalozna.cz</strong> používá cookies. Při jejich zpracování dodržujeme všechny relevantní právní předpisy, především obecné nařízení EU č. 2016/679 (GDPR). Více o nakládání s osobními údaji najdete v <a href="/ochrana-osobnich-udaju/">Informacích o zpracování osobních údajů</a>.</p>

          <h2>Co jsou cookies</h2>
          <p>Cookies jsou malé datové soubory, které nám umožňují zaznamenat informace o Vaší návštěvě. Slouží k zajištění správného fungování webu, k jeho optimalizaci a ke zlepšení uživatelského zážitku. Část cookies je nezbytná pro chod webu, ostatní načítáme až na základě Vašeho souhlasu.</p>

          <h2>Kategorie cookies</h2>
          <ul>
            <li><strong>Nezbytné (funkční)</strong>: zajišťují základní chod webu a uložení Vašeho souhlasu. Jsou nezbytně nutné pro umožnění použití konkrétní služby, a proto je nelze vypnout.</li>
            <li><strong>Předvolby</strong>: umožňují uložení předvoleb, které mění chování nebo vzhled webu (například zvolený jazyk).</li>
            <li><strong>Statistické (analytické)</strong>: pomáhají nám pochopit, jak web používáte. Používají se výhradně pro anonymní statistické účely a načítají se až po Vašem souhlasu.</li>
            <li><strong>Marketingové</strong>: slouží k vytvoření uživatelských profilů za účelem zasílání reklamy a měření kampaní. Načítají se až po Vašem souhlasu.</li>
          </ul>

          <h2>Správa souhlasu</h2>
          <p>Souhlas s analytickými a marketingovými cookies je dobrovolný a můžete jej kdykoli změnit nebo odvolat:</p>
          <p><button class="btn btn--primary" data-cookie-settings type="button">Otevřít nastavení cookies</button></p>
          <p>Vaše volba se ukládá ve Vašem prohlížeči. Analytické a marketingové nástroje se bez souhlasu nenačítají.</p>

          <h2>Kontakt</h2>
          <p>S dotazy k cookies a zpracování údajů se obraťte na <a href="mailto:dpo@firemnizalozna.cz">dpo@firemnizalozna.cz</a> nebo na telefon +420 226 296 052.</p>
        </div>`,
});

/* ---------- /ochrana-oznamovatelu/ ---------- */
pages.push({
  lang: 'cs', path: '/ochrana-oznamovatelu/', altPath: '/en/whistleblowing/',
  title: 'Ochrana oznamovatelů — Firemní záložna',
  desc: 'Oznamování protiprávního jednání podle zákona č. 171/2023 Sb. ve společnosti Firemní záložna a.s. Jak a komu podat oznámení a jak chráníme oznamovatele.',
  kicker: 'Právní informace',
  h1: 'Oznamování protiprávního jednání',
  sub: 'Firemní záložna a.s. přijímá oznámení podle zákona č. 171/2023 Sb., o ochraně oznamovatelů.',
  noForm: true,
  content: `        <div class="fz-prose">
          <h2>Úvodem</h2>
          <p>Společnost Firemní záložna a.s. (IČO 055 62 597) přijímá oznámení podle zákona č. 171/2023 Sb., o ochraně oznamovatelů, týkající se možného protiprávního jednání, k němuž došlo nebo má dojít v souvislosti s prací nebo jinou obdobnou činností. Totožnost oznamovatele i obsah oznámení jsou důvěrné a chráněné.</p>

          <h2>Jak podat oznámení</h2>
          <h3>Písemně</h3>
          <ul>
            <li>E-mailem na <a href="mailto:oznameni@cfg.cz">oznameni@cfg.cz</a></li>
            <li>Poštou na adresu: Firemní záložna a.s. – whistleblowing, Vinohradská 2828/151, 130 00 Praha 3, s poznámkou „Whistleblowing – NEOTVÍRAT – POUZE K RUKÁM POVĚŘENÉ OSOBY".</li>
          </ul>
          <h3>Ústně</h3>
          <ul>
            <li>Telefonicky na +420 226 296 025 (Po–Pá 9:00–15:00).</li>
            <li>Osobně po předchozí dohodě v sídle společnosti.</li>
          </ul>

          <h2>Odpovědná osoba</h2>
          <p>Oznámení přijímá a vyřizuje příslušná pověřená osoba: <strong>Michaela Bečvářová</strong>.</p>

          <h2>Další kanály pro oznámení</h2>
          <p>Oznámení můžete podat také prostřednictvím externího oznamovacího systému Ministerstva spravedlnosti. V případě porušení AML předpisů se lze obrátit na Finanční analytický úřad (<a href="mailto:reditel@fau.mfcr.cz">reditel@fau.mfcr.cz</a>).</p>

          <h2>Sídlo společnosti</h2>
          <p>Firemní záložna a.s., Vinohradská 2828/151, 130 00 Praha 3.</p>
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
