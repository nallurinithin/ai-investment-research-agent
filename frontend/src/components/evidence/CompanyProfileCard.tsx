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
        COMPANY SNAPSHOT
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
        {companyName}
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(260px,1fr))",
          gap: "18px",
        }}
      >
        <Info
          label="Ticker"
          value={symbol}
        />

        <Info
          label="Sector"
          value={sector}
        />

        <Info
          label="Industry"
          value={industry}
        />

        <Info
          label="Chief Executive Officer"
          value={ceo}
        />

        <Info
          label="Employees"
          value={employees.toLocaleString()}
        />

        <Info
          label="Market Capitalization"
          value={`$${marketCap.toLocaleString()}`}
        />

        <WebsiteInfo
          website={website}
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
    <div
      style={{
        padding: "20px",
        borderRadius: "16px",
        background:
          "rgba(255,255,255,0.03)",
        border:
          "1px solid rgba(255,255,255,0.06)",
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
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: 1.6,
          wordBreak: "break-word",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function WebsiteInfo({
  website,
}: {
  website: string;
}) {
  return (
    <div
      style={{
        padding: "20px",
        borderRadius: "16px",
        background:
          "rgba(255,255,255,0.03)",
        border:
          "1px solid rgba(255,255,255,0.06)",
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
        Website
      </div>

      <a
        href={website}
        target="_blank"
        rel="noreferrer"
        style={{
          color: "#60A5FA",
          textDecoration: "none",
          fontWeight: 600,
          wordBreak: "break-word",
        }}
      >
        {website}
      </a>
    </div>
  );
}