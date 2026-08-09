# Site Improvements Roadmap

Research-backed improvements for Next.js client sites, tailored to Le Mirage Negril.
Compiled 2026-08-09.

## 1. SEO & Discoverability (highest ROI)

- [x] **Google Tag Manager** — installed via `@next/third-parties` (`GTM-T7LGG2X8`) in `src/app/layout.tsx`.
- [x] **`sitemap.ts` + `robots.ts`** — Next.js file conventions generate these automatically. Pairs with Google Search Console setup.
- [x] **Per-page metadata** — every route (rooms, weddings, reservations) exports its own title/description via the Metadata API instead of one site-wide title.
- [x] **JSON-LD structured data** — `Resort` schema (subtype of `LodgingBusiness`) with contact info, social profiles, and room count. Google recommends JSON-LD exclusively for hotels; room-level and offer-level markup can surface pricing directly in search results.
  - TODO: add street address and geo-coordinates once confirmed with the client (improves local SEO / map pack).
  - TODO: consider `FAQPage` schema for common traveler questions and `AggregateRating` if verified reviews exist.
- [ ] **Open Graph images** — generate branded social-share images per page with `opengraph-image.tsx` + `ImageResponse`. Big for hospitality (links shared on WhatsApp/Instagram/Facebook).
- [ ] **Google Search Console** — TXT record from Gourmet Marketing still needs to be added to DNS (`google-site-verification=ofHlysUB_D5UEaOZeN3K96HLCOkaRRdU8lbDKyHWFYs`). DNS appears to be on Vercel.

## 2. Performance / Core Web Vitals

Google's March 2026 core update increased CWV ranking weight. Sites passing all three thresholds see ~24% lower bounce rates; a 1-second delay costs ~7% of conversions.

- [ ] `priority` on hero LCP images; correct `sizes` on masonry/gallery grids (`ImageMasonDisplay`).
- [ ] Dynamic `import()` for below-the-fold heavy components (carousels, framer-motion sections).
- [ ] Bundle audit with `@next/bundle-analyzer` — Bootstrap + react-bootstrap + Radix + framer-motion likely overlap.
- [ ] Extend ISR / on-demand revalidation (already wired for GammaCMS) to rooms/weddings pages.
- [ ] Route all future third-party scripts (chat widgets, pixels) through GTM, not inline.

## 3. Measurement & Monitoring (recurring-revenue services)

- [ ] **Conversion events** — push booking-form submits, reservation clicks, phone-number taps into the GTM `dataLayer` via `sendGTMEvent` from `@next/third-parties`. Gourmet Marketing manages tags; the site must emit events.
- [ ] **Error monitoring** (Sentry) + uptime checks.
- [ ] **Real-user CWV** — Vercel Analytics / Speed Insights (field data diverges from Lighthouse lab scores).
- [ ] **Monthly CWV + SEO audit** as a retainer deliverable — vitals regress whenever campaigns add widgets.

## 4. Conversion & UX

- [ ] Booking funnel polish — Suspense loading states, optimistic submit, persistent mobile "Book Now" CTA.
- [ ] **Accessibility pass (WCAG 2.2 AA)** — ADA suits target hotel sites specifically.
- [ ] **Draft mode / CMS previews** for GammaCMS content before publishing.
- [ ] **i18n** — German/French/Spanish landing pages for European travelers via Next.js internationalized routing.

## Sources

- Next.js SEO Guide 2026 — https://pagepro.co/blog/nextjs-seo/
- Next.js 15 SEO: Metadata & Optimization — https://www.digitalapplied.com/blog/nextjs-seo-guide
- Core Web Vitals for agencies 2026 — https://blog.duda.co/core-web-vitals-what-agencies-need-to-know-in-2026
- Core Web Vitals 2026 changes — https://www.rivuletiq.com/core-web-vitals-2026-whats-changed-and-how-to-pass/
- Structured data for hotels 2026 — https://obvlo.com/resources/structured-data-markup-hotels/
- Hotel schema guide — https://onlineownership.com/guide-to-hotel-schema-and-marking-up-your-hotel/
- Top-selling agency services 2026 — https://almcorp.com/blog/top-selling-services-digital-agencies-2026/
