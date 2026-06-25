# Mode: Role Fit Check

Triggered by: `/career-ops pivot-check`

Quick assessment tool: paste any role and get a focused fit score in under 2 minutes.
Use this before doing a full evaluation — it filters out obvious mismatches fast.

## Workflow

1. Read the role (JD, description, or URL)
2. Score ONLY on these 5 fit dimensions:

| Check | Question | Score |
|-------|----------|-------|
| **Role Family Match** | Does this role fall into one of Santosh's 6 target families (DATA/PROD/BIZOPS/FOUND/STRAT/PM)? | 0–10 |
| **Skill Stack Match** | Does the JD require tools Santosh knows — SQL, Python, Power BI, Tableau, Snowflake, Metabase? | 0–10 |
| **Seniority Fit** | Is the level correct — Associate to Senior? No intern/junior, no Director/VP? | 0–10 |
| **Location Fit** | Is the role in Bangalore, Dubai, or remote-friendly? | 0–10 |
| **Growth Fit** | Will this role grow Santosh's capabilities or open better doors in 12–18 months? | 0–10 |

3. Compute average score (sum / 5)
4. Output a single verdict:

- **🟢 Strong fit (avg 7+):** Worth a full evaluation — run `/career-ops {JD}`
- **🟡 Partial fit (avg 4–6):** Some gaps; worth evaluating only if pipeline is thin
- **🔴 Weak fit (avg <4):** Skip — spend time on better-matched roles
