interface RecommendationCardProps {
  recommendation: string;
  confidence: number;
}

export default function RecommendationCard({
  recommendation,
  confidence,
}: RecommendationCardProps) {
  const isPositive =
    recommendation.toLowerCase().includes("research") ||
    recommendation.toLowerCase().includes("buy") ||
    recommendation.toLowerCase().includes("hold");

  const background = isPositive
    ? "#DCFCE7"
    : "#FEE2E2";

  const color = isPositive
    ? "#166534"
    : "#991B1B";

  return (
    <section
      style={{
        background,
        color,
        padding: "28px",
        borderRadius: "14px",
        marginBottom: "24px",
        boxShadow:
          "0 8px 20px rgba(0,0,0,0.08)",
      }}
    >
      <p
        style={{
          fontSize: "14px",
          fontWeight: 600,
          letterSpacing: "1px",
          textTransform: "uppercase",
          marginBottom: "12px",
        }}
      >
        Recommendation
      </p>

      <h2
        style={{
          margin: 0,
          fontSize: "34px",
          fontWeight: 700,
        }}
      >
        {recommendation}
      </h2>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <p
          style={{
            marginBottom: "8px",
            fontWeight: 600,
          }}
        >
          Confidence
        </p>

        <div
          style={{
            width: "100%",
            height: "12px",
            background: "#E5E7EB",
            borderRadius: "999px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              width: `${confidence}%`,
              height: "100%",
              background: "#2563EB",
            }}
          />
        </div>

        <p
          style={{
            marginTop: "8px",
            fontWeight: 600,
          }}
        >
          {confidence}%
        </p>
      </div>
    </section>
  );
}