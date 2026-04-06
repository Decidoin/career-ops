# Mode: Scan

Triggered by: `/career-ops scan`

## Workflow

1. Read `portals.yml` for company list and search queries
2. Read `data/scan-history.tsv` for dedup (skip already-seen URLs)
3. For each company/query, search for open roles matching the target archetypes
4. For each new role found:
   - Quick-score against auto-disqualify triggers
   - If it passes, add to `data/pipeline.md` with URL, company, role title, and quick assessment
   - Log the URL to `data/scan-history.tsv`
5. Summarize: X companies scanned, Y new roles found, Z added to pipeline

## Search Strategy

Use web search to find roles. Query patterns:
- `{company} careers mechanism design`
- `{company} jobs governance AI`
- `{company} open roles head of research`
- `site:greenhouse.io {company}` / `site:ashby.com {company}` for ATS portals

## Quick Assessment

For each role found, provide a 1-line assessment:
- `🟢 Strong fit` — matches 2+ primary archetypes
- `🟡 Worth evaluating` — adjacent, could score well
- `🔴 Likely skip` — passes auto-disqualify but low alignment

## Output to Pipeline

Add to `data/pipeline.md`:
```
| {date} | {company} | {role} | {url} | {quick-assessment} | Pending |
```
