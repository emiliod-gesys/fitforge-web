"use client";

import Image from "next/image";
import Link from "next/link";
import { Logo } from "./logo";
import { AmbientPhoto } from "@/components/ambient-photo";
import { useDictionary, useLocaleContext } from "@/components/locale-provider";

export function Hero() {
  const dict = useDictionary();
  const { locale } = useLocaleContext();
  const shot = `/screenshots/${locale}/04-train-session.png`;

  return (
    <section className="relative overflow-hidden bg-forge-black px-6 pb-20 pt-12 md:pb-28 md:pt-16">
      {/* Cinematic backdrop: the athlete emerges from the right and fades into the page. */}
      <AmbientPhoto
        src="/photos/athlete-shoulder.jpg"
        priority
        sizes="(min-width: 1024px) 62vw, 100vw"
        className="inset-y-0 right-0 w-full opacity-50 mask-fade-y md:opacity-80 lg:w-[62%]"
        maskClassName="mask-fade-l"
        imageClassName="object-cover object-[60%_30%]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-forge-black via-forge-black/50 to-transparent lg:via-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 animate-atmosphere bg-[radial-gradient(ellipse_at_top,_rgba(48,88,144,0.28)_0%,_transparent_58%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-forge-navy/50 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center lg:text-left">
          <div className="animate-fade-in">
            <Logo className="mx-auto h-40 w-auto max-w-[min(100%,16rem)] md:h-52 md:max-w-xs lg:mx-0" />
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-forge-blue">
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
          <div
            className="pointer-events-none absolute -inset-10 rounded-full bg-forge-blue/20 blur-3xl"
            aria-hidden
          />
          <div className="relative rounded-[2rem] border border-forge-border bg-forge-black p-2 shadow-glow">
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
    </section>
  );
}
