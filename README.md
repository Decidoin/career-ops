# Career-Ops

AI-powered job search and opportunity pipeline built on [Claude Code](https://docs.anthropic.com/en/docs/claude-code).

Forked from [Tanisha-Katara/career-ops](https://github.com/Tanisha-Katara/career-ops) and adapted for Santosh Govardhan — Data Analyst (Product & Business Analytics) with 7 years of experience, targeting data analytics, product analytics, operations, and business analyst roles in Bangalore and Dubai.

## Quick Start

```bash
# 1. Clone and install
git clone <your-repo-url>
cd career-ops && npm install

# 2. Edit your details
# - config/profile.yml → compensation, targets, visa info
# - cv.md → your master CV
# - portals.yml → companies to scan

# 3. Open Claude Code
claude

# 4. Use it
# Paste a job URL → full evaluation + PDF + tracker entry
# /career-ops scan → scan portals for new roles
# /career-ops → see all commands
```

## Commands

| Command | What It Does |
|---------|-------------|
| `/career-ops` | Show all commands |
| `/career-ops {JD}` | Full pipeline: evaluate + PDF + tracker |
| `/career-ops scan` | Scan portals for new roles |
| `/career-ops pdf` | Generate tailored CV PDF |
| `/career-ops prep` | Interview prep for a specific role |
| `/career-ops outreach` | Draft outreach message |
| `/career-ops deep` | Deep company research |
| `/career-ops negotiate` | Negotiation scripts + comp analysis |
| `/career-ops pivot-check` | Quick pivot alignment score |
| `/career-ops tracker` | View/update application statuses |

## Scoring

7 weighted dimensions, A–F grading. Auto-disqualifies roles below ₹6L INR, intern/fresher level, or outside Bangalore/Dubai with no remote option.

Top-weighted dimensions: Role Fit (25%), Skill Match (20%), Seniority Level (15%), Compensation (15%).

## Structure

```
career-ops/
├── CLAUDE.md              # Agent instructions
├── cv.md                  # Master CV
├── config/profile.yml     # Profile, targets, scoring
├── portals.yml            # Scanner config
├── modes/                 # Evaluation, scan, PDF, prep, outreach, negotiate, deep, pivot-check
├── templates/             # CV HTML template
├── data/                  # Tracker, pipeline, scan history
├── reports/               # Evaluation reports
├── output/                # Generated PDFs
├── interview-prep/        # STAR+R story bank
└── generate-pdf.mjs       # HTML → PDF via Playwright
```

## License

MIT
