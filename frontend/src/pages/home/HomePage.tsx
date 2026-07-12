import { useInvestment } from "../../hooks/useInvestment";

import HeroSection from "../../components/home/HeroSection";
import SearchSection from "../../components/home/SearchSection";

import CompanySelector from "../../components/company/CompanySelector";

import LoadingSpinner from "../../components/loading/LoadingSpinner";

import ErrorCard from "../../components/error/ErrorCard";

import InvestmentDashboard from "../../components/dashboard/InvestmentDashboard";

export default function HomePage() {
  const investment = useInvestment();

  return (
    <>
      <HeroSection />

      <SearchSection
        onAnalyze={investment.analyzeCompany}
      />

      {investment.status === "loading" && (
        <LoadingSpinner />
      )}

      {investment.status === "ambiguous" && (
        <CompanySelector
          companies={investment.companies}
          onSelect={investment.selectCompany}
        />
      )}

      {investment.status === "resolved" &&
        investment.report && (
          <InvestmentDashboard
            report={investment.report}
          />
        )}

      {investment.status === "error" &&
        investment.error && (
          <ErrorCard
            message={investment.error}
            onRetry={investment.reset}
          />
        )}
    </>
  );
}