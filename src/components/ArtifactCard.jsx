import React from 'react';
import { FileText, GitMerge, Cpu, Layout, Eye, Download, ExternalLink, Globe } from 'lucide-react';

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

  const handleCardClick = () => {
    if (artifact.liveUrl) {
      window.open(artifact.liveUrl, '_blank', 'noopener,noreferrer');
    } else {
      onOpen(artifact);
    }
  };

  return (
    <div className="flex flex-col rounded-2xl bg-slate-900/70 border border-slate-800/90 overflow-hidden hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 group">
      {/* Thumbnail Header */}
      <div 
        onClick={handleCardClick}
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
          {artifact.badge && (
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900/90 text-orange-400 border border-orange-500/30 backdrop-blur-md">
              {artifact.badge}
            </span>
          )}
        </div>

        <div className="absolute top-3 right-3 flex items-center gap-1.5">
          {artifact.liveUrl ? (
            <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Website
            </span>
          ) : (
            <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${
              artifact.fileType === 'pdf' 
                ? 'bg-red-500/20 text-red-300 border border-red-500/30' 
                : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
            }`}>
              {artifact.fileType === 'pdf' ? 'Embedded PDF' : 'Process Flow'}
            </span>
          )}
        </div>

        {/* Hover overlay hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-[2px]">
          {artifact.liveUrl ? (
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-emerald-600 text-white shadow-lg shadow-emerald-600/30">
              <Globe className="w-3.5 h-3.5" />
              <span>Visit Live Site</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-orange-500 text-white shadow-lg">
              <Eye className="w-3.5 h-3.5" />
              <span>Click to View Spec</span>
            </span>
          )}
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
            onClick={handleCardClick}
            className="text-lg font-bold text-white group-hover:text-orange-400 transition-colors cursor-pointer leading-snug line-clamp-2"
          >
            {artifact.title}
          </h3>
        </div>

        {/* Footer Area: Action Buttons */}
        <div className="mt-5 pt-3 border-t border-slate-800/80">
          {artifact.liveUrl ? (
            /* Live Website: Only Live Site Redirect Button */
            <a
              href={artifact.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.01]"
              title="Open Live Website in a new window"
            >
              <Globe className="w-4 h-4" />
              <span>Visit Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            /* Regular Deliverables: View Details + Download */
            <div className="flex items-center justify-between gap-2">
              <button
                onClick={() => onOpen(artifact)}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-slate-800 hover:bg-orange-500 hover:text-white text-slate-200 border border-slate-700/80 transition-all cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>View Details</span>
              </button>

              {artifact.fileUrl && (
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
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
