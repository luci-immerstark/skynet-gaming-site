// Idioma: a escolha manual (localStorage) tem prioridade. Na primeira visita à raiz:
// navegador em espanhol => /es/, em inglês => /en/, qualquer outro => português.
(function () {
  try {
    var p = location.pathname;
    var m = p.match(/^\/(es|en)(\/|$)/);
    var here = m ? m[1] : 'pt-br';
    var saved = localStorage.getItem('lang');
    if (!saved) {
      var nav = (navigator.language || '').toLowerCase();
      var pref = nav.indexOf('es') === 0 ? 'es' : nav.indexOf('en') === 0 ? 'en' : 'pt-br';
      localStorage.setItem('lang', here !== 'pt-br' ? here : pref);
      if (p === '/' && pref !== 'pt-br') location.replace('/' + pref + '/');
    } else if (p === '/' && saved !== 'pt-br' && saved !== here) {
      location.replace('/' + saved + '/');
    }
  } catch (e) {}
})();
