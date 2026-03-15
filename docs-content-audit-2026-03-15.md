# Course Content Audit Report (2026-03-15)

This report tracks content consistency issues found across:
- website lesson pages (`cc4.marketing/modules/*`)
- lesson command docs (`.claude/commands/start-*`)
- practice docs (`README.md`, `CLAUDE.md`, `exercises/markit/README.md`)

## Summary

- Total tracked issues: **8** (#6–#13)
- PRs opened from this audit: **4** (#14, #15, #16, #17)
- External/site-only blockers (source not present in this repo): #6, #8 (partially), #7 (website page variant)

## Issue-by-issue status

### #7 Module 0 Start-Clone outdated paths/structure
- Status: **PR opened**
- PR: #17 (`docs(module-0): align start/clone guidance with exercises/markit workspace`)
- Notes: repo docs and onboarding prompts updated; website lesson source for `/modules/0/start-clone/` not present in current default branch.

### #8 Planerio positioning / ICP drift
- Status: **Open (needs site/content source update)**
- Repo status: command docs + practice docs consistently use team productivity + remote team managers.
- Notes: inconsistency appears on published website lesson copy (`/modules/1/welcome/`) not available in current branch sources.

### #9 Module 0 sequencing bug
- Status: **PR opened**
- PR: #14 (`fix(module-0): correct onboarding sequence for starter project state`)

### #10 Practice README starter mismatch
- Status: **PR opened**
- PR: #16 (`docs(markit): document starter state vs target structure`)

### #11 `marketflow` typo
- Status: **PR opened**
- PR: #17 (includes typo correction in onboarding prompt)

### #12 Path root drift (`campaigns/` vs `exercises/markit/campaigns/`)
- Status: **PR opened**
- PR: #15 (`fix(paths): remove root-path drift in navigation lesson prompts`)

### #13 Tracking issue
- Status: **Open**
- This report acts as the progress snapshot for #13.

### #6 metadata / lesson counts / CTA mismatches
- Status: **Open (site-side)**
- Notes: primarily website metadata/content template issues; not directly editable via current command-doc-only surface.

---

## Recommended next actions

1. Merge PRs in order: **#14 -> #15 -> #16 -> #17**
2. Rebuild/redeploy site content
3. Recheck published pages:
   - `/modules/0/start-clone/`
   - `/modules/1/welcome/`
   - homepage + `/download/` + metadata/title consistency
4. Close issues #9/#10/#11/#12/#7 after verification
5. Keep #6/#8 open until site copy + metadata are validated in production
