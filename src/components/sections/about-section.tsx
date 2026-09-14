type AboutSectionProps = {
  label: string;
  title: string;
  intro: string;
  quote: string;
  quoteCaption: string;
  origin: { label: string; title: string; body: string };
  approach: { label: string; title: string; body: string };
  education: { label: string; title: string; detail: string; status: string };
  stackLabel: string;
  technologies: readonly string[];
  interest: string;
  cvPending: string;
};

export function AboutSection({ label, title, intro, quote, quoteCaption, origin, approach, education, stackLabel, technologies, interest, cvPending }: AboutSectionProps) {
  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="about-section__intro">
        <div><p className="section-label font-mono">{label}</p><h2 id="about-title">{title}</h2></div>
        <p>{intro}</p>
      </div>
      <div className="about-section__grid">
        <aside className="about-quote">
          <p className="about-quote__text">“{quote}”</p>
          <p className="about-quote__caption font-mono">{quoteCaption}</p>
          <div className="about-interest"><p className="font-mono">{interest}</p></div>
          <span className="about-cv font-mono" aria-label={cvPending}>{cvPending}</span>
        </aside>
        <div className="about-details">
          <article className="about-detail"><div className="about-detail__label font-mono"><span>01 / {origin.label}</span></div><h3>{origin.title}</h3><p>{origin.body}</p></article>
          <article className="about-detail"><div className="about-detail__label font-mono"><span>02 / {approach.label}</span></div><h3>{approach.title}</h3><p>{approach.body}</p></article>
          <article className="about-education"><div className="about-detail__label font-mono"><span>03 / {education.label}</span></div><div><p className="font-mono">{education.label}</p><h3>{education.title}</h3><p>{education.detail}</p></div><span className="font-mono">{education.status}</span></article>
          <div className="about-stack"><p className="font-mono">04 / {stackLabel}</p><ul>{technologies.map((technology) => <li className="font-mono" key={technology}>{technology}</li>)}</ul></div>
        </div>
      </div>
    </section>
  );
}
