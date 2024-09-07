import React, { useState } from "react";
import "../index.css";
import { useTheme } from "../hooks/useTheme";

export interface ToggleProps {
  defaultOn?: boolean;
  onChange?: (isOn: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ defaultOn = false, onChange }) => {
  const [isOn, setIsOn] = useState(defaultOn);
  const theme = useTheme();

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onChange) {
      onChange(newState);
    }
  };

  return (
    <div
      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer`}
      style={{
        backgroundColor: isOn ? theme.palette.primary : theme.palette.action.hover,
        borderRadius: `${theme.shape.borderRadius}px`,
      }}
      onClick={handleToggle}
    >
      <div
        className={`w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out`}
        style={{
          backgroundColor: theme.palette.background,
          transform: isOn ? 'translateX(1.5rem)' : 'translateX(0)',
        }}
      ></div>
    </div>
  );
};

export default Toggle;
