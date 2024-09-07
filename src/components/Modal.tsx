import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";
import { useTheme } from "../hooks/useTheme";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-${theme.palette.background} bg-opacity-50`}>
      <div
        ref={modalRef}
        className={`bg-${theme.palette.background} rounded-2xl shadow-xl w-full max-w-md transform transition-all duration-300 ease-in-out`}
        onClick={(e) => e.stopPropagation()}
        style={{ borderRadius: `${theme.shape.borderRadius}px` }}
      >
        <div className={`flex justify-between items-center p-6 border-b border-${theme.palette.text}`}>
          <h2 className={`text-xl font-semibold text-${theme.palette.text}`}>{title}</h2>
          <button
            onClick={onClose}
            className={`text-${theme.palette.text} hover:text-${theme.palette.primary} transition-colors duration-200`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="p-6">{children}</div>
        {footer && (
          <div className={`flex justify-end space-x-2 p-6 border-t border-${theme.palette.text}`}>
            {footer}
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
