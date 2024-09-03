import React from "react";
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

const Button: React.FC<ButtonProps> = ({
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
    "font-semibold rounded-full focus:outline-none active:opacity-80 transition-all duration-200";

  const variantClasses = {
    filled: `bg-${color}-500 text-white`,
    tinted: `bg-${color}-100 text-${color}-500`,
    gray: "bg-gray-200 text-gray-800",
  };

  const sizeClasses = {
    small: "px-3 py-1.5 text-xs",
    medium: "px-4 py-2 text-sm",
    large: "px-5 py-2.5 text-base",
  };

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${
    sizeClasses[size]
  } ${className || ""}`;

  return (
    <button className={buttonClasses} {...props}>
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}Test
      {endIcon && <span className="ml-2">{endIcon}</span>}
    </button>
  );
};

export default Button;
