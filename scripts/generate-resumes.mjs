import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';
import { build } from 'vite';
import { Buffer } from 'node:buffer';
import process from 'node:process';

const bundle = await build({
  configFile: false,
  resolve: { alias: { '@': resolve('src') } },
  build: { ssr: 'src/data/professionalProfile.ts', write: false, minify: false },
  logLevel: 'error',
});
const chunk = bundle.output.find((item) => item.type === 'chunk' && item.isEntry);
if (!chunk) throw new Error('Professional profile bundle was not generated.');
const { professionalProfile } = await import(`data:text/javascript;base64,${Buffer.from(chunk.code).toString('base64')}`);
const python = process.env.PYTHON_BIN || 'python3';
const result = spawnSync(python, ['scripts/generate_resumes.py'], {
  input: JSON.stringify(professionalProfile), encoding: 'utf8', stdio: ['pipe', 'inherit', 'inherit'],
});
if (result.error) throw result.error;
if (result.status !== 0) process.exitCode = result.status || 1;
