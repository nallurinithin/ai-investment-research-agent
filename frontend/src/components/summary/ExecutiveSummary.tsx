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
        borderRadius: "18px",
        padding: "28px 32px",
        boxShadow:
          "0 12px 30px rgba(15,23,42,0.08)",
      }}
    >
      <p
        style={{
          margin: 0,
          marginBottom: "10px",
          color: "#64748B",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "1px",
          fontSize: "14px",
        }}
      >
        Executive Summary
      </p>

      <p
        style={{
          margin: 0,
          color: "#1E293B",
          fontSize: "17px",
          lineHeight: 1.9,
          textAlign: "justify",
        }}
      >
        {summary}
      </p>
    </section>
  );
}