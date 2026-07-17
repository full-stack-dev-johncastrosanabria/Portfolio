import {
  Children,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent,
  type ReactNode,
} from 'react';

interface CarouselProps {
  label: string;
  children: ReactNode;
  autoPlayInterval?: number;
  prevLabel?: string;
  nextLabel?: string;
  goToLabel?: string;
}

const COPIES = 3;

export function Carousel({
  label,
  children,
  autoPlayInterval = 4500,
  prevLabel = 'Anterior',
  nextLabel = 'Siguiente',
  goToLabel = 'Ir al elemento',
}: CarouselProps) {
  const slides = useMemo(() => Children.toArray(children), [children]);
  const count = slides.length;
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const dragState = useRef<{ startX: number; startScroll: number; dragging: boolean }>({
    startX: 0,
    startScroll: 0,
    dragging: false,
  });
  const settleTimer = useRef<number>(0);

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const slideStep = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.children.length < 2) {
      return track?.clientWidth ?? 0;
    }
    const first = track.children[0] as HTMLElement;
    const second = track.children[1] as HTMLElement;
    return second.offsetLeft - first.offsetLeft;
  }, []);

  const setWidth = useCallback(() => {
    const track = trackRef.current;
    return track ? track.scrollWidth / COPIES : 0;
  }, []);

  // Start in the middle copy so both directions can loop.
  useEffect(() => {
    const track = trackRef.current;
    if (!track || count === 0) {
      return;
    }
    track.scrollTo({ left: setWidth(), behavior: 'instant' as ScrollBehavior });
  }, [count, setWidth]);

  const normalizeLoop = useCallback(() => {
    const track = trackRef.current;
    if (!track || count === 0) {
      return;
    }
    const width = setWidth();
    if (width === 0) {
      return;
    }
    if (track.scrollLeft < width * 0.5) {
      track.scrollTo({ left: track.scrollLeft + width, behavior: 'instant' as ScrollBehavior });
    } else if (track.scrollLeft > width * 1.5) {
      track.scrollTo({ left: track.scrollLeft - width, behavior: 'instant' as ScrollBehavior });
    }
    // Restore snapping once programmatic smooth scrolling has settled.
    track.style.scrollSnapType = '';
  }, [count, setWidth]);

  // Chromium cancels smooth programmatic scrolls inside mandatory snap
  // containers, so snapping is suspended for the duration of the animation.
  const smoothScrollTo = useCallback(
    (left: number) => {
      const track = trackRef.current;
      if (!track) {
        return;
      }
      if (prefersReducedMotion) {
        track.scrollTo({ left, behavior: 'instant' as ScrollBehavior });
        return;
      }
      track.style.scrollSnapType = 'none';
      track.scrollTo({ left, behavior: 'smooth' });
    },
    [prefersReducedMotion],
  );

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track || count === 0) {
      return;
    }
    const step = slideStep();
    if (step > 0) {
      const index = Math.round(track.scrollLeft / step) % count;
      setActiveIndex(index < 0 ? index + count : index);
    }
    window.clearTimeout(settleTimer.current);
    settleTimer.current = window.setTimeout(normalizeLoop, 140);
  }, [count, normalizeLoop, slideStep]);

  const scrollBySlides = useCallback(
    (delta: number) => {
      const track = trackRef.current;
      if (!track) {
        return;
      }
      const step = slideStep();
      if (step === 0) {
        return;
      }
      smoothScrollTo(Math.round(track.scrollLeft / step) * step + step * delta);
    },
    [slideStep, smoothScrollTo],
  );

  const goToIndex = useCallback(
    (index: number) => {
      smoothScrollTo(setWidth() + slideStep() * index);
    },
    [setWidth, slideStep, smoothScrollTo],
  );

  // Autoplay: advance one slide, pause on hover/focus/drag or hidden tab.
  useEffect(() => {
    if (paused || prefersReducedMotion || count < 2) {
      return;
    }
    const timer = window.setInterval(() => {
      if (!document.hidden) {
        scrollBySlides(1);
      }
    }, autoPlayInterval);
    return () => window.clearInterval(timer);
  }, [autoPlayInterval, count, paused, prefersReducedMotion, scrollBySlides]);

  // Mouse-wheel support: translate vertical wheel into horizontal movement.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) {
      return;
    }
    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaX) >= Math.abs(event.deltaY)) {
        return;
      }
      event.preventDefault();
      track.scrollBy({ left: event.deltaY, behavior: 'auto' });
    };
    track.addEventListener('wheel', onWheel, { passive: false });
    return () => track.removeEventListener('wheel', onWheel);
  }, []);

  // Pointer drag for mouse; touch uses native scrolling.
  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') {
      return;
    }
    const track = trackRef.current;
    if (!track) {
      return;
    }
    dragState.current = { startX: event.clientX, startScroll: track.scrollLeft, dragging: true };
    track.setPointerCapture(event.pointerId);
    track.classList.add('carousel-dragging');
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !dragState.current.dragging) {
      return;
    }
    track.scrollLeft = dragState.current.startScroll - (event.clientX - dragState.current.startX);
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !dragState.current.dragging) {
      return;
    }
    dragState.current.dragging = false;
    track.classList.remove('carousel-dragging');
    track.releasePointerCapture(event.pointerId);
    const step = slideStep();
    if (step > 0) {
      smoothScrollTo(Math.round(track.scrollLeft / step) * step);
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      scrollBySlides(1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      scrollBySlides(-1);
    }
  };

  if (count === 0) {
    return null;
  }

  return (
    <div
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="carousel-track"
        ref={trackRef}
        tabIndex={0}
        onScroll={handleScroll}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        {Array.from({ length: COPIES }, (_, copy) =>
          slides.map((slide, index) => (
            <div
              className="carousel-slide"
              key={`copy-${copy}-slide-${index}`}
              aria-hidden={copy !== 1 || undefined}
            >
              {slide}
            </div>
          )),
        )}
      </div>

      <div className="carousel-controls">
        <button
          type="button"
          className="carousel-arrow"
          aria-label={prevLabel}
          onClick={() => scrollBySlides(-1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="m14.5 6.5-5 5.5 5 5.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="carousel-dots" role="tablist" aria-label={label}>
          {slides.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`${goToLabel} ${index + 1}`}
              className={index === activeIndex ? 'carousel-dot carousel-dot-active' : 'carousel-dot'}
              onClick={() => goToIndex(index)}
            />
          ))}
        </div>

        <button
          type="button"
          className="carousel-arrow"
          aria-label={nextLabel}
          onClick={() => scrollBySlides(1)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="m9.5 6.5 5 5.5-5 5.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
