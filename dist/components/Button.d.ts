import React from "react";
type ButtonVariant = "contained" | "outlined" | "text";
type ButtonColor = "primary" | "secondary" | "error" | "warning" | "info" | "success";
type ButtonSize = "small" | "medium" | "large";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    color?: ButtonColor;
    size?: ButtonSize;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
