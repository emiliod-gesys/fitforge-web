"use client";

import Image from "next/image";
import { useState } from "react";

export type AppScreenshot = {
  src: string;
  alt: string;
  title: string;
};

export type AppFeatureGroup = {
  id: string;
  label: string;
  description: string;
  screenshots: AppScreenshot[];
};

export const APP_FEATURE_GROUPS: AppFeatureGroup[] = [
  {
    id: "train",
    label: "Entrenar",
    description:
      "Mapa de fatiga muscular, rachas semanales, rutinas completas y registro de pesos y repeticiones con sugerencias de progreso por IA.",
    screenshots: [
      {
        src: "/screenshots/01-train-recovery.png",
        alt: "Mapa de recuperación muscular",
        title: "Recuperación muscular",
      },
      {
        src: "/screenshots/07-train-streak.png",
        alt: "Racha y entrenamiento semanal",
        title: "Racha y constancia",
      },
      {
        src: "/screenshots/07-train-session.png",
        alt: "Sesión de entrenamiento activa",
        title: "Rutinas en vivo",
      },
      {
        src: "/screenshots/07-train-sets.png",
        alt: "Registro de series, peso y repeticiones",
        title: "Pesos y reps",
      },
    ],
  },
  {
    id: "coach",
    label: "Coach IA",
    description:
      "Chat integrado con tu historial y perfil. Crea rutinas directamente en el sistema.",
    screenshots: [
      {
        src: "/screenshots/02-coach-ia.png",
        alt: "Coach personal con inteligencia artificial",
        title: "Tu entrenador con IA",
      },
    ],
  },
  {
    id: "nutrition",
    label: "Nutrición",
    description:
      "Macros y calorías diarias con sugerencias según tus objetivos. Agrega alimentos por foto, quick add con IA o manualmente.",
    screenshots: [
      {
        src: "/screenshots/03-nutrition-budget.png",
        alt: "Presupuesto calórico y macronutrientes",
        title: "Presupuesto del día",
      },
      {
        src: "/screenshots/03-nutrition-meals.png",
        alt: "Registro de comidas del día",
        title: "Comidas del día",
      },
      {
        src: "/screenshots/03-nutrition-detail.png",
        alt: "Detalle nutricional con foto e IA",
        title: "Foto, IA o manual",
      },
    ],
  },
  {
    id: "progress",
    label: "Progreso",
    description:
      "Estadísticas mensuales, medallas, nivel con XP y récords personales.",
    screenshots: [
      {
        src: "/screenshots/04-progress-stats.png",
        alt: "Estadísticas mensuales y nivel",
        title: "Estadísticas y nivel",
      },
      {
        src: "/screenshots/04-progress-medals.png",
        alt: "Medallas y récords personales",
        title: "Medallas y PRs",
      },
    ],
  },
  {
    id: "social",
    label: "Social",
    description:
      "Agrega amigos, comparte progreso y compite en leaderboards entre amigos y globales.",
    screenshots: [
      {
        src: "/screenshots/05-social-friends.png",
        alt: "Lista de amigos y solicitudes",
        title: "Tu comunidad",
      },
      {
        src: "/screenshots/05-social-leaderboards.png",
        alt: "Clasificaciones globales y entre amigos",
        title: "Leaderboards",
      },
    ],
  },
  {
    id: "profile",
    label: "Perfil",
    description:
      "Administra tu perfil y registra métricas corporales para una experiencia totalmente personalizada.",
    screenshots: [
      {
        src: "/screenshots/06-profile-personal.png",
        alt: "Datos personales y avatar",
        title: "Datos personales",
      },
      {
        src: "/screenshots/06-profile-metrics.png",
        alt: "Métricas corporales",
        title: "Métricas corporales",
      },
    ],
  },
];

function ScreenshotCard({ shot }: { shot: AppScreenshot }) {
  return (
    <figure className="overflow-hidden rounded-2xl border border-forge-border bg-forge-card">
      <div className="relative aspect-[9/19] bg-forge-elevated">
        <Image
          src={shot.src}
          alt={shot.alt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
        />
      </div>
      <figcaption className="p-3">
        <p className="text-sm font-medium">{shot.title}</p>
      </figcaption>
    </figure>
  );
}

export function AppScreenshotsSection() {
  const [activeId, setActiveId] = useState(APP_FEATURE_GROUPS[0].id);
  const active = APP_FEATURE_GROUPS.find((g) => g.id === activeId) ?? APP_FEATURE_GROUPS[0];

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
            Misma cuenta, mismos datos. Las 6 áreas de la app, en detalle.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {APP_FEATURE_GROUPS.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => setActiveId(group.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeId === group.id
                  ? "bg-forge-orange text-white"
                  : "border border-forge-border text-forge-muted hover:border-forge-orange/50 hover:text-forge-text"
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>

        <div className="mt-8 max-w-3xl">
          <h3 className="text-xl font-bold">{active.label}</h3>
          <p className="mt-2 text-forge-muted">{active.description}</p>
        </div>

        <div
          className={`mt-8 grid gap-5 ${
            active.screenshots.length === 1
              ? "max-w-xs"
              : active.screenshots.length === 2
                ? "sm:grid-cols-2 max-w-2xl"
                : active.screenshots.length === 3
                  ? "sm:grid-cols-2 lg:grid-cols-3"
                  : "sm:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {active.screenshots.map((shot) => (
            <ScreenshotCard key={shot.src} shot={shot} />
          ))}
        </div>
      </div>
    </section>
  );
}
