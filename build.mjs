import { build } from 'esbuild';
import { statSync } from 'node:fs';

await build({
  entryPoints: ['src/main.js'],
  bundle: true,
  outfile: 'game.bundle.js',
  format: 'iife',
  platform: 'browser',
  target: ['es2020'],
  minify: true,
  legalComments: 'none',
  logLevel: 'warning'
});

const kb = (statSync('game.bundle.js').size / 1024).toFixed(0);
console.log(`build ok -> game.bundle.js (${kb} KB)`);
