---
name: Brutal Luxury
colors:
  surface: '#fcf9f2'
  surface-dim: '#dcdad3'
  surface-bright: '#fcf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ec'
  surface-container: '#f0eee7'
  surface-container-high: '#ebe8e1'
  surface-container-highest: '#e5e2db'
  on-surface: '#1c1c18'
  on-surface-variant: '#444748'
  inverse-surface: '#31312c'
  inverse-on-surface: '#f3f0ea'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#a73918'
  on-secondary: '#ffffff'
  secondary-container: '#fe7952'
  on-secondary-container: '#6c1900'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#2c160c'
  on-tertiary-container: '#9f7c6d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#ffb5a0'
  on-secondary-fixed: '#3b0900'
  on-secondary-fixed-variant: '#862201'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#e7bead'
  on-tertiary-fixed: '#2c160c'
  on-tertiary-fixed-variant: '#5d4034'
  background: '#fcf9f2'
  on-background: '#1c1c18'
  surface-variant: '#e5e2db'
  parchment: '#FCF9F2'
  ink: '#1A1A1A'
  terracotta: '#D95D39'
  muted-earth: '#7A736E'
  border-light: '#E8E2D5'
typography:
  display-hero:
    fontFamily: Libre Caslon Text
    fontSize: 80px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Libre Caslon Text
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Libre Caslon Text
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.2'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  margin-page: clamp(2rem, 8vw, 6rem)
  gutter: 2rem
  section-gap: clamp(4rem, 12vh, 10rem)
  stack-sm: 0.5rem
  stack-md: 1.5rem
  stack-lg: 3rem
---

## Brand & Style

This design system embodies the "Pragmatic Craftsman"—a blend of high-end editorial sophistication and raw technical utility. It targets an audience that values depth, experience, and the "ink-on-paper" quality of premium physical documents.

The aesthetic, "Brutal Luxury," avoids digital-native trends like heavy shadows or vibrant blurs. Instead, it relies on exceptional typographic hierarchy, intentional whitespace, and structural vertical lines to create a storytelling layout. The emotional response is one of authority, clarity, and understated prestige. It feels curated and archival rather than disposable.

## Colors

The palette is rooted in organic, high-contrast neutrals.

- **Parchment (#FCF9F2)**: The primary surface color, providing a warm, non-glare background that feels like premium stationery.
- **Ink (#1A1A1A)**: Used for all primary body text and structural elements to maintain maximum legibility.
- **Terracotta (#D95D39)**: A sophisticated accent used sparingly for emphasis, italics in headlines, and small semantic indicators.
- **Muted Earth (#7A736E)**: Used for metadata, dates, and secondary labels to create a clear visual hierarchy.

Avoid pure blacks or pure whites; the warmth of the off-white and the softened dark grey are essential to the "luxury" aspect of the brand.

### Dark Mode

The site supports a dark theme via a toggle in the header. It swaps `--parchment` and `--ink` so the page reads as an inversion of the light theme:

- **Parchment (#1A1A1A)**: Becomes the dark background, replacing the warm cream.
- **Ink (#FCF9F2)**: Becomes the light text color, replacing the near-black.
- **Muted Earth (#8A847E)**: Lightened slightly for readability on dark bg.
- **Border Light (#2A2A2A)**: Darkened to create subtle separation on dark bg.
- **Terracotta (#D95D39)**: Unchanged — it works equally well on both backgrounds.

Persistence uses `localStorage` with a `prefers-color-scheme` fallback. An inline `<script>` in the `<head>` sets the attribute before paint to prevent FOUC. The contact section naturally becomes a "light accent" in dark mode, maintaining the inversion pattern.

## Typography

The typographic system is the core of this design system. It uses a high-contrast pairing of a classic serif and a modern monospaced utility font.

- **Editorial Serif**: Use **Libre Caslon Text** for all headings. Use italics frequently within headlines to highlight key phrases or "narrative voice."
- **Modern Sans**: **Plus Jakarta Sans** provides a clean, approachable contrast for long-form body copy.
- **Technical Mono**: **JetBrains Mono** is used for metadata, dates, technical specs, and small UI labels (e.g., "JUN 11" or "PHP 20 YRS").

Maintain generous line heights for body copy to ensure a "relaxed" reading experience similar to a printed essay.

## Layout & Spacing

The layout philosophy is "Document-First," utilizing a fixed-width central column (max-width 1100px) that allows for significant "oxygen" in the margins.

- **Vertical Rhythm**: Use very large vertical gaps between major sections to signal transitions in the narrative.
- **The Marginalia Column**: On desktop, use the left or right margins for small metadata notes (dates, Roman numerals, or "p.s." asides) to mimic a scholar's manuscript.
- **Dividers**: Use thin, horizontal rules (1px) in `border-light` to separate list items or sub-sections.
- **Grids**: Use a 12-column grid for card layouts, but allow content to span 6 or 12 columns primarily to maintain the vertical "stack" feel.

## Elevation & Depth

This design system is intentionally flat. Depth is achieved through **Tonal Layering** and **Structural Overlays** rather than shadows.

- **Flat Planes**: UI elements like cards or sections should exist on the same plane as the background, separated by 1px borders or subtle shifts in background tone (e.g., a slightly darker cream).
- **Ink-on-Paper**: Interactive elements (buttons) should feel like stamps or physical labels.
- **High-Contrast Overlays**: For modals or "Say Hi" sections, use a solid `Ink` (#1A1A1A) background with `Parchment` text to create a dramatic inversion of the system's primary palette. No blurs or frosted glass effects should be used.

## Shapes

The shape language is architectural and precise.

- **Base Corner Radius**: Use a very subtle `0.25rem` (Soft) radius for buttons and input fields to take the "edge" off without losing the structured feel.
- **Hard Edges**: Cards, images, and structural dividers should use `0` (Sharp) corners to maintain the editorial/document aesthetic.
- **Pill Accents**: Only use pill shapes for small status indicators or "tags" where a clear distinction from structural blocks is required.

## Components

### Buttons
Primary buttons should be solid `Ink` with `Parchment` text, using a subtle `0.25rem` radius. Secondary buttons should be ghost-style with a 1px `Ink` border and a trailing arrow icon (e.g., `↓` or `↗`).

### Cards
Cards should have no background and no shadow, defined instead by a 1px `border-light` or by sitting within a clear vertical stack. Headline typography inside cards should be the primary driver of hierarchy.

### Inputs & Forms
Form fields use a simple 1px bottom border or a very light `Parchment-variant` background. Focus states should be indicated by a shift to `Terracotta` for the label or border.

### Chips & Tags
Small, monospaced labels in all-caps. Use a very light-fill background or a 1px border. These should look like technical metadata (e.g., `CORE`, `FRONTEND`).

### Lists
"Where I've been" style lists should use horizontal rules to separate items, with dates aligned to the far left in Mono and titles in Serif for a classic resume-editorial look.
