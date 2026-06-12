/* Firemní záložna — kalkulačka (anuitní splátka, čistý JS, bez backendu) */
(function () {
  'use strict';

  var RATE = 9.9;           // % p.a. (od)
  var AMOUNT_MIN = 50000;
  var AMOUNT_MAX = 1000000; // nad 1 mil. individuálně (až 5 mil.)
  var EN = document.documentElement.lang === 'en';

  var amountRange = document.getElementById('calcAmount');
  var amountInput = document.getElementById('calcAmountInput');
  var termRange = document.getElementById('calcTerm');
  var termInput = document.getElementById('calcTermInput');
  var resultEl = document.getElementById('calcResult');
  var paramsEl = document.getElementById('calcParams');
  if (!amountRange || !resultEl) return;

  function czk(n) {
    return n.toLocaleString(EN ? 'en-GB' : 'cs-CZ') + (EN ? ' CZK' : ' Kč');
  }

  /* Anuitní splátka: j * (i(1+i)^n) / ((1+i)^n - 1), zaokrouhleno nahoru */
  function annuity(principal, months, ratePa) {
    var i = (ratePa / 100) / 12;
    if (i === 0) return Math.ceil(principal / months);
    var f = Math.pow(1 + i, months);
    return Math.ceil(principal * (i * f) / (f - 1));
  }

  function fillTrack(range) {
    var min = +range.min, max = +range.max, val = +range.value;
    range.style.setProperty('--fill', ((val - min) / (max - min) * 100) + '%');
  }

  function clamp(v, min, max, step) {
    v = Math.round(v / step) * step;
    return Math.min(max, Math.max(min, v));
  }

  var debounceTimer;
  function update(immediate) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(function () {
      var amount = +amountRange.value;
      var months = +termRange.value;
      var pay = annuity(amount, months, RATE);

      resultEl.innerHTML = '&asymp;&nbsp;<em>' + czk(pay) + '</em>';
      paramsEl.textContent = EN
        ? 'Loan ' + czk(amount) + ' · term ' + months + ' months · interest from ' + RATE.toLocaleString('en-GB') + '% p.a.'
        : 'Úvěr ' + czk(amount) + ' · splatnost ' + months + ' měsíců · úrok od ' + RATE.toLocaleString('cs-CZ') + ' % p.a.';

      amountRange.setAttribute('aria-valuetext', czk(amount));
      termRange.setAttribute('aria-valuetext', months + (EN ? ' months' : ' měsíců'));

      // předvyplnění lead formuláře (sekce 10.4)
      var ctx = document.getElementById('leadCalcContext');
      if (ctx) ctx.value = JSON.stringify({ amount: amount, months: months, payment: pay, rate: RATE });
      var note = document.getElementById('lead-message');
      if (note && note.dataset.autofill !== 'off') {
        note.placeholder = EN
          ? 'E.g. I am interested in a loan of ' + czk(amount) + ' for ' + months + ' months…'
          : 'Např. mám zájem o úvěr ' + czk(amount) + ' na ' + months + ' měsíců…';
      }
    }, immediate ? 0 : 50);

    fillTrack(amountRange);
    fillTrack(termRange);
    if (amountInput) amountInput.value = (+amountRange.value).toLocaleString(EN ? 'en-GB' : 'cs-CZ');
    if (termInput) termInput.value = termRange.value;
  }

  amountRange.addEventListener('input', function () { update(false); });
  termRange.addEventListener('input', function () { update(false); });

  if (amountInput) {
    amountInput.addEventListener('change', function () {
      var v = parseInt(amountInput.value.replace(/[^\d]/g, ''), 10);
      if (isNaN(v)) v = +amountRange.value;
      amountRange.value = clamp(v, AMOUNT_MIN, AMOUNT_MAX, 10000);
      update(true);
    });
  }
  if (termInput) {
    termInput.addEventListener('change', function () {
      var v = parseInt(termInput.value, 10);
      if (isNaN(v)) v = +termRange.value;
      termRange.value = clamp(v, +termRange.min, +termRange.max, +termRange.step || 6);
      update(true);
    });
  }

  // CTA „Chci tuto nabídku probrat" — otevře modal s formulářem a předvyplněnými hodnotami.
  // Kartu formuláře přesouváme do modalu (a zpět), takže existuje jen jedna instance formuláře.
  var cta = document.getElementById('calcCta');
  var formCard = document.querySelector('.fz-precta__form-card');
  if (cta && formCard) {
    var marker = document.createComment('fz-form-home');
    var modal = null;
    var slot = null;
    var lastFocus = null;

    var buildModal = function () {
      modal = document.createElement('div');
      modal.className = 'fz-modal';
      modal.id = 'calcModal';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-modal', 'true');
      modal.setAttribute('aria-label', EN ? 'No-obligation offer' : 'Nezávazná nabídka');
      modal.hidden = true;
      modal.innerHTML =
        '<div class="fz-modal__backdrop" data-modal-close></div>' +
        '<div class="fz-modal__dialog">' +
        '<button type="button" class="fz-modal__close" data-modal-close aria-label="' + (EN ? 'Close' : 'Zavřít') + '">✕</button>' +
        '<div class="fz-modal__slot"></div>' +
        '</div>';
      document.body.appendChild(modal);
      slot = modal.querySelector('.fz-modal__slot');
      modal.addEventListener('click', function (e) {
        if (e.target.closest('[data-modal-close]')) closeModal();
      });
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !modal.hidden) closeModal();
      });
    };

    var prefillNote = function () {
      var note = document.getElementById('lead-message');
      var ctx = null;
      try { ctx = JSON.parse(document.getElementById('leadCalcContext').value || 'null'); } catch (e) { /* noop */ }
      if (!note || !ctx) return;
      // nepřepisovat, co si klient napsal sám
      if (note.value && note.dataset.autofilled !== '1') return;
      note.value = EN
        ? 'I am interested in a loan of ' + czk(ctx.amount) + ' for ' + ctx.months + ' months (indicative instalment ≈ ' + czk(ctx.payment) + ').'
        : 'Mám zájem o úvěr ' + czk(ctx.amount) + ' na ' + ctx.months + ' měsíců (orientační splátka ≈ ' + czk(ctx.payment) + ').';
      note.dataset.autofilled = '1';
    };

    var openModal = function () {
      if (!modal) buildModal();
      lastFocus = document.activeElement;
      formCard.parentNode.insertBefore(marker, formCard);
      slot.appendChild(formCard);
      modal.hidden = false;
      document.body.classList.add('modal-open');
      prefillNote();
      var first = formCard.querySelector('#lead-name');
      if (first) first.focus();
      if (window.fzConsent && window.fzConsent.analytics) {
        document.dispatchEvent(new CustomEvent('fz:event', { detail: { name: 'calc_cta' } }));
      }
    };

    var closeModal = function () {
      modal.hidden = true;
      document.body.classList.remove('modal-open');
      marker.parentNode.insertBefore(formCard, marker);
      marker.parentNode.removeChild(marker);
      if (lastFocus) lastFocus.focus();
    };

    cta.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });

    // přímý odkaz / testování: /#nabidka otevře modal rovnou (po inicializaci kalkulačky)
    if (location.hash === '#nabidka') setTimeout(openModal, 80);
  }

  update(true);
})();
