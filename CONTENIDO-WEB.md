# Contenido de rasgomedia.es

Este archivo reúne **todos los textos visibles de la web** en un solo lugar, para
poder revisarlos y editarlos sin tocar código.

**Cómo funciona:** el sitio lee los textos desde `content.json` (no desde este
`.md`). Este documento es la copia legible para humanos — edítalo aquí y luego
pide que se vuelquen los cambios a `content.json` (o pide directamente "actualiza
el content.json con estos cambios"). Las dos excepciones son:
- Las secciones de **Privacidad** (más abajo) tienen formato HTML en el JSON
  (negritas, listas, enlaces); aquí se muestran en texto plano para lectura fácil,
  pero los cambios de esas secciones deben indicarse en prosa y se reconstruirá el
  HTML correspondiente.
- Los **datos de configuración** (URLs, colores, tags de tecnología) no son "copy"
  y no viven aquí — están en `content.json` directamente.

---

## Sitio (global)

| Campo | Valor |
|---|---|
| Nombre | Rasgo Media |
| Dominio | rasgomedia.es |
| Email de contacto | hola@rasgomedia.es |
| Texto alternativo del logo | Rasgo Media |
| Copyright (footer) | © 2026 Rasgo Media · rasgomedia.es |

## Navegación

- Inicio → `/`
- Catálogo → `/catalogo`
- Contacto → `/contacto`
- Privacidad → `/privacidad`

---

## Página de Inicio

**Meta / SEO**
- Título: Rasgo Media — Desarrollo de Apps | rasgomedia.es
- Descripción: Desarrollamos apps efectivas para iOS, Android y web a medida para empresas y particulares. Código limpio, entrega en plazo, comunicación directa.
- Título Open Graph: Rasgo Media — Desarrollo de Apps
- Descripción Open Graph: Apps iOS, Android y web a medida. Particulares y empresas.

**Hero**
- Título (línea 1): Tu app, desde la idea
- Título (línea 2): hasta el lanzamiento.
- Subtítulo: Desarrollamos aplicaciones iOS, Android y web a medida. Resultados sencillos y efectivos.
- Botón: Cuéntanos tu proyecto

**Qué hacemos**
- Título: Qué hacemos
- Subtítulo: Desarrollo de producto digital de principio a fin.
- Servicios:
  1. **Apps iOS** — Aplicaciones nativas para iPhone y iPad. Rendimiento máximo, experiencia Apple.
  2. **Apps Android** — Desarrollo nativo para el ecosistema Android. Compatibilidad total con el mercado.
  3. **Apps Web** — Aplicaciones web progresivas (PWA) y plataformas SaaS. Accesibles desde cualquier dispositivo.
  4. **Consultoría** — Definimos contigo la arquitectura, tecnología y progreso de tu producto digital.

**Por qué Rasgo Media**
- Título: Por qué Rasgo Media
- 01 · **Entrega en plazo** — Metodología ágil, seguimiento efectivo de tu proyecto.
- 02 · **Código limpio y escalable** — Arquitecturas escalables para tu futuro.
- 03 · **Comunicación directa** —  Requisitos sin intermediarios, sin malentendidos.

**Llamada final**
- Título: ¿Tienes un proyecto en mente?
- Texto: Escríbenos. Respondemos en menos de 24 horas.
- Botón: Contactar ahora

---

## Página de Catálogo

**Meta / SEO**
- Título: Catálogo de Apps — Rasgo Media
- Descripción: Proyectos desarrollados por Rasgo Media: apps iOS, Android y web para distintos sectores.

**Cabecera**
- Título: Catálogo de apps
- Subtítulo: Selección de proyectos desarrollados por Rasgo Media.

**Proyectos**

1. **Graphed** — App de gráficos ágiles para seguimiento de datos. Crea y gestiona variables en tu dispositivo. *(Android)*
2. **CSUBA** — Plataforma para gestionar y seguir subastas de forma ágil, disponible web. *(Web: csuba.rasgomedia.es)*
3. **Ponte** — Red Social de conexión internacional. Contacta personas afines de forma sencilla y directa. *(Web: ponte1.es)*
4. **Khome** — Catálogo de mini-casas económicas: explora modelos, sigue el montaje y gestiona tu compra. *(Web: khome.es)*
5. **Jobsi** — Buscador de empleo inteligente que rankea las ofertas según tus skills, sin gastar créditos de más en cada búsqueda. *(Web: jobsi.rasgomedia.es)*
6. **Lando** — Buscador de propiedades con filtros de provincia, precio, distancia al mar y clima, España. *(Web: lando.rasgomedia.es)*

---

## Página de Contacto

**Meta / SEO**
- Título: Contacto — Rasgo Media
- Descripción: Escríbenos y cuéntanos tu proyecto. Respondemos en menos de 24 horas.

**Cabecera**
- Título: Contacto
- Subtítulo: Cuéntanos tu idea o proyecto. Sin compromiso. Respondemos en menos de 24 horas.

**Formulario**
- Etiqueta nombre: Nombre — placeholder: Tu nombre
- Etiqueta email: Email — placeholder: tu@email.com
- Etiqueta mensaje: Mensaje — placeholder: Cuéntanos tu proyecto... (máx. 500 caracteres)
- Botón enviar: Enviar mensaje
- Botón enviando: Enviando...
- Éxito (título): ¡Mensaje enviado!
- Éxito (texto): Hemos recibido tu mensaje. Te responderemos en menos de 24 horas.
- Error: Ha ocurrido un error al enviar el mensaje. Escríbenos directamente a hola@rasgomedia.es.

**Bajo el formulario**
- Texto: También puedes escribirnos directamente:

---

## Política de Privacidad (Graphed)

- Título de página: Política de Privacidad — Graphed
- Última actualización: 2 de julio de 2026

1. **Información General** — Graphed es una aplicación móvil interactiva para crear y gestionar gráficos matemáticos. Desarrollador: RasgoMedia. Sitio web: https://rasgomedia.es/. Correo: hola@rasgomedia.es.
2. **Datos que Recopilamos** — Gráficos, configuración e historial se guardan solo en SQLite local (no se envían a servidores). El enlace "By RasgoMedia" abre el navegador sin recopilar datos de la visita. Al compartir un gráfico se genera un PNG enviado por la app que elijas; RasgoMedia no recibe copia.
3. **Permisos de la Aplicación** — Usa almacenamiento local, acceso a Internet (para abrir enlaces) y capacidad de compartir. NO usa micrófono, cámara, contactos, ubicación ni fotos (salvo para compartir).
4. **Cookies y Rastreo** — No se usan cookies ni tecnologías de rastreo.
5. **Cómo Protegemos Tus Datos** — Almacenamiento solo local, sin servidor, sin analítica.
6. **Retención de Datos** — Los datos se conservan mientras la app esté instalada; se eliminan al desinstalar.
7. **Derechos del Usuario** — Acceder, modificar, eliminar y exportar tus datos, todo desde el propio dispositivo.
8. **Cambios a Esta Política** — Se notificarán cambios significativos vía actualizaciones de la app.
9. **Contacto** — Email: hola@rasgomedia.es · Web: https://rasgomedia.es/
10. **Cumplimiento Legal** — RGPD (UE), leyes españolas de protección de datos, políticas de Google Play Store.

- Nota de pie: Graphed. Desarrollado por RasgoMedia.
