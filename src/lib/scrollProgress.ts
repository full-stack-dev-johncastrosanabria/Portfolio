export function trackScrollProgress(bar: HTMLElement) {
  let frame = 0;
  let scrollRange = 0;
  let needsMeasurement = true;

  const update = () => {
    frame = 0;
    if (needsMeasurement) {
      scrollRange = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      needsMeasurement = false;
    }
    const progress = scrollRange > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollRange)) : 0;
    bar.style.transform = `scaleX(${progress})`;
  };
  const schedule = () => {
    if (!frame) frame = window.requestAnimationFrame(update);
  };
  const measure = () => {
    needsMeasurement = true;
    schedule();
  };

  // Content changes invalidate the cached range; scrolling reads only scrollY.
  const observer = new ResizeObserver(measure);
  observer.observe(document.body);
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', measure, { passive: true });
  document.addEventListener('load', measure, true);
  schedule();

  return () => {
    observer.disconnect();
    window.removeEventListener('scroll', schedule);
    window.removeEventListener('resize', measure);
    document.removeEventListener('load', measure, true);
    window.cancelAnimationFrame(frame);
  };
}
