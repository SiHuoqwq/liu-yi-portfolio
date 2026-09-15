# Interview Cheat Sheets Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce two verified A4-ratio Chinese SVG/PNG interview cheat sheets with complete, speakable text.

**Architecture:** Each page is a standalone SVG with embedded styles, manually wrapped text, and no external dependencies. Microsoft Edge headless rendering produces fixed-size PNGs; XML, label inventory, dimensions, and visual layout are verified before delivery.

**Tech Stack:** SVG 1.1, embedded CSS, Microsoft YaHei/PingFang/Noto Sans fallback fonts, Microsoft Edge headless screenshot, PowerShell XML and image checks.

## Global Constraints

- Canvas for each page is exactly 1800×2546.
- Deliver under `D:\Codex\Outputs\interview-prep-2026-08-18\cheat-sheets`.
- Every key point must include a complete explanatory phrase or sentence.
- Do not include personal contact details, HR identity, or chat screenshots.
- Do not claim same-domain production experience, unverified company facts, or full statutory accounting capability.

---

### Task 1: Build the ERP and smart-container page

**Files:**
- Create: `D:\Codex\Outputs\interview-prep-2026-08-18\cheat-sheets\01-erp-smart-container-cheatsheet.svg`

**Interfaces:**
- Consumes: the approved design spec and user screenshot content.
- Produces: a standalone 1800×2546 SVG with ERP definition, seven-step flow, three scenarios, boundaries, and a 30-second script.

- [ ] Create the output directory.
- [ ] Draw the title, seven-step memory strip, ERP definition, and end-to-end business chain.
- [ ] Draw seven process cards with complete explanations.
- [ ] Draw three scenario cards and the infeasible-result callout.
- [ ] Draw AI/solver/human and allocation/3D boundaries.
- [ ] Add the 30-second script and final core sentence.
- [ ] Parse as XML and assert the required labels are present.

### Task 2: Build the interview Q&A page

**Files:**
- Create: `D:\Codex\Outputs\interview-prep-2026-08-18\cheat-sheets\02-interview-qa-cheatsheet.svg`

**Interfaces:**
- Consumes: the approved design spec, formal resume facts, and user screenshot content.
- Produces: a standalone 1800×2546 SVG with self-introduction, seven Q&As, a generic business-answer structure,现场话术, and eight reverse questions.

- [ ] Draw the title and 75-90 second self-introduction panel.
- [ ] Draw seven question-and-answer cards with honest capability boundaries.
- [ ] Draw the generic business-answer chain and recovery scripts.
- [ ] Draw eight reverse questions grouped by business, delivery, team, and finance scope.
- [ ] Parse as XML and assert the required labels are present.

### Task 3: Render and verify both pages

**Files:**
- Create: `D:\Codex\Outputs\interview-prep-2026-08-18\cheat-sheets\01-erp-smart-container-cheatsheet.png`
- Create: `D:\Codex\Outputs\interview-prep-2026-08-18\cheat-sheets\02-interview-qa-cheatsheet.png`

**Interfaces:**
- Consumes: the two verified SVG files.
- Produces: two 1800×2546 PNG files ready for printing or phone viewing.

- [ ] Render each SVG with Microsoft Edge headless using an argument array and fixed window size.
- [ ] Assert both PNG dimensions are exactly 1800×2546 and both files are non-empty.
- [ ] Visually inspect both pages for clipping, overlap, unreadable text, or broken hierarchy.
- [ ] Correct the SVG source and repeat rendering if any visual defect is found.
- [ ] Confirm no SVG contains `<image>` or `href=` dependencies.
