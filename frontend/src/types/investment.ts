import type { CompanyOption } from "./company";
import type { CompanyProfile } from "./company-profile";
import type { InvestmentAnalysis } from "./analysis";
import type { Competitor } from "./competitor";
import type { NewsArticle } from "./news";

export type InvestmentStatus =
  | "idle"
  | "loading"
  | "resolved"
  | "ambiguous"
  | "error";

export interface IncomeStatement {
  revenue: number;

  netIncome: number;
}

export interface CashFlowStatement {
  operatingCashFlow: number;
}

export interface FinancialRatio {
  currentRatio: number;

  returnOnEquity: number;
}

export interface InvestmentEvidence {
  profile: CompanyProfile;

  incomeStatements: IncomeStatement[];

  cashFlowStatements: CashFlowStatement[];

  financialRatios: FinancialRatio[];

  competitors: Competitor[];

  news: {
    articles: NewsArticle[];
  };
}

export interface InvestmentReport {
  financialEvidence: InvestmentEvidence;

  investmentAnalysis: InvestmentAnalysis;

  report: string;
}

export interface InvestmentState {
  status: InvestmentStatus;

  loading: boolean;

  error: string | null;

  companies: CompanyOption[];

  report: InvestmentReport | null;
}