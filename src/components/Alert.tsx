import React from "react";
import "../index.css";

type AlertVariant = "info" | "success" | "warning" | "error";

export interface AlertProps {
  variant: AlertVariant;
  title: string;
  message?: string;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ variant, title, message, onClose }) => {
  const variantClasses = {
    info: "bg-blue-100 text-blue-800 border-blue-500",
    success: "bg-green-100 text-green-800 border-green-500",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-500",
    error: "bg-red-100 text-red-800 border-red-500",
  };

  const iconMap = {
    info: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        />
      </svg>
    ),
    success: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    warning: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
    error: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
          clipRule="evenodd"
        />
      </svg>
    ),
  };

  return (
    <div className="fixed inset-x-0 bottom-0 px-4 pb-4 sm:px-6 sm:pb-6">
      <div
        className={`max-w-md w-full mx-auto ${variantClasses[variant]} border-l-4 rounded-md shadow-md`}
      >
        <div className="p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">{iconMap[variant]}</div>
            <div className="ml-3 w-0 flex-1">
              <p className="text-sm font-medium">{title}</p>
              {message && <p className="mt-1 text-sm opacity-90">{message}</p>}
            </div>
            {onClose && (
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  className="inline-flex text-current opacity-75 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current rounded transition-opacity duration-150"
                  onClick={onClose}
                >
                  <span className="sr-only">Close</span>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
