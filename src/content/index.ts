import { es } from "./es";
import { en } from "./en";
import type { Dictionary } from "./es";
import type { Locale } from "@/lib/i18n";
export const dictionaries: Record<Locale, Dictionary> = { es, en };
