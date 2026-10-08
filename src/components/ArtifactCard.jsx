import React from 'react';
import { FileText, GitMerge, Cpu, Layout, Eye, Download, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';

export default function ArtifactCard({ artifact, onOpen }) {
  const getCategoryIcon = (cat) => {
    switch (cat) {
      case 'brd': return FileText;
      case 'flow': return GitMerge;
      case 'solution': return Cpu;
      case 'design': return Layout;
      default: return FileText;
    }
  };

  const Icon = getCategoryIcon(artifact.category);

  return (
    <div className="flex flex-col rounded-2xl bg-slate-900/70 border border-slate-800/90 overflow-hidden hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 group">
      {/* Thumbnail Header */}
      <div 
        onClick={() => onOpen(artifact)}
        className="relative h-48 bg-slate-950 overflow-hidden cursor-pointer border-b border-slate-800/80 group-hover:opacity-95 transition-opacity"
      >
        <img 
          src={artifact.previewImage} 
          alt={artifact.title}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900/90 text-orange-400 border border-orange-500/30 backdrop-blur-md">
            {artifact.badge}
          </span>
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-900/80 text-slate-300 border border-slate-700/60 backdrop-blur-md">
            {artifact.version}
          </span>
        </div>

        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
            artifact.fileType === 'pdf' 
              ? 'bg-red-500/20 text-red-300 border border-red-500/30' 
              : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
          }`}>
            {artifact.fileType === 'pdf' ? 'Embedded PDF' : 'Vector Diagram'}
          </span>
        </div>

        {/* Hover overlay hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-[2px]">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-orange-500 text-white shadow-lg">
            <Eye className="w-3.5 h-3.5" />
            Click to View Spec
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category Label */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-1.5">
            <Icon className="w-3.5 h-3.5 text-orange-400" />
            <span>{artifact.categoryName}</span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onOpen(artifact)}
            className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors cursor-pointer leading-snug line-clamp-2"
          >
            {artifact.title}
          </h3>

          {/* Summary */}
          <p className="text-xs text-slate-300 mt-2.5 leading-relaxed line-clamp-3">
            {artifact.summary}
          </p>

          {/* Key Deliverables Highlights */}
          <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5">
            <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Key Deliverables</div>
            {artifact.highlights.slice(0, 2).map((item, idx) => (
              <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span className="line-clamp-1">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Area: Tools & Action */}
        <div className="mt-5 pt-3 border-t border-slate-800/80">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {artifact.tools.map((t, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-950 text-slate-400 border border-slate-800">
                {t}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between gap-2">
            <button
              onClick={() => onOpen(artifact)}
              className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-slate-800 hover:bg-orange-500 hover:text-white text-slate-200 border border-slate-700/80 transition-all cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Open Document Viewer</span>
            </button>

            <a
              href={artifact.fileUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 text-slate-400 hover:text-orange-400 transition-colors"
              title="Direct Download File"
            >
              <Download className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
