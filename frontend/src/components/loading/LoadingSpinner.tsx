export default function LoadingSpinner() {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "100px 24px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "760px",
          background:
            "rgba(255,255,255,0.04)",
          backdropFilter: "blur(20px)",
          border:
            "1px solid rgba(255,255,255,0.08)",
          borderRadius: "24px",
          padding: "56px",
          textAlign: "center",
          boxShadow:
            "0 24px 60px rgba(0,0,0,.25)",
        }}
      >
        <div
          style={{
            width: "70px",
            height: "70px",
            margin: "0 auto 28px",
            border:
              "5px solid rgba(255,255,255,.08)",
            borderTop:
              "5px solid #2563EB",
            borderRadius: "50%",
            animation:
              "spin .9s linear infinite",
          }}
        />

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
            marginBottom: "22px",
          }}
        >
          ANALYSIS IN PROGRESS
        </div>

        <h2
          style={{
            margin: 0,
            color: "#FAFAFA",
            fontSize: "34px",
            fontWeight: 700,
            letterSpacing: "-0.8px",
          }}
        >
          EquiLens AI is analyzing the company
        </h2>

        <p
          style={{
            margin:
              "20px auto 0",
            maxWidth: "560px",
            color: "#A1A1AA",
            fontSize: "16px",
            lineHeight: 1.9,
          }}
        >
          Collecting company fundamentals,
          financial statements,
          competitor intelligence,
          recent market news,
          and generating an
          evidence-based investment
          recommendation.
        </p>

        <div
          style={{
            marginTop: "36px",
            display: "flex",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                background: "#2563EB",
                animation: `pulse 1.4s ${
                  i * 0.2
                }s infinite`,
              }}
            />
          ))}
        </div>

        <style>
          {`
            @keyframes spin {
              from {
                transform: rotate(0deg);
              }
              to {
                transform: rotate(360deg);
              }
            }

            @keyframes pulse {
              0%,100%{
                opacity:.3;
                transform:scale(.8);
              }

              50%{
                opacity:1;
                transform:scale(1.2);
              }
            }
          `}
        </style>
      </div>
    </section>
  );
}