import React from 'react';
import { CATEGORY_LABELS } from '../data/artifacts';

const hostnameOf = (url) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch (e) {
    return url;
  }
};

// Header panel, the same height on every card: the diagram for flows,
// the live address for projects, and a page-like panel for documents
function Media({ artifact }) {
  if (artifact.previewImage) {
    return (
      <img
        src={artifact.previewImage}
        alt={`${artifact.title} diagram`}
        loading="lazy"
        className="w-full h-full object-cover object-left-top bg-white"
      />
    );
  }

  if (artifact.liveUrl) {
    return (
      <div className="h-full flex flex-col justify-between p-5 bg-paper">
        <span className="label">Live in production</span>
        <span className="font-serif text-xl leading-snug break-all">{hostnameOf(artifact.liveUrl)} ↗</span>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col p-5 bg-paper">
      <span className="label">Sanitized copy · PDF</span>
      {/* faint ruled lines, like a page of text */}
      <div className="mt-auto space-y-2.5" aria-hidden="true">
        <div className="h-px bg-rule" />
        <div className="h-px bg-rule" />
        <div className="h-px bg-rule" />
        <div className="h-px bg-rule w-2/3" />
      </div>
    </div>
  );
}

export default function ArtifactCard({ artifact, number, onOpen }) {
  const isLive = Boolean(artifact.liveUrl);
  const isPdf = artifact.fileType === 'pdf';

  const handlePrimary = () => {
    if (isLive) {
      window.open(artifact.liveUrl, '_blank', 'noopener,noreferrer');
    } else {
      onOpen(artifact);
    }
  };

  return (
    <article className="h-full flex flex-col border border-rule bg-surface">
      <button
        onClick={handlePrimary}
        className="block h-40 border-b border-rule overflow-hidden text-left cursor-pointer"
        aria-label={isLive ? `Open ${artifact.title} in a new tab` : `Open ${artifact.title}`}
        tabIndex={-1}
      >
        <Media artifact={artifact} />
      </button>

      <div className="flex-1 flex flex-col p-5 sm:p-6">
        <p className="label">
          {String(number).padStart(2, '0')} · {CATEGORY_LABELS[artifact.category]}
          {artifact.project && ` · ${artifact.project}`}
        </p>

        <h3 className="mt-2 font-serif text-2xl leading-snug tracking-tight">
          <button onClick={handlePrimary} className="text-left hover:text-accent transition-colors cursor-pointer">
            {artifact.title}
          </button>
        </h3>

        {artifact.summary && (
          <p className="mt-3 text-[15px] leading-relaxed text-muted line-clamp-4">{artifact.summary}</p>
        )}

        {artifact.tools && artifact.tools.length > 0 && (
          <p className="mt-4 font-mono text-xs text-muted line-clamp-2">{artifact.tools.join(' · ')}</p>
        )}

        <div className="mt-auto pt-5 flex flex-wrap items-baseline gap-x-5 gap-y-2 text-[15px]">
          {isLive ? (
            <>
              <a
                href={artifact.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-accent hover:text-accent-strong transition-colors"
              >
                Visit live site ↗
              </a>
              <button onClick={() => onOpen(artifact)} className="link cursor-pointer">
                What I did
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => onOpen(artifact)}
                className="font-medium text-accent hover:text-accent-strong transition-colors cursor-pointer"
              >
                {isPdf ? 'Read document →' : 'View flow →'}
              </button>
              {artifact.fileUrl && (
                <a href={artifact.fileUrl} download className="link">
                  Download {isPdf ? 'PDF' : 'PNG'}
                </a>
              )}
            </>
          )}
        </div>
      </div>
    </article>
  );
}
