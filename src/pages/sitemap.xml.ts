import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../config/site';
import { localePath, htmlLang } from '../i18n/utils';
import type { Lang } from '../i18n/ui';

// Sitemap próprio (o @astrojs/sitemap não aceita o código es-419).
const langs: Lang[] = ['pt-br', 'es', 'en'];
const staticPaths = ['/', '/blog/', '/eventos/', '/dodgeball/'];
const abs = (p: string) => new URL(p, site.url).href;

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', (p) => !p.data.draft)).map((p) => {
    const [lang, ...rest] = p.id.split('/');
    return { lang: lang as Lang, slug: rest.join('/'), date: p.data.updated ?? p.data.date };
  });
  const slugs = [...new Set(posts.map((p) => p.slug))];
  const entries: { path: string; date?: Date; has: (l: Lang) => boolean }[] = [
    ...staticPaths.map((path) => ({ path, has: () => true })),
    ...slugs.map((slug) => ({
      path: `/blog/${slug}/`,
      date: posts.find((p) => p.slug === slug)!.date,
      has: (l: Lang) => posts.some((p) => p.slug === slug && p.lang === l),
    })),
  ];
  const urls = entries.flatMap((e) =>
    langs.filter(e.has).map((l) => {
      const alts = langs.filter(e.has).map((a) => `    <xhtml:link rel="alternate" hreflang="${htmlLang(a)}" href="${abs(localePath(a, e.path))}"/>`);
      if (e.has('pt-br')) alts.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(localePath('pt-br', e.path))}"/>`);
      return `  <url>\n    <loc>${abs(localePath(l, e.path))}</loc>\n${e.date ? `    <lastmod>${e.date.toISOString().slice(0, 10)}</lastmod>\n` : ''}${alts.join('\n')}\n  </url>`;
    }),
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
