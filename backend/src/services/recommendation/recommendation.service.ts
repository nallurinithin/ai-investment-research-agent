import { FinancialEvidence } from "../../domain/financial/financial-evidence.types.js";

export type FinalRecommendation =
  | "INSUFFICIENT_EVIDENCE"
  | "PASS"
  | "RESEARCH_FURTHER";

export interface RecommendationDecision {
  recommendation: FinalRecommendation;

  evidenceCompleteness: number;

  aiConfidence: number;
}

export function evaluateRecommendation(
  evidence: FinancialEvidence,
  aiConfidence: number
): RecommendationDecision {
  const checks = [
    evidence.profile ? 1 : 0,

    evidence.incomeStatements.length > 0 ? 1 : 0,

    evidence.balanceSheets.length > 0 ? 1 : 0,

    evidence.cashFlowStatements.length > 0 ? 1 : 0,

    evidence.financialRatios.length > 0 ? 1 : 0,

    evidence.growthMetrics.length > 0 ? 1 : 0,

    evidence.news.articles.length > 0 ? 1 : 0,

    evidence.competitors.length > 0 ? 1 : 0,
  ];

  const evidenceCompleteness = Math.round(
    (checks.reduce((sum, value) => sum + value, 0) /
      checks.length) *
      100
  );

  let recommendation: FinalRecommendation;

  if (evidenceCompleteness < 60) {
    recommendation = "INSUFFICIENT_EVIDENCE";
  } else if (aiConfidence < 50) {
    recommendation = "PASS";
  } else {
    recommendation = "RESEARCH_FURTHER";
  }

  return {
    recommendation,

    evidenceCompleteness,

    aiConfidence,
  };
}