import { Button } from '@saas/ui';
import { TabsNav } from '@saas/ui';

const TABS = [
  { id: 'usage', label: 'Usage' },
  { id: 'style', label: 'Style' },
  { id: 'code', label: 'Code' },
  { id: 'accessibility', label: 'Accessibility' },
];

/* ── Anatomy diagram item ─────────────────────────────────────── */
function AnatomyItem({
  number,
  label,
  children,
}: {
  number: number;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative bg-white border border-neutral-200 rounded-sm p-8 flex items-center justify-center min-h-[180px]">
      {/* Badge */}
      <span className="absolute top-3 left-3 w-6 h-6 rounded-full bg-pink-600 text-white text-xs font-bold flex items-center justify-center">
        {number}
      </span>
      {/* Item label annotation */}
      <span className="absolute top-10 left-5 text-xs text-pink-600 font-medium">A</span>
      <div className="flex flex-col items-center gap-3">
        {children}
        <span className="text-xs text-pink-600 font-medium">C</span>
      </div>
      {/* B label on the right */}
      <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs text-pink-600 font-medium">B</span>
    </div>
  );
}

/* ── Code block ───────────────────────────────────────────────── */
function CodeBlock({ code }: { code: string }) {
  return (
    <pre className="bg-neutral-900 text-green-400 text-sm rounded-md p-5 overflow-x-auto leading-relaxed">
      <code>{code}</code>
    </pre>
  );
}

/* ── Usage tab ────────────────────────────────────────────────── */
function UsageTab() {
  return (
    <div className="p-8 max-w-4xl space-y-10">
      {/* Intro */}
      <p className="text-neutral-text leading-relaxed">
        Buttons are used to initialize an action. Button labels express what action will occur
        when the user interacts with it.
      </p>

      {/* Live demo */}
      <section>
        <h2 className="text-lg font-semibold text-neutral-text mb-4">↳ Live demo</h2>
        <div className="flex flex-wrap gap-3 p-6 bg-neutral-bg border border-neutral-border rounded-md">
          <Button variant="primary">Primary button</Button>
          <Button variant="secondary">Secondary button</Button>
          <Button variant="ghost">Ghost button</Button>
          <Button variant="destructive">Danger button</Button>
        </div>
      </section>

      {/* Anatomy */}
      <section>
        <h2 className="text-2xl font-semibold text-neutral-text mb-2">Anatomy</h2>
        <p className="text-neutral-text-muted text-sm mb-1">
          A button's label communicates the action that is performed when the user interacts with
          it. In an icon-only button, the icon must accurately represent what the button does.
        </p>
        <p className="text-neutral-text-muted text-sm mb-6">
          In a button, the label is always left-aligned. Icons in a button with a label are
          right-aligned; in an icon-only button the icon is centered.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AnatomyItem number={1} label="Primary button">
            <Button variant="primary">
              Primary button
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 ml-1">
                <rect x="2" y="2" width="12" height="12" rx="1"/>
                <path d="M8 5v6M5 8h6" strokeLinecap="round"/>
              </svg>
            </Button>
          </AnatomyItem>

          <AnatomyItem number={2} label="Secondary button">
            <Button variant="secondary">
              Tertiary button
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 ml-1">
                <rect x="2" y="2" width="12" height="12" rx="1"/>
                <path d="M8 5v6M5 8h6" strokeLinecap="round"/>
              </svg>
            </Button>
          </AnatomyItem>

          <AnatomyItem number={3} label="Ghost button">
            <Button variant="ghost">
              Ghost button
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 ml-1">
                <rect x="2" y="2" width="12" height="12" rx="1"/>
                <path d="M8 5v6M5 8h6" strokeLinecap="round"/>
              </svg>
            </Button>
          </AnatomyItem>

          <AnatomyItem number={4} label="Icon only">
            <button
              type="button"
              aria-label="Add"
              className="w-10 h-10 bg-neutral-900 text-white flex items-center justify-center rounded hover:bg-neutral-700 transition-colors"
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M8 3v10M3 8h10" strokeLinecap="round"/>
              </svg>
            </button>
          </AnatomyItem>
        </div>

        {/* Legend */}
        <ul className="mt-6 space-y-1 text-sm text-neutral-text-muted">
          {['Label', 'Container', 'Icon (optional)'].map((item, i) => (
            <li key={item} className="flex items-center gap-2">
              <span className="font-semibold text-neutral-text">{String.fromCharCode(65 + i)}.</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Variants */}
      <section>
        <h2 className="text-2xl font-semibold text-neutral-text mb-4">Variants</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-neutral-bg border-b border-neutral-border">
                <th className="text-left px-4 py-3 font-semibold text-neutral-text">Variant</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-text">Usage</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-text">Preview</th>
              </tr>
            </thead>
            <tbody>
              {[
                { variant: 'primary',     label: 'Primary',     desc: 'High-emphasis actions. Use once per section.' },
                { variant: 'secondary',   label: 'Secondary',   desc: 'Medium-emphasis; alternative to primary.' },
                { variant: 'ghost',       label: 'Ghost',       desc: 'Low-emphasis; used in toolbars or inline.' },
                { variant: 'destructive', label: 'Destructive', desc: 'Irreversible or dangerous actions.' },
              ].map(({ variant, label, desc }) => (
                <tr key={variant} className="border-b border-neutral-border hover:bg-neutral-bg transition-colors">
                  <td className="px-4 py-4 font-mono text-xs text-primary">{variant}</td>
                  <td className="px-4 py-4 text-neutral-text-muted">{desc}</td>
                  <td className="px-4 py-4">
                    <Button variant={variant as 'primary' | 'secondary' | 'ghost' | 'destructive'} size="sm">
                      {label}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-2xl font-semibold text-neutral-text mb-4">Sizes</h2>
        <div className="flex items-end gap-4 flex-wrap p-6 bg-neutral-bg border border-neutral-border rounded-md">
          <div className="flex flex-col items-center gap-2">
            <Button variant="primary" size="sm">Small</Button>
            <span className="text-xs text-neutral-text-muted">sm — h-8</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="primary" size="md">Medium</Button>
            <span className="text-xs text-neutral-text-muted">md — h-10</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button variant="primary" size="lg">Large</Button>
            <span className="text-xs text-neutral-text-muted">lg — h-12</span>
          </div>
        </div>
      </section>

      {/* States */}
      <section>
        <h2 className="text-2xl font-semibold text-neutral-text mb-4">States</h2>
        <div className="flex flex-wrap gap-3 p-6 bg-neutral-bg border border-neutral-border rounded-md">
          <Button variant="primary">Default</Button>
          <Button variant="primary" loading>Loading</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </section>
    </div>
  );
}

/* ── Style tab ────────────────────────────────────────────────── */
function StyleTab() {
  return (
    <div className="p-8 max-w-4xl space-y-8">
      <h2 className="text-2xl font-semibold text-neutral-text">Tokens</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-neutral-bg border-b border-neutral-border">
              {['Token', 'Value', 'Usage'].map((h) => (
                <th key={h} className="text-left px-4 py-3 font-semibold text-neutral-text">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              { token: '--color-primary',       value: '#2563eb', usage: 'Primary button background' },
              { token: '--color-primary-hover',  value: '#1d4ed8', usage: 'Hover state' },
              { token: '--color-primary-active', value: '#1e40af', usage: 'Active / pressed state' },
              { token: '--color-error',          value: '#dc2626', usage: 'Destructive button background' },
              { token: '--font-weight-medium',   value: '500',     usage: 'Button label weight' },
              { token: '--font-size-base',       value: '1rem',    usage: 'md size label' },
            ].map(({ token, value, usage }) => (
              <tr key={token} className="border-b border-neutral-border">
                <td className="px-4 py-3 font-mono text-xs text-primary">{token}</td>
                <td className="px-4 py-3 font-mono text-xs text-neutral-text">{value}</td>
                <td className="px-4 py-3 text-neutral-text-muted">{usage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ── Code tab ─────────────────────────────────────────────────── */
function CodeTab() {
  return (
    <div className="p-8 max-w-3xl space-y-8">
      <section>
        <h2 className="text-2xl font-semibold text-neutral-text mb-4">Import</h2>
        <CodeBlock code={`import { Button } from '@saas/ui';`} />
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-neutral-text mb-4">Basic usage</h2>
        <CodeBlock code={`<Button variant="primary">Save changes</Button>\n<Button variant="secondary">Cancel</Button>\n<Button variant="ghost">Learn more</Button>\n<Button variant="destructive">Delete</Button>`} />
      </section>
      <section>
        <h2 className="text-2xl font-semibold text-neutral-text mb-4">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-neutral-bg border-b border-neutral-border">
                {['Prop', 'Type', 'Default', 'Description'].map((h) => (
                  <th key={h} className="text-left px-4 py-3 font-semibold text-neutral-text">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { prop: 'variant',  type: `'primary' | 'secondary' | 'ghost' | 'destructive'`, def: 'primary',   desc: 'Visual style' },
                { prop: 'size',     type: `'sm' | 'md' | 'lg'`,                                def: 'md',        desc: 'Height and padding' },
                { prop: 'loading',  type: 'boolean',                                            def: 'false',     desc: 'Shows spinner, disables button' },
                { prop: 'disabled', type: 'boolean',                                            def: 'false',     desc: 'Disables interaction' },
                { prop: 'asChild',  type: 'boolean',                                            def: 'false',     desc: 'Renders as child via Radix Slot' },
              ].map(({ prop, type, def, desc }) => (
                <tr key={prop} className="border-b border-neutral-border">
                  <td className="px-4 py-3 font-mono text-xs text-primary">{prop}</td>
                  <td className="px-4 py-3 font-mono text-xs text-neutral-text-muted">{type}</td>
                  <td className="px-4 py-3 font-mono text-xs text-neutral-text">{def}</td>
                  <td className="px-4 py-3 text-neutral-text-muted">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

/* ── Accessibility tab ────────────────────────────────────────── */
function AccessibilityTab() {
  return (
    <div className="p-8 max-w-3xl space-y-6">
      <h2 className="text-2xl font-semibold text-neutral-text">Accessibility</h2>
      <ul className="space-y-3 text-neutral-text text-sm">
        {[
          'Uses native <button> element — keyboard and AT support built-in.',
          'type="button" is set by default to avoid accidental form submissions.',
          'Loading state sets aria-busy="true" and disables pointer events.',
          'Focus ring visible on keyboard navigation (focus-visible).',
          'Icon-only buttons must include an aria-label.',
          'Disabled state is communicated via disabled attribute (not just styling).',
        ].map((item) => (
          <li key={item} className="flex gap-3">
            <span className="text-success mt-0.5">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────── */
export default function ButtonPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-neutral-900 text-white px-10 py-16">
        <h1 className="text-5xl font-bold">Button</h1>
      </div>

      {/* Tabs + content */}
      <TabsNav tabs={TABS}>
        {(active) => (
          <>
            {active === 'usage'         && <UsageTab />}
            {active === 'style'         && <StyleTab />}
            {active === 'code'          && <CodeTab />}
            {active === 'accessibility' && <AccessibilityTab />}
          </>
        )}
      </TabsNav>
    </>
  );
}
