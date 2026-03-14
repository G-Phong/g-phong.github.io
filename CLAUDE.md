# CLAUDE.md — phong-portfolio

Personal portfolio website for Gia-Phong Tran, built with React and hosted on GitHub Pages.

## Commands

```bash
npm start          # Local dev server (localhost:3000)
npm run build      # Production build (CI=false to suppress warnings as errors)
npm run deploy     # Build + deploy to GitHub Pages via gh-pages
npm test           # Run tests
```

## Architecture

State-based routing — no React Router. The active section is tracked as a string in `App.js`:

```
"timeline" | "projects" | "passions"
```

The state flows from `App` → `Navigation` (highlights active tab) → `Content` (renders the right section).

## Component Overview

```
src/
├── App.js                        ← Root: holds active-tab state
├── components/
│   ├── Header.jsx                ← Name, portrait photo, subtitle
│   ├── Navigation.jsx            ← 3-button tab bar
│   ├── Content.jsx               ← Conditionally renders active section + Footer
│   ├── Timeline.jsx              ← Career/education timeline
│   ├── timelineElements.js       ← Data for Timeline
│   ├── Projects.jsx              ← Coding projects (with carousel)
│   ├── Passions.jsx              ← Hobbies (chess, sports, ...)
│   └── Footer.jsx                ← Contact links
└── assets/                       ← Images, icons, videos
```

## Key Libraries

- `react-vertical-timeline-component` — Timeline section
- `react-responsive-carousel` — Project image carousels
- `react-player` — Video playback
- `gh-pages` — GitHub Pages deployment

## Deploy Notes

- Homepage is set to `http://g-phong.github.io/` in `package.json`
- `CI=false` in the build script prevents ESLint warnings from breaking the build
- Always run `npm run deploy` (not just `build`) to push to the live site