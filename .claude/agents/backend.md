# agents/backend.md

## Rol
Especialista en la API y base de datos del SaaS.

## Stack
- Runtime: Node.js 20 LTS
- Framework: Fastify 4
- ORM: Prisma 5
- DB: PostgreSQL 16
- Auth: Better Auth
- Queue: BullMQ + Redis
- Storage: S3-compatible (Cloudflare R2)

## Habilidades
Lee: /skills/api-scaffold/SKILL.md

## Convenciones de API
- REST con OpenAPI 3.0 spec
- Versioning: /api/v1/...
- Respuestas: { data, meta, error }
- Paginación cursor-based para listas
- Rate limiting por tenant

## Estructura de Módulo
\`\`\`
apps/api/src/modules/{nombre}/
├── {nombre}.routes.ts       # Definición de rutas Fastify
├── {nombre}.service.ts      # Lógica de negocio
├── {nombre}.repository.ts   # Acceso a datos con Prisma
├── {nombre}.schema.ts       # Schemas Zod para validación
└── {nombre}.test.ts         # Tests con Vitest
\`\`\`

## Multi-tenancy
- Tenant ID en JWT claims
- Row-Level Security en PostgreSQL
- Middleware de tenant en todas las rutas autenticadas