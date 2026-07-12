import { useInvestment } from "../../hooks/useInvestment";

import AppLayout from "../../components/layout/AppLayout";

import HeroSection from "../../components/home/HeroSection";
import SearchSection from "../../components/home/SearchSection";

import CompanySelector from "../../components/company/CompanySelector";
import LoadingSpinner from "../../components/loading/LoadingSpinner";
import ErrorCard from "../../components/error/ErrorCard";
import InvestmentDashboard from "../../components/dashboard/InvestmentDashboard";

export default function HomePage() {
  const investment = useInvestment();

  return (
    <AppLayout>
      <section
        id="analysis"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
        }}
      >
        <HeroSection />

        <SearchSection
          selectedCompany={
            investment.selectedCompany
          }
          loading={
            investment.status === "loading"
          }
          onAnalyze={
            investment.analyzeCompany
          }
        />

        {investment.status ===
          "ambiguous" && (
          <CompanySelector
            companies={
              investment.companies
            }
            onSelect={
              investment.selectCompany
            }
          />
        )}

        {investment.status ===
          "loading" && (
          <LoadingSpinner />
        )}

        {investment.status ===
          "error" &&
          investment.error && (
            <ErrorCard
              message={
                investment.error
              }
              onRetry={
                investment.reset
              }
            />
          )}

        {investment.status ===
          "resolved" &&
          investment.report && (
            <InvestmentDashboard
              report={
                investment.report
              }
            />
          )}
      </section>
    </AppLayout>
  );
}