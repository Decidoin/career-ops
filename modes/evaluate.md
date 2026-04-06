# Mode: Evaluate

Triggered by: `/career-ops {JD or URL}` or pasting a job description/URL directly.

## Workflow

1. **Read** `modes/_shared.md`, `cv.md`, `config/profile.yml`
2. **Parse** the job description — extract: company, role title, level, team, responsibilities, requirements, comp (if stated), location
3. **Auto-disqualify check** — if any trigger hits, log to tracker as `🚫 Declined` with reason, stop
4. **Classify archetype** — pick from MECH, AIGOV, INFRA, RSCH, STRAT, FOUND
5. **Score** all 10 dimensions per the scoring guides
6. **Generate report** in the format specified in CLAUDE.md
7. **Save report** to `reports/{###}-{company-slug}-{YYYY-MM-DD}.md`
8. **Update tracker** `data/applications.md` with new row
9. **Verdict** — clear recommendation: Apply, Skip, or Conditional (with what conditions)

## Report Numbering

Check `reports/` for the highest existing number, increment by 1. Format: `001`, `002`, etc.

## Compensation Research

When comp isn't stated in the JD:
- Search for the company + role on levels.fyi, Glassdoor, Blind
- Check if the company has public salary bands
- Factor in location adjustments (remote, Dubai, US)
- Compare to $300K floor

## CV Match Analysis

For each requirement in the JD:
1. Find the matching evidence in `cv.md`
2. If no direct match, find the closest transferable experience
3. Flag genuine gaps honestly
4. Identify which projects to lead with for THIS role

## Pivot Narrative

Select the best narrative template from `_shared.md` and customize:
- Map specific KCG projects to specific role requirements
- Identify the 1-2 "bridge" stories that make the blockchain→AI connection concrete
- Note what to emphasize vs. downplay in the interview

## Interview Prep

Generate 3-5 STAR+R stories relevant to THIS role's likely questions. Add new stories to `interview-prep/story-bank.md` if they don't already exist.

## Output

After generating the report, summarize to the user:
```
📊 {Company} — {Role}
Archetype: {ARCH}
Grade: {X} ({score}/100)
Verdict: {recommendation}
Key strength: {top scoring dimension}
Key gap: {lowest scoring dimension}
Report saved: reports/{filename}
```
