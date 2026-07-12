export interface InvestmentAnalysis {
  summary: string;

  strengths: string[];

  risks: string[];

  competitorAnalysis: string;

  newsImpact: string;

  recommendation: string;

  confidence: number;

  evidenceCompleteness: number;
}