import React from 'react';
import { PERSONAL_INFO } from '../data/artifacts';

const FACTS = [
  { term: 'Experience', detail: 'Business Analyst since 2023, React Native developer from 2020' },
  { term: 'Writes', detail: 'BRDs, FRDs, user stories, solution proposals, UAT scenarios' },
  { term: 'Models', detail: 'BPMN process flows, use case and activity diagrams' },
  { term: 'Works with', detail: 'Business users, division heads, IT and delegates from Japan' },
  { term: 'Works in', detail: 'Agile / Scrum teams, web and mobile platforms' },
];

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-5 sm:px-8 pt-16 pb-20 md:pt-24 md:pb-24">
      <p className="label">{PERSONAL_INFO.name} · {PERSONAL_INFO.role}</p>

      <div className="mt-6 grid gap-12 md:grid-cols-[1.5fr_1fr] md:gap-16">
        <div>
          <h1 className="font-serif text-4xl sm:text-5xl leading-[1.1] tracking-tight [text-wrap:balance]">
            Requirements developers can build from, and stakeholders can sign off on.
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-muted max-w-xl">
            {PERSONAL_INFO.bio}
          </p>

          <div className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-3 text-[15px]">
            <a href="#work" className="font-medium text-accent hover:text-accent-strong transition-colors">
              See the work ↓
            </a>
            <a href={PERSONAL_INFO.cvUrl} target="_blank" rel="noopener noreferrer" className="link">CV (PDF)</a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="link">Email</a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="link">LinkedIn</a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="link">GitHub</a>
          </div>
        </div>

        {/* Photo and fact sheet */}
        <div className="self-end">
          <img
            src="images/vibhor.jpg"
            alt={`Portrait of ${PERSONAL_INFO.name}`}
            width="640"
            height="640"
            className="portrait mx-auto w-48 sm:w-56 aspect-square object-cover"
          />
          <dl className="mt-8 border-t border-ink text-sm">
            {FACTS.map(({ term, detail }) => (
              <div key={term} className="grid grid-cols-[6.5rem_1fr] gap-3 py-3 border-b border-rule">
                <dt className="label pt-0.5">{term}</dt>
                <dd>{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
