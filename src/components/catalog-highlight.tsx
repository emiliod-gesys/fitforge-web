"use client";

import { useDictionary } from "@/components/locale-provider";

export function CatalogHighlight() {
  const dict = useDictionary();

  return (
    <section className="relative overflow-hidden border-t border-forge-border bg-forge-black px-6 py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(48,88,144,0.22)_0%,_transparent_65%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="animate-fade-up text-[clamp(4.5rem,16vw,9rem)] font-extrabold leading-none tracking-tight text-forge-blue">
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
