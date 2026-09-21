import { type ReactNode } from "react";

import { Button } from "@/components/ui/button.tsx";

import { useTheme } from "@/hooks/useTheme.ts";

import MingcuteMoonStarsLine from "@/icons/MingcuteMoonStarsLine.tsx";
import MingcuteSunLine from "@/icons/MingcuteSunLine.tsx";

type Props = {
  className?: string;
};

export const ThemeToggle = ({ className = "" }: Props): ReactNode => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={className}>
      <Button variant="outline" size="icon" onClick={toggleTheme}>
        {theme === "light" ? <MingcuteMoonStarsLine /> : <MingcuteSunLine />}
      </Button>
    </div>
  );
};
