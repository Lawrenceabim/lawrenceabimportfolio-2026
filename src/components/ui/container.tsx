import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps<T extends ElementType> = {
  as?: T;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "className" | "children">;

const DEFAULT_TAG = "div";

/**
 * The single source of truth for content width and side padding. Every
 * section renders its content through this so the page reads as one
 * consistent column, not eleven independently-guessed widths.
 * Mobile-first padding: 24px on phones, up to 48px on large desktops.
 */
export function Container<T extends ElementType = typeof DEFAULT_TAG>({
  as,
  className,
  children,
  ...props
}: ContainerProps<T>) {
  const Component = as || DEFAULT_TAG;

  return (
    <Component
      className={cn("mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12", className)}
      {...props}
    >
      {children}
    </Component>
  );
}
