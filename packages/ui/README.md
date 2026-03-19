# packages/ui — Librería de Componentes Compartidos

Librería de componentes React compartida entre todas las aplicaciones del monorepo. Incluye los tokens del Design System transformados y los componentes base.

## Contenido
- **Tokens**: CSS variables y constantes TypeScript generadas desde `design-system/tokens/`
- **Componentes**: Componentes React accesibles y tipados
- **Utilidades**: Funciones helper para estilos y clases

## Instalación (en otras apps del monorepo)
```json
// package.json de apps/web
{
  "dependencies": {
    "@saas/ui": "workspace:*"
  }
}
```

## Uso
```tsx
import { Button, Input, Card } from '@saas/ui';
import '@saas/ui/styles.css'; // Importar CSS variables

export default function Page() {
  return (
    <Card>
      <Input placeholder="Email" type="email" />
      <Button variant="primary">Continuar</Button>
    </Card>
  );
}
```

## Desarrollo
```bash
cd packages/ui
pnpm install
pnpm build           # Compilar librería
pnpm storybook       # Documentación interactiva (http://localhost:6006)
pnpm test            # Tests de componentes
```

## Estructura
```
packages/ui/
├── src/
│   ├── components/   # Componentes exportados
│   ├── tokens/       # Tokens generados (no editar manualmente)
│   └── index.ts      # Barrel export principal
├── dist/             # Build output (gitignored)
└── package.json
```

## Publicación
Los tokens se sincronizan automáticamente desde `design-system/tokens/` al ejecutar el workflow `design-sync.yml`. No editar archivos en `src/tokens/` manualmente.
