// Generates the icons and the share image from the SVGs in src/assets/img.
// Usage: npm run brand   (the PNGs are rasterized at high resolution and only scaled down, never up)
import sharp from 'sharp';
import { readFile, writeFile } from 'node:fs/promises';
import { optimize } from 'svgo';

const BG = '#0d0f12';
const IMG = 'src/assets/img/';
const SMALL = IMG + 'logo-pequeno-colorido.svg';
const WITH_NAME = IMG + 'logo-grande-colorido-nome-branco.svg';

/** Rasterizes the SVG at 2000 px and crops the transparent area: returns the tight drawing. */
async function art(file) {
  const png = await sharp(file, { density: 144 }).resize(2000, 2000).png().toBuffer();
  return sharp(png).trim().png().toBuffer();
}

/** Places the drawing (scaling down only) in the center of a `size` square, with width `w`. */
async function square(artBuf, size, w, background) {
  const resized = await sharp(artBuf).resize({ width: Math.round(w), kernel: 'lanczos3' }).png().toBuffer();
  const m = await sharp(resized).metadata();
  return sharp({ create: { width: size, height: size, channels: 4, background: background ?? { r: 0, g: 0, b: 0, alpha: 0 } } })
    .composite([{ input: resized, left: Math.round((size - m.width) / 2), top: Math.round((size - m.height) / 2) }])
    .png({ compressionLevel: 9 }).toBuffer();
}

/** Largest distance (px) from the center to a visible pixel: defines the maskable icon's safe zone. */
async function farthest(artBuf) {
  const small = sharp(artBuf).resize({ width: 500 });
  const { data, info } = await small.ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let max = 0;
  for (let y = 0; y < info.height; y++) for (let x = 0; x < info.width; x++) {
    if (data[(y * info.width + x) * 4 + 3] > 20) max = Math.max(max, Math.hypot(x + .5 - info.width / 2, y + .5 - info.height / 2));
  }
  return { max, width: info.width };
}

function ico(images) {
  const head = Buffer.alloc(6); head.writeUInt16LE(1, 2); head.writeUInt16LE(images.length, 4);
  let offset = 6 + 16 * images.length;
  const dir = images.map(({ size, buf }) => {
    const e = Buffer.alloc(16);
    e[0] = size; e[1] = size; e.writeUInt16LE(1, 4); e.writeUInt16LE(32, 6); e.writeUInt32LE(buf.length, 8); e.writeUInt32LE(offset, 12);
    offset += buf.length; return e;
  });
  return Buffer.concat([head, ...dir, ...images.map((i) => i.buf)]);
}

const a = await art(SMALL);

// favicon.svg: the small colored version's SVG, optimized (drawing already centered in the 1000x1000 square).
const svg = optimize(await readFile(SMALL, 'utf8'), { multipass: true, plugins: ['preset-default'] }).data;
await writeFile('public/favicon.svg', svg);

// favicon.ico: 16 (generated from the SVG), 32 and 48 (ready-made designer files, sharp and in the same style).
const f16 = await square(a, 16, 16);
await writeFile('public/favicon.ico', ico([
  { size: 16, buf: f16 },
  { size: 32, buf: await readFile('scripts/brand/favicon-32.png') },
  { size: 48, buf: await readFile('scripts/brand/favicon-48.png') },
]));

await writeFile('public/apple-touch-icon.png', await square(a, 180, 180 * 0.76, BG)); // ~12% margin on each side
await writeFile('public/icon-192.png', await square(a, 192, 192 * 0.92));
await writeFile('public/icon-512.png', await square(a, 512, 512 * 0.92));

// maskable: solid background and the drawing inside the safe circle (80% of the side).
const { max, width } = await farthest(a);
const safeW = (0.4 * 512 * width) / max * 0.98;
await writeFile('public/icon-maskable-512.png', await square(a, 512, safeW, BG));

await writeFile('public/manifest.webmanifest', JSON.stringify({
  name: 'SKYNET GAMING BRASIL', short_name: 'SKYNET', start_url: '/', display: 'standalone',
  theme_color: BG, background_color: BG,
  icons: [
    { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
    { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
    { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
  ],
}, null, 2) + '\n');

// Open Graph image 1200x630: darkened hero background + colored logo with white name.
const logo = await sharp(await art(WITH_NAME)).resize({ height: 430, kernel: 'lanczos3' }).png().toBuffer();
const lm = await sharp(logo).metadata();
const dark = await sharp({ create: { width: 1200, height: 630, channels: 4, background: { r: 13, g: 15, b: 18, alpha: 0.72 } } }).png().toBuffer();
await sharp(IMG + 'hero-bg.jpg').resize(1200, 630, { fit: 'cover', position: 'top' })
  .composite([{ input: dark }, { input: logo, left: Math.round((1200 - lm.width) / 2), top: Math.round((630 - lm.height) / 2) }])
  .jpeg({ quality: 88, mozjpeg: true }).toFile(IMG + 'og-image.jpg');
console.log('ok: favicon.svg/.ico, apple-touch-icon, icon-192/512, icon-maskable-512, manifest, og-image.jpg');
