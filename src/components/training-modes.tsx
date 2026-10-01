"use client";

import { AmbientPhoto } from "@/components/ambient-photo";
import { useDictionary } from "@/components/locale-provider";

export function TrainingModes() {
  const dict = useDictionary();

  return (
    <section
      id="modes"
      className="relative overflow-hidden border-t border-forge-border bg-forge-surface px-6 py-20 md:py-28"
    >
      {/* Equipment flat-lay as a faint texture; the cards are glass on top of it. */}
      <AmbientPhoto
        src="/photos/gym-cable.jpg"
        sizes="100vw"
        blend="normal"
        className="inset-0 opacity-25 mask-vignette"
        imageClassName="object-cover object-[50%_45%]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-forge-surface via-transparent to-forge-surface"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl">
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
              className="rounded-2xl border border-forge-border/80 bg-forge-card/60 p-6 backdrop-blur-md transition hover:border-forge-blue/50"
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
