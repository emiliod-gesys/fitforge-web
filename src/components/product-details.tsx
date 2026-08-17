"use client";

import { useDictionary } from "@/components/locale-provider";

export function ProductDetails() {
  const dict = useDictionary();

  return (
    <section id="details" className="border-t border-forge-border px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-forge-blue">
          {dict.details.eyebrow}
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">
          {dict.details.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-forge-muted">
          {dict.details.subtitle}
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {dict.details.items.map((item) => (
            <article key={item.title} className="border-t border-forge-border/80 pt-6">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-forge-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
