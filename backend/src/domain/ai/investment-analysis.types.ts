import { Recommendation } from "./recommendation.enum.js";

export interface InvestmentAnalysis {
  summary: string;

  strengths: string[];

  risks: string[];

  competitorAnalysis: string;

  newsImpact: string;

  recommendation: Recommendation;

  confidence: number;
}