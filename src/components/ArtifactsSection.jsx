import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ARTIFACTS, WORK_ORDER } from '../data/artifacts';
import ArtifactCard from './ArtifactCard';

const AUTOPLAY_MS = 3000;
// After someone swipes, scrolls or clicks the arrows, wait this long before moving on again
const USER_PAUSE_MS = 8000;

const ITEMS = WORK_ORDER.flatMap((cat) => ARTIFACTS.filter((a) => a.category === cat));

const prefersReducedMotion = () => {
  try {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  } catch (e) {
    return false;
  }
};

export default function ArtifactsSection({ onOpenArtifact, paused: pausedByParent = false }) {
  const trackRef = useRef(null);
  const hovering = useRef(false);
  const focused = useRef(false);
  const pauseUntil = useRef(0);
  const [playing, setPlaying] = useState(() => !prefersReducedMotion());
  const [progress, setProgress] = useState(0);

  // Move by one card; wrap around at either end
  const step = useCallback((direction) => {
    const track = trackRef.current;
    if (!track || !track.firstElementChild) return;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    const cardWidth = track.firstElementChild.getBoundingClientRect().width + gap;
    const maxScroll = track.scrollWidth - track.clientWidth;
    let next = track.scrollLeft + direction * cardWidth;
    if (direction > 0 && track.scrollLeft >= maxScroll - 4) next = 0;
    if (direction < 0 && track.scrollLeft <= 4) next = maxScroll;
    track.scrollTo({ left: next, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  }, []);

  useEffect(() => {
    if (!playing || pausedByParent) return undefined;
    const id = setInterval(() => {
      if (document.hidden || hovering.current || focused.current || Date.now() < pauseUntil.current) return;
      step(1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [playing, pausedByParent, step]);

  const holdForUser = () => {
    pauseUntil.current = Date.now() + USER_PAUSE_MS;
  };

  const handleArrow = (direction) => {
    holdForUser();
    step(direction);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    const maxScroll = track.scrollWidth - track.clientWidth;
    setProgress(maxScroll > 0 ? track.scrollLeft / maxScroll : 0);
  };

  const controlClass = 'label hover:text-accent transition-colors cursor-pointer';

  return (
    <section id="work" className="border-t border-rule scroll-mt-14">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl tracking-tight">Selected work</h2>
            <p className="mt-3 text-muted max-w-xl">
              Requirement documents, solution proposals and process flows from real client projects. Names, figures and other details have been altered to preserve each client's data and identity.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={() => setPlaying((p) => !p)}
              className={controlClass}
              aria-pressed={!playing}
            >
              {playing ? 'Pause' : 'Play'}
            </button>
            <button onClick={() => handleArrow(-1)} className={`${controlClass} text-base`} aria-label="Previous">
              ←
            </button>
            <button onClick={() => handleArrow(1)} className={`${controlClass} text-base`} aria-label="Next">
              →
            </button>
          </div>
        </div>

        <ol
          ref={trackRef}
          onScroll={handleScroll}
          onMouseEnter={() => { hovering.current = true; }}
          onMouseLeave={() => { hovering.current = false; }}
          onFocus={() => { focused.current = true; }}
          onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) focused.current = false; }}
          onPointerDown={holdForUser}
          onWheel={holdForUser}
          onTouchStart={holdForUser}
          className="no-scrollbar mt-10 flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth"
          aria-label="Selected work"
        >
          {ITEMS.map((artifact, idx) => (
            <li
              key={artifact.id}
              className="snap-start shrink-0 basis-[85%] sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)]"
            >
              <ArtifactCard number={idx + 1} artifact={artifact} onOpen={onOpenArtifact} />
            </li>
          ))}
        </ol>

        {/* Scroll position */}
        <div className="mt-6 h-px bg-rule" aria-hidden="true">
          <div
            className="h-px bg-ink transition-[width] duration-300"
            style={{ width: `${Math.max(8, progress * 100)}%` }}
          />
        </div>
      </div>
    </section>
  );
}
