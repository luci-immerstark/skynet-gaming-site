import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../config/site';
import { localePath, htmlLang, pageRoutes } from '../i18n/utils';
import type { Lang } from '../i18n/ui';

// Sitemap próprio (o @astrojs/sitemap não aceita o código es-419).
// Páginas listadas em site.paginasProvisorias ficam de fora (estão com noindex).
const langs: Lang[] = ['pt-br', 'es', 'en'];
const abs = (p: string) => new URL(p, site.url).href;

type Entry = { paths: Partial<Record<Lang, string>>; date?: Date };

export const GET: APIRoute = async () => {
  const entries: Entry[] = [
    { paths: { 'pt-br': '/', es: '/', en: '/' } },
    ...(Object.entries(pageRoutes) as [string, Record<Lang, string>][])
      .filter(([key]) => !site.paginasProvisorias.includes(key))
      .map(([, paths]) => ({ paths })),
  ];
  // Posts: um item por translationKey, com o slug de cada idioma.
  const byKey = new Map<string, Entry>();
  for (const p of await getCollection('blog', (p) => !p.data.draft)) {
    const [lang, ...rest] = p.id.split('/');
    const e = byKey.get(p.data.translationKey) ?? { paths: {} };
    e.paths[lang as Lang] = `/blog/${rest.join('/')}/`;
    const d = p.data.updated ?? p.data.date;
    if (!e.date || d > e.date) e.date = d;
    byKey.set(p.data.translationKey, e);
  }
  entries.push(...byKey.values());

  const urls = entries.flatMap((e) => {
    const have = langs.filter((l) => e.paths[l]);
    const alts = have.map((a) => `    <xhtml:link rel="alternate" hreflang="${htmlLang(a)}" href="${abs(localePath(a, e.paths[a]!))}"/>`);
    if (e.paths['pt-br']) alts.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(localePath('pt-br', e.paths['pt-br']))}"/>`);
    return have.map((l) =>
      `  <url>\n    <loc>${abs(localePath(l, e.paths[l]!))}</loc>\n${e.date ? `    <lastmod>${e.date.toISOString().slice(0, 10)}</lastmod>\n` : ''}${alts.join('\n')}\n  </url>`,
    );
  });
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
