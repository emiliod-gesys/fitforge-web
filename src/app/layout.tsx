import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { I18nShell } from "@/components/i18n-shell";
import { APP_NAME, APP_PURPOSE_EN, SITE_URL } from "@/lib/brand";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: APP_NAME,
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_PURPOSE_EN,
  keywords: [
    "FORGEN",
    "fitness app",
    "workout tracker",
    "HYROX",
    "AI coach",
    "nutrition",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: APP_NAME,
    siteName: APP_NAME,
    url: SITE_URL,
    description: APP_PURPOSE_EN,
    type: "website",
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: APP_NAME }],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lexend.variable}>
      <head>
        <title>{APP_NAME}</title>
        <meta name="application-name" content={APP_NAME} />
        <meta name="description" content={APP_PURPOSE_EN} />
      </head>
      <body className="flex min-h-screen flex-col font-sans">
        <I18nShell>{children}</I18nShell>
      </body>
    </html>
  );
}
