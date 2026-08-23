/* ==========================================================
   THEME TOGGLE
   ========================================================== */
(function () {
  var root = document.documentElement;
  var themeBtn = document.getElementById('theme-toggle');
  var metaTheme = document.querySelector('meta[name="theme-color"]');

  function applyTheme(mode) {
    if (mode === 'dark' || mode === 'light') {
      root.setAttribute('data-theme', mode);
      localStorage.setItem('zh-theme-v2', mode);
    } else {
      root.removeAttribute('data-theme');
      localStorage.removeItem('zh-theme-v2');
    }
    if (metaTheme) metaTheme.setAttribute('content', mode === 'dark' ? '#0a0a0c' : '#ffffff');
  }

  var storedTheme = localStorage.getItem('zh-theme-v2');
  if (storedTheme) applyTheme(storedTheme);

  themeBtn.addEventListener('click', function () {
    var current = root.getAttribute('data-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var next;
    if (!current) next = prefersDark ? 'light' : 'dark';
    else if (current === 'dark') next = 'light';
    else next = 'dark';
    applyTheme(next);
  });
})();
