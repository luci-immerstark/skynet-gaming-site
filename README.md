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
Crie **um arquivo `.md` com o mesmo nome** em cada pasta: `src/content/blog/pt-br/`, `src/content/blog/es/` e `src/content/blog/en/`. O nome do arquivo vira a URL (`/blog/nome`, `/es/blog/nome`, `/en/blog/nome`) e é o que liga as três versões no seletor de idioma. Se faltar uma tradução, o seletor leva para a listagem do blog daquele idioma.
```md
---
title: "Título do post"
description: "Resumo exibido na listagem"
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
