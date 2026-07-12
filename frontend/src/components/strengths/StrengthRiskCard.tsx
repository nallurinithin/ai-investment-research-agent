interface StrengthRiskCardProps {
  strengths: string[];
  risks: string[];
}

export default function StrengthRiskCard({
  strengths,
  risks,
}: StrengthRiskCardProps) {
  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(420px,1fr))",
        gap: "28px",
      }}
    >
      <Card
        title="Key Strengths"
        accent="#10B981"
        items={strengths}
        emptyMessage="No significant strengths identified."
      />

      <Card
        title="Key Risks"
        accent="#EF4444"
        items={risks}
        emptyMessage="No significant risks identified."
      />
    </section>
  );
}

interface CardProps {
  title: string;
  accent: string;
  items: string[];
  emptyMessage: string;
}

function Card({
  title,
  accent,
  items,
  emptyMessage,
}: CardProps) {
  return (
    <section
      style={{
        background:
          "rgba(255,255,255,0.04)",
        backdropFilter: "blur(20px)",
        border:
          "1px solid rgba(255,255,255,0.08)",
        borderRadius: "24px",
        padding: "32px",
        boxShadow:
          "0 24px 60px rgba(0,0,0,.25)",
      }}
    >
      <div
        style={{
          display: "inline-block",
          padding: "8px 14px",
          borderRadius: "999px",
          background: `${accent}20`,
          border: `1px solid ${accent}55`,
          color: accent,
          fontSize: "13px",
          fontWeight: 600,
          marginBottom: "22px",
        }}
      >
        {title.toUpperCase()}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        {items.length === 0 ? (
          <p
            style={{
              margin: 0,
              color: "#A1A1AA",
              lineHeight: 1.8,
            }}
          >
            {emptyMessage}
          </p>
        ) : (
          items.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
              }}
            >
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  marginTop: "8px",
                  borderRadius: "999px",
                  background: accent,
                  flexShrink: 0,
                }}
              />

              <p
                style={{
                  margin: 0,
                  color: "#D4D4D8",
                  lineHeight: 1.8,
                  fontSize: "15px",
                }}
              >
                {item}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}