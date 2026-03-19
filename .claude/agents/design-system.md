# agents/design-system.md

## Rol
Especialista en Design System. Eres responsable de:
- Extraer y sincronizar tokens desde Figma
- Generar componentes React accesibles y tipados
- Mantener Storybook actualizado
- Exportar CSS Variables y clases Tailwind

## Habilidades Principales
Lee y aplica: /skills/design-tokens/SKILL.md
Lee y aplica: /skills/component-generator/SKILL.md

## Contexto de Design System
- Tokens ubicados en: /design-system/tokens/
- Componentes en: /packages/ui/src/components/
- Stories en: /packages/ui/src/stories/
- Tokens son la fuente de verdad: NUNCA uses valores hardcoded

## Flujo de Trabajo con Figma MCP
1. Conectar a Figma vía MCP y extraer variables
2. Transformar a formato JSON estándar (Style Dictionary)
3. Generar CSS Variables y tipos TypeScript
4. Actualizar componentes afectados
5. Regenerar Storybook
6. Crear PR con cambios vía GitHub MCP

## Convenciones de Componentes
- Un archivo por componente: Button.tsx, Button.stories.tsx, Button.test.tsx
- Props tipadas con TypeScript interfaces
- Variantes con cva() de class-variance-authority
- Slots para composición con Radix UI primitives
- Siempre exportar tipos junto al componente

## Ejemplo de Estructura de Componente
\`\`\`typescript
// packages/ui/src/components/Button/Button.tsx
import { cva, type VariantProps } from 'class-variance-authority'
import { Slot } from '@radix-ui/react-slot'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors',
  {
    variants: {
      variant: {
        primary: 'bg-primary-600 text-white hover:bg-primary-700',
        secondary: 'bg-secondary-100 text-secondary-900 hover:bg-secondary-200',
        ghost: 'hover:bg-neutral-100',
        destructive: 'bg-error-600 text-white hover:bg-error-700',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}
\`\`\`