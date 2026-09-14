export const siteConfig = {
  socials: {
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
    github: process.env.NEXT_PUBLIC_GITHUB_URL ?? "",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  },
} as const;
