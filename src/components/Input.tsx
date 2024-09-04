import React, { InputHTMLAttributes, useState } from "react";
import "../index.css";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

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
            w-full px-4 py-3 text-base bg-gray-100 border-b-2 focus:outline-none transition-colors duration-200
            ${error ? "border-red-500" : "border-gray-300"}
            ${error ? "focus:border-red-500" : "focus:border-blue-500"}
          `}
          placeholder=" "
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />
        <label
          className={`
            absolute left-4 text-gray-500 transition-all duration-200 pointer-events-none
            ${(isFocused || hasValue) ? "text-xs top-0 text-blue-500" : "top-3"}
          `}
        >
          {label}
        </label>
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
