import { FinalRecommendation } from "../../services/recommendation/recommendation.service.js";

export interface InvestmentAnalysis {
  summary: string;

  strengths: string[];

  risks: string[];

  competitorAnalysis: string;

  newsImpact: string;

  recommendation: FinalRecommendation;

  confidence: number;

  evidenceCompleteness: number;
}