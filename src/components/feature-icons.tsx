type IconProps = {
  className?: string;
};

function IconShell({
  children,
  className = "h-8 w-8",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-forge-blue ${className}`}
      aria-hidden
    >
      {children}
    </svg>
  );
}

/** Trazo grueso geométrico, alineado al isotipo FORGEN. */
const s = {
  stroke: "currentColor",
  strokeWidth: 2.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none" as const,
};

export function IconTrain({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path d="M7 11v10M11 9v14M21 11v10M25 9v14" {...s} />
      <path d="M11 16h10" {...s} />
      <path d="M7 13.5h4M21 13.5h4M7 18.5h4M21 18.5h4" {...s} />
    </IconShell>
  );
}

export function IconCoach({ className }: IconProps) {
  return (
    <IconShell className={className}>
      {/* Burbuja con curva tipo logo + destello */}
      <path
        d="M7 11.5c0-3.5 3-6 7-6h2c4.5 0 8 3 8 7.5 0 3.2-2 5.8-5 7l1.5 3.5-4.5-2H14c-4 0-7-3-7-7z"
        {...s}
      />
      <path d="M16 11v5M13.5 13.5h5" {...s} />
    </IconShell>
  );
}

export function IconNutrition({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path
        d="M16 6c0 3.8-3.2 6.2-3.2 9.2a3.2 3.2 0 0 0 6.4 0C19.2 12.2 16 9.8 16 6z"
        {...s}
      />
      <path d="M9 24h14" {...s} />
      <path d="M11 24c0-2.2 1.8-3.5 5-3.5s5 1.3 5 3.5" {...s} />
    </IconShell>
  );
}

export function IconProgress({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <path d="M8 24V15M15 24V10M22 24V17" {...s} />
      <path d="M7 9l6-3 4.5 3.5L26 5" {...s} />
      <path d="M22.5 5H26v3.5" {...s} />
    </IconShell>
  );
}

export function IconCommunity({ className }: IconProps) {
  return (
    <IconShell className={className}>
      <circle cx="12" cy="11" r="3.2" {...s} />
      <path d="M6 24c0-3.3 2.5-5.5 6-5.5s6 2.2 6 5.5" {...s} />
      <circle cx="22.5" cy="12" r="2.6" {...s} />
      <path d="M18.5 24c.4-2.3 1.8-4 4-4.6" {...s} />
    </IconShell>
  );
}

export function IconTrainer({ className }: IconProps) {
  return (
    <IconShell className={className}>
      {/* Escudo angular + check */}
      <path
        d="M16 5.5l8.5 3.2v6.8c0 5.2-3.4 8.6-8.5 10.7-5.1-2.1-8.5-5.5-8.5-10.7V8.7L16 5.5z"
        {...s}
      />
      <path d="M12.2 16.2l2.6 2.6 5-5.2" {...s} />
    </IconShell>
  );
}

export const FEATURE_ICONS = {
  train: IconTrain,
  coach: IconCoach,
  nutrition: IconNutrition,
  progress: IconProgress,
  social: IconCommunity,
  trainer: IconTrainer,
} as const;

export type FeatureIconId = keyof typeof FEATURE_ICONS;
