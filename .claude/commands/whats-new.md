# /whats-new — Course & Site Changelog

Show the latest updates to the CC4.Marketing course and website.

## Instructions for Claude

1. Fetch the changelog API using the Bash tool:
   ```
   curl -s https://cc4-changelog.mtri-vo.workers.dev/api/changelog
   ```

2. Parse the JSON response. The `entries` array contains changelog items sorted newest-first.

3. **If the user passed an argument** (e.g., `/whats-new course`, `/whats-new site`, `/whats-new fixed`):
   - If the arg is `course` or `site`, filter entries where the `modules` array contains that value.
   - If the arg matches a module (e.g., `module-0`, `module-1`, `module-2`), filter by that module.
   - If the arg matches a type (`added`, `changed`, `fixed`, `deprecated`, `removed`, `security`), filter by `type`.
   - If no matches, show: "No updates found for that filter. Try: course, site, module-1, added, fixed"

4. **If no argument**, show the 5 most recent entries.

5. **Format each entry like this:**

   For website entries (modules includes "site"):
   ```
   🌐 WEBSITE
   [ADDED] v0.2.0 — Live changelog with timeline, filters, and agent feeds
   Mar 17, 2026
   Full changelog system: timeline page with version grouping and search...
   ```

   For course entries (modules includes "course"):
   ```
   📚 COURSE
   [CHANGED] v1.2.0 — March 2026 course content update
   Mar 16, 2026
   Aligned course with current AI-powered marketing landscape...
   ```

   - Show the scope (WEBSITE or COURSE) with an icon first
   - Use `[ADDED]`, `[CHANGED]`, `[FIXED]`, `[DEPRECATED]`, `[REMOVED]`, or `[SECURITY]` based on `entry.type`
   - Show `entry.version` and `entry.title`
   - Show formatted `entry.published_at` date
   - Show `entry.summary`
   - If `entry.machine_summary` exists, show it as "Agent context: ..."
   - Separate entries with a horizontal rule (---)

6. **After listing entries**, show:
   ```
   ─────────────────────────────────────
   Full changelog: https://cc4.marketing/changelog
   RSS feed: https://cc4-changelog.mtri-vo.workers.dev/rss.xml
   ```

7. If the API is unreachable, tell the user:
   "Could not reach the changelog API. Visit https://cc4.marketing/changelog in your browser instead."
