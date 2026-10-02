import { ui, defaultLang, type Lang, type UiKey } from './ui';

export function useT(lang: Lang) {
  return (key: UiKey): string => ui[lang][key];
}

export function getLangFromPath(pathname: string): Lang {
  return pathname === '/es' || pathname.startsWith('/es/') ? 'es' : defaultLang;
}

/** Caminho localizado: localePath('es', '/blog') => '/es/blog'. */
export function localePath(lang: Lang, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? '/es/' : `/es${clean}`;
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'es' ? 'es' : 'pt-BR', {
    day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC',
  }).format(date);
}
