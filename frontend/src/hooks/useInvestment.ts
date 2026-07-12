import { useState } from "react";

import {
  researchCompany,
  researchCompanyByTicker,
} from "../services/investment.service";

import type {
  CompanyOption,
} from "../types/company";

import type {
  InvestmentReport,
  InvestmentStatus,
} from "../types/investment";

export function useInvestment() {
  const [status, setStatus] =
    useState<InvestmentStatus>("idle");

  const [report, setReport] =
    useState<InvestmentReport | null>(null);

  const [companies, setCompanies] =
    useState<CompanyOption[]>([]);

  const [error, setError] =
    useState<string | null>(null);

  async function analyzeCompany(
    company: string
  ) {
    setStatus("loading");
    setError(null);
    setCompanies([]);
    setReport(null);

    try {
      const response =
        await researchCompany(company);

      switch (response.status) {
        case "success":
          setReport(response.data);
          setStatus("resolved");
          return;

        case "ambiguity":
          setCompanies(response.data);
          setStatus("ambiguous");
          return;

        case "error":
        default:
          setError(response.message);
          setStatus("error");
          return;
      }
    } catch {
      setError("Unable to connect to server.");
      setStatus("error");
    }
  }

  async function selectCompany(
    ticker: string
  ) {
    setStatus("loading");
    setError(null);

    try {
      const response =
        await researchCompanyByTicker(
          ticker
        );

      switch (response.status) {
        case "success":
          setReport(response.data);
          setStatus("resolved");
          return;

        case "error":
        default:
          setError(response.message);
          setStatus("error");
          return;
      }
    } catch {
      setError(
        "Unable to complete analysis."
      );

      setStatus("error");
    }
  }

  function reset() {
    setStatus("idle");
    setCompanies([]);
    setReport(null);
    setError(null);
  }

  return {
    status,
    report,
    companies,
    error,
    analyzeCompany,
    selectCompany,
    reset,
  };
}