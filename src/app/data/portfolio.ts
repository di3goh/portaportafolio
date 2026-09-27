import landscape from "../../assets/optimized/hero-landscape.webp";
import travel from "../../assets/optimized/turquesa-travel.webp";
import industrial from "../../assets/optimized/mri-industriales.webp";
import concert from "../../assets/optimized/twenty-one-pilots.webp";
import glucose from "../../assets/optimized/glucida.webp";
import pets from "../../assets/optimized/petcare.webp";
import food from "../../assets/optimized/taipa.webp";
import destinosTourism from "../../assets/optimized/destinos-tourism.webp";
import caletaStore from "../../assets/optimized/caleta-store.webp";
import astronumImage from "../../assets/optimized/astronum.webp";
import oftalvistaImage from "../../assets/optimized/oftalvista.webp";
import pilotsImage from "../../assets/optimized/twenty-one-pilots-new.webp";
import reportaImage from "../../assets/optimized/reporta.webp";
import miskipopImage from "../../assets/optimized/miskipop.webp";
import centrojoyeroImage from "../../assets/optimized/centrojoyero.webp";
import amCodeImage from "../../assets/optimized/am-code.webp";
import ibmUxUiCertificate from "../../assets/optimized/ibm-ux-ui-certificate.webp";
import coderhouseUxUiCertificate from "../../assets/optimized/coderhouse-ux-ui-certificate.webp";

// Change the image imports here to replace the photographs without changing the layout.
export const profile = {
  name: "Diego Méndez",
  location: "Lima, Perú",
  heroImage: landscape,
  footerImage: landscape,
  whatsapp:
    "https://wa.me/51973853069?text=Hola%20Diego%2C%20me%20gustar%C3%ADa%20contactarte",
  blog: "https://medium.com/@diegomdz",
  linkedin: "https://www.linkedin.com/in/diegoalonsomendez",
};

export type Project = {
  id: string;
  name: string;
  category: string;
  role: string;
  type: string;
  summary: string;
  description: string;
  image: string;
  alt: string;
  url?: string;
  year?: string;
};

export const projects: Project[] = [
  {
    id: "pilots",
    name: "Twenty One Pilots",
    category: "Música",
    role: "Diseño web",
    type: "Concepto personal",
    summary: "La emoción del concierto empieza en la pantalla.",
    description:
      "Propuesta personal de una web orientada a la venta de entradas, inspirada en la posibilidad de un concierto de Twenty One Pilots en Perú. Una exploración de la experiencia que me hubiera gustado encontrar al comprar mi entrada; no es un encargo de la banda ni de Teleticket.",
    image: pilotsImage,
    alt: "Concepto de una web de entradas para Twenty One Pilots",
    url: "https://twentyonepilots-tlk.vercel.app",
  },
  {
    id: "reporta",
    name: "REPORTA",
    category: "Emergencias",
    role: "Diseño web",
    type: "Prototipo web",
    summary:
      "Una forma clara de reportar personas desaparecidas tras un sismo.",
    description:
      "Prototipo web para reportar y consultar información de personas desaparecidas durante una emergencia sísmica. La experiencia prioriza la claridad, la rapidez y el acceso a información útil.",
    image: reportaImage,
    alt: "Prototipo web REPORTA para reportar personas desaparecidas",
    url: "https://reporta-lake.vercel.app",
  },
  {
    id: "oftalvista",
    name: "Oftalvista",
    category: "Salud",
    role: "Diseño web",
    type: "Sitio web",
    summary: "Una presencia digital clara para una clínica oftalmológica.",
    description:
      "Sitio web desarrollado para presentar los servicios, especialidades y propuesta de atención de una clínica oftalmológica.",
    image: oftalvistaImage,
    alt: "Sitio web de la clínica oftalmológica Oftalvista",
    url: "https://oftalvista-web.vercel.app/index.html",
  },
  {
    id: "caleta",
    name: "CALETA.pe",
    category: "Tecnología",
    role: "Diseño web",
    type: "Prototipo web",
    summary:
      "Rediseño de tienda web para explorar tecnología con más claridad.",
    description:
      "Rediseño de la tienda web de CALETA.pe. La propuesta organiza categorías, productos y ofertas para construir una experiencia de compra tecnológica más clara.",
    image: caletaStore,
    alt: "Rediseño de la tienda web CALETA.pe en un portátil",
    url: "https://pc-store-lake.vercel.app",
  },
  {
    id: "astronum",
    name: "Astronum",
    category: "Cultura digital",
    role: "Diseño web",
    type: "Prototipo web",
    summary: "Un espacio para leer historias, ideas y nuevas perspectivas.",
    description:
      "Prototipo web editorial inspirado en plataformas de lectura y publicación de historias e ideas, con una navegación pensada para descubrir contenido.",
    image: astronumImage,
    alt: "Prototipo editorial Astronum para leer historias e ideas",
    url: "https://astronum-psi.vercel.app",
  },
  {
    id: "destinos",
    name: "Destinos Turismo",
    category: "Turismo",
    role: "Diseño web",
    type: "Sitio web",
    summary: "Una revista digital para descubrir destinos del Perú y el mundo.",
    description:
      "Sitio web para una revista de destinos turísticos, con contenidos sobre lugares del Perú y otros países, rutas e inspiración para viajar.",
    image: destinosTourism,
    alt: "Revista web Destinos Turismo sobre viajes y lugares turísticos",
    url: "https://destinos-web.vercel.app",
  },
  {
    id: "miskipop",
    name: "Miskipop",
    category: "E-commerce",
    role: "Diseño web",
    type: "Sitio web",
    summary: "Una experiencia digital para descubrir y comprar con facilidad.",
    description:
      "Diseño web para Miskipop, con una experiencia orientada a explorar su propuesta, conocer sus productos y facilitar el contacto con la marca.",
    image: miskipopImage,
    alt: "Sitio web de Miskipop presentado en un portátil",
    url: "https://miskipop.com",
  },
  {
    id: "centrojoyero",
    name: "Centro Joyero",
    category: "Joyería",
    role: "Diseño web",
    type: "Sitio web",
    summary: "Una presencia digital para una marca especializada en joyería.",
    description:
      "Diseño web para Centro Joyero, pensado para presentar su propuesta y acompañar a las personas en el descubrimiento de sus productos y servicios.",
    image: centrojoyeroImage,
    alt: "Sitio web de Centro Joyero presentado en un portátil",
    url: "https://centrojoyero.com.pe",
  },
  {
    id: "am-code",
    name: "Web A.M. CODE",
    category: "Desarrollo web",
    role: "Diseño web",
    type: "Sitio web",
    summary:
      "La web de una empresa creada para convertir ideas en sitios que venden.",
    description:
      "Sitio web de A.M. CODE para presentar sus servicios de desarrollo web, mostrar proyectos entregados y comunicar una propuesta digital clara, rápida y orientada a resultados.",
    image: amCodeImage,
    alt: "Sitio web de A.M. CODE presentado en un portátil",
  },
  {
    id: "turquesa",
    name: "Turquesa Travel",
    category: "Turismo",
    role: "Diseño web",
    type: "Sitio web",
    summary: "El primer paso de un viaje inolvidable.",
    description:
      "Diseño web para una agencia de viajes y tours de Ayacucho. Una experiencia para explorar paquetes que combinan tradición, cultura y naturaleza, y conectar con la agencia al planificar un viaje.",
    image: travel,
    alt: "Web de Turquesa Travel presentada en una laptop",
  },
  {
    id: "mri",
    name: "M.R.I Industriales",
    category: "Industria",
    role: "Diseño web",
    type: "Sitio web",
    summary: "Información técnica, presentada con claridad.",
    description:
      "Página web de M.R.I Bombas Industriales para mostrar los productos que vende y distribuye la empresa. El diseño reúne un catálogo integrado, información de la compañía y sus servicios.",
    image: industrial,
    alt: "Diseño web de M.R.I Bombas Industriales en un portátil",
    url: "https://mri-pe.com/",
  },
  {
    id: "petcare",
    name: "PetCare",
    category: "Mascotas",
    role: "Diseño UX/UI",
    type: "Propuesta de app",
    summary: "Un lugar para cuidar de quienes te acompañan.",
    description:
      "Propuesta de aplicación móvil para gestionar el cuidado de mascotas. Integra el registro de mascotas, reservas de citas veterinarias, acceso a servicios especializados y un módulo de adopción.",
    image: pets,
    alt: "Pantalla de adopción de mascotas del proyecto PetCare",
  },
  {
    id: "glucida",
    name: "Glúcida",
    category: "Salud",
    role: "Diseño UX/UI",
    type: "Propuesta de app",
    summary: "Tu bienestar, un registro a la vez.",
    description:
      "Propuesta de aplicación móvil orientada al registro y seguimiento diario de los niveles de glucosa. El diseño busca facilitar la lectura del progreso mediante indicadores y gráficos claros.",
    image: glucose,
    alt: "Pantalla de bienvenida de la aplicación Glúcida",
  },
  {
    id: "taipa",
    name: "Taipá!",
    category: "Gastronomía",
    role: "Diseño UX/UI",
    type: "Concepto de app",
    summary: "Una entrada a los sabores de nuestra cocina.",
    description:
      "Exploración visual de una aplicación móvil de gastronomía peruana. La pantalla de bienvenida utiliza fotografía de platos nacionales como punto de entrada a la experiencia.",
    image: food,
    alt: "Concepto móvil de Taipá con platos de la gastronomía peruana",
    url: "https://www.behance.net/gallery/251360983/Taipa-Food-Delivery-Mobile-App-UIUX",
  },
];

export const designEducation = [
  {
    school: "IBM SkillsBuild",
    course: "IBM UX/UI DESIGNER",
    date: "Completado · Sep. 2026",
    certificateImage: ibmUxUiCertificate,
  },
  {
    school: "IBM SkillsBuild",
    course: "Introduction to UX/UI Design",
    date: "Completado · Sep. 2026",
  },
  {
    school: "IBM SkillsBuild",
    course: "Introduction to Agile Development and Scrum",
    date: "Completado · Sep. 2026",
  },
  {
    school: "IBM SkillsBuild",
    course: "UX/UI Design Fundamentals: Usability and Visual Principles",
    date: "Completado · Sep. 2026",
  },
  {
    school: "IBM SkillsBuild",
    course: "UI/UX Wireframing and Prototyping with Figma",
    date: "Completado · Sep. 2026",
  },
  {
    school: "IBM SkillsBuild",
    course: "UX Research and Information Architecture",
    date: "Completado · Sep. 2026",
  },
  {
    school: "IBM SkillsBuild",
    course: "Capstone Project: Applying UI/UX Design in the Real World",
    date: "Completado · Sep. 2026",
  },
];

export const technicalEducation = [
  {
    school: "CODERHOUSE",
    course: "Diseño UX/UI Avanzado",
    date: "Completado · Ago. 2026",
    certificateImage: coderhouseUxUiCertificate,
  },
  {
    school: "Google",
    course: "Tools of the Trade: Linux and SQL",
    date: "Ene. 2025",
  },
  {
    school: "Google",
    course: "Seguridad informática: defensa contra las artes oscuras digitales",
    date: "Ene. 2025",
  },
];

export type EducationItem =
  | (typeof designEducation)[number]
  | (typeof technicalEducation)[number];
