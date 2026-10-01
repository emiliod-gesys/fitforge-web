"use client";

import { AmbientPhoto } from "@/components/ambient-photo";
import { useDictionary } from "@/components/locale-provider";

export function HowItWorks() {
  const dict = useDictionary();
  const steps = dict.how.steps;

  return (
    <section
      id="how"
      className="relative overflow-hidden border-t border-forge-border bg-forge-black px-6 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        {/* Spotlight shot: the grip, vignetted so the edges dissolve. */}
        <div className="relative mx-auto hidden aspect-[314/540] w-full max-w-[360px] lg:block">
          <div
            className="pointer-events-none absolute -inset-16 bg-[radial-gradient(closest-side,_rgba(22,49,89,0.55),_transparent)]"
            aria-hidden
          />
          <AmbientPhoto
            src="/photos/kettlebell-grip.jpg"
            sizes="360px"
            blend="normal"
            className="inset-0 mask-vignette"
            imageClassName="object-cover brightness-90 contrast-110"
          />
        </div>

        <div className="text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-wider text-forge-blue">
            {dict.how.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">{dict.how.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-forge-muted lg:mx-0">
            {dict.how.subtitle}
          </p>
          <ol className="mt-12 space-y-10 text-left">
            {steps.map((step, index) => (
              <li key={step.title} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-forge-blue/60 bg-forge-blue/10 text-sm font-bold text-forge-blue">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {index < steps.length - 1 ? (
                    <span
                      className="mt-3 w-px flex-1 bg-gradient-to-b from-forge-blue/50 to-transparent"
                      aria-hidden
                    />
                  ) : null}
                </div>
                <div className="pb-1">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-forge-muted">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
