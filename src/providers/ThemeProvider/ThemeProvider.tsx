import {
  type PropsWithChildren,
  type ReactNode,
  useEffect,
  useState,
} from "react";

import { ThemeContext, type ThemeType } from "@/context/theme-context.ts";

function initialTheme(): ThemeType {
  const localStorageTheme =
    localStorage.getItem("theme") === "light" ? "light" : "dark";
  const windowTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  return localStorageTheme || windowTheme;
}

type Props = PropsWithChildren;
export const ThemeProvider = ({ children }: Props): ReactNode => {
  const [theme, setTheme] = useState<ThemeType>(initialTheme);

  const toggleTheme = () => {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return <ThemeContext value={{ theme, toggleTheme }}>{children}</ThemeContext>;
};
