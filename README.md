# SKYNET GAMING BRASIL — site oficial

Site estático (Astro + TypeScript) em português (`/`) e espanhol (`/es/`). Pronto para Cloudflare Pages (veja `DEPLOY.md`).

## Rodar localmente
Requer Node 22 (`nvm use`).
```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # checa tipos e gera dist/
npm run preview  # serve o dist/
```
Para testar as fases do evento, em desenvolvimento abra `/?fase=antes`, `/?fase=durante` ou `/?fase=depois`.

## Novo post no blog
Crie um arquivo `.md` em `src/content/blog/pt-br/` e outro com o mesmo nome em `src/content/blog/es/`:
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
O nome do arquivo vira a URL (`/blog/nome-do-arquivo`).

## Trocar o evento
Edite o bloco `event` em `src/config/site.ts`: `enabled` (esconde o banner), `start`/`end` (ISO com `-03:00`) e os textos de cada idioma (`text`). Textos fixos do banner (Começa em / Termina em…) ficam em `src/i18n/ui.ts`.

## Trocar imagens e logo
As imagens estão em `src/assets/img/`. Substitua o arquivo mantendo o mesmo nome (`logo-robo.png`, `hero-bg.jpg`, `og-banner.jpg`, `card-*.jpg`). O logo definitivo substitui `logo-robo.png` (use PNG quadrado, ≥ 512 px): ele alimenta hero, cabeçalho, rodapé e favicon automaticamente.

## Trocar o link do Discord (e outros links/IP)
`discordUrl` em `src/config/site.ts` (também `steamGroupUrl`, `rankingUrl`, `sourcebansUrl`, `serverIp`).
