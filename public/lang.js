// Language: a manual choice (localStorage) takes priority. On the first visit to the root:
// browser in Spanish => /es/, in English => /en/, anything else => Portuguese.
// The redirect keeps ?query and #hash (e.g. /#l4d2 from the ads).
(function () {
  try {
    // Search bots (Googlebot and co.) are not redirected: each URL has to be read in its own language.
    // Without this, Google opened the root, got sent to /en/ and started treating /en/ as a copy of the home page.
    if (/bot|crawl|spider|slurp|inspectiontool|facebookexternalhit/i.test(navigator.userAgent || '')) return;
    var p = location.pathname;
    var m = p.match(/^\/(es|en)(\/|$)/);
    var here = m ? m[1] : 'pt-br';
    var saved = localStorage.getItem('lang');
    if (!saved) {
      var nav = (navigator.language || '').toLowerCase();
      var pref = nav.indexOf('es') === 0 ? 'es' : nav.indexOf('en') === 0 ? 'en' : 'pt-br';
      localStorage.setItem('lang', here !== 'pt-br' ? here : pref);
      if (p === '/' && pref !== 'pt-br') location.replace('/' + pref + '/' + location.search + location.hash);
    } else if (p === '/' && saved !== 'pt-br' && saved !== here) {
      location.replace('/' + saved + '/' + location.search + location.hash);
    }
  } catch (e) {}
})();
