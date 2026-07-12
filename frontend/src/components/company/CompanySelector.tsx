import type { CompanyOption } from "../../types/company";

interface CompanySelectorProps {
  companies: CompanyOption[];
  onSelect: (ticker: string) => void;
}

export default function CompanySelector({
  companies,
  onSelect,
}: CompanySelectorProps) {
  return (
    <section
      style={{
        width: "700px",
        margin: "40px auto",
      }}
    >
      <h2>Select Company</h2>

      <p>
        Multiple companies were found. Choose the correct company to continue.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          marginTop: "20px",
        }}
      >
        {companies.map((company) => (
          <button
            key={company.symbol}
            onClick={() => onSelect(company.symbol)}
            style={{
              padding: "16px",
              textAlign: "left",
              borderRadius: "10px",
              border: "1px solid #CBD5E1",
              cursor: "pointer",
              background: "#FFFFFF",
            }}
          >
            <strong>
              {company.companyName} ({company.symbol})
            </strong>

            <br />

            <small>{company.exchange}</small>
          </button>
        ))}
      </div>
    </section>
  );
}