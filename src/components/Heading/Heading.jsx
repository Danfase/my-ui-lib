import "./Heading.css";

export function Heading(props) {
    const {heading = '1'} = props;
    const className = `my-heading my-heading--${heading}`;

    return <p className={className}></p>;
}

export default Heading;