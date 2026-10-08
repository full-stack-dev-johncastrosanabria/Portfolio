export const CAROUSEL_TRANSITION_MS = 800;
const GESTURE_IDLE_MS = 200;
const NAVIGATION_COOLDOWN_MS = CAROUSEL_TRANSITION_MS + 150;
const INTENT_THRESHOLD_PX = 40;

type WheelInput = Pick<WheelEvent, 'deltaX' | 'deltaY' | 'deltaMode'>;

// A wheel gesture may include many momentum events; consume it only once.
export function createCarouselWheelNavigator() {
  let previousEventAt = -Infinity;
  let previousNavigationAt = -Infinity;
  let accumulated = 0;
  let consumed = false;

  return (event: WheelInput, now: number, pageSize: number): -1 | 0 | 1 => {
    const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
    if (!Number.isFinite(delta) || delta === 0) return 0;

    if (now - previousEventAt > GESTURE_IDLE_MS) {
      accumulated = 0;
      consumed = false;
    }
    previousEventAt = now;
    if (consumed || now - previousNavigationAt < NAVIGATION_COOLDOWN_MS) return 0;

    let unit = 1;
    if (event.deltaMode === 1) unit = 16;
    else if (event.deltaMode === 2) unit = Math.max(1, pageSize);
    accumulated += delta * unit;
    if (Math.abs(accumulated) < INTENT_THRESHOLD_PX) return 0;

    consumed = true;
    previousNavigationAt = now;
    accumulated = 0;
    return delta > 0 ? 1 : -1;
  };
}
