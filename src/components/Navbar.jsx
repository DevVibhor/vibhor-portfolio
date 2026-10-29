import React from 'react';
import { Sun, Moon, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../data/artifacts';

export default function Navbar({ theme, onToggleTheme }) {
  const isDark = theme === 'dark';

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/80 dark:bg-[#0B0F19]/80 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <a
          href="#"
          className="flex items-center gap-3 group min-w-0"
        >
          <div className="w-9 h-9 shrink-0 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-500 flex items-center justify-center text-white font-bold text-base shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            V
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white leading-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
              {PERSONAL_INFO.role}
            </span>
          </div>
        </a>

        {/* Navigation links & Actions */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <a
            href="#artifacts-section"
            className="hidden sm:inline-flex px-3 py-1.5 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Work
          </a>
          <a
            href="#contact"
            className="hidden sm:inline-flex px-3 py-1.5 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            Contact
          </a>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 transition-all hover:scale-105"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600 transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* Get in Touch CTA */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="ml-1 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-700 text-white shadow-md shadow-indigo-600/20 transition-all hover:scale-105"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Email me</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
