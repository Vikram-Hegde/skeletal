/**
 * GitHub Pages SPA fallback.
 *
 * GitHub Pages has no `not_found_handling: single-page-application` like Cloudflare.
 * For client-side routing (TanStack Router) to work on deep links, `404.html`
 * must be an exact copy of `index.html` so the router can boot, and `.nojekyll`
 * must exist so files like `_assets` aren't ignored by Jekyll.
 * Runs as the tail of `pnpm run build:docs`.
 */
import { copyFileSync, existsSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = "playground/dist";
const index = join(outDir, "index.html");
const fallback = join(outDir, "404.html");
const nojekyll = join(outDir, ".nojekyll");

if (!existsSync(index)) {
  console.error(`gh-pages-spa: ${index} not found — run \`vite build\` first`);
  process.exit(1);
}

copyFileSync(index, fallback);
console.log(`gh-pages-spa: copied ${index} → ${fallback}`);

if (!existsSync(nojekyll)) {
  writeFileSync(nojekyll, "", "utf8");
  console.log(`gh-pages-spa: wrote ${nojekyll}`);
}
