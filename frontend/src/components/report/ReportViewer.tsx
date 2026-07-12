import { useState } from "react";

import { downloadPdfReport } from "../../services/investment.service";

import type { InvestmentEvidence } from "../../types/investment";
import type { InvestmentAnalysis } from "../../types/analysis";

interface ReportViewerProps {
  financialEvidence: InvestmentEvidence;
  investmentAnalysis: InvestmentAnalysis;
}

export default function ReportViewer({
  financialEvidence,
  investmentAnalysis,
}: ReportViewerProps) {
  const [downloading, setDownloading] =
    useState(false);

  async function handleDownload() {
    if (downloading) {
      return;
    }

    try {
      setDownloading(true);

      await downloadPdfReport(
        financialEvidence,
        investmentAnalysis
      );
    } catch (error) {
      console.error(error);

      alert(
        "Unable to generate PDF report."
      );
    } finally {
      setDownloading(false);
    }
  }

  return (
    <section
      style={{
        background:
          "rgba(255,255,255,0.04)",
        backdropFilter: "blur(20px)",
        border:
          "1px solid rgba(255,255,255,0.08)",
        borderRadius: "24px",
        padding: "36px",
        boxShadow:
          "0 24px 60px rgba(0,0,0,.25)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems: "center",
          gap: "28px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            flex: 1,
            minWidth: "320px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: "999px",
              background:
                "rgba(37,99,235,.15)",
              border:
                "1px solid rgba(37,99,235,.25)",
              color: "#93C5FD",
              fontSize: "13px",
              fontWeight: 600,
              marginBottom: "22px",
            }}
          >
            EXPORT REPORT
          </div>

          <h2
            style={{
              margin: 0,
              marginBottom: "14px",
              color: "#FAFAFA",
              fontSize: "30px",
              fontWeight: 700,
              letterSpacing: "-0.8px",
            }}
          >
            Investment Research Report
          </h2>

          <p
            style={{
              margin: 0,
              color: "#A1A1AA",
              lineHeight: 1.9,
              maxWidth: "620px",
            }}
          >
            Download a professionally
            formatted PDF containing the
            AI recommendation, executive
            summary, financial evidence,
            company snapshot, competitor
            analysis, and market
            intelligence.
          </p>
        </div>

        <button
          onClick={() =>
            void handleDownload()
          }
          disabled={downloading}
          style={{
            padding:
              "18px 32px",
            borderRadius: "16px",
            border: "none",
            cursor: downloading
              ? "not-allowed"
              : "pointer",
            background:
              downloading
                ? "#27272A"
                : "#2563EB",
            color: "#FFFFFF",
            fontWeight: 600,
            fontSize: "16px",
            minWidth: "220px",
            transition:
              ".2s ease",
            boxShadow:
              "0 10px 30px rgba(37,99,235,.35)",
          }}
        >
          {downloading
            ? "Generating PDF..."
            : "📄 Download PDF"}
        </button>
      </div>
    </section>
  );
}