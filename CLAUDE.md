# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint via Next.js
npm run start    # Start production server
```

No test suite is configured.

## Architecture

Single-page portfolio built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. The entire site renders from a single route (`app/page.tsx`).

**Data flow:** All portfolio content (experience, skills, certifications, projects, about text, nav items) lives in `app/constants/index.ts` as typed arrays. Components import directly from there — no API calls or external data fetching.

**Component structure:**
- `app/page.tsx` composes four top-level layout components: `Navbar`, `Header`, `Body`, `Footer`
- `Body` renders all sections (About, Experience, Projects, Skills, Certifications) using shared primitives from `app/Components/shared/`
- Shared primitives: `Section` (titled wrapper), `Timeline` (experience entries), `ImageGrid` (skills/certs), `ProjectCard`

**Theme system:** `app/providers/ThemeProvider.tsx` provides a React context wrapping the whole app (in `layout.tsx`). It toggles a `dark` class on `<html>` and persists to `localStorage`. Dark mode variants throughout use Tailwind's `dark:` prefix. Images requiring dark-mode adjustments use `ImageItem.darkMode` (`invert`, `brightness`) from `app/types/index.ts`.

**Animations:** `useFadeInOnScroll` hook (`app/hooks/useFadeInOnScroll.ts`) uses `IntersectionObserver` to trigger Tailwind transition classes (`opacity-0 translate-y-10` → `opacity-100 translate-y-0`). Custom CSS animations (wave hand) are defined in `globals.css`.

**Styling conventions:** Reusable Tailwind component classes (`.card-base`, `.link-button`, `.image-grid`, `.hover-scale`) are defined in `globals.css` under `@layer components`. Use these before adding new utility combinations inline.

**Types:** All shared interfaces are in `app/types/index.ts`. Adding a new section means extending the types there and adding data to `constants/index.ts`.
