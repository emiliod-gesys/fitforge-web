import Link from "next/link";
import { Logo } from "./logo";
import { APP_NAME, APP_PURPOSE_EN } from "@/lib/brand";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries";

export function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-14 md:pb-32 md:pt-20">
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

      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <div className="animate-fade-in">
          <Logo className="h-48 w-auto max-w-[min(100%,22rem)] md:h-64 md:max-w-md" />
        </div>

        <h1 className="mt-10 animate-fade-up text-5xl font-extrabold tracking-tight md:text-7xl [animation-delay:120ms]">
          {APP_NAME}
        </h1>
        <p className="mt-3 animate-fade-up text-lg font-medium text-forge-blue md:text-xl [animation-delay:180ms]">
          {dict.hero.slogan}
        </p>

        <p className="mt-6 max-w-2xl animate-fade-up text-base leading-relaxed text-forge-muted md:text-lg [animation-delay:240ms]">
          {dict.hero.purpose}
        </p>
        {locale !== "en" ? (
          <p
            lang="en"
            className="mt-4 max-w-2xl text-base leading-relaxed text-forge-muted md:text-lg"
          >
            {APP_PURPOSE_EN}
          </p>
        ) : null}

        <div className="mt-10 flex animate-fade-up flex-wrap items-center justify-center gap-4 [animation-delay:360ms]">
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
    </section>
  );
}
