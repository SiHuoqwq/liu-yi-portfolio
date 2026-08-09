# Project Memory

- At the start of every new conversation or task in this repository, read `PROJECT_MEMORY.md` before making project decisions or changes.
- Before finishing each conversation task, identify durable information that will help future work and update `PROJECT_MEMORY.md` with the latest confirmed decisions, progress, relevant paths, verification results, known issues, and next steps.
- Keep the memory concise, current, and truthful. Merge or replace stale information instead of appending duplicate notes, and never store secrets or unsupported assumptions.

# Portfolio Skill Routing

## Required workflow

### New visual direction, page structure, or major interaction

Use `$brainstorming` first.

Do not create the project, write page code, install dependencies, or begin
implementation until:

1. requirements have been clarified;
2. 2–3 approaches have been compared;
3. the design specification has been written;
4. the user has explicitly approved the specification;
5. an implementation plan has been approved.

Do not start the Visual Companion server or execute its scripts unless the
user explicitly approves it.

### Implementing an approved design

Use `$frontend-design`.

Before implementation:

1. read the approved design specification;
2. define the color, typography, layout, and motion tokens;
3. identify one signature visual element;
4. explain why that element belongs specifically to this portfolio;
5. check that the result does not resemble a generic AI/SaaS template.

### Image generation

Use `$imagegen` only after explicit user approval for a named asset.

Never:

- generate decoration to replace real project screenshots;
- install dependencies automatically;
- request or use an API key without explicit approval;
- call a paid image endpoint without explicit approval.

## Priority

1. User-approved project decisions
2. Project content truthfulness
3. Accessibility, mobile usability, and performance
4. Approved design specification
5. AGENTS.md
6. Skill guidance
7. Model defaults
