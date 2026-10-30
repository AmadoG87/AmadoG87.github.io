# Nonsquare Pixel Studio

Sitio oficial del estudio: página estática en español e inglés, preparada para GitHub Pages.

## Archivos

- `index.html`: contenido y estructura.
- `styles.css`: diseño adaptable a móvil y escritorio.
- `script.js`: selector de idioma y año del pie de página.
- `brand.css`: aspecto visual de la identidad actual del estudio.
- `assets/studio-landscape.png`, `assets/studio-vertical.png` y `assets/studio-icon.png`: imágenes originales proporcionadas por el estudio.
- `assets/trivia-party-logo.png`: logo proporcionado de Trivia Party (128 × 128 píxeles).
- `privacy.html` y `privacy.css`: borrador bilingüe de la política de privacidad de Trivia Party, enlazado desde el pie de la página principal.

Abre `index.html` en un navegador para una vista local. No necesita instalación ni compilación. Las fuentes de Google Fonts son opcionales: hay fuentes alternativas del sistema.

El workflow existente publica la raíz del repositorio en GitHub Pages cuando se suben cambios a `main`.

## Contenido pendiente

Reemplazar las ilustraciones conceptuales por capturas reales cuando estén disponibles. La identidad actual utiliza el logo y las imágenes proporcionadas por el estudio. Para mostrar el logo de Trivia Party a mayor tamaño con más nitidez, sustituir su PNG por una versión de mayor resolución. No se han incluido contactos, fechas ni descargas que no hayan sido confirmados.

## Subida directa a Cloudflare Pages

`nonsquare-cloudflare.zip` contiene los archivos públicos con `index.html` en la raíz. Se puede subir como una nueva implementación de producción en el proyecto existente de Cloudflare Pages. El ZIP no incluye Git ni archivos internos. El rediseño no cambia los textos ni finaliza el borrador de privacidad.

## Privacidad: borrador pendiente de finalizar

La política está en `privacy.html`. No debe presentarse todavía a Epic. Contacto público de privacidad confirmado: amado3dgarcia87@gmail.com. Antes de finalizar:

- Verificar en la compilación distribuida los permisos EAS solicitados y utilizados (Basic Profile, Friends List, Online Presence).
- Auditar registros locales y diagnósticos automáticos, persistencia de datos y proveedores adicionales.
- Confirmar los criterios de conservación, plazos operativos, borrado y copias de seguridad.
- Definir la edad de acceso a las pruebas y las medidas que correspondan para menores.
- Confirmar medidas de seguridad, ubicaciones de tratamiento y las garantías aplicables.
- Revisar el texto contra las prácticas reales; retirar los avisos de borrador y `noindex`, y añadir la fecha de vigencia únicamente después de resolver los pendientes.
- Subir los archivos y comprobar que la URL pública directa devuelve la política sin inicio de sesión. URL prevista para este repositorio: `https://amadog87.github.io/privacy.html`.

Referencia de requisitos de Epic: https://dev.epicgames.com/docs/epic-online-services/accounts-and-social/eos-epic-account-services/brand-review/brand-review-intro
