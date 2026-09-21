import { createContext } from "react";

export type ThemeType = "dark" | "light";
type ContextValue = {
  theme: ThemeType;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ContextValue>({
  theme: "light",
  toggleTheme: () => {},
});
