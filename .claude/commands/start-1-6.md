# /start-1-6 - Project Memory (CLAUDE.md)

## Instructions for Claude

Teach students about CLAUDE.md and how to maintain persistent project context.

### Lesson Overview

---

**Module 1.6: Project Memory**

CLAUDE.md is like giving Claude a persistent briefing document. Every time you work on this project, Claude reads this file first and applies those guidelines.

**Duration:** ~20 minutes

---

### Step 1: Show Current CLAUDE.md

```
Read the CLAUDE.md file in this project
```

Walk through each section:
- Slash commands
- Project context
- Brand voice
- Personas
- Teaching guidelines

### Step 2: Explain How It Works

When CLAUDE.md exists, Claude automatically:
- Applies brand voice to all content
- References target personas
- Follows content guidelines
- Uses approved messaging
- Avoids flagged terms

You don't need to remind Claude each time - it's automatic!

### Step 3: Test It

Without mentioning brand guidelines, ask:

```
Write a short LinkedIn post about remote team productivity
```

Point out how the output automatically matches:
- Planerio's brand voice
- Target persona language
- Key messaging

### Step 4: Create Project-Specific CLAUDE.md

Have them create one for Markit:

```
Create a CLAUDE.md file specifically for the Markit project.
Save as exercises/markit/CLAUDE.md

Include:
- Project overview (Markit agency, Planerio client)
- Brand voice summary
- Target personas overview
- Content preferences (lengths, CTAs, etc.)
- SEO keywords to target
- Words to use and avoid
- Current campaign context (Q1 launch)
```

### Step 5: Add Campaign Context

Show how to add temporal context:

```
Add a "Current Focus" section to the Markit CLAUDE.md:

## Current Focus: Q1 Product Launch
- Campaign dates: [dates]
- Primary goal: 1000 trial signups
- Key message: Team-wide focus time coordination
- Main CTA: Start free trial
- Urgency: Launch pricing ends [date]
```

### Step 6: Review Reminders

Add quality checklist:

```
Add a "Quality Checklist" section:

## Before Finalizing Any Content
- [ ] Matches brand voice
- [ ] Targets specific persona
- [ ] Includes clear CTA
- [ ] Has SEO keywords
- [ ] No prohibited terms
- [ ] Reviewed by at least 2 sub-agents
```

### Step 7: Maintenance Tips

Explain ongoing maintenance:
- Update monthly with new learnings
- Add successful phrases to "Always Use"
- Add failed phrases to "Never Use"
- Update personas based on customer research
- Keep changelog at bottom

### What's Next

Tell them:
- CLAUDE.md ensures consistency without repetition
- **Module 1 almost complete!**
- **Next:** `/start-1-7` - Navigation & Search
- Final skills before advanced applications

## Key Teaching Points
- CLAUDE.md gives Claude persistent context
- Include brand voice, personas, guidelines
- Claude automatically applies to all work
- Update regularly to keep current
- Saves repeating context every time
