/**
 * Keyboard/screen-reader users can jump straight past repeated nav to the
 * main content. Visually hidden until it receives focus (first Tab press),
 * per WCAG 2.4.1 (Bypass Blocks). No JS required — pure server component.
 */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:font-sans focus:text-sm focus:font-medium focus:text-accent-foreground"
    >
      Skip to main content
    </a>
  );
}
