# firemnizalozna.cz

Web Firemní záložny — rychlé podnikatelské úvěry. Vanilla HTML/CSS/JS + Express,
člen skupiny CFG.

## Spuštění

```bash
cp .env.example .env   # vyplnit FORM_API_URL (webhook pro leady)
npm install
npm run dev            # http://localhost:3000 (auto-restart)
npm start              # produkce
```

## Struktura

```
public/            statické stránky (CZ), css, js, assets
server/            Express — statika, /api/lead, 301 redirecty, security hlavičky
tools/             generátor podstránek (sdílená šablona hlavičky/patičky)
```

- **CSS vrstvy:** `public/css/cfg-base.css` (kopie sdíleného základu skupiny z
  kořene repa — při změně zkopírovat znovu) → `brand.css` (FZ tokeny) →
  `styles.css` (komponenty stránek).
- **Kalkulačka:** anuitní výpočet na klientu (`public/js/calc.js`), úrok od 9,9
  % p.a., 50 000–1 000 000 Kč / 6–60 měsíců; nad 1 mil. CTA na kontakt. Bez JS
  se zobrazí předpočítané reálné hodnoty.
- **Leady:** `POST /api/lead` — honeypot, rate limit 5/min/IP, serverová
  validace. Doručení řídí env `LEAD_DELIVERY`: `webhook` (výchozí, JSON na
  `FORM_API_URL`) nebo `smtp` (Nodemailer → Amazon SES, `LEAD_EMAIL_TO`). No-JS
  fallback: klasický POST → redirect na `/dekujeme/`.
- **Cookie souhlas:** kategorie nezbytné/analytické/marketingové, ukládá se do
  localStorage (`fz-consent-v1`). Analytika se zapojuje až po souhlasu — hook
  `fz:analytics-allowed` v `public/js/main.js`.

## Úprava podstránek

Podstránky (`/jak-to-funguje/`, `/cena/`, …) se generují z
`tools/generate-cz.js` (obsah) + `tools/fz-tmpl.js` (šablona hlavičky/patičky):

```bash
npm run generate
```

Homepage `public/index.html` je spravovaná ručně.

## EN verze (zatím vypnutá)

Obsah EN mutace je připraven v `tools/generate-en.js`. Zapnutí:

1. v `tools/fz-tmpl.js` nastavit `EN_ENABLED = true`,
2. spustit `node tools/generate-cz.js && node tools/generate-en.js`,
3. vytvořit `public/en/index.html` (EN homepage), doplnit hreflang na homepage a
   EN do `sitemap.xml`,
4. odebrat redirect `/en → /` v `server/index.js`.

## Před spuštěním doplnit

- [ ] **Fotka specialisty** → uložit jako `public/assets/ales-mraz.webp`
      (čtverec, ideálně ≥ 256×256)
- [ ] **Finální logo FZ v SVG** — `public/assets/logo-fz.svg` a
      `logo-fz-white.svg` jsou rekonstrukce, nahradit originálem, pokud existuje
- [ ] **Provozovatel** (název, IČO, sídlo) — placeholder `[DOPLNIT…]` v patičce
      všech stránek a v GDPR textu
- [ ] **Sazebník poplatků + RPSN** — placeholdery na `/cena/` a v sekci „Kolik
      to stojí" na homepage; poté právní revize (ČNB / podnikatelský úvěr)
- [ ] **Jednotná čísla skupiny CFG** — placeholder na `/o-nas/`
- [ ] **Texty právních stránek** (GDPR, cookies) — nyní draft, doladit dle
      skupinového vzoru
- [ ] **`FORM_API_URL`** — cílový webhook pro leady
- [ ] **301 mapa** — doplnit dle exportu reálných URL starého webu
      (`server/index.js`, objekt `REDIRECTS`)
- [ ] **E-mail info@firemnizalozna.cz** — uveden na /kontakt/ a v GDPR, ověřit
      že existuje
