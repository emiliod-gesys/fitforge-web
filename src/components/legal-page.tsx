"use client";

import Link from "next/link";
import { useDictionary, useLocaleContext } from "@/components/locale-provider";

type LegalDoc = "privacy" | "terms";

type Section = {
  title: string;
  paragraphs: string[];
};

const UPDATED = "13 de agosto de 2026";
const UPDATED_EN = "August 13, 2026";
const CONTACT = "support@forgen.app";

function privacyEs(): Section[] {
  return [
    {
      title: "1. Quiénes somos",
      paragraphs: [
        "FORGEN (“nosotros”) opera la aplicación móvil FORGEN y el sitio web forgen.app. Esta política explica qué datos recopilamos, para qué los usamos y cómo puedes ejercer tus derechos.",
        "El producto principal es la app móvil de fitness (entrenamiento, nutrición, progreso, social, coach con IA y, en planes aplicables, modo entrenador). El sitio web se usa para marketing, cuentas y descargas.",
      ],
    },
    {
      title: "2. Datos que recopilamos",
      paragraphs: [
        "Cuenta: email, contraseña (almacenada de forma cifrada por nuestro proveedor de autenticación), nombre visible, idioma y preferencias de perfil.",
        "Inicio de sesión con Google o Apple: si eliges esos proveedores, recibimos identificadores básicos que ellos comparten (por ejemplo email y, si lo autorizas, nombre y foto de perfil).",
        "Verificación de seguridad: cuando está activo Cloudflare Turnstile, se procesa un token de captcha para reducir abuso en registro e inicio de sesión.",
        "Datos de entrenamiento y salud que tú registras: entrenos, series, peso, repeticiones, RIR, descanso, rutinas, métricas corporales, nutrición, agua, progreso, PRs, mapa de recuperación muscular y actividad social (amigos, feed, clasificaciones, modo alumnos).",
        "Datos técnicos: identificadores de dispositivo, registros de uso, idioma, zona horaria y, si activas notificaciones, tokens de Firebase Cloud Messaging para avisos con la app cerrada (p. ej. cuando un amigo entrena).",
        "Pagos: si contratas un plan de pago, el procesador de pagos (p. ej. Stripe o las tiendas de aplicaciones) trata los datos de facturación. Nosotros no almacenamos números completos de tarjeta.",
        "Contenido que envías al Coach IA o a funciones de foto de comida: el texto o las imágenes que subes para obtener sugerencias. Esas solicitudes se procesan para darte la función; no vendemos ese contenido.",
      ],
    },
    {
      title: "3. Para qué usamos los datos",
      paragraphs: [
        "Prestar el servicio: cuenta, sincronización entre dispositivos, entrenos, nutrición, rankings y modo alumnos cuando aplica.",
        "Coach IA y funciones premium: generar rutinas, consejos o estimación nutricional a partir de tus métricas en tiempo real y del contenido que envías, con los límites de tu plan. El Coach usa infraestructura de FORGEN; no te pedimos una API key propia.",
        "Seguridad: verificar inicios de sesión (incluido Turnstile cuando está activo), prevenir abuso y proteger leaderboards.",
        "Comunicaciones: avisos de cuenta, recuperación de contraseña y notificaciones que actives (p. ej. actividad social).",
        "Mejora del producto: analítica agregada o seudonimizada para entender qué funciona, sin vender perfiles individuales a anunciantes.",
      ],
    },
    {
      title: "4. Base legal y conservación",
      paragraphs: [
        "Tratamos datos porque son necesarios para el contrato (tu cuenta y la app), porque tenemos un interés legítimo en seguridad y mejora del producto, o porque das consentimiento (p. ej. Google o Apple Sign-In, notificaciones o datos de salud que decides guardar).",
        "Conservamos la cuenta mientras esté activa. Puedes pedir la eliminación de la cuenta desde la app (Perfil → Cuenta) o escribiendo a " +
          CONTACT +
          ". Algunos registros técnicos o legales pueden conservarse el tiempo mínimo exigido por ley.",
      ],
    },
    {
      title: "5. Con quién compartimos datos",
      paragraphs: [
        "Proveedores que nos ayudan a operar el servicio, bajo contrato: alojamiento, base de datos y autenticación (Supabase), notificaciones push (Firebase), captcha (Cloudflare Turnstile), infraestructura web (Vercel) y, en su caso, pagos.",
        "Proveedores de IA que procesan las solicitudes del Coach o de foto de comida para devolver una respuesta. No usamos esos envíos para anuncios de terceros.",
        "Catálogo de ejercicios: parte del contenido de ejercicios, imágenes o demos puede provenir de fuentes públicas licenciadas (p. ej. wger, CC-BY-SA) además del catálogo propio de FORGEN.",
        "Otros usuarios: lo que elijas hacer público o compartir (nombre, avatar, PRs, posts del feed, posición en rankings, datos visibles para un entrenador si aceptas ser alumno).",
        "Autoridades si la ley lo exige. No vendemos tu información personal.",
      ],
    },
    {
      title: "6. Transferencias internacionales",
      paragraphs: [
        "Nuestros proveedores pueden tratar datos en servidores fuera de tu país (por ejemplo Estados Unidos). Aplicamos las salvaguardas habituales de esos proveedores (contratos, medidas de seguridad).",
      ],
    },
    {
      title: "7. Tus derechos",
      paragraphs: [
        "Según tu país, puedes acceder, rectificar, exportar o eliminar datos, o oponerte a ciertos tratamientos. Empieza desde la app o escríbenos a " +
          CONTACT +
          ".",
        "Si usas Google o Apple Sign-In, también puedes gestionar el acceso de FORGEN desde la configuración de esa cuenta.",
      ],
    },
    {
      title: "8. Menores",
      paragraphs: [
        "FORGEN no está dirigida a menores de 13 años (o la edad mínima de consentimiento digital en tu país). Si detectamos una cuenta de un menor, la eliminaremos.",
      ],
    },
    {
      title: "9. Cambios",
      paragraphs: [
        "Si actualizamos esta política, publicaremos la nueva versión en esta página y cambiaremos la fecha de vigencia. El uso continuado del servicio tras un cambio relevante implica que has podido revisar la versión actual.",
      ],
    },
    {
      title: "10. Contacto",
      paragraphs: [
        "Preguntas sobre privacidad: " + CONTACT + ". Sitio: https://www.forgen.app",
      ],
    },
  ];
}

function privacyEn(): Section[] {
  return [
    {
      title: "1. Who we are",
      paragraphs: [
        "FORGEN (“we”) operates the FORGEN mobile app and the website forgen.app. This policy describes what data we collect, why we use it, and how you can exercise your rights.",
        "The core product is the mobile fitness app (training, nutrition, progress, social, AI coach and, on eligible plans, trainer mode). The website is used for marketing, accounts, and downloads.",
      ],
    },
    {
      title: "2. Data we collect",
      paragraphs: [
        "Account: email, password (stored hashed by our auth provider), display name, language, and profile preferences.",
        "Google or Apple Sign-In: if you choose those providers, we receive basic identifiers they share (such as email and, if you allow it, name and profile photo).",
        "Security verification: when Cloudflare Turnstile is enabled, a captcha token is processed to reduce abuse on sign-up and sign-in.",
        "Training and health data you log: workouts, sets, weight, reps, RIR, rest timer, routines, body metrics, nutrition, water, progress, PRs, muscle recovery map, and social activity (friends, feed, leaderboards, student mode).",
        "Technical data: device identifiers, usage logs, language, time zone, and, if you enable notifications, Firebase Cloud Messaging tokens for alerts when the app is closed (e.g. when a friend trains).",
        "Payments: if you buy a paid plan, the payment processor (e.g. Stripe or the app stores) handles billing data. We do not store full card numbers.",
        "Content you send to AI Coach or food-photo features: text or images you submit for suggestions. Those requests are processed to provide the feature; we do not sell that content.",
      ],
    },
    {
      title: "3. How we use data",
      paragraphs: [
        "To provide the service: account, sync across devices, workouts, nutrition, rankings, and student mode when applicable.",
        "AI Coach and premium features: generate routines, advice, or nutrition estimates from your live metrics and the content you send, within your plan limits. The Coach runs on FORGEN infrastructure; we do not ask you for your own API key.",
        "Security: verify sign-in (including Turnstile when enabled), prevent abuse, and protect leaderboards.",
        "Communications: account notices, password reset, and notifications you enable (e.g. social activity).",
        "Product improvement: aggregated or pseudonymized analytics. We do not sell individual profiles to advertisers.",
      ],
    },
    {
      title: "4. Legal basis and retention",
      paragraphs: [
        "We process data because it is needed to perform the contract (your account and the app), because we have a legitimate interest in security and product improvement, or because you consent (e.g. Google or Apple Sign-In, notifications, or health data you choose to store).",
        "We keep the account while it is active. You can request deletion from the app (Profile → Account) or by writing to " +
          CONTACT +
          ". Some technical or legal records may be kept for the minimum period required by law.",
      ],
    },
    {
      title: "5. Who we share data with",
      paragraphs: [
        "Service providers under contract: hosting, database, and authentication (Supabase), push notifications (Firebase), captcha (Cloudflare Turnstile), web infrastructure (Vercel), and payments where applicable.",
        "AI providers that process Coach or food-photo requests to return a response. We do not use those submissions for third-party ads.",
        "Exercise catalog: some exercise content, images, or demos may come from public licensed sources (e.g. wger, CC-BY-SA) in addition to FORGEN’s own catalog.",
        "Other users: what you choose to make public or share (name, avatar, PRs, feed posts, ranking position, data visible to a trainer if you accept being a student).",
        "Authorities if required by law. We do not sell your personal information.",
      ],
    },
    {
      title: "6. International transfers",
      paragraphs: [
        "Our providers may process data on servers outside your country (for example the United States). We rely on those providers’ standard safeguards (contracts and security measures).",
      ],
    },
    {
      title: "7. Your rights",
      paragraphs: [
        "Depending on your country, you may access, correct, export, or delete data, or object to certain processing. Start in the app or email " +
          CONTACT +
          ".",
        "If you use Google or Apple Sign-In, you can also manage FORGEN’s access in that account’s settings.",
      ],
    },
    {
      title: "8. Children",
      paragraphs: [
        "FORGEN is not directed at children under 13 (or the digital-consent age in your country). If we learn an account belongs to a child, we will delete it.",
      ],
    },
    {
      title: "9. Changes",
      paragraphs: [
        "If we update this policy, we will post the new version on this page and change the effective date. Continued use after a material change means you have had a chance to review the current version.",
      ],
    },
    {
      title: "10. Contact",
      paragraphs: [
        "Privacy questions: " + CONTACT + ". Website: https://www.forgen.app",
      ],
    },
  ];
}

function termsEs(): Section[] {
  return [
    {
      title: "1. Aceptación",
      paragraphs: [
        "Al crear una cuenta o usar FORGEN (app o web) aceptas estos Términos. Si no estás de acuerdo, no uses el servicio.",
      ],
    },
    {
      title: "2. El servicio",
      paragraphs: [
        "FORGEN es una app móvil de fitness (Android e iOS): entrenos, catálogo de más de 1.300 ejercicios, nutrición, hidratación, progreso, social, notificaciones, Coach IA y, en Gymrat Pro, modo entrenador. El sitio web es marketing, registro y acceso a cuenta; no sustituye a la app.",
        "Las funciones dependen del plan (Gratuito, Gymrat, Gymrat Pro). Los límites (rutinas, mensajes de Coach, foto de comida, alumnos, etc.) pueden cambiar; los publicamos en la web y en la app.",
      ],
    },
    {
      title: "3. Cuenta",
      paragraphs: [
        "Debes proporcionar información veraz y mantener la seguridad de tu contraseña. Eres responsable de la actividad de tu cuenta.",
        "Puedes registrarte con email, Google o Apple. El uso de esos proveedores está sujeto también a sus condiciones. Podemos usar verificación antiabuso (p. ej. Cloudflare Turnstile) en el registro.",
      ],
    },
    {
      title: "4. No es consejo médico",
      paragraphs: [
        "FORGEN es una herramienta de registro y motivación, no un dispositivo médico ni un sustituto de un profesional de la salud. Consulta a un médico antes de cambiar tu entrenamiento o dieta, sobre todo si tienes lesiones o condiciones de salud.",
        "El Coach IA y la estimación de calorías por foto son asistencias automáticas que pueden equivocarse. Tú decides qué aplicar.",
      ],
    },
    {
      title: "5. Contenido y conducta",
      paragraphs: [
        "No uses el servicio para acoso, spam, trampas en rankings, scraping abusivo ni para infringir derechos de terceros.",
        "Conservas los derechos sobre el contenido que subes. Nos das licencia para almacenarlo y mostrarlo en la medida necesaria para operar FORGEN (por ejemplo sincronizar entrenos o mostrar un PR en el feed).",
      ],
    },
    {
      title: "6. Planes y pagos",
      paragraphs: [
        "El plan Gratuito no tiene costo. Los planes de pago, cuando estén activos, se facturan a través de las tiendas o de nuestro procesador. Las renovaciones y reembolsos se rigen por las reglas de esa tienda o procesador.",
        "Podemos suspender funciones de pago si el cobro falla o si incumples estos términos.",
      ],
    },
    {
      title: "7. Propiedad intelectual",
      paragraphs: [
        "La marca FORGEN, el software, el catálogo de ejercicios y el diseño son nuestros o de nuestros licenciantes. Parte del contenido de ejercicios (imágenes o demos) puede estar licenciado bajo CC-BY-SA (p. ej. wger). No puedes copiar ni redistribuir la app salvo lo permitido por las tiendas.",
      ],
    },
    {
      title: "8. Disponibilidad",
      paragraphs: [
        "El servicio se ofrece “tal cual”. Puede haber interrupciones, errores o cambios de funciones. No garantizamos resultados de entrenamiento ni disponibilidad ininterrumpida.",
      ],
    },
    {
      title: "9. Limitación de responsabilidad",
      paragraphs: [
        "En la medida permitida por la ley, FORGEN no responde de daños indirectos, pérdida de datos o lesiones derivadas del uso de la app. Nuestra responsabilidad total, si la hubiera, se limita a lo que hayas pagado por el servicio en los 12 meses anteriores (o cero si usas el plan gratuito).",
      ],
    },
    {
      title: "10. Terminación",
      paragraphs: [
        "Puedes dejar de usar FORGEN y solicitar el borrado de cuenta en cualquier momento. Podemos suspender o cerrar cuentas que incumplan estos términos o pongan en riesgo a otros usuarios.",
      ],
    },
    {
      title: "11. Ley aplicable",
      paragraphs: [
        "Estos términos se interpretan según las leyes aplicables en el lugar desde el que operamos el servicio, sin perjuicio de las normas de protección al consumidor que te correspondan.",
      ],
    },
    {
      title: "12. Contacto",
      paragraphs: [
        "Soporte: " + CONTACT + ". Sitio: https://www.forgen.app",
      ],
    },
  ];
}

function termsEn(): Section[] {
  return [
    {
      title: "1. Acceptance",
      paragraphs: [
        "By creating an account or using FORGEN (app or website) you agree to these Terms. If you do not agree, do not use the service.",
      ],
    },
    {
      title: "2. The service",
      paragraphs: [
        "FORGEN is a mobile fitness app (Android and iOS): workouts, a catalog of 1,300+ exercises, nutrition, hydration, progress, social, notifications, AI Coach and, on Gymrat Pro, trainer mode. The website is for marketing, sign-up, and account access; it does not replace the app.",
        "Features depend on your plan (Free, Gymrat, Gymrat Pro). Limits (routines, Coach messages, food photos, students, etc.) may change; we publish them on the website and in the app.",
      ],
    },
    {
      title: "3. Account",
      paragraphs: [
        "You must provide accurate information and keep your password secure. You are responsible for activity on your account.",
        "You may sign up with email, Google, or Apple. Use of those providers is also subject to their terms. We may use anti-abuse verification (e.g. Cloudflare Turnstile) at sign-up.",
      ],
    },
    {
      title: "4. Not medical advice",
      paragraphs: [
        "FORGEN is a logging and motivation tool, not a medical device and not a substitute for a health professional. Consult a doctor before changing training or diet, especially if you have injuries or medical conditions.",
        "AI Coach and calorie estimates from photos are automated aids and can be wrong. You decide what to apply.",
      ],
    },
    {
      title: "5. Content and conduct",
      paragraphs: [
        "Do not use the service for harassment, spam, leaderboard cheating, abusive scraping, or infringement of others’ rights.",
        "You keep rights in content you upload. You grant us a license to store and display it as needed to operate FORGEN (for example syncing workouts or showing a PR on the feed).",
      ],
    },
    {
      title: "6. Plans and payments",
      paragraphs: [
        "The Free plan has no charge. Paid plans, when live, are billed through the stores or our processor. Renewals and refunds follow that store’s or processor’s rules.",
        "We may suspend paid features if payment fails or if you breach these terms.",
      ],
    },
    {
      title: "7. Intellectual property",
      paragraphs: [
        "The FORGEN brand, software, exercise catalog, and design are ours or our licensors’. Some exercise content (images or demos) may be licensed under CC-BY-SA (e.g. wger). You may not copy or redistribute the app except as allowed by the stores.",
      ],
    },
    {
      title: "8. Availability",
      paragraphs: [
        "The service is provided “as is”. There may be outages, bugs, or feature changes. We do not guarantee training results or uninterrupted availability.",
      ],
    },
    {
      title: "9. Limitation of liability",
      paragraphs: [
        "To the extent allowed by law, FORGEN is not liable for indirect damages, data loss, or injuries arising from use of the app. Our total liability, if any, is limited to amounts you paid for the service in the prior 12 months (or zero if you use the Free plan).",
      ],
    },
    {
      title: "10. Termination",
      paragraphs: [
        "You may stop using FORGEN and request account deletion at any time. We may suspend or close accounts that breach these terms or put other users at risk.",
      ],
    },
    {
      title: "11. Governing law",
      paragraphs: [
        "These terms are interpreted under the laws applicable where we operate the service, without prejudice to consumer-protection rules that apply to you.",
      ],
    },
    {
      title: "12. Contact",
      paragraphs: [
        "Support: " + CONTACT + ". Website: https://www.forgen.app",
      ],
    },
  ];
}

export function LegalPage({ doc }: { doc: LegalDoc }) {
  const { locale } = useLocaleContext();
  const dict = useDictionary();
  const isEs = locale === "es";
  const title =
    doc === "privacy"
      ? isEs
        ? "Política de privacidad"
        : "Privacy Policy"
      : isEs
        ? "Términos del servicio"
        : "Terms of Service";
  const updated = isEs ? UPDATED : UPDATED_EN;
  const intro =
    doc === "privacy"
      ? isEs
        ? "Esta política describe cómo FORGEN trata datos personales en la app y en forgen.app. Última actualización:"
        : "This policy describes how FORGEN handles personal data in the app and on forgen.app. Last updated:"
      : isEs
        ? "Estos términos regulan el uso de FORGEN. Última actualización:"
        : "These terms govern use of FORGEN. Last updated:";
  const sections =
    doc === "privacy"
      ? isEs
        ? privacyEs()
        : privacyEn()
      : isEs
        ? termsEs()
        : termsEn();
  const otherHref = doc === "privacy" ? "/terms" : "/privacy";
  const otherLabel =
    doc === "privacy" ? dict.footer.terms : dict.footer.privacy;

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-wider text-forge-blue">
        FORGEN
      </p>
      <h1 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h1>
      <p className="mt-4 text-forge-muted">
        {intro} {updated}.
      </p>
      <div className="mt-10 space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-semibold">{section.title}</h2>
            {section.paragraphs.map((p) => (
              <p key={p.slice(0, 48)} className="mt-3 text-sm leading-relaxed text-forge-muted">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>
      <p className="mt-12 text-sm text-forge-muted">
        <Link href={otherHref} className="text-forge-blue hover:underline">
          {otherLabel}
        </Link>
        {" · "}
        <Link href="/" className="hover:text-forge-blue">
          {isEs ? "Volver al inicio" : "Back to home"}
        </Link>
      </p>
    </article>
  );
}
