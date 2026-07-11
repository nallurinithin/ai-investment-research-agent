import { FinancialEvidence } from "../../domain/financial/financial-evidence.types.js";
import { InvestmentAnalysis } from "../../domain/ai/investment-analysis.types.js";

export function buildMarkdownReport(
  evidence: FinancialEvidence,
  analysis: InvestmentAnalysis
): string {

 return `# Investment Research Report

## Company

**Company:** ${evidence.profile.companyName}
**Ticker:** ${evidence.profile.symbol}
**Sector:** ${evidence.profile.sector}
**Industry:** ${evidence.profile.industry}
**Exchange:** ${evidence.profile.exchange}
**Country:** ${evidence.profile.country}

---

## Financial Summary

Revenue (Latest): ${evidence.incomeStatements[0]?.revenue ?? "N/A"}

Net Income: ${evidence.incomeStatements[0]?.netIncome ?? "N/A"}

Operating Cash Flow:
${evidence.cashFlowStatements[0]?.operatingCashFlow ?? "N/A"}

Current Ratio:
${evidence.financialRatios[0]?.currentRatio ?? "N/A"}

ROE:
${evidence.financialRatios[0]?.returnOnEquity ?? "N/A"}

---

## Competitors

${evidence.competitors.length > 0
  ? evidence.competitors
      .map((c) => `- ${c.companyName} (${c.symbol})`)
      .join("\n")
  : "No competitors available."}

---

## Latest News

${evidence.news.articles.length > 0
  ? evidence.news.articles
      .map((article) => `- [${article.title}](${article.url})`)
      .join("\n")
  : "No recent news available."}
  
---

# AI Investment Analysis

## Recommendation

${analysis.recommendation}

## Confidence

${analysis.confidence}%

## Summary

${analysis.summary}

## Strengths

${analysis.strengths
  .map((strength) => `- ${strength}`)
  .join("\n")}

## Risks

${analysis.risks
  .map((risk) => `- ${risk}`)
  .join("\n")}

## Competitor Analysis

${analysis.competitorAnalysis}

## News Impact

${analysis.newsImpact}
`;
}