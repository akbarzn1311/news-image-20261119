// news-image-20261119 — entry program (Node 22, no dependencies, no network).
// Copies the pre-rendered front page (entry.png, in this repo) to
// /output/entry.png. Deterministic by construction: a plain file copy,
// no timestamps, no randomness, no network.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = dirname(fileURLToPath(import.meta.url));
const source = join(repoRoot, 'entry.png');
const outDir = '/output';
const dest = join(outDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(source, dest);
console.log(`wrote ${dest}`);
