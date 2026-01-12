# Paralogic Presents - Service Log

## Project: Bruce Davison Meet & Greet Website
**Domain:** www.paralogicpresents.com
**Repository:** github.com/JHGruver/paralogic-bruce-davison

---

## Session: January 12, 2026

### Completed Tasks

| Time | Task | Status |
|------|------|--------|
| - | Created loading screen animation with logo reveal | Completed |
| - | Replaced "Mike M" branding with Paralogic logo | Completed |
| - | Added "Paralogic Presents" text next to navbar logo | Completed |
| - | Added gold shimmer "Book Now" button in carousel | Completed |
| - | Fixed itinerary image display (object-fit: contain) | Completed |
| - | Commented out "Work" nav link for future use | Completed |
| - | Deployed to GitHub Pages | Completed |
| - | Connected custom domain (www.paralogicpresents.com) | Completed |
| - | Created CNAME file for domain | Completed |
| - | Updated logo to new Paralogic Presents circular logo | Completed |
| - | Made carousel smaller (55vh) to prevent control overlap | Completed |
| - | Moved controls below image (not fixed/overlapping) | Completed |
| - | Removed scroll indicator | Completed |
| - | Updated loading screen tagline for meet & greet | Completed |
| - | Created itinerary section with Fri/Sat/Sun schedule | Completed |
| - | Replaced contact image with Contact.PNG | Completed |
| - | Integrated Formspree for contact form submissions | Completed |
| - | Fixed hamburger menu z-index for mobile/tablet close functionality | Completed |
| - | Center-aligned footer logo and text with Playfair Display font | Completed |

---

### Bug Report #002

**Date:** January 12, 2026
**Status:** RESOLVED
**Severity:** High
**Component:** Mobile Navigation (Hamburger Menu)

#### Problem Description
The hamburger menu could be opened but not closed on mobile and tablet devices. The X icon to close the menu was not visible or clickable.

#### Root Cause
The mobile menu overlay had a higher z-index than the navbar, causing the hamburger icon to be hidden behind the overlay when the menu was open.

#### Fix Applied
Increased the navbar z-index from `var(--z-fixed)` (300) to `calc(var(--z-overlay) + 50)` (450) so it stays above the mobile menu overlay.

```css
.navbar {
  z-index: calc(var(--z-overlay) + 50);
}
```

---

### Bug Report #001

**Date:** January 12, 2026
**Status:** RESOLVED
**Severity:** High
**Component:** Itinerary Section Styling

#### Problem Description
The itinerary section is displaying as a plain unstyled list instead of the designed 3-column card layout with gold accents and hover effects.

#### Screenshot References
- `Screenshot 2026-01-12 at 3.53.35 PM.png`
- `Screenshot 2026-01-12 at 3.55.49 PM.png` (confirms section header renders correctly but content doesn't)

#### Visual Symptoms
- No card containers visible around each day
- No 3-column grid layout (all content stacked vertically)
- No gold accent colors on day names (Friday, Saturday, Sunday)
- No gold dot markers next to events
- No background styling or borders on day cards
- No hover effects
- Plain text rendering without proper typography hierarchy

#### Root Cause Analysis

**Primary Issue:** The CSS styles for `.itinerary-timeline`, `.itinerary-day`, `.day-header`, `.day-name`, `.day-theme`, `.day-events`, `.event-item`, `.event-marker`, and `.event-content` are not being applied.

**Possible Causes:**

1. **CSS Not Loading:** The styles were added to `style.css` but may not have been pushed to GitHub, or there's a browser cache issue.

2. **CSS Selector Mismatch:** The HTML class names may not match the CSS selectors exactly.

3. **CSS Specificity Issue:** Other styles may be overriding the itinerary styles.

4. **Missing CSS Variables:** The styles rely on CSS custom properties (e.g., `--space-8`, `--accent-gold`) that may not be defined or accessible.

#### Proposed Fix Methods

1. **Verify CSS Deployment**
   - Check if `style.css` on GitHub contains the itinerary styles
   - Force push if local changes weren't synced
   - Clear browser cache / hard refresh (Cmd+Shift+R)

2. **Validate HTML-CSS Class Matching**
   - Confirm all class names in `index.html` match CSS selectors in `style.css`
   - Check for typos in class names

3. **Inspect CSS Load Order**
   - Ensure `style.css` loads after `design-tokens.css` (for CSS variables)
   - Verify no conflicting styles in other CSS files

4. **Browser DevTools Inspection**
   - Use browser inspector to see if styles are being applied but overridden
   - Check for any CSS parsing errors in console

---

### Deployment History

| Commit | Message | Date |
|--------|---------|------|
| 15e911d | Add CNAME for custom domain | Jan 12, 2026 |
| f42a3c1 | Update logo, resize carousel, improve loading screen | Jan 12, 2026 |
| 6857591 | Add itinerary section and update contact page | Jan 12, 2026 |
| b864116 | Add cache-busting version query to CSS links | Jan 12, 2026 |
| - | Integrate Formspree contact form | Jan 12, 2026 |
| - | Fix hamburger menu z-index | Jan 12, 2026 |
| 285ff19 | Center-align footer logo and text | Jan 12, 2026 |

---

### Bug #001 Resolution

**Root Cause:** Browser caching old version of `style.css`

**Investigation Findings:**
- CSS styles were confirmed present on GitHub (verified via raw.githubusercontent.com)
- HTML class names matched CSS selectors correctly
- No CSS syntax errors found

**Fix Applied:**
Added cache-busting query parameters (`?v=2`) to all CSS file links in `index.html`:
```html
<link rel="stylesheet" href="css/style.css?v=2">
```

This forces browsers to fetch the fresh CSS file instead of using cached versions.

---

## Notes
- Contact.PNG added for contact section
- paralogic-presents-logo.png is the current logo
- itinerary.png kept for reference but no longer displayed
- Formspree endpoint: https://formspree.io/f/maqqybly
- Current CSS cache version: v=6
