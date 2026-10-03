// Renders the social share images into public/: og.png (editorial, for /) and
// og-new.png (teal, for /new). Run from the repo root: node scripts/og/render.mjs
// Pass --all to also dump every variation into scripts/og/out/ for comparison.
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import path from 'node:path';

const dir = path.dirname(new URL(import.meta.url).pathname);
const root = path.resolve(dir, '..', '..');
const tpl = `file://${dir}/template.html`;
const portrait = `file://${root}/public/portrait.jpg`;
const all = process.argv.includes('--all');

const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
const shoot = async (theme, v, file) => {
  await p.goto(`${tpl}?v=${v}&theme=${theme}&portrait=${encodeURIComponent(portrait)}`, { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(150);
  await p.screenshot({ path: file });
  console.log(path.relative(root, file));
};

await shoot('editorial', 1, `${root}/public/og.png`);
await shoot('teal', 1, `${root}/public/og-new.png`);

if (all) {
  const out = `${dir}/out`;
  mkdirSync(out, { recursive: true });
  for (const theme of ['editorial', 'teal']) for (const v of [1, 2, 3, 4, 5]) await shoot(theme, v, `${out}/${theme}-v${v}.png`);
}
await b.close();
