import React from 'react';
import { Sparkles, Terminal, CheckCircle2, ArrowRight, Zap, Code, Shield } from 'lucide-react';
import { PERSONAL_INFO } from '../data/artifacts';

export default function OrangeMantraCallout({ onOpenDetails }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8">
      <div className="relative rounded-2xl bg-gradient-to-r from-orange-950/40 via-slate-900 to-amber-950/30 border border-orange-500/30 p-6 sm:p-8 overflow-hidden shadow-2xl">
        {/* Ambient lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-orange-500/20 text-orange-400 font-mono text-xs font-bold border border-orange-500/40 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                DEDICATED INTERVIEW SUBMISSION
              </span>
              <span className="text-xs text-slate-400 hidden sm:inline">
                Addressing: Requirement for Technical BA + AI Prototyping
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Why I Built This Custom Web Application for <span className="text-orange-400">{PERSONAL_INFO.targetCompany}</span>
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              During the interview process, the requirement was clear: demonstrating deep competency in authoring 
              <span className="text-white font-medium"> BRDs and Flowcharts</span>, coupled with the agility to <span className="text-white font-medium">build and prototype software leveraging Generative AI</span>.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Rather than sending detached static attachments over email, I engineered this custom React web application with AI. It acts as an interactive client-ready portal with embedded PDF viewers, vector architecture diagrams, and requirements matrices—proving both business analysis depth and modern engineering execution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Enterprise BRDs &amp; BDD Criteria</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span>BPMN 2.0 &amp; Microservices Flows</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Live React App + GitHub Pages Host</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-3 pt-2 lg:pt-0">
            <div className="w-full bg-slate-950/80 p-4 rounded-xl border border-slate-800/80 text-left font-mono text-xs text-slate-300 space-y-2">
              <div className="flex items-center justify-between text-[11px] text-slate-500 pb-1 border-b border-slate-800">
                <span>STACK &amp; RUNTIME</span>
                <span className="text-orange-400">VITE + REACT</span>
              </div>
              <div className="text-emerald-400">$ node -v ➜ v24.15.0</div>
              <div className="text-slate-400">Target: {PERSONAL_INFO.targetCompany} Team</div>
              <div className="text-orange-300">Deployment: GitHub Pages Ready</div>
            </div>

            <button
              onClick={onOpenDetails}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold bg-orange-500/10 hover:bg-orange-500/20 text-orange-300 border border-orange-500/30 transition-all cursor-pointer"
            >
              <Code className="w-4 h-4 text-orange-400" />
              <span>Read AI Development Breakdown</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
