import { ui, defaultLang, type Lang, type UiKey } from './ui';
import { site } from '../config/site';

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

/** Endereço de cada página fixa por idioma (o slug pode ser traduzido). */
export const pageRoutes = {
  blog: { 'pt-br': '/blog/', es: '/blog/', en: '/blog/' },
} as const;
export type PageKey = keyof typeof pageRoutes;

/** URL localizada de uma página fixa: pagePath('en', 'blog') => '/en/blog/'. */
export function pagePath(lang: Lang, page: PageKey): string {
  return localePath(lang, pageRoutes[page][lang]);
}

/** Slug de cada post citado em páginas fixas (traduzido por idioma). */
export const postSlugs = {
  dodgeball: { 'pt-br': 'o-que-e-dodgeball-no-tf2', es: 'que-es-dodgeball-en-tf2', en: 'what-is-tf2-dodgeball' },
  zombieInfection: { 'pt-br': 'o-que-e-zombie-infection-no-tf2', es: 'que-es-zombie-infection-en-tf2', en: 'what-is-tf2-zombie-infection' },
  mge: { 'pt-br': 'o-que-e-mge-no-tf2', es: 'que-es-mge-en-tf2', en: 'what-is-tf2-mge' },
  ff2: { 'pt-br': 'o-que-e-freak-fortress-2-no-tf2', es: 'que-es-freak-fortress-2-en-tf2', en: 'what-is-tf2-freak-fortress-2' },
} as const;

/** URL localizada de um post: postPath('es', 'dodgeball') => '/es/blog/que-es-dodgeball-en-tf2/'. */
export function postPath(lang: Lang, post: keyof typeof postSlugs): string {
  return localePath(lang, `/blog/${postSlugs[post][lang]}`);
}

/** Troca {classic}, {dodgeball}, {mge}, {zi} e {l4d2} pelo IP:porta de cada servidor (os IPs ficam só em site.ts). */
export function fillIps(text: string): string {
  return text.replaceAll('{classic}', site.servers.classic.ip).replaceAll('{dodgeball}', site.servers.dodgeball.ip).replaceAll('{mge}', site.servers.mge.ip).replaceAll('{zi}', site.servers.zombieInfection.ip).replaceAll('{l4d2}', site.servers.l4d2.ip);
}

/** Perguntas do FAQ (página inicial e dados estruturados), com os IPs já preenchidos. */
export function faqItems(lang: Lang) {
  const t = useT(lang);
  return ([1, 2, 3, 4, 5, 6, 8, 7] as const).map((n) => ({
    n,
    q: t(`faq.${n}.q` as const),
    a: fillIps(t(`faq.${n}.a` as const)),
  }));
}
