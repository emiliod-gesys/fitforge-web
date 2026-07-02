const FEATURES = [
  {
    title: "Entrenos inteligentes",
    description: "Registra series, peso y RIR con temporizador de descanso integrado.",
    icon: "🏋️",
  },
  {
    title: "Coach IA",
    description: "Recomendaciones personalizadas con tu propia API key de OpenAI o Gemini.",
    icon: "✨",
  },
  {
    title: "Progreso real",
    description: "PRs, volumen semanal, composición corporal y milestones desbloqueables.",
    icon: "📈",
  },
  {
    title: "Recuperación muscular",
    description: "Mapa visual de fatiga para saber qué entrenar cada día.",
    icon: "🧠",
  },
  {
    title: "Social & rankings",
    description: "Amigos, leaderboards y emblemas de nivel de Bronce a Inmortal.",
    icon: "🏆",
  },
  {
    title: "Nutrición",
    description: "Registro de comidas y macros para complementar tu entrenamiento.",
    icon: "🥗",
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="border-t border-forge-border bg-forge-surface px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Todo lo que necesitas en un solo lugar
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-forge-muted">
          Diseñada para quienes entrenan en serio, sin complicar lo esencial.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-forge-border bg-forge-card p-6 transition hover:border-forge-orange/40"
            >
              <span className="text-3xl" aria-hidden>
                {feature.icon}
              </span>
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-forge-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
