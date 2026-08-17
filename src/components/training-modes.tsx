"use client";

import { useDictionary } from "@/components/locale-provider";

export function TrainingModes() {
  const dict = useDictionary();

  return (
    <section id="modes" className="border-t border-forge-border bg-forge-surface px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-forge-blue">
          {dict.modes.eyebrow}
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">
          {dict.modes.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-forge-muted">
          {dict.modes.subtitle}
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {dict.modes.items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-forge-border bg-forge-card p-6"
            >
              <h3 className="text-xl font-bold text-forge-blue">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-forge-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
