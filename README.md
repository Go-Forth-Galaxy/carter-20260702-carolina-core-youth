# Carolina Core FC Youth — Site Recreation

A faithful recreation of the [Carolina Core FC Youth](https://carolinacoreyouth.com/) website — a youth soccer club in Kernersville, NC.

Built with **Next.js** (App Router, static export). The live site is deployed to GitHub Pages from the `/docs` folder as a single self-contained static page (`docs/index.html`).

## Sections
- Announcement bar (Fall 2026 registration)
- Sticky navbar: Home, Programs, Tryouts, Tournaments, Partners + a large **More** dropdown (19 items)
- Hero with "I want to play!" CTA
- Choose Your Program (5 programs)
- Player Pathway (5 stages)
- Core Tournaments band
- Signature Partners
- Footer with contact info (P.O. Box 333, Kernersville, NC 27285 · 336.992.0089)
- Cookie consent banner

## Local development
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to /docs
```

## Notes
Layout, styling, structure, and copy reproduce the source faithfully. The logo/wordmark is rebuilt as inline SVG and imagery is regenerated/placeholder, since original brand assets live on a private CDN.

## Live site
https://go-forth-galaxy.github.io/carter-20260702-carolina-core-youth/
