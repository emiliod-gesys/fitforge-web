import type { Locale } from "./config";

export type Dictionary = {
  nav: {
    app: string;
    features: string;
    pricing: string;
    download: string;
    rankings: string;
    account: string;
    signIn: string;
    signOut: string;
    getStarted: string;
  };
  hero: {
    title: string;
    subtitle: string;
    downloadCta: string;
    signupCta: string;
  };
  app: {
    eyebrow: string;
    title: string;
    subtitle: string;
    emptyScreenshots: string;
    groups: {
      train: { label: string; description: string };
      coach: { label: string; description: string };
      nutrition: { label: string; description: string };
      progress: { label: string; description: string };
      social: { label: string; description: string };
      students: { label: string; description: string };
      profile: { label: string; description: string };
    };
  };
  features: {
    title: string;
    subtitle: string;
    items: { title: string; description: string; icon: string }[];
  };
  pricing: {
    title: string;
    subtitle: string;
    popular: string;
    plans: {
      free: {
        name: string;
        price: string;
        period: string;
        description: string;
        features: string[];
        cta: string;
      };
      pro: {
        name: string;
        price: string;
        period: string;
        description: string;
        features: string[];
        cta: string;
      };
      proPlus: {
        name: string;
        price: string;
        period: string;
        description: string;
        features: string[];
        cta: string;
      };
    };
  };
  download: {
    title: string;
    subtitle: string;
    appStoreSoon: string;
    hasAccount: string;
    signInLink: string;
    sameEmail: string;
  };
  cta: {
    title: string;
    subtitle: string;
    createAccount: string;
    downloadApp: string;
  };
  leaderboards: {
    eyebrow: string;
    title: string;
    subtitle: string;
    loading: string;
    empty: string;
    yourPosition: string;
    you: string;
    userFallback: string;
    periods: { week: string; month: string; all: string };
    metrics: {
      level: string;
      volume: string;
      workouts: string;
      calories: string;
      distance: string;
      reps: string;
    };
    levelLabel: string;
  };
  footer: {
    tagline: string;
    product: string;
    account: string;
    download: string;
    pricing: string;
    signIn: string;
    signUp: string;
    subscription: string;
    rights: string;
  };
  language: {
    label: string;
    es: string;
    en: string;
  };
};

const es: Dictionary = {
  nav: {
    app: "App",
    features: "Funciones",
    pricing: "Planes",
    download: "Descargar",
    rankings: "Rankings",
    account: "Mi cuenta",
    signIn: "Iniciar sesión",
    signOut: "Cerrar sesión",
    getStarted: "Empezar gratis",
  },
  hero: {
    title: "Forja tu mejor versión",
    subtitle:
      "Entrena, come, mide tu progreso e impúlsate con IA y comunidad — gym, carrera y HYROX en un solo lugar.",
    downloadCta: "Descargar app",
    signupCta: "Crear cuenta web",
  },
  app: {
    eyebrow: "La app",
    title: "FORGEN en tu bolsillo",
    subtitle:
      "Misma cuenta, mismos datos. Entrena, nutrición, progreso, social, alumnos y perfil — en detalle.",
    emptyScreenshots: "Pronto añadiremos capturas de esta sección.",
    groups: {
      train: {
        label: "Entrenar",
        description:
          "Hub del día: racha, sugerencia de sesión, rutinas, mapa de recuperación muscular y registro de series con peso, reps y RIR.",
      },
      coach: {
        label: "Coach IA",
        description:
          "Chat con tu historial y perfil. Genera rutinas y consejos con tu propia API key (OpenAI, Gemini o Claude); la clave queda en tu dispositivo.",
      },
      nutrition: {
        label: "Nutrición",
        description:
          "Presupuesto calórico, macros, agua y energía quemada. Añade comida por búsqueda, foto, quick add con IA o código.",
      },
      progress: {
        label: "Progreso",
        description:
          "Nivel XP, stats del mes, tendencia de volumen, métricas corporales, hitos y récords personales (1RM).",
      },
      social: {
        label: "Social",
        description:
          "Feed de 24 h, amigos, reacciones y clasificaciones entre amigos o globales.",
      },
      students: {
        label: "Alumnos",
        description:
          "Modo entrenador: recuperación, nutrición del día y rutinas de tus atletas.",
      },
      profile: {
        label: "Perfil",
        description:
          "Datos, métricas, metas, nutrición, apariencia, API keys y cuenta.",
      },
    },
  },
  features: {
    title: "No es solo un contador de series",
    subtitle:
      "Entrenamiento, comida, progreso, social e IA — pensado para gym y outdoors.",
    items: [
      {
        title: "Gym, carrera y HYROX",
        description:
          "Rutinas propias o sugeridas, sesión en vivo, cardio con GPS y estaciones HYROX en el mismo flujo.",
        icon: "🏋️",
      },
      {
        title: "Coach IA (tu clave)",
        description:
          "Usa OpenAI, Gemini o Claude con tu API key. Privacidad en el dispositivo; límites diarios según plan.",
        icon: "✨",
      },
      {
        title: "Nutrición e hidratación",
        description:
          "Presupuesto calórico, macros, agua y kcal activas de tus entrenos — alineado a tus métricas.",
        icon: "🥗",
      },
      {
        title: "Progreso que se siente",
        description:
          "XP y rangos, PRs, hitos, volumen semanal y mapa de recuperación muscular.",
        icon: "📈",
      },
      {
        title: "Comunidad real",
        description:
          "Amigos, feed efímero, PRs compartidos y leaderboards — motivación más allá del tracking solitario.",
        icon: "🏆",
      },
      {
        title: "Modo entrenador",
        description:
          "Gestiona alumnos: recuperación, nutrición del día y rutinas personalizadas.",
        icon: "🎓",
      },
    ],
  },
  pricing: {
    title: "Elige tu plan",
    subtitle:
      "Empieza gratis. Gymrat y Gymrat Pro amplían límites de rutinas e IA (hay límites diarios salvo plan ampliado).",
    popular: "Popular",
    plans: {
      free: {
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
      },
      pro: {
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
      },
      proPlus: {
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
      },
    },
  },
  download: {
    title: "Descarga FORGEN",
    subtitle: "App móvil para Android. iOS próximamente (TestFlight / App Store).",
    appStoreSoon: "App Store (pronto)",
    hasAccount: "¿Ya tienes cuenta?",
    signInLink: "Inicia sesión",
    sameEmail: "con el mismo email que en la app.",
  },
  cta: {
    title: "¿Listo para forjar tu mejor versión?",
    subtitle:
      "Crea tu cuenta y descarga la app. El producto es móvil; la web es tu puerta de entrada.",
    createAccount: "Crear cuenta",
    downloadApp: "Descargar app",
  },
  leaderboards: {
    eyebrow: "Comunidad",
    title: "Clasificaciones globales",
    subtitle:
      "Compite con atletas de todo el mundo. Los mismos rankings que en la app.",
    loading: "Cargando ranking…",
    empty: "Aún no hay datos en este ranking. ¡Sé el primero en entrenar!",
    yourPosition: "Tu posición",
    you: "Tú",
    userFallback: "Usuario",
    periods: { week: "Semana", month: "Mes", all: "Histórico" },
    metrics: {
      level: "Nivel",
      volume: "Volumen",
      workouts: "Entrenos",
      calories: "Calorías",
      distance: "Distancia",
      reps: "Reps",
    },
    levelLabel: "Nivel",
  },
  footer: {
    tagline:
      "Forja tu mejor versión. Entrenas, comes, mides y te impulsas con IA y comunidad — en un solo lugar.",
    product: "Producto",
    account: "Cuenta",
    download: "Descargar",
    pricing: "Planes",
    signIn: "Iniciar sesión",
    signUp: "Registrarse",
    subscription: "Mi suscripción",
    rights: "Todos los derechos reservados.",
  },
  language: {
    label: "Idioma",
    es: "ES",
    en: "EN",
  },
};

const en: Dictionary = {
  nav: {
    app: "App",
    features: "Features",
    pricing: "Plans",
    download: "Download",
    rankings: "Rankings",
    account: "My account",
    signIn: "Sign in",
    signOut: "Sign out",
    getStarted: "Start free",
  },
  hero: {
    title: "Forge your best self",
    subtitle:
      "Train, eat, track progress, and push forward with AI and community — gym, running, and HYROX in one place.",
    downloadCta: "Download app",
    signupCta: "Create web account",
  },
  app: {
    eyebrow: "The app",
    title: "FORGEN in your pocket",
    subtitle:
      "Same account, same data. Train, nutrition, progress, social, students, and profile — in detail.",
    emptyScreenshots: "Screenshots for this section are coming soon.",
    groups: {
      train: {
        label: "Train",
        description:
          "Daily hub: streak, suggested session, routines, muscle recovery map, and logging sets with weight, reps, and RIR.",
      },
      coach: {
        label: "AI Coach",
        description:
          "Chat with your history and profile. Generate routines and tips with your own API key (OpenAI, Gemini, or Claude) — the key stays on your device.",
      },
      nutrition: {
        label: "Nutrition",
        description:
          "Calorie budget, macros, water, and energy burned. Add food by search, photo, AI quick add, or barcode.",
      },
      progress: {
        label: "Progress",
        description:
          "XP level, monthly stats, volume trend, body metrics, milestones, and personal records (1RM).",
      },
      social: {
        label: "Social",
        description:
          "24h feed, friends, reactions, and friends or global leaderboards.",
      },
      students: {
        label: "Students",
        description:
          "Trainer mode: recovery, daily nutrition, and routines for your athletes.",
      },
      profile: {
        label: "Profile",
        description:
          "Details, metrics, goals, nutrition, appearance, API keys, and account.",
      },
    },
  },
  features: {
    title: "Not just a set counter",
    subtitle:
      "Training, food, progress, social, and AI — built for the gym and outdoors.",
    items: [
      {
        title: "Gym, running & HYROX",
        description:
          "Your own or suggested routines, live sessions, GPS cardio, and HYROX stations in one flow.",
        icon: "🏋️",
      },
      {
        title: "AI Coach (your key)",
        description:
          "Use OpenAI, Gemini, or Claude with your API key. On-device privacy; daily limits by plan.",
        icon: "✨",
      },
      {
        title: "Nutrition & hydration",
        description:
          "Calorie budget, macros, water, and active kcal from your workouts — aligned to your metrics.",
        icon: "🥗",
      },
      {
        title: "Progress that sticks",
        description:
          "XP and ranks, PRs, milestones, weekly volume, and a muscle recovery map.",
        icon: "📈",
      },
      {
        title: "Real community",
        description:
          "Friends, ephemeral feed, shared PRs, and leaderboards — motivation beyond solo tracking.",
        icon: "🏆",
      },
      {
        title: "Trainer mode",
        description:
          "Manage students: recovery, daily nutrition, and personalized routines.",
        icon: "🎓",
      },
    ],
  },
  pricing: {
    title: "Choose your plan",
    subtitle:
      "Start free. Gymrat and Gymrat Pro expand routine and AI limits (daily limits apply unless you upgrade).",
    popular: "Popular",
    plans: {
      free: {
        name: "Free",
        price: "$0",
        period: "forever",
        description: "Train, log, and compete with the essentials.",
        features: [
          "Workouts, routines, and history",
          "Progress, PRs, and recovery",
          "Nutrition and hydration",
          "Social, feed, and leaderboards",
          "AI Coach with daily limits",
        ],
        cta: "Create free account",
      },
      pro: {
        name: "Gymrat",
        price: "Coming soon",
        period: "/ month",
        description: "More AI power and tools to break plateaus.",
        features: [
          "Everything in Free",
          "More AI Coach usage",
          "AI routine generation",
          "Higher saved-routine capacity",
        ],
        cta: "Join the waitlist",
      },
      proPlus: {
        name: "Gymrat Pro",
        price: "Coming soon",
        period: "/ month",
        description: "The full package for athletes and coaches.",
        features: [
          "Everything in Gymrat",
          "Advanced AI nutrition",
          "Trainer / students mode",
          "Priority support",
        ],
        cta: "Join the waitlist",
      },
    },
  },
  download: {
    title: "Download FORGEN",
    subtitle: "Mobile app for Android. iOS coming soon (TestFlight / App Store).",
    appStoreSoon: "App Store (soon)",
    hasAccount: "Already have an account?",
    signInLink: "Sign in",
    sameEmail: "with the same email as in the app.",
  },
  cta: {
    title: "Ready to forge your best self?",
    subtitle:
      "Create your account and download the app. The product is mobile; the website is your front door.",
    createAccount: "Create account",
    downloadApp: "Download app",
  },
  leaderboards: {
    eyebrow: "Community",
    title: "Global leaderboards",
    subtitle:
      "Compete with athletes worldwide. The same rankings as in the app.",
    loading: "Loading rankings…",
    empty: "No data in this ranking yet. Be the first to train!",
    yourPosition: "Your position",
    you: "You",
    userFallback: "User",
    periods: { week: "Week", month: "Month", all: "All time" },
    metrics: {
      level: "Level",
      volume: "Volume",
      workouts: "Workouts",
      calories: "Calories",
      distance: "Distance",
      reps: "Reps",
    },
    levelLabel: "Level",
  },
  footer: {
    tagline:
      "Forge your best self. Train, eat, measure, and push forward with AI and community — in one place.",
    product: "Product",
    account: "Account",
    download: "Download",
    pricing: "Plans",
    signIn: "Sign in",
    signUp: "Sign up",
    subscription: "My subscription",
    rights: "All rights reserved.",
  },
  language: {
    label: "Language",
    es: "ES",
    en: "EN",
  },
};

const dictionaries: Record<Locale, Dictionary> = { es, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.es;
}
