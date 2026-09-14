import { notFound } from "next/navigation";
import { dictionaries } from "@/content";
import { isLocale, locales } from "@/lib/i18n";
import { homepageMetadata } from "@/lib/seo";
import { SiteHeader } from "@/components/layout/site-header";
import { HeroSection } from "@/components/sections/hero-section";
import { SelectedWork } from "@/components/sections/selected-work";
import { ServicesSection } from "@/components/sections/services-section";
import { ProcessSection } from "@/components/sections/process-section";
import { AboutSection } from "@/components/sections/about-section";
import { FAQSection } from "@/components/sections/faq-section";
import { ContactSection } from "@/components/sections/contact-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { projects } from "@/data/projects";
type Props = { params: Promise<{ locale: string }> };
export function generateStaticParams() { return locales.map((locale) => ({ locale })); }
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return homepageMetadata(locale);
}
export default async function Portfolio({ params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = dictionaries[locale];
  return <>
    <a className="skip-link" href="#main">{copy.skip}</a>
    <SiteHeader locale={locale} role={copy.role} labels={copy.navigation} />
    <main id="main" tabIndex={-1} className="container">
      <HeroSection label="SR / 01" role={copy.role} headline={copy.headline} description={copy.description} approach={copy.approach} services={copy.services} labels={copy.hero} />
      <SelectedWork locale={locale} projects={projects} labels={copy.selectedWork} />
      <ServicesSection label={copy.serviceSection.sectionLabel} title={copy.serviceSection.title} intro={copy.serviceSection.intro} count={copy.serviceSection.count} services={copy.serviceSection.services} supplementary={copy.serviceSection.supplementary} cta={copy.serviceSection.cta} />
      <ProcessSection label={copy.processSection.sectionLabel} title={copy.processSection.title} intro={copy.processSection.intro} count={copy.processSection.count} steps={copy.processSection.steps} conclusion={copy.processSection.conclusion} cta={copy.processSection.cta} />
      <AboutSection label={copy.aboutSection.sectionLabel} title={copy.aboutSection.title} intro={copy.aboutSection.intro} quote={copy.aboutSection.quote} quoteCaption={copy.aboutSection.quoteCaption} origin={copy.aboutSection.origin} approach={copy.aboutSection.approach} education={copy.aboutSection.education} stackLabel={copy.aboutSection.stackLabel} technologies={copy.aboutSection.technologies} interest={copy.aboutSection.interest} cvPending={copy.aboutSection.cvPending} />
      <FAQSection label={copy.faqSection.sectionLabel} title={copy.faqSection.title} intro={copy.faqSection.intro} count={copy.faqSection.count} support={copy.faqSection.support} items={copy.faqSection.items} />
      <ContactSection locale={locale} label={copy.contactSection.sectionLabel} title={copy.contactSection.title} message={copy.contactSection.message} detail={copy.contactSection.detail} availability={copy.contactSection.availability} whatsappPending={copy.contactSection.whatsappPending} whatsappCta={copy.contactSection.whatsappCta} form={copy.contactSection.form} />
    </main>
    <SiteFooter locale={locale} role={copy.role} labels={copy.footer} />
  </>;
}
