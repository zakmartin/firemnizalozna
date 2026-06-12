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
})();
