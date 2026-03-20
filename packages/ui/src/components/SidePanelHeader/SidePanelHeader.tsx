'use client';

import type { SidePanelHeaderProps } from './SidePanelHeader.types';

export function SidePanelHeader({ title, onClose, className = '' }: SidePanelHeaderProps) {
  return (
    <div
      className={`flex items-center justify-between px-6 py-4 bg-white border-b border-neutral-border ${className}`}
      style={{ fontFamily: 'var(--font-poppins, var(--font-sans))' }}
    >
      <p
        className="text-lg font-semibold leading-snug tracking-tight whitespace-nowrap"
        style={{ color: '#010103', letterSpacing: '-0.27px', lineHeight: '26px' }}
      >
        {title}
      </p>

      <button
        type="button"
        aria-label="Cerrar panel"
        onClick={onClose}
        className="flex items-center justify-center w-6 h-6 text-neutral-text hover:opacity-70 transition-opacity cursor-pointer"
      >
        {/* Material Design close icon */}
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
        >
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
    </div>
  );
}

SidePanelHeader.displayName = 'SidePanelHeader';
