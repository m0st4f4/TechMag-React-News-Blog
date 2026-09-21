import { type ComponentProps, type ReactNode } from "react";

import { NavLink } from "react-router";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu.tsx";

import { cn } from "@/lib/utils.ts";

type Props = ComponentProps<typeof NavLink>;

export const SidebarMenuItem = ({
  className = "",
  children,
  ...otherProps
}: Props): ReactNode => {
  return (
    <NavLink
      className={({ isActive }) => {
        return cn(
          className,
          navigationMenuTriggerStyle(),
          isActive ? "text-accent" : "",
          "text-sm w-full justify-start hover:text-accent hover:bg-none"
        );
      }}
      {...otherProps}
    >
      {children}
    </NavLink>
  );
};
