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

### Color tokens
| Variable | Role |
|---|---|
| `--bg` | Page background (white) |
| `--surface` | Card / subtle background |
| `--coffee` | Bold accent sections (dark espresso) |
| `--coffee-lt` | Hover on coffee-bg elements |
| `--amber` | Primary CTA, accents, gold |
| `--amber-dk` | Hover on amber elements |
| `--botanical` | Coffee-plant green |
| `--ink` | Body text (warm near-black) |
| `--muted` | Secondary text on white |
| `--ink-inv` | Text on dark (`--coffee`) sections |
| `--muted-inv` | Secondary text on dark sections |
| `--rim` | Subtle border on white |

### Typography
| Variable | Usage |
|---|---|
| `--font-display` (Amatic SC) | Hero tagline **only** |
| `--font-serif` (Cardo) | Headings, blockquotes |
| `--font-body` (Cabin) | All body copy |

`h1`, `h2`, `h3` are globally set to `--font-serif` in `index.css`.

### Animation pattern
Every animated component:
1. Calls `const prefersReduced = useReducedMotion()` from `motion/react`
2. Passes `prefersReduced ? {} : { opacity: 0, y: N }` as the `initial` prop
3. Uses the shared easing constant `const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]`

## Brand Rules (from `PRODUCT.md`)

- **Filipino first.** Tagline "Pahinga sa Bawat Higop" stays in Filipino.
- **Poetry over promotion.** Copy leads with feeling, not features or bullet lists.
- **The place is the brand.** Draw warmth from actual materials (amber wood, tropical plants), not decorative beige.
- **Nothing fights for attention.** One idea per fold, generous spacing.
- **Anti-references to avoid:** Starbucks-clone aesthetic, urban hipster minimalism (black/white/single bold sans), AI-cream-beige pages, formal luxury hotel sites.
- Accessibility baseline: WCAG AA. Reduced-motion support is required in all animations.