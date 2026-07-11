import { resolveCompany } from "../services/company/company.service.js";
import { collectFinancialEvidence } from "../services/financial/financial.service.js";
import { InvestmentRequest } from "../api/validators/investment.validator.js";
import { CompanyResolution } from "../domain/company/company-resolution.types.js";

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
    const resolution: CompanyResolution = await resolveCompany(
      request.company!
    );

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
          message: "Multiple companies found. Please select one.",
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
  const financialEvidence = await collectFinancialEvidence(ticker);

  return {
    status: "success",
    message: "Financial evidence collected successfully.",
    data: financialEvidence,
  };
}