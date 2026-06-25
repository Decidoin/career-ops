# Career-Ops Santosh — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Complete the career-ops system for Santosh Govardhan — finishing the remaining mode file updates, fixing the CV HTML template, verifying the PDF pipeline works end-to-end, and leaving the repo in a fully operational state.

**Architecture:** The system is a Claude Code slash-command pipeline in `C:\Users\santo\career-ops-clone`. Slash commands route through `.claude/commands/career-ops.md` to mode files in `modes/`. PDF generation uses Node.js + Playwright (`generate-pdf.mjs`). Profile and targets live in YAML config files. All already pushed to `github.com/Decidoin/career-ops`.

**Tech Stack:** Node.js (ESM), Playwright (Chromium), YAML config, Markdown mode files, Claude Code slash commands

## Global Constraints

- Working directory: `C:\Users\santo\career-ops-clone` (use forward slashes in Bash: `/c/Users/santo/career-ops-clone`)
- All currency references must use INR (₹) for India roles and AED for Dubai roles — never USD
- Salary floor: ₹8,00,000 INR per annum — non-negotiable
- Archetype codes: `DATA`, `PROD`, `BIZOPS`, `FOUND`, `STRAT`, `PM` — never the old Taani codes (MECH, AIGOV, INFRA, RSCH)
- Humanizer pass is mandatory in `modes/pdf.md` — already in place, must not be removed
- All mode files must be free of references to: Taani, KCG Consulting, O-1A visa, blockchain pivot, $300K, Tanisha Katara
- Node.js version: ≥18 (ESM `import` syntax required)

---

## File Map

| File | Action | Responsibility |
|------|--------|---------------|
| `modes/evaluate.md` | **Update** | Fix archetype codes, comp floor, remove O-1A + pivot narrative |
| `modes/pivot-check.md` | **Rewrite** | Replace Taani's pivot check with Santosh's role-fit check |
| `modes/negotiate.md` | **Update** | Replace $300K/O-1A with ₹8L INR + India/Dubai market tactics |
| `modes/outreach.md` | **Update** | Remove Taani-specific narrative, add Santosh's role narrative angles |
| `modes/prep.md` | **Update** | Point to Santosh's story bank, remove blockchain/pivot content |
| `modes/deep.md` | **Verify** | Check for Taani-specific content; update if needed |
| `templates/cv-template.html` | **Update** | Remove Speaking section, add Certifications, fix layout for Santosh |
| `.gitignore` | **Update** | Ignore `output/*.pdf`, keep `output/.gitkeep` |
| `package.json` | **Keep** | No changes needed |
| `generate-pdf.mjs` | **Keep** | No changes needed |

---

## Task 1: Install Node dependencies and verify PDF generation

**Files:**
- Run in: `/c/Users/santo/career-ops-clone`
- Modify: `output/test-cv.html` (temp test file)

**Interfaces:**
- Produces: working `node generate-pdf.mjs` command, Playwright + Chromium installed

- [ ] **Step 1: Install dependencies**

```bash
cd /c/Users/santo/career-ops-clone && npm install
```

Expected output: `added N packages` and `npx playwright install chromium` runs automatically (postinstall hook).

- [ ] **Step 2: Verify Playwright installed**

```bash
ls /c/Users/santo/career-ops-clone/node_modules/.bin/playwright
```

Expected: file exists (no "not found" error)

- [ ] **Step 3: Create a minimal test HTML file**

Create `output/test-cv.html` with this content:

```html
<!DOCTYPE html>
<html><head><meta charset="UTF-8">
<style>body { font-family: Arial; font-size: 11pt; padding: 40px; } h1 { font-size: 18pt; }</style>
</head><body>
<h1>Santosh Govardhan</h1>
<p>Bangalore · +91 7760282307 · santogover25@gmail.com</p>
<h2>Summary</h2>
<p>Data analyst with 7 years of experience. Test PDF generation.</p>
</body></html>
```

- [ ] **Step 4: Generate test PDF**

```bash
cd /c/Users/santo/career-ops-clone && node generate-pdf.mjs output/test-cv.html output/test-cv.pdf
```

Expected output:
```
Generating PDF: output/test-cv.html → output/test-cv.pdf
✅ PDF saved: output/test-cv.pdf
```

- [ ] **Step 5: Verify PDF exists**

```bash
ls -lh /c/Users/santo/career-ops-clone/output/test-cv.pdf
```

Expected: file exists, size > 0 bytes

- [ ] **Step 6: Commit**

```bash
cd /c/Users/santo/career-ops-clone && rm output/test-cv.html output/test-cv.pdf && git add output/.gitkeep reports/.gitkeep && git commit -m "chore: add gitkeep stubs for output and reports dirs"
```

---

## Task 2: Update CV HTML template for Santosh

**Files:**
- Modify: `templates/cv-template.html`

**Interfaces:**
- Produces: HTML template with sections: Summary, Experience, Publications, Certifications, Education, Skills — no Speaking section

- [ ] **Step 1: Replace `templates/cv-template.html` with Santosh's layout**

Write the following content to `templates/cv-template.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{{NAME}} — CV</title>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Inter', -apple-system, sans-serif;
    font-size: 10pt;
    line-height: 1.45;
    color: #1a1a1a;
    max-width: 8.5in;
    margin: 0 auto;
  }

  h1 {
    font-size: 20pt;
    font-weight: 700;
    margin-bottom: 4px;
    color: #0a0a0a;
    text-align: center;
  }

  .tagline {
    font-size: 9.5pt;
    color: #444;
    text-align: center;
    margin-bottom: 4px;
  }

  .contact {
    font-size: 9pt;
    color: #555;
    margin-bottom: 16px;
    text-align: center;
  }

  .contact a { color: #555; text-decoration: none; }

  h2 {
    font-size: 10.5pt;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #0a0a0a;
    border-bottom: 1.5px solid #0a0a0a;
    padding-bottom: 3px;
    margin-top: 14px;
    margin-bottom: 8px;
  }

  .summary {
    font-size: 9.5pt;
    color: #333;
    margin-bottom: 4px;
  }

  .role-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-top: 10px;
    margin-bottom: 1px;
  }

  .role-title {
    font-weight: 600;
    font-size: 10pt;
  }

  .role-date {
    font-size: 9pt;
    color: #666;
    white-space: nowrap;
  }

  .role-company {
    font-size: 9pt;
    color: #444;
    font-style: italic;
    margin-bottom: 4px;
  }

  ul {
    padding-left: 16px;
    margin-bottom: 4px;
  }

  li {
    margin-bottom: 2px;
    font-size: 9.5pt;
    color: #333;
  }

  .skills-row {
    font-size: 9.5pt;
    margin-bottom: 3px;
  }

  .skill-label {
    font-weight: 600;
    color: #333;
  }

  .certs {
    font-size: 9.5pt;
    color: #333;
  }

  .education-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 3px;
    font-size: 9.5pt;
  }

  .edu-left { font-weight: 600; }
  .edu-right { color: #555; font-size: 9pt; white-space: nowrap; }
  .edu-sub { font-size: 9pt; color: #555; }

  @media print {
    body { margin: 0; }
  }
</style>
</head>
<body>

<h1>{{NAME}}</h1>
<div class="tagline">{{TAGLINE}}</div>
<div class="contact">
  {{LOCATION}} · {{PHONE}} · {{EMAIL}} · {{LINKS}}
</div>

<h2>Summary</h2>
<p class="summary">{{SUMMARY}}</p>

<h2>Professional Experience</h2>
{{EXPERIENCE}}

<h2>Projects & Publications</h2>
<ul>
{{PUBLICATIONS}}
</ul>

<h2>Skills</h2>
{{SKILLS}}

<h2>Education</h2>
{{EDUCATION}}

<h2>Certifications</h2>
<p class="certs">{{CERTIFICATIONS}}</p>

</body>
</html>
```

- [ ] **Step 2: Verify template renders correctly with test content**

Create `output/template-test.html` — copy the template above and replace all `{{...}}` placeholders manually:
- `{{NAME}}` → `Santosh Govardhan`
- `{{TAGLINE}}` → `Data Analyst (Product & Business Analytics) | 7 Years Experience | Masters in Data Analytics, USA`
- `{{LOCATION}}` → `Bangalore`
- `{{PHONE}}` → `+91 7760282307`
- `{{EMAIL}}` → `santogover25@gmail.com`
- `{{LINKS}}` → `LinkedIn | GitHub`
- `{{SUMMARY}}` → `Data analyst with 7 years across product analytics, strategy and insights, and data consulting.`
- `{{EXPERIENCE}}` → `<div class="role-header"><span class="role-title">Product Analyst</span><span class="role-date">Feb 2026 – Present</span></div><div class="role-company">CycleBae, Bangalore (Contract)</div><ul><li>Owned end-to-end product analytics for onboarding and retention.</li></ul>`
- `{{PUBLICATIONS}}` → `<li><strong>LLM-Powered Business Intelligence</strong> — Clark Conference 2025</li>`
- `{{SKILLS}}` → `<p class="skills-row"><span class="skill-label">Programming:</span> Python</p><p class="skills-row"><span class="skill-label">BI Tools:</span> Power BI, Tableau, Metabase, QuickSight</p><p class="skills-row"><span class="skill-label">Data:</span> SQL, Snowflake, MySQL</p>`
- `{{EDUCATION}}` → `<div class="education-item"><div><div class="edu-left">Masters in Data Analytics — Clark University</div><div class="edu-sub">GPA 3.9/4.0 | Scholarship Recipient</div></div><div class="edu-right">Jan 2024 – May 2025</div></div>`
- `{{CERTIFICATIONS}}` → `Azure Fundamentals · Imarticus Data Science Pro · Gen AI with AWS · Six Sigma`

Then run:
```bash
cd /c/Users/santo/career-ops-clone && node generate-pdf.mjs output/template-test.html output/template-test.pdf
```

Expected: `✅ PDF saved: output/template-test.pdf`

- [ ] **Step 3: Open the PDF and visually verify it looks correct**

Open `C:\Users\santo\career-ops-clone\output\template-test.pdf` in a PDF viewer.

Check:
- Name is centered and large
- Sections have clear bold headers with underline
- Bullets are readable
- Fits on one page
- No overflow or cut-off text

If the layout looks wrong, adjust font sizes in the CSS and re-run Step 2.

- [ ] **Step 4: Clean up test files and commit**

```bash
cd /c/Users/santo/career-ops-clone && rm -f output/template-test.html output/template-test.pdf && git add templates/cv-template.html && git commit -m "feat: update CV template for Santosh — add certifications, center header, remove speaking section"
```

---

## Task 3: Update modes/evaluate.md for Santosh

**Files:**
- Modify: `modes/evaluate.md`

**Interfaces:**
- Consumes: archetype codes from `CLAUDE.md` (`DATA`, `PROD`, `BIZOPS`, `FOUND`, `STRAT`, `PM`)
- Produces: evaluation report in `reports/{###}-{company-slug}-{YYYY-MM-DD}.md`, tracker row in `data/applications.md`

- [ ] **Step 1: Write updated `modes/evaluate.md`**

Replace the full content of `modes/evaluate.md` with:

```markdown
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
```

- [ ] **Step 2: Verify no Taani-specific content remains**

Scan the file for these strings — none should appear:
- `$300K` / `$200K` / `USD`
- `O-1A` / `visa`
- `pivot` / `blockchain` / `Taani` / `KCG`
- `MECH` / `AIGOV` / `INFRA` / `RSCH`

```bash
grep -i "300K\|O-1A\|blockchain\|Taani\|KCG\|MECH\|AIGOV\|INFRA\|RSCH" /c/Users/santo/career-ops-clone/modes/evaluate.md
```

Expected: no output (zero matches)

- [ ] **Step 3: Commit**

```bash
cd /c/Users/santo/career-ops-clone && git add modes/evaluate.md && git commit -m "feat: update evaluate mode for Santosh — INR comp, Santosh archetypes, remove O-1A"
```

---

## Task 4: Rewrite modes/pivot-check.md as role-fit-check

**Files:**
- Modify: `modes/pivot-check.md`

**Interfaces:**
- Produces: quick 5-dimension role alignment score, verdict (Strong / Partial / Weak fit)

- [ ] **Step 1: Replace `modes/pivot-check.md` with Santosh's role-fit check**

```markdown
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
```

- [ ] **Step 2: Verify no Taani-specific content**

```bash
grep -i "Taani\|KCG\|blockchain\|pivot\|O-1A\|AI agent\|mechanism design" /c/Users/santo/career-ops-clone/modes/pivot-check.md
```

Expected: no output

- [ ] **Step 3: Commit**

```bash
cd /c/Users/santo/career-ops-clone && git add modes/pivot-check.md && git commit -m "feat: replace pivot-check with role-fit-check for Santosh"
```

---

## Task 5: Update modes/negotiate.md for INR + India/Dubai context

**Files:**
- Modify: `modes/negotiate.md`

**Interfaces:**
- Consumes: offer details from user, comp floor from `config/profile.yml` (₹8,00,000 INR)
- Produces: negotiation strategy, counter-offer scripts, walk-away line

- [ ] **Step 1: Replace `modes/negotiate.md` with Santosh's negotiation mode**

```markdown
# Mode: Negotiate

Triggered by: `/career-ops negotiate`

## Workflow

1. Ask: Which company/role? What's the offer (CTC breakdown if available)?
2. Read the evaluation report for that role
3. Analyze the offer against:
   - ₹8L INR floor (non-negotiable)
   - Market comp data from AmbitionBox / Glassdoor India / LinkedIn
   - Fixed vs. variable split (India CTCs often include variable pay)
   - ESOP/equity structure
   - Benefits: health insurance, PF, gratuity, meal allowance
   - Joining bonus and notice period buyout
4. Generate negotiation strategy

## CTC Anatomy (India)

Indian CTCs have layers — know what you're negotiating:
- **Fixed pay:** Base + HRA + Special allowance — this is what matters most
- **Variable pay:** 10–20% of CTC, often partially withheld — treat as uncertain income
- **ESOP:** Value depends on stage and vesting; discount heavily for pre-IPO
- **Joining bonus:** One-time; negotiate if leaving unvested stock or mid-cycle bonus

**Rule:** When comparing offers, compare fixed pay, not total CTC.

## Frameworks

**Below ₹8L floor:**
- This is a hard no. Don't negotiate — decline.
- Script: "Thanks for the offer. Unfortunately the compensation doesn't meet my current requirements. I'd need to see at least ₹X fixed to move forward."

**At ₹8–10L (meets floor, below target):**
- Push for: higher fixed pay, joining bonus, earlier appraisal cycle
- Script: "I'm excited about the role and the team. My target is ₹X based on my 7 years of experience and the scope of this role. Is there flexibility on the base, or could we structure a joining bonus to bridge the gap?"

**At ₹10–15L (good range):**
- Focus on: fixed vs. variable ratio, ESOP cliff and vesting schedule, appraisal timeline
- Push for a higher fixed-to-variable ratio (80:20 is better than 70:30)

**Above ₹15L:**
- Focus on role scope, team quality, and equity upside
- Negotiate for: 6-month appraisal cycle, L+1 title if doing L+1 work, learning budget

## Dubai / AED Roles

Convert AED to INR (1 AED ≈ ₹23). Floor in AED: ≈ 34,750 AED/year (≈ 2,900 AED/month).
Dubai salaries are typically tax-free — factor this in when comparing to India CTCs.

Script for Dubai roles: "My India equivalent target is ₹X, which translates to approximately Y AED. Given the tax-free structure, I'm flexible on the exact number."

## Notice Period Negotiation

Indian notice periods are typically 30–90 days. If a company needs you sooner:
- They can buy out your notice period — ask them to
- Script: "My current notice period is [X] days. If the timeline is urgent, I'd need the offer to include a notice period buyout of approximately ₹[salary/30 * days]."

## Walk-Away Line

"I appreciate the offer and the time you've invested. At this compensation level, it doesn't work for me financially. If there's room to revisit the number, I'm happy to continue the conversation — otherwise, I'll need to withdraw."
```

- [ ] **Step 2: Verify no Taani-specific content**

```bash
grep -i "300K\|USD\|O-1A\|visa\|Taani\|KCG\|Dubai.*remote\|geographic discount" /c/Users/santo/career-ops-clone/modes/negotiate.md
```

Expected: no output (the Dubai mention in the file is for AED conversion, not Taani's remote preference — that's fine)

- [ ] **Step 3: Commit**

```bash
cd /c/Users/santo/career-ops-clone && git add modes/negotiate.md && git commit -m "feat: update negotiate mode for INR context — CTC anatomy, India + Dubai tactics"
```

---

## Task 6: Update outreach.md and prep.md; verify deep.md

**Files:**
- Modify: `modes/outreach.md`
- Modify: `modes/prep.md`
- Verify: `modes/deep.md`

**Interfaces:**
- Produces: outreach + prep modes free of Taani-specific content, using Santosh's narrative templates

- [ ] **Step 1: Check all three files for Taani-specific content**

```bash
grep -in "Taani\|KCG\|blockchain\|O-1A\|300K\|pivot\|Tanisha\|mechanism design\|AI agent govern" \
  /c/Users/santo/career-ops-clone/modes/outreach.md \
  /c/Users/santo/career-ops-clone/modes/prep.md \
  /c/Users/santo/career-ops-clone/modes/deep.md
```

Note the output. Any file with matches needs updating in the steps below.

- [ ] **Step 2: Update `modes/outreach.md` — replace Taani narrative with Santosh's**

Read the current `modes/outreach.md`. Find any of these patterns and replace:
- Any reference to blockchain governance, mechanism design, O-1A → delete or replace with Santosh's analytics narrative
- Any mention of KCG Consulting, Taani, $300K → remove
- The pivot narrative template → replace with: "7 years of analytics experience across product, strategy & insights, and data consulting. Currently a Product Analyst at CycleBae, building onboarding/retention analytics. Masters in Data Analytics from Clark University."

After updating, the file should instruct Claude to:
1. Ask: who are you reaching out to, what role, what's the context (cold outreach / referral / post-application)?
2. Read `cv.md` and the evaluation report for context
3. Draft a LinkedIn message (under 300 characters for connection request, under 150 words for InMail) or email
4. Lead with a genuine hook specific to the company or person — not a generic opener
5. Reference a specific achievement from `cv.md` that's relevant to their work
6. Clear call to action: a 20-minute call, not "let me know if you're interested"

- [ ] **Step 3: Update `modes/prep.md` — remove blockchain/pivot context, point to Santosh's story bank**

Read the current `modes/prep.md`. Replace:
- Any blockchain / governance / pivot / Taani references → remove
- Any reference to $300K, O-1A, KCG → remove
- Story bank references: ensure it points to `interview-prep/story-bank.md` (already has Santosh's 7 stories)
- The prep mode should: read the evaluation report + story bank, map the 3–5 most relevant stories to the likely interview questions for this role, identify any technical gaps to brush up on (SQL, Python, specific BI tools mentioned in JD), and generate 3 questions Santosh should ask the interviewer

- [ ] **Step 4: Verify `modes/deep.md` is clean**

If Step 1 showed no matches in `deep.md`, skip this step.

If there are matches: read the file, remove the specific Taani references, and ensure the mode still instructs Claude to research the company's data/analytics team, recent product launches, tech stack, and glassdoor reviews.

- [ ] **Step 5: Verify all three files are clean**

```bash
grep -in "Taani\|KCG\|blockchain\|O-1A\|300K\|Tanisha\|mechanism design" \
  /c/Users/santo/career-ops-clone/modes/outreach.md \
  /c/Users/santo/career-ops-clone/modes/prep.md \
  /c/Users/santo/career-ops-clone/modes/deep.md
```

Expected: no output

- [ ] **Step 6: Commit**

```bash
cd /c/Users/santo/career-ops-clone && git add modes/outreach.md modes/prep.md modes/deep.md && git commit -m "feat: update outreach, prep, deep modes for Santosh — remove Taani-specific content"
```

---

## Task 7: Update .gitignore

**Files:**
- Modify: `.gitignore`

**Interfaces:**
- Produces: `output/*.pdf` and `output/*.html` ignored; `.gitkeep` files tracked; `node_modules` ignored

- [ ] **Step 1: Read current `.gitignore`**

Read `/c/Users/santo/career-ops-clone/.gitignore` and check what's already in it.

- [ ] **Step 2: Ensure these entries exist**

The `.gitignore` must contain:
```
node_modules/
output/*.pdf
output/*.html
!output/.gitkeep
reports/*.md
!reports/.gitkeep
```

If any are missing, add them. Do not remove any existing entries.

- [ ] **Step 3: Verify `.gitkeep` files are still tracked**

```bash
cd /c/Users/santo/career-ops-clone && git status output/ reports/
```

Expected: `output/.gitkeep` and `reports/.gitkeep` show as tracked; no untracked PDF or HTML files listed.

- [ ] **Step 4: Commit**

```bash
cd /c/Users/santo/career-ops-clone && git add .gitignore && git commit -m "chore: update gitignore — ignore generated PDFs and reports, keep gitkeep stubs"
```

---

## Task 8: End-to-end functional test

**Files:**
- Run in: `/c/Users/santo/career-ops-clone`
- Produces: verified working pipeline from scan → evaluate → PDF

This task has no code to write — it's a functional verification of the full system.

- [ ] **Step 1: Open career-ops-clone in Claude Code**

```bash
cd C:\Users\santo\career-ops-clone
claude
```

- [ ] **Step 2: Test the command listing**

In Claude Code, type:
```
/career-ops
```

Expected: Claude lists all available commands with descriptions. No errors. No Taani-specific references in the output.

- [ ] **Step 3: Test scan mode**

In Claude Code, type:
```
/career-ops scan
```

Expected: Claude reads `portals.yml` and `modes/scan.md`, searches for roles at companies like Swiggy, CRED, Razorpay in Bangalore and Noon/Careem in Dubai, adds results to `data/pipeline.md`. Verify `data/pipeline.md` has at least 1 new row.

- [ ] **Step 4: Test evaluate mode with a real JD**

Copy a real job description for a data analyst or product analyst role in Bangalore (from LinkedIn or Naukri). Paste it in Claude Code:

```
/career-ops {paste the full JD here}
```

Expected:
- Claude scores the role across 7 dimensions
- Outputs grade (A/B/C/D/F) and score/100
- Saves a report to `reports/001-{company}-{date}.md`
- Adds a row to `data/applications.md`

Verify:
```bash
ls /c/Users/santo/career-ops-clone/reports/
cat /c/Users/santo/career-ops-clone/data/applications.md
```

- [ ] **Step 5: Test PDF generation**

In Claude Code, for the role evaluated in Step 4:
```
/career-ops pdf
```

Expected:
- Claude tailors `cv.md` to the JD
- Runs the humanizer pass
- Generates HTML and runs `node generate-pdf.mjs`
- Saves PDF to `output/{company-slug}-cv-{date}.pdf`

Verify:
```bash
ls /c/Users/santo/career-ops-clone/output/
```

Expected: a `{company}-cv-{date}.pdf` file exists.

Open the PDF and verify:
- Santosh's name and contact details are correct
- Summary is tailored to the specific role
- Experience bullets match JD keywords
- Fits on one page
- No Taani references anywhere

- [ ] **Step 6: Commit any state files generated during testing**

```bash
cd /c/Users/santo/career-ops-clone && git add data/applications.md data/pipeline.md data/scan-history.tsv && git commit -m "test: add initial scan and evaluation results from end-to-end test"
```

---

## Task 9: Save design spec to repo and final push

**Files:**
- Create: `docs/superpowers/specs/2026-06-25-career-ops-design.md` (copy from `C:\Users\santo\career-ops\docs\superpowers\specs\`)
- Push: all commits to `github.com/Decidoin/career-ops`

- [ ] **Step 1: Copy the design spec into the repo**

```bash
mkdir -p /c/Users/santo/career-ops-clone/docs/superpowers/specs
cp "/c/Users/santo/career-ops/docs/superpowers/specs/2026-06-25-career-ops-design.md" \
   "/c/Users/santo/career-ops-clone/docs/superpowers/specs/2026-06-25-career-ops-design.md"
```

- [ ] **Step 2: Commit the design spec and this plan**

```bash
cd /c/Users/santo/career-ops-clone && git add docs/ && git commit -m "docs: add design spec and implementation plan"
```

- [ ] **Step 3: Push all commits to GitHub**

```bash
cd /c/Users/santo/career-ops-clone && git push origin master
```

Expected:
```
To https://github.com/Decidoin/career-ops.git
   {hash}..{hash}  master -> master
```

- [ ] **Step 4: Verify on GitHub**

Open `https://github.com/Decidoin/career-ops` in a browser and confirm:
- All commits are visible
- File tree shows: `CLAUDE.md`, `cv.md`, `config/profile.yml`, `portals.yml`, `modes/`, `templates/`, `docs/`
- No Taani-specific content visible in any file preview

---

## Self-Review

**Spec coverage:**
- [x] Fork + adapt approach: Tasks 1–9 cover all files identified in spec
- [x] CV HTML template update: Task 2
- [x] Humanizer pass: already in `modes/pdf.md` (Task 0 — already done), verified in Task 8 Step 5
- [x] Scoring system: `modes/_shared.md` done (pre-plan), `modes/evaluate.md` in Task 3
- [x] Portal scanner: `portals.yml` done (pre-plan), scan mode verified in Task 8 Step 3
- [x] India + Dubai portals: in `portals.yml` (pre-plan)
- [x] INR salary floor: in `config/profile.yml` (pre-plan), negotiation in Task 5
- [x] End-to-end test: Task 8
- [x] GitHub push: Task 9

**No placeholders found** — all steps contain explicit commands, file content, or verification output.

**Type consistency:** No shared function signatures across tasks — each task is config/markdown, not code. Archetype codes are consistently `DATA/PROD/BIZOPS/FOUND/STRAT/PM` throughout.
