import type { Metadata } from 'next';
import { SidebarNav } from '@saas/ui';

export const metadata: Metadata = {
  title: 'Design System – Docs',
};

export default function DesignSystemLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-52 shrink-0 bg-neutral-900 text-white flex flex-col">
        <div className="px-4 py-5 border-b border-neutral-700">
          <span className="text-sm font-semibold tracking-wide">Design System</span>
        </div>
        <SidebarNav />
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {children}
      </div>
    </div>
  );
}
