'use client';

import { useState } from 'react';

export type Tab = { label: string; id: string };

interface TabsNavProps {
  tabs: Tab[];
  children: (activeTab: string) => React.ReactNode;
}

export function TabsNav({ tabs, children }: TabsNavProps) {
  const [active, setActive] = useState(tabs[0]?.id ?? '');

  return (
    <div>
      {/* Tab bar */}
      <div className="border-b border-neutral-200 flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className={`px-5 py-3 text-sm font-medium transition-colors border-b-2 -mb-px ${
              active === tab.id
                ? 'border-primary text-primary'
                : 'border-transparent text-neutral-text-muted hover:text-neutral-text'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div>{children(active)}</div>
    </div>
  );
}
