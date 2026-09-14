export type Dictionary = {
  role: string; skip: string; title: string; description: string;
  headline: readonly string[]; approach: string; services: readonly string[]; preview: string;
  navigation: { work: string; services: string; process: string; about: string; faq: string; contact: string; menu: string; closeMenu: string };
  hero: { availability: string; focus: string; protocol: string; primaryCta: string; secondaryCta: string };
  selectedWork: { sectionLabel: string; title: string; previous: string; next: string; previousImage: string; nextImage: string; projectReference: string; imagePending: string };
  serviceSection: {
    sectionLabel: string; title: string; intro: string; count: string;
    services: readonly { number: string; title: string; description: string }[];
    supplementary: { label: string; title: string; description: string }; cta: string;
  };
  processSection: {
    sectionLabel: string; title: string; intro: string; count: string;
    steps: readonly { number: string; title: string; scope: string; description: string; progress: string }[];
    conclusion: string; cta: string;
  };
  aboutSection: {
    sectionLabel: string; title: string; intro: string; quote: string; quoteCaption: string;
    origin: { label: string; title: string; body: string }; approach: { label: string; title: string; body: string };
    education: { label: string; title: string; detail: string; status: string }; stackLabel: string;
    technologies: readonly string[]; interest: string; cvPending: string;
  };
  faqSection: { sectionLabel: string; title: string; intro: string; count: string; support: string; items: readonly { question: string; answer: string }[] };
  contactSection: {
    sectionLabel: string; title: string; message: string; detail: string; availability: string; whatsappPending: string; whatsappCta: string;
    form: { formTitle: string; name: string; email: string; company: string; projectType: string; budget: string; message: string; namePlaceholder: string; emailPlaceholder: string; companyPlaceholder: string; messagePlaceholder: string; selectPlaceholder: string; projectOptions: readonly string[]; budgetOptions: readonly string[]; submit: string; sending: string; successNotice: string; errorNotice: string; privacyNotice: string; privacyLinkLabel: string; required: string };
  };
  footer: { linkedin: string; github: string; email: string; privacy: string; cookies: string; terms: string; preferences: string; pending: string };
};
export const es: Dictionary = {
  role: "Desarrollador web",
  skip: "Saltar al contenido",
  title: "Samuel Revollo — Desarrollo web a medida",
  description: "Desarrollo sitios y aplicaciones web a medida para empresas y profesionales que necesitan una presencia digital rápida, moderna y preparada para crecer.",
  headline: ["Primero entiendo", "tu negocio. Después", "construimos lo", "que necesita."],
  approach: "Cada solución se construye alrededor de las necesidades reales del negocio, sin añadir tecnología innecesaria.",
  services: ["Sitios web a medida", "Aplicaciones a medida", "Rediseño estratégico", "SEO técnico y rendimiento"],
  preview: "Vista de desarrollo · Etapa 01 / Base visual",
  navigation: { work: "Proyectos", services: "Servicios", process: "Proceso", about: "Sobre mí", faq: "FAQ", contact: "Hablemos", menu: "Menú", closeMenu: "Cerrar" },
  hero: { availability: "Disponible para nuevos proyectos", focus: "Enfoque", protocol: "Protocolo 01", primaryCta: "Cuéntame sobre tu proyecto", secondaryCta: "Ver proyectos" },
  selectedWork: { sectionLabel: "SR / 02", title: "Proyectos seleccionados", previous: "Proyecto anterior", next: "Proyecto siguiente", previousImage: "Captura anterior", nextImage: "Captura siguiente", projectReference: "Captura pendiente", imagePending: "Captura final del proyecto pendiente" },
  serviceSection: {
    sectionLabel: "SR / 03", title: "Servicios", intro: "Cada proyecto parte de una necesidad concreta del negocio. La tecnología se elige y se construye después.", count: "04 disciplinas principales",
    services: [
      { number: "01", title: "Sitios web a medida", description: "Sitios web rápidos, modernos y construidos alrededor de los objetivos reales de tu negocio. Una presencia digital sólida, profesional y preparada para evolucionar." },
      { number: "02", title: "Aplicaciones a medida", description: "Herramientas digitales desarrolladas alrededor de procesos, funcionalidades y necesidades específicas de cada proyecto, priorizando claridad y usabilidad." },
      { number: "03", title: "Rediseño estratégico", description: "Transformación de sitios existentes para mejorar su imagen, experiencia de usuario, rendimiento y capacidad de conversión sin perder el valor construido." },
      { number: "04", title: "SEO técnico y rendimiento", description: "Una base técnica sólida para buscadores, velocidad de carga, accesibilidad y crecimiento orgánico a largo plazo." },
    ],
    supplementary: { label: "Servicio complementario", title: "Hosting y dominios", description: "También puedo ayudarte con la configuración, migración y gestión técnica de hosting y dominios, o trabajar sobre la infraestructura que prefieras administrar directamente." },
    cta: "¿Tienes algo parecido en mente? Hablemos",
  },
  processSection: {
    sectionLabel: "SR / 04", title: "Proceso", intro: "Un proceso claro para convertir una necesidad de negocio en una solución digital bien construida, sin complejidades artificiales.", count: "04 etapas",
    steps: [
      { number: "01", title: "Entender", scope: "Negocio · objetivos · usuarios · problema", description: "Hablamos sobre tu negocio, las metas y las personas que usarán la solución antes de tomar decisiones de diseño o desarrollo.", progress: "01/04" },
      { number: "02", title: "Diseñar", scope: "Estructura · experiencia · contenido", description: "Definimos la arquitectura de información, el contenido y la experiencia con una intención clara, validando juntos las decisiones importantes.", progress: "02/04" },
      { number: "03", title: "Construir", scope: "Desarrollo · rendimiento · SEO", description: "Desarrollo una solución rápida, accesible y adaptable, con una base técnica limpia y preparada para crecer.", progress: "03/04" },
      { number: "04", title: "Mejorar", scope: "Lanzamiento · medir · iterar", description: "Después del lanzamiento, el proyecto queda preparado para evaluar, aprender y evolucionar de acuerdo con las necesidades reales.", progress: "04/04" },
    ],
    conclusion: "Trabajamos juntos en las decisiones importantes.", cta: "Iniciar una conversación",
  },
  aboutSection: {
    sectionLabel: "SR / 05", title: "Sobre mí", intro: "Tecnología con contexto. Entender el problema antes de proponer una solución.", quote: "Llegan al final los que más resisten, no los más inteligentes.", quoteCaption: "Constancia, resiliencia y disciplina continua.",
    origin: { label: "Origen y trayectoria", title: "El origen práctico", body: "Comencé a aprender desarrollo web para ayudar a hacer crecer negocios familiares. Allí encontré la intersección entre tecnología, diseño y resolución de problemas reales." },
    approach: { label: "Metodología y criterio", title: "El negocio primero", body: "La experiencia en atención al cliente y ventas me enseñó a escuchar, entender cómo opera cada negocio y proponer una solución que responda a sus necesidades reales." },
    education: { label: "Formación académica", title: "Ingeniería en Sistemas", detail: "Universidad Santa María", status: "7mo semestre" },
    stackLabel: "Tecnologías y herramientas", technologies: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Git", "GitHub", "Vercel"], interest: "Interés futuro: desarrollo móvil, ingeniería de control y procesos industriales.", cvPending: "CV disponible próximamente",
  },
  faqSection: {
    sectionLabel: "SR / 06", title: "Preguntas frecuentes", intro: "Respuestas claras a las dudas más habituales antes de iniciar un proyecto digital.", count: "08 preguntas", support: "¿Tienes una duda específica? Podemos resolverla en una primera conversación.",
    items: [
      { question: "¿Cuánto cuesta desarrollar una página web?", answer: "El costo depende del objetivo, el alcance, el contenido, las integraciones y el nivel de personalización necesario. Primero entendemos qué debe resolver el sitio y luego definimos una propuesta clara y ajustada al proyecto." },
      { question: "¿Cuánto tarda en desarrollarse una página web?", answer: "El tiempo depende de la complejidad, la disponibilidad de contenido y las decisiones que haya que validar. Antes de comenzar definimos etapas y un calendario realista para que el proceso sea claro." },
      { question: "¿Qué incluye el desarrollo de una página web?", answer: "Cada proyecto se define según sus necesidades. Puede incluir estructura, experiencia de usuario, desarrollo, adaptación a móviles, rendimiento, bases de SEO técnico y preparación para publicar." },
      { question: "¿El desarrollo incluye SEO?", answer: "El desarrollo contempla una base de SEO técnico: estructura semántica, metadatos, rendimiento, indexabilidad y adaptación a dispositivos móviles. Una estrategia continua de posicionamiento se evalúa según cada caso." },
      { question: "¿Es mejor rediseñar mi página actual o crear una nueva?", answer: "Depende del estado del sitio y del problema que necesites resolver. Revisamos qué elementos conservan valor y si una mejora gradual o una nueva base ofrece mejores resultados." },
      { question: "¿Necesito una página web a medida o puedo usar una solución existente?", answer: "No todos los casos necesitan una solución a medida. La decisión depende de tus procesos, objetivos, presupuesto y del nivel de flexibilidad que realmente necesitas." },
      { question: "¿Puedo gestionar yo mismo el dominio y el hosting?", answer: "Sí. Puedo ayudarte a configurar o migrar la infraestructura y dejarla bajo tu gestión, o acompañarte en la parte técnica cuando la necesites." },
      { question: "¿Trabajas con clientes de otros países?", answer: "Sí. El proceso puede realizarse de forma remota con una comunicación clara, revisiones acordadas y decisiones documentadas durante el proyecto." },
    ],
  },
  contactSection: {
    sectionLabel: "SR / 07", title: "Trabajemos juntos", message: "No necesitas tener toda la solución definida antes de escribir.", detail: "Cuéntame sobre tu negocio, el problema que quieres resolver o la idea que tienes en mente. Podemos empezar desde ahí.", availability: "Disponible para nuevos proyectos", whatsappPending: "WhatsApp se habilitará al configurar el canal de contacto.", whatsappCta: "Hablar por WhatsApp",
    form: {
      formTitle: "Especificaciones de la solicitud", name: "Nombre", email: "Email", company: "Empresa / proyecto", projectType: "¿Qué necesitas?", budget: "Presupuesto aproximado", message: "Cuéntame sobre tu proyecto", namePlaceholder: "Tu nombre", emailPlaceholder: "tu@email.com", companyPlaceholder: "Nombre de tu empresa o proyecto", messagePlaceholder: "¿Qué quieres construir o mejorar? Cuéntame un poco sobre tu negocio y qué necesitas resolver.", selectPlaceholder: "Selecciona una opción", projectOptions: ["Nueva página web", "Rediseño de sitio web", "Aplicación web", "SEO / Performance", "Otro"], budgetOptions: ["Prefiero conversarlo", "Por definir (temporal)"], submit: "Enviar proyecto", sending: "Enviando…", successNotice: "Mensaje enviado. Te responderé lo antes posible.", errorNotice: "No fue posible enviar el mensaje. Inténtalo de nuevo o escríbeme por email.", privacyNotice: "Al enviar, confirmas que has leído la", privacyLinkLabel: "Política de privacidad", required: "*",
    },
  },
  footer: { linkedin: "LinkedIn", github: "GitHub", email: "Email", privacy: "Privacidad", cookies: "Cookies", terms: "Términos", preferences: "Preferencias de cookies", pending: "por configurar" },
};
