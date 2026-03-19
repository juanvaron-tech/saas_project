import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'destructive'],
      description: 'Variante visual del botón',
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamaño del botón',
      table: { defaultValue: { summary: 'md' } },
    },
    loading: {
      control: 'boolean',
      description: 'Muestra spinner y deshabilita el botón',
    },
    asChild: {
      control: 'boolean',
      description: 'Renderiza como elemento hijo via Radix Slot',
    },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    children: 'Botón',
    variant: 'primary',
    size: 'md',
    loading: false,
    asChild: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

/* ---------- Variantes ---------- */

export const Primary: Story = { args: { variant: 'primary', children: 'Primary' } };
export const Secondary: Story = { args: { variant: 'secondary', children: 'Secondary' } };
export const Ghost: Story = { args: { variant: 'ghost', children: 'Ghost' } };
export const Destructive: Story = { args: { variant: 'destructive', children: 'Eliminar' } };

/* ---------- Tamaños ---------- */

export const Small: Story = { args: { size: 'sm', children: 'Small' } };
export const Medium: Story = { args: { size: 'md', children: 'Medium' } };
export const Large: Story = { args: { size: 'lg', children: 'Large' } };

/* ---------- Estados ---------- */

export const Loading: Story = { args: { loading: true, children: 'Cargando...' } };
export const Disabled: Story = { args: { disabled: true, children: 'Deshabilitado' } };

/* ---------- asChild (Radix Slot) ---------- */

export const AsLink: Story = {
  args: { asChild: true, children: <a href="#">Ir al inicio</a> },
  name: 'asChild — renderizado como <a>',
};

/* ---------- Todas las variantes juntas ---------- */

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};
