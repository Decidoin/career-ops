# Career-Ops

AI-powered job search and opportunity pipeline built on [Claude Code](https://docs.anthropic.com/en/docs/claude-code).

Forked from [santifer/career-ops](https://github.com/santifer/career-ops) and adapted for a governance architect and mechanism designer pivoting from blockchain protocols to AI agent governance.

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

10 weighted dimensions, A-F grading. Auto-disqualifies roles below $200K, analyst-level, or execution-only.

Top-weighted dimensions: Pivot Alignment (20%), Compensation (15%), O-1A Impact (12%).

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
