// Idioma: a escolha manual (localStorage) tem prioridade. Na primeira visita à raiz:
// navegador em espanhol => /es/, em inglês => /en/, qualquer outro => português.
// O redirecionamento preserva ?query e #hash (ex.: /#l4d2 dos anúncios).
(function () {
  try {
    // Robôs de busca (Googlebot e cia.) não são redirecionados: cada endereço precisa ser lido no próprio idioma.
    // Sem isso, o Google abria a raiz, era levado para /en/ e passava a tratar /en/ como cópia da página inicial.
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
