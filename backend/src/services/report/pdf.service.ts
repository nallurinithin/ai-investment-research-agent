import { FinancialEvidence } from "../../domain/financial/financial-evidence.types.js";
import { InvestmentAnalysis } from "../../domain/ai/investment-analysis.types.js";

import { buildPdfReport } from "../../shared/reports/pdf.builder.js";

export async function generatePdf(
  evidence: FinancialEvidence,
  analysis: InvestmentAnalysis
): Promise<Buffer> {
  return buildPdfReport(
    evidence,
    analysis
  );
}