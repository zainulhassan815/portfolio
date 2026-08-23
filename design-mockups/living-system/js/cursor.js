/* ==========================================================
   FLOATING CURSOR
   Dot follows the pointer exactly, ring eases toward it. Both are
   transform-only so this never triggers layout.
   Add data-cursor="word" to any element to print a word in the ring.
   ========================================================== */
(function () {
  var fine = window.matchMedia('(pointer: fine)').matches;
  var still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!fine || still) return;

  var dot = document.getElementById('cur-dot');
  var ring = document.getElementById('cur-ring');
  if (!dot || !ring) return;

  var label = ring.querySelector('.label');
  document.documentElement.classList.add('has-cursor');

  var mx = window.innerWidth / 2, my = window.innerHeight / 2;
  var rx = mx, ry = my;
  var shown = false;

  document.addEventListener('mousemove', function (e) {
    mx = e.clientX; my = e.clientY;
    if (!shown) {
      shown = true;
      rx = mx; ry = my;               // no swoop in from the last position
      dot.classList.add('on');
      ring.classList.add('on');
    }
  });

  document.addEventListener('mouseleave', function () {
    shown = false;
    dot.classList.remove('on');
    ring.classList.remove('on');
  });

  document.addEventListener('mousedown', function () { ring.classList.add('press'); });
  document.addEventListener('mouseup', function () { ring.classList.remove('press'); });

  function frame() {
    rx += (mx - rx) * 0.17;           // ponytail: fixed lerp, not frame-rate corrected.
    ry += (my - ry) * 0.17;           // Swap for an exp(-k*dt) decay if 120Hz feels twitchy.
    dot.style.transform = 'translate3d(' + mx + 'px,' + my + 'px,0)';
    ring.style.transform = 'translate3d(' + rx + 'px,' + ry + 'px,0)'
      + (ring.classList.contains('press') ? ' scale(0.86)' : '');
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  /* One delegated listener rather than one per element, so markup added
     later (or swapped in by the carousel) still gets the treatment. */
  var HOT = 'a, button, [role="button"], input[type="submit"], [data-cursor]';

  document.addEventListener('mouseover', function (e) {
    var el = e.target.closest && e.target.closest(HOT);
    if (!el) return;
    ring.classList.add('hot');
    dot.classList.add('hot');
    if (label) label.textContent = el.getAttribute('data-cursor') || '';
  });

  document.addEventListener('mouseout', function (e) {
    var el = e.target.closest && e.target.closest(HOT);
    if (!el) return;
    if (e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest(HOT)) return;
    ring.classList.remove('hot');
    dot.classList.remove('hot');
    if (label) label.textContent = '';
  });
})();
