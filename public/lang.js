// Idioma: salva a escolha e, na primeira visita, vai para /es/ só se o navegador for espanhol.
(function () {
  try {
    var p = location.pathname;
    var saved = localStorage.getItem('lang');
    var isEs = p === '/es' || p.indexOf('/es/') === 0;
    var pref = saved || ((navigator.language || '').toLowerCase().indexOf('es') === 0 ? 'es' : 'pt-br');
    if (!saved) localStorage.setItem('lang', isEs ? 'es' : pref);
    if (p === '/' && pref === 'es' && !saved) location.replace('/es/');
    else if (p === '/' && saved === 'es') location.replace('/es/');
  } catch (e) {}
})();
