import { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { type ButtonProps } from './Button.types';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2',
    'rounded-md font-medium transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'select-none whitespace-nowrap',
  ].join(' '),
  {
    variants: {
      variant: {
        primary:     'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800',
        secondary:   'border border-primary-600 text-primary-600 bg-white hover:bg-primary-50',
        ghost:       'text-neutral-900 hover:bg-neutral-100',
        destructive: 'bg-error-600 text-white hover:bg-error-700',
      },
      size: {
        sm: 'h-8  px-3 text-sm',
        md: 'h-10 px-4 text-base',
        lg: 'h-12 px-6 text-lg',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      loading = false,
      asChild = false,
      disabled,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const isDisabled = disabled || loading;

    return (
      <Comp
        ref={ref}
        type={asChild ? undefined : 'button'}
        aria-busy={loading || undefined}
        aria-disabled={isDisabled || undefined}
        disabled={isDisabled}
        className={buttonVariants({ variant, size, className })}
        {...props}
      >
        {loading && (
          <svg
            aria-hidden="true"
            className="animate-spin h-4 w-4 shrink-0"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
          </svg>
        )}
        {children}
      </Comp>
    );
  }
);

Button.displayName = 'Button';
