import { NextRequest, NextResponse } from "next/server";
import { fetchLeaderboard } from "@/lib/leaderboard-server";
import type { LeaderboardMetric, LeaderboardPeriod, LeaderboardScope } from "@/lib/types";

const METRICS = new Set([
  "level",
  "volume",
  "workouts",
  "distance",
  "calories",
  "reps",
]);
const PERIODS = new Set(["week", "month", "all"]);
const SCOPES = new Set(["global", "friends"]);

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const metric = searchParams.get("metric") ?? "level";
  const period = searchParams.get("period") ?? "all";
  const scope = searchParams.get("scope") ?? "global";
  const limit = Number(searchParams.get("limit") ?? "25");

  if (!METRICS.has(metric)) {
    return NextResponse.json({ error: "Invalid metric" }, { status: 400 });
  }
  if (!PERIODS.has(period)) {
    return NextResponse.json({ error: "Invalid period" }, { status: 400 });
  }
  if (!SCOPES.has(scope)) {
    return NextResponse.json({ error: "Invalid scope" }, { status: 400 });
  }

  const result = await fetchLeaderboard({
    metric: metric as LeaderboardMetric,
    period: period as LeaderboardPeriod,
    scope: scope as LeaderboardScope,
    limit: Number.isFinite(limit) ? limit : 25,
  });

  if (!result) {
    return NextResponse.json(
      { error: "Supabase no configurado en el servidor." },
      { status: 503 },
    );
  }

  return NextResponse.json(result);
}
