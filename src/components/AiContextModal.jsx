import React, { useEffect } from 'react';
import { X, Sparkles, Terminal, Layers } from 'lucide-react';
import { PERSONAL_INFO } from '../data/artifacts';

export default function AiContextModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-indigo-500/40 shadow-2xl overflow-hidden transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                How this site was built
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                A BA who can read the code makes for better requirements
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6 space-y-5 text-slate-600 dark:text-slate-300 text-sm">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Terminal className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              Why a BA built this
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              A Technical BA's job doesn't end at the Word document. Knowing how frontends, APIs and data models fit together means sharper requirements, fewer surprises in development and faster UAT. Building this site myself is a small example of that.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              What it runs on
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-indigo-300 mb-1">1. React &amp; Tailwind</div>
                <p className="text-slate-500 dark:text-slate-400">
                  Vite, React 18 and Tailwind CSS, split into small reusable components, with light and dark themes.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-indigo-300 mb-1">2. Built-in document viewer</div>
                <p className="text-slate-500 dark:text-slate-400">
                  PDFs preview inline, process flows can be zoomed, and live projects link straight to production.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-indigo-300 mb-1">3. Hosted on GitHub Pages</div>
                <p className="text-slate-500 dark:text-slate-400">
                  A static build deployed to GitHub Pages through a GitHub Actions workflow. No server to maintain.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-indigo-300 mb-1">4. Details that matter</div>
                <p className="text-slate-500 dark:text-slate-400">
                  Responsive from phone to desktop, keyboard-friendly modals, and lazy-loaded previews.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-500 dark:text-slate-400">Built by {PERSONAL_INFO.name}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors shadow-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
