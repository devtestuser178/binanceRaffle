import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components/ui/button";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
