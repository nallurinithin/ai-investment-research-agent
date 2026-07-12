export interface ApiCompanyCandidate {
  symbol: string;

  name: string;

  exchange: string;

  exchangeFullName: string;

  currency: string;
}

export interface ApiSuccessResponse {
  status: "success";

  message: string;

  data: {
    financialEvidence: unknown;

    investmentAnalysis: unknown;

    report: string;
  };
}

export interface ApiAmbiguityResponse {
  status: "ambiguity";

  message: string;

  data: ApiCompanyCandidate[];
}

export interface ApiErrorResponse {
  status: "error";

  message: string;

  data: null;
}

export type InvestmentApiResponse =
  | ApiSuccessResponse
  | ApiAmbiguityResponse
  | ApiErrorResponse;