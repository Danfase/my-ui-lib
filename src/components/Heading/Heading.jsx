import "./Heading.css";

export function Heading(props) {
    const {heading = '1', children} = props;
    const className = `my-heading my-heading__${heading}`;

    return <p className={className}>{children}</p>;
}

export default Heading;