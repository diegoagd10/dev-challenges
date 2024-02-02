import { ButtonIcon } from "./ButtonIcon";

export function Button({
  text,
  variant,
  color,
  size,
  disabled,
  disableShadow = false,
  startIcon,
  endIcon,
}) {
  const className = `sb-button size-${size} ${color} ${
    variant ? variant : ""
  } ${disableShadow ? "disableShadow" : ""} ${disabled ? "disabled" : ""}`;
  return (
    <button className={className}>
      {startIcon && ButtonIcon(startIcon)}
      <span>{text}</span>
      {endIcon && ButtonIcon(endIcon)}
    </button>
  );
}

Button.defaultProps = {
  text: "",
  color: "default",
  size: "md",
  disableShadow: false,
  disabled: false,
};
