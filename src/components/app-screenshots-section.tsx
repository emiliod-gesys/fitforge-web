"use client";

import Image from "next/image";
import { useState } from "react";

export type AppScreenshot = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

/** Añade capturas en public/screenshots/ y actualiza esta lista. */
export const APP_SCREENSHOTS: AppScreenshot[] = [
  {
    src: "/screenshots/01-home.png",
    alt: "Pantalla principal de FitForge",
    title: "Tu progreso",
    description: "Dashboard con XP, racha y próximo entreno.",
  },
  {
    src: "/screenshots/02-workout.png",
    alt: "Registro de entrenamiento",
    title: "Entrena inteligente",
    description: "Registra series, reps y PRs en tiempo real.",
  },
  {
    src: "/screenshots/03-coach.png",
    alt: "Coach con IA",
    title: "Coach IA",
    description: "Rutinas y consejos personalizados con IA.",
  },
  {
    src: "/screenshots/04-social.png",
    alt: "Social y leaderboards",
    title: "Comunidad",
    description: "Amigos, rankings y competencia sana.",
  },
];

function ScreenshotCard({ shot }: { shot: AppScreenshot }) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className="overflow-hidden rounded-2xl border border-forge-border bg-forge-card">
      <div className="relative aspect-[9/19] bg-forge-elevated">
        {!failed ? (
          <Image
            src={shot.src}
            alt={shot.alt}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 50vw, 25vw"
            onError={() => setFailed(true)}
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 p-4 text-center">
            <span className="text-3xl">📱</span>
            <p className="text-xs text-forge-muted">Captura próximamente</p>
          </div>
        )}
      </div>
      <figcaption className="p-4">
        <p className="font-semibold">{shot.title}</p>
        <p className="mt-1 text-sm text-forge-muted">{shot.description}</p>
      </figcaption>
    </figure>
  );
}

export function AppScreenshotsSection() {
  return (
    <section id="app" className="border-t border-forge-border bg-forge-surface px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-forge-orange">
            La app
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            FitForge en tu bolsillo
          </h2>
          <p className="mt-3 text-forge-muted">
            Misma cuenta, mismos datos. Entrena en el móvil y revisa tu progreso en la web.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {APP_SCREENSHOTS.map((shot) => (
            <ScreenshotCard key={shot.src} shot={shot} />
          ))}
        </div>
      </div>
    </section>
  );
}
