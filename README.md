# ashutosh0624.github.io

Personal portfolio of Ashutosh Kumar Tiwari — built with [Astro](https://astro.build) and deployed to GitHub Pages via GitHub Actions.

Live site: https://ashutosh0624.github.io

## Local development

```bash
npm ci
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Where to edit content

| What to change | File |
|---|---|
| Name, summary, current work, papers, jobs, skills | `src/data/site.ts` |
| Add a project / case study | `src/content/projects/<name>.md` (frontmatter schema: `src/content.config.ts`) |
| Colors, fonts, spacing | `src/styles/global.css` (`:root` variables) |

When a project's repository becomes public, add `repo: https://github.com/...` to its `.md` frontmatter and a "View on GitHub" button appears automatically.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and deploys it to GitHub Pages.
One-time setup: repository **Settings → Pages → Source = GitHub Actions**.
