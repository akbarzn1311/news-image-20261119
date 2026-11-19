// news-image-20261119 — deterministic entry program (Node 22, no dependencies, no network).
// Copies the pre-rendered poster (entry.png, 1024x1024) to /output/entry.png.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const source = join(repoRoot, "entry.png");
const outputDir = "/output";
const target = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, target);
console.log(`Wrote ${target}`);
