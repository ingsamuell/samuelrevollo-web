import type { Dictionary } from "./es";
export const en: Dictionary = {
  role: "Web developer",
  skip: "Skip to content",
  title: "Samuel Revollo — Custom web development",
  description: "I build custom websites and web applications for businesses and professionals who need a fast, modern digital presence with room to grow.",
  headline: ["Your business", "comes first.", "Then we build", "what it needs."],
  approach: "Every solution starts with what your business actually needs, without adding unnecessary technology.",
  services: ["Custom websites", "Custom applications", "Strategic redesign", "Technical SEO & performance"],
  preview: "Development preview · Stage 01 / Visual foundation",
  navigation: { work: "Work", services: "Services", process: "Process", about: "About", faq: "FAQ", contact: "Let's talk", menu: "Menu", closeMenu: "Close" },
  hero: { availability: "Available for new projects", focus: "Approach", protocol: "Protocol 01", primaryCta: "Tell me about your project", secondaryCta: "View work" },
  selectedWork: { sectionLabel: "SR / 02", title: "Selected work", previous: "Previous project", next: "Next project", previousImage: "Previous screenshot", nextImage: "Next screenshot", projectReference: "Screenshot pending", imagePending: "Final project screenshot pending" },
  serviceSection: {
    sectionLabel: "SR / 03", title: "Services", intro: "Every project starts with a specific business need. Technology is chosen and built afterwards.", count: "04 core services",
    services: [
      { number: "01", title: "Custom websites", description: "Fast, modern websites built around your business goals: a strong professional presence ready to evolve." },
      { number: "02", title: "Custom applications", description: "Digital tools built around each project's processes, functionality, and specific needs, with clarity and usability as priorities." },
      { number: "03", title: "Strategic redesign", description: "Transforming existing websites to improve their image, user experience, performance, and ability to convert without losing the value already built." },
      { number: "04", title: "Technical SEO & performance", description: "A solid technical foundation for search engines, loading speed, accessibility, and long-term organic growth." },
    ],
    supplementary: { label: "Additional service", title: "Hosting & domains", description: "I can also help with the technical setup, migration, and management of hosting and domains, or work with infrastructure you prefer to manage directly." },
    cta: "Have something similar in mind? Let's talk",
  },
  processSection: {
    sectionLabel: "SR / 04", title: "Process", intro: "A clear process for turning a business need into a well-built digital solution, without artificial complexity.", count: "04 stages",
    steps: [
      { number: "01", title: "Understand", scope: "Business · goals · users · problem", description: "We discuss your business, goals, and the people who will use the solution before making design or development decisions.", progress: "01/04" },
      { number: "02", title: "Design", scope: "Structure · experience · content", description: "We define information architecture, content, and experience with a clear purpose, making the important decisions together.", progress: "02/04" },
      { number: "03", title: "Build", scope: "Development · performance · SEO", description: "I build a fast, accessible, adaptable solution with a clean technical foundation that is ready to grow.", progress: "03/04" },
      { number: "04", title: "Improve", scope: "Launch · measure · iterate", description: "After launch, the project is ready to be evaluated, refined, and evolved around real needs.", progress: "04/04" },
    ],
    conclusion: "We work together on the decisions that matter.", cta: "Start a conversation",
  },
  aboutSection: {
    sectionLabel: "SR / 05", title: "About", intro: "Technology with context. Understanding the problem before proposing a solution.", quote: "Those who endure reach the end, not those who are the most intelligent.", quoteCaption: "Consistency, resilience, and ongoing discipline.",
    origin: { label: "Origin and path", title: "A practical beginning", body: "I started learning web development to help family businesses grow. There I found the intersection of technology, design, and solving real problems." },
    approach: { label: "Method and judgment", title: "Business first", body: "Customer service and sales experience taught me to listen, understand how each business operates, and propose a solution that responds to its real needs." },
    education: { label: "Academic background", title: "Systems Engineering", detail: "Universidad Santa María", status: "7th semester" },
    stackLabel: "Technology and tools", technologies: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Git", "GitHub", "Vercel"], interest: "Future interests: mobile development, control engineering, and industrial processes.", cvPending: "CV coming soon",
  },
  faqSection: {
    sectionLabel: "SR / 06", title: "Frequently asked questions", intro: "Clear answers to common questions before starting a digital project.", count: "08 questions", support: "Have a specific question? We can address it in an initial conversation.",
    items: [
      { question: "How much does a website cost?", answer: "Cost depends on the goal, scope, content, integrations, and level of customization needed. We first understand what the site needs to solve, then define a clear proposal tailored to the project." },
      { question: "How long does it take to build a website?", answer: "Timing depends on complexity, content availability, and the decisions that need validation. Before we start, we define stages and a realistic timeline so the process is clear." },
      { question: "What does website development include?", answer: "Each project is defined around its needs. It can include structure, user experience, development, mobile adaptation, performance, technical SEO foundations, and launch preparation." },
      { question: "Does development include SEO?", answer: "Development includes a technical SEO foundation: semantic structure, metadata, performance, indexability, and mobile adaptation. An ongoing search strategy is assessed for each case." },
      { question: "Should I redesign my current site or create a new one?", answer: "It depends on the site's current condition and the problem you need to solve. We assess what retains value and whether a gradual improvement or a new foundation will deliver better results." },
      { question: "Do I need a custom website or can I use an existing solution?", answer: "Not every case needs a custom solution. The decision depends on your processes, goals, budget, and the level of flexibility you actually need." },
      { question: "Can I manage the domain and hosting myself?", answer: "Yes. I can help configure or migrate the infrastructure and leave it under your management, or support you with the technical side when needed." },
      { question: "Do you work with clients in other countries?", answer: "Yes. The process can happen remotely with clear communication, agreed reviews, and documented decisions throughout the project." },
    ],
  },
  contactSection: {
    sectionLabel: "SR / 07", title: "Let's work together", message: "You do not need to have the whole solution defined before writing.", detail: "Tell me about your business, the problem you want to solve, or the idea you have in mind. We can start there.", availability: "Available for new projects", whatsappPending: "WhatsApp will be enabled when the contact channel is configured.", whatsappCta: "Chat on WhatsApp",
    form: {
      formTitle: "Request details", name: "Name", email: "Email", company: "Company / project", projectType: "What do you need?", budget: "Approximate budget", message: "Tell me about your project", namePlaceholder: "Your name", emailPlaceholder: "you@email.com", companyPlaceholder: "Your company or project name", messagePlaceholder: "What would you like to build or improve? Tell me about your business and what you need to solve.", selectPlaceholder: "Select an option", projectOptions: ["New website", "Website redesign", "Web application", "SEO / Performance", "Other"], budgetOptions: ["I'd rather discuss it", "To be defined (temporary)"], submit: "Send project", sending: "Sending…", successNotice: "Message sent. I will get back to you as soon as possible.", errorNotice: "The message could not be sent. Please try again or email me directly.", privacyNotice: "By submitting, you confirm that you have read the", privacyLinkLabel: "Privacy policy", required: "*",
    },
  },
  footer: { linkedin: "LinkedIn", github: "GitHub", email: "Email", privacy: "Privacy", cookies: "Cookies", terms: "Terms", preferences: "Cookie preferences", pending: "to be configured" },
};
