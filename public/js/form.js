/* Firemní záložna — lead formulář (fetch na /api/lead, validace, stavy) */
(function () {
  'use strict';

  var form = document.getElementById('leadForm');
  if (!form) return;

  var EN = document.documentElement.lang === 'en';
  var T = EN ? {
    required: 'Please fill in your name.',
    contact: 'Enter a phone number or e-mail so we can reach you.',
    phone: 'Please check the phone number format.',
    email: 'Please check the e-mail format.',
    gdpr: 'Please confirm consent to the processing of personal data.',
    sending: 'Sending…',
    submit: 'Get a no-obligation offer',
    success: 'Thank you! Your specialist will call you back within 24 hours on business days.',
    error: 'Sorry, something went wrong. Please try again or call us at +420 771 528 747.'
  } : {
    required: 'Vyplňte prosím jméno.',
    contact: 'Zadejte telefon nebo e-mail, ať se vám můžeme ozvat.',
    phone: 'Zkontrolujte prosím formát telefonu.',
    email: 'Zkontrolujte prosím formát e-mailu.',
    gdpr: 'Potvrďte prosím souhlas se zpracováním osobních údajů.',
    sending: 'Odesílám…',
    submit: 'Zjistit nezávaznou nabídku',
    success: 'Děkujeme! Specialista se vám ozve do 24 hodin v pracovní dny.',
    error: 'Omlouváme se, něco se pokazilo. Zkuste to znovu, nebo zavolejte na 771 528 747.'
  };

  var phoneRe = /^(\+?420)?\s?\d{3}\s?\d{3}\s?\d{3}$/;
  var emailRe = /^[^\s@]{1,64}@[^\s@]{1,255}\.[^\s@]{2,}$/;

  function fieldWrap(input) { return input.closest('.footer__field, .footer__gdpr'); }

  function setError(input, msg) {
    var wrap = fieldWrap(input);
    if (!wrap) return;
    wrap.classList.add('has-error');
    var err = wrap.querySelector('.form-error');
    if (err) err.textContent = msg;
  }

  function clearErrors() {
    form.querySelectorAll('.has-error').forEach(function (w) { w.classList.remove('has-error'); });
  }

  function getUtm() {
    var utm = {};
    new URLSearchParams(location.search).forEach(function (v, k) {
      if (k.indexOf('utm_') === 0) utm[k] = v.slice(0, 200);
    });
    return utm;
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    clearErrors();

    var name = form.querySelector('#lead-name');
    var phone = form.querySelector('#lead-phone');
    var email = form.querySelector('#lead-email');
    var message = form.querySelector('#lead-message');
    var gdpr = form.querySelector('#lead-gdpr');
    var hp = form.querySelector('#lead-company'); // honeypot
    var status = document.getElementById('leadStatus');
    var submit = form.querySelector('.footer__submit');

    var valid = true;
    if (!name.value.trim()) { setError(name, T.required); valid = false; }
    if (!phone.value.trim() && !email.value.trim()) { setError(phone, T.contact); valid = false; }
    if (phone.value.trim() && !phoneRe.test(phone.value.trim())) { setError(phone, T.phone); valid = false; }
    if (email.value.trim() && !emailRe.test(email.value.trim())) { setError(email, T.email); valid = false; }
    if (!gdpr.checked) { setError(gdpr, T.gdpr); valid = false; }
    if (!valid) {
      var firstErr = form.querySelector('.has-error input, .has-error textarea');
      if (firstErr) firstErr.focus();
      return;
    }

    var calcCtx = null;
    try { calcCtx = JSON.parse(document.getElementById('leadCalcContext').value || 'null'); } catch (err) { /* noop */ }

    var payload = {
      name: name.value.trim(),
      phone: phone.value.trim(),
      email: email.value.trim(),
      message: message ? message.value.trim() : '',
      company: hp ? hp.value : '',
      calculator: calcCtx,
      lang: document.documentElement.lang,
      url: location.href,
      utm: getUtm()
    };

    submit.disabled = true;
    var origLabel = submit.textContent;
    submit.textContent = T.sending;
    status.className = 'form-status';
    status.textContent = '';

    fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(function (res) {
      return res.json().catch(function () { return { ok: res.ok }; });
    }).then(function (data) {
      if (data && data.ok) {
        status.className = 'form-status form-status--success is-visible';
        status.textContent = T.success;
        form.reset();
        if (window.fzConsent && window.fzConsent.analytics) {
          document.dispatchEvent(new CustomEvent('fz:event', { detail: { name: 'lead_submit' } }));
        }
      } else {
        throw new Error('server');
      }
    }).catch(function () {
      status.className = 'form-status form-status--error is-visible';
      status.textContent = T.error;
    }).finally(function () {
      submit.disabled = false;
      submit.textContent = origLabel || T.submit;
      status.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });
  });
})();
