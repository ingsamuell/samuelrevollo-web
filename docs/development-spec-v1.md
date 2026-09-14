# DEVELOPMENT SPEC V1
## Samuel Revollo — Web Developer Portfolio

**Version:** 1.0  
**Status:** Approved for implementation  
**Primary language:** Spanish  
**Secondary language:** English  
**Product type:** Personal commercial portfolio  
**Primary objective:** Generate qualified web-development leads  
**Secondary objective:** Professional positioning and job opportunities  
**Visual system:** Monochrome Precision

---

# 0. CODEX IMPLEMENTATION DIRECTIVE

This document is the source of truth for V1.

Codex must:

- preserve the approved visual direction;
- prioritize performance, SEO, accessibility and conversion;
- avoid unnecessary dependencies;
- create reusable components;
- keep content separated from presentation where practical;
- implement responsive behavior deliberately, not merely shrink desktop;
- use real semantic HTML;
- avoid fabricating content or business claims.

Codex must NOT invent:

- projects;
- clients;
- testimonials;
- project metrics;
- prices;
- years of experience;
- certifications;
- physical locations;
- technologies Samuel has not actually used;
- awards;
- business statistics.

When information is unavailable, use a clearly named development placeholder or configurable value rather than fictional production content.

Do not redesign approved sections unless implementation constraints require it.

---

# 1. PRODUCT GOAL

The website should help a potential client answer five questions:

1. Who is Samuel?
2. What can he build?
3. Is his work good?
4. What would working with him be like?
5. How can I contact him?

Primary desired action:

**Start a conversation about a project.**

Primary conversion mechanisms:

- contact form;
- WhatsApp.

Secondary conversions:

- view projects;
- LinkedIn;
- GitHub;
- download CV.

---

# 2. TARGET AUDIENCE

Primary:

**Companies and professionals who need to create or improve their digital presence.**

Typical needs:

- business website;
- website redesign;
- custom web solution;
- web application;
- technical SEO/performance improvements.

Commercial positioning:

**Desarrollo web a medida para empresas y profesionales.**

Core philosophy:

**La solución debe adaptarse al negocio, no el negocio a la tecnología.**

---

# 3. TECHNOLOGY STACK

## Required

- Next.js
- App Router
- TypeScript
- Tailwind CSS
- React
- Node.js runtime for backend functionality

Use stable versions available when implementation begins.

Do not introduce a UI framework such as Material UI, Bootstrap or Chakra.

The visual system should be implemented directly through reusable Tailwind/CSS tokens and components.

## Backend

Contact form:

- Next.js Route Handler;
- server-side validation;
- Nodemailer;
- Gmail SMTP;
- no third-party form-processing platform.

## Validation

Preferred:

- Zod

Validate all form input again on the server regardless of client-side validation.

## Database

**None required for V1.**

Contact submissions are sent to Gmail.

## CMS

**None in V1.**

Projects/content may initially live in typed TypeScript data objects or local structured content.

## Admin dashboard

**Out of scope.**

---

# 4. ROUTING

Production structure:

```text
/
├── /es
├── /en
│
├── /es/privacidad
├── /es/cookies
├── /es/terminos
│
├── /en/privacy
├── /en/cookies
└── /en/terms
```

Root `/` should redirect to `/es` for V1.

Do not create empty SEO pages.

Future routes may include:

```text
/es/proyectos/[slug]
/en/work/[slug]

/es/servicios/desarrollo-web
/es/servicios/rediseno-web
/es/servicios/aplicaciones-web
/es/servicios/seo
```

These are NOT required for V1 unless deliberately added later.

---

# 5. PAGE STRUCTURE

Homepage order is fixed:

```text
Navigation

SR / 01 — Hero
SR / 02 — Selected Work
SR / 03 — Servicios
SR / 04 — Proceso
SR / 05 — Sobre mí
SR / 06 — Preguntas frecuentes
SR / 07 — Contacto

Footer
Cookie preferences
```

Do not rearrange these sections.

Each section must have a unique visual rhythm while remaining part of the same design system.

---

# 6. DESIGN SYSTEM — MONOCHROME PRECISION

## Visual principles

- editorial;
- modernist;
- technical but human;
- minimalist;
- restrained;
- precise;
- professional;
- high whitespace;
- typography-driven.

Avoid:

- gradients;
- glassmorphism;
- decorative 3D;
- particles;
- colorful accents;
- generic SaaS cards;
- excessive rounded corners;
- large drop shadows;
- fake technical data;
- fake coordinates;
- fake system statuses.

Project screenshots may use their original colors.

They are the primary source of color in the site.

---

# 7. COLOR TOKENS

Core production palette:

```css
--canvas: #F6F6F4;
--surface: #FFFFFF;

--ink: #111111;
--ink-muted: #555555;
--ink-metadata: #888888;

--hairline: #E2E2DF;

--error: #BA1A1A;
--success: #111111;
```

Avoid pure white as the dominant page canvas.

Primary interactions:

```text
Default:
black background
white text

Hover:
white background
black text
1px black border
```

No brand accent color in V1.

---

# 8. TYPOGRAPHY

Primary family:

**Hanken Grotesk**

Metadata family:

**JetBrains Mono**

Suggested scale:

```text
Display XL
Desktop: 72 / 76
Mobile: 40 / 44
Weight: 600

Headline LG
Desktop: 44 / 48
Mobile: 28 / 34
Weight: 500

Headline MD
24 / 30
Weight: 500

Body LG
17 / 28

Body MD
15 / 24

Body SM
13 / 20

Mono LG
14 / 20

Mono MD
12 / 18

Mono SM
10 / 14
```

Large headlines may use negative tracking.

Metadata should use restrained uppercase and technical numbering.

Example:

```text
SR / 03
01 / 04
WEB DEVELOPMENT
2026
```

Do NOT invent decorative metadata simply to fill empty space.

---

# 9. GRID & SPACING

Desktop ≥ 1200px:

```text
12 columns
64px outer margin
24px gutters
```

Tablet 768–1199px:

```text
8 columns
40px outer margin
20px gutters
```

Mobile < 768px:

```text
4 columns
20px outer margin
16px gutters
```

Base spacing:

```text
4
8
16
32
64
128
```

Hairlines:

```text
1px solid var(--hairline)
```

Radius:

```text
0px
```

Exception:

availability/status dot may be circular.

---

# 10. NAVIGATION

Desktop navigation:

```text
Samuel Revollo
Web Developer

Proyectos
Servicios
Sobre mí
ES / EN
Hablemos ↗
```

Behavior:

- sticky;
- understated;
- no large shadow;
- optional subtle canvas/background transition after scrolling;
- anchors scroll smoothly to sections;
- respect reduced-motion preference.

Anchors:

```text
#work
#services
#about
#contact
```

`Hablemos ↗` scrolls to Contact.

Mobile:

- compact menu;
- accessible button;
- clear expanded state;
- no complicated fullscreen animation required.

---

# 11. SR / 01 — HERO

Purpose:

**Explain who Samuel is, what he does and why his approach is different.**

Required content structure:

```text
SR / 01

SAMUEL REVOLLO — DESARROLLADOR WEB

PRIMERO ENTIENDO
TU NEGOCIO. DESPUÉS
CONSTRUIMOS LO
QUE NECESITA.
```

Support copy concept:

```text
Desarrollo sitios y aplicaciones web a medida para empresas
y profesionales que necesitan una presencia digital rápida,
moderna y preparada para crecer.
```

Secondary message:

```text
Cada solución se construye alrededor de las necesidades reales
del negocio, sin añadir tecnología innecesaria.
```

Primary CTA:

```text
Cuéntame sobre tu proyecto ↗
```

Destination:

`#contact`

Secondary CTA:

```text
Ver proyectos ↓
```

Destination:

`#work`

Include availability:

```text
● Disponible para nuevos proyectos
```

Metadata/service strip:

```text
DESARROLLO WEB
WEB APPS
REDISEÑO WEB
SEO & PERFORMANCE
```

Also include a secondary WhatsApp access without dominating the Hero.

---

# 12. SR / 02 — SELECTED WORK

Purpose:

**Prove ability through real work.**

Desktop visual model:

```text
75–80% active project
20–25% preview of next project
```

Do not render three equal cards.

Required:

- `SR / 02`;
- title;
- active project counter;
- previous/next controls;
- large project screenshot;
- project name;
- year;
- services;
- description;
- project/case-study link when available.

First real project:

**Acevedo Pucci & Associates**

Do not fabricate metrics.

The component must support an arbitrary number of projects.

Data should not depend on exactly two or three entries.

Suggested project model:

```ts
type Project = {
  slug: string
  name: string
  year: string
  description: {
    es: string
    en: string
  }
  services: string[]
  image: string
  imageAlt: {
    es: string
    en: string
  }
  url?: string
  caseStudyUrl?: string
}
```

Interaction:

- buttons;
- touch swipe;
- trackpad/drag where practical;
- keyboard access;
- no autoplay.

Project screenshot may remain in natural color.

Possible subtle interaction:

slight vertical screenshot movement on deliberate hover.

Disable nonessential motion with `prefers-reduced-motion`.

---

# 13. SR / 03 — SERVICIOS

Purpose:

**Explain what a client can hire Samuel to do.**

Do NOT use four generic cards.

Use large editorial rows.

Services:

```text
01 Desarrollo Web
02 Rediseño Web
03 Aplicaciones Web
04 SEO & Performance
```

Supplementary service:

```text
Hosting & Dominios
```

This should NOT appear at the same hierarchy as the four primary services.

Service messaging should focus on client outcomes rather than frameworks.

Optional technical metadata may remain visually secondary.

Include a contextual WhatsApp/contact CTA after this area.

Example intention:

```text
¿Tienes algo parecido en mente?
Hablemos ↗
```

---

# 14. SR / 04 — PROCESO

Purpose:

**Show what working together is like.**

Must be visually different from Services.

Desktop:

horizontal sequence.

Steps:

```text
01 ENTENDER
02 DISEÑAR
03 CONSTRUIR
04 MEJORAR
```

Concept:

```text
ENTENDER
Business / goals / users / problem

DISEÑAR
Structure / UX / content

CONSTRUIR
Development / performance / SEO

MEJORAR
Launch / measure / iterate
```

Do NOT use:

- four service-like rows;
- circular timeline icons;
- corporate process diagram.

Close with:

```text
Trabajamos juntos en las decisiones importantes.
```

---

# 15. SR / 05 — SOBRE MÍ

Purpose:

**Introduce the person behind the work and build trust.**

Do not make this a CV clone.

Visual model:

editorial split composition.

Core facts:

- Samuel began learning web development to help grow family businesses.
- Combines technology, design and problem solving.
- Studies Ingeniería en Sistemas at Universidad Santa María.
- Current stage: 7th semester.
- Prior experience includes customer service and sales.
- Especially values understanding how each business operates before proposing a solution.
- Interested in learning mobile development.
- Longer-term academic interest: control engineering and industrial processes.

Human editorial quote:

```text
“Llegan al final los que más resisten,
no los más inteligentes.”
```

Use as a supporting editorial element, not the dominant headline.

Stack may include ONLY technologies actually used.

Approved examples:

```text
Next.js
React
TypeScript
JavaScript
Tailwind CSS
Supabase
PostgreSQL
Git
GitHub
Vercel
```

Do not use:

- skill percentages;
- star ratings;
- fake proficiency scores.

CTA:

```text
Descargar CV ↗
```

---

# 16. SR / 06 — PREGUNTAS FRECUENTES

Purpose:

- resolve commercial objections;
- provide useful long-tail SEO content.

Visual model:

editorial accordion.

Questions:

```text
01 ¿Cuánto cuesta desarrollar una página web?

02 ¿Cuánto tarda en desarrollarse una página web?

03 ¿Qué incluye el desarrollo de una página web?

04 ¿El desarrollo incluye SEO?

05 ¿Es mejor rediseñar mi página actual o crear una nueva?

06 ¿Necesito una página web a medida o puedo usar una solución existente?

07 ¿Puedo gestionar yo mismo el dominio y el hosting?

08 ¿Trabajas con clientes de otros países?
```

Answers should be useful and natural.

Do not keyword-stuff.

Do not invent pricing.

Price and time ranges remain configurable until explicitly approved.

Accordion requirements:

- actual buttons;
- `aria-expanded`;
- keyboard accessible;
- `+` closed;
- `−` open;
- smooth but restrained animation;
- full answer remains present in DOM when implementation permits;
- reduced-motion compatible.

---

# 17. SR / 07 — CONTACTO

Purpose:

**Convert visitor interest into a conversation.**

Desktop layout:

```text
Left:
message / contact alternatives

Right:
form
```

Primary heading:

```text
TRABAJEMOS JUNTOS
```

Core message:

```text
No necesitas tener toda la solución definida antes de escribir.

Cuéntame sobre tu negocio, el problema que quieres resolver
o la idea que tienes en mente. Podemos empezar desde ahí.
```

Required form fields:

```text
Nombre *
Email *
Empresa / Proyecto
¿Qué necesitas? *
Presupuesto aproximado
Cuéntame sobre tu proyecto *
```

Project options:

```text
Nueva página web
Rediseño de sitio web
Aplicación web
SEO / Performance
Otro
```

Budget options:

Do not hardcode production ranges until approved.

Temporary development values should be marked as placeholders.

CTA:

```text
ENVIAR PROYECTO ↗
```

Secondary:

```text
Hablar por WhatsApp ↗
```

Do not use WhatsApp green.

Form status states:

```text
idle
submitting
success
error
```

Success copy concept:

```text
MENSAJE ENVIADO

Gracias por contarme sobre tu proyecto.
Te responderé lo antes posible.
```

---

# 18. WHATSAPP CONVERSION SYSTEM

WhatsApp must appear strategically, NOT in every section.

Required placements:

### Hero
Secondary contact option.

### Post Work or Services
Small contextual CTA.

### Contact
Clear alternative to form.

No permanent green floating bubble in V1.

All WhatsApp links use a prefilled message.

Default Spanish concept:

```text
Hola Samuel, vi tu portafolio y me gustaría conversar sobre un proyecto.
```

English copy should be adapted naturally.

WhatsApp number must come from configuration/environment/content data.

Do not hardcode personal contact data inside components.

---

# 19. CONTACT BACKEND

Endpoint:

```text
POST /api/contact
```

Suggested server flow:

```text
Request
↓
Parse
↓
Validate
↓
Anti-spam checks
↓
Nodemailer
↓
Gmail SMTP
↓
Response
```

Validation:

- name required;
- valid email required;
- project type required;
- message required;
- reasonable length limits;
- reject unexpected values.

Anti-spam V1:

- honeypot field;
- server-side validation;
- submission timestamp check;
- basic rate limiting appropriate to chosen hosting infrastructure.

Do not expose Gmail credentials client-side.

Email should include:

```text
Nuevo proyecto desde samuelrevollo.com

Nombre:
Email:
Empresa:
Tipo:
Presupuesto:
Mensaje:
Idioma:
Página de origen:
```

Set:

```text
Reply-To = visitor email
```

This allows Samuel to hit Reply directly in Gmail.

---

# 20. ENVIRONMENT VARIABLES

Example:

```env
NEXT_PUBLIC_SITE_URL=

GMAIL_USER=
GMAIL_APP_PASSWORD=
CONTACT_RECIPIENT=

NEXT_PUBLIC_WHATSAPP_NUMBER=

NEXT_PUBLIC_GA_ID=
```

Actual secrets must never be committed.

Provide:

```text
.env.example
```

with empty/example-safe values.

---

# 21. INTERNATIONALIZATION

Languages:

```text
es
en
```

Spanish is the default V1 route.

Do not combine two languages inside the same page UI except the language selector.

Copy must be adapted, not blindly machine-translated.

Suggested content structure:

```text
content/
├── es.ts
└── en.ts
```

or equivalent typed dictionaries.

Every locale must provide all required content.

Missing translation should fail visibly during development rather than silently fallback to mixed-language UI.

---

# 22. SEO

Spanish homepage targeting concepts:

```text
Samuel Revollo
desarrollador web
desarrollo web
desarrollo web a medida
páginas web para empresas
aplicaciones web
rediseño web
SEO técnico
rendimiento web
```

Do not mechanically repeat them.

Required technical SEO:

- unique title;
- meta description;
- canonical;
- hreflang;
- Open Graph;
- social preview image;
- sitemap;
- robots.txt;
- semantic headings;
- image alt text;
- indexable content;
- internal links;
- structured data.

Homepage should contain only one primary H1.

Suggested structured data:

- Person;
- WebSite.

Add additional schema only when accurately supported by actual content.

No fake review or rating schema.

---

# 23. ANALYTICS

V1:

- Google Search Console;
- Google Analytics 4.

Do not add:

- Meta Pixel;
- Hotjar;
- Microsoft Clarity;
- advertising trackers;

unless intentionally approved later.

Suggested analytics events:

```text
contact_form_start
contact_form_submit
contact_form_success
contact_form_error

whatsapp_click
email_click
linkedin_click
github_click
cv_download

project_view
project_external_click

language_switch
```

Avoid collecting sensitive project-message content in analytics.

---

# 24. COOKIES & CONSENT

The site must support:

```text
Necessary
Analytics
```

Necessary functionality does not require an optional toggle.

Analytics must follow applicable consent requirements.

Cookie/consent UI should allow:

```text
Aceptar todas
Rechazar opcionales
Configurar
```

Users must later be able to reopen:

```text
Preferencias de cookies
```

from the footer.

Do not load optional analytics before appropriate consent when consent is required.

Consent implementation must not block essential site functionality.

---

# 25. LEGAL ROUTES

Spanish:

```text
/es/privacidad
/es/cookies
/es/terminos
```

English:

```text
/en/privacy
/en/cookies
/en/terms
```

Footer must link to them.

Also include:

```text
Preferencias de cookies
```

Legal content must accurately describe the production implementation.

Do NOT claim tools/cookies/processors that are not actually used.

Legal copy should receive appropriate professional review before relying on it as jurisdiction-specific legal advice.

---

# 26. FOOTER

Minimal.

Required:

```text
Samuel Revollo
Web Developer

LinkedIn
GitHub
Email

Privacidad
Cookies
Términos
Preferencias de cookies

ES / EN
```

No physical address required.

Do not invent location.

---

# 27. ACCESSIBILITY REQUIREMENTS

Target:

WCAG-oriented implementation with strong practical accessibility.

Required:

- semantic landmarks;
- skip-to-content;
- keyboard navigation;
- visible focus state;
- labels for all form controls;
- error descriptions associated with fields;
- alt text;
- adequate contrast;
- correctly ordered headings;
- accessible carousel controls;
- accessible mobile navigation;
- FAQ `aria-expanded`;
- `prefers-reduced-motion`.

Never remove focus outlines without replacing them.

Do not depend exclusively on hover.

---

# 28. PERFORMANCE REQUIREMENTS

Targets:

```text
LCP ≤ 2.5s
INP < 200ms
CLS < 0.1
```

Internal Lighthouse goals:

```text
Performance ≥ 95
Accessibility ≥ 95
SEO ≈ 100
Best Practices ≥ 95
```

These are QA goals, not business guarantees.

Implementation principles:

- use Server Components by default;
- client components only where interaction requires them;
- optimize project images;
- use `next/image`;
- responsive image sizes;
- lazy-load below fold;
- do not lazy-load critical LCP media;
- minimize JavaScript;
- avoid heavy carousel libraries unless justified;
- use `next/font` or locally optimized fonts;
- avoid unnecessary third-party scripts.

---

# 29. RESPONSIVE PRINCIPLES

Desktop design is NOT simply scaled down.

Each section must deliberately adapt.

### Hero
Maintain strong headline hierarchy.

### Work
Swipe-friendly project showcase.

### Services
Editorial rows stack naturally.

### Process
Horizontal desktop sequence becomes vertical progressive flow.

### About
Editorial split becomes natural reading order.

### FAQ
Full-width accessible accordion.

### Contact
Message first, form second.

Tap targets should be comfortably usable on mobile.

---

# 30. MOTION SYSTEM

Motion should communicate state, not decorate.

Recommended durations:

```text
150ms — controls
200–300ms — hover/focus
300–450ms — section/component reveals
```

Use easing consistently.

Potential interactions:

- arrow movement;
- understated text reveal;
- accordion expansion;
- carousel transition;
- navigation underline;
- button inversion.

Avoid:

- bouncing;
- elastic motion;
- cursor followers;
- aggressive parallax;
- auto-playing project slider;
- 3D transforms for decoration.

---

# 31. COMPONENT INVENTORY

Suggested reusable components:

```text
SiteHeader
MobileMenu
LanguageSwitcher

SectionLabel
Hairline
PrimaryButton
TextLink
AvailabilityIndicator

HeroSection

SelectedWork
ProjectSlide
ProjectControls

ServicesSection
ServiceRow

ProcessSection
ProcessStep

AboutSection
TechList

FAQSection
FAQItem

ContactSection
ContactForm
FormField
SelectField
TextareaField
FormStatus
WhatsAppLink

SiteFooter

CookieBanner
CookiePreferences

LegalPageLayout
```

Do not prematurely abstract tiny one-use markup.

Reusable components should exist because behavior/style is genuinely shared.

---

# 32. DATA / CONTENT ARCHITECTURE

Prefer typed data.

Example:

```text
data/
├── projects.ts
├── services.ts
├── process.ts
├── faq.ts
└── socials.ts
```

Localized strings may instead live in locale dictionaries.

Content and visual component logic should remain reasonably separated.

---

# 33. SUGGESTED SOURCE STRUCTURE

```text
src/
├── app/
│   ├── page.tsx
│   │
│   ├── [locale]/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── privacidad/
│   │   ├── cookies/
│   │   └── terminos/
│   │
│   ├── api/
│   │   └── contact/
│   │       └── route.ts
│   │
│   ├── sitemap.ts
│   └── robots.ts
│
├── components/
│   ├── layout/
│   ├── sections/
│   ├── ui/
│   ├── contact/
│   ├── consent/
│   └── legal/
│
├── content/
│
├── data/
│
├── lib/
│   ├── email/
│   ├── seo/
│   ├── validation/
│   ├── analytics/
│   └── consent/
│
├── styles/
│
└── types/
```

Exact directory names may evolve if there is a strong technical reason.

Preserve conceptual separation.

---

# 34. OUT OF SCOPE — V1

Do NOT build unless separately approved:

- admin dashboard;
- CRM;
- database for leads;
- blog;
- CMS;
- user accounts;
- authentication;
- ecommerce;
- online payments;
- appointment scheduling;
- live chat;
- AI chatbot;
- complex dark mode;
- separate service landing pages;
- complete case-study system;
- mobile application;
- fake portfolio entries.

Dark mode may be considered for V1.1.

---

# 35. REQUIRED CONTENT BEFORE PRODUCTION

The implementation may begin before these are available, but production launch requires:

- final Gmail recipient;
- WhatsApp number;
- LinkedIn URL;
- GitHub URL;
- final CV;
- Acevedo Pucci final screenshots;
- project description;
- project URL;
- approved pricing language;
- approved project-time estimates;
- final Spanish copy;
- final English copy;
- legal content;
- production domain.

---

# 36. IMPLEMENTATION ORDER

## Phase 1 — Foundation

1. Create Next.js project.
2. TypeScript strict configuration.
3. Tailwind.
4. Fonts.
5. design tokens.
6. global grid/container.
7. locale routing.
8. base SEO utilities.

## Phase 2 — Global UI

9. Header.
10. navigation.
11. buttons/links.
12. section labels.
13. footer shell.

## Phase 3 — Page Sections

14. SR / 01 Hero.
15. SR / 02 Selected Work.
16. SR / 03 Services.
17. SR / 04 Process.
18. SR / 05 About.
19. SR / 06 FAQ.
20. SR / 07 Contact.

## Phase 4 — Contact Backend

21. Zod schema.
22. `/api/contact`.
23. Nodemailer/Gmail.
24. honeypot.
25. rate protection.
26. success/error UX.

## Phase 5 — Conversion

27. WhatsApp links.
28. prefilled messages.
29. analytics events.
30. CTA tracking.

## Phase 6 — SEO

31. metadata.
32. canonical.
33. hreflang.
34. structured data.
35. sitemap.
36. robots.
37. social image.

## Phase 7 — Legal & Consent

38. privacy.
39. cookies.
40. terms.
41. cookie banner.
42. preference manager.
43. GA consent behavior.

## Phase 8 — QA

44. mobile.
45. tablet.
46. desktop.
47. keyboard.
48. screen-reader semantics.
49. reduced motion.
50. Lighthouse.
51. Core Web Vitals.
52. contact delivery test.
53. Gmail reply test.
54. cookie-consent test.
55. language-switch test.

## Phase 9 — Deployment

56. choose hosting.
57. configure environment variables.
58. connect domain.
59. Search Console.
60. GA4.
61. sitemap submission.
62. production smoke test.

---

# 37. DEFINITION OF DONE — V1

The project is ready for production when:

- `/es` and `/en` work;
- all 7 approved sections are implemented;
- visual direction matches Monochrome Precision;
- mobile experience is intentional;
- real projects are shown;
- no fabricated business data exists;
- contact form successfully reaches Gmail;
- Reply-To works;
- WhatsApp CTAs work;
- cookie preferences work;
- optional analytics respects consent requirements;
- privacy/cookies/terms pages exist;
- metadata is locale-specific;
- canonicals are correct;
- hreflang is correct;
- sitemap and robots exist;
- accessibility QA passes;
- performance targets are reasonably met;
- there are no major console errors;
- there are no broken links;
- secrets are not exposed;
- production domain uses HTTPS.

---

# 38. PRODUCT PRINCIPLE

When a future implementation decision is uncertain, prefer the solution that best satisfies this order:

**1. Client clarity**  
**2. Conversion**  
**3. Accessibility**  
**4. SEO**  
**5. Performance**  
**6. Maintainability**  
**7. Visual novelty**

Never sacrifice clarity or usability simply to make the portfolio look more technically impressive.

The site itself should demonstrate Samuel's positioning:

**Understand the real problem first. Then build the right solution.**