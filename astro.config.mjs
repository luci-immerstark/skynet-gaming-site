import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://skynet-tf2.com.br',
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  build: { inlineStylesheets: 'never' },
  vite: { build: { assetsInlineLimit: 0 } }, // scripts sempre em arquivo (CSP sem 'unsafe-inline')
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'pt-br', locales: { 'pt-br': 'pt-BR', es: 'es' } },
    }),
  ],
});
