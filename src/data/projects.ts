import type { Locale } from "@/lib/i18n";

export type ProjectImage = {
  src: string;
  alt: Record<Locale, string>;
  label: Record<Locale, string>;
};

export type Project = {
  slug: string;
  name: string;
  year: Record<Locale, string>;
  services: readonly string[];
  description: Record<Locale, string>;
  images: readonly ProjectImage[];
  url?: string;
  caseStudyUrl?: string;
};

export const projects: readonly Project[] = [
  {
    slug: "acevedo-pucci-associates",
    name: "Acevedo Pucci & Associates",
    year: { es: "2026", en: "2026" },
    services: ["Diseño web", "Desarrollo web", "Sitio bilingüe", "SEO técnico", "Despliegue"],
    description: {
      es: "Diseño y desarrollo de un sitio corporativo bilingüe para una firma de servicios fiscales y contables. Incluye SEO técnico, publicación y trabajo continuo para fortalecer su visibilidad orgánica.",
      en: "Design and development of a bilingual corporate website for a tax and accounting firm. Includes technical SEO, deployment, and ongoing work to strengthen its organic visibility.",
    },
    images: [
      {
        src: "/images/projects/acevedo-pucci/home-desktop.png",
        alt: { es: "Página de inicio en escritorio de Acevedo Pucci & Associates.", en: "Acevedo Pucci & Associates homepage on desktop." },
        label: { es: "Portada · Escritorio", en: "Homepage · Desktop" },
      },
      {
        src: "/images/projects/acevedo-pucci/services-desktop.png",
        alt: { es: "Página de servicios en escritorio de Acevedo Pucci & Associates.", en: "Acevedo Pucci & Associates services page on desktop." },
        label: { es: "Servicios · Escritorio", en: "Services · Desktop" },
      },
      {
        src: "/images/projects/acevedo-pucci/home-mobile.png",
        alt: { es: "Página de inicio móvil de Acevedo Pucci & Associates.", en: "Acevedo Pucci & Associates homepage on mobile." },
        label: { es: "Portada · Móvil", en: "Homepage · Mobile" },
      },
      {
        src: "/images/projects/acevedo-pucci/services-mobile.png",
        alt: { es: "Página móvil de servicios fiscales de Acevedo Pucci & Associates.", en: "Acevedo Pucci & Associates tax services page on mobile." },
        label: { es: "Servicios · Móvil", en: "Services · Mobile" },
      },
      {
        src: "/images/projects/acevedo-pucci/menu-mobile.png",
        alt: { es: "Menú de navegación móvil de Acevedo Pucci & Associates.", en: "Acevedo Pucci & Associates mobile navigation menu." },
        label: { es: "Navegación · Móvil", en: "Navigation · Mobile" },
      },
    ],
    url: "https://acevedopucci.com",
  },
];
