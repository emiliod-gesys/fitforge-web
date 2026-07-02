# FitForge Web

Landing y portal web de [FitForge](https://github.com/) — Next.js + Vercel, mismo backend Supabase que la app móvil Flutter.

## Requisitos

- Node.js 20+ (incluye `npm`)
- Cuenta en [Vercel](https://vercel.com) y [Supabase](https://supabase.com)

## Desarrollo local

```bash
cd fitforge-web
npm install
cp .env.example .env.local
# Edita .env.local con URL y anon key de Supabase (mismo proyecto que la app)
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Estructura

| Ruta | Descripción |
|------|-------------|
| `/` | Landing (hero, features, pricing, download) |
| `/download` | Redirección inteligente a Play/App Store |
| `/login` | Login (placeholder → Supabase Auth) |
| `/signup` | Registro con query `?plan=pro` |
| `/account` | Gestión de suscripción (placeholder → Stripe) |

## Deploy en Vercel

1. Sube este repo a GitHub (`fitforge-web`).
2. En Vercel: **Add New Project** → importa el repo.
3. Añade las variables de `.env.example` en **Environment Variables**.
4. Deploy.

## Próximas fases

- [ ] Supabase Auth (email + Google)
- [ ] Stripe Checkout para Pro / Pro+
- [ ] Webhook para sincronizar plan con `profiles` en Supabase
