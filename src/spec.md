# Specification

## Summary
**Goal:** Replace the app’s logo with the user-provided logo everywhere it appears and restore the previous (older) theme styling.

**Planned changes:**
- Swap all occurrences of the current SolviroStudio logo/favicon assets in the UI to use the user-provided logo (served as static assets under `frontend/public/assets/generated`).
- Restore the prior theme (colors/typography/component styling) while keeping `.brand-gradient-bg` and `.brand-gradient-text` utility classes available and working.
- Ensure no backend changes are introduced for logo/theme updates and keep existing routing/asset serving as static-only.

**User-visible outcome:** The site shows the user-provided logo consistently (including header and favicon) and the overall look/feel matches the previous theme again.
