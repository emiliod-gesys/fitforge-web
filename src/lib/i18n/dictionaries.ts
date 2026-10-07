import type { Locale } from "./config";

export type Dictionary = {
  nav: {
    app: string;
    how: string;
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
    eyebrow: string;
    title: string;
    subtitle: string;
    audience: string;
    proof: string;
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
  how: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
  };
  modes: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
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
    soon: string;
    reference: string;
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
    appStore: string;
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
    deleteAccount: string;
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
    how: "Cómo empezar",
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
    eyebrow: "App móvil de fitness",
    title: "Forge Your Potential",
    subtitle:
      "FORGEN es la app para entrenar, anotar lo que comes y ver si estás avanzando.",
    audience: "Para quien entrena en el gym, prepara un HYROX o corre con GPS.",
    proof: "Android e iOS · Español e inglés",
    downloadCta: "Descargar app",
    signupCta: "Crear cuenta web",
  },
  catalog: {
    value: "+1.300",
    label: "ejercicios con demostración",
    description:
      "Catálogo extendido de fuerza, máquina, peso libre y cardio — con GIF para ejecutar cada movimiento con precisión. También puedes crear ejercicios propios.",
  },
  app: {
    eyebrow: "La app",
    title: "FORGEN en tu bolsillo",
    subtitle: "Las pantallas, sección por sección.",
    emptyScreenshots: "Pronto añadiremos capturas de esta sección.",
    groups: {
      train: {
        label: "Entrenar",
        description: "Racha, la rutina de hoy y la sesión abierta.",
      },
      coach: {
        label: "Coach IA",
        description: "La conversación con el coach.",
      },
      nutrition: {
        label: "Nutrición",
        description: "Presupuesto, agua y comidas del día.",
      },
      progress: {
        label: "Progreso",
        description: "Nivel, medallas y récords.",
      },
      social: {
        label: "Social",
        description: "Feed y amigos.",
      },
      students: {
        label: "Alumnos",
        description: "La ficha de un alumno.",
      },
      profile: {
        label: "Perfil",
        description: "Tus datos y la cuenta.",
      },
    },
  },
  how: {
    eyebrow: "Cómo empezar",
    title: "De la tienda al primer entreno",
    subtitle: "Cuatro pasos. El primero es descargar la app.",
    steps: [
      {
        title: "Descarga la app",
        description: "Google Play o App Store. En el teléfono, el enlace te lleva directo a la tienda.",
      },
      {
        title: "Crea tu cuenta",
        description: "Email, Google o Apple. Es la misma cuenta en la app y en esta web.",
      },
      {
        title: "Configura tus objetivos",
        description: "Idioma, métricas y si entrenas gym, running o HYROX.",
      },
      {
        title: "Empieza",
        description: "Tu primera rutina, una sesión con GPS o la comida del día.",
      },
    ],
  },
  modes: {
    eyebrow: "Cómo entrenas",
    title: "Gym, HYROX o running",
    subtitle: "Tres sesiones distintas. La eliges al configurar la app.",
    items: [
      {
        title: "Gym",
        description:
          "Rutina propia o sugerida, en vivo: peso, reps y temporizador de descanso.",
      },
      {
        title: "HYROX",
        description:
          "Programas Prep, Build y Race, con splits y el estándar de cada estación.",
      },
      {
        title: "Running",
        description:
          "Correr o caminar con GPS: mapa, ritmo, splits y desnivel. También en cinta.",
      },
    ],
  },
  faq: {
    eyebrow: "Preguntas",
    title: "Detalles",
    items: [
      {
        q: "¿FORGEN es gratis?",
        a: "Sí. Hoy todas las cuentas usan el plan Gratuito: entrenar, nutrición esencial, progreso, social y Coach IA (5 mensajes al día y hasta 10 rutinas).",
      },
      {
        q: "¿Ya puedo pagar Gymrat o Gymrat Pro?",
        a: "Todavía no. Los precios de esa sección son de referencia: 4,99 y 9,99 USD al mes. Cuando el pago in-app esté activo, esos planes amplían los límites.",
      },
      {
        q: "¿Necesito una API key de OpenAI?",
        a: "No. El Coach IA va incluido en la app, con límites según el plan. En Gratuito existe un ajuste avanzado opcional para usar tu propia key; no es el camino principal.",
      },
      {
        q: "¿Cuántos ejercicios hay?",
        a: "Más de 1.300 en el catálogo extendido, con demostración en GIF, más un catálogo local para empezar y ejercicios que tú crees (hasta 100).",
      },
      {
        q: "¿HYROX y running cuentan en el límite de rutinas?",
        a: "No. Las rutinas de sistema HYROX (Prep, Build, Race) y Runner no consumen tu cupo de 10 / 20 / 50 rutinas guardadas.",
      },
      {
        q: "¿Puedo entrenar sin internet?",
        a: "Puedes descargar el catálogo y hacer la sesión sin red; se sincroniza al volver. Coach, comida, social y progreso necesitan conexión.",
      },
      {
        q: "¿Se conecta con Apple Salud o Health Connect?",
        a: "Si lo autorizas, FORGEN lee peso y grasa corporal y escribe entrenos, distancia y calorías activas.",
      },
      {
        q: "¿Hay iOS?",
        a: "Sí. FORGEN está en Google Play y en el App Store (iPhone y iPad).",
      },
      {
        q: "¿Puedo borrar mi cuenta?",
        a: "Sí. En la app: Perfil → Cuenta → Eliminar cuenta. O escribe a support@forgen.app. Detalle en forgen.app/delete-account.",
      },
    ],
  },
  features: {
    title: "Qué puedes hacer",
    subtitle: "Seis piezas. Cada una cubre un trabajo distinto.",
    items: [
      {
        id: "train",
        title: "La sesión",
        description:
          "Registras series, peso, reps, RIR y el descanso. Una rutina propia o la sugerida para hoy.",
      },
      {
        id: "coach",
        title: "Coach IA",
        description:
          "Pide una rutina o un ajuste. Responde con tu historial, no con un formulario genérico.",
      },
      {
        id: "nutrition",
        title: "Nutrición",
        description:
          "Presupuesto del día, macros y agua. Añades comida por búsqueda, texto o voz.",
      },
      {
        id: "progress",
        title: "Progreso",
        description:
          "Nivel, rachas y récords. Un mapa marca qué músculos siguen fatigados.",
      },
      {
        id: "social",
        title: "Amigos",
        description:
          "Un feed de 24 h y un aviso cuando alguien de tu círculo termina de entrenar.",
      },
      {
        id: "trainer",
        title: "Modo entrenador",
        description:
          "Asignas rutinas y ves cómo van tus alumnos. Llega con Gymrat Pro.",
      },
    ],
  },
  pricing: {
    title: "Planes",
    subtitle:
      "Hoy entras gratis. Gymrat y Gymrat Pro se podrán pagar más adelante: aquí ves qué incluirán y el precio de referencia.",
    soon: "Próximamente",
    reference: "Precio de referencia",
    plans: {
      free: {
        name: "Gratuito",
        price: "$0",
        period: "para siempre",
        description: "Entrena, come y compite con lo esencial.",
        features: [
          "Hasta 10 rutinas propias (HYROX y Runner no cuentan)",
          "Coach IA: 5 mensajes/día",
          "Gym, running GPS, mapa de recuperación, XP y social",
          "Comida: búsqueda, quick-add, voz y manual",
        ],
        cta: "Crear cuenta gratis",
      },
      pro: {
        name: "Gymrat",
        price: "4,99 USD",
        period: "/ mes",
        description: "Más rutinas, más Coach IA y extras de experiencia.",
        features: [
          "Hasta 20 rutinas propias",
          "Coach IA: 30 mensajes/día",
          "IA proactiva en la sesión (series, pesos y reps)",
          "Color de acento personalizable",
          "Código de barras para comida",
        ],
        cta: "Próximamente",
      },
      proPlus: {
        name: "Gymrat Pro",
        price: "9,99 USD",
        period: "/ mes",
        description: "Máximo de rutinas, Coach ilimitado y modo entrenador.",
        features: [
          "Hasta 50 rutinas propias",
          "Coach IA ilimitado",
          "Todo lo de Gymrat",
          "Detectar calorías en la comida con fotos",
          "Modo entrenador (alumnos)",
        ],
        cta: "Próximamente",
      },
    },
  },
  download: {
    title: "Descarga FORGEN",
    subtitle: "App móvil para Android e iOS. Descárgala en Google Play o en el App Store.",
    appStore: "App Store",
    hasAccount: "¿Ya tienes cuenta?",
    signInLink: "Inicia sesión",
    sameEmail: "con el mismo email que en la app.",
  },
  cta: {
    title: "¿Listo para empezar?",
    subtitle:
      "Descarga FORGEN y crea tu cuenta. Empieza gratis en Android e iOS.",
    createAccount: "Crear cuenta",
    downloadApp: "Descargar app",
  },
  leaderboards: {
    eyebrow: "Comunidad",
    title: "Rankings en vivo",
    subtitle:
      "La comunidad de la app: compites con tus amigos y con el resto, en la misma tabla.",
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
      "Forge Your Potential. Entrenas, comes, mides y te impulsas con IA y comunidad — en un solo lugar.",
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
    deleteAccount: "Eliminar cuenta",
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
    how: "Get started",
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
    eyebrow: "Mobile fitness app",
    title: "Forge Your Potential",
    subtitle:
      "FORGEN is the app for training, logging what you eat, and seeing if you're moving forward.",
    audience: "For people who lift, prep for HYROX, or run with GPS.",
    proof: "Android & iOS · English & Spanish",
    downloadCta: "Download app",
    signupCta: "Create web account",
  },
  catalog: {
    value: "1,300+",
    label: "exercises with demonstrations",
    description:
      "Extended catalog of strength, machines, free weights, and cardio — with GIFs so you hit each movement with precision. You can also create your own exercises.",
  },
  app: {
    eyebrow: "The app",
    title: "FORGEN in your pocket",
    subtitle: "The screens, section by section.",
    emptyScreenshots: "Screenshots for this section are coming soon.",
    groups: {
      train: {
        label: "Train",
        description: "Streak, today's routine, and the open session.",
      },
      coach: {
        label: "AI Coach",
        description: "The conversation with the coach.",
      },
      nutrition: {
        label: "Nutrition",
        description: "Budget, water, and today's meals.",
      },
      progress: {
        label: "Progress",
        description: "Level, medals, and records.",
      },
      social: {
        label: "Social",
        description: "Feed and friends.",
      },
      students: {
        label: "Students",
        description: "A student's profile.",
      },
      profile: {
        label: "Profile",
        description: "Your details and account.",
      },
    },
  },
  how: {
    eyebrow: "Get started",
    title: "From the store to your first workout",
    subtitle: "Four steps. The first one is downloading the app.",
    steps: [
      {
        title: "Download the app",
        description: "Google Play or the App Store. On your phone, the link opens the store directly.",
      },
      {
        title: "Create your account",
        description: "Email, Google, or Apple. The same account works in the app and on this site.",
      },
      {
        title: "Set your goals",
        description: "Language, units, and whether you train gym, running, or HYROX.",
      },
      {
        title: "Start",
        description: "Your first routine, a GPS session, or today's food.",
      },
    ],
  },
  modes: {
    eyebrow: "How you train",
    title: "Gym, HYROX, or running",
    subtitle: "Three different sessions. You pick one when you set up the app.",
    items: [
      {
        title: "Gym",
        description:
          "Your own or a suggested routine, live: weight, reps, and a rest timer.",
      },
      {
        title: "HYROX",
        description:
          "Prep, Build, and Race programs, with splits and the standard for each station.",
      },
      {
        title: "Running",
        description:
          "Run or walk with GPS: map, pace, splits, and elevation. Treadmill too.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Details",
    items: [
      {
        q: "Is FORGEN free?",
        a: "Yes. Today every account uses Free: training, essential nutrition, progress, social, and AI Coach (5 messages/day, up to 10 routines).",
      },
      {
        q: "Can I pay for Gymrat or Gymrat Pro yet?",
        a: "Not yet. The prices in that section are a reference: $4.99 and $9.99 per month. When in-app purchases go live, those plans raise the limits.",
      },
      {
        q: "Do I need my own OpenAI API key?",
        a: "No. AI Coach is included, with daily limits by plan. Free has an optional advanced setting to use your own key; that is not the main path.",
      },
      {
        q: "How many exercises are there?",
        a: "1,300+ in the extended catalog, with GIF demos, plus a local starter catalog and custom exercises you create (up to 100).",
      },
      {
        q: "Do HYROX and running count toward the routine limit?",
        a: "No. HYROX system routines (Prep, Build, Race) and Runner do not use your 10 / 20 / 50 saved-routine slots.",
      },
      {
        q: "Can I train offline?",
        a: "You can download the catalog and log a session without a network; it syncs when you're back. Coach, food, social, and progress need a connection.",
      },
      {
        q: "Does it connect to Apple Health or Health Connect?",
        a: "If you allow it, FORGEN reads weight and body fat and writes workouts, distance, and active calories.",
      },
      {
        q: "Is there iOS?",
        a: "Yes. FORGEN is on Google Play and on the App Store (iPhone and iPad).",
      },
      {
        q: "Can I delete my account?",
        a: "Yes. In the app: Profile → Account → Delete account. Or email support@forgen.app. Details at forgen.app/delete-account.",
      },
    ],
  },
  features: {
    title: "What you can do",
    subtitle: "Six pieces. Each one covers a different job.",
    items: [
      {
        id: "train",
        title: "The session",
        description:
          "Log sets, weight, reps, RIR, and rest. Your own routine, or the one suggested for today.",
      },
      {
        id: "coach",
        title: "AI Coach",
        description:
          "Ask for a routine or a tweak. It answers from your history, not a generic form.",
      },
      {
        id: "nutrition",
        title: "Nutrition",
        description:
          "A daily budget, macros, and water. Add food by search, text, or voice.",
      },
      {
        id: "progress",
        title: "Progress",
        description:
          "Level, streaks, and records. A map shows which muscles are still fatigued.",
      },
      {
        id: "social",
        title: "Friends",
        description:
          "A 24-hour feed and a ping when someone in your circle finishes a workout.",
      },
      {
        id: "trainer",
        title: "Trainer mode",
        description:
          "Assign routines and see how your students are doing. It arrives with Gymrat Pro.",
      },
    ],
  },
  pricing: {
    title: "Plans",
    subtitle:
      "You start free today. Gymrat and Gymrat Pro can be paid for later: here is what they will include, and the reference price.",
    soon: "Coming soon",
    reference: "Reference price",
    plans: {
      free: {
        name: "Free",
        price: "$0",
        period: "forever",
        description: "Train, eat, and compete with the essentials.",
        features: [
          "Up to 10 custom routines (HYROX and Runner do not count)",
          "AI Coach: 5 messages/day",
          "Gym, GPS running, recovery map, XP, and social",
          "Food: search, quick-add, voice, and manual",
        ],
        cta: "Create free account",
      },
      pro: {
        name: "Gymrat",
        price: "$4.99",
        period: "/ month",
        description: "More routines, more AI Coach, and experience extras.",
        features: [
          "Up to 20 custom routines",
          "AI Coach: 30 messages/day",
          "Proactive AI in-session (sets, weights, and reps)",
          "Custom accent color",
          "Food barcode scanning",
        ],
        cta: "Coming soon",
      },
      proPlus: {
        name: "Gymrat Pro",
        price: "$9.99",
        period: "/ month",
        description: "Max routines, unlimited Coach, and trainer mode.",
        features: [
          "Up to 50 custom routines",
          "Unlimited AI Coach",
          "Everything in Gymrat",
          "Detect calories in food with photos",
          "Trainer mode (students)",
        ],
        cta: "Coming soon",
      },
    },
  },
  download: {
    title: "Download FORGEN",
    subtitle: "Mobile app for Android and iOS. Get it on Google Play or the App Store.",
    appStore: "App Store",
    hasAccount: "Already have an account?",
    signInLink: "Sign in",
    sameEmail: "with the same email as in the app.",
  },
  cta: {
    title: "Ready to start?",
    subtitle:
      "Download FORGEN and create your account. Start free on Android and iOS.",
    createAccount: "Create account",
    downloadApp: "Download app",
  },
  leaderboards: {
    eyebrow: "Community",
    title: "Live rankings",
    subtitle:
      "The in-app community: you compete with friends and with everyone else, on the same board.",
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
      "Forge Your Potential. Train, eat, measure, and push forward with AI and community — in one place.",
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
    deleteAccount: "Delete account",
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
