# SKILL: Component Generator

## Descripción
Genera componentes UI estandarizados para el Design System o la aplicación frontend, asegurando consistencia en estructura, tipado, accesibilidad y documentación.

## Activación
Invocar cuando se necesite crear un nuevo componente en:
- `design-system/components/` — Componentes del Design System
- `packages/ui/src/components/` — Componentes exportados de la librería
- `apps/web/components/` — Componentes locales de la app

## Parámetros de Entrada
```
Nombre del componente: <ComponentName>
Tipo: [primitivo | compuesto | layout | página]
Destino: [design-system | packages/ui | apps/web]
Variantes: [lista de variantes, ej: primary, secondary, ghost]
```

## Archivos Generados por Componente

```
ComponentName/
├── ComponentName.tsx          # Implementación principal
├── ComponentName.stories.tsx  # Historia de Storybook
├── ComponentName.test.tsx     # Tests con Vitest + Testing Library
├── ComponentName.types.ts     # Interfaces y tipos TypeScript
└── index.ts                   # Barrel export
```

## Template Base — `ComponentName.tsx`
```tsx
import { type ComponentNameProps } from './ComponentName.types';
import styles from './ComponentName.module.css'; // o cn() con Tailwind

export function ComponentName({ variant = 'primary', children, ...props }: ComponentNameProps) {
  return (
    <div
      role="..." // ARIA role apropiado
      data-variant={variant}
      {...props}
    >
      {children}
    </div>
  );
}

ComponentName.displayName = 'ComponentName';
```

## Checklist de Calidad
- [ ] Props tipadas con TypeScript (interface, no type alias para props de componentes)
- [ ] Soporte de `ref` con `forwardRef` si aplica
- [ ] Atributos ARIA correctos para accesibilidad
- [ ] Historia de Storybook con todas las variantes
- [ ] Tests de renderizado, interacción y accesibilidad
- [ ] Exportado desde el `index.ts` del módulo correspondiente
- [ ] Documentación de props en Storybook (JSDoc o argTypes)

## Comandos Útiles
```bash
# Verificar accesibilidad con axe
npx storybook --test
# Ejecutar tests del componente
pnpm test ComponentName
```
