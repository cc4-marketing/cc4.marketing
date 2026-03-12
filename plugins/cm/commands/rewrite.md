# Command: cm:rewrite

Rewrite marketing content to match brand voice and language standards. Preserves original intent while fixing every voice, tone, vocabulary, and language issue.

## Purpose

Fix off-brand content by:
1. Diagnosing brand voice and language issues in the original
2. Applying all brand standards simultaneously (voice, vocabulary, structure, punctuation)
3. Performing systematic vocabulary swaps (banned words → preferred alternatives)
4. Presenting clean, ready-to-use rewritten content
5. Documenting changes so the team learns what to avoid

## Usage

```bash
/cm:rewrite "<content-or-file>" [options]
```

### Parameters

- **content-or-file** (required): Content to rewrite, or path to a file
  - Examples: `"path/to/draft.md"`, or paste content directly

### Options

- `--channel <type>`: Target channel for tone calibration
  - Values: `social`, `email`, `ads`, `landing`, `formal`, `proposal`
  - Default: Inferred from content

- `--audience <persona>`: Target audience persona
  - Example: `--audience "tech-practitioners"`
  - Default: General

- `--preserve <elements>`: Elements to keep unchanged
  - Values: `structure`, `length`, `cta`, `data`
  - Example: `--preserve "structure,data"`
  - Default: Preserves intent and data, rewrites everything else

- `--explain`: Include detailed explanations for each change
  - Default: Summary table only

## Examples

### Rewrite a File
```bash
/cm:rewrite "campaigns/q2-launch/email-draft.md"
```

### Rewrite Pasted Content
```bash
/cm:rewrite "BiPlus mang đến giải pháp đột phá toàn diện cho mọi doanh nghiệp Việt Nam trong kỷ nguyên chuyển đổi số 4.0"
```

### Rewrite for Specific Channel
```bash
/cm:rewrite "social/linkedin-post.md" --channel social --audience "decision-makers"
```

### Rewrite with Explanations
```bash
/cm:rewrite "ads/facebook-v1.md" --explain
```

## What This Command Does

### Step 1: Load Brand Standards

**Brand Voice Files:**
- Search for brand voice guidelines in the project (e.g., `brand-voice-*.md`, `style-writing-*.md`, `marketing-lang.md`)
- Load CLAUDE.md for project-level brand instructions
- Build complete vocabulary preference and avoidance lists

**Campaign Context:**
- Search for campaign copy master (e.g., `copy-master.md`)
- Load campaign positioning and messaging standards

### Step 2: Diagnose Issues

Read the original content and identify (in 2-3 sentences max):
- Primary voice/tone problems
- Language and vocabulary issues
- Structural or formatting gaps

### Step 3: Apply Rewrite Rules

Apply ALL rules simultaneously:

**Voice & Tone:**
- Expert, friendly, practical — not arrogant or preachy
- Confident and declarative — remove all hedging
- Brand as peer-partner — reframe any vendor-speak
- Earnest, forward-looking, collegial emotional register
- No humor — warmth through community language and gratitude

**Sentence Architecture:**
- Lead with the main claim, then elaborate
- Vary length deliberately: short declaratives (8 words) to elaborations (50 words)
- Sequence: bold claim → supporting detail → implication or CTA
- Max two long sentences before inserting a short one
- Use bullet lists to break dense enumerations

**Pronoun Corrections (Vietnamese):**

| Context | Use | Avoid |
|---------|-----|-------|
| Institutional passages | Brand name or "chúng tôi" | "Chúng ta" (too inclusive for brand claims) |
| Shared challenges | "chúng ta" | "bạn" alone (excludes the brand) |
| Invitations / CTAs | "bạn" / "đội ngũ của bạn" | "quý khách hàng" (too formal for digital) |
| Formal only | "quý khách hàng" | On social media or landing pages |

**Pronoun Corrections (English):**

| Context | Use | Avoid |
|---------|-----|-------|
| Brand | "We" | Third-person brand references |
| Customer | "You / your team" | "Customers", "users", "clients" |

**Vocabulary Swaps:**

| Remove | Replace With |
|--------|-------------|
| "bứt phá", "đột phá" | "bước ngoặt", "tiến bộ rõ rệt", "kết quả đo được" |
| "thần tốc" | "nhanh hơn", "hiệu quả hơn" + specific metric |
| "toàn diện 360 độ" | Specific scope description |
| "chuyển đổi số 4.0" | Name the actual transformation |
| Passive/generic verbs | "triển khai", "khai thác", "thiết kế", "cô đọng", "kết nối" |
| Abstract claims | Concrete specifics with numbers or examples |
| Corporate buzzwords (EN) | Plain, concrete language |

**Architecture Analogies (for CIO-level content):**
- Add where appropriate: "hệ điều hành công việc", "đường băng mở rộng quy mô", "dòng chảy tri thức"

**Punctuation Fixes:**
- Replace semicolons with colons for frameworks and lists
- Replace parenthetical asides with em-dashes or separate sentences
- Add em-dashes for parallel outcomes in quick sequence
- Reduce rhetorical questions to max 1-2, only for naming audience anxiety

**Mixed Language (Vietnamese content):**
- Keep tech terms in English: product names, "workflow", "automation", "ITSM", etc.
- First mention: Vietnamese term + English in parentheses
- After first mention: use shortened form
- Ensure all product names correctly spelled

**Content Structure:**
- Ensure flow follows: Problem → Tension → Solution → Benefits → Proof → CTA
- Every passage needs a clear CTA
- Benefits must be concrete bullets, not vague promises
- Proof must include specifics (numbers, cases, quotes)

### Step 4: Present Rewritten Content

Present the clean, final version — formatted and ready to use.

### Step 5: Document Changes

Provide a changes summary table (5-8 most important changes):

```markdown
## Changes Summary

| # | Original | Rewritten | Rule Applied |
|---|----------|-----------|-------------|
| 1 | [snippet] | [snippet] | [which guideline] |
| 2 | [snippet] | [snippet] | [which guideline] |
...
```

## Output Format

```markdown
## Diagnosis

[2-3 sentences identifying the key issues]

---

## Rewritten Content

[Clean, ready-to-use content]

---

## Changes Summary

| # | Original | Rewritten | Rule Applied |
|---|----------|-----------|-------------|
| 1 | "đột phá toàn diện" | "kết quả đo được cụ thể" | Avoided vocabulary → preferred |
| 2 | "Chúng tôi cam kết..." | "BiPlus đồng hành cùng bạn..." | Vendor-speak → peer-partner |
| 3 | Three long sentences stacked | Short declarative inserted | Sentence architecture rule |
...

## Quality Check

- [ ] Brand voice: aligned
- [ ] Vocabulary: clean
- [ ] Pronouns: correct
- [ ] Structure: complete
- [ ] CTA: clear
- [ ] Ready to publish
```

## Compounding Benefits

### First Rewrite
- **Fix accuracy:** Catches major voice and vocabulary issues
- **Learning:** Documents patterns for team awareness

### Fifth Rewrite
- **Fix accuracy:** Catches subtle tone mismatches ⚡
- **Learning:** Team starts avoiding common issues

### Tenth Rewrite
- **Fix accuracy:** Minimal rewrites needed — content comes in cleaner ⚡⚡
- **Learning:** Brand voice deeply internalized across team

## Tips for Best Results

1. **Run /cm:review first**: Get a scorecard, then rewrite the flagged issues
2. **Specify channel and audience**: Rewrites are more precise with context
3. **Use --preserve for data**: Keep stats and quotes intact while fixing voice
4. **Share the changes table**: Helps the team learn what to avoid
5. **Update brand guidelines**: If you see recurring issues, update the source docs

## Related Commands

- `/cm:write` - Create new content with brand voice applied
- `/cm:review` - Review content and get a scorecard
- `/cm:plan` - Plan a full campaign brief

## Version History

- **v0.1.0**: Initial release with systematic vocabulary swaps and change documentation
