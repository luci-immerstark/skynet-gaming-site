import { ui, defaultLang, type Lang, type UiKey } from './ui';

export function useT(lang: Lang) {
  return (key: UiKey): string => ui[lang][key];
}

export function getLangFromPath(pathname: string): Lang {
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es';
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en';
  return defaultLang;
}

/** Caminho localizado: localePath('es', '/blog') => '/es/blog'. */
export function localePath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? `/${lang}/` : `/${lang}${clean}`;
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(htmlLang(lang), {
    day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC',
  }).format(date);
}

/** Código BCP 47 do idioma (atributo lang, hreflang, Intl). */
export function htmlLang(lang: Lang): string {
  return lang === 'pt-br' ? 'pt-BR' : lang;
}

/** Data de lançamento no formato de cada idioma: 02/10/2026, 02/10/2026, Oct 2, 2026. */
export function formatLaunch(iso: string, lang: Lang): string {
  const d = new Date(`${iso}T12:00:00Z`);
  const opts: Intl.DateTimeFormatOptions = lang === 'en'
    ? { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }
    : { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' };
  return new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : lang === 'es' ? 'es-ES' : 'pt-BR', opts).format(d);
}
