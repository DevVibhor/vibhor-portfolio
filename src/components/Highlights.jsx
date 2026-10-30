import React from 'react';
import { KEY_NUMBERS, CLIENTS } from '../data/artifacts';
import Logo from './Logo';

// Key numbers from the CV, then the clients they were delivered for
export default function Highlights() {
  return (
    <section className="border-t border-rule bg-surface">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <dl className="grid grid-cols-2">
          {KEY_NUMBERS.map(({ value, label }) => (
            <div
              key={label}
              className="py-8 sm:py-10 pr-4 border-rule [&:not(:first-child)]:border-l [&:not(:first-child)]:pl-5 sm:[&:not(:first-child)]:pl-8"
            >
              <dt className="sr-only">{label}</dt>
              <dd>
                <span className="block font-serif text-4xl sm:text-5xl tracking-tight text-accent tabular-nums">{value}</span>
                <span className="mt-2 block text-sm leading-snug text-muted max-w-xs">{label}</span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="py-8 border-t border-rule flex flex-col gap-5">
          <p className="label shrink-0">Clients I've delivered for</p>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {CLIENTS.map((client) => (
              <li key={client.name}>
                <Logo name={client.name} src={client.logo} className={client.logoClass} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
