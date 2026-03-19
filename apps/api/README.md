# apps/api — Backend API

Esta aplicación contiene la API del SaaS (REST / GraphQL).

## Stack
- **Runtime**: Node.js 20+ o Python 3.11+
- **Framework**: Fastify (Node) / FastAPI (Python)
- **ORM**: Prisma (Node) / SQLAlchemy (Python)
- **Base de datos**: PostgreSQL
- **Caché**: Redis
- **Tests**: Jest / Pytest

## Inicio Rápido
```bash
cd apps/api
pnpm install      # o: pip install -r requirements.txt
pnpm dev          # http://localhost:3001
pnpm build
pnpm test
```

## Variables de Entorno
Copiar `.env.example` a `.env` y completar los valores.

```env
DATABASE_URL=postgresql://user:password@localhost:5432/saas_db
REDIS_URL=redis://localhost:6379
JWT_SECRET=change-me-in-production
PORT=3001
NODE_ENV=development
```

## Documentación de la API
Con el servidor corriendo, visitar:
- Swagger UI: `http://localhost:3001/docs`
- OpenAPI JSON: `http://localhost:3001/openapi.json`

## Estructura de Carpetas
```
apps/api/
├── src/
│   ├── routes/       # Definición de endpoints
│   ├── controllers/  # Lógica de request/response
│   ├── services/     # Lógica de negocio
│   ├── models/       # Modelos de datos
│   ├── middleware/   # Auth, logging, validación
│   └── lib/          # Configuración y helpers
├── tests/
└── prisma/           # Schema y migraciones
```

## Convenciones
- Toda entrada validada con Zod (Node) o Pydantic (Python).
- Respuestas siguen el formato estándar `{ data, error, meta }`.
- Migraciones siempre reversibles.
