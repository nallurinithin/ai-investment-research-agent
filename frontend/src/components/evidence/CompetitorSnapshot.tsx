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
        MARKET INTELLIGENCE
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
        Top Competitors
      </h2>

      {competitors.length === 0 ? (
        <p
          style={{
            margin: 0,
            color: "#A1A1AA",
          }}
        >
          No competitor information available.
        </p>
      ) : (
        <div
          style={{
            overflowX: "auto",
            borderRadius: "18px",
            border:
              "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "700px",
            }}
          >
            <thead>
              <tr
                style={{
                  background:
                    "rgba(255,255,255,0.03)",
                }}
              >
                <HeaderCell>
                  Company
                </HeaderCell>

                <HeaderCell>
                  Symbol
                </HeaderCell>

                <HeaderCell align="right">
                  Share Price
                </HeaderCell>

                <HeaderCell align="right">
                  Market Cap
                </HeaderCell>
              </tr>
            </thead>

            <tbody>
              {competitors.map(
                (company) => (
                  <tr
                    key={
                      company.symbol
                    }
                    style={{
                      borderTop:
                        "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <Cell>
                      <div
                        style={{
                          color:
                            "#FAFAFA",
                          fontWeight: 600,
                        }}
                      >
                        {
                          company.companyName
                        }
                      </div>
                    </Cell>

                    <Cell>
                      <span
                        style={{
                          color:
                            "#60A5FA",
                          fontWeight: 600,
                        }}
                      >
                        {
                          company.symbol
                        }
                      </span>
                    </Cell>

                    <Cell align="right">
                      $
                      {company.price.toLocaleString(
                        undefined,
                        {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }
                      )}
                    </Cell>

                    <Cell align="right">
                      $
                      {company.marketCap.toLocaleString()}
                    </Cell>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

function HeaderCell({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <th
      style={{
        padding: "18px 22px",
        color: "#71717A",
        textTransform: "uppercase",
        fontSize: "12px",
        letterSpacing: "1px",
        fontWeight: 600,
        textAlign: align,
      }}
    >
      {children}
    </th>
  );
}

function Cell({
  children,
  align = "left",
}: {
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <td
      style={{
        padding: "20px 22px",
        color: "#D4D4D8",
        textAlign: align,
      }}
    >
      {children}
    </td>
  );
}