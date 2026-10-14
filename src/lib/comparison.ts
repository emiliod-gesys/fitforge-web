import type { Locale } from "@/lib/i18n/config";

export type ComparisonStatus = "yes" | "partial" | "no";

export type ComparisonCell = {
  status?: ComparisonStatus;
  note: string;
};

export type ComparisonRow = {
  feature: string;
  cells: ComparisonCell[];
};

export type ComparisonGroup = {
  title: string;
  rows: ComparisonRow[];
};

export type ComparisonCopy = {
  title: string;
  intro: string;
  legendYes: string;
  legendPartial: string;
  legendNo: string;
  legendNote: string;
  scrollHint: string;
  apps: { name: string; tag: string }[];
  groups: ComparisonGroup[];
};

const appsEs = [
  { name: "FORGEN", tag: "Una app" },
  { name: "WiseMeal", tag: "Comida con IA" },
  { name: "MyFitnessPal", tag: "Diario de comida" },
  { name: "Fitbod", tag: "Entreno con IA" },
  { name: "MacroFactor", tag: "Dos apps" },
];

const appsEn = [
  { name: "FORGEN", tag: "One app" },
  { name: "WiseMeal", tag: "AI food" },
  { name: "MyFitnessPal", tag: "Food diary" },
  { name: "Fitbod", tag: "AI training" },
  { name: "MacroFactor", tag: "Two apps" },
];

function row(feature: string, cells: ComparisonCell[]): ComparisonRow {
  return { feature, cells };
}

function text(note: string): ComparisonCell {
  return { note };
}

function yes(note: string): ComparisonCell {
  return { status: "yes", note };
}

function partial(note: string): ComparisonCell {
  return { status: "partial", note };
}

function no(note: string): ComparisonCell {
  return { status: "no", note };
}

const es: ComparisonCopy = {
  title: "FORGEN frente a WiseMeal, MyFitnessPal, Fitbod y MacroFactor",
  intro:
    "Precios de lista en USD, tienda de Estados Unidos, octubre 2026. FORGEN cobra Gymrat $4.99/mes y Gymrat Pro $9.99/mes. WiseMeal tiene varios precios activos a la vez. MyFitnessPal: Premium $19.99/mes o $79.99/año; Premium+ $24.99/mes o $99.99/año. Desde mayo 2026, Meal Scan es Premium. Fitbod: $15.99/mes o $95.99/año. MacroFactor: Nutrition y Workouts son apps distintas ($11.99/mes o $71.99/año cada una; las dos, $89.99/año). Los precios cambian por país y por oferta.",
  legendYes: "Sí: la tiene",
  legendPartial: "Parcial: se parece, con menos alcance",
  legendNo: "No: no forma parte del producto",
  legendNote: "La columna marcada es FORGEN. Si un plan lo limita, la nota lo dice.",
  scrollHint: "Desliza la tabla para ver las cinco apps.",
  apps: appsEs,
  groups: [
    {
      title: "Precio",
      rows: [
        row("Mensual", [
          text("$0. Gymrat $4.99. Gymrat Pro $9.99"),
          text("$9.99 o $19.99. También hay semanal de $3.99"),
          text("Gratis. Premium $19.99. Premium+ $24.99"),
          text("$15.99"),
          text("$11.99 por app. Nutrition o Workouts"),
        ]),
        row("Anual", [
          text("No ofrece plan anual"),
          text("$35.99 a $59.99, según la oferta de la tienda"),
          text("Premium $79.99. Premium+ $99.99"),
          text("$95.99. Sale a unos $8 al mes"),
          text("$71.99 por app. Las dos juntas: $89.99"),
        ]),
        row("Plan gratuito", [
          yes("Entreno, comida manual y Coach con límite"),
          partial("Se descarga gratis; el uso serio va de pago"),
          yes("Diario, búsqueda y código de un producto"),
          no("Prueba de 7 días y después de pago"),
          no("Prueba de 7 días. No hay plan gratis"),
        ]),
      ],
    },
    {
      title: "Entrenamiento",
      rows: [
        row("Series, repeticiones y peso", [
          yes("Se guardan para la próxima sesión"),
          no("No es un registro de series"),
          partial("Anota ejercicio sobre todo como calorías"),
          yes("El producto está hecho para eso"),
          yes("En la app Workouts, aparte"),
        ]),
        row("RIR de cada serie en el historial", [
          yes("Queda en la serie y lo usa la IA"),
          no("No registra RIR"),
          no("No registra RIR"),
          no("No registra RIR"),
          yes("Tracker de RIR en Workouts"),
        ]),
        row("IA proactiva del siguiente entreno", [
          yes("Gymrat y Pro. Mira historial, recuperación y RIR"),
          partial("Da consejos. No programa series"),
          no("No programa el siguiente entreno"),
          yes("Ajusta peso, reps y ejercicios"),
          yes("Autoprogresión diaria en Workouts"),
        ]),
        row("Rutinas propias y superseries", [
          yes("Gratis. Límite: 10, 20 o 50"),
          no("No arma rutinas de gimnasio"),
          no("No guarda rutinas de fuerza"),
          yes("Puedes guardar las tuyas y usar superseries"),
          yes("Plan propio y superseries en Workouts"),
        ]),
        row("Rutina inteligente por músculos", [
          yes("Gymrat y Pro. Parte de lo que ya entrenas"),
          partial("Planes de entreno genéricos, no por músculo"),
          no("No genera rutinas"),
          yes("Según objetivo, equipo y tiempo"),
          yes("Plan según objetivo, nivel y equipo"),
        ]),
        row("Ejercicios con imagen y video", [
          yes("Catálogo con imagen y video demostrativo"),
          no("No tiene biblioteca de ejercicios"),
          no("No tiene biblioteca de fuerza"),
          yes("Más de 1.000, con video en varios ángulos"),
          partial("Videos de técnica. No cubren todo el catálogo"),
        ]),
        row("Modo Hyrox", [
          yes("Prep, Build y Race, con estándares"),
          no("No tiene modo Hyrox"),
          no("No tiene modo Hyrox"),
          no("No tiene modo Hyrox"),
          no("No tiene modo Hyrox"),
        ]),
        row("Carrera y caminata con GPS", [
          yes("Outdoor, caminata y cinta, con ritmo y splits"),
          no("Lleva pasos, no una ruta GPS"),
          no("No registra la ruta de una carrera"),
          no("Tiene cardio, no un modo GPS"),
          no("No registra carreras con GPS"),
        ]),
        row("Recuperación muscular", [
          yes("Mapa de fatiga por grupo muscular"),
          no("No estima recuperación muscular"),
          no("No estima recuperación muscular"),
          yes("Mapa de recuperación para el siguiente día"),
          partial("Volumen por músculo. No es un mapa de fatiga"),
        ]),
        row("Entreno sin conexión", [
          yes("La sesión sigue y se sincroniza después"),
          no("No lo publican como modo offline"),
          no("No lo publican como modo offline"),
          no("No lo publican como modo offline"),
          no("No lo publican como modo offline"),
        ]),
      ],
    },
    {
      title: "Comida",
      rows: [
        row("Diario de calorías y macros", [
          yes("Proteína, carbohidrato, grasa y fibra"),
          yes("Es el centro de la app, con micronutrientes"),
          yes("La base de alimentos más grande del grupo"),
          no("No lleva un diario de comida"),
          yes("En Nutrition, con micronutrientes"),
        ]),
        row("Foto de comida con IA", [
          yes("Gymrat Pro, o gratis si pones tu propia API"),
          yes("Escanear el plato es la función principal"),
          yes("Meal Scan va en Premium y Premium+"),
          no("No escanea comida"),
          yes("Foto y etiqueta en Nutrition"),
        ]),
        row("Código de barras", [
          yes("Gymrat y Gymrat Pro"),
          yes("Incluido en el registro de comida"),
          yes("Un producto sigue en el plan gratis"),
          no("No escanea alimentos"),
          yes("En Nutrition"),
        ]),
        row("Agua y presupuesto calórico", [
          yes("Meta de agua y calorías según tu perfil"),
          yes("Agua, pasos y déficit del día"),
          yes("Agua y meta calórica. La meta no se adapta sola"),
          no("No lleva agua ni calorías"),
          partial("El gasto se recalcula con tu peso. El agua no es el foco"),
        ]),
      ],
    },
    {
      title: "Coach, progreso y cuenta",
      rows: [
        row("Coach IA en el chat", [
          yes("5, 30 o ilimitado según el plan"),
          partial("Recomendaciones. No es un chat de entreno"),
          no("No tiene un coach conversacional"),
          no("Hay dudas por email, no un chat"),
          no("Ajusta el plan. No conversa"),
        ]),
        row("Progreso: peso, récords y volumen", [
          yes("Peso corporal, récords y volumen de entreno"),
          partial("Peso y nutrición. No récords de fuerza"),
          partial("Peso e informes. La fuerza no es el foco"),
          yes("Historial de fuerza y recuperación"),
          yes("Peso en Nutrition. Récords y volumen en Workouts"),
        ]),
        row("Amigos, feed y avisos", [
          yes("Perfiles, récords y aviso cuando un amigo entrena"),
          no("No tiene red social de entreno"),
          partial("Amigos y comunidad. No un feed de sesiones"),
          no("No tiene red social"),
          no("No tiene red social"),
        ]),
        row("Modo entrenador", [
          yes("Gymrat Pro. Pestaña de alumnos"),
          no("No gestiona alumnos"),
          no("No gestiona alumnos"),
          no("No gestiona alumnos"),
          no("No gestiona alumnos"),
        ]),
        row("Entreno y comida en la misma app", [
          yes("Una sola cuenta para las dos cosas"),
          partial("La comida es completa. El entreno no"),
          partial("La comida es completa. El entreno no se programa"),
          no("Solo entreno"),
          no("Hacen falta Nutrition y Workouts"),
        ]),
      ],
    },
  ],
};

const en: ComparisonCopy = {
  title: "FORGEN versus WiseMeal, MyFitnessPal, Fitbod, and MacroFactor",
  intro:
    "List prices in USD, United States store, October 2026. FORGEN charges Gymrat $4.99/month and Gymrat Pro $9.99/month. WiseMeal has several prices live at once. MyFitnessPal: Premium $19.99/month or $79.99/year; Premium+ $24.99/month or $99.99/year. Since May 2026, Meal Scan is Premium. Fitbod: $15.99/month or $95.99/year. MacroFactor: Nutrition and Workouts are separate apps ($11.99/month or $71.99/year each; both, $89.99/year). Prices change by country and by offer.",
  legendYes: "Yes: it has it",
  legendPartial: "Partial: similar, with less reach",
  legendNo: "No: not part of the product",
  legendNote: "The marked column is FORGEN. If a plan limits it, the note says so.",
  scrollHint: "Scroll the table to see all five apps.",
  apps: appsEn,
  groups: [
    {
      title: "Price",
      rows: [
        row("Monthly", [
          text("$0. Gymrat $4.99. Gymrat Pro $9.99"),
          text("$9.99 or $19.99. There is also a $3.99 weekly plan"),
          text("Free. Premium $19.99. Premium+ $24.99"),
          text("$15.99"),
          text("$11.99 per app. Nutrition or Workouts"),
        ]),
        row("Yearly", [
          text("No yearly plan"),
          text("$35.99 to $59.99, depending on the store offer"),
          text("Premium $79.99. Premium+ $99.99"),
          text("$95.99. About $8 a month"),
          text("$71.99 per app. Both together: $89.99"),
        ]),
        row("Free plan", [
          yes("Training, manual food logging, and Coach with a limit"),
          partial("Free to download; serious use is paid"),
          yes("Diary, search, and a barcode for one product"),
          no("7-day trial, then paid"),
          no("7-day trial. No free plan"),
        ]),
      ],
    },
    {
      title: "Training",
      rows: [
        row("Sets, reps, and weight", [
          yes("Saved for the next session"),
          no("Not a set log"),
          partial("Logs exercise mostly as calories"),
          yes("The product is built for this"),
          yes("In the separate Workouts app"),
        ]),
        row("RIR for each set in history", [
          yes("Stored on the set and used by the AI"),
          no("Does not log RIR"),
          no("Does not log RIR"),
          no("Does not log RIR"),
          yes("RIR tracker in Workouts"),
        ]),
        row("Proactive AI for the next workout", [
          yes("Gymrat and Pro. Uses history, recovery, and RIR"),
          partial("Gives tips. Does not program sets"),
          no("Does not program the next workout"),
          yes("Adjusts weight, reps, and exercises"),
          yes("Daily auto-progression in Workouts"),
        ]),
        row("Custom routines and supersets", [
          yes("Free. Limit: 10, 20, or 50"),
          no("Does not build gym routines"),
          no("Does not save strength routines"),
          yes("You can save your own and use supersets"),
          yes("Custom plan and supersets in Workouts"),
        ]),
        row("Smart routine by muscle", [
          yes("Gymrat and Pro. Starts from what you already train"),
          partial("Generic training plans, not by muscle"),
          no("Does not generate routines"),
          yes("Based on goal, equipment, and time"),
          yes("Plan by goal, level, and equipment"),
        ]),
        row("Exercises with image and video", [
          yes("Catalog with a demo image and video"),
          no("No exercise library"),
          no("No strength library"),
          yes("1,000+, with video from several angles"),
          partial("Technique videos. They do not cover the whole catalog"),
        ]),
        row("Hyrox mode", [
          yes("Prep, Build, and Race, with standards"),
          no("No Hyrox mode"),
          no("No Hyrox mode"),
          no("No Hyrox mode"),
          no("No Hyrox mode"),
        ]),
        row("Run and walk with GPS", [
          yes("Outdoor, walk, and treadmill, with pace and splits"),
          no("Tracks steps, not a GPS route"),
          no("Does not record a run route"),
          no("Has cardio, not a GPS mode"),
          no("Does not record GPS runs"),
        ]),
        row("Muscle recovery", [
          yes("Fatigue map by muscle group"),
          no("Does not estimate muscle recovery"),
          no("Does not estimate muscle recovery"),
          yes("Recovery map for the next day"),
          partial("Volume by muscle. Not a fatigue map"),
        ]),
        row("Train offline", [
          yes("The session continues and syncs later"),
          no("Not published as an offline mode"),
          no("Not published as an offline mode"),
          no("Not published as an offline mode"),
          no("Not published as an offline mode"),
        ]),
      ],
    },
    {
      title: "Food",
      rows: [
        row("Calorie and macro diary", [
          yes("Protein, carbohydrate, fat, and fiber"),
          yes("The center of the app, with micronutrients"),
          yes("The largest food database in the group"),
          no("No food diary"),
          yes("In Nutrition, with micronutrients"),
        ]),
        row("AI food photo", [
          yes("Gymrat Pro, or free if you use your own API"),
          yes("Scanning the plate is the main feature"),
          yes("Meal Scan is on Premium and Premium+"),
          no("Does not scan food"),
          yes("Photo and label in Nutrition"),
        ]),
        row("Barcode", [
          yes("Gymrat and Gymrat Pro"),
          yes("Included in food logging"),
          yes("One product stays on the free plan"),
          no("Does not scan food"),
          yes("In Nutrition"),
        ]),
        row("Water and calorie budget", [
          yes("Water and calorie targets from your profile"),
          yes("Water, steps, and the day's deficit"),
          yes("Water and a calorie target. The target does not adapt on its own"),
          no("No water or calorie tracking"),
          partial("Expenditure updates from your weight. Water is not the focus"),
        ]),
      ],
    },
    {
      title: "Coach, progress, and account",
      rows: [
        row("AI Coach in chat", [
          yes("5, 30, or unlimited, by plan"),
          partial("Recommendations. Not a training chat"),
          no("No conversational coach"),
          no("Questions by email, not a chat"),
          no("Adjusts the plan. Does not converse"),
        ]),
        row("Progress: weight, records, and volume", [
          yes("Body weight, records, and training volume"),
          partial("Weight and nutrition. No strength records"),
          partial("Weight and reports. Strength is not the focus"),
          yes("Strength history and recovery"),
          yes("Weight in Nutrition. Records and volume in Workouts"),
        ]),
        row("Friends, feed, and alerts", [
          yes("Profiles, records, and an alert when a friend trains"),
          no("No training social network"),
          partial("Friends and community. No session feed"),
          no("No social network"),
          no("No social network"),
        ]),
        row("Trainer mode", [
          yes("Gymrat Pro. Students tab"),
          no("Does not manage students"),
          no("Does not manage students"),
          no("Does not manage students"),
          no("Does not manage students"),
        ]),
        row("Training and food in the same app", [
          yes("One account for both"),
          partial("Food is complete. Training is not"),
          partial("Food is complete. Training is not programmed"),
          no("Training only"),
          no("You need Nutrition and Workouts"),
        ]),
      ],
    },
  ],
};

const copies: Record<Locale, ComparisonCopy> = { es, en };

export function getComparison(locale: Locale): ComparisonCopy {
  return copies[locale] ?? copies.es;
}
