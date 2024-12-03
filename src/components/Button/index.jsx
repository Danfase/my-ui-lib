import "./index.css";

export function Button(props) {
    const {variant = "primary", children} = props;

    const className = `my-button my-button--${variant}`;

    return <button className="my-button">{children}</button>;
}