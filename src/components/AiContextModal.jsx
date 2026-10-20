import React, { useEffect } from 'react';
import { X, Sparkles, Terminal, CheckCircle2, GitBranch, Globe, Cpu, Layers } from 'lucide-react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-md animate-fade-in">
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
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                Portfolio Architecture &amp; Delivery
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30">
                  Technical BA Agility
                </span>
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Bridging Business Analysis with Modern Software Architecture
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
              Bridging Requirements with Delivery
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              In modern technical enterprise environments, a high-impact Technical BA does not stop at writing static Word/PDF specifications. They bridge business logic directly with engineering execution by understanding frontend and backend architectures, modeling APIs, mapping data schemas, and validating user acceptance criteria.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              How This Portfolio Was Built &amp; Structured
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-indigo-300 mb-1">1. Modular React &amp; Tailwind Architecture</div>
                <p className="text-slate-500 dark:text-slate-400">
                  Built with Vite, React 18, and Tailwind CSS with responsive dark &amp; light theme switching, clean component decoupling, and fluid typography.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-indigo-300 mb-1">2. Interactive Deliverable Viewer</div>
                <p className="text-slate-500 dark:text-slate-400">
                  Embedded PDF previews, vector process flows with zoom controls, and live client project integrations with zero external dependencies.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-indigo-300 mb-1">3. GitHub Pages Zero-Config Hosting</div>
                <p className="text-slate-500 dark:text-slate-400">
                  Configured base relative paths and automated deployment scripts enabling instant static hosting without expensive backend infrastructure.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-indigo-300 mb-1">4. Production Readiness</div>
                <p className="text-slate-500 dark:text-slate-400">
                  End-to-end focus on user experience, performance, accessibility, and clean code documentation.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Terminal Snippet */}
          <div className="p-4 rounded-xl bg-slate-900 dark:bg-slate-950 border border-slate-800 text-slate-300 font-mono text-xs">
            <div className="text-slate-400 mb-2 pb-1 border-b border-slate-800 flex items-center justify-between">
              <span>PROJECT BUILD PIPELINE</span>
              <span className="text-emerald-400">PASSING (100%)</span>
            </div>
            <div className="text-slate-400">$ npm run build</div>
            <div className="text-emerald-400">✓ Modules transformed successfully.</div>
            <div className="text-slate-400">dist/index.html                     0.82 kB</div>
            <div className="text-slate-400">dist/assets/index.css              18.60 kB</div>
            <div className="text-slate-400">dist/assets/index.js              195.40 kB</div>
            <div className="text-indigo-400 mt-2">✓ Production build ready for deployment</div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-500 dark:text-slate-400">Authored by {PERSONAL_INFO.name} • Technical BA</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-colors shadow-sm"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}
