import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "FitForge — Forja tu mejor versión",
    template: "%s | FitForge",
  },
  description:
    "App de entrenamiento con IA, rutinas, progreso y comunidad. Disponible en Android e iOS.",
  openGraph: {
    title: "FitForge",
    description: "Forja tu mejor versión",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
