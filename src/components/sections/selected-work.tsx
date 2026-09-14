"use client";

import Image from "next/image";
import { useEffect, useState, type SyntheticEvent } from "react";
import type { Project } from "@/data/projects";
import type { Locale } from "@/lib/i18n";

type SelectedWorkProps = {
  locale: Locale;
  projects: readonly Project[];
  labels: {
    sectionLabel: string;
    title: string;
    previous: string;
    next: string;
    previousImage: string;
    nextImage: string;
    projectReference: string;
    imagePending: string;
  };
};

const GALLERY_INTERVAL_MS = 5000;
type ImageOrientation = "landscape" | "portrait";

export function SelectedWork({ locale, projects, labels }: SelectedWorkProps) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [imageOrientations, setImageOrientations] = useState<Record<string, ImageOrientation>>({});
  const [isGalleryPaused, setIsGalleryPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const activeProject = projects[activeProjectIndex];
  const images = activeProject?.images ?? [];
  const activeImage = images[activeImageIndex];
  const imageOrientation = activeImage ? imageOrientations[activeImage.src] ?? "landscape" : "landscape";
  const totalProjects = projects.length;

  useEffect(() => {
    if (images.length < 2 || isGalleryPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const intervalId = window.setInterval(() => {
      setActiveImageIndex((current) => (current + 1) % images.length);
    }, GALLERY_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [images.length, isGalleryPaused]);

  function moveProject(direction: 1 | -1) {
    setActiveProjectIndex((current) => (current + direction + totalProjects) % totalProjects);
    setActiveImageIndex(0);
  }

  function moveImage(direction: 1 | -1) {
    if (images.length < 2) return;
    setActiveImageIndex((current) => (current + direction + images.length) % images.length);
  }

  function onTouchEnd(touchEnd: number) {
    if (touchStart === null || Math.abs(touchStart - touchEnd) < 50) return;
    moveImage(touchStart > touchEnd ? 1 : -1);
    setTouchStart(null);
  }

  function setRatioFromImage(event: SyntheticEvent<HTMLImageElement>) {
    const { naturalHeight, naturalWidth } = event.currentTarget;
    if (!naturalWidth || !naturalHeight || !activeImage) return;
    const orientation: ImageOrientation = naturalHeight > naturalWidth ? "portrait" : "landscape";
    setImageOrientations((current) => current[activeImage.src] === orientation ? current : { ...current, [activeImage.src]: orientation });
  }

  if (!activeProject) return null;

  return (
    <section id="work" className="selected-work" aria-labelledby="work-title">
      <div className="section-heading">
        <div><p className="section-label font-mono">{labels.sectionLabel}</p><h2 id="work-title">{labels.title}</h2></div>
        {totalProjects > 1 ? <div className="project-controls">
          <p className="font-mono">{String(activeProjectIndex + 1).padStart(2, "0")} <span>/ {String(totalProjects).padStart(2, "0")}</span></p>
          <div>
            <button type="button" aria-label={labels.previous} onClick={() => moveProject(-1)}>←</button>
            <button type="button" aria-label={labels.next} onClick={() => moveProject(1)}>→</button>
          </div>
        </div> : null}
      </div>
      <article className="project-slide" onTouchStart={(event) => setTouchStart(event.touches[0]?.clientX ?? null)} onTouchEnd={(event) => onTouchEnd(event.changedTouches[0]?.clientX ?? 0)}>
        <div className="project-slide__meta font-mono"><span>{String(activeProjectIndex + 1).padStart(2, "0")} / {activeProject.year[locale]}</span><span>{activeProject.services.join(" · ")}</span></div>
        <div
          className={activeImage ? `project-slide__image project-slide__image--${imageOrientation}` : "project-slide__image project-slide__image--pending"}
          onMouseEnter={() => setIsGalleryPaused(true)}
          onMouseLeave={() => setIsGalleryPaused(false)}
          onFocusCapture={() => setIsGalleryPaused(true)}
          onBlurCapture={() => setIsGalleryPaused(false)}
        >
          {activeImage ? <>
            <Image key={activeImage.src} src={activeImage.src} alt={activeImage.alt[locale]} fill sizes="(max-width: 767px) calc(100vw - 40px), 70vw" onLoad={setRatioFromImage} />
            {images.length > 1 ? <div className="project-gallery__toolbar">
              <p className="font-mono">{activeImage.label[locale]} <span>{String(activeImageIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}</span></p>
              <div>
                <button type="button" aria-label={labels.previousImage} onClick={() => moveImage(-1)}>←</button>
                <button type="button" aria-label={labels.nextImage} onClick={() => moveImage(1)}>→</button>
              </div>
            </div> : null}
          </> : <p className="font-mono">{labels.imagePending}</p>}
        </div>
        <div className="project-slide__content">
          <div><p className="project-slide__reference font-mono">{labels.projectReference}</p><h3>{activeProject.name}</h3><p>{activeProject.description[locale]}</p></div>
          {activeProject.url ? <a className="text-link font-mono" href={activeProject.url} target="_blank" rel="noreferrer">{activeProject.url} <span aria-hidden="true">↗</span></a> : null}
        </div>
      </article>
    </section>
  );
}
