import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { legalPaths } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

type FooterProps = {
  locale: Locale;
  role: string;
  labels: {
    linkedin: string;
    github: string;
    email: string;
    privacy: string;
    cookies: string;
    terms: string;
    preferences: string;
    pending: string;
  };
};

type FooterLinkProps = { label: string; href?: string; pending: string };

function FooterLink({ label, href, pending }: FooterLinkProps) {
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>{label} <span aria-hidden="true">↗</span></a> : <span aria-disabled="true">{label} · {pending}</span>;
}

export function SiteFooter({ locale, role, labels }: FooterProps) {
  const emailHref = siteConfig.socials.email ? `mailto:${siteConfig.socials.email}` : undefined;
  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <div><p className="site-footer__name">Samuel Revollo</p><p className="site-footer__role font-mono">{role}</p></div>
        <div className="site-footer__links">
          <div><FooterLink label={labels.linkedin} href={siteConfig.socials.linkedin || undefined} pending={labels.pending} /><FooterLink label={labels.github} href={siteConfig.socials.github || undefined} pending={labels.pending} /><FooterLink label={labels.email} href={emailHref} pending={labels.pending} /></div>
          <div><Link href={legalPaths[locale].privacy}>{labels.privacy}</Link><Link href={legalPaths[locale].cookies}>{labels.cookies}</Link><Link href={legalPaths[locale].terms}>{labels.terms}</Link></div>
        </div>
      </div>
      <div className="container site-footer__bottom">
        <span className="font-mono">Samuel Revollo</span>
        <span className="font-mono">© {new Date().getFullYear()}</span>
        <span className="site-footer__locale font-mono"><Link href="/es" hrefLang="es" lang="es" aria-current={locale === "es" ? "page" : undefined}>ES</Link><span aria-hidden="true">/</span><Link href="/en" hrefLang="en" lang="en" aria-current={locale === "en" ? "page" : undefined}>EN</Link></span>
      </div>
    </footer>
  );
}
