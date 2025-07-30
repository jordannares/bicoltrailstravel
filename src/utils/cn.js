import { twMerge } from "tailwind-merge";
import clsx from "clsx";

// export const cn = (...args) => clsx(...args);
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
