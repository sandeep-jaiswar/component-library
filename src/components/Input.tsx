import React, { InputHTMLAttributes, useState } from "react";
import "../index.css";
import { useTheme } from "../hooks/useTheme";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const theme = useTheme();

  const handleFocus = () => setIsFocused(true);
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setHasValue(e.target.value !== "");
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value !== "");
    if (props.onChange) {
      props.onChange(e);
    }
  };

  return (
    <div className="mb-4">
      <div className="relative">
        <input
          className={`
            w-full px-4 py-3 text-base bg-${theme.palette.background} border-b-2 focus:outline-none transition-colors duration-200
            ${error ? `border-${theme.palette.error}` : `border-${theme.palette.text}`}
            ${error ? `focus:border-${theme.palette.error}` : `focus:border-${theme.palette.primary}`}
          `}
          placeholder=" "
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          style={{ borderRadius: `${theme.shape.borderRadius}px` }}
          {...props}
        />
        <label
          className={`
            absolute left-4 text-${theme.palette.text} transition-all duration-200 pointer-events-none
            ${(isFocused || hasValue) ? `text-xs top-0 text-${theme.palette.primary}` : "top-3"}
          `}
        >
          {label}
        </label>
      </div>
      {error && <p className={`mt-1 text-sm text-${theme.palette.error}`}>{error}</p>}
    </div>
  );
};

export default Input;
