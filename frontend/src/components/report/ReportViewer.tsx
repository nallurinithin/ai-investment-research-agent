import { useState } from "react";

interface ReportViewerProps {
  report: string;
}

export default function ReportViewer({
  report,
}: ReportViewerProps) {
  const [expanded, setExpanded] =
    useState(false);

  return (
    <section
      style={{
        background: "#FFFFFF",
        borderRadius: "14px",
        padding: "24px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        marginBottom: "24px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            margin: 0,
            color: "#0F172A",
          }}
        >
          Complete AI Research Report
        </h2>

        <button
          onClick={() =>
            setExpanded(!expanded)
          }
          style={{
            padding: "10px 18px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: "#2563EB",
            color: "#FFFFFF",
            fontWeight: 600,
          }}
        >
          {expanded
            ? "Hide Report"
            : "View Full Report"}
        </button>
      </div>

      {expanded && (
        <div
          style={{
            background: "#F8FAFC",
            border: "1px solid #E2E8F0",
            borderRadius: "10px",
            padding: "20px",
            maxHeight: "600px",
            overflowY: "auto",
          }}
        >
          <pre
            style={{
              margin: 0,
              whiteSpace: "pre-wrap",
              fontFamily:
                "Consolas, monospace",
              lineHeight: 1.8,
              color: "#334155",
            }}
          >
            {report}
          </pre>
        </div>
      )}
    </section>
  );
}