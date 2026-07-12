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
        width: "650px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "10px",
        background: "#FEE2E2",
        color: "#991B1B",
      }}
    >
      <h3>Error</h3>

      <p>{message}</p>

      {onRetry && (
        <button
          onClick={onRetry}
          style={{
            marginTop: "16px",
          }}
        >
          Retry
        </button>
      )}
    </section>
  );
}