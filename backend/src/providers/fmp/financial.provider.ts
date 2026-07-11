import axios from "axios";
import { env } from "../../infrastructure/config/env.js";
import { CompanyProfile } from "../../domain/financial/company-profile.types.js";
import { mapCompanyProfile } from "../../mappers/fmp/company-profile.mapper.js";

const fmpClient = axios.create({
  baseURL: env.FMP_BASE_URL,
  timeout: 10000,
  headers: {
    apikey: env.FMP_API_KEY,
  },
});

interface FmpCompanyProfileResponse {
  symbol: string;
  companyName: string;
  description: string;

  sector: string;
  industry: string;

  ceo: string;

  country: string;
  exchange: string;
  currency: string;

  website: string;

  marketCap: number;

  fullTimeEmployees: string;

  isActivelyTrading: boolean;
}

export async function getCompanyProfile(
  ticker: string
): Promise<CompanyProfile> {
  const response = await fmpClient.get("/profile", {
    params: {
      symbol: ticker,
    },
  });

  const profile = response.data[0] as FmpCompanyProfileResponse;

  return mapCompanyProfile(profile);
}