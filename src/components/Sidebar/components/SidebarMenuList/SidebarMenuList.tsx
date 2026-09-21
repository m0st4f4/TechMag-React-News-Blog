import { type ReactNode } from "react";

import { SidebarMenuItem } from "@/components/Sidebar/components/SidebarMenuItem/SidebarMenuItem.tsx";

import type { SidebarNavigationType } from "@/types/navigation.types.ts";

type Props = {
  className?: string;
  items?: SidebarNavigationType[];
};

export const SidebarMenuList = ({
  className = "",
  items,
}: Props): ReactNode => {
  return (
    <ul className={className}>
      {items?.map((item) => {
        return (
          <li key={item.href} className="mbe-2 last:mbe-0">
            <SidebarMenuItem
              to={{
                pathname: `${item.href}`,
              }}
            >
              {item.titleKey}
            </SidebarMenuItem>
          </li>
        );
      })}
    </ul>
  );
};
