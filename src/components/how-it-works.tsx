"use client";

import { useDictionary } from "@/components/locale-provider";

export function HowItWorks() {
  const dict = useDictionary();

  return (
    <section id="how" className="border-t border-forge-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-forge-blue">
          {dict.how.eyebrow}
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">
          {dict.how.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-forge-muted">
          {dict.how.subtitle}
        </p>
        <ol className="mt-12 grid gap-8 md:grid-cols-3">
          {dict.how.steps.map((step, index) => (
            <li key={step.title} className="rounded-2xl border border-forge-border bg-forge-card p-6">
              <span className="text-sm font-bold text-forge-blue">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-forge-muted">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
