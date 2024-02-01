
export function Button({ text = "", variant, color = "default", disableShadow = false, disabled }) {
    let className = `sb-button ${color ? color : "default"} ${variant ? variant : ""} ${disableShadow ? "disableShadow" : ""} ${disabled ? "disabled" : ""}`;
    return <button className={className}>{text}</button>;
}
