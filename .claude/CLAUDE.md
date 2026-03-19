# CLAUDE.md — Orquestador Principal

## Descripción del Proyecto
Este es un proyecto SaaS multi-módulo gestionado con Claude Code como orquestador principal de agentes especializados.

## Arquitectura de Agentes

### Agentes Disponibles
| Agente | Archivo | Responsabilidad |
|--------|---------|-----------------|
| Design System | `agents/design-system.md` | Tokens, componentes visuales y documentación |
| Frontend | `agents/frontend.md` | Aplicación Next.js, páginas y lógica cliente |
| Backend | `agents/backend.md` | API, autenticación, base de datos |
| DevOps | `agents/devops.md` | CI/CD, infraestructura, despliegue |

## Flujo de Trabajo

1. **Análisis**: El orquestador recibe la tarea y determina qué agentes deben intervenir.
2. **Delegación**: Se delega a los sub-agentes correspondientes mediante `Task` tools.
3. **Coordinación**: El orquestador integra los resultados y resuelve conflictos.
4. **Validación**: Se verifica coherencia entre módulos antes de finalizar.

## Skills Disponibles
- `skills/design-tokens/` — Gestión y generación de tokens de diseño
- `skills/component-generator/` — Generación de componentes UI
- `skills/api-scaffold/` — Scaffolding de endpoints REST/GraphQL
- `skills/git-flow/` — Flujo estándar de ramas y commits

## Convenciones Globales
- **Lenguaje de código**: TypeScript (frontend/shared), Python o Node.js (backend)
- **Estilo de commits**: Conventional Commits (`feat:`, `fix:`, `chore:`, etc.)
- **Ramas**: `main` → `develop` → `feature/*` / `fix/*`
- **Variables de entorno**: siempre en `.env.local` (nunca commiteadas)

## Reglas de Orquestación
- Nunca modificar archivos fuera del scope del agente delegado sin confirmación.
- Sincronizar design tokens antes de iniciar trabajo de frontend.
- Todo cambio de API debe reflejarse en el contrato compartido (`packages/ui`).
- Los workflows de CI deben pasar antes de mergear a `main`.
