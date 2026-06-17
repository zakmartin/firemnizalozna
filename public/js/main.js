/* Firemní záložna — shared UI (menu, reveal, counters, cookie consent) */
(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Mobile drawer menu ---------- */
  var nav = document.querySelector('.nav');
  var burger = document.querySelector('.nav__burger');
  if (nav && burger) {
    var links = nav.querySelector('.nav__links');
    var setOpen = function (open) {
      nav.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-open', open);
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (open) {
        var first = links.querySelector('a, button');
        if (first) first.focus();
      } else {
        burger.focus();
      }
    };
    burger.addEventListener('click', function () {
      setOpen(!nav.classList.contains('is-open'));
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) setOpen(false);
    });
    links.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length && 'IntersectionObserver' in window && !reducedMotion) {
    var revealIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          revealIO.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { revealIO.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Animated counters (no-JS fallback = real numbers in HTML) ---------- */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window && !reducedMotion) {
    var fmt = function (n, dec) {
      return n.toLocaleString(document.documentElement.lang === 'en' ? 'en-GB' : 'cs-CZ', {
        minimumFractionDigits: dec, maximumFractionDigits: dec
      });
    };
    var countIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        countIO.unobserve(en.target);
        var el = en.target;
        var target = parseFloat(el.getAttribute('data-count'));
        var dec = (el.getAttribute('data-count').split('.')[1] || '').length;
        var dur = 1100;
        var t0 = performance.now();
        var tick = function (t) {
          var p = Math.min((t - t0) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          el.textContent = fmt(target * eased, dec);
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = fmt(target, dec);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });
    counters.forEach(function (el) { countIO.observe(el); });
  }

  /* ---------- Cookie consent (categories; gates analytics) ---------- */
  var CONSENT_KEY = 'fz-consent-v1';

  function getConsent() {
    try { return JSON.parse(localStorage.getItem(CONSENT_KEY)); } catch (e) { return null; }
  }

  function saveConsent(c) {
    c.ts = new Date().toISOString();
    try { localStorage.setItem(CONSENT_KEY, JSON.stringify(c)); } catch (e) { /* noop */ }
    applyConsent(c);
  }

  function applyConsent(c) {
    window.fzConsent = c;
    if (c && c.analytics) {
      // Hook: load analytics only after consent. Insert GA4/Plausible snippet here.
      document.dispatchEvent(new CustomEvent('fz:analytics-allowed'));
    }
    if (c && c.marketing) {
      document.dispatchEvent(new CustomEvent('fz:marketing-allowed'));
    }
  }

  var bar = document.getElementById('cookieBar');
  if (bar) {
    var stored = getConsent();
    if (stored) {
      applyConsent(stored);
    } else {
      bar.classList.add('is-visible');
    }

    bar.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-consent]');
      if (!btn) return;
      var mode = btn.getAttribute('data-consent');
      if (mode === 'settings') {
        bar.classList.toggle('show-settings');
        return;
      }
      var consent = { necessary: true, analytics: false, marketing: false };
      if (mode === 'all') {
        consent.analytics = true;
        consent.marketing = true;
      } else if (mode === 'custom') {
        consent.analytics = !!bar.querySelector('#ckAnalytics:checked');
        consent.marketing = !!bar.querySelector('#ckMarketing:checked');
      }
      saveConsent(consent);
      bar.classList.remove('is-visible', 'show-settings');
    });

    // Re-open from footer link (/cookies/ page or footer)
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-cookie-settings]')) {
        e.preventDefault();
        bar.classList.add('is-visible', 'show-settings');
      }
    });
  }

  /* ---------- Conversion events (only with consent) ---------- */
  document.addEventListener('click', function (e) {
    var tel = e.target.closest('a[href^="tel:"]');
    if (tel && window.fzConsent && window.fzConsent.analytics) {
      document.dispatchEvent(new CustomEvent('fz:event', { detail: { name: 'phone_click' } }));
    }
  });

  /* ---------- Modaly (sdílené) ---------- */
  var EN = document.documentElement.lang === 'en';
  // prefix relativních cest podle hloubky stránky (homepage './', podstránky '../')
  var relPrefix = (function () {
    var logo = document.querySelector('.nav__logo');
    var href = logo ? logo.getAttribute('href') : './';
    return href === './' ? '' : href;
  })();

  function makeModal(label) {
    var m = document.createElement('div');
    m.className = 'fz-modal';
    m.setAttribute('role', 'dialog');
    m.setAttribute('aria-modal', 'true');
    m.setAttribute('aria-label', label);
    m.hidden = true;
    m.innerHTML =
      '<div class="fz-modal__backdrop" data-modal-close></div>' +
      '<div class="fz-modal__dialog">' +
      '<button type="button" class="fz-modal__close" data-modal-close aria-label="' + (EN ? 'Close' : 'Zavřít') + '">✕</button>' +
      '<div class="fz-modal__slot"></div></div>';
    document.body.appendChild(m);
    m.addEventListener('click', function (e) {
      if (e.target.closest('[data-modal-close]')) hideModal(m);
    });
    return m;
  }

  function showModal(m) {
    m.__lastFocus = document.activeElement;
    m.hidden = false;
    document.body.classList.add('modal-open');
  }

  function hideModal(m) {
    m.hidden = true;
    document.body.classList.remove('modal-open');
    if (m.__onHide) m.__onHide();
    if (m.__lastFocus && m.__lastFocus.focus) m.__lastFocus.focus();
  }

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.fz-modal:not([hidden])').forEach(function (m) { hideModal(m); });
  });

  /* Modal s lead formulářem — přesouvá existující kartu z pre-footeru (jediná instance formuláře) */
  window.fzFormModal = (function () {
    var card = document.querySelector('.fz-precta__form-card');
    if (!card) return null;
    var marker = document.createComment('fz-form-anchor');
    var modal = null;
    return {
      open: function () {
        if (!modal) {
          modal = makeModal(EN ? 'No-obligation offer' : 'Nezávazná nabídka');
          modal.__onHide = function () {
            marker.parentNode.insertBefore(card, marker);
            marker.parentNode.removeChild(marker);
          };
        }
        card.parentNode.insertBefore(marker, card);
        modal.querySelector('.fz-modal__slot').appendChild(card);
        showModal(modal);
        var first = card.querySelector('#lead-name');
        if (first) first.focus();
      }
    };
  })();

  /* Konverzní CTA (mimo kalkulačku) → otevřou lead formulář v modalu */
  if (window.fzFormModal) {
    document.addEventListener('click', function (e) {
      var trigger = e.target.closest('[data-open-offer]');
      if (!trigger) return;
      e.preventDefault();
      window.fzFormModal.open();
    });
  }

  /* Modal „Zavoláme vám zpátky" — rychlé zadání telefonu */
  window.fzCallModal = (function () {
    var phoneRe = /^(\+?420)?\s?\d{3}\s?\d{3}\s?\d{3}$/;
    var T = EN ? {
      title: 'We’ll call you back',
      sub: 'Leave us your number — Aleš Mráz will call you within 24 hours on business days.',
      phone: 'Phone *', phErr: 'Please check the phone number format.',
      name: 'Name (optional)',
      gdpr: 'I agree to the <a href="' + relPrefix + 'en/privacy/" style="text-decoration:underline;">processing of personal data</a> *',
      gdprErr: 'Please confirm consent.',
      submit: 'Call me back', sending: 'Sending…',
      success: 'Thank you! We’ll call you back soon.',
      error: 'Sorry, something went wrong. Please call us at +420 771 528 747.',
      msg: 'Request for a callback'
    } : {
      title: 'Zavoláme vám zpátky',
      sub: 'Nechte nám číslo — Aleš Mráz se vám ozve do 24 hodin v pracovní dny.',
      phone: 'Telefon *', phErr: 'Zkontrolujte prosím formát telefonu.',
      name: 'Jméno (nepovinné)',
      gdpr: 'Souhlasím se <a href="' + relPrefix + 'ochrana-osobnich-udaju/" style="text-decoration:underline;">zpracováním osobních údajů</a> *',
      gdprErr: 'Potvrďte prosím souhlas.',
      submit: 'Zavolejte mi', sending: 'Odesílám…',
      success: 'Děkujeme! Brzy se vám ozveme.',
      error: 'Omlouváme se, něco se pokazilo. Zavolejte nám na 771 528 747.',
      msg: 'Žádost o zpětné zavolání'
    };
    var modal = null;

    function build() {
      modal = makeModal(T.title);
      modal.querySelector('.fz-modal__slot').innerHTML =
        '<div class="fz-precta__form-card">' +
        '<h3 class="fz-precta__form-title">' + T.title + '</h3>' +
        '<p style="margin:-8px 0 18px;font-size:14.5px;line-height:1.5;color:var(--text-muted);">' + T.sub + '</p>' +
        '<form class="footer__form" id="callForm" novalidate>' +
        '<div class="hp-field" aria-hidden="true"><label for="call-company">x</label><input type="text" id="call-company" tabindex="-1" autocomplete="off"></div>' +
        '<div class="footer__field"><label for="call-phone">' + T.phone + '</label><input type="tel" id="call-phone" inputmode="tel" autocomplete="tel" placeholder="777 123 456" required><span class="form-error" aria-live="polite"></span></div>' +
        '<div class="footer__field"><label for="call-name">' + T.name + '</label><input type="text" id="call-name" autocomplete="name"></div>' +
        '<div class="footer__gdpr"><input type="checkbox" id="call-gdpr" required><label for="call-gdpr">' + T.gdpr + '</label><span class="form-error" aria-live="polite"></span></div>' +
        '<div class="form-status" id="callStatus" role="status" aria-live="polite"></div>' +
        '<button type="submit" class="footer__submit">' + T.submit + '</button>' +
        '</form></div>';
      modal.querySelector('#callForm').addEventListener('submit', onSubmit);
    }

    function setErr(input, msg) {
      var wrap = input.closest('.footer__field, .footer__gdpr');
      wrap.classList.add('has-error');
      var err = wrap.querySelector('.form-error');
      if (err) err.textContent = msg;
    }

    function onSubmit(e) {
      e.preventDefault();
      var form = e.target;
      form.querySelectorAll('.has-error').forEach(function (w) { w.classList.remove('has-error'); });
      var phone = form.querySelector('#call-phone');
      var name = form.querySelector('#call-name');
      var gdpr = form.querySelector('#call-gdpr');
      var hp = form.querySelector('#call-company');
      var status = form.querySelector('#callStatus');
      var submit = form.querySelector('.footer__submit');

      var ok = true;
      if (!phoneRe.test(phone.value.trim())) { setErr(phone, T.phErr); ok = false; }
      if (!gdpr.checked) { setErr(gdpr, T.gdprErr); ok = false; }
      if (!ok) return;

      submit.disabled = true;
      submit.textContent = T.sending;
      status.className = 'form-status';

      fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.value.trim(),
          phone: phone.value.trim(),
          message: T.msg,
          company: hp ? hp.value : '',
          lang: document.documentElement.lang,
          url: location.href
        })
      }).then(function (res) {
        return res.json().catch(function () { return { ok: res.ok }; });
      }).then(function (data) {
        if (!data || !data.ok) throw new Error('server');
        status.className = 'form-status form-status--success is-visible';
        status.textContent = T.success;
        form.reset();
        if (window.fzConsent && window.fzConsent.analytics) {
          document.dispatchEvent(new CustomEvent('fz:event', { detail: { name: 'callback_submit' } }));
        }
      }).catch(function () {
        status.className = 'form-status form-status--error is-visible';
        status.textContent = T.error;
      }).finally(function () {
        submit.disabled = false;
        submit.textContent = T.submit;
      });
    }

    return {
      open: function () {
        if (!modal) build();
        showModal(modal);
        modal.querySelector('#call-phone').focus();
      }
    };
  })();

  /* „Zavolejte mi" v hero otevírá modal pro telefon */
  var callMe = document.getElementById('callMe');
  if (callMe) {
    callMe.addEventListener('click', function (e) {
      e.preventDefault();
      window.fzCallModal.open();
    });
  }
  if (location.hash === '#zavolejte') window.fzCallModal.open();

  /* ---------- Plovoucí badge specialisty (vpravo dole) ---------- */
  (function () {
    var T = EN ? {
      role: 'loan specialist', hours: 'available Mon–Fri 9 a.m.–5 p.m.',
      callback: 'Call me back', message: 'Send a message', toggle: 'Contact the specialist'
    } : {
      role: 'úvěrový specialista', hours: 'k zastižení Po–Pá 9–17',
      callback: 'Zavolejte mi zpět', message: 'Napsat zprávu', toggle: 'Kontaktovat specialistu'
    };
    var photo = relPrefix + 'assets/ales_mraz.webp';
    var agent = document.createElement('div');
    agent.className = 'fz-agent';
    agent.innerHTML =
      '<div class="fz-agent__panel" id="agentPanel">' +
      '<div class="fz-agent__head"><img src="' + photo + '" alt="Aleš Mráz" width="48" height="48"><div><strong>Aleš Mráz</strong><span>' + T.role + '</span></div></div>' +
      '<a class="fz-agent__phone" href="tel:+420771528747">771 528 747</a>' +
      '<span class="fz-agent__hours">' + T.hours + '</span>' +
      '<div class="fz-agent__btns">' +
      '<button type="button" class="btn btn--primary" data-agent-call>' + T.callback + '</button>' +
      (window.fzFormModal
        ? '<button type="button" class="btn btn--ghost-dark" data-agent-msg>' + T.message + '</button>'
        : '<a class="btn btn--ghost-dark" href="' + relPrefix + (EN ? 'en/contact/' : 'kontakt/') + '">' + T.message + '</a>') +
      '</div></div>' +
      '<div class="fz-agent__bar">' +
      '<button type="button" class="fz-agent__toggle" aria-expanded="false" aria-controls="agentPanel" aria-label="' + T.toggle + '">' +
      '<img src="' + photo + '" alt="" width="48" height="48"><span class="fz-agent__dot" aria-hidden="true"></span></button>' +
      '<a class="fz-agent__id" href="tel:+420771528747"><strong>Aleš Mráz</strong><span>771 528 747</span></a>' +
      '</div>';
    document.body.appendChild(agent);

    var toggle = agent.querySelector('.fz-agent__toggle');
    toggle.addEventListener('click', function () {
      var open = agent.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    agent.addEventListener('click', function (e) {
      if (e.target.closest('[data-agent-call]')) {
        agent.classList.remove('is-open');
        window.fzCallModal.open();
      } else if (e.target.closest('[data-agent-msg]')) {
        agent.classList.remove('is-open');
        window.fzFormModal.open();
      }
    });
    document.addEventListener('click', function (e) {
      if (!agent.contains(e.target)) agent.classList.remove('is-open');
    });
  })();
})();
