"use client";

import { AmbientPhoto } from "@/components/ambient-photo";
import { useDictionary } from "@/components/locale-provider";

export function CatalogHighlight() {
  const dict = useDictionary();

  return (
    <section className="relative overflow-hidden border-t border-forge-border bg-forge-black px-6 py-24 md:py-36">
      {/* Dumbbell rack, softened and vignetted, as depth behind the number. */}
      <AmbientPhoto
        src="/photos/gym-dumbbells.jpg"
        sizes="100vw"
        blend="normal"
        className="inset-0 opacity-40 mask-vignette"
        imageClassName="scale-105 object-cover object-center blur-[2px]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-forge-black via-forge-black/20 to-forge-black"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(48,88,144,0.22)_0%,_transparent_65%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="animate-fade-up text-[clamp(4.5rem,16vw,9rem)] font-extrabold leading-none tracking-tight text-forge-blue drop-shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
          {dict.catalog.value}
        </p>
        <h2 className="mt-4 animate-fade-up text-2xl font-bold tracking-tight text-forge-text md:text-4xl [animation-delay:80ms]">
          {dict.catalog.label}
        </h2>
        <p className="mx-auto mt-4 max-w-xl animate-fade-up text-base text-forge-muted md:text-lg [animation-delay:160ms]">
          {dict.catalog.description}
        </p>
      </div>
    </section>
  );
}
