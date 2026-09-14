"use client";

import { useState } from "react";
import Link from "next/link";

type FormLabels = {
  formTitle: string;
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  companyPlaceholder: string;
  messagePlaceholder: string;
  selectPlaceholder: string;
  projectOptions: readonly string[];
  budgetOptions: readonly string[];
  submit: string;
  sending: string;
  successNotice: string;
  errorNotice: string;
  privacyNotice: string;
  privacyLinkLabel: string;
  required: string;
};

export function ContactForm({ labels, privacyHref }: { labels: FormLabels; privacyHref: string }) {
  const [notice, setNotice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setIsSubmitting(true);
    setNotice("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });

      if (!response.ok) throw new Error("Contact request failed");
      form.reset();
      setNotice(labels.successNotice);
    } catch {
      setNotice(labels.errorNotice);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate>
      <h3>{labels.formTitle}</h3>
      <div className="contact-form__grid">
        <label><span className="font-mono">01 / {labels.name} {labels.required}</span><input name="name" autoComplete="name" required placeholder={labels.namePlaceholder} /></label>
        <label><span className="font-mono">02 / {labels.email} {labels.required}</span><input name="email" autoComplete="email" type="email" required placeholder={labels.emailPlaceholder} /></label>
        <label className="contact-form__full"><span className="font-mono">03 / {labels.company}</span><input name="company" autoComplete="organization" placeholder={labels.companyPlaceholder} /></label>
        <label><span className="font-mono">04 / {labels.projectType} {labels.required}</span><select name="projectType" required defaultValue=""><option value="" disabled>{labels.selectPlaceholder}</option>{labels.projectOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label><span className="font-mono">05 / {labels.budget}</span><select name="budget" defaultValue=""><option value="" disabled>{labels.selectPlaceholder}</option>{labels.budgetOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
        <label className="contact-form__full"><span className="font-mono">06 / {labels.message} {labels.required}</span><textarea name="message" required rows={6} placeholder={labels.messagePlaceholder} /></label>
      </div>
      <input className="contact-form__honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <div className="contact-form__footer"><button className="button button--primary font-mono" type="submit" disabled={isSubmitting}>{isSubmitting ? labels.sending : labels.submit} <span aria-hidden="true">↗</span></button>{notice ? <p role="status">{notice}</p> : <p className="contact-form__privacy">{labels.privacyNotice} <Link href={privacyHref}>{labels.privacyLinkLabel}</Link>.</p>}</div>
    </form>
  );
}
