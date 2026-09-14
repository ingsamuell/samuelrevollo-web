import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const paths = ["/es", "/en", "/es/privacidad", "/es/cookies", "/es/terminos", "/en/privacy", "/en/cookies", "/en/terms"];

  return paths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/es" || path === "/en" ? "weekly" : "yearly",
    priority: path === "/es" || path === "/en" ? 1 : 0.3,
  }));
}
