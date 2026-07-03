export type LeaderboardScope = "friends" | "global";
export type LeaderboardPeriod = "week" | "month" | "all";
export type LeaderboardMetric =
  | "level"
  | "volume"
  | "workouts"
  | "distance"
  | "calories"
  | "reps";

export interface LeaderboardEntry {
  rank: number;
  user_id: string;
  display_name: string | null;
  avatar_url: string | null;
  total_xp: number;
  metric_value: number;
  total_reps: number;
  total_volume: number;
  total_distance: number;
  total_calories: number;
  total_workouts: number;
  is_current_user: boolean;
}

export interface LeaderboardResult {
  entries: LeaderboardEntry[];
  current_user_outside_top: LeaderboardEntry | null;
  has_more: boolean;
}

export interface LeaderboardParams {
  metric: LeaderboardMetric;
  scope?: LeaderboardScope;
  period?: LeaderboardPeriod;
  limit?: number;
}

export interface UserProfile {
  id: string;
  display_name: string | null;
  avatar_url: string | null;
  unit_system: "kg" | "lb";
  body_weight: number | null;
  age: number | null;
  gender: "male" | "female" | "non_binary" | "prefer_not_to_say" | null;
  height_cm: number | null;
  preferred_language: "es" | "en";
  fitness_goal: string | null;
  experience_level: string | null;
  activity_level: "sedentary" | "moderate" | "high";
  total_xp: number;
  email: string | null;
}
