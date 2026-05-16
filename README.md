# JG University Landing Page

> A premium, fully responsive university landing page built with **Next.js 16** and **Tailwind CSS v4**, inspired by [jguni.in](https://jguni.in/).

---

## 🚀 Live Demo

**Hosted Link:** `https://jg-university.vercel.app` *(deploy to Vercel to activate)*

---

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| Fonts | Inter + Playfair Display (Google Fonts) |
| Deployment | Vercel |

---

## 🗂️ Project Structure

```
src/
├── app/
│   ├── globals.css       # Design system, keyframes, custom utilities
│   ├── layout.tsx        # Root layout, fonts, SEO metadata
│   └── page.tsx          # Single-page assembly
├── components/
│   ├── Navbar.tsx        # Sticky glassmorphism navbar + animated mobile drawer
│   ├── Hero.tsx          # Split-screen hero with floating cards & stats
│   ├── WhyChooseUs.tsx   # 6-feature highlights grid with hover effects
│   ├── About.tsx         # Two-column: stats grid + vision typography
│   ├── Programs.tsx      # Program cards: Engineering, Management, BCA/MCA, Sciences
│   ├── Testimonials.tsx  # Auto-sliding testimonial + placement sidebar
│   ├── CTA.tsx           # Admissions form with loading & success states
│   └── Footer.tsx        # 4-column semantic footer
└── hooks/
    └── useInView.ts      # Reusable IntersectionObserver hook for scroll animations
```

---

## ✅ Features & Requirements Checklist

### Sections
- [x] **Navbar** — Glassmorphism backdrop-blur, sticky, animated hamburger, sliding mobile drawer
- [x] **Hero** — Bold headline with shimmer text, split-screen layout, floating info cards, stats row, dual CTAs
- [x] **Why Choose Us** — 6-feature grid (Research, Placements, Global, Campus, Faculty, Scholarships)
- [x] **About** — 8-metric stats grid, accreditation badges, chancellor quote, three institutional pillars
- [x] **Programs** — 4 colour-coded cards with specialisations (Engineering, Management, BCA/MCA, Sciences)
- [x] **Testimonials** — Auto-scroll slider (6 stories) + placement stats sidebar + recruiter grid
- [x] **CTA** — Inquiry form with name/phone/programme, loading spinner, success state, brochure download
- [x] **Footer** — 4 columns: Brand+Social, Academic, Resources, Contact; legal bottom bar

### Technical
- [x] **Next.js App Router** with TypeScript
- [x] **Tailwind CSS v4** with custom `@theme` design tokens
- [x] **Fully Responsive** — Mobile, tablet, desktop
- [x] **Animations & Transitions** — Scroll-triggered entrance animations, hover effects, shimmer text, floating cards, glassmorphism, shine sweeps
- [x] **Semantic HTML** — `<main>`, `<nav>`, `<section>`, `<article>`, `<aside>`, `<footer>`, `<address>`, `aria-*` labels
- [x] **SEO** — Title, description, keywords, Open Graph, Twitter Card, robots meta
- [x] **Clean Code** — Modular components, shared hooks, consistent naming

### Design System
- **Primary:** Deep Blue `#002147`
- **Accent:** Gold/Amber `#D4AF37`
- **Background:** Off-white `#F8FAFC`
- **Typography:** Inter (body) + Playfair Display (headings)

---

## 🏃 Getting Started

```bash
# Clone the repo
git clone https://github.com/YOUR_USERNAME/jg-university-landing.git
cd jg-university-landing

# Install dependencies
npm install

# Run development server
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm run start
```

---

## 🌐 Deploy to Vercel

```bash
npm i -g vercel
vercel --prod
```

Or connect the GitHub repo directly at [vercel.com/new](https://vercel.com/new).

---

## 📧 Submission Details

| Field | Value |
|-------|-------|
| **Submission To** | vikas@codingjr.online |
| **Deadline** | 17 May 2026 |
| **GitHub Repo** | `https://github.com/YOUR_USERNAME/jg-university-landing` |
| **Demo Video** | *(record with OBS / Loom — 2–5 min walkthrough)* |
| **Hosted Link** | `https://jg-university.vercel.app` |

### Demo Video Checklist
- [ ] Desktop full-page walkthrough (all 7 sections)
- [ ] Mobile responsive demo (375px width)
- [ ] Navbar hamburger animation & mobile drawer
- [ ] Hero entrance animations (shimmer, floating cards, staggered fade-ins)
- [ ] Scroll-triggered section animations (About, Programs, Testimonials)
- [ ] Testimonial auto-slider (with pause on hover)
- [ ] CTA form interaction (fill → loading spinner → success state)

---

## 📝 Notes

- All code is original work, written from scratch.
- No UI library dependencies — pure Tailwind CSS v4 + custom CSS keyframes.
- The `useInView` hook is a custom zero-dependency Intersection Observer implementation.
