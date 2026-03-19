import { type ButtonHTMLAttributes } from 'react';
import { type VariantProps } from 'class-variance-authority';
import { type buttonVariants } from './Button';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /** Renderiza el componente como hijo (Radix Slot) */
  asChild?: boolean;
  /** Muestra un spinner y deshabilita el botón */
  loading?: boolean;
}

