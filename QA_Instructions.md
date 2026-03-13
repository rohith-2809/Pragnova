# Quality Assurance Checklist

This document provides instructions for the team to verify both the video finishing deliverables and the web implementation updates.

## 1. Video & Motion Grading QA (DaVinci/Premiere)
- [ ] **Scopes & Brightness:** Open the waveform/parade scopes. Verify that the mean brightness (V channel) across standard and previously underexposed clips reads between **40–80**. Ensure highlights are not clipped.
- [ ] **Saturation Variance:** Verify that color saturation remains perceptually uniform across disparate shots. Ensure the global Rec.709-compatible LUT is applied universally on the adjustment layer / timeline node, and standard primary corrections (Lift/Gamma/Gain) offset individual clip deviations smoothly.
- [ ] **Noise & Softness Check:** Scrub through noisy clips to confirm mild denoise is active. Ensure selective micro-sharpening (var(Laplacian)) highlights edges without causing "halos" or over-sharpening artefacts.

## 2. Audio QA
- [ ] **LUFS Normalization:** Use Loudness meters (e.g., Youlean, Insight) to measure the final exported audio track. The integrated loudness MUST accurately read **-14 LUFS (±0.5)**.
- [ ] **Peak Limiting:** Confirm that True Peak never exceeds -1.0 dBTP to avoid downstream clipping on web platforms.

## 3. Web UI/UX & Accessibility QA (Front-end)
- [ ] **Translucent Backplates:** Inspect overlay text on the hero sections. Verify the 30–50% opaque background with blur, softly rounded edges, and 8-16px padding is present. Use a contrast checker to ensure text vs. backplate is **≥4.5:1** (normal text) and **≥3:1** (large text).
- [ ] **Dynamic SVG Logos:** Navigate through light and dark sections of the page. Verify the Logo swaps intelligently (light variant on dark bg, dark variant on light bg) or utilizes `currentColor`/`blend-mode` correctly. Ensure no raster artifacting (scaling). Safe area must be >6% from screen edges.
- [ ] **CTAs & Keyboard Accessibility:** Use the `TAB` key to navigate the site. Ensure every CTA and submit button focuses visibly. Hover/Focus should trigger a subtle `scale(1.03)` with standard easing `cubic-bezier(0.22,1,0.36,1)`.
- [ ] **Mobile-First Rendering:** Verify the site via Chrome DevTools Mobile Viewport. Check breakpoints: **360px**, **375px**, **412px**, **768px**. Ensure tap targets on mobile are explicitly ≥44px and text isn't microscopic.

## 4. Contact Form QA
- [ ] **Fields Check:** Ensure only `name`, `email` (placeholder: yourmail@gmail.com), and `quote` exist. "Budget" and "Company Name" must be physically removed.
- [ ] **Client Validation:** Leave all fields blank and click "Submit". Verify inline, screen-reader accessible (ARIA) errors fire correctly for name, invalid email, and quote length.
- [ ] **Success/Failure States:** Submit valid data. Ensure the CTA shows a loading state. Check the Network Tab for a POST payload to `/api/contact`. Ensure the Success Toast/Modal is displayed and the form clears.
