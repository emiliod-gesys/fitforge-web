"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  formatLeaderboardValue,
  parseLeaderboardResult,
  rankColor,
} from "@/lib/leaderboard";
import { ProfileAvatar } from "@/components/profile-avatar";
import { useDictionary } from "@/components/locale-provider";
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
  youLabel,
  userFallback,
  levelLabel,
}: {
  entry: LeaderboardEntry;
  metric: LeaderboardMetric;
  period: LeaderboardPeriod;
  youLabel: string;
  userFallback: string;
  levelLabel: string;
}) {
  const name = entry.display_name ?? userFallback;
  const rawValue = formatLeaderboardValue(metric, entry, period);
  const displayValue =
    metric === "level" && period === "all"
      ? (() => {
          const num = rawValue.match(/\d+/)?.[0];
          return num ? `${levelLabel} ${num}` : rawValue;
        })()
      : rawValue;

  return (
    <li
      className={`flex items-center gap-4 rounded-xl border px-4 py-3 ${
        entry.is_current_user
          ? "border-forge-blue/50 bg-forge-blue/10"
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
          <p className="text-xs text-forge-blue">{youLabel}</p>
        )}
      </div>
      <p className="shrink-0 text-sm font-semibold text-forge-blue">
        {displayValue}
      </p>
    </li>
  );
}

export function LeaderboardSection() {
  const dict = useDictionary();
  const [metric, setMetric] = useState<LeaderboardMetric>("level");
  const [period, setPeriod] = useState<LeaderboardPeriod>("all");
  const [result, setResult] = useState<LeaderboardResult | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const periods = useMemo(
    () =>
      (
        [
          { id: "week" as const, label: dict.leaderboards.periods.week },
          { id: "month" as const, label: dict.leaderboards.periods.month },
          { id: "all" as const, label: dict.leaderboards.periods.all },
        ]
      ),
    [dict],
  );

  const metrics = useMemo(
    () =>
      (
        [
          { id: "level" as const, label: dict.leaderboards.metrics.level },
          { id: "volume" as const, label: dict.leaderboards.metrics.volume },
          { id: "workouts" as const, label: dict.leaderboards.metrics.workouts },
          { id: "calories" as const, label: dict.leaderboards.metrics.calories },
          { id: "distance" as const, label: dict.leaderboards.metrics.distance },
          { id: "reps" as const, label: dict.leaderboards.metrics.reps },
        ]
      ),
    [dict],
  );

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
          <p className="text-sm font-semibold uppercase tracking-wider text-forge-blue">
            {dict.leaderboards.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">
            {dict.leaderboards.title}
          </h2>
          <p className="mt-3 text-forge-muted">{dict.leaderboards.subtitle}</p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {periods.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setPeriod(item.id)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                period === item.id
                  ? "bg-forge-blue text-white"
                  : "border border-forge-border text-forge-muted hover:border-forge-blue/50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {metrics.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setMetric(item.id)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                metric === item.id
                  ? "bg-forge-card text-forge-text ring-1 ring-forge-blue"
                  : "border border-forge-border text-forge-muted hover:border-forge-blue/50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {loading && (
            <p className="text-center text-sm text-forge-muted">
              {dict.leaderboards.loading}
            </p>
          )}

          {error && !loading && (
            <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-center text-sm text-red-300">
              {error}
            </p>
          )}

          {!loading && !error && result && result.entries.length === 0 && (
            <p className="text-center text-sm text-forge-muted">
              {dict.leaderboards.empty}
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
                  youLabel={dict.leaderboards.you}
                  userFallback={dict.leaderboards.userFallback}
                  levelLabel={dict.leaderboards.levelLabel}
                />
              ))}
            </ul>
          )}

          {!loading && result?.current_user_outside_top && (
            <div className="mt-6">
              <p className="mb-2 text-center text-xs font-semibold uppercase tracking-wide text-forge-muted">
                {dict.leaderboards.yourPosition}
              </p>
              <LeaderboardRow
                entry={result.current_user_outside_top}
                metric={metric}
                period={period}
                youLabel={dict.leaderboards.you}
                userFallback={dict.leaderboards.userFallback}
                levelLabel={dict.leaderboards.levelLabel}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
