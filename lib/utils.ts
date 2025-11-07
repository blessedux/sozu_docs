import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names with tailwind-merge
 * This function is used by Shadcn UI components
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
} 