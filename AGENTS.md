# AGENTS.md - AI Agent Context

## Project Overview

Personal portfolio website for Sergio Alejandro Morales Cuesta (Mobile Specialist). Built with Next.js 15 App Router, TypeScript, Tailwind CSS 4, and next-intl for internationalization (EN/ES/PT).

**Domain:** `xchecho.com` (production)
**Deployment:** Vercel/Cloud Run (standalone output)

## Tech Stack

```
Framework: Next.js 15.4.9 (App Router)
React: 19.2.1
Language: TypeScript 5.9.3
Styling: Tailwind CSS 4.1.11 (native @theme)
Animations: motion (framer-motion v12)
i18n: next-intl 4.8.3
Icons: lucide-react
```

## Project Structure

```
app/
  [locale]/                    # Dynamic locale routing (en/es/pt)
    layout.tsx                 # Root layout, metadata, NextIntlClientProvider
    page.tsx                   # Landing page
    not-found.tsx              # 404 page (mobile bug theme)
    [...not_found]/            # Catch-all for 404
    opengraph-image.tsx        # Dynamic OG image generation
    robots.ts                  # robots.txt
    projects/
      [slug]/
        page.tsx               # Project detail page (SSG with generateStaticParams)
  components/                  # UI components (all 'use client')
    Hero.tsx, Navbar.tsx, BentoSkills.tsx, Projects.tsx
    ProjectCard.tsx, ProjectDetail.tsx
    Experience.tsx, Contact.tsx, Footer.tsx
    ScrollReveal.tsx, FloatingIcons.tsx, LanguageSwitcher.tsx
  hooks/
    useTranslation.ts          # ⚠️ LEGACY - not used, components use next-intl
  globals.css                  # Tailwind imports + custom theme

src/
  i18n/
    config.ts                  # locales: ['en', 'es', 'pt'], defaultLocale: 'en'
    request.ts                 # next-intl server config
    routing.ts                 # routing config + navigation helpers
  messages/
    en.json, es.json, pt.json  # Translation files

lib/
  utils.ts                     # cn() helper (clsx + tailwind-merge)

hooks/
  use-mobile.ts                # ⚠️ NOT USED
```

## Key Conventions

### 1. Internationalization (next-intl)
- All components use `useTranslations()` from `next-intl`
- Translation keys: `namespace.key` (e.g., `hero.title`, `projects.items`)
- Arrays in JSON: `projects.items`, `experience.items`
- Access via `t.raw('items')` and cast to TypeScript type
- Locale routing: `/en`, `/es`, `/pt` (always prefixed)

### 2. Styling (Tailwind v4)
- Use `@theme` directive in `globals.css` for custom values
- Color palette: dark theme (`bg-[#0a0a0a]`, `text-white`, `text-zinc-400`)
- Accent colors: `blue-400`, `cyan-300` (gradients)
- Border style: `border-white/10`, `border-white/5`
- Hover effects: `glow-hover` class (custom CSS)
- Animations: `motion` library (framer-motion)

### 3. Components
- All UI components are `'use client'` (client-side rendering)
- Use `motion` for animations (not `framer-motion` directly)
- Icons from `lucide-react`
- Images: Next.js `<Image>` with remote patterns for `picsum.photos`
- Responsive: mobile-first, breakpoints at `md:` and `lg:`

### 4. Metadata & SEO
- Dynamic metadata in `layout.tsx` via `generateMetadata()`
- Open Graph image: `opengraph-image.tsx` (1200x630)
- Sitemap: `sitemap.ts` (generates for all locales)
- Robots: `robots.ts` (allow all)
- Canonical URL: `https://xchecho.com`
- Hreflang alternates: en/es/pt

### 5. Data Flow
- Static content (no backend)
- Projects/experience data in translation JSON files
- Project detail pages use `generateStaticParams()` for SSG
- Each project has: `slug`, `detail` (role, date, overview, problem, solution, features, gallery)
- No API routes currently
- No database

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run clean        # Clean Next.js cache
```

## Important Decisions

1. **Standalone output:** `output: 'standalone'` in next.config.ts for container deployment
2. **Image optimization:** AVIF + WebP formats enabled
3. **TypeScript strict:** `strict: true` in tsconfig
4. **ESLint ignored in build:** `ignoreDuringBuilds: true` (legacy config)
5. **Motion transpiled:** `transpilePackages: ['motion']` for compatibility
6. **Locale prefix always:** `localePrefix: 'always'` in routing config

## Known Issues / TODO

- ⚠️ `app/hooks/useTranslation.ts` is legacy code, not used (components use next-intl)
- ⚠️ `hooks/use-mobile.ts` is not used anywhere
- ⚠️ `not-found.tsx` has hardcoded Spanish text (should use next-intl)
- ⚠️ `@google/genai` in package.json but not used (reserved for future chatbot)

## Roadmap (Planned Features)

1. ✅ **Project detail pages:** Pagination/routing for individual project explanations — DONE
2. **Dark/Light mode:** Theme toggle with system preference detection
3. **AI chatbot:** Gemini + Hermes integration for portfolio Q&A
4. **Blog section:** Technical articles (future)
5. **SEO optimization:** Enhanced metadata, structured data, performance

## Before Committing

- [ ] Run `npm run lint`
- [ ] Run `npm run build` (check for TypeScript errors)
- [ ] Test all 3 locales (en/es/pt)
- [ ] Verify responsive design (mobile/tablet/desktop)
- [ ] Check metadata/SEO (use browser dev tools)
- [ ] Ensure images are optimized

## File Modification Guide

**Add new translation:** Edit `src/messages/{locale}.json`
**Add new component:** Create in `app/components/`, export in `index.ts`
**Add new page:** Create in `app/[locale]/` (follows Next.js App Router)
**Add new project detail:** Add entry to `src/messages/{locale}.json` with `slug` and `detail` fields
**Change styles:** Edit `app/globals.css` or component inline classes
**Update metadata:** Edit `app/[locale]/layout.tsx` `generateMetadata()`
**Add new locale:** Update `src/i18n/config.ts`, create `src/messages/{locale}.json`
