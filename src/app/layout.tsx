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

export const metadata: Metadata = {
  title: {
    default: "FORGEN — Forja tu mejor versión",
    template: "%s | FORGEN",
  },
  description:
    "App móvil de fitness: entrenamiento, nutrición, progreso, social y coach con IA. Gym, carrera y HYROX. Disponible en Android; iOS próximamente.",
  openGraph: {
    title: "FORGEN",
    description: "Forja tu mejor versión — entrenas, comes, mides y te impulsas con IA y comunidad.",
    type: "website",
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: "FORGEN" }],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
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
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </LocaleProvider>
      </body>
    </html>
  );
}
