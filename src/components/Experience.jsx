import React from 'react';
import { EXPERIENCE, PERSONAL_INFO } from '../data/artifacts';
import Logo from './Logo';

export default function Experience() {
  return (
    <section id="experience" className="border-t border-rule scroll-mt-14">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 py-16 md:py-20">
        <div className="flex items-baseline justify-between gap-6">
          <h2 className="font-serif text-3xl sm:text-4xl tracking-tight">Experience</h2>
          <a href={PERSONAL_INFO.cvUrl} target="_blank" rel="noopener noreferrer" className="link text-sm">
            Full CV (PDF)
          </a>
        </div>

        <ol className="mt-10 border-t border-ink">
          {EXPERIENCE.map((job) => (
            <li key={job.company} className="grid gap-2 md:grid-cols-[13rem_1fr] md:gap-10 py-8 border-b border-rule">
              {/* Dates and employer logo, centred on each other */}
              <div className="flex md:flex-col md:w-fit items-center justify-between md:justify-start gap-4 pt-1.5">
                <p className="label">{job.dates}</p>
                {/* Employer logo only when there's a file; the name is already in the text */}
                {job.logo && <Logo name={job.company} src={job.logo} className={job.logoClass} />}
              </div>
              <div>
                <h3 className="font-serif text-2xl tracking-tight">{job.role}</h3>
                <p className="mt-1 text-sm">{job.company}, {job.location}</p>
                <p className="mt-3 leading-relaxed text-muted max-w-2xl">{job.summary}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
