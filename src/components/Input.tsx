import React, { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
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
          {...props}
        />
        <label
          className={`
            absolute left-4 top-3 text-gray-500 transition-all duration-200 pointer-events-none
            ${props.value || props.placeholder ? "text-xs -top-2.5 text-blue-500" : ""}
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
