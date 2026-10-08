import assert from 'node:assert/strict';
import { Buffer } from 'node:buffer';
import console from 'node:console';
import { resolve } from 'node:path';
import { build } from 'vite';

const bundle = await build({
  configFile: false,
  resolve: { alias: { '@': resolve('src') } },
  build: { ssr: 'src/data/professionalProfile.ts', write: false },
  logLevel: 'error',
});
const chunk = bundle.output.find((item) => item.type === 'chunk' && item.isEntry);
const { professionalProfile: profile } = await import(`data:text/javascript;base64,${Buffer.from(chunk.code).toString('base64')}`);
assert.equal(profile.email, 'castrosanabriajohn@gmail.com');
assert.equal(profile.links.x, 'https://x.com/JohnCS97');
assert.equal(profile.links.portfolio, 'https://full-stack-dev-johncastrosanabria.github.io/Portfolio/');
for (let index = 1; index < profile.experience.length; index++) {
  assert.ok(profile.experience[index - 1].startDate >= profile.experience[index].startDate);
}
const preSales = profile.experience.find((item) => item.startDate.startsWith('2025-10'));
const internship = profile.experience.find((item) => item.startDate.startsWith('2022-05'));
assert.equal(preSales.endDate, '2026-03-31');
assert.equal(internship.endDate, '2022-10-31');
for (const language of ['es', 'en']) {
  assert.match(preSales.achievements[language].join(' '), /15/);
  assert.match(profile.title[language], /Fintech & Agentic AI/);
  assert.match(profile.summary[language], /LangGraph, RAG, MCP/);
  for (const item of profile.experience) assert.ok(item.achievements[language].length > 0);
}
assert.match(profile.education[0].degree.en, /Licentiate.*post-bachelor/);
assert.match(profile.credentials.en, /DP-800.*in preparation, not an earned certification/);
console.log('PASS: bilingual profile, confirmed dates, achievements, chronological order, contact links and credential status');
