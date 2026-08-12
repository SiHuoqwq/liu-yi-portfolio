# Project Image Viewer Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Localize the homepage trace, make every real project screenshot enlargable, and add a top-of-page home link to both case studies.

**Architecture:** Keep asset lookup in `ProjectScreenshot`, add a focused `ImageLightbox` for modal behavior, and place the shared home link in `CaseStudyHero`. Reuse existing visual tokens and routing components without adding dependencies.

**Tech Stack:** React 19, TypeScript, React Router, Vitest, Testing Library, Playwright, CSS.

## Global Constraints

- Preserve the frozen Evidence Trace visual system and current page structure.
- Only real available project screenshots are interactive; placeholders remain static.
- Do not add dependencies, generate images, or change project truthfulness copy.
- The viewer must support mouse, keyboard, mobile viewport, Reduced Motion, and focus restoration.

---

### Task 1: Localize Evidence Trace

**Files:**
- Modify: `src/content/projects.ts`
- Modify: `src/components/trace/Trace.tsx`
- Modify: `src/components/trace/TraceStatus.tsx`
- Test: `src/components/trace/Trace.test.tsx`

**Interfaces:**
- Consumes: `heroTraceSteps: readonly TraceStepRecord[]`
- Produces: the same component API with Chinese visible labels and statuses

- [ ] Change the existing Trace test to expect all seven approved Chinese interface phrases.
- [ ] Run `npm test -- --run src/components/trace/Trace.test.tsx` and confirm it fails on the English copy.
- [ ] Replace only the visible Trace strings and step records.
- [ ] Run the focused test and confirm it passes.

### Task 2: Add Accessible Image Lightbox

**Files:**
- Create: `src/components/ui/ImageLightbox.tsx`
- Create: `src/components/projects/ProjectScreenshot.test.tsx`
- Modify: `src/components/projects/ProjectScreenshot.tsx`
- Modify: `src/styles/global.css`

**Interfaces:**
- Consumes: `src`, `alt`, `width`, `height`, `srcSet`, `open`, `onClose`
- Produces: `ImageLightbox` and an unchanged `ProjectScreenshot` public API

- [ ] Write a test that opens a known real screenshot, finds a modal dialog, closes it with Escape, verifies body scroll unlock, and verifies trigger focus restoration.
- [ ] Run the focused test and confirm failure because no image button or dialog exists.
- [ ] Implement the modal with a portal, close button, backdrop handling, Escape handling and lifecycle-safe scroll locking.
- [ ] Wrap only available project images in the accessible zoom button and add restrained responsive styles.
- [ ] Run the focused component and gallery tests and confirm they pass.

### Task 3: Add Shared Return-to-Home Link

**Files:**
- Modify: `src/components/case-study/CaseStudyHero.tsx`
- Modify: `src/pages/XishuPage.test.tsx`
- Modify: `src/pages/KnowledgeFlowPage.test.tsx`
- Modify: `src/styles/global.css`

**Interfaces:**
- Consumes: React Router route `/`
- Produces: one top-level `返回首页` link in each `CaseStudyHero`

- [ ] Add page assertions for the hero-level home link on both case-study routes.
- [ ] Run both focused page tests and confirm failure because the hero link is absent.
- [ ] Add the shared route link and styles to `CaseStudyHero`.
- [ ] Run both focused page tests and confirm they pass.

### Task 4: Browser and Release Verification

**Files:**
- Modify: `tests/e2e/portfolio.spec.ts`
- Modify: `PROJECT_MEMORY.md`
- Create: visual screenshots under `docs/visual-review-image-viewer/`

**Interfaces:**
- Consumes: built portfolio routes and real project WebP assets
- Produces: browser evidence and durable project memory

- [ ] Add browser assertions for opening a homepage project image, closing via Escape, and using the top home link from each project route.
- [ ] Run the focused Playwright test and confirm its pre-implementation failure where applicable.
- [ ] Run typecheck, lint, all Vitest tests, all Playwright tests and the production build.
- [ ] Inspect `/`, `/projects/xishu` and `/projects/knowledgeflow` at 1440x900, 1024x768 and 390x844 for overflow, cropping, focus and dialog layout.
- [ ] Update `PROJECT_MEMORY.md` with the confirmed implementation and fresh verification evidence.
