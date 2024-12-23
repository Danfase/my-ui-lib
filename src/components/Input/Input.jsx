import "./Input.css";

export function Input(props) {
  const {
    type = "text",
    defaultValue = "",
    disabled = false,
    label = "Name",
    danger = false,
  } = props;

  const className = `my-input ${danger ? "my-input--danger" : ""}${disabled ? "my-input--disabled" : ""}`;

  const labelClass = `
    my-label 
    ${danger ? "my-label--danger" : ""}
  `;

  return (
      <input
        type={type}
        defaultValue={defaultValue}
        disabled={disabled}
        label={label}
        className={inputClass}
      />
  );
}
