import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { profile } from "../data/portfolio";

export function Navigation({
  onAbout,
  onHome,
}: {
  onAbout: () => void;
  onHome: () => void;
}) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [open]);

  return (
    <header className="floating-header">
      <div className="nav-pill">
        <a
          href="#inicio"
          className="monogram"
          aria-label="Diego Méndez, inicio"
          onClick={() => {
            setOpen(false);
            onHome();
          }}
        >
          d<span>m</span>
        </a>
        <nav
          id="primary-navigation"
          className={`navigation ${open ? "is-open" : ""}`}
          aria-label="Navegación principal"
        >
          <a href="#proyectos" onClick={() => setOpen(false)}>
            Proyectos
          </a>
          <a
            href="#inicio"
            onClick={(event) => {
              event.preventDefault();
              setOpen(false);
              onAbout();
            }}
          >
            Sobre mí
          </a>
          <a href="#trayectoria" onClick={() => setOpen(false)}>
            Trayectoria
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            LinkedIn <ArrowUpRight size={11} />
          </a>
        </nav>
        <a
          href={profile.whatsapp}
          className="nav-contact"
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          Hablemos <ArrowUpRight size={13} />
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
}
