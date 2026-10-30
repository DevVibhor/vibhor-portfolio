import React, { useState } from 'react';

// Shows a company logo, or the company name set in type when there is no logo file (yet).
// Logos keep their original colours; in dark mode they sit on a light plate so dark marks stay visible
// (pass plate={false} when the container already provides a light background).
export default function Logo({ name, src, className = '', plate = true }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <span className="font-serif text-lg leading-tight text-muted">{name}</span>;
  }

  // Defaults unless the caller sets its own; two conflicting classes would fight over CSS order
  const height = /(^|\s)h-/.test(className) ? '' : 'h-8';
  const widthLimit = /(^|\s)max-w-/.test(className) ? '' : 'max-w-[9rem]';
  const darkPlate = plate ? 'dark:box-content dark:rounded dark:bg-[rgb(243_239_230)] dark:px-2 dark:py-1.5' : '';

  return (
    <img
      src={src}
      alt={name}
      title={name}
      onError={() => setFailed(true)}
      className={`${height} w-auto ${widthLimit} object-contain ${darkPlate} ${className}`}
    />
  );
}
