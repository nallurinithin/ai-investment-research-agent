import {
  researchCompany as researchCompanyApi,
  researchCompanyByTicker as researchCompanyByTickerApi,
} from "../api/investment.api";

import { mapInvestmentResponse } from "../utils/investment.mapper";

export async function researchCompany(
  company: string
) {
  const response =
    await researchCompanyApi(company);

  return mapInvestmentResponse(response);
}

export async function researchCompanyByTicker(
  ticker: string
) {
  const response =
    await researchCompanyByTickerApi(ticker);

  return mapInvestmentResponse(response);
}