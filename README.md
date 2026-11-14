# ashutosh0624.github.io

Personal portfolio of Ashutosh Kumar Tiwari — built with [Astro](https://astro.build), deployed to GitHub Pages via GitHub Actions.

## Local development

```bash
npm ci
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Content kahan badlein

| Kya badalna hai | File |
|---|---|
| Naam, summary, current work, papers, jobs, skills | `src/data/site.ts` |
| Naya project / case study | `src/content/projects/<name>.md` (frontmatter schema: `src/content.config.ts`) |
| Colors, fonts, spacing | `src/styles/global.css` (`:root` variables) |

Project ka repo public ho jaaye toh uski `.md` file mein `repo: https://github.com/...` add karo — "View on GitHub" button apne aap aa jayega.

## Deploy

`main` pe push → `.github/workflows/deploy.yml` build karke GitHub Pages pe deploy karta hai.
One-time setup: repo **Settings → Pages → Source = GitHub Actions**.
