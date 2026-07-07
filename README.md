# Portfolio — "The Audit Trail"

A production portfolio built section by section. Every claim on the site
(a stat, a project, a credential) is designed to carry its own evidence —
the visual system stays quiet so the proof can do the talking.

## Stack

- **Next.js 16** (App Router, Turbopack, React Server Components)
- **React 19**
- **TypeScript** (strict mode)
- **Tailwind CSS v4** (CSS-first theme, no `tailwind.config.js`)
- **Motion** (formerly Framer Motion — `motion/react`)
- **next-themes** for light/dark mode
- GSAP is intentionally not installed. Motion's `useScroll`/`whileInView`
  cover every scroll-linked and gesture animation this site needs; GSAP
  will only be added if a later section genuinely requires timeline
  sequencing Motion can't do.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
npm run typecheck
```

Requires Node.js 18.17+.

## Folder structure

```
src/
  app/                  Routes, layout, metadata, globals.css
  components/
    layout/             Persistent chrome: header, footer, skip link, theme toggle
    sections/           One folder per numbered section (hero/, about/, …)
    ui/                 Small reusable primitives (Container, Badge, …)
    motion/             Shared Motion variants/wrappers
    providers/          Context providers (theme)
  content/              Data-as-code — the words and structured content,
                        kept separate from presentation so it can feed
                        more than one component (e.g. a project feeds both
                        the grid and its case-study page)
  lib/                  fonts.ts, utils.ts (cn helper)
  types/                Shared TypeScript interfaces
  hooks/                Custom hooks
```

## Sample content

`src/content/site.ts` (and the content files each section adds) ship with
realistic placeholder details — a sample name, handles, and description —
so the design can be judged honestly. Replace these with your own
information; no other file needs to change when you do.

## Design tokens

Defined once in `src/app/globals.css`, consumed everywhere via Tailwind
utilities (`bg-background`, `text-accent`, `font-serif`, etc.) so no
component ever hardcodes a color or font. See that file's comments for the
full palette and the reasoning behind the light/dark pair.

## Build progress

- [x] **Foundation** — config, design tokens, fonts, theming, SEO scaffolding
- [ ] 1. Hero
- [ ] 2. About
- [ ] 3. Skills
- [ ] 4. Experience
- [ ] 5. Featured Projects
- [ ] 6. Project Case Studies
- [ ] 7. Tech Stack
- [ ] 8. Testimonials
- [ ] 9. Blog
- [ ] 10. Contact
- [ ] 11. Footer
