interface CompanyProfileCardProps {
  companyName: string;
  symbol: string;
  sector: string;
  industry: string;
  ceo: string;
  marketCap: number;
  employees: number;
  website: string;
}

export default function CompanyProfileCard({
  companyName,
  symbol,
  sector,
  industry,
  ceo,
  marketCap,
  employees,
  website,
}: CompanyProfileCardProps) {
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
        Company Snapshot
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          rowGap: "16px",
          columnGap: "40px",
        }}
      >
        <Info label="Company" value={companyName} />
        <Info label="Ticker" value={symbol} />
        <Info label="Sector" value={sector} />
        <Info label="Industry" value={industry} />
        <Info label="CEO" value={ceo} />
        <Info
          label="Employees"
          value={employees.toLocaleString()}
        />
        <Info
          label="Market Cap"
          value={`$${marketCap.toLocaleString()}`}
        />
        <Info
          label="Website"
          value={website}
        />
      </div>
    </section>
  );
}

interface InfoProps {
  label: string;
  value: string;
}

function Info({
  label,
  value,
}: InfoProps) {
  return (
    <div>
      <div
        style={{
          fontSize: "13px",
          color: "#64748B",
          marginBottom: "4px",
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontWeight: 600,
          color: "#0F172A",
        }}
      >
        {value}
      </div>
    </div>
  );
}