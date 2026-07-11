import { FinancialEvidence } from "../../domain/financial/financial-evidence.types.js";

export function buildInvestmentPrompt(
  evidence: FinancialEvidence
): string {
  return `
You are a senior equity research analyst.

Your task is to analyze the following company and return ONLY valid JSON.

The JSON schema MUST be:

{
  "summary": "...",
  "strengths": ["..."],
  "risks": ["..."],
  "competitorAnalysis": "...",
  "newsImpact": "...",
  "recommendation": "STRONG_BUY | BUY | HOLD | SELL | STRONG_SELL",
  "confidence": 0-100
}

Financial Evidence:

${JSON.stringify(evidence, null, 2)}

Rules:

- Do not invent financial data.
- Base every conclusion only on the supplied evidence.
- Consider financial statements, ratios, growth metrics, recent news and competitors.
- Confidence must be between 0 and 100.
- Return ONLY valid JSON.
- Do not wrap the JSON inside markdown.
`;
}