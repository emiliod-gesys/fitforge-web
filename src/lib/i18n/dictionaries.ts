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
  details: {
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
    note: string;
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
    how: "Cómo funciona",
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
      "Entrena, come y mide tu progreso con IA y comunidad. Gym, running con GPS y HYROX — en un solo lugar.",
    proof: "Android · Español e inglés · Más de 1.300 ejercicios con demo",
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
  how: {
    eyebrow: "Empezar",
    title: "De la cuenta al primer entreno",
    subtitle:
      "FORGEN es una app móvil. La web es tu puerta: cuenta, planes y descarga.",
    steps: [
      {
        title: "Crea tu cuenta",
        description:
          "Email, Google o Apple. Elige idioma, métricas, objetivos y si entrenas gym, running o HYROX.",
      },
      {
        title: "Entrena o registra comida",
        description:
          "Inicia una rutina, un entreno libre o una sesión GPS. Añade comida por búsqueda, texto, voz o —según plan— código de barras y foto.",
      },
      {
        title: "Mide y comparte",
        description:
          "XP, PRs, mapa de recuperación y rankings. El Coach IA usa tu historial real, no un cuestionario genérico.",
      },
    ],
  },
  modes: {
    eyebrow: "Tres modos de sistema",
    title: "Gym, HYROX y running — sin mezclarlos mal",
    subtitle:
      "Las rutinas de HYROX y Runner son de sistema: no gastan tu cupo de rutinas guardadas.",
    items: [
      {
        title: "Gym",
        description:
          "Rutinas propias o sugeridas, sesión en vivo con series, peso, reps y RIR, temporizador de descanso y cambio a un ejercicio similar.",
      },
      {
        title: "HYROX",
        description:
          "Tres programas de sistema (Prep, Build y Race) con splits y estándares de estación para llegar al race day con estructura.",
      },
      {
        title: "Running",
        description:
          "Correr o caminar con GPS: mapa, ritmo, splits y desnivel. También sesión en cinta, integrada al diario de kcal.",
      },
    ],
  },
  details: {
    eyebrow: "Detalle de producto",
    title: "Lo que usas cada sesión",
    subtitle:
      "No es un contador de series con un chat pegado. El día a día está pensado para entrenar de verdad.",
    items: [
      {
        title: "Mapa de recuperación",
        description:
          "Estimación de fatiga por grupo muscular (~48 h) en el hub de entrenar y en la vista de un alumno.",
      },
      {
        title: "IA en el entreno",
        description:
          "El Coach genera rutinas y responde con tu historial. En Gymrat y Pro, la IA proactiva sugiere pesos y reps al iniciar la sesión.",
      },
      {
        title: "Nutrición del día",
        description:
          "Presupuesto desde tu TDEE, macros, agua y kcal de entrenos FORGEN. Búsqueda, quick-add con IA, voz y manual; barcode en Gymrat; foto en Gymrat Pro.",
      },
      {
        title: "Progreso jugable",
        description:
          "Niveles y XP, rachas, hitos (volumen, distancia, kcal, entrenos) y récords con estimación de 1RM.",
      },
      {
        title: "Offline",
        description:
          "Descarga el catálogo y entrena sin red; la sesión se sincroniza al volver. Coach, comida, social y progreso necesitan conexión.",
      },
      {
        title: "Salud y comunidad",
        description:
          "Importa peso/grasa y exporta entrenos a Apple Salud o Health Connect. Amigos, feed, push y leaderboards (nivel, volumen, distancia, HYROX y más).",
      },
    ],
  },
  faq: {
    eyebrow: "Preguntas",
    title: "Antes de descargar",
    items: [
      {
        q: "¿FORGEN es gratis?",
        a: "Sí. El plan Gratuito cubre entrenar, nutrición esencial, progreso, social y Coach IA con 5 mensajes al día y hasta 10 rutinas. Gymrat y Gymrat Pro ampliarán límites cuando los pagos in-app estén activos; hoy puedes usar FORGEN en gratuito.",
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
        q: "¿Hay iOS?",
        a: "La app está construida para Android e iOS. Android está en Google Play; iOS llega con TestFlight / App Store.",
      },
      {
        q: "¿Puedo borrar mi cuenta?",
        a: "Sí. En la app: Perfil → Cuenta → Eliminar cuenta. O escribe a support@forgen.app. Detalle en forgen.app/delete-account.",
      },
    ],
  },
  features: {
    title: "No es solo un contador de series",
    subtitle:
      "Entrenamiento, comida, progreso, social e IA — gym, running y HYROX.",
    items: [
      {
        id: "train",
        title: "Gym, carrera y HYROX",
        description:
          "Más de 1.300 ejercicios. Rutinas propias o sugeridas, sesión en vivo, cardio con GPS y estaciones HYROX.",
      },
      {
        id: "coach",
        title: "Coach IA",
        description:
          "Rutinas, consejos y alimentación con tu historial y métricas en tiempo real. Límites diarios según plan.",
      },
      {
        id: "nutrition",
        title: "Nutrición e hidratación",
        description:
          "Presupuesto calórico, macros, agua y kcal de tus entrenos. Búsqueda, voz, quick-add; barcode y foto según plan.",
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
          "Amigos, feed, PRs compartidos, avisos push y leaderboards — también de HYROX.",
      },
      {
        id: "trainer",
        title: "Modo entrenador",
        description:
          "En Gymrat Pro: alumnos, su recuperación, nutrición del día y rutinas que tú les asignas.",
      },
    ],
  },
  pricing: {
    title: "Elige tu plan",
    subtitle:
      "Empieza gratis. Gymrat y Gymrat Pro están definidos en la app; el cobro in-app se activará pronto.",
    note: "Precios de referencia en la app: Gymrat 4,99 USD/mes y Gymrat Pro 9,99 USD/mes. Mientras el pago in-app no esté activo, todas las cuentas entran en Gratuito.",
    popular: "Popular",
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
        cta: "Unirse a la lista",
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
      "Crea tu cuenta y descarga FORGEN. Empieza gratis en Android.",
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
    how: "How it works",
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
      "Train, eat, and track progress with AI and community. Gym, GPS running, and HYROX — in one place.",
    proof: "Android · English & Spanish · 1,300+ exercises with demos",
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
  how: {
    eyebrow: "Get started",
    title: "From account to first workout",
    subtitle:
      "FORGEN is a mobile app. The website is your front door: account, plans, and download.",
    steps: [
      {
        title: "Create your account",
        description:
          "Email, Google, or Apple. Set language, metrics, goals, and whether you train gym, running, or HYROX.",
      },
      {
        title: "Train or log food",
        description:
          "Start a routine, a free session, or GPS cardio. Add food by search, text, voice, or — on paid plans — barcode and photo.",
      },
      {
        title: "Measure and share",
        description:
          "XP, PRs, recovery map, and rankings. The AI Coach uses your real history, not a generic quiz.",
      },
    ],
  },
  modes: {
    eyebrow: "Three system modes",
    title: "Gym, HYROX, and running — kept distinct",
    subtitle:
      "HYROX and Runner system routines do not count toward your saved-routine limit.",
    items: [
      {
        title: "Gym",
        description:
          "Your own or suggested routines, live session with sets, weight, reps and RIR, rest timer, and swap to a similar exercise.",
      },
      {
        title: "HYROX",
        description:
          "Three system programs (Prep, Build, and Race) with station splits and standards so race day has structure.",
      },
      {
        title: "Running",
        description:
          "Run or walk with GPS: map, pace, splits, and elevation. Treadmill sessions too, tied into your daily kcal.",
      },
    ],
  },
  details: {
    eyebrow: "Product detail",
    title: "What you use every session",
    subtitle:
      "Not a set counter with a chatbot taped on. The daily flow is built for real training.",
    items: [
      {
        title: "Recovery map",
        description:
          "Per-muscle fatigue estimate (~48 h) on the train hub and on a student’s profile.",
      },
      {
        title: "AI in the workout",
        description:
          "The Coach builds routines and answers from your history. On Gymrat and Pro, proactive AI suggests weights and reps when you start a session.",
      },
      {
        title: "Daily nutrition",
        description:
          "Budget from your TDEE, macros, water, and kcal from FORGEN workouts. Search, AI quick-add, voice, and manual; barcode on Gymrat; photo on Gymrat Pro.",
      },
      {
        title: "Playable progress",
        description:
          "Levels and XP, streaks, milestones (volume, distance, kcal, workouts), and PRs with 1RM estimates.",
      },
      {
        title: "Offline",
        description:
          "Download the catalog and train without a network; the session syncs when you’re back. Coach, food, social, and progress need a connection.",
      },
      {
        title: "Health & community",
        description:
          "Import weight/body fat and export workouts to Apple Health or Health Connect. Friends, feed, push, and leaderboards (level, volume, distance, HYROX, and more).",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Before you download",
    items: [
      {
        q: "Is FORGEN free?",
        a: "Yes. Free covers training, essential nutrition, progress, social, and AI Coach with 5 messages/day and up to 10 routines. Gymrat and Gymrat Pro will expand limits when in-app purchases go live; today every account starts on Free.",
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
        q: "Is there iOS?",
        a: "The app is built for Android and iOS. Android is on Google Play; iOS is coming via TestFlight / App Store.",
      },
      {
        q: "Can I delete my account?",
        a: "Yes. In the app: Profile → Account → Delete account. Or email support@forgen.app. Details at forgen.app/delete-account.",
      },
    ],
  },
  features: {
    title: "Not just a set counter",
    subtitle:
      "Training, food, progress, social, and AI — gym, running, and HYROX.",
    items: [
      {
        id: "train",
        title: "Gym, running & HYROX",
        description:
          "1,300+ exercises. Your own or suggested routines, live sessions, GPS cardio, and HYROX stations.",
      },
      {
        id: "coach",
        title: "AI Coach",
        description:
          "Ask for personalized routines, training advice, and nutrition ideas using your live metrics. Daily limits by plan.",
      },
      {
        id: "nutrition",
        title: "Nutrition & hydration",
        description:
          "Calorie budget, macros, water, and kcal from your workouts. Search, voice, quick-add; barcode and photo by plan.",
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
          "Friends, feed, shared PRs, push alerts, and leaderboards — including HYROX.",
      },
      {
        id: "trainer",
        title: "Trainer mode",
        description:
          "On Gymrat Pro: students, their recovery, daily nutrition, and routines you assign.",
      },
    ],
  },
  pricing: {
    title: "Choose your plan",
    subtitle:
      "Start free. Gymrat and Gymrat Pro are defined in the app; in-app billing will go live soon.",
    note: "Reference prices in the app: Gymrat $4.99/month and Gymrat Pro $9.99/month. Until in-app purchases are live, every account starts on Free.",
    popular: "Popular",
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
        cta: "Join the waitlist",
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
      "Create your account and download FORGEN. Start free on Android.",
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
