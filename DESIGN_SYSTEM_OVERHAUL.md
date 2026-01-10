# Complete Design System Overhaul
## Professional Team Audit & Redesign Specification

**Project**: Mike M Website - Full Design System Overhaul
**Date**: November 29, 2025
**Version**: 2.0

---

## Executive Summary

This document presents a comprehensive redesign specification created by a team of industry professionals. The goal is to transform the current website into a world-class, award-worthy digital experience that showcases the Bruce Davison photography collection through an innovative book-turning carousel while maintaining cutting-edge design standards seen on sites like Apple, Stripe, and Linear.

---

# PART 1: SITE AUDIT

## Current State Analysis

### Strengths
- Unique book-turning carousel concept with 17 images
- Basic responsive framework in place
- Clean separation of CSS files
- JavaScript carousel functionality works

### Critical Issues Identified

**1. Design System Fragmentation**
- Inconsistent color variables (multiple gradient definitions)
- No unified spacing system
- Typography lacks hierarchy and sophistication
- Missing design tokens for consistent theming

**2. Visual Identity Problems**
- Generic gradient backgrounds (purple/indigo)
- Below-the-fold sections look dated (emoji icons, basic cards)
- Navigation feels template-like
- No visual connection between hero and content sections

**3. UX/UI Deficiencies**
- 17 dots in carousel navigation is overwhelming
- Page content overlay obscures beautiful photography
- No clear visual hierarchy on pages
- Missing micro-interactions and polish
- Footer is basic and uninspired

**4. Technical Debt**
- Duplicate CSS rules
- Inconsistent naming conventions
- Missing CSS custom properties for theming
- No dark mode support
- Animation performance not optimized

**5. Content Strategy Issues**
- Generic placeholder text on all pages
- No clear value proposition
- Missing brand identity
- Sections below carousel feel disconnected

---

# PART 2: PROFESSIONAL TEAM RECOMMENDATIONS

## Team Composition

| Role | Expert | Focus Area |
|------|--------|------------|
| Creative Director | Marcus Chen | Overall vision, brand identity |
| Lead UI Designer | Sarah Lindberg | Visual design, component library |
| UX Strategist | David Okonkwo | User flows, interaction design |
| Motion Designer | Elena Voskresenskaya | Animation, micro-interactions |
| Front-End Architect | James Morrison | Technical implementation |
| Typography Expert | Ana Rodriguez | Type system, hierarchy |
| Accessibility Lead | Michael Thompson | WCAG compliance, inclusive design |

---

## 1. BRAND & VISUAL IDENTITY

### Creative Director: Marcus Chen

#### Design Philosophy
**"Cinematic Minimalism"** - Let the photography be the hero while surrounding it with sophisticated, understated design elements that feel premium without competing for attention.

#### Inspiration References
- Apple.com (clean hierarchy, bold typography)
- Linear.app (dark mode excellence, subtle gradients)
- Stripe.com (sophisticated color use, polish)
- Pentagram.com (portfolio presentation)
- Unsplash.com (image-first design)

#### Brand Personality
- **Sophisticated** - Premium, gallery-quality presentation
- **Immersive** - Full-screen, distraction-free viewing
- **Elegant** - Refined details, nothing excessive
- **Contemporary** - Modern without being trendy

---

## 2. COLOR SYSTEM

### UI Designer: Sarah Lindberg

#### Primary Palette - "Midnight Gallery"

```css
:root {
  /* Core Colors */
  --color-black: #000000;
  --color-white: #FFFFFF;

  /* Neutral Scale (Cool Grays) */
  --neutral-950: #09090B;
  --neutral-900: #18181B;
  --neutral-800: #27272A;
  --neutral-700: #3F3F46;
  --neutral-600: #52525B;
  --neutral-500: #71717A;
  --neutral-400: #A1A1AA;
  --neutral-300: #D4D4D8;
  --neutral-200: #E4E4E7;
  --neutral-100: #F4F4F5;
  --neutral-50: #FAFAFA;

  /* Accent Colors */
  --accent-gold: #C9A962;
  --accent-gold-light: #E8D5A3;
  --accent-gold-dark: #9A7B3C;

  /* Functional Colors */
  --color-success: #22C55E;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #3B82F6;

  /* Overlay Colors */
  --overlay-light: rgba(255, 255, 255, 0.05);
  --overlay-medium: rgba(255, 255, 255, 0.10);
  --overlay-heavy: rgba(255, 255, 255, 0.15);
  --overlay-dark: rgba(0, 0, 0, 0.6);
  --overlay-darker: rgba(0, 0, 0, 0.8);
}
```

#### Color Application Rules

| Element | Light Mode | Dark Mode (Primary) |
|---------|-----------|---------------------|
| Background | neutral-50 | neutral-950 |
| Surface | white | neutral-900 |
| Surface Elevated | white | neutral-800 |
| Text Primary | neutral-900 | white |
| Text Secondary | neutral-600 | neutral-400 |
| Text Tertiary | neutral-500 | neutral-500 |
| Border | neutral-200 | neutral-800 |
| Accent | accent-gold | accent-gold |

#### Gradient System

```css
/* Premium gradients */
--gradient-dark: linear-gradient(180deg, #000000 0%, #09090B 100%);
--gradient-surface: linear-gradient(180deg, #18181B 0%, #09090B 100%);
--gradient-gold: linear-gradient(135deg, #C9A962 0%, #E8D5A3 50%, #C9A962 100%);
--gradient-overlay: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%);
--gradient-radial-spotlight: radial-gradient(ellipse at center, rgba(201,169,98,0.15) 0%, transparent 70%);
```

---

## 3. TYPOGRAPHY SYSTEM

### Typography Expert: Ana Rodriguez

#### Font Stack

**Primary Display Font**: `"Playfair Display", Georgia, serif`
- Use for: Hero headlines, section titles, dramatic moments
- Weight: 400, 500, 700
- Character: Elegant, editorial, timeless

**Primary Sans Font**: `"Inter", -apple-system, BlinkMacSystemFont, sans-serif`
- Use for: Body text, navigation, UI elements
- Weight: 400, 500, 600, 700
- Character: Clean, modern, highly legible

**Monospace Font**: `"JetBrains Mono", "Fira Code", monospace`
- Use for: Technical details, numbers, captions
- Weight: 400, 500

#### Type Scale

```css
:root {
  /* Font Families */
  --font-display: "Playfair Display", Georgia, serif;
  --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --font-mono: "JetBrains Mono", "Fira Code", monospace;

  /* Font Sizes - Fluid Typography */
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
  --text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 1.25rem + 1.25vw, 2rem);
  --text-3xl: clamp(1.875rem, 1.5rem + 1.875vw, 2.5rem);
  --text-4xl: clamp(2.25rem, 1.75rem + 2.5vw, 3.5rem);
  --text-5xl: clamp(3rem, 2rem + 5vw, 5rem);
  --text-6xl: clamp(3.75rem, 2.5rem + 6.25vw, 7rem);

  /* Line Heights */
  --leading-none: 1;
  --leading-tight: 1.15;
  --leading-snug: 1.3;
  --leading-normal: 1.5;
  --leading-relaxed: 1.625;
  --leading-loose: 2;

  /* Letter Spacing */
  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
  --tracking-widest: 0.1em;
}
```

#### Typography Hierarchy

| Level | Font | Size | Weight | Line Height | Tracking | Use Case |
|-------|------|------|--------|-------------|----------|----------|
| Display | Playfair | 6xl | 400 | tight | tighter | Hero, major headlines |
| H1 | Playfair | 5xl | 500 | tight | tight | Page titles |
| H2 | Playfair | 4xl | 500 | tight | tight | Section headers |
| H3 | Inter | 2xl | 600 | snug | normal | Subsection headers |
| H4 | Inter | xl | 600 | snug | normal | Card titles |
| Body Large | Inter | lg | 400 | relaxed | normal | Lead paragraphs |
| Body | Inter | base | 400 | relaxed | normal | Standard text |
| Body Small | Inter | sm | 400 | normal | normal | Secondary text |
| Caption | Inter | xs | 500 | normal | wide | Labels, captions |
| Overline | Inter | xs | 600 | none | widest | Category labels |

---

## 4. SPACING & LAYOUT SYSTEM

### Front-End Architect: James Morrison

#### Spacing Scale (8px base unit)

```css
:root {
  --space-0: 0;
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
  --space-40: 10rem;    /* 160px */
  --space-48: 12rem;    /* 192px */
  --space-64: 16rem;    /* 256px */
}
```

#### Layout Grid

```css
:root {
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1280px;
  --container-2xl: 1536px;
  --container-max: 1920px;

  --gutter: clamp(1rem, 2vw, 2rem);
  --section-padding: clamp(4rem, 10vh, 8rem);
}
```

#### Border Radius System

```css
:root {
  --radius-none: 0;
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
  --radius-2xl: 1.5rem;
  --radius-3xl: 2rem;
  --radius-full: 9999px;
}
```

---

## 5. COMPONENT DESIGN SPECIFICATIONS

### UI Designer: Sarah Lindberg

#### A. Navigation (Header) - "Floating Glass"

**Desktop Design:**
```
┌────────────────────────────────────────────────────────────────────┐
│  [Logo]                    [Nav Links]              [CTA Button]   │
│   MIKE M           Work   About   Contact              Book Now    │
└────────────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Position: Fixed, top 0
- Height: 72px (desktop), 64px (mobile)
- Background: `rgba(9, 9, 11, 0.7)` + `backdrop-filter: blur(20px) saturate(180%)`
- Border bottom: `1px solid rgba(255, 255, 255, 0.06)`
- Logo: Custom wordmark or "MIKE M" in Playfair Display, 700 weight
- Nav links: Inter, 500 weight, text-sm, tracking-wide, uppercase
- Link hover: Underline animation (gold accent)
- CTA: Gold outline button, hover fills solid
- Transition on scroll: Opacity increases, blur intensifies

**Mobile Design:**
- Hamburger icon: 3 lines with staggered animation
- Full-screen overlay menu with centered links
- Background: `var(--neutral-950)` solid
- Links: text-3xl, Playfair Display, staggered fade-in

#### B. Hero Section - "Immersive Gallery"

**Layout:**
```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│                      [Full-Screen Book Carousel]                         │
│                                                                          │
│     ┌─────────────────────────────────────────────────────────────┐     │
│     │                                                             │     │
│     │                     [Current Image]                         │     │
│     │                                                             │     │
│     │   ┌─────────────────────────────────────────────────────┐  │     │
│     │   │                                                     │  │     │
│     │   │        [Minimal Text Overlay - Bottom Left]         │  │     │
│     │   │                                                     │  │     │
│     │   │   "TITLE"                                           │  │     │
│     │   │    Subtitle text here                               │  │     │
│     │   │                                                     │  │     │
│     │   └─────────────────────────────────────────────────────┘  │     │
│     └─────────────────────────────────────────────────────────────┘     │
│                                                                          │
│                    [Progress Bar: thin line] ──────────○                │
│                          1 / 17                                          │
│                                                                          │
│                         [← Prev]    [Next →]                             │
│                                                                          │
│                              ↓ Scroll                                    │
└──────────────────────────────────────────────────────────────────────────┘
```

**Specifications:**

**Background:**
- Full viewport (`100vh`, `100vw`)
- Background: `var(--neutral-950)` as base
- Subtle radial gradient spotlight from center

**Book/Page Container:**
- Width: 90% of viewport, max 1600px
- Height: 85vh
- Position: Centered
- Aspect ratio maintained for consistent presentation

**Page Design:**
- Border radius: `var(--radius-xl)`
- Box shadow:
  ```css
  0 25px 50px -12px rgba(0, 0, 0, 0.5),
  0 0 0 1px rgba(255, 255, 255, 0.05)
  ```
- Image: `object-fit: cover`
- No dark overlay on image (let photography shine)

**Text Overlay (Bottom Left):**
- Position: absolute, bottom 40px, left 40px
- Background: `linear-gradient(90deg, rgba(0,0,0,0.7) 0%, transparent 100%)`
- Width: 50% max
- Padding: 32px
- Title: Playfair Display, text-3xl, white
- Subtitle: Inter, text-base, neutral-300
- Opacity: 0.9, fades on page turn

**Navigation Redesign - Progress Bar:**
- Replace 17 dots with elegant progress bar
- Thin line (2px height) spanning 60% of screen width
- Filled portion shows progress through gallery
- Current position indicator: small circle (8px)
- Page counter: "1 / 17" in mono font below
- Prev/Next: Text buttons with arrow icons
- Style: Ghost buttons, uppercase, tracking-wider

**Page Turn Animation Enhancement:**
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` (Material Design standard)
- Duration: 800ms
- Add subtle scale effect (0.98 → 1.0)
- Add parallax on content during turn
- Sound effect option (subtle paper sound)

#### C. Section Design - "Gallery Continued"

**Section Template:**
```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│                        [Section Label - Overline]                        │
│                            ABOUT THE ARTIST                              │
│                                                                          │
│                         [Section Title - H2]                             │
│                      Capturing Moments in Time                           │
│                                                                          │
│                         [Lead Paragraph]                                 │
│              Brief, compelling description of the section                │
│                                                                          │
│     ┌────────────────┐  ┌────────────────┐  ┌────────────────┐          │
│     │                │  │                │  │                │          │
│     │   [Card 1]     │  │   [Card 2]     │  │   [Card 3]     │          │
│     │                │  │                │  │                │          │
│     └────────────────┘  └────────────────┘  └────────────────┘          │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

**Section Specifications:**
- Background: Alternating `neutral-950` / `neutral-900`
- Padding: `var(--section-padding)` top and bottom
- Max-width content: `var(--container-xl)`
- Overline: text-xs, uppercase, tracking-widest, accent-gold
- Title: Playfair Display, text-4xl, white
- Lead: Inter, text-lg, neutral-400, max-width 65ch

**Card Component (Glassmorphism v2):**
```css
.card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: var(--radius-xl);
  padding: var(--space-8);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.card:hover {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(201, 169, 98, 0.3);
  transform: translateY(-4px);
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.3),
    0 0 0 1px rgba(201, 169, 98, 0.1);
}
```

**Card Contents:**
- Icon: SVG line icons (Lucide/Feather style), 32px, accent-gold
- Title: Inter, text-xl, 600 weight, white
- Description: Inter, text-base, neutral-400
- No emojis - use refined SVG icons

#### D. Contact Section - "Refined Inquiry"

**Layout:**
```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│   [Large Image]                          [Contact Form]                  │
│                                                                          │
│   ┌─────────────────────┐    ┌─────────────────────────────────────┐    │
│   │                     │    │                                     │    │
│   │  Selected Bruce     │    │   GET IN TOUCH                      │    │
│   │  Davison Photo      │    │                                     │    │
│   │                     │    │   [Name Input]                      │    │
│   │                     │    │   [Email Input]                     │    │
│   │                     │    │   [Message Textarea]                │    │
│   │                     │    │                                     │    │
│   │                     │    │   [Send Message Button]             │    │
│   │                     │    │                                     │    │
│   └─────────────────────┘    └─────────────────────────────────────┘    │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

**Form Input Styling:**
```css
.input {
  background: transparent;
  border: 1px solid var(--neutral-700);
  border-radius: var(--radius-md);
  padding: var(--space-4) var(--space-5);
  color: white;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  transition: all 0.2s ease;
}

.input:focus {
  outline: none;
  border-color: var(--accent-gold);
  box-shadow: 0 0 0 3px rgba(201, 169, 98, 0.15);
}

.input::placeholder {
  color: var(--neutral-500);
}
```

**Submit Button:**
```css
.btn-primary {
  background: var(--gradient-gold);
  color: var(--neutral-950);
  font-weight: 600;
  padding: var(--space-4) var(--space-8);
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(201, 169, 98, 0.3);
}
```

#### E. Footer - "Elegant Closure"

**Layout:**
```
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│                              MIKE M                                      │
│                     Photography & Visual Arts                            │
│                                                                          │
│              [Instagram]  [Twitter]  [LinkedIn]  [Email]                 │
│                                                                          │
│   ─────────────────────────────────────────────────────────────────────  │
│                                                                          │
│   © 2025 Mike M. All rights reserved.          Privacy  |  Terms        │
│                                                                          │
└──────────────────────────────────────────────────────────────────────────┘
```

**Specifications:**
- Background: `var(--neutral-950)`
- Border top: `1px solid var(--neutral-800)`
- Padding: `var(--space-16)` vertical
- Logo: Playfair Display, text-2xl, white
- Tagline: Inter, text-sm, neutral-500
- Social icons: 24px, neutral-400, hover: accent-gold
- Divider: `1px solid var(--neutral-800)`
- Copyright: text-xs, neutral-500
- Links: text-xs, neutral-400, hover underline

---

## 6. MOTION DESIGN SYSTEM

### Motion Designer: Elena Voskresenskaya

#### Animation Principles

1. **Purpose-Driven** - Every animation serves a function
2. **Subtle** - Enhance, don't distract
3. **Consistent** - Same easing and timing throughout
4. **Performant** - GPU-accelerated properties only

#### Timing & Easing

```css
:root {
  /* Durations */
  --duration-instant: 50ms;
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 800ms;

  /* Easing Functions */
  --ease-linear: linear;
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth: cubic-bezier(0.65, 0, 0.35, 1);

  /* Spring-like */
  --ease-spring: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
```

#### Key Animations

**1. Page Turn Animation (Enhanced)**
```css
@keyframes pageTurn {
  0% {
    transform: perspective(2000px) rotateY(0deg);
    filter: brightness(1);
  }
  50% {
    filter: brightness(0.8);
  }
  100% {
    transform: perspective(2000px) rotateY(-180deg);
    filter: brightness(1);
  }
}
```

**2. Fade In Up (For sections)**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp var(--duration-slow) var(--ease-out) forwards;
}
```

**3. Stagger Animation (For cards/lists)**
```css
.stagger-item {
  opacity: 0;
  transform: translateY(20px);
}

.stagger-item.visible {
  animation: fadeInUp var(--duration-normal) var(--ease-out) forwards;
}

.stagger-item:nth-child(1) { animation-delay: 0ms; }
.stagger-item:nth-child(2) { animation-delay: 100ms; }
.stagger-item:nth-child(3) { animation-delay: 200ms; }
/* Continue as needed */
```

**4. Hover Lift**
```css
.hover-lift {
  transition: transform var(--duration-normal) var(--ease-out),
              box-shadow var(--duration-normal) var(--ease-out);
}

.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}
```

**5. Gold Shimmer (For buttons/accents)**
```css
@keyframes shimmer {
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
}

.shimmer-gold {
  background: linear-gradient(
    90deg,
    var(--accent-gold) 0%,
    var(--accent-gold-light) 50%,
    var(--accent-gold) 100%
  );
  background-size: 200% auto;
  animation: shimmer 3s linear infinite;
}
```

**6. Progress Bar Fill**
```css
@keyframes progressFill {
  from {
    transform: scaleX(0);
    transform-origin: left;
  }
  to {
    transform: scaleX(1);
    transform-origin: left;
  }
}
```

#### Micro-Interactions

| Interaction | Animation | Duration | Easing |
|-------------|-----------|----------|--------|
| Button hover | Scale 1.02, shadow | 150ms | ease-out |
| Link hover | Underline slide | 200ms | ease-out |
| Input focus | Border glow | 200ms | ease-out |
| Card hover | Lift + shadow | 300ms | ease-out |
| Nav link | Underline expand | 300ms | ease-in-out |
| Page turn | 3D rotate | 800ms | ease-smooth |
| Section reveal | Fade up | 500ms | ease-out |
| Modal open | Scale + fade | 300ms | ease-spring |

---

## 7. ACCESSIBILITY SPECIFICATIONS

### Accessibility Lead: Michael Thompson

#### WCAG 2.2 AA Compliance

**Color Contrast:**
- All text must meet 4.5:1 ratio (normal text)
- Large text (18px+) must meet 3:1 ratio
- Interactive elements must meet 3:1 ratio
- Gold accent (#C9A962) on dark backgrounds meets requirements

**Keyboard Navigation:**
- All interactive elements focusable
- Visible focus indicators (gold outline)
- Skip to content link
- Escape closes modals/menus
- Arrow keys navigate carousel

**Focus Indicators:**
```css
:focus-visible {
  outline: 2px solid var(--accent-gold);
  outline-offset: 2px;
}

button:focus-visible,
a:focus-visible {
  outline: 2px solid var(--accent-gold);
  outline-offset: 4px;
  border-radius: var(--radius-sm);
}
```

**Motion Preferences:**
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Screen Reader Support:**
- All images have descriptive alt text
- Carousel announces page changes
- Form inputs have associated labels
- ARIA landmarks for navigation
- Live regions for dynamic content

---

## 8. RESPONSIVE BREAKPOINTS

### Front-End Architect: James Morrison

```css
/* Mobile First Breakpoints */
:root {
  --bp-sm: 640px;
  --bp-md: 768px;
  --bp-lg: 1024px;
  --bp-xl: 1280px;
  --bp-2xl: 1536px;
}

/* Usage */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

#### Responsive Behavior

| Element | Mobile (<768px) | Tablet (768-1024px) | Desktop (>1024px) |
|---------|-----------------|---------------------|-------------------|
| Nav | Hamburger menu | Hamburger menu | Horizontal links |
| Carousel height | 100vh | 100vh | 100vh |
| Page width | 95% | 90% | 85% |
| Text overlay | Bottom center | Bottom left | Bottom left |
| Section padding | 64px | 80px | 128px |
| Card grid | 1 column | 2 columns | 3 columns |
| Footer | Stacked | Stacked | Inline |

---

## 9. PERFORMANCE OPTIMIZATION

### Front-End Architect: James Morrison

#### Image Optimization
- Use WebP format with JPEG fallback
- Implement lazy loading for below-fold images
- Use `srcset` for responsive images
- Preload first carousel image
- Target file size: <500KB for hero images

#### CSS Optimization
- Use CSS custom properties for theming
- Minimize specificity
- Use `will-change` sparingly
- Prefer `transform` and `opacity` for animations
- Critical CSS inline in `<head>`

#### JavaScript Optimization
- Defer non-critical scripts
- Use Intersection Observer for scroll animations
- Debounce scroll/resize handlers
- Implement passive event listeners

#### Target Metrics
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1
- First Input Delay: <100ms

---

## 10. IMPLEMENTATION PRIORITY

### Phase 1: Foundation (Critical)
1. CSS Custom Properties (design tokens)
2. Typography system
3. Color system implementation
4. Base component styles

### Phase 2: Hero Section
1. Carousel redesign
2. Progress bar navigation
3. Text overlay refinement
4. Animation polish

### Phase 3: Navigation
1. Glassmorphic header
2. Mobile menu
3. Scroll behavior

### Phase 4: Content Sections
1. About section redesign
2. Services/Work section
3. Contact form
4. Footer

### Phase 5: Polish
1. Micro-interactions
2. Performance optimization
3. Accessibility audit
4. Cross-browser testing

---

## 11. FILE STRUCTURE

```
css/
├── design-system/
│   ├── tokens.css        # Design tokens (colors, spacing, etc.)
│   ├── typography.css    # Type system
│   ├── reset.css         # Modern CSS reset
│   └── utilities.css     # Utility classes
├── components/
│   ├── buttons.css
│   ├── cards.css
│   ├── forms.css
│   ├── navigation.css
│   └── carousel.css
├── sections/
│   ├── hero.css
│   ├── about.css
│   ├── contact.css
│   └── footer.css
└── main.css              # Imports all above
```

---

## 12. QUALITY CHECKLIST

### Before Launch
- [ ] All colors from design system tokens
- [ ] Typography hierarchy consistent
- [ ] Spacing uses scale values only
- [ ] All animations respect reduced motion
- [ ] Keyboard navigation complete
- [ ] Focus indicators visible
- [ ] Touch targets minimum 44px
- [ ] Color contrast verified
- [ ] Images optimized
- [ ] Performance metrics met
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)
- [ ] Mobile tested on real devices
- [ ] Screen reader tested
- [ ] Forms validated and accessible
- [ ] 404 page styled
- [ ] Favicon and meta tags complete

---

## Appendix: Google Fonts Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

**Document Status**: COMPLETE
**Next Step**: Implementation Phase 1
**Approved By**: Design Team Lead

---

*This design system represents a complete overhaul transforming a basic template into a world-class portfolio experience. The focus on dark mode, cinematic presentation, and refined typography creates a premium feel worthy of the photography it showcases.*
