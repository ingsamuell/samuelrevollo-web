"use client";

import { useId, useState } from "react";

type FAQ = { question: string; answer: string };

type FAQSectionProps = {
  label: string;
  title: string;
  intro: string;
  count: string;
  support: string;
  items: readonly FAQ[];
};

export function FAQSection({ label, title, intro, count, support, items }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionId = useId();

  return (
    <section id="faq" className="faq-section" aria-labelledby="faq-title">
      <aside className="faq-section__intro">
        <p className="section-label font-mono">{label}</p>
        <h2 id="faq-title">{title}</h2>
        <p>{intro}</p>
        <span className="faq-section__count font-mono">■ [ {count} ]</span>
        <p className="faq-section__support font-mono">{support}</p>
      </aside>
      <div className="faq-list">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          const buttonId = `${sectionId}-button-${index}`;
          const panelId = `${sectionId}-panel-${index}`;
          return (
            <article className={isOpen ? "faq-item faq-item--open" : "faq-item"} key={item.question}>
              <h3>
                <button id={buttonId} type="button" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setOpenIndex((current) => current === index ? null : index)}>
                  <span className="faq-item__number font-mono">{String(index + 1).padStart(2, "0")}</span>
                  <span>{item.question}</span>
                  <span className="faq-item__symbol" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
              </h3>
              <div id={panelId} role="region" aria-labelledby={buttonId} className="faq-item__answer" hidden={!isOpen}>
                <p>{item.answer}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
