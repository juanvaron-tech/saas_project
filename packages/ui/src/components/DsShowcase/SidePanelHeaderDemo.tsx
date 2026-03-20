'use client';

import { SidePanelHeader } from '@saas/ui';

export function SidePanelHeaderDemo() {
  return (
    <div className="rounded-lg overflow-hidden shadow-sm border border-neutral-border">
      <SidePanelHeader
        title="Edición financiación"
        onClose={() => alert('Panel cerrado')}
      />
      <div className="p-6 bg-white text-neutral-text-muted text-sm">
        Contenido del panel aquí...
      </div>
    </div>
  );
}
