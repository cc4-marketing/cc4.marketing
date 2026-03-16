#!/usr/bin/env bash
# Content consistency checks for lesson files.
# Catches common drift issues before they reach main.

set -euo pipefail

errors=0

echo "=== Content Consistency Check ==="

# 1. No "marketflow" references in lesson commands
echo ""
echo "Checking for stale 'marketflow' references..."
if grep -rn "marketflow" .claude/commands/ 2>/dev/null; then
  echo "FAIL: Found 'marketflow' references (should be 'markit')"
  errors=$((errors + 1))
else
  echo "OK"
fi

# 2. No "Manager Mark" in lesson commands (standardized to "Manager Maria")
echo ""
echo "Checking for outdated 'Manager Mark' persona name..."
if grep -rn "Manager Mark" .claude/commands/ exercises/markit/ 2>/dev/null; then
  echo "FAIL: Found 'Manager Mark' references (should be 'Manager Maria')"
  errors=$((errors + 1))
else
  echo "OK"
fi

# 3. No bare paths in actionable prompts (commands that create/list/save files)
echo ""
echo "Checking for bare path references in lesson prompts..."
# Look for bare folder refs like "Save as campaigns/" or "in brand/" without exercises/markit/ prefix
# Exclude lines that already have the correct prefix and non-actionable context lines
bare_paths=$(grep -rn -E '(Save|save|Create|create|List|list|Read|read|Show|show).*(campaigns/|content/|brand/|research/|analytics/|templates/)' .claude/commands/start-*.md 2>/dev/null | grep -v 'exercises/markit/' || true)
if [ -n "$bare_paths" ]; then
  echo "$bare_paths"
  echo "FAIL: Found bare path references without 'exercises/markit/' prefix"
  errors=$((errors + 1))
else
  echo "OK"
fi

echo ""
if [ "$errors" -gt 0 ]; then
  echo "FAILED: $errors check(s) failed"
  exit 1
else
  echo "All checks passed"
fi
