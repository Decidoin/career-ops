# Mode: Scan

Triggered by: `/career-ops scan`

## Workflow

1. Read `portals.yml` for company list and search queries
2. Read `data/scan-history.tsv` for dedup (skip already-seen URLs)
3. Read `config/profile.yml` for salary floor, locations, and role targets
4. For each company and search query, find open roles matching the target role families
5. For each new role found:
   - Quick-check against auto-disqualify triggers (intern/junior/outside location/unrelated domain)
   - If it passes, add to `data/pipeline.md` with URL, company, role title, and quick assessment
   - Log the URL to `data/scan-history.tsv`
6. Summarize: X companies scanned, Y new roles found, Z added to pipeline

## Search Strategy

Use web search to find roles. Query patterns:

**India (Bangalore):**
- `{company} careers data analyst Bangalore`
- `{company} jobs product analyst`
- `{company} open roles business analyst`
- `site:naukri.com {company} analyst`
- `site:linkedin.com/jobs {company} data analyst Bangalore`

**Dubai:**
- `{company} careers data analyst Dubai`
- `{company} jobs analyst Dubai`
- `site:bayt.com {company} analyst`
- `site:linkedin.com/jobs {company} analyst Dubai`

**Job boards directly:**
- Search Naukri.com for: `"data analyst" OR "product analyst" OR "business analyst" location:Bangalore`
- Search Bayt.com for: `"data analyst" OR "analyst" location:Dubai`
- Search LinkedIn for roles posted in last 7 days in Bangalore and Dubai

## Quick Assessment

For each role found, provide a 1-line assessment:
- `🟢 Strong fit` — exact role family match + right seniority + right location
- `🟡 Worth evaluating` — adjacent role or minor gaps; worth a full score
- `🔴 Likely skip` — passes auto-disqualify but low role or skill alignment

## Output to Pipeline

Add to `data/pipeline.md`:
```
| {date} | {company} | {role} | {url} | {quick-assessment} | Pending |
```

## Salary Note

Most Indian job postings don't show salary. Keep them in the pipeline — salary is confirmed at screen stage. Only drop roles where salary is explicitly listed below ₹8L.
