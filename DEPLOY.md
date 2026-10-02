# Publicar no Cloudflare Workers (Static Assets)

O site é 100% estático e é servido pelo Cloudflare Workers com Static Assets. A configuração está em `wrangler.jsonc` (pasta `dist`, página 404 própria). Os cabeçalhos de segurança e o cache vêm de `public/_headers`, que o Workers Static Assets aplica normalmente. Você faz estes passos no painel do Cloudflare; nada aqui altera sua conta ou o DNS automaticamente.

## 1. Conectar o repositório (builds automáticos a cada push na `main`)
1. https://dash.cloudflare.com → **Workers & Pages** → **Create application** → **Import a repository** (Connect to Git).
2. Autorize o GitHub e escolha **skynet-gaming-site**. O nome do projeto/Worker precisa ser `skynet-gaming-site`, igual ao `name` do `wrangler.jsonc`.
3. Branch de produção: `main`.

## 2. Configurar o build
| Campo | Valor |
|---|---|
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Variável de ambiente | `NODE_VERSION` = `22` (o `.nvmrc` também fixa o Node 22) |

Salve e faça o deploy. O primeiro endereço fica em `skynet-gaming-site.<sua-conta>.workers.dev`.

## 3. Domínios personalizados
1. No Worker **skynet-gaming-site**: **Settings → Domains & Routes → Add → Custom domain**.
2. Adicione `skynet-tf2.com.br` (domínio raiz). Se o DNS da zona está no Cloudflare, o registro é criado automaticamente.
3. Adicione também `www.skynet-tf2.com.br` como Custom domain.
4. **Redirecionar www → raiz**: na zona `skynet-tf2.com.br`, vá em **Rules → Redirect Rules** e crie uma regra:
   - Quando: *Hostname* é igual a `www.skynet-tf2.com.br`
   - Então: *Dynamic redirect* para `concat("https://skynet-tf2.com.br", http.request.uri.path)`, status **301**, preservando a query string.

Os subdomínios `stats.`, `bans.` e `play.` não são afetados.

## 4. Conferir depois do deploy
- `https://skynet-tf2.com.br/`, `/es/`, `/en/`, `/sitemap-index.xml` e `/robots.txt`.
- Uma URL inexistente (ex.: `/xyz`) deve mostrar a página 404 do site, com status 404.
- Os cabeçalhos (CSP, `X-Content-Type-Options` etc.) aparecem na resposta e `/_astro/*` vem com cache de 1 ano.

## Testar localmente antes de publicar
```bash
npm run build
npx wrangler deploy --dry-run   # valida a configuração sem publicar
npx wrangler dev                # serve dist/ localmente com os mesmos cabeçalhos
```
Para publicar manualmente (opcional): `npx wrangler login` e depois `npx wrangler deploy`.
