import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // ── Colors ──────────────────────────────────────────────────────────
      colors: {
        // Primitives
        blue: {
          50:  'var(--color-blue-50)',
          100: 'var(--color-blue-100)',
          200: 'var(--color-blue-200)',
          300: 'var(--color-blue-300)',
          400: 'var(--color-blue-400)',
          500: 'var(--color-blue-500)',
          600: 'var(--color-blue-600)',
          700: 'var(--color-blue-700)',
          800: 'var(--color-blue-800)',
          900: 'var(--color-blue-900)',
        },
        gray: {
          50:  'var(--color-gray-50)',
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
        },
        green: {
          500: 'var(--color-green-500)',
          600: 'var(--color-green-600)',
        },
        red: {
          500: 'var(--color-red-500)',
          600: 'var(--color-red-600)',
        },
        yellow: {
          500: 'var(--color-yellow-500)',
          600: 'var(--color-yellow-600)',
        },
        // Semantic
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover:   'var(--color-primary-hover)',
          active:  'var(--color-primary-active)',
          subtle:  'var(--color-primary-subtle)',
        },
        neutral: {
          bg:           'var(--color-neutral-bg)',
          surface:      'var(--color-neutral-surface)',
          border:       'var(--color-neutral-border)',
          text:         'var(--color-neutral-text)',
          'text-muted': 'var(--color-neutral-text-muted)',
          'text-inverse':'var(--color-neutral-text-inverse)',
        },
        success: 'var(--color-success)',
        error:   'var(--color-error)',
        warning: 'var(--color-warning)',
      },

      // ── Typography ───────────────────────────────────────────────────────
      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      fontSize: {
        xs:   'var(--font-size-xs)',
        sm:   'var(--font-size-sm)',
        base: 'var(--font-size-base)',
        lg:   'var(--font-size-lg)',
        xl:   'var(--font-size-xl)',
        '2xl':'var(--font-size-2xl)',
        '3xl':'var(--font-size-3xl)',
        '4xl':'var(--font-size-4xl)',
        '5xl':'var(--font-size-5xl)',
      },
      fontWeight: {
        regular:  'var(--font-weight-regular)',
        medium:   'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold:     'var(--font-weight-bold)',
      },
      lineHeight: {
        tight:   'var(--line-height-tight)',
        snug:    'var(--line-height-snug)',
        normal:  'var(--line-height-normal)',
        relaxed: 'var(--line-height-relaxed)',
        loose:   'var(--line-height-loose)',
      },
      letterSpacing: {
        tight:   'var(--letter-spacing-tight)',
        normal:  'var(--letter-spacing-normal)',
        wide:    'var(--letter-spacing-wide)',
        wider:   'var(--letter-spacing-wider)',
        widest:  'var(--letter-spacing-widest)',
      },
    },
  },
  plugins: [],
};

export default config;
