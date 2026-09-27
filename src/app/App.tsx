import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Component,
  Fingerprint,
  MapPin,
  MousePointer2,
  ScanLine,
  Sparkles,
} from "lucide-react";
import { Navigation } from "./components/Navigation";
import {
  MobileProjects,
  ProjectDialog,
  WebProjects,
} from "./components/Projects";
import {
  designEducation,
  profile,
  technicalEducation,
  type Project,
} from "./data/portfolio";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

const principles = [
  {
    icon: Fingerprint,
    title: "Personas primero",
    text: "Entender las necesidades para diseñar con un propósito claro.",
  },
  {
    icon: ScanLine,
    title: "Claridad visual",
    text: "Interfaces que se entienden y hacen más simple cada interacción.",
  },
  {
    icon: MousePointer2,
    title: "Ideas en movimiento",
    text: "Prototipos que permiten explorar, probar y dar forma a una idea.",
  },
  {
    icon: Code2,
    title: "Diseño + desarrollo",
    text: "Una mirada que conecta la experiencia con lo que la hace posible.",
  },
];

function Hero({
  aboutMode,
  onAbout,
  onHome,
}: {
  aboutMode: boolean;
  onAbout: () => void;
  onHome: () => void;
}) {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <img
        className="hero-photograph"
        src={profile.heroImage}
        alt=""
        fetchPriority="high"
        width="2200"
        height="2933"
      />
      <div className="hero-shade" aria-hidden="true" />
      <div className="hero-copy">
        <span className="hero-identity">
          <span />{" "}
          {aboutMode
            ? "Sobre mí · Lima, Perú"
            : "Diego Méndez · UX/UI Designer"}
        </span>
        <h1 id="hero-title">
          {aboutMode ? "Acerca de Mí" : "Diseño que conecta."}
          {!aboutMode && (
            <>
              <br />
              Experiencias que fluyen.
            </>
          )}
        </h1>
        {aboutMode ? (
          <>
            <p className="hero-about-lead">
              Transformo ideas en productos funcionales, intuitivos y centrados
              en las personas.
            </p>
            <p>
              Soy un diseñador apasionado por crear experiencias digitales que
              no solo se vean bien, sino que realmente funcionen. Me enfoco en
              entender las necesidades de los usuarios para diseñar soluciones
              claras, accesibles y eficientes.
            </p>
          </>
        ) : (
          <p>
            Transformo ideas en experiencias digitales
            <br className="desktop-break" /> que las personas puedan usar y
            disfrutar.
          </p>
        )}
        <div className="hero-actions">
          {aboutMode ? (
            <>
              <a href="#trayectoria" className="button button-white">
                Conoce mi trayectoria <ArrowUpRight size={16} />
              </a>
              <a
                href="#inicio"
                className="button button-glass"
                onClick={(event) => {
                  event.preventDefault();
                  onHome();
                }}
              >
                Volver al inicio
              </a>
            </>
          ) : (
            <>
              <a href="#proyectos" className="button button-white">
                Ver proyectos <ArrowUpRight size={16} />
              </a>
              <a
                href="#inicio"
                className="button button-glass"
                onClick={(event) => {
                  event.preventDefault();
                  onAbout();
                }}
              >
                Conoce mi enfoque
              </a>
            </>
          )}
        </div>
      </div>
      <div className="hero-location">
        <MapPin size={12} /> Desde Lima, Perú
      </div>
      <a
        href="#enfoque"
        className="hero-scroll"
        aria-label="Descubrir mi enfoque"
      >
        <ArrowDown size={17} />
      </a>
      <div className="hero-fade" aria-hidden="true" />
    </section>
  );
}

function Introduction() {
  return (
    <section
      className="introduction content-width"
      id="enfoque"
      aria-labelledby="intro-title"
    >
      <div className="section-heading centered reveal">
        <span className="eyebrow">Menos fricción. Más conexión.</span>
        <h2 id="intro-title">
          Bien pensado.
          <br />
          Fácil de sentir.
        </h2>
        <p>
          Diseño UX/UI, web y prototipado.
          <br />
          De la intención a una experiencia que funciona.
        </p>
      </div>
      <div className="principles">
        {principles.map(({ icon: Icon, title, text }) => (
          <div className="principle reveal" key={title}>
            <span className="line-icon">
              <Icon size={20} strokeWidth={1.5} />
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      className="about-editorial content-width section-space"
      id="sobre-mi"
      aria-labelledby="about-title"
    >
      <div className="reveal">
        <span className="eyebrow">Sobre mí · Lima, Perú</span>
        <h2 id="about-title">Acerca de Mí</h2>
      </div>
      <div className="about-narrative reveal">
        <p className="about-lead">
          Transformo ideas en productos funcionales, intuitivos y centrados en
          las personas.
        </p>
        <p className="about-body">
          Soy un diseñador apasionado por crear experiencias digitales que no
          solo se vean bien, sino que realmente funcionen. Me enfoco en entender
          las necesidades de los usuarios para diseñar soluciones claras,
          accesibles y eficientes.
        </p>
        <a href="#trayectoria" className="button button-dark">
          Conoce mi trayectoria <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section
      className="capabilities-section section-tint section-space"
      aria-labelledby="capabilities-title"
    >
      <div className="content-width">
        <div className="section-heading inline-heading reveal">
          <div>
            <span className="eyebrow">Mi manera de trabajar</span>
            <h2 id="capabilities-title">
              De la primera idea
              <br />
              al último detalle.
            </h2>
          </div>
          <a href="#contacto" className="button button-dark button-small">
            Conversemos <ArrowUpRight size={15} />
          </a>
        </div>
        <div className="capability-grid">
          <article className="capability-card systems-card reveal">
            <div className="system-illustration" aria-hidden="true">
              <div className="system-heading">
                <span>Aa</span>
                <span className="color-dots">
                  <i />
                  <i />
                  <i />
                </span>
              </div>
              <div className="system-rule" />
              <div className="system-rule short" />
              <div className="system-button">
                Diseñado para conectar <ArrowUpRight size={13} />
              </div>
              <span className="cursor-label">
                <MousePointer2 size={18} /> Diego
              </span>
            </div>
            <span className="tiny-label">Consistencia en cada pantalla</span>
            <h3>Design Systems</h3>
            <p>
              Componentes y decisiones visuales que construyen una experiencia
              coherente.
            </p>
          </article>
          <article className="capability-card compact-capability reveal">
            <span className="filled-icon">
              <MousePointer2 size={19} />
            </span>
            <div>
              <h3>Prototyping</h3>
              <p>Dar forma a los flujos antes de dar el siguiente paso.</p>
            </div>
          </article>
          <article className="capability-card compact-capability reveal">
            <span className="filled-icon">
              <Code2 size={19} />
            </span>
            <div>
              <h3>Frontend Development</h3>
              <p>Entender cómo se construye lo que se diseña.</p>
            </div>
          </article>
          <article className="capability-card interface-card reveal">
            <span className="tiny-label">Diseño visual + experiencia</span>
            <h3>UX/UI & Web Design</h3>
            <p>
              Encontrar el equilibrio entre lo que se ve y lo que se puede
              hacer.
            </p>
            <div className="interface-illustration" aria-hidden="true">
              <span className="interface-type">
                Forma.
                <br />
                <em>Función.</em>
              </span>
              <span className="component-orbit">
                <Component size={26} />
              </span>
            </div>
          </article>
          <article className="capability-card compact-capability ai-card reveal">
            <span className="filled-icon">
              <Sparkles size={19} />
            </span>
            <div>
              <h3>AI-assisted workflows</h3>
              <p>
                Explorar posibilidades con IA, manteniendo el criterio de
                diseño.
              </p>
            </div>
            <ArrowUpRight
              className="capability-arrow"
              size={20}
              aria-hidden="true"
            />
          </article>
        </div>
      </div>
    </section>
  );
}

function IssuerMark({ school }: { school: string }) {
  const issuer = school.toLowerCase();

  if (issuer.includes("ibm")) {
    return (
      <span className="issuer-mark issuer-ibm" aria-label="IBM">
        IBM
      </span>
    );
  }

  if (issuer.includes("google")) {
    return (
      <span className="issuer-mark issuer-google" aria-label="Google">
        G
      </span>
    );
  }

  if (issuer.includes("coderhouse")) {
    return (
      <span className="issuer-mark issuer-coderhouse" aria-label="Coderhouse">
        C
      </span>
    );
  }

  return (
    <span className="issuer-mark" aria-hidden="true">
      •
    </span>
  );
}

function EducationList({ items }: { items: typeof designEducation }) {
  return (
    <ul className="learning-list">
      {items.map((item) => (
        <li key={item.course}>
          <IssuerMark school={item.school} />
          <div className="learning-main">
            <h4>{item.course}</h4>
            <p>{item.school}</p>
          </div>
          <span className="learning-date">{item.date}</span>
        </li>
      ))}
    </ul>
  );
}

function Experience() {
  return (
    <section
      className="experience content-width section-space"
      id="trayectoria"
      aria-labelledby="experience-title"
    >
      <div className="section-heading reveal">
        <span className="eyebrow">Experiencia & formación</span>
        <h2 id="experience-title">
          Una mirada que se construye
          <br />
          con cada experiencia.
        </h2>
        <p>Aprender, llevarlo a la práctica y seguir creciendo.</p>
      </div>
      <div className="career-row reveal">
        <div className="career-label">
          <span aria-hidden="true">01 /</span>
          <h3>Experiencia profesional</h3>
        </div>
        <article className="career-entry" aria-labelledby="career-company">
          <div className="career-heading">
            <div>
              <h4 id="career-company">A.M. Code</h4>
              <p>Diseñador UX/UI</p>
            </div>
            <p className="career-period">
              <time dateTime="2025-09">Septiembre 2025</time>
              <span aria-hidden="true"> — </span>
              <time dateTime="2026-02">Febrero 2026</time>
            </p>
          </div>
          <ul className="career-contributions">
            <li>Prototipos web y mobile para nuevas propuestas.</li>
            <li>Mejoras de plataformas existentes.</li>
            <li>Preparación de propuestas aprobadas para desarrollo.</li>
            <li>
              Colaboración en piezas de social media y presentación de marca.
            </li>
          </ul>
          <a className="career-link" href="#proyectos">
            Explorar proyectos <ArrowUpRight size={16} />
          </a>
        </article>
      </div>
      <div className="career-row reveal">
        <div className="career-label">
          <span aria-hidden="true">02 /</span>
          <h3>Formación en diseño</h3>
          <p>Los fundamentos de mi práctica.</p>
        </div>
        <EducationList items={designEducation} />
      </div>
      <div className="career-row reveal">
        <div className="career-label">
          <span aria-hidden="true">03 /</span>
          <h3>Aprendizaje continuo</h3>
          <p>Diseño, tecnología y nuevas perspectivas.</p>
        </div>
        <EducationList items={technicalEducation} />
      </div>
    </section>
  );
}

function PersonalNote() {
  return (
    <section
      className="personal-note content-width"
      aria-labelledby="note-title"
    >
      <div className="section-heading inline-heading reveal">
        <div>
          <span className="eyebrow">Una idea que guía mi trabajo</span>
          <h2 id="note-title">
            Que se vea bien.
            <br />
            Que se sienta simple.
          </h2>
        </div>
        <span className="note-marker">Mi enfoque</span>
      </div>
      <div className="note-panel reveal">
        <Fingerprint size={28} strokeWidth={1.4} aria-hidden="true" />
        <p>
          “Diseñar experiencias que no solo se vean bien,
          <br className="desktop-break" /> sino que realmente funcionen.”
        </p>
        <span>Diego Méndez · Diseñador UX/UI</span>
        <span className="note-decoration" aria-hidden="true">
          “
        </span>
      </div>
    </section>
  );
}

function Footer({ onAbout }: { onAbout: () => void }) {
  return (
    <footer className="footer" id="contacto">
      <section className="closing-landscape" aria-labelledby="contact-title">
        <img
          src={profile.footerImage}
          alt=""
          loading="lazy"
          width="2200"
          height="2933"
        />
        <div className="closing-fade-top" aria-hidden="true" />
        <div className="closing-fade-bottom" aria-hidden="true" />
        <div className="closing-copy">
          <span className="hero-identity">
            Cada buena experiencia empieza con una conversación.
          </span>
          <h2 id="contact-title">
            Démosle forma
            <br />a tu próxima idea.
          </h2>
          <p>Si tienes un proyecto en mente, me gustaría escucharlo.</p>
          <div className="hero-actions">
            <a
              href={profile.whatsapp}
              className="button button-white"
              target="_blank"
              rel="noreferrer"
            >
              Hablemos <ArrowUpRight size={16} />
            </a>
            <a href="#proyectos" className="button button-glass">
              Explorar proyectos
            </a>
          </div>
        </div>
      </section>
      <div className="footer-main content-width">
        <div className="footer-brand">
          <a
            href="#inicio"
            className="monogram"
            aria-label="Diego Méndez, volver al inicio"
          >
            d<span>m</span>
          </a>
          <p>
            Diseñando con claridad,
            <br />
            intención y una mirada humana.
          </p>
          <span>Diego Méndez · Lima, Perú</span>
        </div>
        <nav className="footer-navigation" aria-label="Navegación del pie">
          <a href="#inicio">Inicio</a>
          <a href="#proyectos">Proyectos</a>
          <a
            href="#inicio"
            onClick={(event) => {
              event.preventDefault();
              onAbout();
            }}
          >
            Sobre mí
          </a>
          <a href="#trayectoria">Trayectoria</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={12} />
          </a>
          <a href={profile.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp <ArrowUpRight size={12} />
          </a>
        </nav>
        <a
          href={profile.whatsapp}
          className="button button-white button-small"
          target="_blank"
          rel="noreferrer"
        >
          Contactar <ArrowUpRight size={14} />
        </a>
      </div>
      <div className="footer-bottom content-width">
        <span>© {new Date().getFullYear()} Diego Méndez</span>
        <span>Diseño para personas. Hecho en Perú.</span>
        <a href="#inicio">Volver arriba ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [aboutMode, setAboutMode] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;

    const smoother = ScrollSmoother.create({
      content: "#smooth-content",
      effects: false,
      smooth: 1.2,
      wrapper: "#smooth-wrapper",
    });

    return () => smoother.kill();
  }, []);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const handleInternalLink = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const destination = document.querySelector(hash);
      if (!destination) return;

      event.preventDefault();
      const smoother = ScrollSmoother.get();

      if (reduceMotion.matches) {
        smoother?.scrollTo(destination, false);
        if (!smoother) window.scrollTo({ top: destination.offsetTop });
        return;
      }

      if (smoother) {
        smoother.scrollTo(destination, 1.15, "top 30px");
      } else {
        gsap.killTweensOf(window);
        gsap.to(window, {
          duration: 1.15,
          ease: "power3.out",
          overwrite: "auto",
          scrollTo: { y: destination, offsetY: 30 },
        });
      }
    };

    document.addEventListener("click", handleInternalLink, true);
    return () =>
      document.removeEventListener("click", handleInternalLink, true);
  }, []);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    document
      .querySelectorAll(".reveal")
      .forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div className="site-frame">
          <Navigation
            onAbout={() => {
              setAboutMode(true);
            }}
            onHome={() => {
              setAboutMode(false);
            }}
          />
          <a className="skip-link" href="#main">
            Saltar al contenido
          </a>
          <main id="main">
            <Hero
              aboutMode={aboutMode}
              onAbout={() => {
                setAboutMode(true);
              }}
              onHome={() => {
                setAboutMode(false);
              }}
            />
            <Introduction />
            <WebProjects onSelect={setSelectedProject} />
            <MobileProjects onSelect={setSelectedProject} />
            <Experience />
            <PersonalNote />
          </main>
          <Footer
            onAbout={() => {
              setAboutMode(true);
            }}
          />
          <ProjectDialog
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </div>
      </div>
    </div>
  );
}
