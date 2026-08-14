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
    slogan: string;
    purpose: string;
    downloadCta: string;
    signupCta: string;
  };
  catalog: {
    value: string;
    label: string;
    description: string;
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
    items: {
      id: "train" | "coach" | "nutrition" | "progress" | "social" | "trainer";
      title: string;
      description: string;
    }[];
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
    legal: string;
    download: string;
    pricing: string;
    signIn: string;
    signUp: string;
    subscription: string;
    privacy: string;
    terms: string;
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
    title: "FORGEN",
    slogan: "Forge Your Potential",
    purpose:
      "FORGEN es una aplicación móvil de fitness para Android e iOS. Sirve para crear y seguir entrenamientos (gimnasio, carrera y HYROX), registrar nutrición e hidratación, medir tu progreso, conectar con amigos y usar un Coach con inteligencia artificial. Puedes crear una cuenta FORGEN e iniciar sesión con Google, Apple o email. Esta web es la página oficial de la app FORGEN.",
    downloadCta: "Descargar app",
    signupCta: "Crear cuenta web",
  },
  catalog: {
    value: "+1.300",
    label: "ejercicios en el catálogo",
    description:
      "Fuerza, máquina, libre, cardio y más — listos para armar rutinas y entrenar con precisión.",
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
          "Hub del día: racha, sugerencia de sesión, rutinas, mapa de recuperación y registro de series. Catálogo con más de 1.300 ejercicios.",
      },
      coach: {
        label: "Coach IA",
        description:
          "Pide rutinas personalizadas, consejos y propuestas de alimentación. El coach usa tu historial y métricas en tiempo real.",
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
          "Datos, métricas, metas, nutrición, apariencia y cuenta.",
      },
    },
  },
  features: {
    title: "No es solo un contador de series",
    subtitle:
      "Entrenamiento, comida, progreso, social e IA — pensado para gym y outdoors.",
    items: [
      {
        id: "train",
        title: "Gym, carrera y HYROX",
        description:
          "Más de 1.300 ejercicios en el catálogo. Rutinas propias o sugeridas, sesión en vivo, cardio con GPS y estaciones HYROX.",
      },
      {
        id: "coach",
        title: "Coach IA",
        description:
          "Pide rutinas personalizadas, consejos de entrenamiento y propuestas de alimentación — siempre con tus métricas en tiempo real. Límites diarios según plan.",
      },
      {
        id: "nutrition",
        title: "Nutrición e hidratación",
        description:
          "Presupuesto calórico, macros, agua y kcal activas de tus entrenos — alineado a tus métricas.",
      },
      {
        id: "progress",
        title: "Progreso que se siente",
        description:
          "XP y rangos, PRs, hitos, volumen semanal y mapa de recuperación muscular.",
      },
      {
        id: "social",
        title: "Comunidad real",
        description:
          "Amigos, feed efímero, PRs compartidos y leaderboards — motivación más allá del tracking solitario.",
      },
      {
        id: "trainer",
        title: "Modo entrenador",
        description:
          "Gestiona alumnos: recuperación, nutrición del día y rutinas personalizadas.",
      },
    ],
  },
  pricing: {
    title: "Elige tu plan",
    subtitle:
      "Empieza gratis. Gymrat y Gymrat Pro amplían rutinas, Coach IA y funciones premium.",
    popular: "Popular",
    plans: {
      free: {
        name: "Gratuito",
        price: "$0",
        period: "para siempre",
        description: "Entrena, come y compite con lo esencial.",
        features: [
          "Hasta 10 rutinas",
          "Coach IA: 5 mensajes/día",
          "Entrenar, comida (búsqueda, quick, manual), agua, progreso y social",
        ],
        cta: "Crear cuenta gratis",
      },
      pro: {
        name: "Gymrat",
        price: "Próximamente",
        period: "/ mes",
        description: "Más rutinas, más Coach IA y extras de experiencia.",
        features: [
          "Hasta 20 rutinas",
          "Coach IA: 30 mensajes/día",
          "IA proactiva: interviene en tus entrenos para sugerir series, pesos y reps y mantener el progreso en cada sesión",
          "Color de acento personalizable",
          "Código de barras para comida",
        ],
        cta: "Unirse a la lista",
      },
      proPlus: {
        name: "Gymrat Pro",
        price: "Próximamente",
        period: "/ mes",
        description: "Máximo de rutinas, Coach ilimitado y modo entrenador.",
        features: [
          "Hasta 50 rutinas",
          "Coach IA ilimitado",
          "Todo lo de Gymrat",
          "Detectar calorías en la comida con fotos",
          "Modo entrenador (alumnos)",
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
    title: "¿Listo para empezar?",
    subtitle:
      "Crea tu cuenta y descarga la app. Forge Your Potential — el producto es móvil; la web es tu puerta de entrada.",
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
      "FORGEN — Forge Your Potential. App móvil de fitness: entrenos, nutrición, progreso, social y Coach IA.",
    product: "Producto",
    account: "Cuenta",
    legal: "Legal",
    download: "Descargar",
    pricing: "Planes",
    signIn: "Iniciar sesión",
    signUp: "Registrarse",
    subscription: "Mi suscripción",
    privacy: "Política de privacidad",
    terms: "Términos del servicio",
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
    title: "FORGEN",
    slogan: "Forge Your Potential",
    purpose:
      "FORGEN is a mobile fitness application for Android and iOS. The FORGEN app is used to create and follow workouts (gym, running, and HYROX), log nutrition and hydration, track progress, connect with friends, and use an AI Coach. You can create a FORGEN account and sign in with Google, Apple, or email. This website is the official homepage of the FORGEN app.",
    downloadCta: "Download app",
    signupCta: "Create web account",
  },
  catalog: {
    value: "1,300+",
    label: "exercises in the catalog",
    description:
      "Strength, machines, free weights, cardio, and more — ready to build routines and train with precision.",
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
          "Daily hub: streak, suggested session, routines, recovery map, and set logging. Catalog with 1,300+ exercises.",
      },
      coach: {
        label: "AI Coach",
        description:
          "Ask for personalized routines, training tips, and nutrition ideas. The coach uses your history and real-time metrics.",
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
          "Details, metrics, goals, nutrition, appearance, and account.",
      },
    },
  },
  features: {
    title: "Not just a set counter",
    subtitle:
      "Training, food, progress, social, and AI — built for the gym and outdoors.",
    items: [
      {
        id: "train",
        title: "Gym, running & HYROX",
        description:
          "1,300+ exercises in the catalog. Your own or suggested routines, live sessions, GPS cardio, and HYROX stations.",
      },
      {
        id: "coach",
        title: "AI Coach",
        description:
          "Ask for personalized routines, training advice, and nutrition proposals — always using your real-time metrics. Daily limits by plan.",
      },
      {
        id: "nutrition",
        title: "Nutrition & hydration",
        description:
          "Calorie budget, macros, water, and active kcal from your workouts — aligned to your metrics.",
      },
      {
        id: "progress",
        title: "Progress that sticks",
        description:
          "XP and ranks, PRs, milestones, weekly volume, and a muscle recovery map.",
      },
      {
        id: "social",
        title: "Real community",
        description:
          "Friends, ephemeral feed, shared PRs, and leaderboards — motivation beyond solo tracking.",
      },
      {
        id: "trainer",
        title: "Trainer mode",
        description:
          "Manage students: recovery, daily nutrition, and personalized routines.",
      },
    ],
  },
  pricing: {
    title: "Choose your plan",
    subtitle:
      "Start free. Gymrat and Gymrat Pro expand routines, AI Coach, and premium features.",
    popular: "Popular",
    plans: {
      free: {
        name: "Free",
        price: "$0",
        period: "forever",
        description: "Train, eat, and compete with the essentials.",
        features: [
          "Up to 10 routines",
          "AI Coach: 5 messages/day",
          "Train, food (search, quick, manual), water, progress, and social",
        ],
        cta: "Create free account",
      },
      pro: {
        name: "Gymrat",
        price: "Coming soon",
        period: "/ month",
        description: "More routines, more AI Coach, and experience extras.",
        features: [
          "Up to 20 routines",
          "AI Coach: 30 messages/day",
          "Proactive AI: steps into your workouts to suggest sets, weights, and reps so you keep progressing each session",
          "Custom accent color",
          "Food barcode scanning",
        ],
        cta: "Join the waitlist",
      },
      proPlus: {
        name: "Gymrat Pro",
        price: "Coming soon",
        period: "/ month",
        description: "Max routines, unlimited Coach, and trainer mode.",
        features: [
          "Up to 50 routines",
          "Unlimited AI Coach",
          "Everything in Gymrat",
          "Detect calories in food with photos",
          "Trainer mode (students)",
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
    title: "Ready to start?",
    subtitle:
      "Create your account and download the app. Forge Your Potential — the product is mobile; the website is your front door.",
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
      "FORGEN — Forge Your Potential. Mobile fitness app: workouts, nutrition, progress, social, and AI Coach.",
    product: "Product",
    account: "Account",
    legal: "Legal",
    download: "Download",
    pricing: "Plans",
    signIn: "Sign in",
    signUp: "Sign up",
    subscription: "My subscription",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
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
