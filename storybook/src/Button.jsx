import { ButtonIcon } from "./ButtonIcon";
import { classNames } from "./ClassNamesFactory";

export function Button({
  text,
  variant,
  color,
  size,
  disabled,
  disableShadow,
  startIcon,
  endIcon,
  showHoverStyle,
}) {
  const className = classNames("sb-button", `size-${size}`, color, variant)
    .addIf(disableShadow, "disableShadow")
    .addIf(disabled, "disabled")
    .addIf(showHoverStyle, "hover")
    .build();

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
  showHoverStyle: false,
};
