# SKILL: Git Flow

## Descripción
Establece y automatiza el flujo estándar de ramas, commits y releases para este monorepo SaaS.

## Modelo de Ramas

```
main          ← producción (protegida, requiere PR + aprobación)
  └── develop ← integración continua (protegida, requiere PR)
        ├── feature/TICKET-descripcion
        ├── fix/TICKET-descripcion
        ├── chore/descripcion
        └── release/v1.x.x
```

## Convención de Commits (Conventional Commits)

```
<type>(<scope>): <descripción corta>

[cuerpo opcional]

[footer: BREAKING CHANGE o refs #ticket]
```

### Tipos Permitidos
| Tipo | Uso |
|------|-----|
| `feat` | Nueva funcionalidad |
| `fix` | Corrección de bug |
| `chore` | Tareas de mantenimiento, deps |
| `docs` | Solo documentación |
| `style` | Formato, sin cambio de lógica |
| `refactor` | Refactoring sin nueva feature ni fix |
| `test` | Agregar o corregir tests |
| `perf` | Mejoras de rendimiento |
| `ci` | Cambios en CI/CD |
| `design` | Cambios en Design System o tokens |

### Ejemplos
```
feat(auth): add OAuth2 login with Google
fix(api): handle null response in user service
design(tokens): update primary color palette from Figma
chore(deps): upgrade Next.js to 14.2
```

## Flujo de Trabajo para una Tarea

```bash
# 1. Crear rama desde develop
git checkout develop && git pull origin develop
git checkout -b feature/PROJ-123-nombre-descriptivo

# 2. Desarrollo y commits frecuentes
git add .
git commit -m "feat(scope): descripción del cambio"

# 3. Mantener rama actualizada
git fetch origin develop
git rebase origin/develop

# 4. Push y PR
git push origin feature/PROJ-123-nombre-descriptivo
# Abrir PR en GitHub hacia develop

# 5. Después del merge, limpiar rama local
git checkout develop && git pull
git branch -d feature/PROJ-123-nombre-descriptivo
```

## Proceso de Release

```bash
# 1. Crear rama de release desde develop
git checkout -b release/v1.2.0

# 2. Actualizar versiones (pnpm workspaces)
pnpm version --workspace-update

# 3. Actualizar CHANGELOG.md

# 4. PR a main y develop simultáneamente

# 5. Taggear en main
git tag -a v1.2.0 -m "Release v1.2.0"
git push origin v1.2.0
```

## Reglas de Protección de Ramas
- `main`: requiere 2 aprobaciones + CI verde + no force push
- `develop`: requiere 1 aprobación + CI verde
- Commits directos a `main` o `develop` están prohibidos
