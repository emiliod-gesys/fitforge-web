import type {
  LeaderboardEntry,
  LeaderboardMetric,
  LeaderboardParams,
  LeaderboardPeriod,
  LeaderboardResult,
} from "./types";
import { formatCount, formatDistance, formatVolume, playerLevelFromXp } from "./format";

export const LEADERBOARD_METRICS: { id: LeaderboardMetric; label: string }[] = [
  { id: "level", label: "Nivel" },
  { id: "volume", label: "Volumen" },
  { id: "workouts", label: "Entrenos" },
  { id: "calories", label: "Calorías" },
  { id: "distance", label: "Distancia" },
  { id: "reps", label: "Reps" },
];

export const LEADERBOARD_PERIODS: { id: LeaderboardPeriod; label: string }[] = [
  { id: "week", label: "Semana" },
  { id: "month", label: "Mes" },
  { id: "all", label: "Histórico" },
];

export function formatLeaderboardValue(
  metric: LeaderboardMetric,
  entry: LeaderboardEntry,
  period: LeaderboardPeriod = "all",
  unitSystem: "kg" | "lb" = "kg",
): string {
  switch (metric) {
    case "level":
      return period === "all"
        ? `Nivel ${playerLevelFromXp(entry.total_xp)}`
        : `${formatCount(entry.metric_value)} XP`;
    case "volume":
      return formatVolume(entry.total_volume, unitSystem);
    case "workouts":
      return formatCount(entry.total_workouts);
    case "distance":
      return formatDistance(entry.total_distance, unitSystem);
    case "calories":
      return `${formatCount(entry.total_calories)} kcal`;
    case "reps":
      return formatCount(entry.total_reps);
    default:
      return formatCount(entry.metric_value);
  }
}

export function parseLeaderboardResult(data: unknown): LeaderboardResult {
  const raw = data as LeaderboardResult;
  return {
    entries: raw.entries ?? [],
    current_user_outside_top: raw.current_user_outside_top ?? null,
    has_more: raw.has_more ?? false,
  };
}

export function leaderboardRpcParams({
  metric,
  scope = "global",
  period = "all",
  limit = 25,
}: LeaderboardParams) {
  return {
    p_metric: metric,
    p_scope: scope,
    p_period: period,
    p_limit: Math.min(Math.max(limit, 1), 500),
  };
}

export function rankColor(rank: number): string {
  switch (rank) {
    case 1:
      return "text-yellow-400";
    case 2:
      return "text-slate-300";
    case 3:
      return "text-amber-600";
    default:
      return "text-forge-muted";
  }
}
