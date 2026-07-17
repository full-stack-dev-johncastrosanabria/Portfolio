import { useEffect, useRef } from 'react';

/**
 * Control-room "signal field": a lightweight canvas network of drifting nodes
 * that link when close and lean gently toward the cursor. Reads the live theme
 * accent (cyan) from CSS custom properties. Pauses off-screen and on hidden
 * tabs, caps device-pixel-ratio and node count for 60fps on mid-range devices,
 * and renders a single static frame under prefers-reduced-motion.
 */
export function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = 0;
    let height = 0;
    let nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    const pointer = { x: -9999, y: -9999, active: false };
    let rafId = 0;
    let running = false;

    const accent = () => {
      const v = getComputedStyle(canvas).getPropertyValue('--hero-node').trim();
      return v || '56, 189, 248';
    };
    let rgb = accent();

    const linkDist = () => Math.min(160, Math.max(110, width / 9));

    function resize() {
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.round(width * dpr);
      canvas!.height = Math.round(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Density scales with area, capped for performance.
      const target = Math.min(64, Math.round((width * height) / 16000));
      rgb = accent();
      nodes = Array.from({ length: target }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
      }));
    }

    function draw() {
      const dist = linkDist();
      ctx!.clearRect(0, 0, width, height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        if (pointer.active) {
          const dx = pointer.x - n.x;
          const dy = pointer.y - n.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 26000 && d2 > 1) {
            const f = 0.18 / Math.sqrt(d2);
            n.vx += dx * f * 0.02;
            n.vy += dy * f * 0.02;
          }
        }
        // Damp so cursor nudges never runaway.
        n.vx = Math.max(-0.6, Math.min(0.6, n.vx * 0.995));
        n.vy = Math.max(-0.6, Math.min(0.6, n.vy * 0.995));
      }

      // Links.
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < dist) {
            const o = (1 - d / dist) * 0.42;
            ctx!.strokeStyle = `rgba(${rgb}, ${o.toFixed(3)})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // Nodes with a soft lit glow — the "control-room monitor" read.
      ctx!.shadowBlur = 8;
      ctx!.shadowColor = `rgba(${rgb}, 0.9)`;
      ctx!.fillStyle = `rgba(${rgb}, 0.95)`;
      for (const n of nodes) {
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, 1.7, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.shadowBlur = 0;
    }

    function loop() {
      draw();
      rafId = requestAnimationFrame(loop);
    }

    function start() {
      if (running || reduceMotion) return;
      running = true;
      rafId = requestAnimationFrame(loop);
    }
    function stop() {
      running = false;
      cancelAnimationFrame(rafId);
    }

    resize();
    if (reduceMotion) {
      draw(); // single static frame
    } else {
      start();
    }

    const onResize = () => {
      resize();
      if (reduceMotion) draw();
    };
    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas!.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      pointer.active = x >= 0 && x <= rect.width && y >= 0 && y <= rect.height;
      pointer.x = x;
      pointer.y = y;
    };
    const onPointerLeave = () => {
      pointer.active = false;
    };
    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) start();
        else stop();
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    window.addEventListener('resize', onResize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('blur', onPointerLeave);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('blur', onPointerLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}
