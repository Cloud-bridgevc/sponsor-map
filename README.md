# SponsorMap

AI-native sponsorship operations and performance reporting for event organizers: extract commitments from sponsorship agreements, assign fulfilment tasks, collect evidence, and generate sponsor-ready reports that separate recorded metrics from estimates.

> **Status: work in progress.** The public website, interactive fulfilment demo and dashboard overview are built. Remaining dashboard pages, API routes (Bedrock extraction, S3 uploads, HubSpot demo requests), PostgreSQL schema and Lambda functions are not yet implemented.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3100. See `.env.example` for optional AWS and HubSpot settings.

## Principles

- The platform never generates reach, impressions, engagement or proof of delivery.
- Every metric is labelled **Recorded** (linked to a source) or **Estimate** (with its method).
- Important extracted commitments require human review before they are tracked or reported.

All organizations, people and figures in the demo data are fictional.
# sponsor-map
# sponsor-map

## Launch readiness (glow-up)

- Home page: problem section with three sourced statistics, what-we-solve, comparison table, AI section, founder cards, roadmap and FAQ, with scroll-reveal motion that respects reduced motion. Sections live in `components/Glow.tsx` (generated markup), styles in `app/glow.css`, motion in `public/glow.js`.
- New routes: `/privacy`, `/terms` (review drafts); new `app/sitemap.ts` and `app/robots.ts`; `metadataBase` set to sponsormap.site. Footer credits the founders.
- Ship assets: `opengraph-image.png`, `twitter-image.png`, `apple-icon.png`, `icon.svg`, `public/manifest.webmanifest`, icons, founders JSON-LD.
- Phones: added a menu (the main nav was hidden below 900px with no way to open it) and fixed header/top-bar overflow.

### Content to confirm before launch
- **Founders are placeholders:** Temitope Afolabi (Founder/CEO) and Obinna Eze (Co-founder/CTO) — replace in `components/Glow.tsx` (team section), the footer in `app/(site)/layout.tsx` and the JSON-LD in `app/layout.tsx`.
- Contact email `hello@sponsormap.site` is a placeholder — create the forward or replace it.
- Statistics (Forrester 2024; European Sponsorship Association; WFA & Lumency) — re-check figures and links.
- Privacy notice and terms need operator details and governing law.
