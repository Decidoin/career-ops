# Mode: PDF

Triggered by: `/career-ops pdf` or after an evaluation when auto-generating a CV.

## Workflow

1. Read `cv.md` for master content
2. Read the evaluation report for the target role (or ask which role)
3. Read `templates/cv-template.html` for the HTML layout
4. Tailor the CV:
   - Reorder experience bullets to lead with most relevant
   - Inject keywords from the JD naturally into achievement bullets
   - Customize the summary paragraph for this specific role
   - Apply the selected pivot narrative
   - Remove or minimize irrelevant experience
5. Generate HTML with the tailored content
6. Run `node generate-pdf.mjs` to convert HTML → PDF
7. Save to `output/{company-slug}-cv-{YYYY-MM-DD}.pdf`

## Tailoring Rules

- **Summary:** 2-3 sentences. Lead with the pivot angle. Include the company name.
- **Experience:** Reorder bullets within each role. Add JD keywords where they naturally fit.
- **Skills:** Put the most relevant skills first. Mirror the JD's terminology.
- **Publications:** Always include — this is a differentiator.
- **Speaking:** Include if the role values thought leadership.
- **Education:** Keep brief. Young India Fellowship and President's Gold Medal always included.
- **Length:** Strict 1 page for most roles. 2 pages only for research-heavy positions.

## ATS Optimization

- No tables, columns, or fancy formatting in the underlying HTML
- Use standard section headers: Summary, Experience, Publications, Education, Skills
- No images or icons
- Clean, semantic HTML that parses well
