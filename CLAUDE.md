# Career-Ops — AI Job Search & Opportunity Pipeline

## Who This Is For

This system belongs to **Santosh Govardhan** — Data Analyst (Product & Business Analytics) with 7 years of experience across product analytics, strategy & insights, and data consulting. Based in Bangalore. Masters in Data Analytics from Clark University, USA (GPA 3.9). Published researcher (LLM-powered BI, Clark Conference 2025).

This is a focused, high-signal job search tool. Santosh is not spray-and-pray. Every role gets evaluated against his profile before he applies.

## Core Constraints (Non-Negotiable)

- **₹8,00,000 INR annual minimum** — total comp floor, no exceptions
- **Seniority:** Associate to Senior level only — no intern/fresher/junior roles; no Director/VP unless it's a Founder's Office / Chief of Staff role
- **Locations:** Bangalore (India) or Dubai (UAE) only — remote-first roles acceptable from anywhere
- **Role families:** Must fall into one of the 6 target role families below

## Target Role Families

| Code | Family | Examples |
|------|--------|---------|
| `DATA` | Data Analyst | Data Analyst, Senior Data Analyst, Analytics Engineer |
| `PROD` | Product Analyst | Product Analyst, Senior Product Analyst, Growth Analyst |
| `BIZOPS` | Business / Operations Analyst | Business Analyst, Operations Analyst, Strategy Analyst |
| `FOUND` | Founder's Office / Chief of Staff | Founder's Office, Chief of Staff, Head of Strategy |
| `STRAT` | Strategy & Insights | Strategy & Insights, Business Intelligence, Market Analyst |
| `PM` | Product Management | Associate PM, Product Manager, APM |

## What is career-ops

AI-powered opportunity pipeline built on Claude Code: evaluation, CV/PDF generation, portal scanning, tracker, interview prep, outreach drafting, negotiation scripts.

### Main Files

| File | Function |
|------|----------|
| `cv.md` | Master CV in Markdown |
| `config/profile.yml` | Profile, targets, scoring weights |
| `data/applications.md` | Application/opportunity tracker |
| `data/pipeline.md` | Inbox of pending URLs |
| `portals.yml` | Scanner query and company config |
| `templates/cv-template.html` | HTML template for PDF CVs |
| `generate-pdf.mjs` | Playwright: HTML → PDF |
| `interview-prep/story-bank.md` | STAR+R stories accumulated across evaluations |
| `reports/` | Evaluation reports |

### Slash Commands

```
/career-ops                → Show all available commands
/career-ops {paste a JD}   → Full auto-pipeline (evaluate + PDF + tracker)
/career-ops scan           → Scan portals for new matching roles
/career-ops pdf            → Generate tailored CV PDF for a specific role
/career-ops batch          → Batch evaluate multiple roles
/career-ops tracker        → View/update application statuses
/career-ops prep           → Interview prep for a specific role
/career-ops outreach       → Draft outreach message (LinkedIn/email)
/career-ops deep           → Deep company/team research
/career-ops negotiate      → Negotiation scripts and comp analysis
/career-ops pivot-check    → Quick role-alignment score against Santosh's profile
```

## Archetypes

Classify every role into one archetype before scoring:

| Archetype | Description | Examples |
|-----------|-------------|---------|
| **DATA** | BI, reporting, dashboards, ad-hoc analysis | Data Analyst, BI Analyst, Analytics Engineer |
| **PROD** | Product metrics, funnels, A/B testing, user behavior | Product Analyst, Growth Analyst, Experimentation Analyst |
| **BIZOPS** | Business strategy, operations, process improvement | Business Analyst, Ops Analyst, Strategy Analyst |
| **FOUND** | High-leverage generalist in a founder's org | Founder's Office, Chief of Staff, Head of Strategy |
| **STRAT** | Market intelligence, corporate strategy, insights | Strategy & Insights, Market Analyst, BI Lead |
| **PM** | Product management with analytics emphasis | Associate PM, PM, APM with data focus |

## Scoring System (A–F, 7 Dimensions)

Each dimension scored 0–10, weighted, mapped to letter grade.

| # | Dimension | Weight | What It Measures |
|---|-----------|--------|-----------------|
| 1 | Role Fit | 25% | Matches one of Santosh's 6 target role families |
| 2 | Skill Match | 20% | Overlap between JD requirements and Santosh's stack |
| 3 | Seniority Level | 15% | Correct band: Associate to Senior |
| 4 | Compensation | 15% | Above ₹8L INR annual (or equivalent in AED) |
| 5 | Location Fit | 10% | Bangalore, Dubai, or remote |
| 6 | Industry Fit | 10% | Product-led/tech/startup preferred; open to BFSI, consulting |
| 7 | Growth Potential | 5% | Learning path, scope expansion, promotion track |

### Grade Mapping
- **A (85–100):** Apply immediately. Strong fit across the board.
- **B (70–84):** Good fit. Apply with targeted tailoring.
- **C (55–69):** Partial fit. Apply only if pipeline is thin.
- **D (40–54):** Weak fit. Skip unless exceptional comp or brand.
- **F (<40):** Hard pass.

### Scoring Guides

**Role Fit (25%)**
- 9–10: Exact match to one of the 6 families; title is identical or near-identical
- 7–8: Strong overlap; role has a different title but does the same work
- 5–6: Adjacent — could do it but it's a stretch
- 3–4: Partial — some analytics but primarily another function
- 0–2: Unrelated

**Skill Match (20%)**

Santosh's stack: SQL, Python, Power BI, Tableau, Amazon QuickSight, Metabase, Superset, Snowflake, Airbyte, MySQL, Excel, LangChain, RAG, FAISS

- 9–10: JD requires 4+ tools Santosh knows; core stack is an exact match
- 7–8: JD requires 2–3 tools he knows; rest is learnable
- 5–6: 1–2 tools match; significant gap but transferable
- 3–4: Minimal overlap; heavy upskilling required
- 0–2: No overlap or uses tools Santosh doesn't know

**Seniority Level (15%)**
- 9–10: Senior Analyst, Senior Associate, Lead Analyst — exact target band
- 7–8: Associate / Analyst level (no "junior" qualifier)
- 5–6: Manager track but IC-heavy; borderline senior
- 3–4: Entry-level signals in the JD despite a mid-level title
- 0–2: Intern, fresher, junior — auto-disqualify territory

**Compensation (15%)**
- 9–10: Clearly above ₹15L or equivalent
- 7–8: ₹10–15L INR range
- 5–6: ₹8–10L INR — meets floor
- 3–4: ₹6–8L — below floor but negotiable
- 0–2: Clearly below ₹6L or undisclosed with bad signals

**Location Fit (10%)**
- 9–10: Bangalore or Dubai, or fully remote
- 7–8: Hybrid Bangalore/Dubai
- 5–6: Relocate-friendly with support
- 3–4: Other Indian metro (Mumbai/Delhi/Hyderabad) — possible
- 0–2: Outside India/UAE with no remote option

**Industry Fit (10%)**
- 9–10: Product-led startup or tech company; direct analytics ownership
- 7–8: Mid-size tech, BFSI, or consulting with data culture
- 5–6: Traditional enterprise with growing analytics function
- 3–4: Industry with limited analytics maturity
- 0–2: No analytics function or culture

**Growth Potential (5%)**
- 9–10: Clear path to Lead/Manager; company is scaling fast
- 7–8: Role has ownership and learning scope
- 5–6: Stable but limited upside
- 3–4: Maintenance work, limited growth
- 0–2: Dead-end or shrinking team

## Evaluation Report Format

Every evaluation produces a report in `reports/` with this structure:

```markdown
# {Company} — {Role Title}

**Date:** YYYY-MM-DD
**Archetype:** {archetype}
**Grade:** {letter} ({score}/100)
**Verdict:** {1-sentence recommendation}

## 1. Role Summary
- What the role actually is (cut through the JD fluff)
- Team structure, reporting line
- Key responsibilities distilled

## 2. Scoring Breakdown
| Dimension | Score | Notes |
|-----------|-------|-------|
| Role Fit | X/10 | ... |
| Skill Match | X/10 | ... |
| Seniority Level | X/10 | ... |
| Compensation | X/10 | ... |
| Location Fit | X/10 | ... |
| Industry Fit | X/10 | ... |
| Growth Potential | X/10 | ... |

## 3. CV Match Analysis
- What in cv.md maps directly to this role
- Gaps to address or reframe
- Specific projects/achievements to highlight

## 4. Compensation Research
- Market range for this role/level/location
- How it compares to ₹8L floor
- Negotiation leverage points

## 5. Role Narrative
- How to frame Santosh's 7-year background for THIS specific role
- Which experiences to lead with
- What to emphasize, what to minimize

## 6. Interview Prep (STAR+R)
- 3–5 stories from experience mapped to likely questions
- Tools/skills to brush up on
- Questions to ask THEM
```

## CV Generation

When generating a tailored CV:
1. Read `cv.md` for the master content
2. Read the evaluation report for match analysis
3. Reorder, emphasize, and keyword-inject based on the JD
4. Use `templates/cv-template.html` for layout
5. **Humanizer pass:** Before generating HTML, strip all AI tell-tale patterns — em dash overuse, rule of three, filler openers ("Leveraging", "Spearheaded", "Passionate about"), passive voice inflation. Output must sound like Santosh wrote it.
6. Generate HTML with the tailored content
7. Generate PDF via `generate-pdf.mjs`
8. Save to `output/{company-slug}-cv-{date}.pdf`

**Design principles:**
- Clean, single-column, ATS-parseable
- No photos, no fancy graphics
- Keywords from JD injected naturally into experience bullets
- Quantify everything: metrics, percentages, team sizes, tool names
- Strict 1 page

## Portal Scanner

Pre-configured companies and search queries in `portals.yml`. Focus:
- Product-led tech startups and scaleups in Bangalore
- Consumer internet, fintech, SaaS companies
- Bangalore MNCs with strong analytics teams
- Dubai tech + marketplace companies

## Tracker

`data/applications.md` is the single source of truth.

| Status | Meaning |
|--------|---------|
| `📋 Evaluating` | In scoring pipeline |
| `🎯 Target` | High-score, preparing application |
| `📨 Applied` | Application submitted |
| `📞 Screening` | Recruiter/phone screen |
| `🏗️ Technical` | Technical interview/assessment |
| `👥 Final` | Final round |
| `💰 Offer` | Offer received |
| `✅ Accepted` | Offer accepted |
| `❌ Rejected` | They passed |
| `🚫 Declined` | Santosh passed |
| `⏸️ Paused` | On hold |

## Auto-Disqualify

Skip scoring entirely and mark `🚫 Declined` if:
- Salary clearly below ₹6L INR (not even in negotiation range)
- "Intern", "fresher", "junior", "entry-level" in the title
- Location requires full-time onsite outside Bangalore/Dubai with no remote
- Role is unrelated to data/analytics/product/ops/strategy

## Tone & Voice

Direct and honest. If a role is a weak fit, say so with a clear reason. No sugarcoating. Santosh has 7 years of experience and doesn't need validation — he needs accurate signal.
