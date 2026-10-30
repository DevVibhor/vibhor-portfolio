import React, { useState, useEffect } from 'react';
import { CATEGORY_LABELS } from '../data/artifacts';

export default function ArtifactModal({ artifact, onClose }) {
  const hasFile = Boolean(artifact?.fileUrl);
  const isPdf = artifact?.fileType === 'pdf';
  // Live projects have no file to preview, so they open on the write-up
  const [activeTab, setActiveTab] = useState(hasFile ? 'viewer' : 'spec'); // 'viewer' or 'spec'
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

  const tabClass = (tab) =>
    `pb-2 -mb-px border-b-2 transition-colors cursor-pointer ${
      activeTab === tab ? 'border-accent text-ink' : 'border-transparent text-muted hover:text-ink'
    }`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/50 animate-fade-in"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-6xl flex flex-col bg-paper border border-rule shadow-2xl overflow-hidden ${hasFile ? 'h-[92vh]' : 'max-h-[92vh]'}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={artifact.title}
      >
        {/* Header */}
        <div className="px-5 sm:px-8 pt-5 border-b border-rule">
          <div className="flex items-start justify-between gap-6">
            <div className="min-w-0">
              <p className="label">{CATEGORY_LABELS[artifact.category]}</p>
              <h2 className="mt-1 font-serif text-2xl sm:text-3xl tracking-tight truncate">{artifact.title}</h2>
            </div>
            <button onClick={onClose} className="label hover:text-accent transition-colors shrink-0 pt-1 cursor-pointer" aria-label="Close">
              Close ✕
            </button>
          </div>

          <div className="mt-4 flex flex-wrap items-end justify-between gap-x-8 gap-y-3 text-sm">
            <div className="flex gap-6">
              {hasFile && (
                <button onClick={() => setActiveTab('viewer')} className={tabClass('viewer')}>
                  {isPdf ? 'Document' : 'Flow diagram'}
                </button>
              )}
              {artifact.sections && artifact.sections.length > 0 && (
                <button onClick={() => setActiveTab('spec')} className={tabClass('spec')}>
                  {artifact.liveUrl ? 'My role' : 'Overview'}
                </button>
              )}
            </div>

            <div className="flex items-baseline gap-5 pb-2">
              {activeTab === 'viewer' && hasFile && !isPdf && (
                <span className="flex items-baseline gap-3 font-mono text-xs text-muted">
                  <button onClick={() => handleZoom(-15)} className="hover:text-accent cursor-pointer" aria-label="Zoom out">−</button>
                  <button onClick={() => setZoomLevel(100)} className="hover:text-accent cursor-pointer tabular-nums" title="Reset zoom">{zoomLevel}%</button>
                  <button onClick={() => handleZoom(15)} className="hover:text-accent cursor-pointer" aria-label="Zoom in">+</button>
                </span>
              )}
              {artifact.liveUrl && (
                <a href={artifact.liveUrl} target="_blank" rel="noopener noreferrer" className="font-medium text-accent hover:text-accent-strong">
                  Visit live project ↗
                </a>
              )}
              {hasFile && (
                <>
                  <a href={artifact.fileUrl} target="_blank" rel="noopener noreferrer" className="link hidden sm:inline">
                    Open in new tab
                  </a>
                  <a href={artifact.fileUrl} download className="link">
                    Download
                  </a>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-auto bg-surface">
          {activeTab === 'viewer' && hasFile ? (
            isPdf ? (
              <object data={artifact.fileUrl} type="application/pdf" className="w-full h-full min-h-[500px]">
                {/* Fallback if browser blocks PDF embedding */}
                <div className="p-10 text-center">
                  <p className="font-serif text-xl">Preview not available</p>
                  <p className="mt-2 text-muted">Your browser doesn't show PDFs inline.</p>
                  <a href={artifact.fileUrl} download className="mt-4 inline-block font-medium text-accent">
                    Download PDF
                  </a>
                </div>
              </object>
            ) : (
              <div className="w-full h-full overflow-auto flex items-center justify-center p-4 bg-white">
                <img
                  src={artifact.fileUrl}
                  alt={artifact.title}
                  style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'center center', transition: 'transform 0.15s ease-out' }}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            )
          ) : (
            <div className="max-w-3xl mx-auto px-5 sm:px-8 py-8">
              {/* Metadata */}
              <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-3 pb-8 border-b border-rule text-sm">
                <div>
                  <dt className="label">Stakeholders</dt>
                  <dd className="mt-1.5 leading-relaxed">{artifact.stakeholders?.join(', ')}</dd>
                </div>
                <div>
                  <dt className="label">Tools &amp; methods</dt>
                  <dd className="mt-1.5 leading-relaxed">{artifact.tools?.join(', ')}</dd>
                </div>
                <div>
                  <dt className="label">Outcome</dt>
                  <dd className="mt-1.5 leading-relaxed">{artifact.impact}</dd>
                </div>
              </dl>

              {/* Sections */}
              {artifact.sections && artifact.sections.map((sec, idx) => (
                <div key={idx} className="pt-8">
                  <h3 className="font-serif text-xl">{sec.heading.replace(/^\d+\.\s*/, '')}</h3>
                  <div className="mt-2 leading-relaxed text-muted whitespace-pre-line">{sec.content}</div>
                </div>
              ))}

              {/* Highlights */}
              {artifact.highlights && artifact.highlights.length > 0 && (
                <div className="pt-8">
                  <h3 className="font-serif text-xl">Highlights</h3>
                  <ul className="mt-2 space-y-1.5 text-muted list-disc pl-5 marker:text-accent">
                    {artifact.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
