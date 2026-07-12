interface FinancialSnapshotProps {
  revenue: number;
  netIncome: number;
  operatingCashFlow: number;
  currentRatio: number;
  returnOnEquity: number;
}

export default function FinancialSnapshot({
  revenue,
  netIncome,
  operatingCashFlow,
  currentRatio,
  returnOnEquity,
}: FinancialSnapshotProps) {
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
          marginBottom: "24px",
        }}
      >
        FINANCIAL SNAPSHOT
      </div>

      <h2
        style={{
          margin: 0,
          marginBottom: "30px",
          color: "#FAFAFA",
          fontSize: "30px",
          fontWeight: 700,
          letterSpacing: "-0.8px",
        }}
      >
        Financial Highlights
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(220px,1fr))",
          gap: "18px",
        }}
      >
        <Metric
          label="Revenue"
          value={`$${revenue.toLocaleString()}`}
        />

        <Metric
          label="Net Income"
          value={`$${netIncome.toLocaleString()}`}
        />

        <Metric
          label="Operating Cash Flow"
          value={`$${operatingCashFlow.toLocaleString()}`}
        />

        <Metric
          label="Current Ratio"
          value={currentRatio.toFixed(2)}
        />

        <Metric
          label="Return on Equity"
          value={`${returnOnEquity.toFixed(2)}%`}
        />
      </div>
    </section>
  );
}

interface MetricProps {
  label: string;
  value: string;
}

function Metric({
  label,
  value,
}: MetricProps) {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "16px",
        background:
          "rgba(255,255,255,0.03)",
        border:
          "1px solid rgba(255,255,255,0.06)",
        transition: "0.2s ease",
      }}
    >
      <div
        style={{
          color: "#71717A",
          fontSize: "12px",
          textTransform: "uppercase",
          letterSpacing: "1px",
          fontWeight: 600,
          marginBottom: "10px",
        }}
      >
        {label}
      </div>

      <div
        style={{
          color: "#FAFAFA",
          fontSize: "22px",
          fontWeight: 700,
          lineHeight: 1.4,
          wordBreak: "break-word",
        }}
      >
        {value}
      </div>
    </div>
  );
}