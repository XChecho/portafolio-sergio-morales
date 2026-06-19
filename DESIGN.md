# DESIGN.md - Architecture & Design System

## Vision

Professional portfolio website for Sergio Alejandro Morales Cuesta — Mobile Specialist and Senior Frontend Developer. The site showcases mobile and web projects, experience, and skills across three languages (EN/ES/PT).

**Domain:** `https://xchecho.com`
**Target audience:** Recruiters, clients, and collaborators in mobile development

## Architecture Overview

### Rendering Strategy
- **Static Site Generation (SSG):** All pages are statically generated at build time
- **No runtime data fetching:** Content is embedded in translation JSON files
- **Edge-compatible:** Output is `standalone` for container deployment (Vercel/Cloud Run)

### Routing
```
/ → redirects to /en (default locale)
/en → English version
/es → Spanish version
/pt → Portuguese version
```
- Locale prefix is always present (`localePrefix: 'always'`)
- Middleware handles locale detection and routing
- Navigation helpers: `Link`, `usePathname`, `useRouter` from `next-intl/navigation`

### File Organization
```
app/
  [locale]/              # Dynamic locale segment
    layout.tsx           # Root layout + metadata + providers
    page.tsx             # Landing (single-page scroll)
    not-found.tsx        # 404 page
  components/            # All UI components (client-side)
  globals.css            # Tailwind + custom theme

src/
  i18n/                  # next-intl configuration
  messages/              # Translation JSON files

lib/
  utils.ts               # Shared utilities (cn helper)
```

## Design System

### Color Palette (Dark Theme)
```css
Background: #0a0a0a (near-black)
Foreground: #ffffff (white)
Primary text: text-white
Secondary text: text-zinc-400
Accent: blue-400, cyan-300 (gradients)
Borders: border-white/10, border-white/5
Hover glow: rgba(34, 211, 238, 0.2)
```

### Typography
- **Headings:** Bold, tight tracking (`font-bold tracking-tight`)
- **Body:** Regular weight, relaxed leading (`leading-relaxed`)
- **Code:** Monospace (for 404 page code snippets)
- **Sizes:** Responsive scale from `text-xs` to `text-6xl`

### Spacing
- **Sections:** `py-20` (80px vertical padding)
- **Containers:** `max-w-7xl mx-auto` (1280px max width)
- **Grid gaps:** `gap-4` to `gap-12` depending on context

### Animations
- **Library:** `motion` (framer-motion v12)
- **Entry animations:** Fade + slide (`initial={{ opacity: 0, y: 30 }}`)
- **Scroll reveal:** `whileInView` with `viewport={{ once: true }}`
- **Hover effects:** Scale + lift (`whileHover={{ scale: 1.03, y: -5 }}`)
- **Floating icons:** Infinite loop with staggered delays

### Component Patterns

#### Section Layout
```tsx
<section id="section-name" className="py-20 px-6 max-w-7xl mx-auto">
  <h2 className="text-3xl font-bold mb-12">{t('title')}</h2>
  {/* Content grid */}
</section>
```

#### Card Component
```tsx
<div className="p-6 rounded-3xl border border-white/10 bg-white/5 glow-hover">
  {/* Card content */}
</div>
```

#### Button Styles
- **Primary:** `bg-white text-black font-bold rounded-xl hover:scale-105`
- **Secondary:** `border border-white/10 bg-white/5 rounded-xl hover:bg-white/10`
- **Icon button:** `p-3 border border-white/10 rounded-xl hover:bg-white/5`

## Internationalization Strategy

### Translation Structure
```json
{
  "namespace": {
    "key": "value",
    "items": [
      { "title": "...", "desc": "..." }
    ]
  }
}
```

### Usage in Components
```tsx
import { useTranslations } from 'next-intl';

export default function Component() {
  const t = useTranslations('namespace');
  
  // Simple string
  const title = t('key');
  
  // Array of objects
  const items = t.raw('items') as Array<{ title: string; desc: string }>;
  
  return <h1>{title}</h1>;
}
```

### Adding New Translations
1. Add key to `src/messages/en.json`
2. Add same key to `src/messages/es.json` and `src/messages/pt.json`
3. Use `t('key')` in component

## SEO & Metadata

### Current Implementation
- **Title:** Dynamic via `generateMetadata()` in `layout.tsx`
- **Description:** Hardcoded in metadata (should be localized)
- **Open Graph:** `opengraph-image.tsx` generates 1200x630 PNG
- **Twitter:** Summary card with large image
- **Canonical:** `https://xchecho.com`
- **Alternates:** Hreflang for en/es/pt
- **Sitemap:** Auto-generated for all locales
- **Robots:** Allow all crawlers

### Metadata Structure
```typescript
{
  title: 'Sergio Morales | Mobile Specialist & React Native Developer',
  description: 'Portfolio of Sergio Alejandro Morales Cuesta...',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://xchecho.com',
    siteName: 'Sergio Morales Portfolio',
    images: ['/assets/profile.png'],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@XChecho',
  },
  alternates: {
    canonical: 'https://xchecho.com',
    languages: {
      en: 'https://xchecho.com/en',
      es: 'https://xchecho.com/es',
      pt: 'https://xchecho.com/pt',
    },
  },
}
```

## Component Architecture

### Page Structure (Landing)
```
Navbar (fixed, backdrop blur)
├── Logo (SM.)
├── Navigation links
└── LanguageSwitcher

Hero (full viewport height)
├── Headline + subtitle
├── Description
├── CTA buttons
└── Profile image (circular)

BentoSkills (grid layout)
└── Skill cards with icons

Projects (grid of cards)
└── ProjectCard components

Experience (timeline)
└── Experience items with dates

Contact (centered card)
├── Email link
├── CV download
└── Social links

Footer
└── Copyright + attribution
```

### Reusable Components
- **ScrollReveal:** Wrapper for fade-in animations on scroll
- **FloatingIcons:** Background decorative icons (fixed position)
- **LanguageSwitcher:** Locale toggle buttons
- **ProjectCard:** Individual project display

## Data Flow

### Static Content
- Projects and experience data live in `src/messages/{locale}.json`
- Components access via `t.raw('items')` and cast to TypeScript types
- No API routes or database
- All content is bundled at build time

### Image Handling
- Local images: `/assets/` directory (profile, project screenshots)
- Remote images: `picsum.photos` allowed via `next.config.ts`
- Formats: AVIF + WebP (automatic optimization)
- Component: Next.js `<Image>` with `fill` for responsive sizing

## Technical Decisions

### Why Next.js App Router?
- Modern React patterns (Server Components, Suspense)
- Built-in routing and layouts
- Excellent SEO with static generation
- Edge runtime compatibility

### Why next-intl?
- Type-safe translations
- Seamless Next.js integration
- Locale routing out of the box
- Supports nested objects and arrays

### Why Tailwind CSS v4?
- Utility-first approach
- Custom theme via `@theme` directive
- No config file needed (inline in CSS)
- Fast build times

### Why motion (framer-motion)?
- Declarative animations
- Scroll-based triggers
- Gesture support
- Works with React 19

### Why standalone output?
- Self-contained deployment
- Works in any Node.js environment
- Optimized for containers (Docker, Cloud Run)
- No serverless vendor lock-in

## Roadmap

### Phase 1: Project Detail Pages
**Goal:** Allow users to click on a project and see detailed explanation
**Implementation:**
- Create `app/[locale]/projects/[slug]/page.tsx`
- Add project slugs to translation JSON
- Generate static paths for each project
- Include: screenshots, tech stack, challenges, results

### Phase 2: Dark/Light Mode
**Goal:** Theme toggle with system preference detection
**Implementation:**
- Add CSS variables for light theme
- Create `ThemeProvider` context
- Store preference in localStorage
- Add toggle button in Navbar
- Respect `prefers-color-scheme` media query

### Phase 3: AI Chatbot
**Goal:** Interactive Q&A about portfolio using Gemini + Hermes
**Implementation:**
- Create API route: `app/api/chat/route.ts`
- Integrate `@google/genai` SDK
- Use Hermes for conversation memory
- Add chat widget component (floating button)
- Context: portfolio content, projects, experience

### Phase 4: Blog Section
**Goal:** Technical articles about mobile development
**Implementation:**
- Create `app/[locale]/blog/page.tsx` (list)
- Create `app/[locale]/blog/[slug]/page.tsx` (detail)
- Use MDX for content (markdown + JSX)
- Add tags/categories
- RSS feed generation

### Phase 5: SEO Enhancement
**Goal:** Improve search visibility and structured data
**Implementation:**
- Add JSON-LD structured data (Person, Project schemas)
- Localize metadata descriptions
- Add breadcrumb navigation
- Optimize Core Web Vitals
- Add performance monitoring

## Accessibility Considerations

- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`)
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators on buttons/links
- Alt text on images
- Color contrast: WCAG AA compliant
- Screen reader friendly (avoid decorative icons with aria-hidden)

## Performance Optimization

- **Image optimization:** AVIF/WebP, lazy loading, responsive sizes
- **Code splitting:** Automatic via Next.js
- **Static generation:** All pages pre-rendered at build time
- **Compression:** Enabled in `next.config.ts`
- **Bundle analysis:** Use `@next/bundle-analyzer` if needed
- **Font optimization:** Use `next/font` for custom fonts (not implemented yet)

## Testing Strategy (Future)

- **Unit tests:** Vitest + React Testing Library
- **E2E tests:** Playwright for critical user flows
- **Visual regression:** Chromatic or Percy
- **Accessibility:** axe-core automated checks
- **Performance:** Lighthouse CI in CI/CD

## Deployment

### Vercel (Recommended)
```bash
vercel --prod
```
- Automatic deployments from Git
- Edge network for global performance
- Preview deployments for PRs
- Analytics and speed insights

### Docker / Cloud Run
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```
- Standalone output works in any container environment
- Minimal image size with multi-stage builds
- Health check endpoint: `/`

## Maintenance

### Adding New Content
1. **New project:** Add to `projects.items` in all 3 JSON files
2. **New experience:** Add to `experience.items` in all 3 JSON files
3. **New skill:** Add to `BentoSkills.tsx` skills array + translations

### Updating Design
1. **Colors:** Edit `@theme` in `globals.css`
2. **Spacing:** Adjust Tailwind classes in components
3. **Animations:** Modify `motion` props in components

### Monitoring
- Check Vercel analytics for performance metrics
- Monitor Core Web Vitals (LCP, FID, CLS)
- Track 404 errors via Vercel logs
- Review SEO with Lighthouse audits
