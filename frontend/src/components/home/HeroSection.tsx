export default function HeroSection() {
  return (
    <section
      style={{
        maxWidth: "900px",
        marginBottom: "24px",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          padding: "8px 16px",
          borderRadius: "999px",
          background:
            "rgba(37,99,235,.12)",
          border:
            "1px solid rgba(37,99,235,.20)",
          color: "#93C5FD",
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: ".5px",
          marginBottom: "18px",
        }}
      >
        EQUILENS AI • EQUITY RESEARCH PLATFORM
      </div>

      <h1
        style={{
          margin: 0,
          color: "#FAFAFA",
          fontSize: "48px",
          fontWeight: 800,
          lineHeight: 1.08,
          letterSpacing: "-2px",
          maxWidth: "760px",
        }}
      >
        Make Better Investment Decisions
      </h1>

      <h2
        style={{
          marginTop: "4px",
          marginBottom: "18px",
          color: "#60A5FA",
          fontSize: "48px",
          fontWeight: 800,
          lineHeight: 1.08,
          letterSpacing: "-2px",
        }}
      >
        Using Evidence, Not Hype
      </h2>

      <p
        style={{
          margin: 0,
          maxWidth: "720px",
          color: "#A1A1AA",
          fontSize: "16px",
          lineHeight: 1.8,
        }}
      >
        Analyze publicly traded companies using
        company fundamentals, financial statements,
        competitor intelligence and market news.
        EquiLens AI consolidates the available
        evidence into a structured research report
        to support informed investment research.
      </p>
    </section>
  );
}