# sarac02.github.io

Personal portfolio site. Built with React, TypeScript, Vite, Tailwind CSS v4, and Framer Motion.

**Live:** https://sarac02.github.io

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # preview the production build locally
```

## Content

All copy (experience, projects, skills, education, publications) lives in one place:
[`src/data/content.ts`](src/data/content.ts). Edit that file to update the site; no need to touch components.

The downloadable resume lives at [`public/resume.pdf`](public/resume.pdf).

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the
site and publishes it to GitHub Pages automatically. In the repo settings, under **Pages**, set the source to
**GitHub Actions** (one-time setup).
