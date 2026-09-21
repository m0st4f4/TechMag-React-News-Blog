import { type ReactNode } from "react";

import { useTranslation } from "react-i18next";

import { SidebarGroup } from "@/components/Sidebar/components/SidebarGroup/SidebarGroup.tsx";
import { SidebarMenuItem } from "@/components/Sidebar/components/SidebarMenuItem/SidebarMenuItem.tsx";

type Props = {
  className?: string;
};

export const SidebarProfile = ({ className = "" }: Props): ReactNode => {
  const { t } = useTranslation();
  return (
    <SidebarGroup title={t("sidebar.profile.title")} className={className}>
      <SidebarMenuItem to="/profile">
        {t("sidebar.profile.userInfo")}
      </SidebarMenuItem>
    </SidebarGroup>
  );
};
