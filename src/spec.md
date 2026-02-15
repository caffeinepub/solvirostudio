# Specification

## Summary
**Goal:** Replace the site-wide SolviroStudio text branding with the user-uploaded logo, including an updated favicon.

**Planned changes:**
- Add the uploaded logo file to frontend static assets and generate optimized web variants (header/nav logo and square favicon/icon) that remain crisp on light and dark backgrounds.
- Update header/navigation and footer components to render the new logo image (with accessible alt text) instead of the text “SolviroStudio”, maintaining existing spacing/alignment and stable scroll behavior.
- Update HTML head metadata to reference the new favicon derived from the uploaded logo.

**User-visible outcome:** The site header and footer show the new SolviroStudio logo image (instead of text), and the browser tab favicon updates to match the new logo.
