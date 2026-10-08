import assert from 'node:assert/strict';
import { build } from 'vite';
import { Buffer } from 'node:buffer';
import console from 'node:console';

const result = await build({ configFile: false, build: { ssr: 'src/lib/scrollProgress.ts', write: false }, logLevel: 'error' });
const chunk = result.output.find((item) => item.type === 'chunk' && item.isEntry);
const { trackScrollProgress } = await import(`data:text/javascript;base64,${Buffer.from(chunk.code).toString('base64')}`);
let height = 2000;
let measurements = 0;
let callback;
let disconnected = false;
let id = 0;
const frames = new Map();
const listeners = new Map();
globalThis.window = {
  innerHeight: 1000, scrollY: 0,
  requestAnimationFrame(fn) { frames.set(++id, fn); return id; },
  cancelAnimationFrame(key) { frames.delete(key); },
  addEventListener(name, fn, options) { assert.equal(options.passive, true); listeners.set(name, fn); },
  removeEventListener(name) { listeners.delete(name); },
};
const view = globalThis.window;
globalThis.document = {
  body: {},
  documentElement: { get scrollHeight() { measurements++; return height; } },
  addEventListener(name, fn) { listeners.set(name, fn); },
  removeEventListener(name) { listeners.delete(name); },
};
globalThis.ResizeObserver = class {
  constructor(fn) { callback = fn; }
  observe() {}
  disconnect() { disconnected = true; }
};
function flush() { const work = [...frames.values()]; frames.clear(); work.forEach((fn) => fn()); }
const bar = { style: {} };
const stop = trackScrollProgress(bar);
flush();
assert.equal(bar.style.transform, 'scaleX(0)');
view.scrollY = 500;
for (let i = 0; i < 100; i++) listeners.get('scroll')();
assert.equal(frames.size, 1, 'scroll bursts must schedule a single frame');
flush();
assert.equal(bar.style.transform, 'scaleX(0.5)');
assert.equal(measurements, 1, 'scrolling must not re-read layout');
view.scrollY = 1500;
listeners.get('scroll')(); flush();
assert.equal(bar.style.transform, 'scaleX(1)');
height = 4000; callback(); flush();
assert.equal(bar.style.transform, 'scaleX(0.5)', 'dynamic content invalidates the range');
view.innerHeight = 2000; listeners.get('resize')(); flush();
assert.equal(bar.style.transform, 'scaleX(0.75)');
view.scrollY = -20; listeners.get('scroll')(); flush();
assert.equal(bar.style.transform, 'scaleX(0)');
height = 500; callback(); flush();
assert.equal(bar.style.transform, 'scaleX(0)', 'short documents must never produce NaN');
listeners.get('load')();
stop();
assert.equal(frames.size, 0);
assert.equal(listeners.size, 0);
assert.equal(disconnected, true);
console.log('PASS: coalescing, cached layout, clamp, resize, content changes, short pages and cleanup');
