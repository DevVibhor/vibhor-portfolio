import React, { useState, useEffect } from 'react';
import { X, Download, ExternalLink, Globe, ZoomIn, ZoomOut, RotateCcw, FileText, CheckCircle2, Shield, Calendar, Users, Cpu, Eye, Info } from 'lucide-react';

export default function ArtifactModal({ artifact, onClose }) {
  // Live projects lead with the write-up of my role; documents lead with the file itself
  const [activeTab, setActiveTab] = useState(artifact?.liveUrl ? 'spec' : 'viewer'); // 'viewer' or 'spec'
  const [zoomLevel, setZoomLevel] = useState(100);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!artifact) return null;

  const handleZoom = (delta) => {
    setZoomLevel(prev => Math.min(250, Math.max(50, prev + delta)));
  };

  const handleResetZoom = () => setZoomLevel(100);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-6xl h-[92vh] flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30 shrink-0">
              {artifact.version || 'Deliverable'}
            </span>
            <div className="min-w-0">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate">
                {artifact.title}
              </h2>
            </div>
          </div>

          {/* Actions & Close */}
          <div className="flex items-center gap-2 shrink-0">
            {artifact.liveUrl && (
              <a
                href={artifact.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-500/20 transition-all"
                title="Open Live Platform"
              >
                <Globe className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Visit live project</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}

            {artifact.fileUrl && !artifact.liveUrl && (
              <a
                href={artifact.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
                title="Open raw file in a new tab"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in new tab</span>
              </a>
            )}

            {artifact.fileUrl && !artifact.liveUrl && (
              <a
                href={artifact.fileUrl}
                download
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-indigo-600 hover:bg-indigo-700 text-white transition-colors shadow-sm"
                title="Download Deliverable"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Subheader: Tabs & Zoom Controls */}
        <div className="px-6 py-2.5 bg-slate-100/70 dark:bg-slate-950/60 border-b border-slate-200 dark:border-slate-800/80 flex items-center justify-between flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-1 bg-slate-200/60 dark:bg-slate-900 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('viewer')}
              className={`px-3 py-1 rounded-md font-semibold transition-all ${
                activeTab === 'viewer'
                  ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {artifact.liveUrl ? 'Screens' : artifact.fileType === 'pdf' ? 'Document' : 'Flow diagram'}
            </button>
            {artifact.sections && artifact.sections.length > 0 && (
              <button
                onClick={() => setActiveTab('spec')}
                className={`px-3 py-1 rounded-md font-semibold transition-all ${
                  activeTab === 'spec'
                    ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                Overview &amp; my role
              </button>
            )}
          </div>

          {/* Diagram Zoom Controls (only shown for viewer tab) */}
          {activeTab === 'viewer' && !artifact.liveUrl && artifact.fileType !== 'pdf' && (
            <div className="flex items-center gap-2">
              <span className="text-slate-500 text-[11px]">Zoom: {zoomLevel}%</span>
              <button 
                onClick={() => handleZoom(-15)}
                className="p-1.5 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white border border-slate-200 dark:border-slate-700 shadow-sm"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={handleResetZoom}
                className="p-1.5 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white border border-slate-200 dark:border-slate-700 shadow-sm"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => handleZoom(15)}
                className="p-1.5 rounded-lg bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white border border-slate-200 dark:border-slate-700 shadow-sm"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Modal Main Content Area */}
        <div className="flex-1 overflow-auto bg-slate-100/50 dark:bg-slate-950 p-4 sm:p-6">
          {activeTab === 'viewer' ? (
            <div className="w-full h-full flex flex-col items-center justify-center min-h-[450px]">
              {artifact.liveUrl && (
                <div className="w-full mb-4 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-500/40 flex items-center justify-between flex-wrap gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-slate-800 dark:text-slate-200 font-medium">
                      Live at <strong className="text-emerald-700 dark:text-emerald-300 underline font-semibold break-all">{artifact.liveUrl}</strong>
                    </span>
                  </div>
                  <a
                    href={artifact.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all shadow-md"
                  >
                    <span>Open live project</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {artifact.fileType === 'pdf' ? (
                /* PDF Viewer Embed */
                <div className="w-full h-full flex flex-col">
                  <div className="w-full h-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-inner">
                    <object
                      data={artifact.fileUrl}
                      type="application/pdf"
                      className="w-full h-full min-h-[500px]"
                    >
                      {/* Fallback if browser blocks PDF embedding */}
                      <div className="p-8 text-center flex flex-col items-center justify-center h-full">
                        <FileText className="w-12 h-12 text-indigo-500 mb-3" />
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white">Preview not available</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mt-1 mb-4">
                          Your browser doesn't show PDFs inline. You can download it instead:
                        </p>
                        <a
                          href={artifact.fileUrl}
                          download
                          className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs inline-flex items-center gap-2 shadow-sm"
                        >
                          <Download className="w-4 h-4" />
                          Download PDF
                        </a>
                      </div>
                    </object>
                  </div>
                </div>
              ) : (
                /* Diagram / Image Viewer with Zoom */
                <div className="w-full h-full overflow-auto flex items-center justify-center p-2 rounded-xl bg-white dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800/80 shadow-sm">
                  <img
                    src={artifact.fileUrl}
                    alt={artifact.title}
                    style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'center center', transition: 'transform 0.15s ease-out' }}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-md"
                  />
                </div>
              )}
            </div>
          ) : (
            /* Structured Specification Tab */
            <div className="max-w-4xl mx-auto space-y-6 py-2">
              {/* Executive Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs shadow-sm">
                <div>
                  <span className="text-slate-400 dark:text-slate-500 block font-semibold mb-1 uppercase tracking-wider text-[10px]">Stakeholders</span>
                  <div className="flex flex-wrap gap-1">
                    {artifact.stakeholders && artifact.stakeholders.map((s, idx) => (
                      <span key={idx} className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-slate-400 dark:text-slate-500 block font-semibold mb-1 uppercase tracking-wider text-[10px]">Tools &amp; methods</span>
                  <div className="flex flex-wrap gap-1">
                    {artifact.tools && artifact.tools.map((t, idx) => (
                      <span key={idx} className="bg-indigo-50 dark:bg-slate-950 text-indigo-700 dark:text-indigo-400 px-2 py-0.5 rounded border border-indigo-200 dark:border-slate-800 font-mono text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-slate-400 dark:text-slate-500 block font-semibold mb-1 uppercase tracking-wider text-[10px]">Outcome</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">{artifact.impact}</span>
                </div>
              </div>

              {/* Sections */}
              {artifact.sections && artifact.sections.map((sec, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 dark:text-indigo-300 mb-2">
                    {sec.heading}
                  </h3>
                  <div className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 whitespace-pre-line font-normal">
                    {sec.content}
                  </div>
                </div>
              ))}

              {/* Highlights */}
              {artifact.highlights && artifact.highlights.length > 0 && (
                <div className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 shadow-sm">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">Key Highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {artifact.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs bg-slate-50 dark:bg-slate-950/80 p-3 rounded-lg border border-slate-200 dark:border-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-slate-700 dark:text-slate-300">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
