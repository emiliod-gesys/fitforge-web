import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";
import type { LeaderboardParams, LeaderboardResult } from "@/lib/types";
import { leaderboardRpcParams, parseLeaderboardResult } from "@/lib/leaderboard";

export async function fetchLeaderboard(
  params: LeaderboardParams,
): Promise<LeaderboardResult | null> {
  if (!isSupabaseConfigured()) return null;

  const supabase = await createClient();
  const { data, error } = await supabase.rpc(
    "get_leaderboard",
    leaderboardRpcParams(params),
  );

  if (error) {
    console.error("leaderboard error:", error.message);
    return null;
  }

  return parseLeaderboardResult(data);
}
