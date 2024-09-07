import React, { createContext, useContext } from "react";
import { Theme } from "../types/theme";
import defaultTheme from "../constants/defaultTheme";
import { ThemeContext } from "../contexts/theme";

export interface ThemeProviderProps {
  theme?: Theme;
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme = defaultTheme,
  children,
}) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
