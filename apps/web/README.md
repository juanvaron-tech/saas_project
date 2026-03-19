# apps/web — Next.js Frontend

Esta aplicación contiene la interfaz de usuario principal del SaaS.

## Stack
- **Framework**: Next.js 14+ (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS + CSS variables del Design System
- **Estado**: Zustand + TanStack Query
- **Tests**: Vitest + Playwright

## Inicio Rápido
```bash
cd apps/web
pnpm install
pnpm dev        # http://localhost:3000
pnpm build
pnpm test
```

## Variables de Entorno
Copiar `.env.example` a `.env.local` y completar los valores.

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## Estructura de Carpetas
```
apps/web/
├── app/            # Rutas y layouts (App Router)
├── components/     # Componentes locales
├── hooks/          # Custom hooks
├── lib/            # API clients, helpers
├── store/          # Zustand stores
└── public/         # Assets estáticos
```

## Convenciones
- Usar componentes de `packages/ui` como primera opción.
- Páginas en `app/`, componentes reutilizables en `components/`.
- Llamadas HTTP siempre a través de `lib/api.ts`.
