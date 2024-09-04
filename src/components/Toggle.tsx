import React, { useState } from "react";
import "../index.css";

export interface ToggleProps {
  defaultOn?: boolean;
  onChange?: (isOn: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ defaultOn = false, onChange }) => {
  const [isOn, setIsOn] = useState(defaultOn);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onChange) {
      onChange(newState);
    }
  };

  return (
    <div
      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${
        isOn ? "bg-green-400" : "bg-gray-300"
      }`}
      onClick={handleToggle}
    >
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          isOn ? "translate-x-6" : ""
        }`}
      ></div>
    </div>
  );
};

export default Toggle;
