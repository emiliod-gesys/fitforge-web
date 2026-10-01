"use client";

import { AmbientPhoto } from "@/components/ambient-photo";
import { useDictionary } from "@/components/locale-provider";

export function ProductDetails() {
  const dict = useDictionary();

  return (
    <section
      id="details"
      className="relative overflow-hidden border-t border-forge-border bg-forge-black px-6 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
        <div>
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-forge-blue lg:text-left">
            {dict.details.eyebrow}
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl lg:text-left">
            {dict.details.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-forge-muted lg:mx-0 lg:text-left">
            {dict.details.subtitle}
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
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

        {/* Shot on black, blended with "screen": only the athlete remains, no frame. */}
        <div className="relative mx-auto hidden aspect-[735/917] w-full max-w-[520px] lg:block">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,_rgba(22,49,89,0.5),_transparent)]"
            aria-hidden
          />
          <AmbientPhoto
            src="/photos/athlete-back.jpg"
            sizes="520px"
            className="inset-0 mask-fade-y"
            maskClassName="mask-fade-x"
            imageClassName="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
