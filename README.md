# Adrian Enis — Portfolio

**Stack:** Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS v4  
**Metodología:** Server Components + Client Islands · SSG

---

## 📐 Arquitectura del Sistema

Portfolio personal de una sola página, renderizado como HTML estático en build time. El layout cambia de columna única (mobile) a dos columnas con sidebar sticky (desktop).

### Principios

- **Cero estado global** — No hay stores, contextos ni props drilling profundos.
- **Server Components** — Los datos se resuelven en build time desde archivos `.ts` estáticos.
- **Client Islands** — Solo los componentes que necesitan interactividad (nav activo, animaciones) llevan `"use client"`.
- **CSS nativo + Tailwind** — Las variables de color en `:root` se consumen desde Tailwind v4 sin plugins adicionales.
- **Sin dependencias de animación** — IntersectionObserver + transiciones CSS. Sin Framer Motion.

---

## 🔀 Flujo de renderizado

```
next build genera HTML estático (App Router)
       ↓
Layout: metadata, font Inter, variables CSS
       ↓
page.tsx resuelve experience, projects, skills
       ↓
Renderiza:
  - Sidebar: ProfileHeader → NavMenu → DownloadCV → SocialLinks
  - Main: About → Experience → Projects → Skills
       ↓
Cliente hidrata:
  - NavMenu activa IntersectionObserver
  - RevealWrapper anima cards al scrollear
```

---

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx        ← Root layout: metadata, font, CSS global
│   ├── page.tsx          ← Página principal: sidebar + secciones
│   └── globals.css       ← Estilos globales, variables CSS, layout
│
├── components/
│   ├── common/
│   │   └── RevealWrapper.tsx   ← Fade-in al scroll
│   └── ui/
│       ├── NavMenu.tsx         ← Navegación lateral con active section
│       ├── ProfileHeader.tsx   ← Nombre, título y bio
│       ├── SocialLinks.tsx     ← Iconos de GitHub, LinkedIn, Email
│       ├── DownloadCV.tsx      ← Botón de descarga de CV
│       └── DownloadIcon.tsx    ← Ícono de descarga SVG
│
├── sections/
│   ├── cardLayout.ts    ← Tokens de diseño (grid, tipografía)
│   ├── About.tsx        ← "Sobre mí"
│   ├── Experience.tsx   ← Experiencia laboral
│   ├── Projects.tsx     ← Proyectos personales
│   └── Skills.tsx       ← Habilidades técnicas
│
├── data/
│   ├── experience.ts    ← Datos de experiencia
│   ├── projects.ts      ← Datos de proyectos
│   └── skills.ts        ← Datos de habilidades
│
├── hooks/
│   ├── useActiveSection.ts  ← IntersectionObserver para nav
│   └── useScrollReveal.ts   ← IntersectionObserver para animaciones
│
└── docs/
    └── architecture.md  ← Documentación detallada del proyecto
```

---

## 🧩 Componentes Clave

### `app/page.tsx`
Orquestador principal. Resuelve datos en paralelo con `Promise.all` y renderiza sidebar + secciones con layout responsive.

### `components/ui/NavMenu.tsx`
Renderiza 4 enlaces de navegación. Usa `useActiveSection()` con `rootMargin: "-40% 0px -55% 0px"` para detectar qué sección está visible y marcar el ítem activo.

### `sections/cardLayout.ts`
Centraliza tokens de diseño compartidos: grid de cards, tipografía, espaciado y chips. Evita duplicación entre Experience y Projects.

---

## 🎨 Convenciones

| Convención          | Regla                                             |
| ------------------- | ------------------------------------------------- |
| **Naming archivos** | PascalCase para componentes                       |
| **Naming carpetas** | kebab-case                                        |
| **Import paths**    | `@/` mapea a `src/`                               |
| **Server/Client**   | `"use client"` solo donde hay interactividad       |
| **Estilos**         | Tailwind utility classes + variables CSS en `:root`|
| **Fuente**          | Inter (texto) · Fira Code (monoespacio)           |

---

## 🚀 Deployment

```bash
pnpm install
pnpm build    # Genera HTML estático en out/
pnpm dev      # Servidor de desarrollo
```

El build genera una app completamente estática lista para deploy en Vercel, Netlify o cualquier static host.

---

## 📌 Estado actual

- ✅ SSG con Next.js App Router
- ✅ Layout responsive (mobile/desktop)
- ✅ Navegación con sección activa
- ✅ Animaciones al scroll con IntersectionObserver
- ✅ CV descargable
- ✅ Tema oscuro consistente

### Pendiente / Futuro

- Modo claro/oscuro
- Páginas de detalle por proyecto
- Internacionalización (es/en)
- Tests con Vitest + Testing Library
- Blog con MDX

---

*Desarrollado por [Adrian Enis](https://github.com/adrian-enis)*
