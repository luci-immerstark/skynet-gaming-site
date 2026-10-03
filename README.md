# SKYNET GAMING BRASIL — site oficial

Site estático (Astro + TypeScript) em português (`/`), espanhol (`/es/`) e inglês (`/en/`). Pronto para Cloudflare Pages (veja `DEPLOY.md`).

## Rodar localmente
Requer Node 22 (`nvm use`).
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # checa tipos e gera dist/
npm run preview  # serve o dist/
```
Para testar as fases do evento, em desenvolvimento abra `/?fase=antes`, `/?fase=durante` ou `/?fase=depois`.

## Novo post no blog (pt-br, es e en)
Crie um arquivo `.md` em cada pasta: `src/content/blog/pt-br/`, `src/content/blog/es/` e `src/content/blog/en/`. O **nome do arquivo é o endereço** de cada idioma e pode ser traduzido (`/blog/bem-vindos/`, `/es/blog/bienvenidos/`, `/en/blog/welcome/`). As três versões são ligadas pelo mesmo `translationKey` no frontmatter, que o seletor de idioma e as tags hreflang usam. Se faltar uma tradução, o seletor leva para a listagem do blog daquele idioma. Ao renomear um post já publicado, adicione um 301 em `public/_redirects`.
```md
---
translationKey: "chave-unica-do-post"   # igual nos 3 idiomas
title: "Título do post"
seoTitle: "Título para o Google (até ~60 caracteres)"   # opcional
description: "Resumo exibido na listagem e no Google (até ~155 caracteres)"
date: 2026-11-05
cover: ../../../assets/img/minha-capa.jpg   # opcional
draft: false                                # true = não aparece
---

Texto em Markdown.
```
Qualquer `` `connect IP:porta` `` em código inline ganha automaticamente um botão "Copiar" ao lado.

## Adicionar ou editar textos da interface
Todos os textos ficam em `src/i18n/ui.ts`; o TypeScript exige as mesmas chaves em `pt-br`, `es` e `en`. As regras do servidor são as chaves `rules.*`. A data "Servidor online desde" vem de `launchDate` em `src/config/site.ts`.

## Trocar o evento
Edite o bloco `event` em `src/config/site.ts`: `enabled` (esconde o banner), `start`/`end` (ISO com `-03:00`) e os textos de cada idioma — pt-br, es e en — (`text`). Textos fixos do banner (Começa em / Termina em…) ficam em `src/i18n/ui.ts`.

## Trocar imagens e logo
As imagens estão em `src/assets/img/`. Substitua o arquivo mantendo o mesmo nome (`logo-robo.png`, `hero-bg.jpg`, `og-banner.jpg`, `card-*.jpg`). O logo definitivo substitui `logo-robo.png` (use PNG quadrado, ≥ 512 px): ele alimenta hero, cabeçalho, rodapé e favicon automaticamente.

## Trocar o link do Discord (e outros links/IP)
`discordUrl` em `src/config/site.ts` (também `steamGroupUrl`, `rankingUrl`, `sourcebansUrl`, `serverIp`).

## SEO, analytics e sitemap
- Idiomas no HTML/hreflang: `pt-BR`, `es-419` e `en` (URLs `/`, `/es/`, `/en/`). Títulos e descrições das páginas ficam em `src/i18n/ui.ts` (`meta.*`); os de posts, no frontmatter.
- Dados estruturados (JSON-LD): Organization em todas as páginas; WebSite, Event (gerado de `site.event`) e FAQPage na inicial; BlogPosting nos posts.
- O sitemap é gerado por `src/pages/sitemap.xml.ts` (o plugin oficial não aceita `es-419`) e está referenciado em `public/robots.txt`.
- Cloudflare Web Analytics: preencha `analyticsToken` em `src/config/site.ts`. Vazio = nenhum script. A CSP em `public/_headers` já permite o script.

## Páginas provisórias (noindex)
`paginasProvisorias` em `src/config/site.ts` lista as páginas sem conteúdo real (hoje `eventos` e `dodgeball`). Elas recebem `noindex, follow` e ficam fora do sitemap. Quando uma página ganhar conteúdo, remova a chave da lista: ela volta a ser indexada e entra no sitemap. Os endereços fixos de cada idioma estão em `pageRoutes` (`src/i18n/utils.ts`), por exemplo `/en/events/`.
