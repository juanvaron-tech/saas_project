import 'vitest';

declare module 'vitest' {
  interface Assertion<R = any> {
    toHaveNoViolations(): R;
  }
  interface AsymmetricMatchersContaining {
    toHaveNoViolations(): void;
  }
}
