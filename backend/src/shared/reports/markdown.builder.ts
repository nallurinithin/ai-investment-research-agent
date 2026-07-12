import { FinancialEvidence } from "../../domain/financial/financial-evidence.types.js";
import { InvestmentAnalysis } from "../../domain/ai/investment-analysis.types.js";

export function buildMarkdownReport(
  evidence: FinancialEvidence,
  analysis: InvestmentAnalysis
): string {
  return `# Investment Research Report

Generated on: ${new Date().toLocaleDateString()}

---

# Company Overview

Company: ${evidence.profile.companyName}

Ticker: ${evidence.profile.symbol}

Sector: ${evidence.profile.sector}

Industry: ${evidence.profile.industry}

Exchange: ${evidence.profile.exchange}

Country: ${evidence.profile.country}

CEO: ${evidence.profile.ceo}

Employees: ${evidence.profile.employees.toLocaleString()}

Market Cap: $${evidence.profile.marketCap.toLocaleString()}

Website: ${evidence.profile.website}

---

# Investment Decision

Recommendation:
${analysis.recommendation.replaceAll("_", " ")}

Evidence Completeness:
${analysis.evidenceCompleteness}%

AI Confidence:
${analysis.confidence}%

---

# Executive Summary

${analysis.summary}

---

# Key Strengths

${analysis.strengths.map((item) => `• ${item}`).join("\n")}

---

# Key Risks

${analysis.risks.map((item) => `• ${item}`).join("\n")}

---

# Financial Highlights

Revenue:
${evidence.incomeStatements[0]?.revenue ?? "N/A"}

Net Income:
${evidence.incomeStatements[0]?.netIncome ?? "N/A"}

Operating Cash Flow:
${evidence.cashFlowStatements[0]?.operatingCashFlow ?? "N/A"}

Current Ratio:
${evidence.financialRatios[0]?.currentRatio ?? "N/A"}

Return on Equity:
${evidence.financialRatios[0]?.returnOnEquity ?? "N/A"}

---

# Competitor Analysis

${analysis.competitorAnalysis}

Top Competitors:

${evidence.competitors
  .map(
    (competitor) =>
      `• ${competitor.companyName} (${competitor.symbol})`
  )
  .join("\n")}

---

# News Impact

${analysis.newsImpact}

Top News:

${evidence.news.articles
  .map(
    (article) =>
      `• ${article.title}
  ${article.source}
  ${article.url}`
  )
  .join("\n\n")}

---

# Disclaimer

This report is generated using publicly available financial information and AI-assisted analysis.

It is intended solely to support preliminary investment research.

It should not be interpreted as financial, legal, or investment advice. Investors should conduct their own due diligence and consult qualified financial professionals before making investment decisions.
`;
}