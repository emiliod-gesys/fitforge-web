import { LocaleProvider } from "@/components/locale-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { getLocale } from "@/lib/i18n/get-locale";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "FORGEN",
  applicationCategory: "HealthApplication",
  operatingSystem: "Android, iOS",
  url: "https://www.forgen.app",
  description:
    "FORGEN is a mobile fitness application for Android and iOS used to create and follow workouts, log nutrition, track progress, connect with friends, and use an AI Coach. Users can sign in to FORGEN with Google, Apple, or email.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export async function I18nShell({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <LocaleProvider locale={locale} dict={dict}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </LocaleProvider>
  );
}
