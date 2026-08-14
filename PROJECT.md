# Blender for Absolute Beginners — Project Summary

**What it is:** An [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) documentation website whose purpose is to teach **Blender 3D** to someone who has **never touched Blender before** — no prior 3D modeling, texturing, or animation experience assumed. Content is written from the perspective of a beginner and includes a strong focus on keyboard shortcuts and UI familiarity (with special attention to trackpad-only users).

**The three core skills the site teaches:**
1. **3D modelling basics** — starting from primitive shapes (plane, cube, cylinder, UV sphere), transform operations (Grab/Rotate/Scale, axis-constrained moves), object vs. edit mode, proportional editing, snapping, and simple modelling workflows (e.g., build the simplest house).
2. **Textures, UV maps & shaders** — unwrapping, mapping, and shading — taught through *worked examples* such as a **wooden box** and a **soup can**.
3. **Animations** — keyframing and timeline fundamentals.

**The innovation (differentiator):** In addition to traditional Starlight reference/how-to docs, the site replicates/interprets the **Blender interface in HTML** as an embedded interactive element. This lets a complete beginner get familiar with the Blender UI and its keyboard shortcuts *inside the browser* — practicing shortcuts and understanding the layout before or without launching the actual application. It lowers the barrier to entry for someone who has never touched Blender.

**Docs philosophy — worked examples first:** Documentation places heavy emphasis on complete, worked examples (task-oriented, how-to style) rather than abstract reference material. Each skill area is anchored by a concrete, follow-along build (e.g., wooden box → textures/UVs; soup can → similar texturing workflow), so learners build something real at each stage.

**Current repo state (scaffold exists, content is early-stage):** Starlight starter customized with sidebar sections for *Examples* and *Fundamentals*; a keyboard-shortcuts home page, a pie-menus cheat sheet, a house example stub, and collected design inspiration screenshots. The interactive Blender-UI replica and the full three-skill curriculum are the intended direction to build out.


