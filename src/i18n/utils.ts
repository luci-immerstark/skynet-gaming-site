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
  // Sempre com barra final: é a URL final no Cloudflare (sem redirecionamento) e a canônica.
  let clean = path.startsWith('/') ? path : `/${path}`;
  if (!clean.endsWith('/')) clean += '/';
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
  return ({ 'pt-br': 'pt-BR', es: 'es-419', en: 'en' } as const)[lang];
}

/** Data de lançamento no formato de cada idioma: 02/10/2026, 02/10/2026, Oct 2, 2026. */
export function formatLaunch(iso: string, lang: Lang): string {
  const d = new Date(`${iso}T12:00:00Z`);
  const opts: Intl.DateTimeFormatOptions = lang === 'en'
    ? { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }
    : { day: '2-digit', month: '2-digit', year: 'numeric', timeZone: 'UTC' };
  return new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : lang === 'es' ? 'es-419' : 'pt-BR', opts).format(d);
}

/** Data longa no idioma da página: 2 de outubro de 2026 / 2 de octubre de 2026 / October 2, 2026. */
export function formatLong(date: Date | string, lang: Lang, timeZone = 'America/Sao_Paulo'): string {
  const d = typeof date === 'string' ? new Date(`${date}T12:00:00Z`) : date;
  return new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : lang === 'es' ? 'es-419' : 'pt-BR', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone,
  }).format(d);
}
