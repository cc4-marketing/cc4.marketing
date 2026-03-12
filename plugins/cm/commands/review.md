# Command: cm:review

Review marketing content against brand voice, language quality, and messaging standards. Returns a detailed scorecard with line-level fixes.

## Purpose

Ensure content quality by:
1. Loading brand voice guidelines and language style rules from the project
2. Scoring content across 5 dimensions (voice, language, formatting, messaging, channel fit)
3. Identifying specific issues with corrected text
4. Providing a clear APPROVED / NEEDS REVISION / REWRITE RECOMMENDED verdict
5. Building review patterns that compound over time

## Usage

```bash
/cm:review "<content-or-file>" [options]
```

### Parameters

- **content-or-file** (required): Content to review, or path to a file
  - Examples: `"path/to/email-draft.md"`, or paste content directly

### Options

- `--channel <type>`: Expected channel (for tone validation)
  - Values: `social`, `email`, `ads`, `landing`, `formal`, `proposal`
  - Default: Inferred from content

- `--audience <persona>`: Target audience (for messaging validation)
  - Example: `--audience "decision-makers"`
  - Default: General

- `--strict`: Apply strict review (no minor issues forgiven)
  - Default: Standard review

- `--focus <area>`: Focus review on specific area
  - Values: `voice`, `language`, `messaging`, `formatting`, `all`
  - Default: `all`

## Examples

### Review a File
```bash
/cm:review "campaigns/q2-launch/email-draft.md"
```

### Review Pasted Content
```bash
/cm:review "BiPlus mang đến giải pháp đột phá toàn diện 360 độ cho mọi doanh nghiệp"
```

### Strict Review for Ads
```bash
/cm:review "ads/facebook-cto-v2.md" --channel ads --audience "decision-makers" --strict
```

### Focus on Language Only
```bash
/cm:review "social/linkedin-post.md" --focus language
```

## What This Command Does

### Step 1: Load Review Standards

**Brand Voice Files:**
- Search for brand voice guidelines in the project (e.g., `brand-voice-*.md`, `style-writing-*.md`, `marketing-lang.md`)
- Load CLAUDE.md for project-level brand instructions
- Build the complete checklist of review criteria

**Campaign Context:**
- Search for campaign copy master (e.g., `copy-master.md`)
- Load campaign positioning and messaging standards
- Identify required terminology and avoided words

### Step 2: Score Content (5 Dimensions)

#### Dimension 1: Brand Voice Alignment (1-5)

| Check | Pass | Fail |
|-------|------|------|
| Tone is expert, friendly, practical | Sounds like a peer-partner | Sounds arrogant, preachy, or corporate |
| Confident and declarative | Clear assertions, no hedging | "We believe...", "We think...", "perhaps..." |
| Brand positioned as partner | "We help you...", collaborative framing | Vendor-speak, lecturing tone |
| Warmth through community language | Gratitude, shared journey language | Forced enthusiasm, fake excitement |
| Emotional register appropriate | Earnest, forward-looking, collegial | Detached, robotic, or overly casual |

#### Dimension 2: Language Quality (1-5)

| Check | Pass | Fail |
|-------|------|------|
| Correct spelling | Chuẩn chính tả | Viết tắt kiểu chat, sai dấu |
| Sentence architecture | Lead with claim, varied length | Build-up structure, monotonous length |
| Pronoun usage | Correct brand/customer pronouns | Wrong pronoun for context |
| Preferred vocabulary | Signature verbs and terms used | Generic or passive verbs |
| Avoided vocabulary | No empty buzzwords | "bứt phá", "đột phá", "360 độ" without proof |
| Hán-Việt minimized | Thuần Việt preferred | Unnecessarily complex Hán-Việt |
| Mixed EN/VI | Tech terms English, first-mention pattern | Inconsistent mixing |
| Product names | Correctly spelled | Misspelled product/brand names |

#### Dimension 3: Punctuation & Formatting (1-5)

| Check | Pass | Fail |
|-------|------|------|
| Colons for frameworks/lists | Proper colon usage | Missing or misused colons |
| Em-dashes for parallel outcomes | Clean dash usage | Parenthetical asides instead |
| No parenthetical asides | Clean flow | Nested parentheses disrupting reading |
| Rhetorical questions | Sparingly, naming audience anxiety | Overused or generic questions |
| Short paragraphs | 2-4 lines max | Wall of text |
| Sentence length variety | Mix of short and long | All same length |

#### Dimension 4: Messaging Consistency (1-5)

| Check | Pass | Fail |
|-------|------|------|
| Campaign positioning | Aligns with core positioning | Off-message or contradictory |
| Real outcomes focus | Concrete, measurable claims | Hype, vague promises |
| Audience-specific value props | Correct props for target persona | Generic or wrong-persona messaging |
| CTA quality | Clear, single, action-oriented | Vague, multiple, or missing CTA |
| Content structure | Problem → Tension → Solution → Benefits → Proof → CTA | Jumbled or incomplete structure |

#### Dimension 5: Channel Appropriateness (1-5)

| Check | Pass | Fail |
|-------|------|------|
| Tone matches channel | Social=energetic, Formal=measured | Mismatch (formal tone on social) |
| Format matches channel | Correct formatting conventions | Wrong format for medium |
| Length appropriate | Within channel norms | Too long or too short |

### Step 3: Identify Specific Issues

For each issue found, document:
- **Location**: Line number or section reference
- **Issue**: What violates the standard
- **Rule**: Which guideline it breaks
- **Fix**: Specific corrected text

### Step 4: Determine Verdict

| Score | Verdict |
|-------|---------|
| 4.0-5.0 avg | **APPROVED** — Content is on-brand and ready |
| 3.0-3.9 avg | **NEEDS REVISION** — Specific fixes required |
| Below 3.0 avg | **REWRITE RECOMMENDED** — Fundamental issues |

## Output Format

```markdown
## Brand Voice & Language Review

### Overall Score: X.X/5

### Scorecard

| Dimension | Score | Key Issues |
|---|---|---|
| Brand Voice | X/5 | [Summary] |
| Language Quality | X/5 | [Summary] |
| Punctuation & Format | X/5 | [Summary] |
| Messaging Consistency | X/5 | [Summary] |
| Channel Fit | X/5 | [Summary] |

### Issues Found

**Issue 1: [Category]**
- **Location**: [Line/section]
- **Problem**: [What's wrong]
- **Rule**: [Which guideline]
- **Fix**: "[Original]" → "[Corrected]"

**Issue 2: [Category]**
...

### Strengths
- [What the content does well]
- [Strong brand voice examples]

### Verdict: [APPROVED / NEEDS REVISION / REWRITE RECOMMENDED]

### Next Steps
- [Specific actions to take]
- [Consider /cm:rewrite if REWRITE RECOMMENDED]
```

## Compounding Benefits

### First Review
- **Review depth:** Checks against loaded guidelines
- **Pattern recognition:** Limited baseline

### Fifth Review
- **Review depth:** Catches subtle voice inconsistencies ⚡
- **Pattern recognition:** Knows common issues in the project

### Tenth Review
- **Review depth:** Highly calibrated to the brand ⚡⚡
- **Pattern recognition:** Predictive — flags likely issues before they appear

## Tips for Best Results

1. **Specify the channel**: Review criteria shift significantly by channel
2. **Name the audience**: Persona-specific messaging checks are more accurate
3. **Use --strict for final review**: Before publishing, run a strict pass
4. **Follow up with /cm:rewrite**: If verdict is NEEDS REVISION, use rewrite to fix
5. **Document corrections**: Update brand guidelines when new patterns emerge

## Related Commands

- `/cm:write` - Create content with brand voice applied
- `/cm:rewrite` - Rewrite content to fix review issues
- `/cm:plan` - Plan a full campaign brief

## Version History

- **v0.1.0**: Initial release with 5-dimension review scorecard
