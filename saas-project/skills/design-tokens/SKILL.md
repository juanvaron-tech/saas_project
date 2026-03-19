# SKILL: Design Tokens

## Descripción
Esta skill gestiona la sincronización, transformación y publicación de design tokens entre Figma, los archivos JSON del repositorio y las plataformas de destino.

## Activación
Invocar cuando se necesite:
- Actualizar tokens desde Figma
- Transformar tokens a formatos de plataforma (CSS variables, JS, iOS, Android)
- Validar consistencia de tokens entre módulos

## Pasos de Ejecución

### 1. Extracción desde Figma
```bash
# Requiere FIGMA_ACCESS_TOKEN y FIGMA_FILE_ID en el entorno
npx figma-export tokens --output design-system/tokens/
```

### 2. Validación de Schema
Verificar que los archivos JSON cumplan el schema requerido:
```json
{
  "category": {
    "variant": {
      "value": "#000000",
      "type": "color",
      "description": "Descripción del token"
    }
  }
}
```

### 3. Transformación con Style Dictionary
```bash
cd design-system
npx style-dictionary build --config style-dictionary.config.json
```

### 4. Outputs Generados
| Formato | Destino |
|---------|---------|
| CSS Custom Properties | `packages/ui/src/tokens/variables.css` |
| JS/TS Constants | `packages/ui/src/tokens/tokens.ts` |
| JSON plano | `packages/ui/src/tokens/tokens.json` |

### 5. Publicación
```bash
cd packages/ui
pnpm build
pnpm publish --tag latest
```

## Archivos de Tokens
- `design-system/tokens/colors.json` — Paleta de colores completa
- `design-system/tokens/typography.json` — Fuentes, tamaños, pesos, line-heights
- `design-system/tokens/spacing.json` — Sistema de espaciado (4px base)
- `design-system/tokens/shadows.json` — Sombras y elevaciones

## Convenciones
- Escala de espaciado basada en 4px: `spacing.1 = 4px`, `spacing.2 = 8px`, etc.
- Colores en formato HEX o HSL (nunca RGB directo en tokens)
- Siempre incluir token semántico además del primitivo: `color.primary` → `color.blue.600`
