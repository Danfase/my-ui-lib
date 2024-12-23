import "./Typography.css";

export function Typography(props) {
  const { textSize = "md", className = "", children } = props;

  // Классы с динамическим текстовым размером
  const textClass = `typography typography--${textSize} ${className}`;

  return <p className={textClass}>{children}</p>;
}
