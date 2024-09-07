import React, { useState, useRef, useEffect } from "react";
import { useTheme } from "../hooks/useTheme";

export interface TooltipProps {
  content: string;
  children: React.ReactElement;
  position?: "top" | "bottom" | "left" | "right";
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        targetRef.current &&
        !targetRef.current.contains(event.target as Node)
      ) {
        setIsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  };

  const arrowClasses = {
    top: "top-full left-1/2 transform -translate-x-1/2 -translate-y-1",
    bottom: "bottom-full left-1/2 transform -translate-x-1/2 translate-y-1",
    left: "left-full top-1/2 transform -translate-y-1/2 -translate-x-1",
    right: "right-full top-1/2 transform -translate-y-1/2 translate-x-1",
  };

  return (
    <div className="relative inline-block" ref={targetRef}>
      {React.cloneElement(children, {
        onMouseEnter: () => setIsVisible(true),
        onMouseLeave: () => setIsVisible(false),
        onClick: () => setIsVisible(!isVisible),
      })}
      {isVisible && (
        <div
          ref={tooltipRef}
          className={`absolute z-10 px-3 py-2 text-sm font-medium transition-opacity duration-300 ${positionClasses[position]}`}
          role="tooltip"
          style={{
            backgroundColor: theme.palette.background,
            color: theme.palette.text,
            borderRadius: `${theme.shape.borderRadius}px`,
            boxShadow: theme.shadows[1],
          }}
        >
          {content}
          <div
            className={`absolute w-2 h-2 transform rotate-45 ${arrowClasses[position]}`}
            style={{
              backgroundColor: theme.palette.background,
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
