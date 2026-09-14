"use client";

import Link from "next/link";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";

type SiteHeaderProps = {
  locale: Locale;
  role: string;
  labels: {
    work: string;
    services: string;
    process: string;
    about: string;
    faq: string;
    contact: string;
    menu: string;
    closeMenu: string;
  };
};

const navigation = [
  { key: "work", href: "#work" },
  { key: "services", href: "#services" },
  { key: "process", href: "#process" },
  { key: "about", href: "#about" },
  { key: "faq", href: "#faq" },
] as const;

export function SiteHeader({ locale, role, labels }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Link href={`/${locale}`} className="identity" aria-label="Samuel Revollo">
          <span className="identity__name">Samuel Revollo</span>
          <span aria-hidden="true" className="identity__divider">/</span>
          <span className="identity__role">{role}</span>
        </Link>

        <button type="button" className="menu-toggle font-mono" aria-controls="primary-navigation" aria-expanded={open} onClick={() => setOpen((current) => !current)}>
          {open ? labels.closeMenu : labels.menu}
        </button>

        <nav id="primary-navigation" className={open ? "primary-nav primary-nav--open" : "primary-nav"} aria-label={labels.menu}>
          {navigation.map(({ key, href }) => <a href={href} key={key} onClick={() => setOpen(false)}>{labels[key]}</a>)}
          <span className="language-switch font-mono" aria-label={locale === "es" ? "Idioma" : "Language"}>
            <Link href="/es" hrefLang="es" lang="es" aria-current={locale === "es" ? "page" : undefined}>ES</Link>
            <span aria-hidden="true">/</span>
            <Link href="/en" hrefLang="en" lang="en" aria-current={locale === "en" ? "page" : undefined}>EN</Link>
          </span>
          <a href="#contact" className="header-contact font-mono" onClick={() => setOpen(false)}>{labels.contact} <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
  );
}
