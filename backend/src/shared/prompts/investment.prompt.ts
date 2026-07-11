import { FinancialEvidence } from "../../domain/financial/financial-evidence.types.js";

export function buildInvestmentPrompt(
  evidence: FinancialEvidence
): string {
  return `
You are a professional equity research analyst.

Analyze the following company evidence.

Return ONLY valid JSON.

The JSON schema must be:

{
  "summary": "",
  "strengths": [],
  "risks": [],
  "recommendation": "BUY | HOLD | SELL",
  "confidence": 0,
  "reasoning": ""
}

Evidence:

${JSON.stringify(evidence, null, 2)}
`;
}