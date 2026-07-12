interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

export default function Input({
  placeholder,
  value,
  onChange,
}: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      style={{
        width: "420px",
        padding: "14px",
        borderRadius: "10px",
        border: "1px solid #CBD5E1",
        fontSize: "16px",
        outline: "none",
      }}
    />
  );
}