export const PLANS = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    period: "para siempre",
    description: "Empieza a entrenar y registrar tu progreso.",
    features: [
      "Entrenos y rutinas básicas",
      "Historial de sesiones",
      "Progreso y PRs",
      "Social y leaderboards",
    ],
    cta: "Crear cuenta gratis",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Pro",
    price: "Próximamente",
    period: "/ mes",
    description: "IA coach y herramientas avanzadas para romper mesetas.",
    features: [
      "Todo lo de Free",
      "Coach IA ilimitado",
      "Generación de rutinas con IA",
      "Análisis de recuperación avanzado",
    ],
    cta: "Unirse a la lista",
    highlighted: true,
  },
  {
    id: "pro_plus",
    name: "Pro+",
    price: "Próximamente",
    period: "/ mes",
    description: "El paquete completo para atletas serios.",
    features: [
      "Todo lo de Pro",
      "Nutrición avanzada con IA",
      "Planes personalizados premium",
      "Soporte prioritario",
    ],
    cta: "Unirse a la lista",
    highlighted: false,
  },
] as const;

export type PlanId = (typeof PLANS)[number]["id"];
