import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function titleCase(str: string) {
  return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
}

export function convertStringsToNumbers(obj: any): any {
  if (typeof obj === "string" && !isNaN(parseInt(obj))) {
    return parseFloat(obj);
  } else if (Array.isArray(obj)) {
    return obj.map((item) => convertStringsToNumbers(item));
  } else if (typeof obj === "object" && obj !== null) {
    let result: Record<string, any> = {};
    Object.keys(obj).forEach((key) => {
      result[key] = convertStringsToNumbers(obj[key]);
    });
    return result;
  }
  // For any other type or non-convertible value, return as is
  return obj;
}

export function generateRandomColor() {
  // Generate a random hue between 0 and 360
  const hue = Math.floor(Math.random() * 360);
  // Set saturation to 100% and lightness to 50% to ensure high contrast and brightness
  const saturation = 100;
  const lightness = 50;

  // Convert HSL to RGB
  const hslToRgb = (h: number, s: number, l: number) => {
    s /= 100;
    l /= 100;
    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return `rgb(${Math.round(255 * f(0))}, ${Math.round(255 * f(8))}, ${Math.round(255 * f(4))})`;
  };

  return hslToRgb(hue, saturation, lightness);
}

export function deepClone(obj: Object) {
  return JSON.parse(JSON.stringify(obj));
}
