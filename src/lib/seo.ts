import type { Metadata } from "next";
import { dictionaries } from "@/content";
import type { Locale } from "./i18n";
export const fallbackSiteUrl = "https://samuelrevollo.vercel.app";

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl;
}

export function homepageMetadata(locale: Locale): Metadata {
  const copy = dictionaries[locale];
  const url = getSiteUrl();
  return {
    title: copy.title, description: copy.description,
    robots: { index: true, follow: true },
    metadataBase: new URL(url),
    alternates: { canonical: `/${locale}`, languages: { es: "/es", en: "/en", "x-default": "/es" } },
    openGraph: { title: copy.title, description: copy.description, type: "website", locale: locale === "es" ? "es_ES" : "en_US", siteName: "Samuel Revollo", images: [{ url: "/images/hero/samue-revollo-hero.jpg", alt: "Samuel Revollo" }] },
    twitter: { card: "summary_large_image", title: copy.title, description: copy.description, images: ["/images/hero/samue-revollo-hero.jpg"] },
  };
}
