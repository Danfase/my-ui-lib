import "./Tooltip.css";

export function Tooltip(props) {
    const {position = 'top'} = props;
    const classOneName = `my-tooltip`;
    const classTwoName = `my-tooltiptext my-tooltiptext_${position}`

    return <div className={classOneName}>
        <span className={classTwoName}></span>
    </div>
}

export default Tooltip

