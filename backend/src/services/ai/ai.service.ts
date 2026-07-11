import { FinancialEvidence } from "../../domain/financial/financial-evidence.types.js";
import { InvestmentAnalysis } from "../../domain/ai/investment-analysis.types.js";

import { buildInvestmentPrompt } from "../../shared/prompts/investment.prompt.js";
import { generateInvestmentAnalysis } from "../../providers/gemini/gemini.provider.js";

export async function analyzeInvestment(
  evidence: FinancialEvidence
): Promise<InvestmentAnalysis> {
  const prompt = buildInvestmentPrompt(evidence);

  const response = await generateInvestmentAnalysis(prompt);

  const cleanedResponse = response
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleanedResponse) as InvestmentAnalysis;
}