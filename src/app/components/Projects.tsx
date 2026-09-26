import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { projects, type Project } from "../data/portfolio";

type ProjectAction = { onSelect: (project: Project) => void };

function ProjectCard({
  project,
  onSelect,
  variant,
}: ProjectAction & { project: Project; variant: "web" | "mobile" }) {
  return (
    <article className={`project-card ${variant}-card project-${project.id}`}>
      <button
        className="project-preview"
        type="button"
        onClick={() => onSelect(project)}
        aria-label={`Explorar ${project.name}`}
      >
        <span className="project-kind">{project.type}</span>
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          decoding="async"
          width="1500"
          height="1125"
        />
        <span className="preview-arrow" aria-hidden="true">
          <ArrowUpRight size={19} />
        </span>
      </button>
      <div className="project-copy">
        <span className="project-category">
          {project.category} <span aria-hidden="true">/</span> {project.role}
        </span>
        <h3>
          <button type="button" onClick={() => onSelect(project)}>
            {project.name}
          </button>
        </h3>
        <p>{project.summary}</p>
        <button
          className="project-link"
          type="button"
          onClick={() => onSelect(project)}
        >
          Explorar proyecto <ArrowUpRight size={15} />
        </button>
      </div>
    </article>
  );
}

export function WebProjects({ onSelect }: ProjectAction) {
  const track = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(0);
  const [atEnd, setAtEnd] = useState(false);

  const move = (direction: number) => {
    const rail = track.current;
    if (!rail) return;
    const card = rail.firstElementChild as HTMLElement;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    rail.scrollBy({
      left:
        direction *
        (card.offsetWidth + parseFloat(getComputedStyle(rail).columnGap)),
      behavior: reducedMotion ? "instant" : "smooth",
    });
  };

  const updatePosition = () => {
    const rail = track.current;
    if (!rail) return;
    setPosition(rail.scrollLeft);
    setAtEnd(rail.scrollLeft >= rail.scrollWidth - rail.clientWidth - 4);
  };

  useEffect(() => {
    const rail = track.current;
    if (!rail) return;
    updatePosition();
    const observer = new ResizeObserver(updatePosition);
    observer.observe(rail);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="web-projects section-tint"
      id="proyectos"
      aria-labelledby="projects-title"
    >
      <div className="web-layout content-width">
        <div className="section-intro reveal">
          <span className="eyebrow">Trabajo seleccionado · 01 — 11</span>
          <h2 id="projects-title">
            Cada proyecto,
            <br />
            un nuevo punto
            <br />
            de partida.
          </h2>
          <p>
            Contextos distintos. Una misma intención: convertir ideas en
            experiencias claras y útiles.
          </p>
          <div
            className="carousel-controls"
            aria-label="Controles de proyectos web"
          >
            <button
              type="button"
              onClick={() => move(-1)}
              disabled={position < 4}
              aria-label="Ver proyecto anterior"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => move(1)}
              disabled={atEnd}
              aria-label="Ver siguiente proyecto"
            >
              <ArrowRight size={18} />
            </button>
            <span>Desliza para explorar</span>
          </div>
        </div>
        <div
          className="project-rail"
          ref={track}
          onScroll={updatePosition}
          aria-label="Proyectos de diseño web"
          tabIndex={0}
        >
          {projects.slice(0, 11).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={onSelect}
              variant="web"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function MobileProjects({ onSelect }: ProjectAction) {
  return (
    <section
      className="mobile-projects section-space content-width"
      aria-labelledby="mobile-title"
    >
      <div className="section-heading centered reveal">
        <span className="eyebrow">Experiencias móviles · 12 — 14</span>
        <h2 id="mobile-title">
          Diseño para lo
          <br />
          que pasa cada día.
        </h2>
        <p>
          Propuestas que acercan el cuidado, el bienestar
          <br className="desktop-break" /> y nuestra cultura a la palma de la
          mano.
        </p>
      </div>
      <div className="mobile-project-grid">
        {projects.slice(11).map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={onSelect}
            variant="mobile"
          />
        ))}
      </div>
    </section>
  );
}

export function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [closing, setClosing] = useState(false);
  const requestClose = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      onClose();
    else setClosing(true);
  };

  useEffect(() => {
    if (!closing) return;
    const timeout = window.setTimeout(() => {
      setClosing(false);
      onClose();
    }, 240);
    return () => window.clearTimeout(timeout);
  }, [closing, onClose]);

  useEffect(() => {
    const element = dialog.current;
    if (project && element && !element.open) {
      element.showModal();
      element.scrollTop = 0;
    }
    if (!project && element?.open) element.close();
    if (!project) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [project]);

  return (
    <dialog
      ref={dialog}
      className={`project-dialog ${closing ? "is-closing" : ""}`}
      aria-labelledby="dialog-title"
      onClose={onClose}
      onCancel={(event) => {
        event.preventDefault();
        requestClose();
      }}
      onClick={(event) => {
        if (event.target !== dialog.current) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (
          event.clientX < rect.left ||
          event.clientX > rect.right ||
          event.clientY < rect.top ||
          event.clientY > rect.bottom
        )
          requestClose();
      }}
    >
      {project && (
        <div className="dialog-content">
          <div className="dialog-header">
            <span className="eyebrow">Proyecto seleccionado</span>
            <button
              type="button"
              onClick={requestClose}
              aria-label="Cerrar proyecto"
              autoFocus
            >
              <X size={22} />
            </button>
          </div>
          <div className={`dialog-visual project-${project.id}`}>
            <img src={project.image} alt={project.alt} />
          </div>
          <div className="dialog-description">
            <h2 id="dialog-title">{project.name}</h2>
            <dl>
              <div>
                <dt>Disciplina</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>Sector</dt>
                <dd>{project.category}</dd>
              </div>
              <div>
                <dt>Formato</dt>
                <dd>{project.type}</dd>
              </div>
              {project.year && (
                <div>
                  <dt>Año</dt>
                  <dd>{project.year}</dd>
                </div>
              )}
            </dl>
            <p>{project.description}</p>
            {project.url && (
              <a
                href={project.url}
                className="button button-dark"
                target="_blank"
                rel="noreferrer"
              >
                Visitar sitio web <ArrowUpRight size={17} />
              </a>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
}
