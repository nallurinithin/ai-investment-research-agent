import { FinancialEvidence } from "../../domain/financial/financial-evidence.types.js";
import { InvestmentAnalysis } from "../../domain/ai/investment-analysis.types.js";
import { Recommendation } from "../../domain/ai/recommendation.enum.js";

import { buildInvestmentPrompt } from "../../shared/prompts/investment.prompt.js";
import { generateInvestmentAnalysis } from "../../providers/gemini/gemini.provider.js";

export async function analyzeInvestment(
  evidence: FinancialEvidence
): Promise<InvestmentAnalysis> {
  const prompt = buildInvestmentPrompt(
    evidence
  );

  const response =
    await generateInvestmentAnalysis(
      prompt
    );

  const cleanedResponse = response
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  const analysis = JSON.parse(
    cleanedResponse
  ) as {
    summary: string;
    strengths: string[];
    risks: string[];
    competitorAnalysis: string;
    newsImpact: string;
    confidence: number;
  };

  return {
    summary: analysis.summary,

    strengths: analysis.strengths,

    risks: analysis.risks,

    competitorAnalysis:
      analysis.competitorAnalysis,

    newsImpact:
      analysis.newsImpact,

    confidence: Math.max(
      0,
      Math.min(
        100,
        Math.round(
          analysis.confidence
        )
      )
    ),

    recommendation:
      Recommendation.INSUFFICIENT_EVIDENCE,

    evidenceCompleteness: 0,
  };
}