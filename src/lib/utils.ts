import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names and resolves conflicting Tailwind utilities
 * (e.g. cn("px-2", condition && "px-4") correctly keeps only "px-4").
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
