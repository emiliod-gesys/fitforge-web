const LB_PER_KG = 2.2046226218;

export function playerLevelFromXp(totalXp: number): number {
  const safeXp = Math.max(0, totalXp);
  let level = 1;
  let xpIntoLevel = safeXp;

  while (level < 10000) {
    const group = Math.floor((level - 1) / 10) + 1;
    const cost = 90 + 10 * group;
    if (xpIntoLevel < cost) break;
    xpIntoLevel -= cost;
    level += 1;
  }

  return level;
}

export function formatVolume(kg: number, unitSystem: "kg" | "lb" = "kg"): string {
  if (unitSystem === "lb") {
    const lb = kg * LB_PER_KG;
    if (lb >= 1_000_000) return `${(lb / 1_000_000).toFixed(1)}M lb`;
    if (lb >= 1000) return `${(lb / 1000).toFixed(lb >= 10000 ? 0 : 1)}k lb`;
    return `${Math.round(lb)} lb`;
  }
  if (kg >= 1_000_000) return `${(kg / 1_000_000).toFixed(1)}M kg`;
  if (kg >= 1000) return `${(kg / 1000).toFixed(kg >= 10000 ? 0 : 1)}k kg`;
  return `${Math.round(kg)} kg`;
}

export function formatDistance(meters: number, unitSystem: "kg" | "lb" = "kg"): string {
  if (unitSystem === "lb") {
    const miles = meters / 1609.344;
    if (miles >= 100) return `${miles.toFixed(0)} mi`;
    if (miles >= 10) return `${miles.toFixed(1)} mi`;
    return `${miles.toFixed(2)} mi`;
  }
  const km = meters / 1000;
  if (km >= 100) return `${km.toFixed(0)} km`;
  if (km >= 10) return `${km.toFixed(1)} km`;
  return `${km.toFixed(2)} km`;
}

export function formatCount(value: number): string {
  const n = Math.round(value);
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(n >= 10000 ? 0 : 1)}k`;
  return `${n}`;
}
