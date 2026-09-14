type HeroSectionProps = {
  label: string;
  role: string;
  headline: readonly string[];
  description: string;
  approach: string;
  services: readonly string[];
  labels: { availability: string; focus: string; protocol: string; primaryCta: string; secondaryCta: string };
};

export function HeroSection({ label, role, headline, description, approach, services, labels }: HeroSectionProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__meta font-mono">
        <span>{label}</span><span className="hero__meta-rule" aria-hidden="true" /><span>Samuel Revollo — {role}</span>
        <span className="availability"><span aria-hidden="true" />{labels.availability}</span>
      </div>
      <div className="hero__editorial-grid">
        <div className="hero__content">
          <p className="hero__eyebrow font-mono">{role} / {labels.protocol}</p>
          <h1 id="hero-title">{headline.map((line) => <span key={line}>{line}</span>)}</h1>
          <p className="hero__description">{description}</p>
          <div className="hero__actions">
            <a className="button button--primary font-mono" href="#contact">{labels.primaryCta} <span aria-hidden="true">→</span></a>
            <a className="button button--secondary font-mono" href="#work">{labels.secondaryCta} <span aria-hidden="true">↓</span></a>
          </div>
          <aside className="hero__approach" aria-label={labels.focus}>
            <p className="font-mono">{labels.focus}</p><p>{approach}</p>
          </aside>
        </div>
        <div className="hero__collage" aria-hidden="true">
          <div className="hero__collage-photo">
            <Image
              src="/images/hero/samue-revollo-hero.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1000px) 48vw, 52vw"
            />
          </div>
          <div className="hero__collage-browser"><span /><span /><span /></div>
          <div className="hero__collage-note" />
        </div>
      </div>
      <ul className="service-strip font-mono">{services.map((service, index) => <li key={service}><span>.0{index + 1}</span>{service}</li>)}</ul>
    </section>
  );
}
import Image from "next/image";
