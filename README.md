# Rajdeep Sah – Personal Portfolio

A modern, data-driven personal site built with Next.js 15, React 19, Tailwind CSS 4, and Framer Motion. It ships with animated hero, timeline-based storytelling, research highlights, and a fully themed navigation experience that can be deployed to Vercel with zero additional configuration.

## Table of Contents

- [Overview](#overview)
- [Feature Highlights](#feature-highlights)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [Application Architecture](#application-architecture)
- [Customization Guide](#customization-guide)
- [Styling & Theming](#styling--theming)
- [Animations & UX](#animations--ux)
- [Deployment](#deployment)
- [Troubleshooting & Tips](#troubleshooting--tips)
- [Contact & Support](#contact--support)

## Overview

This repository contains the production-ready source code for Rajdeep Sah’s personal portfolio. The site relies on the Next.js App Router, co-locates section pages under `src/app`, and encapsulates all shared UI (navigation, theming, animated backgrounds, and page transitions) inside a reusable shell component. Content is stored in structured arrays so you can update timelines, stats, and contact information without touching layout logic.

## Feature Highlights

- **Hero & CTA** – Animated introduction with resume download, contact button, and social icons.
- **Global App Shell** – Sticky navigation, theme toggle, math-inspired hero background, and route transitions shared across every page.
- **Dedicated Pages** – About, Projects, Experience, Leadership, Research, and Contact reside on their own routes for clean deep-linking.
- **Timeline & Cards** – Data-driven components render education, experience, research, and leadership items with badges, stats, and highlights.
- **Contact Workflow** – Interactive form with optimistic UI feedback plus quick-action cards for email, phone, and social links.
- **Vercel-ready** – Uses Next.js defaults, dynamic metadata, and the Turbopack dev server for fast local iteration and painless deployment.

## Tech Stack

- **Framework**: Next.js 15 (App Router) + React 19
- **Styling**: Tailwind CSS 4 with custom globals, glassmorphism accents, and gradient helpers
- **Animation**: Framer Motion for component reveals and route transitions
- **Icons**: Lucide React
- **Fonts**: `next/font` with Geist Sans and Geist Mono
- **Tooling**: TypeScript, ESLint 9, Turbopack dev server

## Quick Start

### Requirements

- Node.js 18+
- npm 10+ (or another package manager)
- Git

### Installation

```bash
git clone <https://github.com/RajdeepSah/personalPortfolio.git>
cd portfolio
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site. The dev server automatically reloads as you edit files.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Next.js dev server with Turbopack on port 3000. |
| `npm run build` | Create an optimized production build (`.next/`). |
| `npm run start` | Serve the production build locally. |
| `npm run lint` | Run ESLint with the repo configuration. |

## Project Structure

```
.
├── package.json
├── next.config.ts
├── public/
│   ├── resume.pdf
│   └── *.svg assets
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Metadata, fonts, and AppShell wrapper
│   │   ├── globals.css         # Tailwind directives + custom styles
│   │   ├── page.tsx            # Home (Hero + Footer)
│   │   ├── about/page.tsx      # About timeline
│   │   ├── projects/page.tsx   # Project grid
│   │   ├── experience/page.tsx # Experience timeline
│   │   ├── leadership/page.tsx # Leadership highlights
│   │   ├── research/page.tsx   # Publications & research areas
│   │   └── contact/page.tsx    # Contact info + form
│   └── components/
│       ├── AppShell.tsx        # Navigation, theme provider, background, transitions
│       ├── Navigation.tsx      # Desktop/mobile nav + theme toggle
│       ├── MathBackground.tsx  # Canvas-based animated math visuals
│       ├── RouteTransition.tsx # Framer Motion route wrapper
│       ├── ThemeProvider.tsx   # Custom theme context using localStorage
│       ├── Hero.tsx            # Landing hero
│       ├── About.tsx           # Timeline component
│       ├── Projects.tsx        # Project cards
│       ├── Experience.tsx      # Experience cards & stats
│       ├── Leadership.tsx      # Leadership roles
│       ├── Research.tsx        # Publications, areas, and upcoming work
│       ├── Contact.tsx         # Contact info + form
│       └── Footer.tsx          # Site footer
└── tsconfig.json
```

## Application Architecture

- **App Shell & Theming** – `AppShell` wraps every page with `ThemeProvider`, renders the sticky navigation, and overlays the animated `MathBackground` on the home route before delegating to `RouteTransition` for page-level animations.
- **Routing Model** – Each major section lives inside `src/app/<section>/page.tsx`, so deep links stay clean and SEO-friendly. Shared layout logic resides only in `layout.tsx`.
- **Metadata & Fonts** – `src/app/layout.tsx` defines Open Graph/Twitter metadata and loads Geist fonts via `next/font`.
- **Data-driven Sections** – Timelines, cards, and stats are exported as arrays directly inside their components, making it easy to update copy without refactoring UI code.
- **Contact Form** – The form uses React state for validation feedback and simulates submission with a placeholder promise. Hook it up to an API route or third-party service for production.

## Customization Guide

1. **SEO & Branding (`src/app/layout.tsx`)**  
   Update `metadata.title`, `description`, keywords, and authors. Swap font choices or add additional metadata as needed.
2. **Navigation (`src/components/Navigation.tsx`)**  
   Edit the `navItems` array to add/remove sections, change the displayed name, and adjust social/theme controls. Link text automatically updates in both desktop and mobile menus.
3. **Hero Section (`src/components/Hero.tsx`)**  
   Replace the name, titles, and tagline. Update CTA links (resume download uses `public/resume.pdf`), and set GitHub/LinkedIn/Twitter URLs for the icon row.
4. **About Timeline (`src/components/About.tsx`)**  
   Modify the `timelineData` array to reflect education, certifications, or roles. Each entry supports period, title, description, and bullet-point details.
5. **Experience (`src/components/Experience.tsx`)**  
   Tweak the `experiences` array for professional roles, internships, or leadership work. Update `skills`, `achievements`, and `type` to control badges and colors.
6. **Projects (`src/components/Projects.tsx`)**  
   Add to the `projects` array with your own repositories, features, stack, and demo/GitHub links. Status badges automatically adapt when you change the `status` field.
7. **Leadership (`src/components/Leadership.tsx`)**  
   Refresh the `roles` array to describe clubs, community initiatives, or event work.
8. **Research (`src/components/Research.tsx`)**  
   Keep `researchAreas`, `publications`, and `upcomingResearch` current with your papers and interests. Each publication supports metadata, keywords, DOI, and outbound links.
9. **Contact (`src/components/Contact.tsx`)**  
   Update `contactInfo`, `socialLinks`, and the availability blurb. Replace the simulated `handleSubmit` logic with a real API call (REST endpoint, SMTP service, Formspree, etc.) when you are ready to accept submissions.
10. **Footer (`src/components/Footer.tsx`)**  
    Change the quick links, summary text, and social icons. This is a good place to add any required legal copy.
11. **Assets (`public/`)**  
    Swap `resume.pdf` with your own file (keep the name or update the hero/footer links accordingly) and replace any SVGs used across the site.

## Styling & Theming

- Tailwind CSS 4 is imported in `globals.css`, which also defines CSS variables, custom scrollbars, gradient text helpers, and glassmorphism utilities.
- `ThemeProvider.tsx` stores the user’s theme preference (`light`, `dark`, or `system`) in `localStorage` under `portfolio-theme`. The toggle button in the navigation consumes this context.
- Background colors, typography, and transitions inherit from the CSS variables, so you can set a new palette centrally without rewriting each component.

## Animations & UX

- Framer Motion powers section reveals, button hover/tap states, and navigation entrance animations.
- `RouteTransition.tsx` applies opacity/translate transitions whenever a route changes, creating a cohesive feel between pages.
- `MathBackground.tsx` renders layered sine waves, floating symbols, and geometric shapes on a fixed canvas to reinforce the mathematical focus of the hero.

## Deployment

### Vercel 

1. Push your fork to GitHub.
2. Import the repo into Vercel and select the `Next.js` framework preset.
3. Use the default build command (`npm run build`) and output directory (`.next`).
4. Trigger the deployment—Vercel will handle previews, production, and custom domains automatically.

### Other Platforms

- **Netlify / Render / Railway / AWS Amplify** – Build with `npm run build` and serve the `.next` output via `next start`.
- **Docker** – Use a multi-stage build (`node:18-alpine` base) to install dependencies, run `npm run build`, and start with `npm run start`.

## Troubleshooting & Tips

- Ensure your local Node.js version matches (or exceeds) the LTS 18 release to avoid Turbopack incompatibilities.
- Delete the `portfolio-theme` key from `localStorage` if you need to reset stored theme preferences while developing.
- Replace placeholder links (`#`) in Projects and Research once you have live demos or DOI URLs.
- The contact form currently simulates network latency. Wire it to an API route before going live to receive actual submissions.
- Keep SVGs lightweight to maintain the smooth hero background animation and page transition performance.

## Contact & Support

- Email: `rajdeepofficialework@gmail.com`
- LinkedIn: [https://linkedin.com/in/rajdeepsah](https://www.linkedin.com/in/rajdeep-sah-0a5363204/)
- GitHub: [https://github.com/rajdeepsah](https://github.com/rajdeepsah)

If you customize or extend the portfolio, feel free to open issues or pull requests so improvements can be shared with the community.
