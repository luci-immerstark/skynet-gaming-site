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
