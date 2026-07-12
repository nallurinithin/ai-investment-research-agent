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

export interface InvestmentEvidence {
  profile: CompanyProfile;

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