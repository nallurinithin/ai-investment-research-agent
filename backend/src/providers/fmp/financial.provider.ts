import axios from "axios";
import { env } from "../../infrastructure/config/env.js";

import { CompanyProfile } from "../../domain/financial/company-profile.types.js";
import { IncomeStatement } from "../../domain/financial/income-statement.types.js";

import { mapCompanyProfile } from "../../mappers/fmp/company-profile.mapper.js";
import { mapIncomeStatement } from "../../mappers/fmp/income-statement.mapper.js";

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

interface FmpIncomeStatementResponse {
  date: string;

  revenue: number;

  costOfRevenue: number;

  grossProfit: number;

  grossProfitRatio: number;

  operatingExpenses: number;

  operatingIncome: number;

  operatingIncomeRatio: number;

  netIncome: number;

  netIncomeRatio: number;

  eps: number;

  epsDiluted: number;
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

export async function getIncomeStatements(
  ticker: string
): Promise<IncomeStatement[]> {
  const response = await fmpClient.get("/income-statement", {
    params: {
      symbol: ticker,
      limit: 5,
    },
  });

  return (response.data as FmpIncomeStatementResponse[]).map(
    mapIncomeStatement
  );
}