import { resolveCompany } from "../services/company/company.service.js";
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

  // Future Flow:
  // User has already selected a ticker.
  // Company resolution is skipped and research will begin.
  if (request.ticker) {
    return {
      status: "success",
      message: "Company selected successfully. Research workflow will start next.",
      data: {
        ticker: request.ticker,
      },
    };
  }

  // No ticker means we must resolve the company name first.
  const resolution: CompanyResolution = await resolveCompany(request.company!);

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
      return {
        status: "success",
        message: "Company resolved successfully.",
        data: resolution.company,
      };
  }
}