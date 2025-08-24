# Elevique Full Website (Next.js + Tailwind + Framer Motion)

## Quick Start
1. Install Node.js LTS from https://nodejs.org/
2. Unzip this project and open a terminal in the folder.
3. Run:
   ```bash
   npm install
   npm run dev
   ```
4. Visit http://localhost:3000

## Pages
- `/` – Home with Hero, Services, **Interactive Packages** (click to open fullscreen with portfolio), CTA.
- `/portfolio` – Grid of sample projects (link out or embed your videos).
- `/about` – Brand positioning & strengths.
- `/contact` – Contact form (Formspree endpoint; replace with your own).

## Customize
- Brand colors are defined in `tailwind.config.js` (black + #006472 + mint accent).
- Update copy & prices in `components/Packages.jsx` and other components.
- Replace Formspree URL in `pages/contact.js` with your endpoint or use mailto.

## Deploy
Push to GitHub and deploy on https://vercel.com (one click).

