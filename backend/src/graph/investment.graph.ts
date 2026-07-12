import { resolveCompany } from "../services/company/company.service.js";
import { collectFinancialEvidence } from "../services/financial/financial.service.js";
import { InvestmentRequest } from "../api/validators/investment.validator.js";
import { CompanyResolution } from "../domain/company/company-resolution.types.js";
import { analyzeInvestment } from "../services/ai/ai.service.js";
import { generateInvestmentReport } from "../services/report/report.service.js";
import { evaluateRecommendation } from "../services/recommendation/recommendation.service.js";

export interface GraphResult {
  status: string;
  message: string;
  data: unknown;
}

export async function runInvestmentGraph(
  request: InvestmentRequest
): Promise<GraphResult> {
  let ticker: string;

  // ---------------------------------------------
  // Company already selected
  // ---------------------------------------------
  if (request.ticker) {
    ticker = request.ticker;
  } else {
    // ---------------------------------------------
    // Resolve company name
    // ---------------------------------------------
    const resolution: CompanyResolution =
      await resolveCompany(request.company!);

    switch (resolution.status) {
      case "COMPANY_NOT_FOUND":
        return {
          status: "error",
          message: "Company not found.",
          data: null,
        };

      case "COMPANY_AMBIGUOUS":
        return {
          status: "ambiguity",
          message:
            "Multiple companies found. Please select one.",
          data: resolution.candidates,
        };

      case "COMPANY_RESOLVED":
        ticker = resolution.company.symbol;
        break;
    }
  }

  // ---------------------------------------------
  // Financial Evidence Retrieval
  // ---------------------------------------------
  const financialEvidence =
    await collectFinancialEvidence(ticker);

  // ---------------------------------------------
  // AI Investment Analysis
  // ---------------------------------------------
  const investmentAnalysis =
    await analyzeInvestment(financialEvidence);

  // ---------------------------------------------
  // Recommendation Engine
  // ---------------------------------------------
  const recommendation =
    evaluateRecommendation(
      financialEvidence,
      investmentAnalysis.confidence
    );

  investmentAnalysis.recommendation =
    recommendation.recommendation;

  investmentAnalysis.evidenceCompleteness =
    recommendation.evidenceCompleteness;

  // ---------------------------------------------
  // Report Generation
  // ---------------------------------------------
  const report =
    await generateInvestmentReport(
      financialEvidence,
      investmentAnalysis
    );

  return {
    status: "success",
    message:
      "Investment analysis completed successfully.",
    data: {
      financialEvidence,
      investmentAnalysis,
      report,
    },
  };
}