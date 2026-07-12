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
        gridTemplateColumns: "1fr 1fr",
        gap: "24px",
        marginBottom: "24px",
      }}
    >
      {/* Strengths */}

      <div
        style={{
          background: "#F0FDF4",
          borderRadius: "14px",
          padding: "24px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{
            marginTop: 0,
            marginBottom: "20px",
            color: "#166534",
          }}
        >
          Strengths
        </h2>

        <ul
          style={{
            margin: 0,
            paddingLeft: "20px",
            lineHeight: 1.8,
          }}
        >
          {strengths.length === 0 ? (
            <li>No strengths available.</li>
          ) : (
            strengths.map((strength, index) => (
              <li key={index}>
                {strength}
              </li>
            ))
          )}
        </ul>
      </div>

      {/* Risks */}

      <div
        style={{
          background: "#FEF2F2",
          borderRadius: "14px",
          padding: "24px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{
            marginTop: 0,
            marginBottom: "20px",
            color: "#991B1B",
          }}
        >
          Risks
        </h2>

        <ul
          style={{
            margin: 0,
            paddingLeft: "20px",
            lineHeight: 1.8,
          }}
        >
          {risks.length === 0 ? (
            <li>No risks available.</li>
          ) : (
            risks.map((risk, index) => (
              <li key={index}>
                {risk}
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
}