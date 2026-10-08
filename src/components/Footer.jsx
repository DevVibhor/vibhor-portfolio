import React from 'react';
import { Mail, Building2, ArrowUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/artifacts';

const LinkedinIcon = () => (
  <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.05 1.53 1.53 0 0 0 0 3.05m1.39 9.74v-8.37H5.07v8.37z"/>
  </svg>
);

export default function Footer({ onOpenAiInfo }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="border-t border-slate-900 bg-slate-950 text-slate-400 text-xs">
      {/* Contact & Next Steps Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-orange-950/20 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-semibold border border-orange-500/30">
              <Building2 className="w-3.5 h-3.5" />
              <span>Next Steps with {PERSONAL_INFO.targetCompany}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Let's Discuss Requirements &amp; Architecture
            </h3>
            <p className="text-sm text-slate-300 max-w-xl">
              I am excited about contributing as a <span className="text-orange-400 font-semibold">{PERSONAL_INFO.targetRole}</span> at {PERSONAL_INFO.targetCompany}, driving business requirements and technical execution forward.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20 transition-all hover:scale-105"
            >
              <Mail className="w-4 h-4" />
              <span>Email Vibhor</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            >
              <LinkedinIcon />
              <span>LinkedIn</span>
            </a>
            <button
              onClick={onOpenAiInfo}
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-orange-300 border border-orange-500/30 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span>AI Stack Info</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-500">
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built custom for <strong>{PERSONAL_INFO.targetCompany}</strong>.</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1.5 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Hosted on GitHub Pages
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 transition-colors"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
