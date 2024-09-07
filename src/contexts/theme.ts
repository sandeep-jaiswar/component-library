import { createContext } from "react";
import { Theme } from "../types/theme";
import defaultTheme from "../constants/defaultTheme";

export const ThemeContext = createContext<Theme>(defaultTheme);
