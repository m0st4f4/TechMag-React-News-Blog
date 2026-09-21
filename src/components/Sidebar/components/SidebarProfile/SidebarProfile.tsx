import { type ReactNode } from "react";

import { ProfileSidebarNavigation } from "@/config/navigation.ts";
import { useTranslation } from "react-i18next";

import { SidebarGroup } from "@/components/Sidebar/components/SidebarGroup/SidebarGroup.tsx";
import { SidebarMenuList } from "@/components/Sidebar/components/SidebarMenuList/SidebarMenuList.tsx";

type Props = {
  className?: string;
};

export const SidebarProfile = ({ className = "" }: Props): ReactNode => {
  const { t } = useTranslation();
  return (
    <SidebarGroup title={t("sidebar.profile.title")} className={className}>
      <SidebarMenuList items={ProfileSidebarNavigation} />
    </SidebarGroup>
  );
};
