interface Competitor {
  symbol: string;
  companyName: string;
  price: number;
  marketCap: number;
}

interface CompetitorSnapshotProps {
  competitors: Competitor[];
}

export default function CompetitorSnapshot({
  competitors,
}: CompetitorSnapshotProps) {
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
          marginBottom: "20px",
          color: "#0F172A",
        }}
      >
        Competitor Snapshot
      </h2>

      {competitors.length === 0 ? (
        <p
          style={{
            color: "#64748B",
            margin: 0,
          }}
        >
          No competitor information available.
        </p>
      ) : (
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr
              style={{
                background: "#F8FAFC",
              }}
            >
              <th style={headerStyle}>Company</th>
              <th style={headerStyle}>Ticker</th>
              <th style={headerStyle}>Price</th>
              <th style={headerStyle}>Market Cap</th>
            </tr>
          </thead>

          <tbody>
            {competitors.map((company) => (
              <tr key={company.symbol}>
                <td style={cellStyle}>
                  {company.companyName}
                </td>

                <td style={cellStyle}>
                  {company.symbol}
                </td>

                <td style={cellStyle}>
                  ${company.price.toFixed(2)}
                </td>

                <td style={cellStyle}>
                  ${company.marketCap.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}

const headerStyle = {
  textAlign: "left" as const,
  padding: "14px",
  borderBottom: "1px solid #E2E8F0",
  color: "#334155",
};

const cellStyle = {
  padding: "14px",
  borderBottom: "1px solid #F1F5F9",
  color: "#0F172A",
};