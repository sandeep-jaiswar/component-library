import React from "react";
import "../index.css";

export interface ToggleProps {
  isOn: boolean;
  onToggle: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ isOn, onToggle }) => {
  return (
    <div
      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer ${
        isOn ? "bg-green-400" : "bg-gray-300"
      }`}
      onClick={onToggle}
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
