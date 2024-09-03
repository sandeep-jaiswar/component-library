import React from "react";

type AlertVariant = "info" | "success" | "warning" | "error";

export interface AlertProps {
  variant: AlertVariant;
  title: string;
  message?: string;
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ variant, title, message, onClose }) => {
  const variantClasses = {
    info: "bg-blue-500 text-white",
    success: "bg-green-500 text-white",
    warning: "bg-yellow-500 text-white",
    error: "bg-red-500 text-white",
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className={`w-80 rounded-2xl ${variantClasses[variant]} shadow-lg overflow-hidden`}>
        <div className="px-4 py-5">
          <h3 className="text-lg font-semibold text-center mb-2">{title}</h3>
          {message && <p className="text-sm text-center">{message}</p>}
        </div>
        <div className="border-t border-white border-opacity-20">
          {onClose && (
            <button
              className="w-full py-3 text-center text-sm font-semibold focus:outline-none active:bg-black active:bg-opacity-10"
              onClick={onClose}
            >
              OK
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Alert;