import React, { useState, useEffect } from 'react';
import { X, Download, ExternalLink, ZoomIn, ZoomOut, RotateCcw, FileText, CheckCircle2, Shield, Calendar, Users, Cpu, Maximize2 } from 'lucide-react';

export default function ArtifactModal({ artifact, onClose }) {
  const [activeTab, setActiveTab] = useState('viewer'); // 'viewer' or 'spec'
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-6xl h-[92vh] flex flex-col rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="px-2.5 py-1 rounded text-xs font-bold bg-orange-500/10 text-orange-400 border border-orange-500/30 shrink-0">
              {artifact.categoryName}
            </span>
            <div className="min-w-0">
              <h2 className="text-base sm:text-lg font-bold text-white truncate flex items-center gap-2">
                {artifact.title}
                <span className="text-xs font-normal text-slate-400 bg-slate-800 px-2 py-0.5 rounded">
                  {artifact.version}
                </span>
              </h2>
              <p className="text-xs text-slate-400 hidden sm:block truncate">
                {artifact.impact}
              </p>
            </div>
          </div>

          {/* Actions & Close */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={artifact.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title="Open raw file in a new tab"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Full Tab</span>
            </a>

            <a
              href={artifact.fileUrl}
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-orange-500 hover:bg-orange-600 text-white transition-colors shadow-sm"
              title="Download Artifact"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Subheader: Tabs & Zoom Controls */}
        <div className="px-6 py-2.5 bg-slate-950/60 border-b border-slate-800/80 flex items-center justify-between flex-wrap gap-2 text-xs">
          {/* Tabs */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('viewer')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activeTab === 'viewer'
                  ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {artifact.fileType === 'pdf' ? 'Interactive PDF Viewer' : 'Vector Diagram Canvas'}
            </button>
            <button
              onClick={() => setActiveTab('spec')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                activeTab === 'spec'
                  ? 'bg-orange-500/20 text-orange-400 border border-orange-500/40'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              Structured Requirements &amp; Scope Details
            </button>
          </div>

          {/* Diagram Zoom Controls (only shown for viewer tab) */}
          {activeTab === 'viewer' && (
            <div className="flex items-center gap-2">
              <span className="text-slate-500">Zoom: {zoomLevel}%</span>
              <button 
                onClick={() => handleZoom(-15)}
                className="p-1 rounded bg-slate-800 text-slate-300 hover:text-white"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={handleResetZoom}
                className="p-1 rounded bg-slate-800 text-slate-300 hover:text-white"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => handleZoom(15)}
                className="p-1 rounded bg-slate-800 text-slate-300 hover:text-white"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Modal Main Content Area */}
        <div className="flex-1 overflow-auto bg-slate-950 p-4 sm:p-6">
          {activeTab === 'viewer' ? (
            <div className="w-full h-full flex flex-col items-center justify-center min-h-[450px]">
              {artifact.fileType === 'pdf' ? (
                /* PDF Viewer Embed */
                <div className="w-full h-full flex flex-col">
                  <div className="w-full h-full rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-inner">
                    <object
                      data={artifact.fileUrl}
                      type="application/pdf"
                      className="w-full h-full min-h-[500px]"
                    >
                      {/* Fallback if browser blocks PDF embedding */}
                      <div className="p-8 text-center flex flex-col items-center justify-center h-full">
                        <FileText className="w-12 h-12 text-orange-400 mb-3" />
                        <h4 className="text-lg font-bold text-white">Embedded PDF Preview</h4>
                        <p className="text-sm text-slate-400 max-w-md mt-1 mb-4">
                          Your browser is configured to download PDFs directly or disable inline plugin objects. You can download or view it immediately:
                        </p>
                        <a
                          href={artifact.fileUrl}
                          download
                          className="px-4 py-2 rounded-xl bg-orange-500 text-white font-semibold text-xs inline-flex items-center gap-2"
                        >
                          <Download className="w-4 h-4" />
                          Download {artifact.title} PDF
                        </a>
                      </div>
                    </object>
                  </div>
                </div>
              ) : (
                /* Diagram / Image Viewer with Zoom */
                <div className="w-full h-full overflow-auto flex items-center justify-center p-2 rounded-xl bg-slate-950/80 border border-slate-800/80">
                  <img
                    src={artifact.fileUrl}
                    alt={artifact.title}
                    style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'center center', transition: 'transform 0.15s ease-out' }}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  />
                </div>
              )}
            </div>
          ) : (
            /* Structured Specification Tab */
            <div className="max-w-4xl mx-auto space-y-6 text-slate-300 py-2">
              {/* Executive Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs">
                <div>
                  <span className="text-slate-500 block font-semibold mb-1">STAKEHOLDERS INVOLVED</span>
                  <div className="flex flex-wrap gap-1">
                    {artifact.stakeholders.map((s, idx) => (
                      <span key={idx} className="bg-slate-950 text-slate-300 px-2 py-0.5 rounded border border-slate-800">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-slate-500 block font-semibold mb-1">TOOLING &amp; PROTOCOLS</span>
                  <div className="flex flex-wrap gap-1">
                    {artifact.tools.map((t, idx) => (
                      <span key={idx} className="bg-slate-950 text-orange-400 px-2 py-0.5 rounded border border-slate-800 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-slate-500 block font-semibold mb-1">EVALUATION METRIC</span>
                  <span className="text-emerald-400 font-semibold">{artifact.impact}</span>
                </div>
              </div>

              {/* Sections */}
              {artifact.sections?.map((sec, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <h3 className="text-base font-bold text-white mb-2 text-orange-300">
                    {sec.heading}
                  </h3>
                  <div className="text-sm leading-relaxed text-slate-300 whitespace-pre-line font-normal">
                    {sec.content}
                  </div>
                </div>
              ))}

              {/* Highlights */}
              <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800">
                <h3 className="text-base font-bold text-white mb-3">Key Specification Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {artifact.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs bg-slate-950/80 p-3 rounded-lg border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Document Verified • Technical Business Analyst Portfolio</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
