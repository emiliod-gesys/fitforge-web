import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { LocaleProvider } from "@/components/locale-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

const siteUrl = "https://www.forgen.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "FORGEN",
  title: {
    default: "FORGEN — Forge Your Potential",
    template: "%s | FORGEN",
  },
  description:
    "FORGEN is a mobile fitness app for Android and iOS: 1,300+ exercises, workouts, nutrition, progress, social, and AI Coach. Gym, running, and HYROX.",
  keywords: [
    "FORGEN",
    "fitness app",
    "workout tracker",
    "HYROX",
    "AI coach",
    "nutrition",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "FORGEN",
    siteName: "FORGEN",
    url: siteUrl,
    description:
      "FORGEN is a mobile fitness app for Android and iOS. Train, log nutrition, track progress, and use an AI Coach.",
    type: "website",
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: "FORGEN" }],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FORGEN",
  applicationCategory: "HealthApplication",
  operatingSystem: "Android, iOS",
  url: siteUrl,
  description:
    "FORGEN is a mobile fitness app for Android and iOS used to create and follow workouts, log nutrition, track progress, connect with friends, and use an AI Coach.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={lexend.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <LocaleProvider locale={locale} dict={dict}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}
