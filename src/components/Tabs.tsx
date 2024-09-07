import React, { useState } from "react";
import { useTheme } from "../hooks/useTheme";

export interface Tab {
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  defaultActiveTab?: number;
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultActiveTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const theme = useTheme();

  return (
    <div>
      <div className={`border-b border-${theme.palette.text}`}>
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                ${
                  index === activeTab
                    ? `border-${theme.palette.primary} text-${theme.palette.primary}`
                    : `border-transparent text-${theme.palette.text} hover:text-${theme.palette.primary} hover:border-${theme.palette.action.hover}`
                }
              `}
              onClick={() => setActiveTab(index)}
              style={{ borderRadius: `${theme.shape.borderRadius}px` }}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className={`mt-4 text-${theme.palette.text}`}>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
