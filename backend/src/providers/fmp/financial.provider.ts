import axios from "axios";
import { env } from "../../infrastructure/config/env.js";

import { CompanyProfile } from "../../domain/financial/company-profile.types.js";
import { IncomeStatement } from "../../domain/financial/income-statement.types.js";
import { BalanceSheet } from "../../domain/financial/balance-sheet.types.js";
import { CashFlowStatement } from "../../domain/financial/cash-flow-statement.types.js";
import { FinancialRatio } from "../../domain/financial/financial-ratio.types.js";
import { GrowthMetric } from "../../domain/financial/growth-metrics.types.js";

import { mapCompanyProfile } from "../../mappers/fmp/company-profile.mapper.js";
import { mapIncomeStatement } from "../../mappers/fmp/income-statement.mapper.js";
import { mapBalanceSheet } from "../../mappers/fmp/balance-sheet.mapper.js";
import { mapCashFlowStatement } from "../../mappers/fmp/cash-flow-statement.mapper.js";
import { mapFinancialRatio } from "../../mappers/fmp/financial-ratio.mapper.js";
import { mapGrowthMetric } from "../../mappers/fmp/growth-metrics.mapper.js";
 
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

interface FmpBalanceSheetResponse {
  date: string;

  cashAndCashEquivalents: number;

  totalCurrentAssets: number;

  totalAssets: number;

  totalCurrentLiabilities: number;

  totalLiabilities: number;

  totalDebt: number;

  totalStockholdersEquity: number;

  netDebt: number;
}

interface FmpCashFlowStatementResponse {
  date: string;

  operatingCashFlow: number;

  capitalExpenditure: number;

  freeCashFlow: number;

  investmentsInPropertyPlantAndEquipment: number;

  netCashProvidedByOperatingActivities: number;

  netCashUsedForInvestingActivities: number;

  netCashUsedProvidedByFinancingActivities: number;

  netChangeInCash: number;
}

interface FmpFinancialRatioResponse {
  date: string;

  currentRatio: number;

  quickRatio: number;

  debtToEquity: number;

  debtRatio: number;

  returnOnAssets: number;

  returnOnEquity: number;

  returnOnCapitalEmployed: number;

  grossProfitMargin: number;

  operatingProfitMargin: number;

  netProfitMargin: number;
}

interface FmpGrowthMetricResponse {
  date: string;

  revenueGrowth: number;

  grossProfitGrowth: number;

  operatingIncomeGrowth: number;

  netIncomeGrowth: number;

  epsGrowth: number;

  freeCashFlowGrowth: number;

  bookValueGrowth: number;
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

export async function getBalanceSheets(
  ticker: string
): Promise<BalanceSheet[]> {
  const response = await fmpClient.get("/balance-sheet-statement", {
    params: {
      symbol: ticker,
      limit: 5,
    },
  });

  return (response.data as FmpBalanceSheetResponse[]).map(
    mapBalanceSheet
  );
}

export async function getCashFlowStatements(
  ticker: string
): Promise<CashFlowStatement[]> {
  const response = await fmpClient.get("/cash-flow-statement", {
    params: {
      symbol: ticker,
      limit: 5,
    },
  });

  return (response.data as FmpCashFlowStatementResponse[]).map(
    mapCashFlowStatement
  );
}

export async function getFinancialRatios(
  ticker: string
): Promise<FinancialRatio[]> {
  const response = await fmpClient.get("/ratios", {
    params: {
      symbol: ticker,
      limit: 5,
    },
  });

  return (response.data as FmpFinancialRatioResponse[]).map(
    mapFinancialRatio
  );
}

export async function getGrowthMetrics(
  ticker: string
): Promise<GrowthMetric[]> {
  const response = await fmpClient.get("/financial-growth", {
    params: {
      symbol: ticker,
      limit: 5,
    },
  });

  return (response.data as FmpGrowthMetricResponse[]).map(
    mapGrowthMetric
  );
}

 