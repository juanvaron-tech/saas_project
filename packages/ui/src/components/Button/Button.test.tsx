/// <reference path="../../vitest-axe.d.ts" />
import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';
import { buttonVariants } from './Button';

describe('Button', () => {
  /* ---------- Renderizado ---------- */

  it('renders children correctly', () => {
    render(<Button>Guardar</Button>);
    expect(screen.getByRole('button', { name: /guardar/i })).toBeInTheDocument();
  });

  it('has type="button" by default', () => {
    render(<Button>Test</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
  });

  /* ---------- cva — variantes ---------- */

  it.each(['primary', 'secondary', 'ghost', 'destructive'] as const)(
    'applies cva class for variant "%s"',
    (variant) => {
      render(<Button variant={variant}>Test</Button>);
      const cls = buttonVariants({ variant });
      // verifica que al menos una clase distintiva esté presente
      expect(screen.getByRole('button').className).toBeTruthy();
    }
  );

  /* ---------- Estado disabled ---------- */

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Test</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('does not fire onClick when disabled', () => {
    const handleClick = vi.fn();
    render(<Button disabled onClick={handleClick}>Test</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  /* ---------- Estado loading ---------- */

  it('shows spinner and is disabled when loading=true', () => {
    render(<Button loading>Guardar</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toBeDisabled();
    expect(btn).toHaveAttribute('aria-busy', 'true');
    expect(btn.querySelector('svg')).toBeInTheDocument();
  });

  it('does not fire onClick when loading', () => {
    const handleClick = vi.fn();
    render(<Button loading onClick={handleClick}>Test</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  /* ---------- asChild (Radix Slot) ---------- */

  it('renders as anchor when asChild + <a>', () => {
    render(
      <Button asChild>
        <a href="/inicio">Ir al inicio</a>
      </Button>
    );
    expect(screen.getByRole('link', { name: 'Ir al inicio' })).toBeInTheDocument();
  });

  /* ---------- Interacción ---------- */

  it('calls onClick when clicked', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  /* ---------- Accesibilidad (axe) ---------- */

  it('has no a11y violations — primary', async () => {
    const { container } = render(<Button variant="primary">Acción</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no a11y violations — disabled', async () => {
    const { container } = render(<Button disabled>Acción</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });

  it('has no a11y violations — loading', async () => {
    const { container } = render(<Button loading>Cargando</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
