type ProcessStep = {
  number: string;
  title: string;
  scope: string;
  description: string;
  progress: string;
};

type ProcessSectionProps = {
  label: string;
  title: string;
  intro: string;
  count: string;
  steps: readonly ProcessStep[];
  conclusion: string;
  cta: string;
};

export function ProcessSection({ label, title, intro, count, steps, conclusion, cta }: ProcessSectionProps) {
  return (
    <section id="process" className="process-section" aria-labelledby="process-title">
      <div className="process-section__intro">
        <div><p className="section-label font-mono">{label}</p><h2 id="process-title">{title}</h2></div>
        <div><p>{intro}</p><p className="font-mono">[ {count} ]</p></div>
      </div>
      <ol className="process-steps">
        {steps.map((step) => (
          <li key={step.number}>
            <div className="process-steps__top font-mono"><span>.{step.number}</span><span>[ {step.progress} ]</span></div>
            <h3>{step.title}</h3>
            <p className="process-steps__scope font-mono">{step.scope}</p>
            <span className="process-steps__rule" aria-hidden="true" />
            <p className="process-steps__description">{step.description}</p>
          </li>
        ))}
      </ol>
      <div className="process-section__closing">
        <p><span className="font-mono" aria-hidden="true">■</span>{conclusion}</p>
        <a className="text-link font-mono" href="#contact">{cta} <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
