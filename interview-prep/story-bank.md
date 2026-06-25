# STAR+R Story Bank — Santosh Govardhan

Stories accumulated across evaluations. Add new stories via `/career-ops prep`.

---

### D1 Retention Analysis — CycleBae
**Tags:** [product-analytics, retention, experimentation, stakeholder-influence]
**Best for:** "Tell me about a time you influenced a product decision with data"

**Situation:** CycleBae needed to understand what drove users who came back on Day 1 vs. those who didn't.
**Task:** Identify the behavioral signals most associated with D1 retention to inform experiment prioritization.
**Action:** Ran cohort analysis segmented by onboarding actions, identified 2–3 specific behaviors with the strongest correlation to D1 retention, and presented findings to Product with recommended experiment hypotheses.
**Result:** Findings directly shaped the experimentation roadmap for onboarding.
**Reflection:** Would have moved faster if I'd aligned on the metric definition upfront with Product before diving into the analysis.

---

### Rental-to-Buyback Pilot — Furlenco
**Tags:** [business-analysis, ops, revenue, pilot, margins]
**Best for:** "Describe a project where you drove business impact" / "Tell me about improving a metric"

**Situation:** Furlenco's refurbishment costs were eating into margins on returned rental items.
**Task:** Find a way to reduce refurbishment volume and improve margins on the returns pipeline.
**Action:** Analyzed return patterns, customer CLTV, and item condition data. Designed a rental-to-buyback offer targeting customers most likely to convert — letting customers buy the item they were renting at a discount instead of returning it.
**Result:** Cut refurbishment costs, improved margins by 10%, and created the resale category from scratch.
**Reflection:** The data was clear early but stakeholder alignment took longer than expected. Now I lead with the business case upfront.

---

### Churn & CLTV Modelling — Furlenco
**Tags:** [churn, CLTV, segmentation, retention, Python, SQL]
**Best for:** "Have you built predictive models?" / "How do you approach customer retention?"

**Situation:** Furlenco wanted to shift from reactive to proactive retention — intervening before customers churned.
**Task:** Build models to segment users by churn risk and lifetime value so retention efforts could be targeted.
**Action:** Built churn and CLTV models using SQL and Python, segmented the user base, and worked with marketing to design targeted campaigns for high-CLTV / high-churn-risk users.
**Result:** Engagement improved by 15% for targeted segments.
**Reflection:** The model was solid but the feedback loop from campaigns back into the model took time to establish. I'd build that in from day one next time.

---

### Self-Service Analytics at Scale — Furlenco
**Tags:** [BI, dashboards, Power BI, QuickSight, stakeholder-enablement]
**Best for:** "Tell me about building dashboards" / "How do you make data accessible to non-technical stakeholders?"

**Situation:** Furlenco's business teams were dependent on the data team for every report. The bottleneck was slowing decision-making.
**Task:** Build scalable self-service analytics infrastructure that let business teams answer their own questions.
**Action:** Defined KPIs with stakeholders, built Power BI and Amazon QuickSight dashboards covering acquisition, retention, operations, and revenue. Trained business users on navigation and interpretation.
**Result:** Business teams could self-serve insights. Reduced ad-hoc data requests and accelerated decision-making.
**Reflection:** Getting the KPI definitions right upfront — agreed on by all stakeholders before building — was the most important step. Skipping that creates dashboards nobody trusts.

---

### DeFi Protocol Analytics Database — Moonshots Studio, Dubai
**Tags:** [data-engineering, stakeholder, product-metrics, consulting, Power BI]
**Best for:** "Tell me about building something from scratch" / "Working with non-technical stakeholders"

**Situation:** Moonshots Studio needed to pitch data-driven targeting to blockchain protocol clients but had no structured analytics infrastructure.
**Task:** Build an analytics-ready database covering the DeFi landscape that could power client targeting and outreach.
**Action:** Built and maintained a database covering 50+ DeFi protocols. Designed Power BI dashboards and a performance scoring model on top of it for stakeholder self-service.
**Result:** Improved client outreach effectiveness by 10%. Stakeholders could pull insights without waiting on a data request.
**Reflection:** Starting with a clear schema and field definitions upfront saved significant rework later.

---

### LLM-Powered BI — Research Project, Clark University
**Tags:** [AI, LLM, SQL, RAG, LangChain, research, publication]
**Best for:** "Tell me about a technical project" / "What's your experience with AI/ML?"

**Situation:** Business users struggle to query databases without SQL knowledge. Wanted to bridge that gap using LLMs.
**Task:** Build a system that converts natural language business questions into accurate, validated SQL queries.
**Action:** Built a pipeline using Python, RAG, LangChain, FAISS for schema retrieval, and Groq's LLaMA 3.3. Added query validation and a self-healing loop for error correction. Presented at Clark University's Multidisciplinary Conference 2025.
**Result:** System correctly handles dynamic SQL generation across multiple schemas. Published and presented at a US academic conference.
**Reflection:** The self-healing loop was the hardest part — getting the model to identify its own SQL errors and correct them without going in circles.

---

### 70% CRM Go-Live Reduction — Urban Piper
**Tags:** [operations, onboarding, process-improvement, SaaS]
**Best for:** "Tell me about improving an operational process" / "Working with clients"

**Situation:** Urban Piper's QSR/F&B client onboarding onto their CRM was slow, manual, and inconsistent across clients.
**Task:** Streamline the onboarding process to reduce time-to-go-live.
**Action:** Mapped the existing onboarding steps, identified the bottlenecks, standardized setup sequences and training materials, reduced handoffs between teams.
**Result:** Cut CRM go-live time by 70% across 5+ clients.
**Reflection:** Most process improvements come from removing steps, not optimizing them. The biggest gains were from eliminating redundant handoffs entirely.
