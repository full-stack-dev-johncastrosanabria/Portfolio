import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { trackScrollProgress } from '@/lib/scrollProgress';

export function ScrollProgress() {
  const bar = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (bar.current) return trackScrollProgress(bar.current);
  }, [pathname]);

  return <div ref={bar} className="scroll-progress" aria-hidden="true" />;
}
