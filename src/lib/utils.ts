import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatXP(xp: number): string {
  return xp.toLocaleString();
}

export function getLevelProgress(xp: number): {
  level: number;
  currentXP: number;
  nextLevelXP: number;
  percent: number;
} {
  const level = Math.floor(xp / 500) + 1;
  const currentXP = xp % 500;
  const nextLevelXP = 500;
  const percent = Math.min(100, Math.round((currentXP / nextLevelXP) * 100));
  return { level, currentXP, nextLevelXP, percent };
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}
