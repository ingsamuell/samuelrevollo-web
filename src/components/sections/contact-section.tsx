import { ContactForm } from "@/components/contact/contact-form";
import { siteConfig } from "@/lib/site-config";
import { legalPaths, type Locale } from "@/lib/i18n";

type ContactSectionProps = {
  locale: Locale;
  label: string;
  title: string;
  message: string;
  detail: string;
  availability: string;
  whatsappPending: string;
  whatsappCta: string;
  form: React.ComponentProps<typeof ContactForm>["labels"];
};

export function ContactSection({ locale, label, title, message, detail, availability, whatsappPending, whatsappCta, form }: ContactSectionProps) {
  const number = siteConfig.socials.whatsappNumber.replace(/\D/g, "");
  const whatsappHref = number ? `https://wa.me/${number}?text=${encodeURIComponent(whatsappCta)}` : undefined;
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-section__intro">
        <p className="section-label font-mono">{label}</p>
        <h2 id="contact-title">{title}</h2>
        <p className="contact-section__message">{message}</p>
        <p className="contact-section__detail">{detail}</p>
        <p className="contact-section__availability font-mono"><span aria-hidden="true" />{availability}</p>
        {whatsappHref ? <a className="contact-section__whatsapp font-mono" href={whatsappHref} target="_blank" rel="noreferrer">{whatsappCta} <span aria-hidden="true">↗</span></a> : <p className="contact-section__whatsapp font-mono">{whatsappPending}</p>}
      </div>
      <ContactForm labels={form} privacyHref={legalPaths[locale].privacy} />
    </section>
  );
}
