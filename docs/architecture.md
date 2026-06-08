# Project Overview

**Portfolio personal** de Adrian Enis — desarrollador full-stack. Sitio web estático de una sola página que presenta perfil profesional, experiencia laboral, proyectos y habilidades técnicas.

- **Propósito**: Vitrina profesional / carta de presentación técnica
- **Dominio**: Portafolio web personal
- **Público**: Reclutadores, clientes freelance, colaboradores técnicos

---

# Technology Stack

| Categoría        | Tecnología                                           |
| ---------------- | ----------------------------------------------------- |
| Lenguaje         | TypeScript 5                                         |
| Framework        | Next.js 16.2.6 (App Router)                          |
| UI Library       | React 19.2                                            |
| Styling          | Tailwind CSS v4, CSS nativo                          |
| Animación        | IntersectionObserver (CSS transitions)               |
| Linter           | ESLint 9 + `eslint-config-next`                      |
| Paquetería       | pnpm                                                 |
| Deployment       | Vercel (implícito por config)                        |

---

# Architecture

## Pattern

**Single-Page Application (SPA) estática — Server Components + Client Islands**

No se detecta un patrón clásico (MVC, Clean, etc.). Sigue una arquitectura simple de **página única** donde:

- El estado global no existe (no hay stores, contextos, ni props drilling profundos).
- Los componentes servidor resuelven datos estáticos en build time.
- Los componentes cliente se usan exclusivamente para interactividad (navegación activa, animaciones al scroll).

## Responsibilities

```text
app/page.tsx      → Orquestador de layout y secciones
app/layout.tsx    → Metadata global, import de estilos
components/ui/    → Componentes de presentación reutilizables
components/common → Componentes compartidos (wrapper de animación)
sections/         → Bloques de contenido del portfolio
data/             → Fuentes de datos estáticas (sin DB ni API)
hooks/            → Lógica de interacción del lado cliente
```

---

# Project Structure

```text
src/
├── app/
│   ├── layout.tsx      ← Root layout: metadata, font, CSS global
│   ├── page.tsx        ← Página principal: sidebar + secciones
│   └── globals.css     ← Estilos globales, variables CSS, layout
│
├── components/
│   ├── common/
│   │   └── RevealWrapper.tsx  ← Wrapper con fade-in al scroll
│   └── ui/
│       ├── NavMenu.tsx        ← Navegación lateral con active section
│       ├── ProfileHeader.tsx  ← Nombre, título y bio
│       └── SocialLinks.tsx    ← Iconos de redes sociales
│
├── sections/
│   ├── cardLayout.ts    ← Tokens de diseño compartidos (grid, tipografía)
│   ├── About.tsx        ← Sección "Sobre mí"
│   ├── Experience.tsx   ← Sección "Experiencia"
│   ├── Projects.tsx     ← Sección "Proyectos"
│   ├── Skills.tsx       ← Sección "Skills técnicas"
│
├── data/
│   ├── experience.ts    ← Datos de experiencia laboral
│   ├── projects.ts      ← Datos de proyectos personales
│   └── skills.ts        ← Datos de habilidades técnicas
│
├── hooks/
│   ├── useActiveSection.ts  ← Detecta sección visible vía IntersectionObserver
│   └── useScrollReveal.ts   ← Dispara animación fade-in al hacer scroll
│
└── libs/               ← Vacío — sin utilidades propias aún
```

---

# Core Components

## `app/page.tsx`

### Responsibility

Orquestador principal. Renderiza sidebar (desktop), cabecera (mobile/tablet) y el listado de secciones.

### Key Functions

- Resuelve datos de `getExperience()`, `getProjects()` y `getSkills()` en paralelo
- Decide layout responsive: `aside` en lg+, `header` en mobile
- Pasa `items` como props a `Experience` y `Projects`

---

## `components/ui/NavMenu.tsx`

### Responsibility

Navegación lateral con indicador de sección activa.

### Key Functions

- `useActiveSection()` → detecta qué sección está en viewport
- Aplica clases `.nav-line-active` / `.nav-text-active` al ítem activo
- Renderiza 4 enlaces: sobre-mí, experiencia, proyectos, skills

---

## `components/common/RevealWrapper.tsx`

### Responsibility

Aplica animación de entrada (fade + translateY) cuando el elemento entra al viewport.

### Key Functions

- `useScrollReveal()` → crea un IntersectionObserver que añade clase `.revealed`
- Soporta `delay` escalonado para efectos en cascada

---

## `hooks/useActiveSection.ts`

### Responsibility

Detecta qué sección está actualmente visible usando IntersectionObserver.

### Entrada

Array de `ids` (strings)

### Salida

`string` — el id de la sección visible

### Detalle técnico

Usa `rootMargin: "-40% 0px -55% 0px"` para detectar la sección activa basado en qué porción ocupa del viewport.

---

## `sections/cardLayout.ts`

### Responsibility

Tokens compartidos de diseño para las cards de experiencia y proyectos.

Centraliza: grid layout, tipografía (leading, color, tamaño), espaciado, estilos de chips. Evita duplicación entre secciones.

---

# Business Flows

## Visualización del Portfolio

```text
Usuario abre la URL
       ↓
next build genera HTML estático (App Router)
       ↓
Layout carga: metadata, font Inter, variables CSS
       ↓
page.tsx resuelve datos (experience, projects)
       ↓
Renderiza:
  - Sidebar: ProfileHeader → NavMenu → SocialLinks
  - Main: About → Experience → Projects → Skills
       ↓
Cliente hidrata:
  - NavMenu activa IntersectionObserver
  - RevealWrapper anima cards al scrollear
       ↓
Usuario navega por anchors del nav → scroll suave
```

## Flujo de navegación (cliente)

```text
Usuario clickea "Experiencia" en NavMenu
       ↓
href="#experiencia" → scroll suave (scroll-behavior: smooth)
       ↓
IntersectionObserver detecta #experiencia en viewport
       ↓
useActiveSection actualiza estado → NavMenu pinta línea activa
```

---

# Conventions

| Convención          | Regla                                              |
| ------------------- | -------------------------------------------------- |
| **Naming archivos** | PascalCase para componentes (`ProfileHeader.tsx`)  |
| **Naming carpetas** | kebab-case (`components/ui/`)                      |
| **Import paths**    | `@/` alias mapea a `src/`                          |
| **Server/Client**   | `"use client"` solo donde hay interactividad       |
| **Estilos**         | Tailwind utility classes + variables CSS en `:root`|
| **Variación chips** | Color del chip según tecnología (azul/verde/púrpura)|
| **Animaciones**     | Transiciones CSS (no Framer Motion en uso activo)  |
| **Fuente**          | Inter para texto, Fira Code para monoespacio       |

---

# Design Decisions

## Static Site Generation (SSG)

**Razón**: Portfolio sin contenido dinámico — los datos son fijos y cambian solo con deploys. No necesita servidor.

**Tradeoff**: Cero overhead de runtime. Para actualizar contenido hay que redeployar. Beneficio aceptable para un portfolio.

---

## CSS Variables + Tailwind v4

**Razón**: Tema oscuro consistente (navy/slate/green). Tailwind v4 permite usar `text-(--color-green)` para acceder a variables CSS directamente.

**Tradeoff**: El tema está hardcodeado en `:root` — no hay soporte para modo claro. Simplicidad vs flexibilidad.

---

## IntersectionObserver nativo (CSS transitions)

**Razón**: Las animaciones de scroll y detección de sección activa se implementan con APIs del browser + transiciones CSS. Sin dependencias externas de animación.

**Tradeoff**: Menos abstracción, más control. El código es más explícito y liviano.

---

## Layout responsive con media queries CSS

**Razón**: El layout cambia de columna única (mobile) a dos columnas (desktop lg+). Se implementa con clases CSS nativas (`@media` en globals.css y Tailwind `hidden lg:flex`).

**Tradeoff**: El sidebar sticky no es trivial en mobile, por eso se oculta y se muestra un header alternativo.

---

# Limitations

## Sin CMS ni contenido dinámico

**Impacto**: Actualizar experiencia, proyectos o skills requiere editar archivos `.ts` y redeployar. No apto para personas no técnicas.

**Posible solución**: Integrar Headless CMS (Sanity, Contentful) o Markdown files con `MDX`.

---

## Sin modo claro

**Impacto**: Solo tema oscuro. Usuarios con preferencia `prefers-color-scheme: light` ven el mismo tema.

**Posible solución**: Agregar toggle manual + media query `prefers-color-scheme`.

---

## Sin página de proyecto individual

**Impacto**: Al hacer clic en un proyecto no hay una página de detalle. Tampoco hay archive/ filtros.

**Posible solución**: Agregar rutas dinámicas `/proyectos/[slug]` con `generateStaticParams`.

---

## Sin tests

**Impacto**: Cero cobertura. Sin seguridad de regresión en refactors.

**Posible solución**: Agregar tests de componente con Vitest + Testing Library.

---

## Sin analítica

**Impacto**: No se puede medir tráfico, clics, ni comportamiento de usuarios.

**Posible solución**: Agregar Vercel Analytics o Google Analytics vía `next/script`.

---

# Future Improvements

1. **Modo claro/oscuro** — toggle con `useTheme` + variable CSS swap
2. **Páginas de detalle** — ruta dinámica por proyecto con descripción extendida
3. **Internacionalización** — i18n con `next-intl` (es/en)
4. **Blog / Writing** — sección de artículos técnicos con MDX
5. **Tests** — cobertura mínima en hooks y componentes críticos
6. **Analytics** — Vercel Analytics para tracking de visitas
7. **Performance budget** — auditoría Lighthouse en CI
8. **Modo offline** — Service Worker precache para disponibilidad sin red
