import Link from 'next/link';

const COMPONENTS = [
  { name: 'Button', href: '/design-system/components/button', desc: 'Triggers actions and events.' },
  { name: 'Side Panel Header', href: '/design-system/components/side-panel-header', desc: 'Header for side panels and drawers.' },
];

export default function DesignSystemIndexPage() {
  return (
    <div className="p-10 max-w-3xl">
      <h1 className="text-3xl font-bold text-neutral-text mb-2">Design System</h1>
      <p className="text-neutral-text-muted mb-10">
        A collection of reusable components built with Tailwind CSS and design tokens from{' '}
        <code className="text-primary text-sm">design-system/tokens/</code>.
      </p>

      <h2 className="text-lg font-semibold text-neutral-text mb-4">Components</h2>
      <ul className="space-y-3">
        {COMPONENTS.map((c) => (
          <li key={c.href}>
            <Link
              href={c.href}
              className="flex items-center justify-between p-4 border border-neutral-border rounded-md hover:border-primary hover:bg-primary-subtle transition-colors group"
            >
              <div>
                <p className="font-medium text-neutral-text group-hover:text-primary transition-colors">{c.name}</p>
                <p className="text-sm text-neutral-text-muted">{c.desc}</p>
              </div>
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 text-neutral-text-muted group-hover:text-primary transition-colors">
                <path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
