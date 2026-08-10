export const PLANS = [
  {
    id: "free",
    name: "Gratuito",
    price: "$0",
    period: "para siempre",
    description: "Entrena, come y compite con lo esencial.",
    features: [
      "Hasta 10 rutinas",
      "Coach IA: 5 mensajes/día",
      "Entrenar, comida (búsqueda, quick, manual), agua, progreso y social",
      "Con API key propia (BYOK): IA proactiva, foto IA y Coach sin tope",
      "Barcode de comida bloqueado en Free",
    ],
    cta: "Crear cuenta gratis",
    highlighted: false,
  },
  {
    id: "pro",
    name: "Gymrat",
    price: "Próximamente",
    period: "/ mes",
    description: "Más rutinas, más Coach IA y extras de experiencia.",
    features: [
      "Hasta 20 rutinas",
      "Coach IA: 30 mensajes/día",
      "IA proactiva",
      "Color de acento personalizable",
      "Código de barras para comida",
      "Sin foto IA ni modo entrenador",
    ],
    cta: "Unirse a la lista",
    highlighted: true,
  },
  {
    id: "pro_plus",
    name: "Gymrat Pro",
    price: "Próximamente",
    period: "/ mes",
    description: "Máximo de rutinas, Coach ilimitado y modo entrenador.",
    features: [
      "Hasta 50 rutinas",
      "Coach IA ilimitado",
      "Todo lo de Gymrat",
      "Foto de comida con IA",
      "Modo entrenador (alumnos)",
    ],
    cta: "Unirse a la lista",
    highlighted: false,
  },
] as const;

export type PlanId = (typeof PLANS)[number]["id"];
