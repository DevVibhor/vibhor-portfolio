import React from 'react';
import { FileText, GitMerge, Cpu, Eye, Download, ExternalLink, Globe, UserRound, FolderGit2 } from 'lucide-react';

export default function ArtifactCard({ artifact, onOpen }) {
  const getCategoryMeta = (cat) => {
    switch (cat) {
      case 'brd':
        return { icon: FileText, label: 'BRD', color: 'text-indigo-700 dark:text-indigo-300 bg-indigo-50/95 dark:bg-indigo-950/80 border-indigo-200 dark:border-indigo-500/30' };
      case 'flow':
        return { icon: GitMerge, label: 'Process Flow', color: 'text-sky-700 dark:text-sky-300 bg-sky-50/95 dark:bg-sky-950/80 border-sky-200 dark:border-sky-500/30' };
      case 'solution':
        return { icon: Cpu, label: 'Solution Proposal', color: 'text-purple-700 dark:text-purple-300 bg-purple-50/95 dark:bg-purple-950/80 border-purple-200 dark:border-purple-500/30' };
      case 'design':
        return { icon: Globe, label: 'Live Project', color: 'text-emerald-700 dark:text-emerald-300 bg-emerald-50/95 dark:bg-emerald-950/80 border-emerald-200 dark:border-emerald-500/30' };
      default:
        return { icon: FileText, label: 'Deliverable', color: 'text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700' };
    }
  };

  const meta = getCategoryMeta(artifact.category);
  const Icon = meta.icon;
  const viewLabel = artifact.fileType === 'pdf' ? 'Read document' : 'View flow';

  const handleCardClick = () => {
    if (artifact.liveUrl) {
      window.open(artifact.liveUrl, '_blank', 'noopener,noreferrer');
    } else {
      onOpen(artifact);
    }
  };

  return (
    <div className="flex flex-col rounded-2xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800/90 overflow-hidden hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-0.5 transition-all duration-300 group">
      {/* Thumbnail Header */}
      <div
        onClick={handleCardClick}
        className="relative h-48 bg-slate-100 dark:bg-slate-950 overflow-hidden cursor-pointer border-b border-slate-200 dark:border-slate-800/80"
      >
        <img
          src={artifact.previewImage}
          alt={artifact.title}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 dark:from-slate-950/80 to-transparent" />

        {/* Category Pill Top Left */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold border backdrop-blur-md shadow-sm ${meta.color}`}>
            <Icon className="w-3 h-3" />
            <span>{meta.label}</span>
          </span>
        </div>

        {/* Version / Status Top Right */}
        {artifact.version && (
          <div className="absolute top-3 right-3">
            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-slate-900/80 text-slate-200 border border-slate-700/60 backdrop-blur-md shadow-sm">
              {artifact.version}
            </span>
          </div>
        )}

        {/* Hover overlay hint */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/40 backdrop-blur-[2px]">
          {artifact.liveUrl ? (
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-emerald-600 text-white shadow-lg shadow-emerald-600/30">
              <Globe className="w-3.5 h-3.5" />
              <span>Open live project</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-indigo-600 text-white shadow-lg shadow-indigo-600/30">
              <Eye className="w-3.5 h-3.5" />
              <span>{viewLabel}</span>
            </span>
          )}
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Parent project */}
          {artifact.project && (
            <div className="mb-1.5 inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
              <FolderGit2 className="w-3 h-3" />
              <span>{artifact.project}</span>
            </div>
          )}

          {/* Title */}
          <h3
            onClick={handleCardClick}
            className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors cursor-pointer leading-snug line-clamp-2"
          >
            {artifact.title}
          </h3>

          {/* Summary */}
          {artifact.summary && (
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
              {artifact.summary}
            </p>
          )}

          {/* Tools / Tags */}
          {artifact.tools && artifact.tools.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {artifact.tools.slice(0, 3).map((tool, idx) => (
                <span
                  key={idx}
                  className="text-[11px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60"
                >
                  {tool}
                </span>
              ))}
              {artifact.tools.length > 3 && (
                <span className="text-[11px] font-medium px-1.5 py-0.5 rounded text-slate-400">
                  +{artifact.tools.length - 3}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Footer Area: Action Buttons */}
        <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
          {artifact.liveUrl ? (
            /* Live project: open the live site, or read about my role */
            <div className="flex items-center gap-2">
              <a
                href={artifact.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-500/20 transition-all"
                title="Opens in a new tab"
              >
                <Globe className="w-4 h-4" />
                <span>Visit live project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => onOpen(artifact)}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 transition-colors cursor-pointer"
                title="What I did on this project"
              >
                <UserRound className="w-3.5 h-3.5" />
                <span>My role</span>
              </button>
            </div>
          ) : (
            /* Documents & flows: open the viewer, or download */
            <div className="flex items-center justify-between gap-2">
              <button
                onClick={() => onOpen(artifact)}
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold bg-slate-100 hover:bg-indigo-600 hover:text-white dark:bg-slate-800 dark:hover:bg-indigo-600 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/80 hover:border-indigo-600 transition-all cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>{viewLabel}</span>
              </button>

              {artifact.fileUrl && (
                <a
                  href={artifact.fileUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 hover:border-indigo-300 dark:hover:border-indigo-500/40 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  title="Download"
                  aria-label={`Download ${artifact.title}`}
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
