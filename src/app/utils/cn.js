import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classValues) {
  const mergedClasses = clsx(...classValues);
  return twMerge(mergedClasses);
}
