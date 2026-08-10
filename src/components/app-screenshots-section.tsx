"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useDictionary, useLocaleContext } from "@/components/locale-provider";
import type { Locale } from "@/lib/i18n/config";

export type AppScreenshot = {
  src: string;
  alt: string;
  title: string;
};

export type AppFeatureGroupId =
  | "train"
  | "coach"
  | "nutrition"
  | "progress"
  | "social"
  | "students"
  | "profile";

/** Capturas por idioma. Rutas: /screenshots/{es|en}/... */
export const APP_SCREENSHOTS: Record<
  Locale,
  Record<AppFeatureGroupId, AppScreenshot[]>
> = {
  es: {
    train: [
      {
        src: "/screenshots/es/01-train-streak.png",
        alt: "Racha semanal e iniciar entrenamiento",
        title: "Racha y constancia",
      },
      {
        src: "/screenshots/es/02-train-suggested.png",
        alt: "Siguiente entreno sugerido y recientes",
        title: "Entreno sugerido",
      },
      {
        src: "/screenshots/es/03-train-routines.png",
        alt: "Lista de rutinas guardadas",
        title: "Rutinas",
      },
      {
        src: "/screenshots/es/04-train-session.png",
        alt: "Sesión de entrenamiento en curso",
        title: "Sesión en vivo",
      },
      {
        src: "/screenshots/es/05-train-sets.png",
        alt: "Registro de series, peso y repeticiones",
        title: "Pesos y reps",
      },
    ],
    coach: [
      {
        src: "/screenshots/es/01-coach-home.png",
        alt: "Coach IA con sugerencias de rutinas",
        title: "Tu coach personal",
      },
    ],
    nutrition: [
      {
        src: "/screenshots/es/01-nutrition-budget.png",
        alt: "Presupuesto calórico y macronutrientes del día",
        title: "Presupuesto del día",
      },
      {
        src: "/screenshots/es/02-nutrition-meals.png",
        alt: "Agua y comidas del día",
        title: "Agua y comidas",
      },
      {
        src: "/screenshots/es/03-nutrition-add.png",
        alt: "Añadir alimento a una comida",
        title: "Buscar y añadir",
      },
      {
        src: "/screenshots/es/04-nutrition-detail.png",
        alt: "Detalle nutricional con recalcular IA",
        title: "Detalle e IA",
      },
    ],
    progress: [
      {
        src: "/screenshots/es/01-progress-summary.png",
        alt: "Resumen de nivel, XP y estadísticas del mes",
        title: "Resumen y nivel",
      },
      {
        src: "/screenshots/es/02-progress-medals.png",
        alt: "Tendencia de volumen, peso y medallas",
        title: "Medallas y cuerpo",
      },
      {
        src: "/screenshots/es/03-progress-prs.png",
        alt: "Récords personales por ejercicio",
        title: "Récords personales",
      },
    ],
    social: [
      {
        src: "/screenshots/es/01-social-feed.png",
        alt: "Feed social con entrenos y récords",
        title: "Feed",
      },
      {
        src: "/screenshots/es/02-social-friends.png",
        alt: "Lista de amigos y tu círculo",
        title: "Amigos",
      },
      {
        src: "/screenshots/es/03-social-leaderboards.png",
        alt: "Clasificaciones entre amigos y globales",
        title: "Clasificaciones",
      },
    ],
    students: [
      {
        src: "/screenshots/es/01-students-list.png",
        alt: "Lista de alumnos",
        title: "Tus alumnos",
      },
      {
        src: "/screenshots/es/02-students-recovery.png",
        alt: "Recuperación muscular del alumno",
        title: "Recuperación",
      },
      {
        src: "/screenshots/es/03-students-detail.png",
        alt: "Nutrición y rutinas del alumno",
        title: "Nutrición y rutinas",
      },
    ],
    profile: [
      {
        src: "/screenshots/es/01-profile-home.png",
        alt: "Perfil con avatar, plan y datos personales",
        title: "Tu espacio",
      },
      {
        src: "/screenshots/es/02-profile-settings.png",
        alt: "Opciones de nutrición, entrenamiento y cuenta",
        title: "Ajustes",
      },
    ],
  },
  en: {
    train: [
      {
        src: "/screenshots/en/01-train-streak.png",
        alt: "Weekly streak and start workout",
        title: "Streak & consistency",
      },
      {
        src: "/screenshots/en/02-train-suggested.png",
        alt: "Suggested next workout and recent sessions",
        title: "Suggested workout",
      },
      {
        src: "/screenshots/en/03-train-routines.png",
        alt: "Saved routines list",
        title: "Routines",
      },
      {
        src: "/screenshots/en/04-train-session.png",
        alt: "Active training session",
        title: "Live session",
      },
      {
        src: "/screenshots/en/05-train-sets.png",
        alt: "Logging sets, weight and reps",
        title: "Weights & reps",
      },
    ],
    coach: [
      {
        src: "/screenshots/en/01-coach-home.png",
        alt: "AI Coach with routine suggestions",
        title: "Your personal coach",
      },
    ],
    nutrition: [
      {
        src: "/screenshots/en/01-nutrition-budget.png",
        alt: "Daily calorie budget and macros",
        title: "Daily budget",
      },
      {
        src: "/screenshots/en/02-nutrition-meals.png",
        alt: "Water tracker and today's meals",
        title: "Water & meals",
      },
      {
        src: "/screenshots/en/03-nutrition-add.png",
        alt: "Search and add food to a meal",
        title: "Search & add",
      },
      {
        src: "/screenshots/en/04-nutrition-detail.png",
        alt: "Nutrition details with AI recalculate",
        title: "Details & AI",
      },
    ],
    progress: [
      {
        src: "/screenshots/en/01-progress-summary.png",
        alt: "Level overview, XP and monthly stats",
        title: "Overview & level",
      },
      {
        src: "/screenshots/en/02-progress-medals.png",
        alt: "Volume trend, body weight and milestones",
        title: "Milestones & body",
      },
      {
        src: "/screenshots/en/03-progress-prs.png",
        alt: "Personal records by exercise",
        title: "Personal records",
      },
    ],
    social: [
      {
        src: "/screenshots/en/01-social-feed.png",
        alt: "Social feed with workout and PR activity",
        title: "Feed",
      },
      {
        src: "/screenshots/en/02-social-friends.png",
        alt: "Friends list and your circle rankings",
        title: "Friends",
      },
      {
        src: "/screenshots/en/03-social-leaderboards.png",
        alt: "Friends and global leaderboards",
        title: "Leaderboards",
      },
    ],
    students: [
      {
        src: "/screenshots/en/01-students-list.png",
        alt: "Students list",
        title: "Your students",
      },
      {
        src: "/screenshots/en/02-students-recovery.png",
        alt: "Student muscle recovery",
        title: "Muscle recovery",
      },
      {
        src: "/screenshots/en/03-students-detail.png",
        alt: "Student nutrition and routines",
        title: "Nutrition & routines",
      },
    ],
    profile: [
      {
        src: "/screenshots/en/01-profile-home.png",
        alt: "Profile with avatar, plan and personal details",
        title: "Your space",
      },
      {
        src: "/screenshots/en/02-profile-settings.png",
        alt: "Nutrition, training and account settings",
        title: "Settings",
      },
    ],
  },
};

const GROUP_IDS: AppFeatureGroupId[] = [
  "train",
  "coach",
  "nutrition",
  "progress",
  "social",
  "students",
  "profile",
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
  const dict = useDictionary();
  const { locale } = useLocaleContext();
  const [activeId, setActiveId] = useState<AppFeatureGroupId>("train");

  const groups = useMemo(
    () =>
      GROUP_IDS.map((id) => ({
        id,
        label: dict.app.groups[id].label,
        description: dict.app.groups[id].description,
        screenshots: APP_SCREENSHOTS[locale][id],
      })),
    [dict, locale],
  );

  const active = groups.find((g) => g.id === activeId) ?? groups[0];

  return (
    <section id="app" className="border-t border-forge-border bg-forge-surface px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-forge-blue">
            {dict.app.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">{dict.app.title}</h2>
          <p className="mt-3 text-forge-muted">{dict.app.subtitle}</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {groups.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => setActiveId(group.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                activeId === group.id
                  ? "bg-forge-blue text-white"
                  : "border border-forge-border text-forge-muted hover:border-forge-blue/50 hover:text-forge-text"
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

        {active.screenshots.length === 0 ? (
          <p className="mt-8 text-sm text-forge-muted">{dict.app.emptyScreenshots}</p>
        ) : (
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
        )}
      </div>
    </section>
  );
}
