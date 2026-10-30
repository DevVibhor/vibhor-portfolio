import React, { useState } from 'react';

// Shows a company logo, or the company name set in type when there is no logo file (yet).
// Logos keep their original colours; in dark mode they sit on a light plate so dark marks stay visible.
export default function Logo({ name, src, className = '' }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <span className="font-serif text-lg leading-tight text-muted">{name}</span>;
  }

  // Default height unless the caller sets its own; two height classes would fight over CSS order
  const height = /(^|\s)h-/.test(className) ? '' : 'h-8';

  return (
    <img
      src={src}
      alt={name}
      title={name}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${height} w-auto max-w-[9rem] object-contain dark:box-content dark:rounded dark:bg-[rgb(243_239_230)] dark:px-2 dark:py-1.5 ${className}`}
    />
  );
}
