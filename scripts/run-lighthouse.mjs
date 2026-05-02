/**
 * Cross-platform Lighthouse runner (Chrome must be installed).
 * Usage: node ./scripts/run-lighthouse.mjs seo [url]
 *        node ./scripts/run-lighthouse.mjs all [url]
 *
 * Default URL: LIGHTHOUSE_URL env → https://viilasa.com
 *
 * Invokes local `lighthouse` via Node (avoid `npx` on Windows + shell:false EINVAL).
 */

import { spawnSync } from "node:child_process";
import { createRequire } from "node:module";
import process from "node:process";

const mode = process.argv[2] || "seo";
const argUrl = process.argv[3]?.trim();
const url =
  argUrl ||
  process.env.LIGHTHOUSE_URL?.trim() ||
  "https://viilasa.com";

const outFile =
  mode === "all" ? "lighthouse-report.html" : `lighthouse-${mode}.html`;

const require = createRequire(import.meta.url);
const lighthouseCli = require.resolve("lighthouse/cli/index.js");

const args = [
  lighthouseCli,
  url,
  "--output=html",
  `--output-path=./${outFile}`,
  "--preset=desktop",
  "--quiet",
  "--chrome-flags=--headless=new",
];

if (mode !== "all") {
  args.push(`--only-categories=${mode}`);
}

const res = spawnSync(process.execPath, args, { stdio: "inherit" });

if (res.error) {
  console.error(res.error);
  process.exit(1);
}

process.exit(res.status ?? 1);
