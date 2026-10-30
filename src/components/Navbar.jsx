import React from 'react';
import { PERSONAL_INFO } from '../data/artifacts';

export default function Navbar({ theme, onToggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <header className="sticky top-0 z-40 w-full bg-paper border-b border-rule">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between gap-4">
        <a href="#" className="font-serif text-xl tracking-tight hover:text-accent transition-colors">
          {PERSONAL_INFO.name}
        </a>

        <nav className="flex items-center gap-5 sm:gap-7 text-sm">
          <a href="#work" className="hover:text-accent transition-colors">Work</a>
          <a href="#experience" className="hidden sm:inline hover:text-accent transition-colors">Experience</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          <button
            onClick={onToggleTheme}
            className="label hover:text-accent transition-colors cursor-pointer"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? 'Light' : 'Dark'}
          </button>
        </nav>
      </div>
    </header>
  );
}
