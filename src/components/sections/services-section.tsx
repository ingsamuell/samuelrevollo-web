type Service = {
  number: string;
  title: string;
  description: string;
};

type ServicesSectionProps = {
  label: string;
  title: string;
  intro: string;
  count: string;
  services: readonly Service[];
  supplementary: { label: string; title: string; description: string };
  cta: string;
};

export function ServicesSection({ label, title, intro, count, services, supplementary, cta }: ServicesSectionProps) {
  return (
    <section id="services" className="services-section" aria-labelledby="services-title">
      <div className="services-section__intro">
        <div><p className="section-label font-mono">{label}</p><h2 id="services-title">{title}</h2></div>
        <div><p>{intro}</p><p className="font-mono">[ {count} ]</p></div>
      </div>
      <ol className="services-list">
        {services.map((service) => (
          <li key={service.number}>
            <p className="services-list__number font-mono">.{service.number}</p>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span aria-hidden="true">↗</span>
          </li>
        ))}
      </ol>
      <div className="supplementary-service">
        <div><p className="font-mono">■ {supplementary.label}</p><p className="font-mono">{supplementary.title}</p></div>
        <p>{supplementary.description}</p>
        <a className="text-link font-mono" href="#contact">{cta} <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
