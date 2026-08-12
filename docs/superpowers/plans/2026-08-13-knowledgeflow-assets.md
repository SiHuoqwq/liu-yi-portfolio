# KnowledgeFlow AI Real Asset Integration Implementation Plan

> **Superseded provenance note (2026-08-13):** this plan records the initial
> Fake Provider asset pass. The final six portfolio assets were later replaced
> as one set by a separately authorized real DeepSeek React E2E acceptance.
> Current truthfulness and request records are in
> `docs/verification/knowledgeflow-assets.md`; the final claim is narrowly
> `REAL DEEPSEEK REACT E2E / VERIFIED`, not Full-stack verified.

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Generate six truthful KnowledgeFlow AI product screenshots from the isolated Fake Provider full-stack flow, integrate them into the frozen portfolio, and record reproducible evidence and verification.

**Architecture:** Reuse the source project's browser acceptance runner, Fake FastAPI backend, installed Playwright/Chrome, and React frontend. Keep all runtime data and PNG intermediates under a dedicated `<temporary-root>\rag-v0.2.0-browser-*` workspace, write only selected WebP deliverables to the portfolio, and limit portfolio code changes to the existing asset manifest plus verification documentation.

**Tech Stack:** Python 3.10, FastAPI, React, TypeScript, Vite, Playwright Core, system Chrome, WebP conversion through existing workspace libraries, Vitest, ESLint.

## Global Constraints

- Do not call real DeepSeek, imagegen, paid APIs, or install dependencies.
- Preserve `FAKE PROVIDER FULL-STACK / PASSED` and `REAL DEEPSEEK FULL-STACK / NOT VERIFIED`.
- Do not read or modify existing `.env`, `data/chroma`, `data/uploads`, private files, or existing knowledge-base content.
- Do not redesign portfolio layout, tokens, typography, color, motion, components, or Evidence Trace narrative.
- Do not merge, push, tag, release, or deploy.
- Raw PNGs and intermediate files remain in `<temporary-root>`; only selected WebP files enter `public/images/knowledgeflow/`.

---

### Task 1: Audit Existing Acceptance and Asset Contracts

**Files:**
- Read: `<knowledgeflow-source>\frontend\scripts\fullstack-browser-smoke.mjs`
- Read: `<knowledgeflow-source>\tests\e2e\fake_fullstack_api.py`
- Read: `<portfolio-repo>\src\app\assets.ts`
- Read: `<portfolio-repo>\src\app\assets.test.ts`

- [ ] Confirm the acceptance runner isolates Chroma, uploads, caches, temp files, browser output, and fingerprints normal runtime directories.
- [ ] Confirm Fake Provider SSE content, source metadata, delay controls, session restore behavior, and selectors needed for six states.
- [ ] Record clean Git commits and baselines for both repositories.

### Task 2: Capture Truthful Product States

**Files:**
- Create temporarily: `<temporary-root>\rag-v0.2.0-browser-*\demo\ai-knowledge-base-acceptance.md`
- Create temporarily: `<temporary-root>\rag-v0.2.0-browser-*\browser\*.png`
- Create: `<portfolio-repo>\public\images\knowledgeflow\*.webp`

- [ ] Create a concise public synthetic Chinese Markdown document with explicit acceptance facts and no private content.
- [ ] Capture empty upload state with zero documents/chunks and disabled composer.
- [ ] Upload the document and capture the real document list and ingestion success state.
- [ ] Capture a real in-progress SSE answer with partial text, generating state, and stop control.
- [ ] Complete two related questions, open the bound source snapshot, refresh, and prove two completed answers plus selected source restore.
- [ ] Capture the completed workbench for source snapshot, restore, and homepage hero use.
- [ ] Convert selected lossless PNG crops to high-quality WebP without stretching and inspect dimensions and legibility.

### Task 3: Integrate the Asset Manifest Test-First

**Files:**
- Modify: `<portfolio-repo>\src\app\assets.test.ts`
- Modify: `<portfolio-repo>\src\app\assets.ts`

- [ ] Add assertions that the six KnowledgeFlow records are available and expose their exact generated dimensions.
- [ ] Run the focused test and confirm it fails because the records are still unavailable or dimensionless.
- [ ] Update only the six KnowledgeFlow asset records with `available: true`, exact `width`, and exact `height`.
- [ ] Run the focused test and confirm it passes.

### Task 4: Record Truthfulness and Visual Evidence

**Files:**
- Create: `<portfolio-repo>\docs\verification\knowledgeflow-assets.md`
- Create: `<portfolio-repo>\docs\visual-review-knowledgeflow-assets\*.png`
- Create: `<portfolio-repo>\docs\visual-review-knowledgeflow-assets\review.json`

- [ ] Record source path and commit, synthetic demo provenance, provider boundary, per-image contents and ratings, rejected candidates, product limits, and safety statements.
- [ ] Verify homepage and `/projects/knowledgeflow` at 1440x900, 1024x768, and 390x844.
- [ ] Record cropping, legibility, horizontal overflow, placeholder, sensitive-path, secret, and browser-error checks.

### Task 5: Run Fresh Verification and Update Project Memory

**Files:**
- Modify: `<portfolio-repo>\PROJECT_MEMORY.md`

- [ ] Run source Fake Provider browser full-stack acceptance and confirm normal Chroma/uploads fingerprints remain unchanged.
- [ ] Run source frontend tests and production build.
- [ ] Run portfolio typecheck, lint, unit tests, Playwright browser tests, and production build.
- [ ] Review Git diffs and confirm no Xishu changes, secrets, raw PNGs, runtime data, dependency changes, or unrelated files.
- [ ] Update `PROJECT_MEMORY.md` with durable paths, truthful boundaries, verification results, known limits, and next steps.
