interface ErrorCardProps {
  message: string;
  onRetry?: () => void;
}

export default function ErrorCard({
  message,
  onRetry,
}: ErrorCardProps) {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "80px 24px",
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
            "1px solid rgba(239,68,68,.18)",
          borderRadius: "24px",
          padding: "40px",
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
              "rgba(239,68,68,.15)",
            border:
              "1px solid rgba(239,68,68,.25)",
            color: "#FCA5A5",
            fontSize: "13px",
            fontWeight: 600,
            marginBottom: "22px",
          }}
        >
          ANALYSIS FAILED
        </div>

        <h2
          style={{
            margin: 0,
            marginBottom: "18px",
            color: "#FAFAFA",
            fontSize: "32px",
            fontWeight: 700,
            letterSpacing: "-0.8px",
          }}
        >
          Unable to Complete Analysis
        </h2>

        <p
          style={{
            margin: 0,
            color: "#A1A1AA",
            lineHeight: 1.9,
            fontSize: "16px",
            maxWidth: "600px",
          }}
        >
          {message}
        </p>

        {onRetry && (
          <button
            onClick={onRetry}
            style={{
              marginTop: "32px",
              padding:
                "16px 28px",
              border: "none",
              borderRadius: "14px",
              background: "#2563EB",
              color: "#FFFFFF",
              fontSize: "15px",
              fontWeight: 600,
              cursor: "pointer",
              transition:
                ".2s ease",
              boxShadow:
                "0 10px 30px rgba(37,99,235,.35)",
            }}
          >
            Retry Analysis
          </button>
        )}
      </div>
    </section>
  );
}