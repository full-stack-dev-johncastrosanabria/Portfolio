import assert from 'node:assert/strict';
import { Buffer } from 'node:buffer';
import console from 'node:console';
import { build } from 'vite';

const result = await build({ configFile: false, build: { ssr: 'src/lib/carouselWheel.ts', write: false }, logLevel: 'error' });
const chunk = result.output.find((item) => item.type === 'chunk' && item.isEntry);
const { createCarouselWheelNavigator, CAROUSEL_TRANSITION_MS } = await import(`data:text/javascript;base64,${Buffer.from(chunk.code).toString('base64')}`);
const wheel = (deltaY, deltaX = 0, deltaMode = 0) => ({ deltaX, deltaY, deltaMode });

assert.equal(CAROUSEL_TRANSITION_MS, 800);
let navigate = createCarouselWheelNavigator();
assert.equal(navigate(wheel(3000), 0, 400), 1, 'large wheel delta must advance only one card');
for (let now = 20; now <= 2000; now += 20) {
  assert.equal(navigate(wheel(1500), now, 400), 0, 'sustained wheel momentum must not queue more advances');
}
assert.equal(navigate(wheel(-1000), 2300, 400), -1, 'a new gesture can reverse direction');
assert.equal(navigate(wheel(1000), 2600, 400), 0, 'cooldown prevents rapid separate gestures');
assert.equal(navigate(wheel(1000), 3300, 400), 1);

navigate = createCarouselWheelNavigator();
assert.equal(navigate(wheel(10), 0, 400), 0);
assert.equal(navigate(wheel(10), 30, 400), 0);
assert.equal(navigate(wheel(10), 60, 400), 0);
assert.equal(navigate(wheel(10), 90, 400), 1, 'small trackpad deltas accumulate into a single intentional move');
assert.equal(navigate(wheel(10), 120, 400), 0);

navigate = createCarouselWheelNavigator();
assert.equal(navigate(wheel(0, -1200), 0, 400), -1, 'horizontal wheels use the same bounded navigation');
navigate = createCarouselWheelNavigator();
assert.equal(navigate(wheel(3, 0, 1), 0, 400), 1, 'line-mode wheel deltas are normalized');
navigate = createCarouselWheelNavigator();
assert.equal(navigate(wheel(-1, 0, 2), 0, 400), -1, 'page-mode wheel deltas are normalized');
navigate = createCarouselWheelNavigator();
assert.equal(navigate(wheel(20), 0, 400), 0);
assert.equal(navigate(wheel(20), 400, 400), 0, 'separate small gestures do not accumulate');
assert.equal(navigate(wheel(0), 450, 400), 0);
assert.equal(navigate(wheel(Number.NaN), 500, 400), 0);
assert.equal(navigate(wheel(Infinity), 550, 400), 0);
console.log('PASS: bounded wheel navigation, momentum, cooldown, reversal, trackpad, horizontal wheel and delta modes');
