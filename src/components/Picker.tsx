import React, { useState, useEffect } from "react";
import "../index.css";
import { useTheme } from "../hooks/useTheme";

export interface DatePickerProps {
  onChange: (date: Date) => void;
  initialDate?: Date;
}

const DatePicker: React.FC<DatePickerProps> = ({
  onChange,
  initialDate = new Date(),
}) => {
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const theme = useTheme();

  const years = Array.from(
    { length: 50 },
    (_, i) => new Date().getFullYear() - 25 + i
  );
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  useEffect(() => {
    onChange(selectedDate);
  }, [selectedDate, onChange]);

  const handleChange = (type: "year" | "month" | "day", value: number) => {
    const newDate = new Date(selectedDate);
    if (type === "year") newDate.setFullYear(value);
    if (type === "month") newDate.setMonth(value);
    if (type === "day") newDate.setDate(value);
    setSelectedDate(newDate);
  };

  const selectStyle = `
    appearance-none bg-transparent text-center text-xl focus:outline-none
    text-${theme.palette.text} hover:text-${theme.palette.primary}
    transition-colors duration-200
  `;

  return (
    <div 
      className={`flex space-x-4 bg-${theme.palette.background} p-4 rounded-lg`}
      style={{ borderRadius: `${theme.shape.borderRadius}px` }}
    >
      <select
        className={selectStyle}
        value={selectedDate.getFullYear()}
        onChange={(e) => handleChange("year", parseInt(e.target.value))}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      <select
        className={selectStyle}
        value={selectedDate.getMonth()}
        onChange={(e) => handleChange("month", parseInt(e.target.value))}
      >
        {months.map((month, index) => (
          <option key={month} value={index}>
            {month}
          </option>
        ))}
      </select>
      <select
        className={selectStyle}
        value={selectedDate.getDate()}
        onChange={(e) => handleChange("day", parseInt(e.target.value))}
      >
        {days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DatePicker;
