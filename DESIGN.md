---
name: John Castro Sanabria — Portfolio
description: Fintech-grade engineering portfolio — a lit control room in deep navy, cyan and signal green.
colors:
  bg: "#07111f"
  surface: "rgba(15, 23, 42, 0.82)"
  surface-strong: "#0f172a"
  surface-soft: "#162133"
  ink: "#e2e8f0"
  ink-muted: "#94a3b8"
  border: "rgba(148, 163, 184, 0.18)"
  primary-cyan: "#38bdf8"
  primary-strong: "#0ea5e9"
  accent-green: "#22c55e"
  bg-light: "#f5f7fb"
  surface-light: "#ffffff"
  ink-light: "#142033"
  ink-muted-light: "#516173"
  primary-light: "#0369a1"
typography:
  display:
    fontFamily: "Sora, 'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 5vw, 4.8rem)"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Sora, 'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 800
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Sora, 'Inter', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.55rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.78rem"
    fontWeight: 500
    letterSpacing: "0.14em"
rounded:
  card: "24px"
  panel: "16px"
  pill: "999px"
spacing:
  xs: "0.5rem"
  sm: "1rem"
  md: "1.35rem"
  lg: "2rem"
  xl: "clamp(3rem, 6vw, 5rem)"
components:
  button-primary:
    backgroundColor: "{colors.primary-cyan}"
    textColor: "{colors.surface-strong}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.5rem"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.5rem"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "{spacing.md}"
---

# Design System: John Castro Sanabria — Portfolio

## 1. Overview

**Creative North Star: "The Lit Control Room"**

This is the interface of someone who ships mission-critical fintech at 2 a.m. and stays calm. The surface is a deep, near-black navy — the light of a control room where the monitors, not the walls, carry the color. Against that dark, two signals cut through: an electric **cyan** for anything the visitor should act on, and a **signal green** reserved for "this is live, this shipped, this works." Depth comes from tonal layering and glassy translucency, not decoration. The mood is confident and technical without being cold: rounded pill controls and soft glows keep it human, while the disciplined palette keeps it credible to a banking audience.

The system explicitly rejects the SaaS-template look: no purple-to-blue gradients as the whole identity, no rounded-square icon tile stamped above every heading, no gray body text floating on tinted panels, no cards nested inside cards. It also rejects the opposite failure — the timid, beige, "safe" portfolio. This surface commits to its dark control-room world in both themes and lets the two accent signals do the talking.

The palette is committed but disciplined: navy dominates, cyan and green are rationed. Density is comfortable and scannable — a recruiter skims it in thirty seconds and a staff engineer respects it on the second read.

**Key Characteristics:**
- Deep-navy control-room base; color lives in the content, not the chrome.
- Two rationed accent signals: cyan = act, green = live/shipped.
- Depth via translucency + tonal layering + soft glow, never heavy drop shadows or borders-as-decoration.
- Pill-shaped tactile controls; large-radius (24px) glassy content cards.
- Full light-theme parity — the world holds together in both.

## 2. Colors

A deep-navy field with two rationed neon signals; everything else is a tonal step of the same cool ink.

### Primary
- **Electric Cyan** (`#38bdf8`) → deepening to **Depth Cyan** (`#0ea5e9`): the act color. Primary buttons (as a 135° cyan→depth gradient with an inset top highlight), links, focus rings, active nav, the carousel's active pagination pill. This is the only hue the eye is trained to chase, so it's spent only on things worth acting on.

### Secondary
- **Signal Green** (`#22c55e`): the "it's live" color. Reserved for shipped/production markers, "View Site" affordances, and success accents. Never used decoratively — its rarity is what makes it read as *status*, not styling.

### Neutral
- **Control-Room Navy** (`#07111f`): the body background; the room the whole site sits in.
- **Glass Surface** (`rgba(15, 23, 42, 0.82)`): translucent card and panel fill that lets the navy show through.
- **Surface Strong** (`#0f172a`) / **Surface Soft** (`#162133`): opaque tonal steps for stacked or nested contexts.
- **Ink** (`#e2e8f0`): primary text — high contrast on navy.
- **Ink Muted** (`#94a3b8`): supporting text, metadata, captions.
- **Hairline** (`rgba(148, 163, 184, 0.18)`): 1px borders and dividers only.

### Light Theme (parity)
- **Cloud** (`#f5f7fb`) body, **White** (`#ffffff`) surfaces, **Slate Ink** (`#142033`) / **Muted Slate** (`#516173`) text, **Deep Cyan** (`#0369a1`) primary. Same roles, inverted field.

### Named Rules
**The Two-Signal Rule.** Cyan means *act*; green means *live*. No third accent hue enters the system, and neither signal is ever used for pure decoration. If a color isn't carrying one of those two meanings, it's a tonal step of the navy ink.

## 3. Typography

**Display Font:** Sora (with `Inter, ui-sans-serif, system-ui` fallback)
**Body Font:** Inter (with `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`)
**Label / Mono Font:** JetBrains Mono (with `ui-monospace, SFMono-Regular, Menlo, monospace`)

**Character:** A three-voice system with genuine contrast on the personality axis. **Sora** — a geometric, engineered grotesque — carries the display headings: confident, precise, built like a spec, never the editorial-serif cliché. **Inter** is the readable body workhorse; it no longer defines the identity, it just carries prose cleanly. **JetBrains Mono** is the rationed engineering signal: it appears only on the section eyebrows, the hero role line, and the tech-stack tags, where monospace is *earned* because the brand is literally software engineering (a spec-sheet voice, not costume). All three load from Google Fonts with `display=swap`.

### Hierarchy
- **Display** (Sora 800, `clamp(2.75rem, 5vw, 4.8rem)`, line-height 1.08, tracking -0.03em): the hero name only.
- **Headline** (Sora 800, `clamp(2rem, 4vw, 3rem)`, tracking -0.02em): section titles.
- **Title** (Sora 700, `1.55rem`, tracking -0.015em): card, group, and certification headings.
- **Body** (Inter 400, `1.0625rem`, line-height 1.6): prose; capped at ~65ch, `text-wrap: pretty`.
- **Label** (JetBrains Mono 500, `0.78rem`, tracking 0.14em, uppercase): section eyebrows, hero role, metadata keys.
- **Tag** (JetBrains Mono 500, `0.8rem`): tech-stack pills — code identifiers set as code.

### Named Rules
**The Three-Voice Rule.** Sora commands (display), Inter carries (body), JetBrains Mono signals (labels + tags). Each has one job. Headings never fall back to the body face, and mono never spreads beyond labels and tech tags — its rarity is what keeps it reading as *engineering*, not decoration.
**The Balance Rule.** Every h1–h3 sets `text-wrap: balance`; long prose sets `text-wrap: pretty`. No orphaned heading words, no ragged single-word last lines.

## 4. Elevation

A hybrid system that leans on **tonal translucency first, glow second**. Cards are glassy fills over navy; separation reads primarily from the tonal difference between surface and background, reinforced by one soft, colored shadow rather than a hard drop shadow. Primary buttons carry inset highlights (a top white line, a bottom inner shadow) so they read as physical, lit objects, plus a diffuse cyan glow beneath. Depth is a response to importance and state — hover lifts a card and warms its glow — not a default stamped on every box.

### Shadow Vocabulary
- **Ambient Card** (`box-shadow: 0 20px 45px rgba(2, 6, 23, 0.35)`): the resting shadow on content cards; deep and diffuse, felt more than seen.
- **Primary Glow** (`0 12px 24px rgba(14, 165, 233, 0.22)` + inset highlights): the cyan lift under primary buttons.
- **Hover Lift** (`transform: translateY` + intensified glow, `220ms ease`): state-driven elevation on interactive cards.

### Named Rules
**The Glow-On-Demand Rule.** Rest is quiet — a single ambient shadow. Colored glow appears as a *response* to interactivity (a primary action, a hover), never as ambient decoration on static surfaces.

## 5. Components

### Buttons
- **Shape:** fully rounded pills (`999px`).
- **Primary:** cyan→depth-cyan 135° gradient, dark ink text, inset top highlight + bottom inner shadow + cyan glow; padding ~`0.85rem 1.5rem`. Reads as a lit physical control.
- **Secondary / Ghost:** translucent glass surface, hairline border, ink text; the quiet sibling.
- **Site / live variant:** carries the green signal for "View Site / production" actions.
- **Hover / Focus:** `transform` lift (`180ms ease`) + shadow intensification; visible focus ring in cyan.

### Chips / Tags
- **Style:** small pill tags, translucent surface fill, hairline border, ink text — used for tech-stack lists.
- **State:** static labels (not interactive filters on the home surface).

### Cards / Containers
- **Corner Style:** 24px (`--radius`) for content cards; 16px for tighter panels.
- **Background:** translucent Glass Surface over the navy field.
- **Shadow Strategy:** Ambient Card at rest, Hover Lift on interaction (see Elevation).
- **Border:** single 1px hairline; never a colored side-stripe.
- **Internal Padding:** ~`1.35rem` (`--md`).

### Navigation
- **Style:** compact top bar; pill active state in cyan; language + theme toggles as icon pills. Ink text, cyan on active/hover.

### Signature Component — The Carousel
A reusable, accessible carousel powers the **Technologies & strengths** and **Professional credentials** sections. Infinite loop (tripled slides with silent position normalization), autoplay with pause-on-hover/focus, pointer drag + touch swipe + mouse-wheel, keyboard arrows, snap scrolling, cyan pill pagination dots, and pill prev/next controls. Snapping is suspended during programmatic smooth scrolls (Chromium cancels them inside mandatory snap containers). Respects `prefers-reduced-motion`.

## 6. Do's and Don'ts

### Do:
- **Do** keep the navy control-room field dominant and let color live in the content.
- **Do** ration the two signals: cyan for *act*, green for *live/shipped* only.
- **Do** use Sora for headings, Inter for body, and JetBrains Mono for labels + tech tags only.
- **Do** convey depth with translucency, tonal layering, and one ambient shadow; add colored glow only on interaction.
- **Do** use full-radius pills for controls and 24px glassy cards for content.
- **Do** verify body text hits ≥4.5:1 — Ink (`#e2e8f0`) on navy, Muted (`#94a3b8`) only for genuinely secondary text.
- **Do** ship both light and dark themes at parity.

### Don't:
- **Don't** introduce a third accent hue or spend cyan/green on decoration.
- **Don't** use `border-left`/`border-right` greater than 1px as a colored stripe on cards, list items, or alerts.
- **Don't** use gradient text (`background-clip: text`) — emphasis comes from weight and size.
- **Don't** stamp a rounded-square icon tile above every heading, or a tiny uppercase tracked eyebrow on *every* section — the eyebrow is a single deliberate label, not section grammar.
- **Don't** nest cards inside cards, or default to glassmorphism as decoration beyond the established glass surfaces.
- **Don't** put muted gray body text on a tinted panel where it drops below 4.5:1.
- **Don't** add bounce/elastic easing; motion eases out and respects reduced-motion.
