"use client";

import { useCallback, useEffect, useState } from "react";
import {
  LEADERBOARD_METRICS,
  LEADERBOARD_PERIODS,
  formatLeaderboardValue,
  parseLeaderboardResult,
  rankColor,
} from "@/lib/leaderboard";
import { ProfileAvatar } from "@/components/profile-avatar";
import type {
  LeaderboardEntry,
  LeaderboardMetric,
  LeaderboardPeriod,
  LeaderboardResult,
} from "@/lib/types";

function LeaderboardRow({
  entry,
  metric,
  period,
}: {
  entry: LeaderboardEntry;
  metric: LeaderboardMetric;
  period: LeaderboardPeriod;
}) {
  const name = entry.display_name ?? "Usuario";

  return (
    <li
      className={`flex items-center gap-4 rounded-xl border px-4 py-3 ${
        entry.is_current_user
          ? "border-forge-orange/50 bg-forge-orange/10"
          : "border-forge-border bg-forge-card/60"
      }`}
    >
      <span className={`w-8 text-center text-sm font-bold ${rankColor(entry.rank)}`}>
        {entry.rank}
      </span>
      <ProfileAvatar
        avatarUrl={entry.avatar_url}
        displayName={name}
        size={40}
      />
      <div className="min-w-0 flex-1">
        <p className="truncate font-medium">{name}</p>
        {entry.is_current_user && (
          <p className="text-xs text-forge-orange">Tú</p>
        )}
      </div>
      <p className="shrink-0 text-sm font-semibold text-forge-orange">
        {formatLeaderboardValue(metric, entry, period)}
      </p>
    </li>
  );
}

export function LeaderboardSection() {
  const [metric, setMetric] = useState<LeaderboardMetric>("level");
  const [period, setPeriod] = useState<LeaderboardPeriod>("all");
  const [result, setResult] = useState<LeaderboardResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const params = new URLSearchParams({
        metric,
        period,
        scope: "global",
        limit: "25",
      });
      const response = await fetch(`/api/leaderboard?${params}`);

      if (!response.ok) {
        const body = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(
          body?.error ??
            "No se pudo cargar el ranking. Verifica las variables de Supabase en Vercel y redeploy.",
        );
      }

      const data = await response.json();
      setResult(parseLeaderboardResult(data));
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo cargar el ranking");
      setResult(null);
    } finally {
      setLoading(false);
    }
  }, [metric, period]);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <section id="leaderboards" className="border-t border-forge-border bg-forge-black px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-forge-orange">
            Comunidad
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            Clasificaciones globales
          </h2>
          <p className="mt-3 text-forge-muted">
            Compite con atletas de todo el mundo. Los mismos rankings que en la app.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {LEADERBOARD_PERIODS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setPeriod(item.id)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                period === item.id
                  ? "bg-forge-orange text-white"
                  : "border border-forge-border text-forge-muted hover:border-forge-orange/50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {LEADERBOARD_METRICS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setMetric(item.id)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                metric === item.id
                  ? "bg-forge-card text-forge-text ring-1 ring-forge-orange"
                  : "border border-forge-border text-forge-muted hover:border-forge-orange/50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {loading && (
            <p className="text-center text-sm text-forge-muted">Cargando ranking…</p>
          )}

          {error && !loading && (
            <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-sm text-red-300">
              {error}
            </p>
          )}

          {!loading && !error && result && result.entries.length === 0 && (
            <p className="text-center text-sm text-forge-muted">
              Aún no hay datos en este ranking. ¡Sé el primero en entrenar!
            </p>
          )}

          {!loading && result && result.entries.length > 0 && (
            <ul className="space-y-2">
              {result.entries.map((entry) => (
                <LeaderboardRow
                  key={entry.user_id}
                  entry={entry}
                  metric={metric}
                  period={period}
                />
              ))}
            </ul>
          )}

          {!loading && result?.current_user_outside_top && (
            <div className="mt-6">
              <p className="mb-2 text-center text-xs font-semibold uppercase tracking-wide text-forge-muted">
                Tu posición
              </p>
              <LeaderboardRow
                entry={result.current_user_outside_top}
                metric={metric}
                period={period}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
