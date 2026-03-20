'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV = [
  {
    group: 'Getting started',
    items: [
      { label: 'Overview', href: '/design-system' },
    ],
  },
  {
    group: 'Guidelines',
    items: [
      { label: 'Colors', href: '/design-system/guidelines/colors' },
      { label: 'Typography', href: '/design-system/guidelines/typography' },
      { label: 'Spacing', href: '/design-system/guidelines/spacing' },
    ],
  },
  {
    group: 'Components',
    items: [
      { label: 'Button', href: '/design-system/components/button' },
      { label: 'Side Panel Header', href: '/design-system/components/side-panel-header' },
    ],
  },
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex-1 overflow-y-auto py-4">
      {NAV.map((section) => (
        <div key={section.group} className="mb-2">
          <button
            type="button"
            className="w-full flex items-center justify-between px-4 py-2 text-xs font-semibold uppercase tracking-widest text-neutral-400"
          >
            {section.group}
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <ul>
            {section.items.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-6 py-2 text-sm transition-colors ${
                      active
                        ? 'bg-primary text-white border-l-2 border-primary'
                        : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
