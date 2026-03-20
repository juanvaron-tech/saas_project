import Link from 'next/link';
import { SidePanelHeaderDemo } from '@saas/ui';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-bg p-8">
      <h1 className="text-2xl font-semibold text-neutral-text mb-2">SaaS App</h1>
      <p className="text-neutral-text-muted mb-8 text-sm">
        Monorepo powered by Next.js 14 · Fastify · Turborepo
      </p>

      <Link
        href="/design-system"
        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-sm font-medium rounded-md hover:bg-primary-hover transition-colors mb-10"
      >
        View Design System →
      </Link>

      <section className="max-w-2xl">
        <h2 className="text-sm font-medium text-neutral-text-muted uppercase tracking-wider mb-3">
          Side Panel Header
        </h2>
        <SidePanelHeaderDemo />
      </section>
    </main>
  );
}
