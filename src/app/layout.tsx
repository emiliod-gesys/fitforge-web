import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Forgen — Forja tu mejor versión",
    template: "%s | Forgen",
  },
  description:
    "App de entrenamiento con IA, rutinas, progreso y comunidad. Disponible en Android e iOS.",
  openGraph: {
    title: "Forgen",
    description: "Forja tu mejor versión",
    type: "website",
    images: [{ url: "/logo.png", width: 1024, height: 1024, alt: "Forgen" }],
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
    <html lang="es" className={lexend.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
