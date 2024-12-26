import "./Tooltip.css";

export function Tooltip(props) {
    const {position = 'top', children} = props;
    const classOneName = `my-tooltip`;
    const classTwoName = `my-tooltiptext my-tooltiptext_${position}`

    return <div className={classOneName}>
        {children}
        <span className={classTwoName}>I am tooltip</span>
    </div>
}

export default Tooltip

