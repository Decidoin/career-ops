# Career-Ops — AI Job Search & Opportunity Pipeline

## Who This Is For

This system belongs to **Tanisha Katara** (Taani) — Founder & CEO of KCG Consulting LLC, blockchain governance and cryptoeconomics consultant, currently pivoting toward AI agent governance and mechanism design. Based in Dubai, pursuing an O-1A extraordinary ability visa.

This is NOT a spray-and-pray job search tool. Taani's career operates on two parallel tracks:
1. **Employed roles** — senior/leadership positions in AI agent infrastructure, mechanism design, governance
2. **Consulting engagements** — KCG Consulting contracts in the same space

Both tracks feed the same pipeline. Every opportunity gets evaluated against the same scoring dimensions.

## Core Constraints (Non-Negotiable)

- **$300K annual minimum** — total comp floor, no exceptions
- **O-1A compatibility** — role must support or not conflict with the visa petition (US employer preferred, remote-first acceptable)
- **Pivot alignment** — opportunity must advance the move from blockchain governance → AI agent governance/mechanism design
- **No downgrade** — must be a leadership, principal, or founding-tier role. No "senior analyst" energy.

## What is career-ops

AI-powered opportunity pipeline built on Claude Code: evaluation, CV/proposal generation, portal scanning, tracker, interview prep.

### Main Files

| File | Function |
|------|----------|
| `cv.md` | Master CV in markdown |
| `config/profile.yml` | Profile, targets, scoring weights |
| `data/applications.md` | Application/opportunity tracker |
| `data/pipeline.md` | Inbox of pending URLs |
| `portals.yml` | Scanner query and company config |
| `templates/cv-template.html` | HTML template for PDF CVs |
| `generate-pdf.mjs` | Puppeteer: HTML → PDF |
| `interview-prep/story-bank.md` | STAR+R stories accumulated across evaluations |
| `reports/` | Evaluation reports |

### Slash Commands

```
/career-ops                → Show all available commands
/career-ops {paste a JD}   → Full auto-pipeline (evaluate + PDF + tracker)
/career-ops scan           → Scan portals for new offers
/career-ops pdf            → Generate ATS-optimized CV for a specific role
/career-ops batch          → Batch evaluate multiple offers
/career-ops tracker        → View/update application statuses
/career-ops prep           → Interview prep for a specific role
/career-ops outreach       → Draft outreach message (LinkedIn/email)
/career-ops deep           → Deep company/team research
/career-ops negotiate      → Negotiation scripts and comp analysis
/career-ops pivot-check    → Score how well an opportunity advances the AI agent pivot
```

## Archetypes

When evaluating a role, first classify it into one of these archetypes. Each has different scoring emphasis.

| Archetype | Description | Examples |
|-----------|-------------|---------|
| **MechDesign** | Mechanism design, incentive architecture, tokenomics, auction design | Protocol economist, mechanism designer, incentive architect |
| **AIGov** | AI agent governance, multi-agent coordination, safety frameworks | AI governance lead, alignment researcher (applied), AI policy |
| **InfraLead** | Technical leadership over protocol/infrastructure teams | Head of Protocol, VP Engineering (infra), CTO |
| **ResearchLead** | Applied research leadership — economics, coordination, game theory | Head of Research, Principal Researcher, Chief Scientist |
| **StratConsult** | Strategy/consulting at protocol or AI companies | Head of Strategy, Chief of Staff, Principal Consultant |
| **FoundingRole** | Early-stage founding team, 0→1 building | Co-founder, Founding Head of X |

## Scoring System (A-F, 10 Dimensions)

Each dimension is scored 0-10, weighted, then mapped to a letter grade.

| # | Dimension | Weight | What It Measures |
|---|-----------|--------|-----------------|
| 1 | **Pivot Alignment** | 20% | How directly does this advance the AI agent governance pivot? |
| 2 | **Compensation** | 15% | Base + equity + benefits vs. $300K floor |
| 3 | **O-1A Impact** | 12% | Does this strengthen the visa case? US employer, prestige, visibility |
| 4 | **Role Seniority** | 10% | Leadership scope, title, decision-making authority |
| 5 | **Team & People** | 10% | Quality of team, who you'd work with, learning potential |
| 6 | **Scope of Impact** | 10% | Can you shape systems, not just execute? Design authority |
| 7 | **Research Output** | 8% | Can you publish, speak, build public intellectual capital? |
| 8 | **Company Stage** | 5% | Startup risk vs. stability, funding, runway |
| 9 | **Location/Remote** | 5% | Dubai-compatible, remote-first, travel expectations |
| 10 | **Exit Optionality** | 5% | Does this open doors or narrow them? |

### Grade Mapping
- **A (85-100):** Apply immediately. Near-perfect alignment.
- **B (70-84):** Strong fit. Worth pursuing with minor gaps.
- **C (55-69):** Decent but compromises on 2+ dimensions. Pursue only if nothing better.
- **D (40-54):** Significant misalignment. Skip unless exceptional team/comp.
- **F (<40):** Hard pass.

### Auto-Disqualify Triggers
- Comp clearly below $200K (not even in negotiation range of $300K)
- "Analyst" or "Associate" level role
- Pure blockchain/crypto with zero AI angle
- Requires full-time physical presence outside Dubai with no remote option
- Role is execution-only with no design/strategy authority

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
| Pivot Alignment | X/10 | ... |
| ... | ... | ... |

## 3. CV Match Analysis
- What in cv.md maps directly to this role
- Gaps to address or reframe
- Specific projects/achievements to highlight

## 4. Compensation Research
- Market range for this role/level/location
- How it compares to $300K floor
- Negotiation leverage points

## 5. Pivot Narrative
- How to frame the blockchain→AI agent governance story for THIS role
- Which KCG projects translate directly
- What to emphasize, what to downplay

## 6. Interview Prep (STAR+R)
- 3-5 stories from experience mapped to likely questions
- Technical depth areas to brush up on
- Questions to ask THEM (to evaluate fit)

## 7. O-1A Considerations
- Would this employer sponsor?
- Does the role generate O-1A evidence (publications, media, critical role)?
- Conflicts with current petition?
```

## CV Generation

When generating a tailored CV:
1. Read `cv.md` for the master content
2. Read the evaluation report for match analysis
3. Reorder, emphasize, and keyword-inject based on the JD
4. Use `templates/cv-template.html` for layout
5. Generate PDF via `generate-pdf.mjs`
6. Save to `output/{company-slug}-cv-{date}.pdf`

**Design principles:**
- Clean, single-column, ATS-parseable
- No photos, no fancy graphics
- Keywords from JD injected naturally into experience bullets
- Lead with the pivot narrative, not the full blockchain history
- Quantify everything: "$X managed," "Y protocols," "Z% improvement"

## Portal Scanner

Pre-configured companies and search queries in `portals.yml`. Focus areas:
- AI agent infrastructure companies
- Mechanism design / auction / marketplace companies
- Protocol/governance teams with AI ambitions
- AI safety orgs doing applied coordination work

## Tracker

`data/applications.md` is the single source of truth. Statuses:

| Status | Meaning |
|--------|---------|
| `📋 Evaluating` | In scoring pipeline |
| `🎯 Target` | High-score, preparing application |
| `📨 Applied` | Application submitted |
| `📞 Screening` | Recruiter/phone screen stage |
| `🏗️ Technical` | Technical interview/assessment |
| `👥 Final` | Final round / leadership interviews |
| `💰 Offer` | Offer received |
| `✅ Accepted` | Offer accepted |
| `❌ Rejected` | They passed |
| `🚫 Declined` | I passed |
| `⏸️ Paused` | On hold |

## Interview Prep — Story Bank

`interview-prep/story-bank.md` accumulates STAR+R stories across evaluations. Each story follows:

```markdown
### {Story Title}
**Tags:** [governance, technical-debate, stakeholder-management, ...]
**Best for:** {types of questions this answers}

**Situation:** ...
**Task:** ...
**Action:** ...
**Result:** ...
**Reflection:** What I'd do differently / what I learned
```

Key stories to maintain:
- **FIP-100 & wjmelements debate** — technical disagreement, staying rigorous under pressure
- **Avail Fusion whitepaper** — original research, co-authoring with protocol team
- **Polygon Governance Hub** — building governance infrastructure 0→1
- **Filecoin NV27 coordination** — cross-team coordination across 5 implementation teams
- **Mina treasury review** — identifying attack vectors, uncomfortable truths to a client
- **CoW DAO process** — learning from rejection, self-assessment
- **Conquista PR termination** — deliverables audit, professional conflict resolution
- **Validator economics paper** — independent research, academic rigor, Gini coefficient application

## Personalization

This system is designed to be customized by YOU (Claude). When Taani asks you to change archetypes, adjust scoring, add companies, modify the pivot narrative — do it directly. You read the same files you use.

**Key identity notes for tone/voice:**
- Direct, precise, skeptical of jargon
- Prefers shorter, sharper outputs
- Entered blockchain out of financial necessity, not ideology — skeptic-turned-insider
- Tells clients uncomfortable truths — bring that energy to self-assessment too
- $300K floor is a constraint, not an aspiration
