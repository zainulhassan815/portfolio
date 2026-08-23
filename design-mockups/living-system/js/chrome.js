/* ==========================================================
   HEADER SCROLL STATE + PROGRESS BAR + BACK TO TOP
   ========================================================== */
(function () {
  var header = document.querySelector('header.top');
  var progress = document.getElementById('progress');
  var backToTop = document.getElementById('back-to-top');

  function onScroll() {
    var sy = window.scrollY;
    header.classList.toggle('scrolled', sy > 40);

    var doc = document.documentElement;
    var scrollTop = doc.scrollTop || document.body.scrollTop;
    var scrollHeight = doc.scrollHeight - doc.clientHeight;
    var pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    progress.style.width = pct + '%';

    backToTop.classList.toggle('visible', sy > 600);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ==========================================================
   MOBILE MENU
   ========================================================== */
(function () {
  var toggle = document.getElementById('menu-toggle');
  var menu = document.getElementById('mobile-menu');
  var links = menu.querySelectorAll('a');
  var open = false;

  function setMenu(isOpen) {
    open = isOpen;
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    menu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  toggle.addEventListener('click', function () { setMenu(!open); });
  links.forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
})();

/* ==========================================================
   ACTIVE SECTION NAV
   Derived from the nav links themselves. The previous version kept a
   hardcoded id list, so a nav item not in that list ("Reviews") could
   never highlight, and it indexed the unfiltered list against a
   filtered array, which silently desyncs the moment an id is missing.
   ========================================================== */
(function () {
  var items = Array.prototype.slice
    .call(document.querySelectorAll('nav.links a[href^="#"]'))
    .map(function (link) {
      return { link: link, sec: document.getElementById(link.getAttribute('href').slice(1)) };
    })
    .filter(function (it) { return it.sec; });

  if (!items.length) return;

  // Cached, because reading a rect per item on every scroll event forces layout.
  function measure() {
    items.forEach(function (it) {
      it.top = it.sec.getBoundingClientRect().top + window.scrollY;
    });
    items.sort(function (a, b) { return a.top - b.top; });
  }

  function onScroll() {
    var pos = window.scrollY + 140;
    var current = null;
    items.forEach(function (it) { if (it.top <= pos) current = it; });  // the last one passed
    items.forEach(function (it) { it.link.classList.toggle('active', it === current); });
  }

  function refresh() { measure(); onScroll(); }

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', refresh);
  window.addEventListener('load', refresh);
  refresh();
})();
