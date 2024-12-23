import "./index.css";

export function Button(props) {
    const {type = "button", onClick, disabled = false, size = "md", variant = "primary", children} = props;
    const className = `my-button my-button--${variant} my-button--${size} ${disabled ? "my-button--disabled" : ""}`;

    return <button type={type} onClick={onClick} className={className} disabled={disabled}> {children} </button>;
}