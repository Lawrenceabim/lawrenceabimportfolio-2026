"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/**
 * Thin wrapper so the rest of the app never imports next-themes directly.
 * next-themes injects a blocking inline script into <head> that sets the
 * `.dark` class before first paint, which is what prevents the classic
 * flash-of-wrong-theme — no client-side check needed for that part.
 */
export function ThemeProvider({
  children,
  ...props
}: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
