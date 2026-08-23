/* ==========================================================
   CONTACT FORM VALIDATION
   Errors were visual only: no aria-invalid, no association to the
   field, and no focus move, so "please fix the highlighted fields"
   named nothing a screen reader could act on.
   ========================================================== */
(function () {
  var form = document.getElementById('contact-form');
  var status = document.getElementById('form-status');
  if (!form) return;

  function control(field) { return field.querySelector('input, textarea, select'); }

  function validateField(field) {
    var input = control(field);
    var valid = input.type === 'email'
      ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())
      : input.value.trim().length > 0;

    field.classList.toggle('invalid', !valid);
    input.setAttribute('aria-invalid', valid ? 'false' : 'true');
    return valid;
  }

  form.querySelectorAll('.field').forEach(function (field) {
    var input = control(field);
    if (!input) return;
    input.addEventListener('blur', function () { if (input.value.trim()) validateField(field); });
    input.addEventListener('input', function () { if (field.classList.contains('invalid')) validateField(field); });
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var firstBad = null;

    form.querySelectorAll('.field').forEach(function (field) {
      if (!field.querySelector('[required]')) return;
      if (!validateField(field) && !firstBad) firstBad = field;
    });

    status.classList.remove('show', 'success', 'error');

    if (!firstBad) {
      // ponytail: the form has no action/method, so nothing is transmitted.
      // Wiring is deferred to the Next.js port. DO NOT SHIP THIS AS-IS: the
      // message below claims delivery that has not happened.
      status.textContent = 'Message received. I\'ll reply within one business day.';
      status.classList.add('show', 'success');
      form.reset();
      form.querySelectorAll('[aria-invalid]').forEach(function (el) {
        el.setAttribute('aria-invalid', 'false');
      });
      return;
    }

    // Name the field rather than saying "the highlighted fields", which is
    // information only a sighted user has.
    var label = firstBad.querySelector('label');
    var name = label ? label.textContent.replace('*', '').trim() : 'a required field';
    status.textContent = 'Check ' + name + ' and try again.';
    status.classList.add('show', 'error');
    control(firstBad).focus();
  });
})();
