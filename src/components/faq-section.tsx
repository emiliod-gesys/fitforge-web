"use client";

import { useState } from "react";
import { useDictionary } from "@/components/locale-provider";

export function FaqSection() {
  const dict = useDictionary();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-forge-border bg-forge-surface px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-forge-blue">
          {dict.faq.eyebrow}
        </p>
        <h2 className="mt-3 text-center text-3xl font-bold md:text-4xl">
          {dict.faq.title}
        </h2>
        <div className="mt-10 divide-y divide-forge-border">
          {dict.faq.items.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  <span className="font-semibold">{item.q}</span>
                  <span className="text-forge-blue" aria-hidden>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen ? (
                  <p className="pb-4 text-sm leading-relaxed text-forge-muted">
                    {item.a}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
