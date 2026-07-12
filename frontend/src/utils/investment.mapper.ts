import type {
  InvestmentApiResponse,
  ApiCompanyCandidate,
} from "../types/api";

import type {
  CompanyOption,
} from "../types/company";

export function mapCompanyCandidate(
  candidate: ApiCompanyCandidate
): CompanyOption {
  return {
    symbol: candidate.symbol,
    companyName: candidate.name,
    exchange: candidate.exchange,
  };
}

export function mapInvestmentResponse(
  response: InvestmentApiResponse
) {
  switch (response.status) {
    case "success":
      return response;

    case "ambiguity":
      return {
        ...response,
        data: response.data.map(mapCompanyCandidate),
      };

    case "error":
      return response;
  }
}