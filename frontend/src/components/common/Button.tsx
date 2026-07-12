interface ButtonProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit";
}

export default function Button({
  label,
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "14px 28px",
        borderRadius: "10px",
        border: "none",
        cursor: disabled ? "not-allowed" : "pointer",
        backgroundColor: "#2563EB",
        color: "#FFFFFF",
        fontSize: "16px",
        fontWeight: 600,
        transition: "0.2s",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {label}
    </button>
  );
}