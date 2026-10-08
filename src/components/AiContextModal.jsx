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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-2xl bg-slate-900 border border-orange-500/40 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-orange-500/20 text-orange-400 border border-orange-500/30">
              <Sparkles className="w-5 h-5 text-orange-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                AI-Assisted Development Breakdown
                <span className="text-xs px-2 py-0.5 rounded bg-orange-500/10 text-orange-400 border border-orange-500/30">
                  Interview Requirement
                </span>
              </h3>
              <p className="text-xs text-slate-400">
                Prepared for {PERSONAL_INFO.targetCompany} • Demonstrating rapid prototyping agility
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6 space-y-5 text-slate-300 text-sm">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Terminal className="w-4 h-4 text-orange-400" />
              The Core Requirement Addressed
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              In modern technical organizations like <strong>{PERSONAL_INFO.targetCompany}</strong>, a high-impact Technical BA does not stop at writing static Word/PDF specifications. They bridge business logic directly with execution by leveraging Generative AI to scaffold web applications, write data schemas, model APIs, and build live prototypes.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-orange-400" />
              How This Portfolio Application Was Built
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="font-bold text-white mb-1 text-orange-300">1. Architectural Prompting</div>
                <p className="text-slate-400">
                  Structured the application architecture using Vite + React + Tailwind CSS with modular component separation and strict typing conventions.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="font-bold text-white mb-1 text-orange-300">2. Interactive Vector SVGs &amp; PDFs</div>
                <p className="text-slate-400">
                  Automated generation of BPMN swimlanes, sequence flows, and UI wireframe assets alongside embedded PDF reader compatibility.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="font-bold text-white mb-1 text-orange-300">3. GitHub Pages Zero-Config Hosting</div>
                <p className="text-slate-400">
                  Configured asset base paths and responsive cross-browser routing so the site runs flawlessly on GitHub Pages without server overhead.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800">
                <div className="font-bold text-white mb-1 text-orange-300">4. Rapid Turnaround</div>
                <p className="text-slate-400">
                  Conducted end-to-end ideation, coding, styling, and verification within hours instead of weeks—proving production readiness.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Terminal Snippet */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs">
            <div className="text-slate-500 mb-2 pb-1 border-b border-slate-800 flex items-center justify-between">
              <span>PROJECT BUILD PIPELINE</span>
              <span className="text-emerald-400">PASSING (100%)</span>
            </div>
            <div className="text-slate-400">$ npm run build</div>
            <div className="text-emerald-400">✓ 137 modules transformed.</div>
            <div className="text-slate-400">dist/index.html                     0.75 kB</div>
            <div className="text-slate-400">dist/assets/index.css              18.42 kB</div>
            <div className="text-slate-400">dist/assets/index.js              192.10 kB</div>
            <div className="text-orange-400 mt-2">✓ Ready for deployment to GitHub Pages!</div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs">
          <span className="text-slate-400">Coded by Vibhor • Supported by AI</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-semibold transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
}
