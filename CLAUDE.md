# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # development server at localhost:3000
npm run build    # production build (run to verify no errors)
npm run lint     # ESLint check
```

## Stack

Next.js 16 (App Router) + React + TypeScript + Tailwind CSS v4. Single-page static site — no backend, no API routes.

## What This Site Is

Billboard landing page for **Levit8 Equity Inc** (Yinka Ayeni). Target audience: owners of Canadian home services businesses (HVAC, Plumbing, Roofing, Hydrovac, etc.) who are open to selling. Design inspired by huntersearchcapital.com.

## Architecture

All sections live in `src/components/` and are composed in `src/app/page.tsx`. No routing needed beyond the single page.

```
src/
├── app/
│   ├── layout.tsx       # Montserrat + Inter fonts, metadata
│   ├── page.tsx         # Composes all section components
│   └── globals.css      # CSS custom properties (--navy, --gold, etc.), shared utility classes
└── components/
    ├── Nav.tsx           # Fixed nav, scrolled-state background via useEffect
    ├── Hero.tsx          # Full-viewport, typewriter cycling headline (useTypewriter hook inside)
    ├── WhatWeLookFor.tsx # 6 criteria cards, dark bg
    ├── WhatSellersExpect.tsx # 6 promise items, light bg
    ├── About.tsx         # Two-column — copy + 4 principle blocks
    ├── ContactForm.tsx   # Formspree POST; falls back to mailto on fetch error
    └── Footer.tsx        # Wordmark, copyright, LinkedIn icon
```

## Design System

All design tokens are CSS custom properties in `globals.css`:

| Token | Value | Use |
|---|---|---|
| `--navy` | `#0B1623` | Primary background |
| `--navy-mid` | `#112031` | Alternate dark sections |
| `--gold` | `#C9922A` | Accent, CTAs, borders |
| `--gold-light` | `#DBA94A` | Hover state for gold |
| `--text-muted` | `#8a9ab5` | Body copy on dark |
| `--transition` | `175ms cubic-bezier(.215,.61,.355,1)` | All hover transitions |

Shared utility classes also in `globals.css`: `.btn-cta`, `.btn-cta-outline`, `.section-label`, `.nav-link`, `.criteria-card`, `.expect-item`, `.form-input`, `.divider`.

## Contact Form

`ContactForm.tsx` POSTs to Formspree. Replace `"YOUR_FORM_ID"` in the fetch URL with the actual Formspree endpoint after creating a free account at formspree.io. Falls back to a `mailto:` link on network failure.

## Brand Voice

Direct, no fluff — matches Yinka's brand. Avoid marketing jargon. Copy should be clear enough that a seller can repeat it back accurately.
