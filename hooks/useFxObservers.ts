import { useEffect } from 'react';

// One-time global initialisers: IntersectionObserver for .reveal and 3D tilt for .tilt-3d
export const useFxObservers = (dep?: unknown) => {
  useEffect(() => {
    // Reveal-on-scroll
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

    // 3D tilt (pointer)
    const tilts = Array.from(document.querySelectorAll<HTMLElement>('.tilt-3d'));
    const handlers: Array<{ el: HTMLElement; move: (e: PointerEvent) => void; leave: () => void }> = [];
    tilts.forEach((el) => {
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        const rx = (-y * 10).toFixed(2);
        const ry = (x * 12).toFixed(2);
        el.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
      };
      const leave = () => {
        el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)';
      };
      el.addEventListener('pointermove', move);
      el.addEventListener('pointerleave', leave);
      handlers.push({ el, move, leave });
    });

    return () => {
      io.disconnect();
      handlers.forEach(({ el, move, leave }) => {
        el.removeEventListener('pointermove', move);
        el.removeEventListener('pointerleave', leave);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dep]);
};
