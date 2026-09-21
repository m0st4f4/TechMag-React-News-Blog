import { type ReactNode } from "react";

import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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
              {t(item.titleKey)}
            </SidebarMenuItem>
          </li>
        );
      })}
    </ul>
  );
};
