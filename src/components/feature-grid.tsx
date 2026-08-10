"use client";

import { FEATURE_ICONS } from "@/components/feature-icons";
import { useDictionary } from "@/components/locale-provider";

export function FeatureGrid() {
  const dict = useDictionary();

  return (
    <section id="features" className="border-t border-forge-border bg-forge-surface px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          {dict.features.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-forge-muted">
          {dict.features.subtitle}
        </p>
        <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {dict.features.items.map((feature) => {
            const Icon = FEATURE_ICONS[feature.id];
            return (
              <article key={feature.id} className="border-t border-forge-border/80 pt-6">
                <div className="inline-flex rounded-xl border border-forge-border/80 bg-forge-card/40 p-3">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-forge-muted">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
