# Momen Salman Portfolio

A responsive personal portfolio website for a mobile app developer, built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion. The site presents experience, skills, education, featured projects, and contact options through a polished dark interface with smooth motion.

## Live Site

https://www.momen.info/

## Overview

This project is designed as a professional portfolio with a strong visual identity and clear section-based navigation. It includes a loading screen, custom cursor, animated hero section, about section, skills, experience, education, project cards, contact form, and footer.

## Features

- Fully responsive one-page portfolio layout
- Animated loading screen with Framer Motion
- Custom cursor component
- Smooth navigation between page sections
- Hero section with profile image, social links, stats, and call-to-action buttons
- Featured projects section with 3D tilt cards and live/code links
- Contact section with Formspree integration
- Dark visual style with gradients, glass effects, and motion details
- Tailwind-based styling and reusable section components
- GitHub Pages deployment script included

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React icons
- Radix UI dependencies
- Formspree contact endpoint
- GitHub Pages deployment tooling

## Project Structure

```text
src/
├── App.tsx                         # Main app composition and loading state
├── main.tsx                        # React entry point
├── index.css                       # Global styles and Tailwind layers
├── components/
│   └── CustomCursor.tsx            # Custom pointer interaction
└── sections/
    ├── Navigation.tsx              # Header and section navigation
    ├── Hero.tsx                    # Intro, profile image, stats, and CTAs
    ├── About.tsx                   # Personal summary section
    ├── Skills.tsx                  # Skills and tools section
    ├── Experience.tsx              # Experience timeline/content
    ├── Education.tsx               # Education and certifications
    ├── Projects.tsx                # Featured project cards
    ├── Contact.tsx                 # Contact details and message form
    └── Footer.tsx                  # Footer links and closing content
```

## Main Flow

1. `App.tsx` shows a short animated loading screen.
2. After loading, the main page renders the custom cursor, navigation, all sections, and footer.
3. `Hero.tsx` introduces the developer and links to GitHub, LinkedIn, and email.
4. `Projects.tsx` highlights selected Flutter projects with tech stacks, features, code links, and demos.
5. `Contact.tsx` sends form submissions to Formspree and shows success/error feedback.

## Getting Started

### Requirements

- Node.js 18 or newer
- npm

### Run Locally

```bash
git clone https://github.com/dev-momensalman/Personal-Portfolio.git
cd Personal-Portfolio
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy

```bash
npm run deploy
```

## Notes for Reviewers

- The main structure is easy to follow from `src/App.tsx`.
- Section content lives in `src/sections`, which keeps the single-page layout organized.
- Motion behavior is concentrated in the section files and powered by Framer Motion.
- The contact form uses Formspree, so testing submissions requires network access.
- The current featured projects are configured directly inside `src/sections/Projects.tsx`.

## Future Improvements

- Move project, skills, and experience data into separate content files
- Add unit tests for reusable UI behavior
- Add accessibility checks for custom cursor and motion-heavy interactions
- Add a reduced-motion mode for users who prefer less animation
- Add CMS or JSON-driven content updates
