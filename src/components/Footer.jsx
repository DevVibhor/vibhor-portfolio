import React from 'react';
import { PERSONAL_INFO } from '../data/artifacts';

export default function Footer() {
  return (
    <footer id="contact" className="snap-section border-t border-rule scroll-mt-14">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:gap-16">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl tracking-tight">Let's talk.</h2>
            <p className="mt-4 text-muted leading-relaxed max-w-xl">
              I'm looking for {PERSONAL_INFO.role} roles where I can own requirements end to end, from stakeholder workshops to UAT sign-off. Happy to walk you through any of this work in more detail.
            </p>
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent('Hello from your portfolio')}`}
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded bg-accent text-paper font-medium hover:bg-accent-strong transition-colors"
            >
              Send email
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <dl className="self-end border-t border-ink text-sm">
            <div className="grid grid-cols-[6.5rem_1fr] gap-3 py-3 border-b border-rule">
              <dt className="label pt-0.5">CV</dt>
              <dd className="flex gap-5">
                <a href={PERSONAL_INFO.cvUrl} target="_blank" rel="noopener noreferrer" className="link">View</a>
                <a href={PERSONAL_INFO.cvUrl} download className="link">Download PDF</a>
              </dd>
            </div>
            <div className="grid grid-cols-[6.5rem_1fr] gap-3 py-3 border-b border-rule">
              <dt className="label pt-0.5">Email</dt>
              <dd><a href={`mailto:${PERSONAL_INFO.email}`} className="link break-all">{PERSONAL_INFO.email}</a></dd>
            </div>
            <div className="grid grid-cols-[6.5rem_1fr] gap-3 py-3 border-b border-rule">
              <dt className="label pt-0.5">LinkedIn</dt>
              <dd><a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="link">vibhor-kashyap</a></dd>
            </div>
            <div className="grid grid-cols-[6.5rem_1fr] gap-3 py-3 border-b border-rule">
              <dt className="label pt-0.5">GitHub</dt>
              <dd><a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="link">DevVibhor</a></dd>
            </div>
          </dl>
        </div>

        <p className="mt-16 pt-6 border-t border-rule text-sm text-muted">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed and built by me through GenAI
        </p>
      </div>
    </footer>
  );
}
