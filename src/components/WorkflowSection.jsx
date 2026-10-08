import React from 'react';
import { GitBranch, Workflow, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/artifacts';

export default function WorkflowSection() {
  return (
    <section id="workflow" className="py-16 border-t border-slate-900 bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-semibold text-orange-400 mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>Delivery Lifecycle</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            My Technical BA Methodology
          </h2>
          <p className="mt-3 text-base text-slate-300">
            How I transform ambiguous business objectives into validated, high-velocity engineering deliverables.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WORKFLOW_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-orange-500/40 transition-all flex flex-col justify-between group hover:bg-slate-900/90"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-orange-500/40 group-hover:text-orange-400 transition-colors font-mono">
                    {step.step}
                  </span>
                  {idx < WORKFLOW_STEPS.length - 1 && (
                    <ArrowRight className="hidden lg:block w-4 h-4 text-slate-700 group-hover:text-orange-400 transition-colors" />
                  )}
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-orange-300 transition-colors mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Verified deliverable</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
