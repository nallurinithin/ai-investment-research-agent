import type { InvestmentReport } from "../../types/investment";

import RecommendationCard from "../recommendation/RecommendationCard";
import ExecutiveSummary from "../summary/ExecutiveSummary";
import StrengthRiskCard from "../strengths/StrengthRiskCard";
import CompanyProfileCard from "../evidence/CompanyProfileCard";
import FinancialSnapshot from "../evidence/FinancialSnapshot";
import NewsHighlights from "../evidence/NewsHighlights";
import CompetitorSnapshot from "../evidence/CompetitorSnapshot";
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
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      {/* =======================================
          ANALYSIS
      ======================================== */}

      <section id="analysis">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <RecommendationCard
            recommendation={
              report.investmentAnalysis
                .recommendation
            }
            confidence={
              report.investmentAnalysis
                .confidence
            }
            evidenceCompleteness={
              report.investmentAnalysis
                .evidenceCompleteness
            }
          />

          <ExecutiveSummary
            summary={
              report.investmentAnalysis
                .summary
            }
          />

          <ReportViewer
            financialEvidence={
              report.financialEvidence
            }
            investmentAnalysis={
              report.investmentAnalysis
            }
          />
        </div>
      </section>

      {/* =======================================
          STRENGTHS & RISKS
      ======================================== */}

      <section id="strengths-risks">
        <StrengthRiskCard
          strengths={
            report.investmentAnalysis
              .strengths
          }
          risks={
            report.investmentAnalysis
              .risks
          }
        />
      </section>

      {/* =======================================
          SNAPSHOTS
      ======================================== */}

      <section
        id="snapshots"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <CompanyProfileCard
          companyName={
            report.financialEvidence.profile
              .companyName
          }
          symbol={
            report.financialEvidence.profile
              .symbol
          }
          sector={
            report.financialEvidence.profile
              .sector
          }
          industry={
            report.financialEvidence.profile
              .industry
          }
          ceo={
            report.financialEvidence.profile
              .ceo
          }
          marketCap={
            report.financialEvidence.profile
              .marketCap
          }
          employees={
            report.financialEvidence.profile
              .employees
          }
          website={
            report.financialEvidence.profile
              .website
          }
        />

        <FinancialSnapshot
          revenue={
            report.financialEvidence
              .incomeStatements[0]
              ?.revenue ?? 0
          }
          netIncome={
            report.financialEvidence
              .incomeStatements[0]
              ?.netIncome ?? 0
          }
          operatingCashFlow={
            report.financialEvidence
              .cashFlowStatements[0]
              ?.operatingCashFlow ?? 0
          }
          currentRatio={
            report.financialEvidence
              .financialRatios[0]
              ?.currentRatio ?? 0
          }
          returnOnEquity={
            report.financialEvidence
              .financialRatios[0]
              ?.returnOnEquity ?? 0
          }
        />
      </section>

      {/* =======================================
          MARKET INTELLIGENCE
      ======================================== */}

      <section
        id="market-intelligence"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
        }}
      >
        <NewsHighlights
          articles={
            report.financialEvidence.news
              .articles
          }
        />

        <CompetitorSnapshot
          competitors={
            report.financialEvidence
              .competitors
          }
        />
      </section>
    </main>
  );
}