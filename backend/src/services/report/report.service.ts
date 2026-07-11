import { FinancialEvidence } from "../../domain/financial/financial-evidence.types.js";
import { InvestmentAnalysis } from "../../domain/ai/investment-analysis.types.js";

import { buildMarkdownReport } from "../../shared/reports/markdown.builder.js";

export async function generateInvestmentReport(
  evidence: FinancialEvidence,
  analysis: InvestmentAnalysis
): Promise<string> {
  return buildMarkdownReport(
    evidence,
    analysis
  );
}