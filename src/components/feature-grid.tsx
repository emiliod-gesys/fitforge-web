"use client";

import { AmbientPhoto } from "@/components/ambient-photo";
import { FEATURE_ICONS } from "@/components/feature-icons";
import { useDictionary } from "@/components/locale-provider";

export function FeatureGrid() {
  const dict = useDictionary();

  return (
    <section
      id="features"
      className="relative overflow-hidden border-t border-forge-border bg-forge-black px-6 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">{dict.features.title}</h2>
          <p className="mt-4 max-w-xl text-forge-muted">{dict.features.subtitle}</p>
          <div className="mt-12 grid gap-x-10 gap-y-12 sm:grid-cols-2">
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

        <div className="relative mx-auto hidden aspect-[735/917] w-full max-w-[480px] lg:block">
          <AmbientPhoto
            src="/photos/athlete-back.jpg"
            sizes="480px"
            className="inset-0 mask-fade-y"
            maskClassName="mask-fade-x"
            imageClassName="object-cover object-[50%_20%]"
          />
        </div>
      </div>
    </section>
  );
}
