import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { dictionaries } from "@/content";
import { locales, isLocale, type Locale } from "@/lib/i18n";
import { getSiteUrl } from "@/lib/seo";
import { SiteFooter } from "@/components/layout/site-footer";

type LegalDocument = { title: string; summary: string; updated: string; sections: readonly { title: string; body: string }[] };

const legalDocuments: Record<Locale, Record<string, LegalDocument>> = {
  es: {
    privacidad: {
      title: "Política de privacidad", summary: "Esta política explica cómo se tratan los datos que compartes al contactar a Samuel Revollo mediante este sitio.", updated: "Última actualización: 14 de septiembre de 2026",
      sections: [
        { title: "Responsable y contacto", body: "El responsable del tratamiento es Samuel Revollo, profesional independiente con actividad desde Venezuela. Para consultas sobre privacidad escribe a samuelrevollo2016@gmail.com." },
        { title: "Datos y finalidad", body: "Al enviar el formulario puedes proporcionar nombre, correo electrónico, empresa o proyecto, tipo de servicio, presupuesto aproximado y mensaje. Se utilizan para responder tu consulta, evaluar una posible colaboración y dar seguimiento a la conversación que iniciaste." },
        { title: "Base y entrega del mensaje", body: "Cuando corresponda, el tratamiento se realiza para atender una solicitud precontractual iniciada por ti o con base en el interés legítimo de responder consultas profesionales. Los mensajes se procesan y conservan en Gmail; no se venden ni se comparten para publicidad." },
        { title: "Transferencias internacionales", body: "Como el sitio atiende consultas internacionales y utiliza proveedores tecnológicos globales, la información puede procesarse fuera del país desde el que se realizó la consulta. Solo se usa para las finalidades descritas en esta política." },
        { title: "Conservación", body: "Los mensajes se conservan mientras sean necesarios para atender la consulta, mantener el historial profesional relacionado o cumplir obligaciones aplicables. Después se eliminan o archivan de forma segura cuando ya no sean necesarios." },
        { title: "Tus derechos", body: "Puedes solicitar acceso, rectificación, eliminación, oposición o restricción del uso de tus datos escribiendo al correo indicado. Cuando una normativa aplicable otorgue derechos adicionales, como portabilidad o reclamación ante una autoridad de control, podrás ejercerlos conforme a esa normativa." },
      ],
    },
    cookies: {
      title: "Política de cookies", summary: "Esta página describe el uso actual de cookies y tecnologías similares en este sitio.", updated: "Última actualización: 14 de septiembre de 2026",
      sections: [
        { title: "Uso actual", body: "Este sitio no configura cookies de analítica, publicidad ni personalización y no utiliza una plataforma de seguimiento de visitantes." },
        { title: "Infraestructura técnica", body: "El navegador, el proveedor de alojamiento y los servicios de seguridad pueden procesar datos técnicos necesarios para entregar y proteger el sitio, como registros de solicitudes. Estas tecnologías no se usan desde este sitio para crear perfiles publicitarios." },
        { title: "Cambios futuros", body: "Si se incorporan analítica u otros servicios opcionales que usen cookies, esta política se actualizará y se solicitará consentimiento cuando corresponda." },
      ],
    },
    terminos: {
      title: "Términos de uso", summary: "Estos términos regulan el acceso y uso informativo de este portafolio profesional.", updated: "Última actualización: 14 de septiembre de 2026",
      sections: [
        { title: "Contenido", body: "El contenido presenta servicios, experiencia y proyectos de Samuel Revollo. No constituye una oferta contractual ni garantiza la disponibilidad de un servicio específico." },
        { title: "Propiedad intelectual", body: "Los textos, diseño, código y materiales propios del sitio no pueden reproducirse o utilizarse con fines comerciales sin autorización. Las referencias a proyectos de clientes se muestran con fines de portafolio." },
        { title: "Enlaces externos", body: "Los enlaces a sitios de terceros, como proyectos publicados, LinkedIn, GitHub o WhatsApp, se proporcionan para facilitar el contacto. Cada servicio externo mantiene sus propias políticas y condiciones." },
        { title: "Consultas y legislación aplicable", body: "Enviar un formulario o mensaje no crea una relación comercial ni profesional automática. El alcance, tiempos y condiciones de cualquier colaboración se definirán por escrito antes de iniciar un trabajo. La actividad profesional se desarrolla desde Venezuela, sin perjuicio de las normas imperativas que puedan resultar aplicables al cliente o a la relación contractual." },
      ],
    },
  },
  en: {
    privacy: {
      title: "Privacy policy", summary: "This policy explains how data shared when contacting Samuel Revollo through this website is handled.", updated: "Last updated: September 14, 2026",
      sections: [
        { title: "Controller and contact", body: "The data controller is Samuel Revollo, an independent professional operating from Venezuela. For privacy questions, write to samuelrevollo2016@gmail.com." },
        { title: "Data and purpose", body: "When you submit the form, you may provide your name, email address, company or project, service type, approximate budget, and message. This information is used to respond to your inquiry, assess a potential collaboration, and follow up on the conversation you started." },
        { title: "Basis and form delivery", body: "Where applicable, processing is carried out to address a pre-contractual request initiated by you or on the legitimate interest of responding to professional inquiries. Messages are processed and stored in Gmail; they are not sold or shared for advertising." },
        { title: "International transfers", body: "As the site serves international inquiries and uses global technology providers, information may be processed outside the country from which an inquiry was made. It is used only for the purposes described in this policy." },
        { title: "Retention", body: "Messages are retained while needed to address the inquiry, maintain the related professional history, or meet applicable obligations. They are deleted or securely archived when no longer needed." },
        { title: "Your rights", body: "You may request access, rectification, deletion, objection, or restriction of your data by writing to the contact email above. When applicable law grants additional rights, such as portability or a right to complain to a supervisory authority, you may exercise them under that law." },
      ],
    },
    cookies: {
      title: "Cookie policy", summary: "This page describes the current use of cookies and similar technologies on this site.", updated: "Last updated: September 14, 2026",
      sections: [
        { title: "Current use", body: "This site does not set analytics, advertising, or personalization cookies and does not use a visitor-tracking platform." },
        { title: "Technical infrastructure", body: "Your browser, hosting provider, and security services may process technical data needed to deliver and protect the site, such as request logs. These technologies are not used by this site to build advertising profiles." },
        { title: "Future changes", body: "If analytics or other optional cookie-based services are added, this policy will be updated and consent will be requested when required." },
      ],
    },
    terms: {
      title: "Terms of use", summary: "These terms govern access to and informational use of this professional portfolio.", updated: "Last updated: September 14, 2026",
      sections: [
        { title: "Content", body: "The site presents Samuel Revollo's services, experience, and projects. It does not constitute a contractual offer or guarantee availability of a particular service." },
        { title: "Intellectual property", body: "The site's original text, design, code, and materials may not be reproduced or used commercially without permission. Client project references are shown for portfolio purposes." },
        { title: "External links", body: "Links to third-party sites, including published projects, LinkedIn, GitHub, and WhatsApp, are provided to facilitate contact. Each external service has its own policies and terms." },
        { title: "Inquiries and applicable law", body: "Submitting a form or message does not automatically create a commercial or professional relationship. Scope, timelines, and conditions for any collaboration will be agreed in writing before work begins. Professional activity is conducted from Venezuela, without limiting any mandatory rules that may apply to the client or contractual relationship." },
      ],
    },
  },
};

type Props = { params: Promise<{ locale: string; legal: string }> };

function getDocument(locale: Locale, legal: string) {
  return legalDocuments[locale][legal];
}

export function generateStaticParams() {
  return locales.flatMap((locale) => Object.keys(legalDocuments[locale]).map((legal) => ({ locale, legal })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, legal } = await params;
  if (!isLocale(locale)) notFound();
  const legalDocument = getDocument(locale, legal);
  if (!legalDocument) notFound();
  const url = getSiteUrl();
  return { title: `${legalDocument.title} | Samuel Revollo`, description: legalDocument.summary, metadataBase: new URL(url), alternates: { canonical: `/${locale}/${legal}` }, robots: { index: true, follow: true } };
}

export default async function LegalPage({ params }: Props) {
  const { locale, legal } = await params;
  if (!isLocale(locale)) notFound();
  const legalDocument = getDocument(locale, legal);
  if (!legalDocument) notFound();
  const copy = dictionaries[locale];
  const homeLabel = locale === "es" ? "Volver al inicio" : "Back to home";

  return <>
    <header className="legal-header"><div className="container legal-header__inner"><Link href={`/${locale}`} className="site-footer__name">Samuel Revollo</Link><Link href={`/${locale}`} className="font-mono">{homeLabel} ↗</Link></div></header>
    <main className="container legal-page"><p className="section-label font-mono">SR / LEGAL</p><h1>{legalDocument.title}</h1><p className="legal-page__summary">{legalDocument.summary}</p><p className="legal-page__updated font-mono">{legalDocument.updated}</p><div className="legal-page__sections">{legalDocument.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.body}</p></section>)}</div></main>
    <SiteFooter locale={locale} role={copy.role} labels={copy.footer} />
  </>;
}
