# Smart Container Decision Loop Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce a verified Chinese SVG and PNG interview diagram for the smart container-planning decision loop.

**Architecture:** Use one self-contained SVG as the source of truth, with grouped cards, connectors, and text labels. Render the SVG in a headless Chromium browser to a fixed-size PNG, then inspect the final PNG visually and check the SVG text inventory mechanically.

**Tech Stack:** SVG 1.1, CSS embedded in SVG, Microsoft YaHei/PingFang/Noto Sans fallback fonts, Chromium headless screenshot.

## Global Constraints

- Canvas must be 1920×1350 with a 56px safe margin.
- Deliver both SVG and PNG under `D:\Codex\Outputs\interview-prep-2026-08-18`.
- Do not use a company logo or claim unverified production metrics.
- Preserve exact Chinese business terminology from the approved design.
- The diagram must distinguish AI, deterministic optimization, human approval, and 3D packing scope.

---

### Task 1: Build the vector source

**Files:**
- Create: `D:\Codex\Outputs\interview-prep-2026-08-18\smart-container-decision-loop.svg`

**Interfaces:**
- Consumes: `docs/superpowers/specs/2026-08-17-smart-container-decision-loop-design.md`
- Produces: a standalone 1920×1350 SVG with all styles, markers, labels, cards, and connectors embedded.

- [ ] **Step 1: Create the output directory**

Run: `New-Item -ItemType Directory -Force -Path 'D:\Codex\Outputs\interview-prep-2026-08-18'`

- [ ] **Step 2: Draw the six-stage main pipeline**

Create numbered cards for business data, snapshot validation, decision model, solver/candidates, human approval, and ERP execution. Use cyan connectors and preserve a minimum 22px horizontal gap between cards.

- [ ] **Step 3: Draw the event-driven replanning loop**

Add trigger chips for production delay, urgent demand, sailing change, and inventory discrepancy. Connect impact analysis, frozen scope, local replan, plan diff, approval, and a new plan version using orange-to-cyan visual progression.

- [ ] **Step 4: Add the boundary strip**

Add three bottom cards for AI responsibilities, deterministic solver responsibilities, and Phase 1 allocation versus Phase 2 3D packing.

- [ ] **Step 5: Validate the SVG source**

Run a PowerShell check that parses the file as XML, confirms `viewBox="0 0 1920 1350"`, and searches for the labels `业务数据`, `动态重排闭环`, `人工审批`, `确定性求解`, and `三维装箱`.

Expected: XML parse succeeds and all five labels return true.

### Task 2: Render and visually verify the PNG

**Files:**
- Consume: `D:\Codex\Outputs\interview-prep-2026-08-18\smart-container-decision-loop.svg`
- Create: `D:\Codex\Outputs\interview-prep-2026-08-18\smart-container-decision-loop.png`

**Interfaces:**
- Consumes: the verified SVG from Task 1.
- Produces: a 1920×1350 PNG containing the entire canvas without browser chrome.

- [ ] **Step 1: Locate a Chromium-compatible browser**

Check Microsoft Edge, Google Chrome, or the workspace Playwright Chromium executable and select the first available executable.

- [ ] **Step 2: Render the SVG**

Run the selected browser in headless mode with `--window-size=1920,1350`, `--hide-scrollbars`, and a `file:///` URL pointing to the SVG.

- [ ] **Step 3: Verify image dimensions**

Use `System.Drawing.Image.FromFile()` to assert width 1920 and height 1350.

- [ ] **Step 4: Inspect visually**

Open the PNG and verify no clipped text, overlapping cards, broken arrows, unreadable labels, or missing sections. If a defect is visible, adjust the SVG and repeat Steps 2-4.

- [ ] **Step 5: Final artifact check**

Confirm both final files exist, are non-empty, and the SVG contains no external image or font dependencies.

Expected: SVG and PNG both pass the checks and the PNG visually matches the approved information architecture.
