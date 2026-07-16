# Rasgo Media — sitio web

Réplica del sitio [rasgomedia.es](https://rasgomedia.es) reconstruida con **Next.js 14 (App Router)** y **Tailwind CSS**, optimizada para desplegar en **Vercel**.

El sitio original fue creado con Airo IA de GoDaddy; todos sus assets son de uso libre.

## Stack

- **Next.js 14** (App Router, React Server Components)
- **Tailwind CSS 3** con la paleta de color original (variables HSL en `app/globals.css`)
- Todo el copy de UI está centralizado en **`content.json`** (listo para i18n)

## Estructura

```
rasgomedia/
├── app/
│   ├── layout.jsx          # Layout raíz (header + nav + footer) y metadata global
│   ├── globals.css         # Tailwind + paleta de color original
│   ├── page.jsx            # Inicio
│   ├── catalogo/page.jsx   # Catálogo de apps
│   ├── contacto/page.jsx   # Contacto (formulario funcional)
│   ├── privacidad/page.jsx # Política de privacidad
│   ├── sitemap.js          # sitemap.xml
│   └── robots.js           # robots.txt
├── components/
│   ├── SiteHeader.jsx      # Cabecera con logo
│   ├── SiteNav.jsx         # Navegación (estado activo + menú móvil)
│   ├── SiteFooter.jsx      # Pie de página
│   └── ContactForm.jsx     # Formulario de contacto (cliente)
├── public/
│   └── logo.jpg            # Logo "RM" (favicon + cabecera)
└── content.json           # Todo el texto de UI (i18n-ready)
```

## Desarrollo

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build de producción

```bash
npm run build
npm run start
```

## Despliegue en Vercel

1. Sube el repositorio a GitHub.
2. En [vercel.com](https://vercel.com) → **Add New → Project** → importa el repo.
3. Vercel detecta Next.js automáticamente. Deja los ajustes por defecto y pulsa **Deploy**.
4. (Opcional) Configura el dominio `rasgomedia.es` en **Settings → Domains**.

No requiere variables de entorno.

## Formulario de contacto

El formulario abre el cliente de correo del usuario (`mailto:hola@rasgomedia.es`) con
el mensaje ya redactado — funciona sin backend. Si en el futuro quieres recibir los
envíos por API, se puede añadir una ruta `app/api/contact/route.js` con un proveedor
de email (p. ej. Resend) sin cambiar la UI.

## Editar el contenido

Todo el texto visible vive en `content.json`. Para cambiar títulos, servicios,
proyectos del catálogo o la política de privacidad, edita ese archivo — no hace falta
tocar los componentes.
