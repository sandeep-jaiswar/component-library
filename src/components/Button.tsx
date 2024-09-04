import React, { useMemo } from "react";
import "../index.css";

type ButtonVariant = "filled" | "tinted" | "gray";
type ButtonColor = "blue" | "green" | "red" | "yellow" | "gray";
type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: ButtonSize;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = React.memo(
  ({
    variant = "filled",
    color = "blue",
    size = "medium",
    startIcon,
    endIcon,
    children,
    className,
    ...props
  }) => {
    const baseClasses =
      "font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 active:opacity-80 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";

    const variantClasses = useMemo(() => {
      switch (variant) {
        case "filled":
          return `bg-${color}-100 text-${color}-500 hover:bg-${color}-600 focus:ring-${color}-500`;
        case "tinted":
          return `bg-${color}-100 text-${color}-700 hover:bg-${color}-200 focus:ring-${color}-400`;
        case "gray":
          return "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400";
        default:
          return "";
      }
    }, [color, variant]);

    const sizeClasses = {
      small: "px-3 py-1.5 text-xs",
      medium: "px-4 py-2 text-sm",
      large: "px-5 py-2.5 text-base",
    };

    const buttonClasses = useMemo(
      () =>
        `${baseClasses} ${variantClasses} ${sizeClasses[size]} ${className || ""}`.trim(),
      [baseClasses, variantClasses, size, className]
    );

    return (
      <button className={buttonClasses} {...props}>
        {startIcon && (
          <span className="mr-2 inline-flex items-center">{startIcon}</span>
        )}
        {children}
        {endIcon && (
          <span className="ml-2 inline-flex items-center">{endIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
