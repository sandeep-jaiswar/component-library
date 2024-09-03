import React, { InputHTMLAttributes } from "react";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}
declare const Input: React.FC<InputProps>;
export default Input;
