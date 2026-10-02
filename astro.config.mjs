import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeConnectCopy from './src/plugins/rehype-connect-copy.mjs';

export default defineConfig({
  site: 'https://skynet-tf2.com.br',
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br', 'es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  markdown: { rehypePlugins: [rehypeConnectCopy] },
  build: { inlineStylesheets: 'never' },
  vite: { build: { assetsInlineLimit: 0 } }, // scripts sempre em arquivo (CSP sem 'unsafe-inline')
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'pt-br', locales: { 'pt-br': 'pt-BR', es: 'es', en: 'en' } },
    }),
  ],
});
