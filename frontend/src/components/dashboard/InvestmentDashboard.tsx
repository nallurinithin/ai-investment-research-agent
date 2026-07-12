import type { InvestmentReport } from "../../types/investment";

import RecommendationCard from "../recommendation/RecommendationCard";
import ExecutiveSummary from "../summary/ExecutiveSummary";
import StrengthRiskCard from "../strengths/StrengthRiskCard";
import CompanyProfileCard from "../evidence/CompanyProfileCard";
import CompetitorSnapshot from "../evidence/CompetitorSnapshot";
import NewsHighlights from "../evidence/NewsHighlights";
import ReportViewer from "../report/ReportViewer";

interface InvestmentDashboardProps {
  report: InvestmentReport;
}

export default function InvestmentDashboard({
  report,
}: InvestmentDashboardProps) {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "40px auto",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      <RecommendationCard
        recommendation={
          report.investmentAnalysis.recommendation
        }
        confidence={
          report.investmentAnalysis.confidence
        }
      />

      <ExecutiveSummary
        summary={
          report.investmentAnalysis.summary
        }
      />

      <StrengthRiskCard
        strengths={
          report.investmentAnalysis.strengths
        }
        risks={
          report.investmentAnalysis.risks
        }
      />

      <CompanyProfileCard
        companyName={
          report.financialEvidence.profile.companyName
        }
        symbol={
          report.financialEvidence.profile.symbol
        }
        sector={
          report.financialEvidence.profile.sector
        }
        industry={
          report.financialEvidence.profile.industry
        }
        ceo={
          report.financialEvidence.profile.ceo
        }
        marketCap={
          report.financialEvidence.profile.marketCap
        }
        employees={
          report.financialEvidence.profile.employees
        }
        website={
          report.financialEvidence.profile.website
        }
      />

      <CompetitorSnapshot
        competitors={
          report.financialEvidence.competitors
        }
      />

      <NewsHighlights
        articles={
          report.financialEvidence.news.articles
        }
      />

      <ReportViewer
        report={report.report}
      />
    </main>
  );
}