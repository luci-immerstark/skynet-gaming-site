# Deploying to Cloudflare Workers (Static Assets)

The site is 100% static and is served by Cloudflare Workers with Static Assets. The configuration is in `wrangler.jsonc` (`dist` folder, custom 404 page). Security headers and caching come from `public/_headers`, which Workers Static Assets applies as usual. You do these steps in the Cloudflare dashboard; nothing here changes your account or DNS automatically.

## 1. Connect the repository (automatic builds on every push to `main`)
1. https://dash.cloudflare.com → **Workers & Pages** → **Create application** → **Import a repository** (Connect to Git).
2. Authorize GitHub and pick **skynet-gaming-site**. The project/Worker name must be `skynet-gaming-site`, the same as `name` in `wrangler.jsonc`.
3. Production branch: `main`.

## 2. Configure the build
| Field | Value |
|---|---|
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Environment variable | `NODE_VERSION` = `22` (`.nvmrc` also pins Node 22) |

Save and deploy. The first address is `skynet-gaming-site.<your-account>.workers.dev`.

## 3. Custom domains
1. In the **skynet-gaming-site** Worker: **Settings → Domains & Routes → Add → Custom domain**.
2. Add `skynet-tf2.com.br` (root domain). If the zone's DNS is on Cloudflare, the record is created automatically.
3. Also add `www.skynet-tf2.com.br` as a Custom domain.
4. **Redirect www → root**: in the `skynet-tf2.com.br` zone, go to **Rules → Redirect Rules** and create a rule:
   - When: *Hostname* equals `www.skynet-tf2.com.br`
   - Then: *Dynamic redirect* to `concat("https://skynet-tf2.com.br", http.request.uri.path)`, status **301**, preserving the query string.

The `stats.`, `bans.` and `play.` subdomains are not affected.

## 4. Check after deploying
- `https://skynet-tf2.com.br/`, `/es/`, `/en/`, `/sitemap.xml` and `/robots.txt`.
- A missing URL (e.g. `/xyz`) must show the site's 404 page, with status 404.
- The headers (CSP, `X-Content-Type-Options` etc.) show up in the response and `/_astro/*` comes with a 1-year cache.

## Testing locally before publishing
```bash
npm run build
npx wrangler deploy --dry-run   # validates the configuration without publishing
npx wrangler dev                # serves dist/ locally with the same headers
```
To publish manually (optional): `npx wrangler login` and then `npx wrangler deploy`.
