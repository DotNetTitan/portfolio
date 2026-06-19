<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="MIT" />
</p>

<h1 align="center">Emmanuel Mathew - Portfolio</h1>

<p align="center">
  Personal portfolio site built with Next.js, featuring the <strong>"Brutal Luxury"</strong> design system - a warm, editorial aesthetic inspired by premium print.
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#design-system">Design System</a> •
  <a href="#deployment">Deployment</a>
</p>

---

## Features

- **Hero section** - Dynamic bio with auto-calculated experience years
- **Work Experience** - Editorial timeline with company, location, and date icons
- **Side Projects** - Strum & Spruce, Zero To DSA with tech tags and links
- **Skills** - Categorized tech stack with icons and monospaced tags
- **Writing** - Auto-fetched blog posts from dev.to at build time
- **Contact** - Email, GitHub, LinkedIn with dark inversion section
- **Responsive** - Mobile hamburger menu, fluid layouts
- **Active nav highlighting** - IntersectionObserver-based scroll tracking
- **Typography-driven** - Libre Caslon Text, Plus Jakarta Sans, JetBrains Mono
- **Flat design** - 1px borders, ink-on-paper interactions, no shadows

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js](https://nextjs.org/) 16 (App Router) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Icons | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/) |
| Fonts | Libre Caslon Text, Plus Jakarta Sans, JetBrains Mono |
| Analytics | [Vercel Analytics](https://vercel.com/analytics) |
| Package Manager | npm |

## Getting Started

```bash
# Clone
git clone https://github.com/DotNetTitan/portfolio.git

# Install
npm install

# Dev server
npm run dev

# Production build
npm run build

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) to view.

## Design System

The full design specification lives in [`DESIGN.md`](./DESIGN.md).

**The "Brutal Luxury" aesthetic:**

- **Parchment** `#FCF9F2` - warm, non-glare background like premium stationery
- **Ink** `#1A1A1A` - primary body text and structural elements
- **Terracotta** `#D95D39` - sparing accent for emphasis
- **Muted Earth** `#7A736E` - metadata and secondary labels

No pure blacks, no pure whites, no shadows. Depth through tonal layering and structural overlays.

## Deployment

Deploy to [Vercel](https://vercel.com/) with zero config:

```bash
npx vercel
```

Or connect your GitHub repo for automatic deployments.

## License

MIT
