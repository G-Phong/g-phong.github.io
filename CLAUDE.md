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

State flow:
```
App.js (useState)
  ├── Header.jsx          ← static, no props
  ├── Navigation.jsx      ← receives content + handleButtonClick
  └── Content.jsx         ← receives content, conditionally renders section + Footer
```

## Component Overview

```
src/
├── App.js                        ← Root: holds active-tab state
├── App.css                       ← Global styles, dark mode, media queries
├── components/
│   ├── Header.jsx / Header.css   ← Avatar (circular), name, tagline
│   ├── Navigation.jsx            ← 3-button tab bar (timeline. / code. / passions.)
│   ├── Content.jsx               ← Conditionally renders active section + Footer
│   ├── Timeline.jsx              ← Career/education timeline
│   ├── timelineElements.js       ← Data array for Timeline (edit this to add entries)
│   ├── Projects.jsx              ← Coding projects, vertical list, clickable photo cycling
│   ├── Passions.jsx              ← Hobbies with Swiper.js coverflow carousel
│   └── Footer.jsx / Footer.css   ← GitHub, LinkedIn, Email icons + copyright
└── assets/                       ← Images, icons, videos
```

## Key Libraries

- `react-vertical-timeline-component` — Timeline section
- `swiper` — Modern coverflow carousel in Passions section
- `react-player` — Video playback
- `gh-pages` — GitHub Pages deployment

## Design System

**Dark mode** with **Electric Cyan** accent:
- Background: `#0f0f0f`
- Surface (cards, nav): `#1a1a1a`
- Border: `#2a2a2a`
- Text primary: `#e0e0e0`
- Text secondary: `#888888`
- Accent: `#00d4ff` (Electric Cyan)

Mobile breakpoint: `@media (max-width: 768px)`

## User Preferences

- **No Co-Authored-By Claude** in commit messages
- **English** for commit messages and GitHub Issues
- **Minimal, clean** — avoid over-engineering, no unnecessary abstractions
- **Ask before big design decisions** — use AskUserQuestion for layout/style choices
- **Interactive workflow** — show changes live via `npm start`, get feedback before committing
- **Dark mode first** — all new UI should match the dark theme
- Always use `Fix #X` in commit messages to auto-close GitHub Issues

## Workflow

1. Create GitHub Issue (`gh issue create`)
2. Read relevant files before changing anything
3. Make changes — user reviews live in browser (Hot Reload)
4. Commit with `Fix #X` → GitHub auto-closes the Issue
5. Push → GitHub Actions deploys to `g-phong.github.io`

## Deploy Notes

- Homepage is set to `http://g-phong.github.io/` in `package.json`
- `CI=false` in the build script prevents ESLint warnings from breaking the build
- `gh auth setup-git` is needed for HTTPS push (already configured)
- Always run `git push` — GitHub Actions handles deployment automatically

## Adding Timeline Entries

Edit `src/components/timelineElements.js`. Each entry:
```js
{
  id: N,
  title: "Job Title",
  location: "City, Country",
  description: "...",
  date: "MM/YYYY – MM/YYYY",
  icon: <WorkIcon />,         // WorkIcon or SchoolIcon
  image: img_variable,        // import at top of file
}
```