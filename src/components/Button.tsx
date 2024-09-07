import React, { useMemo } from "react";
import "../index.css";
import { useTheme } from "../hooks/useTheme";

export type ButtonVariant = "filled" | "tinted" | "gray";
export type ButtonColor =
  | "primary"
  | "secondary"
  | "error"
  | "warning"
  | "info"
  | "success";
export type ButtonSize = "small" | "medium" | "large";

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
    color = "primary",
    size = "medium",
    startIcon,
    endIcon,
    children,
    className,
    ...props
  }) => {
    const theme = useTheme();

    const baseClasses = useMemo(
      () => `
      font-semibold 
      rounded-full 
      focus:outline-none 
      focus:ring-2 
      focus:ring-offset-2 
      active:opacity-80 
      transition-all 
      duration-200 
      disabled:opacity-50 
      disabled:cursor-not-allowed
    `,
      []
    );

    const variantClasses = useMemo(() => {
      switch (variant) {
        case "filled":
          return `
            bg-[${theme.palette[color]}]
            text-[${theme.palette.background}]
            hover:bg-[${theme.palette[color]}]
            focus:ring-[${theme.palette[color]}]
          `;
        case "tinted":
          return `
            bg-[${theme.palette[color]}]
            text-[${theme.palette[color]}]
            hover:bg-[${theme.palette[color]}]
            focus:ring-[${theme.palette[color]}]
          `;
        case "gray":
          return `
            bg-gray-200
            text-gray-800
            hover:bg-gray-300
            focus:ring-gray-400
          `;
        default:
          return `
            bg-[${theme.palette[color]}]
            text-[${theme.palette[color]}]
            hover:bg-[${theme.palette[color]}]
            focus:ring-[${theme.palette[color]}]
          `;
      }
    }, [color, variant, theme]);

    const sizeClasses = useMemo(
      () => ({
        small: `px-3 py-1.5 text-[${theme.typography.fontSize.small}]`,
        medium: `px-4 py-2 text-[${theme.typography.fontSize.medium}]`,
        large: `px-5 py-2.5 text-[${theme.typography.fontSize.large}]`,
      }),
      [theme]
    );

    const buttonClasses = useMemo(
      () =>
        `${baseClasses} ${variantClasses} ${sizeClasses[size]} ${className || ""}`.trim(),
      [baseClasses, variantClasses, sizeClasses, size, className]
    );

    const bgColor = useMemo(() => {
      switch (variant) {
        case "filled":
          return theme.palette[color];
        case "tinted":
          return theme.palette[color];
        case "gray":
          return "gray-200";
        default:
          return theme.palette[color];
      }
    }, [color, variant, theme]);

    return (
      <button
        className={buttonClasses}
        style={{
          fontFamily: theme.typography.fontFamily,
          borderRadius: `${theme.shape.borderRadius}px`,
          backgroundColor: bgColor,
        }}
        {...props}
      >
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
