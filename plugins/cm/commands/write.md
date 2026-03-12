# Command: cm:write

Create marketing content that automatically applies your brand voice, language style, and campaign messaging standards.

## Purpose

Generate on-brand content by:
1. Loading brand voice guidelines and language style rules from the project
2. Applying vocabulary, tone, and structural standards automatically
3. Calibrating tone for the target channel (social, email, ads, formal)
4. Following the proven content structure: Problem → Tension → Solution → Benefits → Proof → CTA
5. Leveraging campaign messaging and past content patterns (compounding effect)

## Usage

```bash
/cm:write "<content-description>" [options]
```

### Parameters

- **content-description** (required): What you need written
  - Examples: "LinkedIn post announcing early bird closing", "email for ITSM leads", "Facebook ad variation for CTOs"

### Options

- `--channel <type>`: Target channel for tone calibration
  - Values: `social`, `email`, `ads`, `landing`, `formal`, `proposal`
  - Default: Inferred from content description

- `--audience <persona>`: Target audience persona
  - Example: `--audience "decision-makers"` or `--audience "tech-practitioners"`
  - Default: General audience

- `--lang <language>`: Content language
  - Values: `vi` (Vietnamese), `en` (English), `bilingual`
  - Default: `vi` (Vietnamese for customer-facing)

- `--tone <level>`: Tone override
  - Values: `energetic`, `professional`, `formal`
  - Default: Calibrated by channel

- `--variation <count>`: Generate A/B test variations
  - Example: `--variation 3`
  - Default: 1

## Examples

### Basic Usage
```bash
/cm:write "LinkedIn post about AI deployment ROI for CTOs"
```

### With Options
```bash
/cm:write "email subject lines for ITSM leads" --channel email --audience "tech-practitioners" --variation 5
```

### Quick Ad Copy
```bash
/cm:write "Facebook ad — pain point angle about AI stuck in POC" --channel ads --audience "decision-makers"
```

### Formal Proposal
```bash
/cm:write "VIP invitation for enterprise CIOs" --channel formal --lang bilingual
```

## What This Command Does

### Step 1: Load Brand Standards

**Brand Voice Files:**
- Search for brand voice guidelines in the project (e.g., `brand-voice-*.md`, `style-writing-*.md`, `marketing-lang.md`)
- Load CLAUDE.md for project-level brand instructions
- Extract vocabulary preferences, avoided words, pronoun rules, tone guidance

**Campaign Context:**
- Search for campaign copy master (e.g., `copy-master.md`)
- Identify active campaign messaging, positioning, and CTAs
- Load campaign-specific terminology and hashtags

**Compounding Effect:**
- Campaign 1: Uses general brand guidelines
- Campaign 5: References successful past content patterns
- Campaign 10: Deep content library, predictive messaging angles

### Step 2: Determine Content Parameters

**Channel Calibration:**

| Channel | Tone | Structure | Length |
|---------|------|-----------|--------|
| Social/Landing | Energetic, conversational, punchy lines, questions | Hook → Value → CTA | Short (50-200 words) |
| Email | Problem → Solution → Benefit → CTA | Subject + Preview + Body | Medium (100-400 words) |
| Ads | Hook first line, concrete value, single CTA | Headline + Body + CTA | Short (20-80 words) |
| Formal/Proposal | Measured, logical, data-backed | Context → Proposition → Evidence → Ask | Long (200-800 words) |

**Audience Adaptation:**
- Decision makers (CIO/CTO): ROI justification, peer networking, strategic roadmap
- Tech practitioners (Dev/DevOps/PM): Hands-on experience, workflow demos, best practices
- Non-tech roles (Marketing/Sales/HR): Role-specific AI use cases, practical not theoretical

### Step 3: Apply Writing Rules

**Sentence Architecture:**
- Lead with the main claim, then elaborate. Never build toward a point.
- Vary length: short declaratives (8 words) to longer elaborations (50 words) in the same passage.
- Sequence within paragraphs: bold claim → supporting detail → implication or CTA.
- Never stack more than two long sentences before inserting a short one.

**Pronouns (Vietnamese):**
- Brand actor in institutional passages: brand name (e.g., "BiPlus") or "chúng tôi"
- Shared challenges: "chúng ta"
- Invitations and CTAs: "bạn" / "doanh nghiệp của bạn" / "đội ngũ của bạn"
- Formal contexts only: "quý khách hàng"

**Pronouns (English):**
- Brand = "We"
- Customer = "You / your team / your company"
- Avoid third-person references to the brand

**Vocabulary Standards:**
- Use preferred vocabulary from brand guidelines (signature verbs, transformation-era terms)
- Replace empty buzzwords with concrete specifics
- Use architecture/systems analogies for CIO-level audiences
- Mix Vietnamese + English tech terms naturally (tech terms stay in English)
- First mention: Vietnamese term + English in parentheses. Subsequent: shortened form.

**Punctuation:**
- Colons to introduce frameworks, lists, and elaborations
- Em-dashes for parallel outcomes in quick sequence
- Avoid parenthetical asides
- Rhetorical questions sparingly — only to name the audience's exact anxiety

**Content Structure:**
1. Problem / Context — name the challenge
2. Tension / Impact — what happens if unresolved
3. Solution — what makes this different
4. Benefits — 3-5 concrete bullets with specifics
5. Proof — numbers, case studies, social proof
6. CTA — single, clear action

### Step 4: Generate Content

Write the content following all loaded standards. Ensure:
- Every claim is anchored to specifics (events, products, numbers)
- Tone is confident and declarative, never hedging
- Emotional register is earnest, forward-looking, and collegial
- No humor — warmth comes from community language and gratitude
- CTA is clear and action-oriented

### Step 5: Quality Check

Before presenting, validate:
- [ ] Brand voice alignment (tone, vocabulary, pronouns)
- [ ] Language quality (spelling, grammar, sentence architecture)
- [ ] Avoided vocabulary not present
- [ ] Mixed language handled correctly
- [ ] Content structure followed
- [ ] CTA is clear
- [ ] Channel-appropriate format and length

## Output

### Content Output

Present the finished content, cleanly formatted and ready to use.

### Writing Notes

After the content, provide:

```
## Writing Notes

**Brand voice elements applied:**
- [Which guidelines were followed]

**Terminology choices:**
- [Notable vocabulary decisions and why]

**A/B variations:** (if requested)
- Variation A: [angle/hook]
- Variation B: [angle/hook]

**Channel optimization:**
- [Any channel-specific adaptations made]
```

## Compounding Benefits

### First Content Piece
- **Time to write:** 10-15 minutes
- **Brand consistency:** Good (follows loaded guidelines)
- **Template reuse:** Creates patterns for future content

### Fifth Content Piece
- **Time to write:** 5-7 minutes ⚡
- **Brand consistency:** Strong (learned from corrections)
- **Template reuse:** Leverages established patterns

### Tenth Content Piece
- **Time to write:** 3-5 minutes ⚡⚡
- **Brand consistency:** Excellent (deeply internalized)
- **Template reuse:** Rich content library to draw from

## Tips for Best Results

1. **Maintain brand files**: Keep voice guidelines and style guides up-to-date in the project
2. **Specify channel**: Tone calibration is much better with explicit channel targeting
3. **Name the audience**: Persona-specific messaging is always stronger
4. **Review after writing**: Follow up with `/cm:review` to catch anything missed
5. **Save what works**: Document successful content patterns for compounding

## Related Commands

- `/cm:review` - Review content against brand voice and language standards
- `/cm:rewrite` - Rewrite content to match brand standards
- `/cm:plan` - Plan a full campaign brief

## Version History

- **v0.1.0**: Initial release with brand-aware content generation
