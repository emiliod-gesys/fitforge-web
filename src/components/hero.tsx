"use client";

import Image from "next/image";
import Link from "next/link";
import { Logo } from "./logo";
import { useDictionary, useLocaleContext } from "@/components/locale-provider";

export function Hero() {
  const dict = useDictionary();
  const { locale } = useLocaleContext();
  const shot = `/screenshots/${locale}/04-train-session.png`;

  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-12 md:pb-28 md:pt-16">
      <div
        className="pointer-events-none absolute inset-0 animate-atmosphere bg-[radial-gradient(ellipse_at_top,_rgba(48,88,144,0.28)_0%,_transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-forge-navy/50 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-forge-blue/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="flex justify-center animate-fade-in">
          <Logo className="h-48 w-auto max-w-[min(100%,22rem)] md:h-64 md:max-w-md" />
        </div>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center lg:text-left">
          <p className="text-sm font-semibold uppercase tracking-wider text-forge-blue">
            {dict.hero.eyebrow}
          </p>
          <h1 className="mt-3 animate-fade-up text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
            {dict.hero.title}
          </h1>
          <p className="mt-5 max-w-xl animate-fade-up text-lg text-forge-muted md:text-xl lg:mx-0 mx-auto">
            {dict.hero.subtitle}
          </p>
          <p className="mt-3 text-sm text-forge-muted/80">{dict.hero.proof}</p>
          <div className="mt-8 flex animate-fade-up flex-wrap items-center justify-center gap-4 lg:justify-start">
            <Link
              href="/download"
              className="rounded-xl bg-forge-blue px-7 py-3.5 font-semibold text-white shadow-glow transition hover:bg-forge-blue-dark"
            >
              {dict.hero.downloadCta}
            </Link>
            <Link
              href="/signup"
              className="rounded-xl border border-forge-border bg-forge-charcoal/60 px-7 py-3.5 font-semibold text-forge-text transition hover:border-forge-blue/60"
            >
              {dict.hero.signupCta}
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[280px] animate-fade-up lg:max-w-[320px]">
          <div className="rounded-[2rem] border border-forge-border bg-forge-black p-2 shadow-glow">
            <Image
              src={shot}
              alt={dict.hero.title}
              width={390}
              height={844}
              className="h-auto w-full rounded-[1.5rem]"
              priority
            />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
