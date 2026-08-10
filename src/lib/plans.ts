export const PLANS = [
  {
    id: "free",
    name: "Gratuito",
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
    name: "Gymrat",
    price: "Próximamente",
    period: "/ mes",
    description: "IA coach y herramientas avanzadas para romper mesetas.",
    features: [
      "Todo lo de Gratuito",
      "Coach IA ilimitado",
      "Generación de rutinas con IA",
      "Análisis de recuperación avanzado",
    ],
    cta: "Unirse a la lista",
    highlighted: true,
  },
  {
    id: "pro_plus",
    name: "Gymrat Pro",
    price: "Próximamente",
    period: "/ mes",
    description: "El paquete completo para atletas serios.",
    features: [
      "Todo lo de Gymrat",
      "Nutrición avanzada con IA",
      "Planes personalizados premium",
      "Soporte prioritario",
    ],
    cta: "Unirse a la lista",
    highlighted: false,
  },
] as const;

export type PlanId = (typeof PLANS)[number]["id"];
