# Publicar no Cloudflare Pages

Você faz estes passos no painel do Cloudflare (nada aqui altera sua conta ou o DNS automaticamente).

## 1. Conectar o repositório
1. Acesse https://dash.cloudflare.com → **Workers & Pages** → **Create** → aba **Pages** → **Connect to Git**.
2. Autorize o GitHub e escolha o repositório **skynet-gaming-site**.
3. Branch de produção: `main`.

## 2. Configurar o build
| Campo | Valor |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Variável de ambiente | `NODE_VERSION` = `22` (o `.nvmrc` também fixa o Node 22) |

Clique em **Save and Deploy**. O primeiro deploy ficará em `skynet-gaming-site.pages.dev`.

## 3. Domínios personalizados
1. No projeto: **Custom domains** → **Set up a custom domain**.
2. Adicione `skynet-tf2.com.br` (domínio raiz) e siga o assistente (se o DNS está no Cloudflare, os registros são criados por você com um clique).
3. Adicione também `www.skynet-tf2.com.br`.
4. **Redirecionar www → raiz**: em **Rules → Redirect Rules** da zona `skynet-tf2.com.br`, crie uma regra:
   - Quando: *Hostname* é igual a `www.skynet-tf2.com.br`
   - Então: *Dynamic redirect* para `concat("https://skynet-tf2.com.br", http.request.uri.path)`, status **301**, preservando a query string.
   - O registro DNS de `www` precisa existir e estar com proxy (nuvem laranja) para a regra funcionar.

Os subdomínios `stats.`, `bans.` e `play.` não são afetados.

## 4. Depois do deploy
- Confira `https://skynet-tf2.com.br/`, `/es/`, `/sitemap-index.xml` e `/robots.txt`.
- Os cabeçalhos de segurança e o cache vêm de `public/_headers`.
