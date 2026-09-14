export const locales = ["es", "en"] as const;
export type Locale = (typeof locales)[number];
export function isLocale(value: string): value is Locale { return locales.some((locale) => locale === value); }
export const legalPaths = {
  es: { privacy: "/es/privacidad", cookies: "/es/cookies", terms: "/es/terminos" },
  en: { privacy: "/en/privacy", cookies: "/en/cookies", terms: "/en/terms" },
} as const;
