# SKILL: API Scaffold

## Descripción
Genera la estructura completa de un endpoint REST o resolver GraphQL en el backend, incluyendo ruta, controlador, servicio, validación y tests.

## Activación
Invocar cuando se necesite crear un nuevo endpoint o recurso en `apps/api/`.

## Parámetros de Entrada
```
Recurso: <nombre del recurso, ej: "users", "products">
Operaciones: [list | get | create | update | delete]
Tipo: [REST | GraphQL]
Autenticación: [pública | requiere-auth | admin]
```

## Archivos Generados (REST — Node/TypeScript)

```
src/
├── routes/
│   └── {resource}.routes.ts      # Definición de rutas Express/Fastify
├── controllers/
│   └── {resource}.controller.ts  # Manejo de request/response
├── services/
│   └── {resource}.service.ts     # Lógica de negocio
├── models/
│   └── {resource}.model.ts       # Schema Prisma / tipo de base de datos
├── schemas/
│   └── {resource}.schema.ts      # Validación Zod
└── tests/
    └── {resource}.test.ts        # Tests de integración con supertest
```

## Template de Ruta REST
```typescript
// routes/users.routes.ts
import { Router } from 'express';
import { authenticate } from '../middleware/auth';
import { UsersController } from '../controllers/users.controller';

const router = Router();
const controller = new UsersController();

router.get('/', authenticate, controller.list);
router.get('/:id', authenticate, controller.getById);
router.post('/', authenticate, controller.create);
router.put('/:id', authenticate, controller.update);
router.delete('/:id', authenticate, controller.delete);

export default router;
```

## Formato Estándar de Respuesta
```typescript
// Éxito
{ "data": <payload>, "error": null, "meta": { "page": 1, "total": 100 } }

// Error
{ "data": null, "error": { "code": "NOT_FOUND", "message": "Resource not found" }, "meta": {} }
```

## Códigos HTTP Estándar
| Operación | Éxito | Error común |
|-----------|-------|-------------|
| GET list  | 200   | 400 (filtros inválidos) |
| GET by ID | 200   | 404 |
| POST      | 201   | 400 (validación), 409 (conflicto) |
| PUT/PATCH | 200   | 400, 404 |
| DELETE    | 204   | 404 |

## Checklist de Seguridad
- [ ] Validación de entrada con Zod/Pydantic en todos los endpoints
- [ ] Autenticación verificada en rutas protegidas
- [ ] Autorización: verificar que el usuario tiene permisos sobre el recurso
- [ ] Rate limiting aplicado
- [ ] Logs de auditoría para operaciones de escritura
- [ ] Parámetros de paginación con límites máximos (max: 100 items)
