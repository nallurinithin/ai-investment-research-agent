import { useState } from "react";

interface SearchSectionProps {
  selectedCompany?: string;

  loading?: boolean;

  onAnalyze: (
    company: string
  ) => Promise<void>;
}

export default function SearchSection({
  selectedCompany = "",
  loading = false,
  onAnalyze,
}: SearchSectionProps) {
  const [company, setCompany] =
    useState(selectedCompany);

  if (
    selectedCompany &&
    selectedCompany !== company
  ) {
    queueMicrotask(() => {
      setCompany(selectedCompany);
    });
  }

  async function handleAnalyze() {
    const value = company.trim();

    if (!value || loading) {
      return;
    }

    await onAnalyze(value);
  }

  return (
    <section
      style={{
        marginTop: "36px",
        marginBottom: "52px",
      }}
    >
      <div
        style={{
          background:
            "rgba(255,255,255,0.04)",
          backdropFilter: "blur(22px)",
          border:
            "1px solid rgba(255,255,255,0.08)",
          borderRadius: "22px",
          padding: "28px",
          display: "flex",
          gap: "18px",
          alignItems: "center",
          boxShadow:
            "0 20px 50px rgba(0,0,0,.20)",
        }}
      >
        <input
          value={company}
          onChange={(e) =>
            setCompany(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              void handleAnalyze();
            }
          }}
          placeholder="Search by company name or ticker (Apple, Microsoft, AAPL...)"
          style={{
            flex: 1,
            background: "#18181B",
            color: "#FAFAFA",
            border:
              "1px solid rgba(255,255,255,.08)",
            borderRadius: "14px",
            padding:
              "18px 22px",
            fontSize: "16px",
            outline: "none",
          }}
        />

        <button
          disabled={loading}
          onClick={() =>
            void handleAnalyze()
          }
          style={{
            padding:
              "18px 28px",
            borderRadius: "14px",
            border: "none",
            background:
              loading
                ? "#27272A"
                : "#2563EB",
            color: "#FFFFFF",
            fontWeight: 600,
            fontSize: "15px",
            cursor: loading
              ? "not-allowed"
              : "pointer",
            transition:
              ".2s ease",
            minWidth: "170px",
          }}
        >
          {loading
            ? "Analyzing..."
            : "Analyze"}
        </button>
      </div>
    </section>
  );
}