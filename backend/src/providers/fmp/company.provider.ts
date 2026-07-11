import axios from "axios";
import { env } from "../../infrastructure/config/env.js";
import { mapCompanySearchResponse } from "../../mappers/fmp/company-search.mapper.js";
import { CompanyCandidate } from "../../domain/company/company.types.js";
import { Competitor } from "../../domain/competitor/competitor.types.js";
import { mapCompetitor } from "../../mappers/fmp/competitor.mapper.js";


const fmpClient = axios.create({
  baseURL: env.FMP_BASE_URL,
  timeout: 10000,
  headers: {
    apikey: env.FMP_API_KEY,
  },
});

interface FmpCompetitorResponse {
  symbol: string;

  companyName: string;

  price: number;

  mktCap: number;
}

export async function searchCompany(
  company: string
): Promise<CompanyCandidate[]> {
  const response = await fmpClient.get("/search-name", {
    params: {
      query: company,
      limit: 5,
    },
  });

  return mapCompanySearchResponse(response.data);
}

export async function getCompetitors(
  ticker: string
): Promise<Competitor[]> {
  const response = await fmpClient.get("/stock-peers", {
    params: {
      symbol: ticker,
    },
  });

  return (response.data as FmpCompetitorResponse[]).map(
    mapCompetitor
  );
}