interface ExecutiveSummaryProps {
  summary: string;
}

export default function ExecutiveSummary({
  summary,
}: ExecutiveSummaryProps) {
  return (
    <section
      style={{
        background: "#FFFFFF",
        borderRadius: "14px",
        padding: "24px",
        marginBottom: "24px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
      }}
    >
      <h2
        style={{
          marginTop: 0,
          marginBottom: "18px",
          fontSize: "24px",
          color: "#0F172A",
        }}
      >
        Executive Summary
      </h2>

      <p
        style={{
          color: "#334155",
          lineHeight: 1.8,
          fontSize: "16px",
          margin: 0,
          whiteSpace: "pre-wrap",
        }}
      >
        {summary}
      </p>
    </section>
  );
}