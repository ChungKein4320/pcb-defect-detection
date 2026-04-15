# Design System Document: Precision Analytics & Industrial Intelligence

## 1. Overview & Creative North Star
**The Creative North Star: "The Clinical Architect"**
This design system moves beyond the generic "SaaS dashboard" aesthetic to embrace an editorial, high-precision industrial feel. It treats data not as a commodity, but as a high-stakes artifact. The "Clinical Architect" vision combines the rigor of academic publishing with the sleekness of high-end aerospace interfaces. 

By leveraging intentional asymmetry, varying tonal depths, and a rejection of traditional containment (like borders), the system creates a "breathable" high-density environment. We are not just showing defects on a PCB; we are providing a premium diagnostic tool that feels as precise as the hardware it monitors.

---

## 2. Colors & Surface Philosophy
The palette is rooted in a "Cold-Neutral" spectrum, using blue-tinted grays to maintain a professional, tech-forward atmosphere.

### The "No-Line" Rule
To achieve a premium, editorial look, **1px solid borders are prohibited for sectioning.** Boundaries must be defined solely through background color shifts or subtle tonal transitions. This creates a more sophisticated, "seamless" interface that feels modern and custom.

### Surface Hierarchy & Nesting
Depth is achieved through the "Stacking Principle" using the following tokens:
*   **App Canvas:** `surface` (#f8f9ff)
*   **Primary Content Zone:** `surface_container_low` (#eff4ff)
*   **Interactive Cards:** `surface_container_lowest` (#ffffff)
*   **Elevated Overlays/Modals:** `surface_bright` (#f8f9ff)

### The "Glass & Gradient" Rule
Floating elements (such as hover states on PCB defect maps or specialized tooltips) should utilize **Glassmorphism**. Use `surface_container_lowest` at 80% opacity with a `20px` backdrop blur. For primary action areas, apply a subtle linear gradient from `primary` (#005ac2) to `primary_dim` (#004fab) at a 135-degree angle to add "visual soul" and depth.

---

## 3. Typography
We utilize **Inter** as our typographic backbone. The goal is a strong, authoritative hierarchy that mimics scientific journals but remains digitally accessible.

*   **Display (Large/Med):** Use for high-level KPI hero numbers. Tracking should be set to `-0.02em` to feel tighter and more "engineered."
*   **Headline (Sm/Med):** Reserved for page titles. These should be `on_surface` (#00345e) to provide maximum contrast against the light canvas.
*   **Title (Sm):** Used for card headers. Always paired with `on_surface_variant` (#306197) to provide a clear distinction from the data itself.
*   **Body (Md/Lg):** The workhorse for analytics descriptions. Maintain a generous line height (1.5x) to ensure readability in high-density data views.
*   **Labels (Sm/Md):** Used for micro-copy and data labels. Often set in `tertiary` (#5f5c78) to recede visually, allowing the "on_surface" data to lead.

---

## 4. Elevation & Depth
In this system, elevation is a product of **Tonal Layering**, not structural scaffolding.

*   **The Layering Principle:** Place a `surface_container_lowest` card (White) on top of a `surface_container_low` (Light Blue-Gray) background. This 2-point value shift creates a natural "lift" that is easier on the eyes than a drop shadow.
*   **Ambient Shadows:** Where floating is required (e.g., a "Compare Defect" drawer), use an ultra-diffused shadow: `0px 12px 32px rgba(0, 52, 94, 0.06)`. Note the use of the `on_surface` color for the shadow tint rather than pure black.
*   **The "Ghost Border":** For accessibility in inputs or complex data tables, use the `outline_variant` (#87b5f0) at **15% opacity**. It should be felt, not seen.

---

## 5. Components

### Cards & Data Containers
*   **Radius:** `lg` (1rem) for main dashboard cards; `md` (0.75rem) for nested elements.
*   **Structure:** No dividers. Use `32px` of internal padding and vertical white space to separate the header from the chart.
*   **Background:** Always `surface_container_lowest`.

### Primary Action Buttons
*   **Style:** `primary` (#005ac2) background with `on_primary` (#f7f7ff) text.
*   **Shape:** `md` (0.75rem) corner radius.
*   **Interaction:** On hover, transition to `primary_dim`. For high-end flair, add a 1px inner "glow" using a lighter tint of the primary color.

### Status Indicators (Chips)
*   **Success:** `primary_container` background with `on_primary_fixed` text. (Avoid "neon" greens; stay in the sophisticated blue-green range).
*   **Error:** `error_container` (#fe8983) with `on_error_container` (#752121).
*   **Warning:** Use `tertiary_container` (#d3ceef) for a more academic, "cautionary" tone than standard bright orange.

### Specialized Component: The Defect Heatmap
*   **Overlay:** Use semi-transparent `error` (#9f403d) markers on top of a grayscale image of the PCB. Use `surface_bright` for the magnifying glass tool to ensure it "pops" against the hardware visuals.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use asymmetrical grid layouts. For example, a 70/30 split for the main analytics vs. the defect sidebar creates a more custom, "designed" feel.
*   **Do** use `on_surface_variant` for all secondary labels to keep the interface looking "soft" and professional.
*   **Do** leverage "White Space as a Divider." If two sections need separation, increase the padding rather than adding a line.

### Don't:
*   **Don't** use pure black (#000000) for text or shadows. It breaks the "Clinical Architect" tonal harmony.
*   **Don't** use "Default" Power BI colors. Always map data visualizations to the `primary`, `secondary`, and `tertiary` tokens.
*   **Don't** use sharp 90-degree corners. Everything must feel machined and polished, requiring the `DEFAULT` (0.5rem) or `md` (0.75rem) radius.
*   **Don't** clutter the top bar. Keep it strictly for global search and high-level notifications; move all context-specific actions into the card headers.