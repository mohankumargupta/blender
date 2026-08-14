---
title: Pie Menus
description: Blender circular radial pie menus
---

In Blender, **pie menus** are circular pop-up menus that appear at your cursor when you press a hotkey. They're designed for speed — you don't click; you **press the hotkey, flick your trackpad/mouse in the direction of the option, and release the key**. The gesture becomes muscle memory.

This page is a complete reference for the most important pie menus, organized by how often you'll use them. Each entry shows the default key, what the menu does, and a visual guide to the 8 pie slices (N, NE, E, SE, S, SW, W, NW).



## Top-Tier: Use Constantly

These are the menus you'll hit dozens of times per session. Learn these first.

### `Z` — Shading Pie Menu *(Viewport Shading)*
**The single most-used pie menu.** Switches how the 3D viewport draws your scene.

| Direction | Option | When to Use |
|-----------|--------|-------------|
| **N** (���) | **Wireframe** | See through geometry; check topology, hidden edges |
| **NE** | **Solid** | Default shaded view; good for modeling |
| **E** (→) | **Material Preview** | See materials, textures, HDRI lighting (Eevee) |
| **SE** | **Rendered** | Full Cycles/Eevee render preview in viewport |
| **S** (���) | *(toggle)* | Hold `Z` + flick down to cycle quickly |

> **Pro tip:** Hold `Z` and flick — don't click. Your hand stays on the keyboard.


### `~` (Tilde / Grave Accent) — View Pie Menu
**Essential for trackpad / no-numpad users.** Replaces numpad view shortcuts.

| Direction | View | Mnemonic |
|-----------|------|----------|
| **N** (���) | **Top** | "Up" = Top orthographic |
| **S** (���) | **Bottom** | "Down" = Bottom |
| **W** (←) | **Right** | Counter-intuitive: West → Right view |
| **E** (→) | **Left** | East → Left view |
| **NW** | **Front** | |
| **SE** | **Back** | |
| **NE** | **Camera** | Jump to active camera view |
| **SW** | **Toggle Perspective/Ortho** | Flip between perspective and orthographic |

> **Memory aid:** The pie layout mirrors the compass. Top of pie = Top view. Right of pie = Right view (but mapped to West key — Blender's internal logic).



### `.` (Period) — Pivot Point Pie Menu
Changes the **center of rotation/scaling**. Critical for precise edits.

| Direction | Pivot Point | Use Case |
|-----------|-------------|----------|
| **N** | **Bounding Box Center** | Default; scales from object's box center |
| **NE** | **3D Cursor** | Rotate/scale around wherever you placed the cursor (`Shift+RightClick`) |
| **E** | **Individual Origins** | Each selected element transforms around its own center (great for scaling multiple faces separately) |
| **SE** | **Median Point** | Average center of all selected elements |
| **S** | **Active Element** | Transform around the last-selected (active) object/face |

> **Beginner workflow:** Place 3D Cursor (`Shift+RightClick`) → `.` → flick NE (3D Cursor) → now `R`/`S` rotates/scales around that exact point.



### `,` (Comma) — Transform Orientation Pie Menu
Changes the **axes** your transforms (G/R/S) operate in.

| Direction | Orientation | When to Use |
|-----------|-------------|-------------|
| **N** | **Global** | World axes (fixed) |
| **NE** | **Local** | Object's own rotation (default for objects) |
| **E** | **Normal** | Face/vertex normal direction (essential in Edit Mode) |
| **SE** | **Gimbal** | For animation — shows Euler gimbal locks |
| **S** | **View** | Align to current camera/view direction |
| **SW** | **Cursor** | Align to 3D Cursor rotation |

> **Most common:** `,` → flick E (**Normal**) in Edit Mode to extrude/scale along face normals.



## High-Value: Modeling & Selection

### `Shift + S` — Snap Pie Menu
**Precision placement.** Snaps selection ↔ 3D Cursor, or selection ↔ grid.

| Direction | Action | Mnemonic |
|-----------|--------|----------|
| **N** | **Selection to Cursor** | Move selected object(s) TO 3D Cursor |
| **NE** | **Selection to Cursor (Keep Offset)** | Move but preserve relative positions |
| **E** | **Cursor to Selected** | Place 3D Cursor at center of selection |
| **SE** | **Cursor to World Origin** | Reset cursor to (0,0,0) |
| **S** | **Cursor to Grid** | Snap cursor to nearest grid intersection |
| **SW** | **Selection to Grid** | Snap selection to grid |
| **W** | **Selection to Active** | Snap non-active selection to active object |

> **Daily driver:** `Shift+S` → E (**Cursor to Selected**) → `.` → NE (**Pivot: 3D Cursor**) → now rotate around that exact spot.



### `Ctrl + Tab` (Edit Mode) — Mesh Selection Mode Pie
Switch between **Vertex / Edge / Face** select mode instantly.

| Direction | Mode | Icon |
|-----------|------|------|
| **N** | **Vertex** | Dot |
| **NE** | **Edge** | Line |
| **E** | **Face** | Square |
| **SE** | **Vertex + Edge** | Multi-select |
| **S** | **Vertex + Face** | |
| **SW** | **Edge + Face** | |
| **W** | **All (Vertex+Edge+Face)** | |

> **Tip:** Tap `Ctrl+Tab` once to open, flick, release. Or hold `Ctrl+Tab` and flick — faster than clicking the header icons.

---

### `O` — Proportional Editing Falloff Pie
Changes the **falloff curve** when Proportional Editing (`O` to toggle on/off) is active.

| Direction | Falloff | Shape |
|-----------|---------|-------|
| **N** | **Smooth** | Bell curve — organic, natural |
| **NE** | **Sphere** | Spherical falloff |
| **E** | **Root** | Sharp center, soft edges |
| **SE** | **Inverse Square** | Physics-like decay |
| **S** | **Sharp** | Linear, hard edge |
| **SW** | **Linear** | Straight ramp |
| **W** | **Constant** | Uniform influence (all selected move equally) |
| **NW** | **Random** | Jittered — for terrain, fur |

> **Workflow:** `O` (toggle proportional on) → `G` → move → scroll wheel to adjust radius → `O` (pie) to change falloff shape mid-drag.



##  Display & Viewport

### `Alt + Z` — X-Ray Toggle
**Not a pie by default**, but can be configured as one. Toggles "see-through" mode in Solid shading — essential for selecting hidden vertices/edges/faces.

> **Enable as pie:** Preferences → Keymap → 3D View → View → Toggle X-Ray → change to "Pie Menu" type.



### `Shift + Spacebar` — Tools Pie Menu (Toolbar at Cursor)
Pops up the **left-side toolbar** right at your cursor. No more dragging trackpad across the screen.

| Direction | Tool |
|-----------|------|
| **N** | Select Box |
| **NE** | Select Circle |
| **E** | Select Lasso |
| **SE** | Cursor (3D Cursor placement) |
| **S** | Move (G) |
| **SW** | Rotate (R) |
| **W** | Scale (S) |
| **NW** | Transform (Gizmo) |

> **Trackpad saver:** `Shift+Space` → flick S → you're in Move tool instantly.



## Animation & Mode Switching

### `Ctrl + Tab` (Object Mode) — Mode Pie Menu
Switch **Object / Edit / Sculpt / Vertex Paint / Weight Paint / Texture Paint** modes.

| Direction | Mode |
|-----------|------|
| **N** | Object Mode |
| **NE** | Edit Mode |
| **E** | Sculpt Mode |
| **SE** | Vertex Paint |
| **S** | Weight Paint |
| **SW** | Texture Paint |
| **W** | (Geometry Nodes / others) |

> **Fastest mode switch:** `Ctrl+Tab` → flick NE → Edit Mode. No menus, no tabs.



## Lesser-Known but Useful

### `Shift + A` — Add Menu (Pie-able)
The **most important shortcut** (`Shift+A`) opens the Add menu. Can be used as a pie — flick toward the primitive you want (Mesh → Cube, UV Sphere, etc.).

> **Enable:** Preferences → Keymap → 3D View → Add → Mesh → change to Pie Menu.



### `Shift + ` (Backtick, same key as ~) — Walk/Fly Navigation Pie
First-person navigation modes (Walk / Fly) with WASD + mouse look.



## ��� Quick Reference Card (Print-Friendly)

| Key | Menu | Category |
|-----|------|----------|
| `Z` | **Shading** (Wireframe/Solid/Material/Rendered) | **Essential** |
| `~` | **View** (Top/Front/Right/Camera/Ortho) | **Essential (no numpad)** |
| `.` | **Pivot Point** (Cursor/Individual/Median/Active) | **Essential** |
| `,` | **Transform Orientation** (Global/Local/Normal/View) | **Essential** |
| `Shift+S` | **Snap** (Cursor���Selection/Grid) | **Modeling** |
| `Ctrl+Tab` (Edit) | **Select Mode** (Vert/Edge/Face) | **Modeling** |
| `O` | **Proportional Falloff** (Smooth/Sharp/Random…) | **Modeling** |
| `Alt+Z` | **X-Ray Toggle** | **Display** |
| `Shift+Space` | **Tools at Cursor** (Move/Rotate/Scale/Select) | **Workflow** |
| `Ctrl+Tab` (Obj) | **Mode Switch** (Object/Edit/Sculpt/Paint) | **Workflow** |



## Trackpad Mastery: "Flick Select" Technique

1. **Press and hold** the shortcut key (e.g., `Z`).
2. **Flick** your finger on the trackpad toward the desired slice — don't drag slowly; a quick directional swipe is enough.
3. **Release the key** while the cursor hovers over your choice.

The menu disappears and the action executes. No click required.

> **Practice drill:** Open a new Blender file. `Z` → flick N (Wireframe) → `Z` → flick E (Material Preview) → `Z` → flick S (Rendered). Repeat until it's automatic.



## Customizing Pie Menus (Advanced)

Blender lets you **reassign any operator to a pie menu** or **create custom pies**:

1. **Preferences → Keymap** → search for the operator (e.g., "view3d.shade_wireframe")
2. Right-click → **Add to Pie Menu** → choose which pie (or create new)
3. Or: **Preferences → Keymap → 3D View → Pie Menus** → add new pie menu, assign a key

> **Idea for this site:** The interactive Blender-UI replica could include a **live pie-menu simulator** — press `Z` on the keyboard and see the pie animate at the cursor, then flick to select. This trains the muscle memory before you ever open Blender.



## Related Pages

- [Keyboard Shortcuts](../index.mdx#blender-keyboard-shortcuts) — Core transform keys (G/R/S) and axis constraints
- [3D Modelling Workflow](../index.mdx#3d-modelling) — Start with primitives, scale with S
- [References](../fundamentals/references.md) — External resources (PBR textures, etc.)