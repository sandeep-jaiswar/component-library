import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";

export interface DropdownOption {
  value: string;
  label: string;
}

export interface DropdownProps {
  options: DropdownOption[];
  placeholder?: string;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select an option",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(
    null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: DropdownOption) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option.value);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className={`bg-${theme.palette.background} relative w-full border border-${theme.palette.text} rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-${theme.palette.primary} focus:border-${theme.palette.primary} sm:text-sm`}
        onClick={() => setIsOpen(!isOpen)}
        style={{ borderRadius: `${theme.shape.borderRadius}px` }}
      >
        <span className={`block truncate text-${theme.palette.text}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className={`h-5 w-5 text-${theme.palette.text}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div 
          className={`absolute z-10 mt-1 w-full bg-${theme.palette.background} shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-${theme.palette.text} ring-opacity-5 overflow-auto focus:outline-none sm:text-sm`}
          style={{ borderRadius: `${theme.shape.borderRadius}px` }}
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={`${
                selectedOption?.value === option.value
                  ? `text-${theme.palette.background} bg-${theme.palette.primary}`
                  : `text-${theme.palette.text}`
              } cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-${theme.palette.action.hover}`}
              onClick={() => handleOptionClick(option)}
            >
              <span
                className={`block truncate ${selectedOption?.value === option.value ? "font-semibold" : "font-normal"}`}
              >
                {option.label}
              </span>
              {selectedOption?.value === option.value && (
                <span className={`absolute inset-y-0 right-0 flex items-center pr-4 text-${theme.palette.primary}`}>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
