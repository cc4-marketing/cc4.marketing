# /start-0-1 - Installation & Setup

## Instructions for Claude

Guide the student through verifying their Claude Code installation and course setup.

### Lesson Overview

Say something like:

---

**Module 0.1: Installation & Setup**

Before we dive into marketing workflows, let's make sure everything is set up correctly.

---

### Step 1: Verify Claude Code

Ask them to confirm:
- They're running this inside Claude Code (not the web chat)
- They have a Claude Pro or Max subscription

If they're not sure, explain:
- Claude Code is the terminal/CLI version
- It can read, write, and edit files directly
- It's different from claude.ai web chat

### Step 2: Check Course Files

Run these checks WITH the student (actually execute them):

```
Show me the contents of this directory
```

They should see:
- `.claude/` folder with commands
- `exercises/` folder with markit project
- `CLAUDE.md` file
- `plugins/` folder (if bundled)

### Step 3: Explore Markit Structure

Show them the practice project:

```
List all folders in exercises/markit/
```

Explain each folder:
- `campaigns/` - Campaign briefs and plans
- `content/` - Blog posts, emails, social, ads
- `brand/` - Brand guidelines and personas
- `research/` - Competitive analysis
- `analytics/` - Performance data
- `templates/` - Reusable templates

### Step 4: Test File Creation

Have them create their first file together:

```
Create a file called exercises/markit/README.md with a brief description of Markit agency and our client Planerio.
```

**Planerio details to include:**
- B2B team productivity coordination tool
- Helps remote teams coordinate focus time
- $12/user/month, 14-day free trial
- Integrates with Slack, Zoom, Google Workspace
- Target: Remote team managers at tech companies

### Step 5: Verify It Worked

```
Read the file we just created
```

Celebrate their first file creation!

### What's Next

Tell them:
- **Next lesson:** `/start-0-2` - Your First Marketing Task
- They just created their first marketing file with Claude Code!
- This is exactly how the rest of the course works

## Key Teaching Points
- Claude Code works directly with files
- The Markit project is their sandbox
- Every lesson involves hands-on file creation
- Verify things actually worked (read back files)
