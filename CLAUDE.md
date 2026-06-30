# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (Vite)
npm run build     # tsc -b && vite build
npm run lint      # eslint
npm run preview   # preview the production build locally
```

No test suite is configured.

## Architecture

Single-page React 19 app built with Vite + TypeScript + Tailwind CSS v4 + Motion (`motion/react`) + Phosphor Icons.

**Page layout** — `src/App.tsx` composes sections top-to-bottom:
`Navbar → Hero → Story → Gallery → Quote → Visit → Footer`

Each section is its own component in `src/components/`. There are no shared utility files or contexts — all logic stays inside each component.

**Assets** — `src/assets/` holds seven JPEG photos: `logo.jpg`, `interior.jpg` (Hero), `pourover.jpg` (Story), `windows.jpg` / `drinks.jpg` / `alcove.jpg` / `counter.jpg` (Gallery).

## Design System

All design tokens are CSS custom properties defined in `:root` inside `src/index.css`. **Never hard-code colours or fonts inline** — always reference a variable.

The site uses a **dark theme** throughout — `--bg` is deep warm near-black, all text tokens are light.

### Color tokens
| Variable | Role |
|---|---|
| `--bg` | Page background (deep warm near-black) |
| `--surface` | Panels, cards |
| `--lift` | Hover / active states on surface elements |
| `--amber` | Primary CTA, accents, warm gold |
| `--amber-dk` | Hover on amber elements |
| `--botanical` | Coffee-plant green |
| `--ink` | Main text (warm cream / parchment) |
| `--muted` | Secondary text |
| `--rim` | Borders on dark background |

### Z-index tokens
`--z-base: 10` / `--z-sticky: 20` / `--z-overlay: 30` / `--z-modal: 50` — always use these on `zIndex` style props rather than bare numbers.

### Typography
| Variable | Usage |
|---|---|
| `--font-display` (Amatic SC) | Hero tagline **only** |
| `--font-serif` (Cardo) | Headings, blockquotes |
| `--font-body` (Cabin) | All body copy |

`h1`, `h2`, `h3` are globally set to `--font-serif` in `index.css`.

### Animation pattern
Each component defines `const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]` locally. Every animated component:
1. Calls `const prefersReduced = useReducedMotion()` from `motion/react`
2. Passes `prefersReduced ? {} : { opacity: 0, y: N }` as the `initial` prop
3. Hero plays on load (`animate`); all other sections trigger on scroll (`whileInView` with `viewport: { once: true }`).

## Brand Rules (from `PRODUCT.md`)

- **Filipino first.** Tagline "Pahinga sa Bawat Higop" stays in Filipino.
- **Poetry over promotion.** Copy leads with feeling, not features or bullet lists.
- **The place is the brand.** Draw warmth from actual materials (amber wood, tropical plants), not decorative beige.
- **Nothing fights for attention.** One idea per fold, generous spacing.
- **Anti-references to avoid:** Starbucks-clone aesthetic, urban hipster minimalism (black/white/single bold sans), AI-cream-beige pages, formal luxury hotel sites.
- Accessibility baseline: WCAG AA. Reduced-motion support is required in all animations.