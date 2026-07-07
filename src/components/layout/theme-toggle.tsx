"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only gates the *label* text, not the button's rendering — the icons
  // themselves are pure CSS (see dark:hidden below) so they're correct
  // from first paint with no flash and no layout shift while this
  // resolves on the client.
  useEffect(() => {
    setMounted(true);
  }, []);

  function toggle() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        mounted
          ? `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`
          : "Toggle color theme"
      }
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors duration-150 hover:bg-surface-hover",
        className,
      )}
    >
      <Sun className="h-[18px] w-[18px] dark:hidden" aria-hidden="true" />
      <Moon className="hidden h-[18px] w-[18px] dark:block" aria-hidden="true" />
    </button>
  );
}
