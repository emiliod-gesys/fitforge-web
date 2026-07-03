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

type Props = {
  profile: UserProfile;
  email: string;
};

export function ProfileSettingsForm({ profile, email }: Props) {
  const router = useRouter();
  const [displayName, setDisplayName] = useState(profile.display_name ?? "");
  const [age, setAge] = useState(profile.age?.toString() ?? "");
  const [gender, setGender] = useState(profile.gender ?? "");
  const [heightCm, setHeightCm] = useState(profile.height_cm?.toString() ?? "");
  const [bodyWeight, setBodyWeight] = useState(profile.body_weight?.toString() ?? "");
  const [unitSystem, setUnitSystem] = useState(profile.unit_system);
  const [preferredLanguage, setPreferredLanguage] = useState(profile.preferred_language);
  const [fitnessGoal, setFitnessGoal] = useState(profile.fitness_goal ?? "");
  const [experienceLevel, setExperienceLevel] = useState(profile.experience_level ?? "intermedio");
  const [activityLevel, setActivityLevel] = useState(profile.activity_level);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

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
        age: age ? Number(age) : null,
        gender: gender || null,
        height_cm: heightCm ? Number(heightCm) : null,
        body_weight: bodyWeight ? Number(bodyWeight) : null,
        unit_system: unitSystem,
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
  const labelClass = "mb-1.5 block text-sm font-medium";

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className={labelClass} htmlFor="email">
          Email
        </label>
        <input id="email" type="email" value={email} disabled className={`${inputClass} opacity-60`} />
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

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="age">
            Edad
          </label>
          <input
            id="age"
            type="number"
            min={1}
            max={119}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="gender">
            Género
          </label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className={inputClass}
          >
            <option value="">Sin especificar</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="non_binary">No binario</option>
            <option value="prefer_not_to_say">Prefiero no decir</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="height">
            Altura (cm)
          </label>
          <input
            id="height"
            type="number"
            min={50}
            max={280}
            value={heightCm}
            onChange={(e) => setHeightCm(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="weight">
            Peso ({unitSystem})
          </label>
          <input
            id="weight"
            type="number"
            min={1}
            step="0.1"
            value={bodyWeight}
            onChange={(e) => setBodyWeight(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="units">
            Unidades
          </label>
          <select
            id="units"
            value={unitSystem}
            onChange={(e) => setUnitSystem(e.target.value as "kg" | "lb")}
            className={inputClass}
          >
            <option value="kg">Kilogramos (kg)</option>
            <option value="lb">Libras (lb)</option>
          </select>
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
