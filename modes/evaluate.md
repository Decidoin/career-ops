# Mode: Evaluate

Triggered by: `/career-ops {JD or URL}` or pasting a job description/URL directly.

## Workflow

1. **Read** `modes/_shared.md`, `cv.md`, `config/profile.yml`
2. **Parse** the job description — extract: company, role title, seniority level, team, responsibilities, requirements, comp (if stated), location
3. **Auto-disqualify check** — if any trigger hits, log to tracker as `🚫 Declined` with reason, stop
4. **Classify archetype** — pick from: `DATA`, `PROD`, `BIZOPS`, `FOUND`, `STRAT`, `PM`
5. **Score** all 7 dimensions per the scoring guides in `modes/_shared.md`
6. **Generate report** in the format specified in `CLAUDE.md`
7. **Save report** to `reports/{###}-{company-slug}-{YYYY-MM-DD}.md`
8. **Update tracker** `data/applications.md` with new row
9. **Verdict** — clear recommendation: Apply, Skip, or Conditional (with what conditions)

## Report Numbering

Check `reports/` for the highest existing number, increment by 1. Format: `001`, `002`, etc.

## Compensation Research

When comp is not stated in the JD:
- Search for the company + role on AmbitionBox, Glassdoor India, LinkedIn Salary Insights
- Check if the company has public salary bands or Levels.fyi entries
- For Dubai roles: convert AED to INR (1 AED ≈ ₹23 INR) and compare to ₹8L floor
- If comp is completely unverifiable, note it and score Compensation at 5/10

## CV Match Analysis

For each requirement in the JD:
1. Find the matching evidence in `cv.md`
2. If no direct match, find the closest transferable experience
3. Flag genuine gaps honestly
4. Identify which roles/projects to lead with for THIS specific role

## Role Narrative

Select the best narrative template from `modes/_shared.md` and customize it:
- Map specific experience bullets to specific JD requirements
- Identify the 1–2 stories that make the strongest case for THIS role
- Note what to emphasize vs. minimize in the application and interview

## Interview Prep

Generate 3–5 STAR+R stories from `interview-prep/story-bank.md` that are most relevant to this role's likely questions. If a story is missing, draft it and add it to the story bank.

## Output

After generating the report, summarize to the user:
```
📊 {Company} — {Role}
Archetype: {CODE}
Grade: {X} ({score}/100)
Verdict: {Apply / Skip / Conditional}
Key strength: {top scoring dimension}
Key gap: {lowest scoring dimension}
Report saved: reports/{filename}
```
