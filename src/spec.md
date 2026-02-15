# Specification

## Summary
**Goal:** Create a single-page, extra-long scrolling portfolio website for SolviroStudio (Meta Ads + Creative Design for solar companies) with strong trust-building sections and a working contact form that stores submissions in a Motoko canister.

**Planned changes:**
- Build a single-page layout with a fixed top navigation linking to in-page sections: Home, Portfolio, About Us, Services, Client Results, Testimonials, Contact Us.
- Apply a modern, clean visual system using brand colors #FFD233, #FFA500, #FF6A00 and a consistent gradient treatment (#FFD233 → #FFA500 → #FF6A00) for buttons/accents/highlights.
- Implement the Hero section with the exact provided headline, subheadline, CTA text (“Get Started Now”), and gradient background.
- Implement About section with the exact provided paragraph, an (optional) team illustration area, and CTA (“Learn More”).
- Implement Services section listing exactly three services with 1–2 sentence descriptions each and CTA (“Explore Services”).
- Implement Portfolio section with 5–7 project blocks; each includes an ad design image, campaign goal, and results/metrics; include CTA (“View Full Portfolio”).
- Implement Client Results section with the exact provided intro text, a layout area for multiple result graphics/charts, and CTA (“Get Your Results”).
- Implement Testimonials section with provided supporting text and 3–5 relevant client quotes.
- Implement Contact Us section with the exact provided text, email display (solvirostudio@gmail.com), phone placeholder, and a simple form with submit button (“Contact Me”) and clear success/failure UI.
- Add backend methods (single Motoko actor) to persist contact submissions and query/list them for administrative review.
- Add static asset support and rendering for team illustration, portfolio ad images, and client results graphics from `frontend/public/assets/generated`.
- Ensure each major section includes its specified CTA and that CTAs perform sensible in-page navigation (e.g., scroll to Contact/Services/Portfolio).

**User-visible outcome:** Users can scroll an extra-long, sectioned SolviroStudio landing page, navigate via the top menu and CTAs, view portfolio/results/testimonials content with visuals, and submit the contact form with submissions saved for later retrieval.
