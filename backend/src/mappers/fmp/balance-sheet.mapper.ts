import { BalanceSheet } from "../../domain/financial/balance-sheet.types.js";

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

export function mapBalanceSheet(
  statement: FmpBalanceSheetResponse
): BalanceSheet {
  return {
    date: statement.date,

    cashAndCashEquivalents: statement.cashAndCashEquivalents,

    totalCurrentAssets: statement.totalCurrentAssets,

    totalAssets: statement.totalAssets,

    totalCurrentLiabilities: statement.totalCurrentLiabilities,

    totalLiabilities: statement.totalLiabilities,

    totalDebt: statement.totalDebt,

    totalStockholdersEquity: statement.totalStockholdersEquity,

    netDebt: statement.netDebt,
  };
}