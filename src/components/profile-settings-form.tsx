"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { UserProfile } from "@/lib/types";

const FITNESS_GOALS = [
  "Hipertrofia",
  "Fuerza",
  "Pérdida de grasa",
  "Resistencia",
  "Mantenimiento",
] as const;

const EXPERIENCE_LEVELS = [
  { value: "principiante", label: "Principiante" },
  { value: "intermedio", label: "Intermedio" },
  { value: "avanzado", label: "Avanzado" },
] as const;

const ACTIVITY_LEVELS = [
  { value: "sedentary", label: "Sedentario" },
  { value: "moderate", label: "Moderado" },
  { value: "high", label: "Alto" },
] as const;

const GENDER_LABELS: Record<string, string> = {
  male: "Masculino",
  female: "Femenino",
  non_binary: "No binario",
  prefer_not_to_say: "Prefiero no decir",
};

function formatWeightKg(kg: number | null | undefined): string {
  if (kg == null || Number.isNaN(kg)) return "—";
  return new Intl.NumberFormat("es", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(kg);
}

type Props = {
  profile: UserProfile;
  email: string;
};

export function ProfileSettingsForm({ profile, email }: Props) {
  const router = useRouter();
  const [displayName, setDisplayName] = useState(profile.display_name ?? "");
  const [preferredLanguage, setPreferredLanguage] = useState(profile.preferred_language);
  const [fitnessGoal, setFitnessGoal] = useState(profile.fitness_goal ?? "");
  const [experienceLevel, setExperienceLevel] = useState(profile.experience_level ?? "intermedio");
  const [activityLevel, setActivityLevel] = useState(profile.activity_level);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const genderLabel = profile.gender
    ? (GENDER_LABELS[profile.gender] ?? profile.gender)
    : "Sin especificar";

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    const supabase = createClient();
    const trimmedName = displayName.trim();

    const { error: updateError } = await supabase
      .from("profiles")
      .update({
        display_name: trimmedName || null,
        search_name: trimmedName ? trimmedName.toLowerCase() : null,
        preferred_language: preferredLanguage,
        fitness_goal: fitnessGoal || null,
        experience_level: experienceLevel || null,
        activity_level: activityLevel,
        updated_at: new Date().toISOString(),
      })
      .eq("id", profile.id);

    setLoading(false);

    if (updateError) {
      setError(updateError.message);
      return;
    }

    setMessage("Perfil actualizado correctamente.");
    router.refresh();
  }

  const inputClass =
    "w-full rounded-xl border border-forge-border bg-forge-card px-4 py-3 outline-none ring-forge-orange focus:ring-2";
  const readOnlyClass = `${inputClass} opacity-60`;

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className={labelClass} htmlFor="email">
          Email
        </label>
        <input id="email" type="email" value={email} disabled className={readOnlyClass} />
      </div>

      <div>
        <label className={labelClass} htmlFor="display-name">
          Nombre
        </label>
        <input
          id="display-name"
          type="text"
          maxLength={50}
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className={inputClass}
        />
      </div>

      <div className="rounded-xl border border-forge-border bg-forge-card/50 px-4 py-3 text-sm text-forge-muted">
        Las métricas corporales solo se editan en la app móvil (Perfil → composición
        corporal). Aquí puedes consultarlas.
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="age">
            Edad
          </label>
          <input
            id="age"
            type="text"
            value={profile.age ?? "—"}
            disabled
            className={readOnlyClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="gender">
            Género
          </label>
          <input id="gender" type="text" value={genderLabel} disabled className={readOnlyClass} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="height">
            Altura (cm)
          </label>
          <input
            id="height"
            type="text"
            value={profile.height_cm ?? "—"}
            disabled
            className={readOnlyClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="weight">
            Peso (kg)
          </label>
          <input
            id="weight"
            type="text"
            value={formatWeightKg(profile.body_weight)}
            disabled
            className={readOnlyClass}
          />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="language">
          Idioma
        </label>
        <select
          id="language"
          value={preferredLanguage}
          onChange={(e) => setPreferredLanguage(e.target.value as "es" | "en")}
          className={inputClass}
        >
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="goal">
          Objetivo fitness
        </label>
        <select
          id="goal"
          value={fitnessGoal}
          onChange={(e) => setFitnessGoal(e.target.value)}
          className={inputClass}
        >
          <option value="">Sin especificar</option>
          {FITNESS_GOALS.map((goal) => (
            <option key={goal} value={goal}>
              {goal}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="experience">
            Experiencia
          </label>
          <select
            id="experience"
            value={experienceLevel}
            onChange={(e) => setExperienceLevel(e.target.value)}
            className={inputClass}
          >
            {EXPERIENCE_LEVELS.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="activity">
            Nivel de actividad
          </label>
          <select
            id="activity"
            value={activityLevel}
            onChange={(e) =>
              setActivityLevel(e.target.value as UserProfile["activity_level"])
            }
            className={inputClass}
          >
            {ACTIVITY_LEVELS.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {error && (
        <p className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </p>
      )}

      {message && (
        <p className="rounded-lg border border-forge-orange/30 bg-forge-orange/10 px-4 py-3 text-sm">
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="rounded-xl bg-forge-orange px-6 py-3 font-semibold text-white hover:bg-forge-orange-dark disabled:opacity-60"
      >
        {loading ? "Guardando…" : "Guardar cambios"}
      </button>
    </form>
  );
}

const labelClass = "mb-1.5 block text-sm font-medium";
