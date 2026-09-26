# Diego Méndez — Portfolio

Portfolio en React y Vite. La composición sigue la referencia visual: navegación flotante, Hero fotográfico con desvanecimiento blanco, secciones claras, superficies oliva y cierre fotográfico oscuro. Se conservan los seis proyectos, experiencia, formación y contacto del portfolio original.

## Ejecutar

- `npm install`: instalar dependencias.
- `npm run dev`: abrir el servidor de desarrollo.
- `npm run build`: generar el sitio de producción en `dist`.
- `npm run preview`: revisar la compilación de producción.
- `npm run assets`: regenerar imágenes WebP optimizadas conservando los originales.
- `npm run format`: formatear el código.

## Editar contenido

- `src/app/data/portfolio.ts`: perfil, enlaces, imágenes, proyectos y formación.
- `src/app/App.tsx`: secciones de la página.
- `src/app/components/Navigation.tsx`: navegación y menú mobile.
- `src/app/components/Projects.tsx`: galería horizontal, propuestas móviles y vista ampliada de proyectos.
- `src/styles/portfolio.css`: paleta, composición, fundidos y adaptaciones responsive.

No se han inventado años de proyectos, resultados cuantitativos, nuevos clientes ni casos de estudio. Las vistas de detalle muestran la descripción y el material original disponible. El estado «En curso» de CODERHOUSE conserva el dato original y puede actualizarse en `portfolio.ts`.

## Cambiar la fotografía del Hero

La fotografía de paisaje es provisional. Cambia `profile.heroImage` en `src/app/data/portfolio.ts` por el import de tu foto final. `profile.footerImage` es independiente, para que puedas conservar el paisaje del cierre.

La imagen se adapta con `object-fit: cover`; ajusta `object-position` en `.hero-photograph` para elegir el encuadre. El desvanecimiento blanco pertenece a `.hero-fade` y seguirá funcionando al cambiar la fotografía. La regla mobile permite un encuadre independiente.

La sección Sobre mí utiliza una composición tipográfica sin retrato. Experiencia y formación se presentan en filas abiertas, con fechas y separadores.

## Accesibilidad y movimiento

La navegación tiene enlaces reales, salto al contenido, foco visible y un menú que se cierra con Escape. Los proyectos se abren en un `dialog` nativo con foco contenido y cierre por Escape. La galería se puede desplazar con los botones o directamente con el gesto de scroll. Se respeta `prefers-reduced-motion`.

## Procedencia

El código exportado inicial que dejó de utilizarse está en `archive/original-figma-source.zip`. Los assets originales permanecen en `src/imports/Frame5`. La fotografía de paisaje y su fuente figuran en `ATTRIBUTIONS.md`.
