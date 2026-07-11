import { FinancialRatio } from "../../domain/financial/financial-ratio.types.js";

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

export function mapFinancialRatio(
  ratio: FmpFinancialRatioResponse
): FinancialRatio {
  return {
    date: ratio.date,

    currentRatio: ratio.currentRatio,

    quickRatio: ratio.quickRatio,

    debtToEquity: ratio.debtToEquity,

    debtRatio: ratio.debtRatio,

    returnOnAssets: ratio.returnOnAssets,

    returnOnEquity: ratio.returnOnEquity,

    returnOnCapitalEmployed: ratio.returnOnCapitalEmployed,

    grossProfitMargin: ratio.grossProfitMargin,

    operatingProfitMargin: ratio.operatingProfitMargin,

    netProfitMargin: ratio.netProfitMargin,
  };
}