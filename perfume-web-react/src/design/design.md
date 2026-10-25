# Floras: Design System

**Brand:** Floras, *Wellness & Fragmented*
**Product:** Premium fragrance e-commerce landing page
**Mood:** Soft futurism, warm minimalism, botanical luxury, editorial calm

Color values are estimated from the design and live in `colors.css` as CSS custom properties.

---

## 1. Design Principles

1. **Quiet luxury.** Generous whitespace, few elements per view, nothing shouting.
2. **Warm and tactile.** Stone, wood, petals and amber glass drive the palette. No cool tones.
3. **Editorial typography.** A high-contrast serif carries emotion; a light sans carries information.
4. **Product as sculpture.** Bottles sit on rocks and driftwood with soft light, so photography does most of the talking.
5. **Asymmetry with balance.** Staggered image collages and off-center text, held together by a calm grid.

---

## 2. Color

### Brand browns
| Token | Hex | Usage |
|---|---|---|
| `--color-brown-900` | `#3f2b1e` | Strong text, hover on buttons |
| `--color-brown-800` | `#5a3f2b` | Primary buttons, "NEW" / "COLLECTIONS" display text |
| `--color-brown-700` | `#6f4d36` | Headings (H1, H2) |
| `--color-brown-600` | `#8b6246` | Divider lines, promo code, accents |
| `--color-brown-500` | `#a47b5d` | Hover, secondary headings |

### Warm neutrals
| Token | Hex | Usage |
|---|---|---|
| `--color-sand-100` | `#f7f6f4` | Page background |
| `--color-sand-200` | `#efe8e0` | Subtle panels, footer speckle |
| `--color-sand-300` | `#e3d5c5` | Hero beige, borders |
| `--color-sand-400` | `#d0bba5` | Newsletter gradient (light) |
| `--color-sand-500` | `#b89c80` | Newsletter gradient (dark) |

### Blush and accents
| Token | Hex | Usage |
|---|---|---|
| `--color-blush-100` | `#fdeee8` | Icon circle backgrounds |
| `--color-blush-200` | `#f8d9cc` | Soft peach surfaces |
| `--color-blush-300` | `#eeb9a4` | Photo backdrops |
| `--color-gold-400` | `#d4a23c` | Amber / champagne highlights |
| `--color-leaf-500` | `#5a8f3e` | Botanical badge |

**Rules**
- Page background is always `--bg-page` (off-white), never pure white. Pure white is reserved for cards and inputs.
- Brown on off-white contrast: use `brown-700` or darker for text that must be read. `--text-body` (`#8a7b70`) is for short supporting copy only, at 14px or larger.
- Use one accent per section. Don't mix peach, gold and green in the same component.

---

## 3. Typography

| Role | Font | Weight | Size | Notes |
|---|---|---|---|---|
| Display / H1 | Playfair Display | 400 | 72px | Hero headline, tight line-height 1.1 |
| H2 | Playfair Display | 400 | 40px | Section titles, centered |
| Vertical display | Playfair Display | 400 | 64–96px | "COLLECTIONS", rotated 90°, uppercase |
| H3 | Playfair Display | 400 | 20px | Card titles, list headings |
| Eyebrow | Montserrat | 400 | 12px | Letter-spaced, e.g. "Premium Fragrance" |
| Body | Montserrat | 300 | 14–16px | Line-height 1.6 |
| Small / legal | Montserrat | 300 | 11–12px | Footer, helper text |
| Button | Montserrat | 400 | 12–13px | Sentence case |

Index numerals (`01`–`04`) use Playfair Display at roughly 16px in `brown-600`.

---

## 4. Layout and Spacing

- **Container:** max 1200px, centered, with 24px side padding on mobile.
- **Grid:** 12 columns, 24px gutters. Hero and promo sections use a 50/50 split.
- **Vertical rhythm:** sections separated by 96–128px. Heading to content gap is 48px.
- **Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96.
- **Section dividers:** a short horizontal rule (about 48px wide, 1px, `brown-600`) centered under H2s.

---

## 5. Components

### Navigation bar
- Floating white bar, 56px high, inset from page edges, radius 4px, soft shadow.
- Left: hamburger plus "SHOP" in small caps. Center: logo ("Floras" serif, tagline in small serif). Right: user and search icons.

### Buttons
- **Primary:** background `brown-800`, white text, radius 4px, padding 12px 24px, 12–13px type. Hover: `brown-900`.
- **Input and submit pair (newsletter):** white input flush with a brown submit button, same height (~44px).

### Hero
- Full-width photo of a bottle on rock, beige gradient overlay on the left for legibility.
- Left-aligned content: eyebrow, H1, two-line description, primary button.
- "Scroll Down" cue bottom-left: a short line plus small text.

### Numbered features ("The Fragrance Difference")
- Two columns of two items around a centered product image.
- Each item: serif numeral, bold-weight serif title, two-line sans description.

### Collection collage ("NEW / COLLECTIONS")
- Four portrait photos staggered at different heights, each with square corners.
- Large "NEW" in serif on the left, "COLLECTIONS" rotated 90° in the center.
- A flowering branch overlays the collage as a decorative element.
- Centered "All Collections" button below.

### Note cards ("A Multi-Layered Harmony")
- Three white cards, radius 12px, subtle shadow, equal width.
- Content: 40px blush circle with an icon, serif title (Floral / Woody / Musk), two-line description. All center-aligned.

### Promo block
- Left: eyebrow code (`FRAGRANCE15`), H2 "Get 15% Off", body text, product sub-heading, button.
- Right: circular photo with a dashed orbit ring and four small round white badges (peach, blossom, lemon, leaf) placed on the ring.

### Newsletter banner
- Full-width rounded container (radius 32px), photo background with warm overlay.
- Serif headline at about 40px, input and button below.

### Footer
- Off-white with a speckled sand texture on both sides.
- Large centered "Floras" wordmark plus tagline. Copyright left, Privacy Policy and Terms of Service right in 11px type.

---

## 6. Imagery

- Soft, diffused natural light with long gentle shadows.
- Backdrops stay in the peach, beige and blush range.
- Props are organic: stones, driftwood, cherry blossoms, peaches, dried branches.
- The bottle is always the focal point, positioned off-center.
- Round crops are used only in the promo block; elsewhere images have square corners.

---

## 7. Iconography

- Thin 1.5px line icons, `brown-700`, rounded caps.
- Placed in 40px blush circles for feature cards, or inline for navigation.

---

## 8. Motion (recommended)

- Fade and rise (16px, 600ms, ease-out) on scroll for sections.
- Slow 8–12s float on the branch overlay and badges.
- Button hover is a 200ms background transition. Image hover is a 4–6% scale at 400ms.
- Honor `prefers-reduced-motion`.

---

## 9. Responsive Behavior

| Breakpoint | Behavior |
|---|---|
| ≥1200px | Full layout as designed |
| 768–1199px | Collage becomes 2×2, vertical "COLLECTIONS" moves to a horizontal heading |
| <768px | Single column. H1 scales to about 44px, H2 to about 28px. Feature cards stack. The promo circle sits above its text. |

---

## 10. Accessibility

- Maintain at least 4.5:1 contrast for body text. Check light brown and gray text on the sand background.
- Don't overlay light text on photos without a gradient scrim (see the newsletter headline).
- All decorative images (branch, badges) get `alt=""`. Product photos get descriptive alt text.
- Visible focus ring: 2px `brown-600` outline with 2px offset.

---

## 11. Usage

```html
<link rel="stylesheet" href="colors.css" />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&family=Playfair+Display:wght@400;500&display=swap" rel="stylesheet" />
```

```css
body {
  background: var(--bg-page);
  color: var(--text-body);
  font-family: var(--font-body);
  font-weight: 300;
  line-height: var(--lh-body);
}

h1, h2, h3 {
  font-family: var(--font-heading);
  font-weight: 400;
  color: var(--text-heading);
}

.btn-primary {
  background: var(--btn-bg);
  color: var(--btn-text);
  border-radius: var(--radius-sm);
  padding: var(--space-3) var(--space-6);
}
.btn-primary:hover { background: var(--btn-bg-hover); }
```
