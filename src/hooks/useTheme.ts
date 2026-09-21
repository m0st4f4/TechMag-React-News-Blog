import { useContext } from "react";

import { ThemeContext } from "@/context/theme-context.ts";

export const useTheme = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("ThemeContext must be used within ThemeProvider");
  }
  return themeContext;
};
