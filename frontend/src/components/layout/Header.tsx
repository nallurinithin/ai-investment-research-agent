export default function Header() {
  return (
    <header>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "28px",
        }}
      >
        <div
          style={{
            width: "58px",
            height: "58px",
            borderRadius: "18px",
            background:
              "linear-gradient(135deg,#2563EB,#1D4ED8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFFFFF",
            fontSize: "26px",
            fontWeight: 700,
            boxShadow:
              "0 18px 40px rgba(37,99,235,.35)",
            flexShrink: 0,
          }}
        >
          E
        </div>

        <div>
          <h1
            style={{
              margin: 0,
              color: "#FAFAFA",
              fontSize: "28px",
              fontWeight: 700,
              letterSpacing: "-0.8px",
            }}
          >
            EquiLens AI
          </h1>

          <p
            style={{
              margin: "6px 0 0",
              color: "#71717A",
              fontSize: "14px",
              letterSpacing: ".5px",
            }}
          >
            AI Equity Research Agent
          </p>
        </div>
      </div>

      <div
        style={{
          background:
            "rgba(255,255,255,.03)",
          border:
            "1px solid rgba(255,255,255,.05)",
          borderRadius: "18px",
          padding: "18px",
        }}
      >
        <div
          style={{
            color: "#FAFAFA",
            fontSize: "14px",
            fontWeight: 600,
            marginBottom: "10px",
          }}
        >
          Research Philosophy
        </div>

        <div
          style={{
            color: "#A1A1AA",
            fontSize: "14px",
            lineHeight: 1.8,
          }}
        >
          Better investment decisions come
          from evidence—not hype. EquiLens
          AI combines company fundamentals,
          financial performance, market
          intelligence, and AI reasoning to
          produce structured research that
          supports informed decision-making.
        </div>
      </div>
    </header>
  );
}