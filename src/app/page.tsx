"use client";

import Link from "next/link";
import { AmbientPhoto } from "@/components/ambient-photo";
import { AppScreenshotsSection } from "@/components/app-screenshots-section";
import { CatalogHighlight } from "@/components/catalog-highlight";
import { DownloadSection } from "@/components/download-section";
import { FaqSection } from "@/components/faq-section";
import { FeatureGrid } from "@/components/feature-grid";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { LeaderboardSection } from "@/components/leaderboard-section";
import { PricingSection } from "@/components/pricing-section";
import { ProductDetails } from "@/components/product-details";
import { TrainingModes } from "@/components/training-modes";
import { useDictionary } from "@/components/locale-provider";

export default function HomePage() {
  const dict = useDictionary();

  return (
    <>
      <Hero />
      <HowItWorks />
      <CatalogHighlight />
      <TrainingModes />
      <AppScreenshotsSection />
      <ProductDetails />
      <FeatureGrid />
      <PricingSection />
      <FaqSection />
      <DownloadSection />
      <section className="relative overflow-hidden border-t border-forge-border bg-forge-black px-6 py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(22,49,89,0.4)_0%,_transparent_60%)]"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* The athlete, back to camera, dissolving into the page on every side. */}
          <div className="relative mx-auto aspect-[682/794] w-full max-w-[300px] lg:max-w-[460px]">
            <AmbientPhoto
              src="/photos/athlete-stance.jpg"
              sizes="(min-width: 1024px) 460px, 300px"
              className="inset-0 mask-fade-y"
              maskClassName="mask-fade-x"
              imageClassName="object-cover"
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold md:text-4xl">{dict.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-forge-muted lg:mx-0">
              {dict.cta.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link
                href="/signup"
                className="rounded-xl bg-forge-blue px-7 py-3.5 font-semibold text-white shadow-glow transition hover:bg-forge-blue-dark"
              >
                {dict.cta.createAccount}
              </Link>
              <Link
                href="/download"
                className="rounded-xl border border-forge-border px-7 py-3.5 font-semibold text-forge-text transition hover:border-forge-blue hover:text-forge-blue"
              >
                {dict.cta.downloadApp}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <LeaderboardSection />
    </>
  );
}
