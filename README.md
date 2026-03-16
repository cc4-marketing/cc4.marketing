# Claude Code for Marketers

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

An interactive course that teaches AI-powered marketing workflows through hands-on practice inside [Claude Code](https://docs.anthropic.com/en/docs/claude-code).

No videos. No slides. You learn by doing real marketing work — creating campaign briefs, writing copy, building content strategies, and running competitive analysis — all guided by Claude inside the terminal.

## Prerequisites

- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) installed (requires Claude Pro or Max subscription)

## Getting Started

```bash
git clone https://github.com/cc4-marketing/cc4.marketing.git
cd cc4.marketing
claude
```

Then type:

```
/start-0-0
```

Claude will guide you from there.

## What You'll Learn

You play the role of a Marketing Strategist at **Markit**, a fictional agency working for a B2B SaaS client called **Planerio**. Across 16 lessons, you'll build real marketing assets while learning how to use Claude Code effectively.

### Module 0 — Getting Started
| Command | Lesson |
|---------|--------|
| `/start-0-0` | Course Introduction |
| `/start-0-1` | Installation & Setup |
| `/start-0-2` | Your First Marketing Task |

### Module 1 — Core Concepts
| Command | Lesson |
|---------|--------|
| `/start-1-1` | Welcome to Markit |
| `/start-1-2` | Working with Marketing Files |
| `/start-1-3` | First Marketing Tasks |
| `/start-1-4` | Using Agents for Marketing |
| `/start-1-5` | Custom Marketing Sub-Agents |
| `/start-1-6` | Project Memory (CLAUDE.md) |
| `/start-1-7` | Navigation & Search |

### Module 2 — Marketing Workflows
| Command | Lesson |
|---------|--------|
| `/start-2-1` | Write a Campaign Brief |
| `/start-2-2` | Develop Content Strategy |
| `/start-2-3` | Generate Marketing Copy |
| `/start-2-4` | Analyze Campaign Data |
| `/start-2-5` | Competitive Analysis |
| `/start-2-6` | SEO Optimization |

## Plugins

The course includes two Claude Code plugins with additional marketing commands:

- **Compounding Marketing** (`/cm:plan`) — Campaign planning with persona-based reviewers and brand voice checks
- **Content Factory** (`/cf:generate`, `/cf:repurpose`, `/cf:schedule`) — Content generation, repurposing, and scheduling from templates

## Project Structure

```
cc4.marketing/
├── .claude/commands/     # Lesson slash commands
├── exercises/markit/     # Practice project (your workspace)
├── plugins/
│   ├── cm/               # Compounding Marketing plugin
│   └── cf/               # Content Factory plugin
└── data/                 # Canonical course definitions
```

> After cloning, `exercises/markit/` contains only a README. Lesson folders are created progressively as you work through the course.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Issues and pull requests are welcome.

## License

[MIT](LICENSE)

## Changelog

Type `/whats-new` inside Claude Code to see the latest updates, or visit the [live changelog](https://cc4.marketing/changelog).

- [RSS feed](https://cc4-changelog.mtri-vo.workers.dev/rss.xml)
- [JSON feed](https://cc4-changelog.mtri-vo.workers.dev/feed.json)
