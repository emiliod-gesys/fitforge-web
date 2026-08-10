export const PLANS = [
  {
    id: "free",
    name: "Gratuito",
    price: "$0",
    period: "para siempre",
    description: "Entrena, registra y compite con lo esencial.",
    features: [
      "Entrenos, rutinas e historial",
      "Progreso, PRs y recuperación",
      "Nutrición e hidratación",
      "Social, feed y leaderboards",
      "Coach IA con límites diarios",
    ],
    cta: "Crear cuenta gratis",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Gymrat",
    price: "Próximamente",
    period: "/ mes",
    description: "Más potencia de IA y herramientas para romper mesetas.",
    features: [
      "Todo lo de Gratuito",
      "Más uso de Coach IA",
      "Generación de rutinas con IA",
      "Más capacidad de rutinas guardadas",
    ],
    cta: "Unirse a la lista",
    highlighted: true,
  },
  {
    id: "pro_plus",
    name: "Gymrat Pro",
    price: "Próximamente",
    period: "/ mes",
    description: "El paquete completo para atletas y entrenadores.",
    features: [
      "Todo lo de Gymrat",
      "Nutrición avanzada con IA",
      "Modo entrenador / alumnos",
      "Soporte prioritario",
    ],
    cta: "Unirse a la lista",
    highlighted: false,
  },
] as const;

export type PlanId = (typeof PLANS)[number]["id"];
