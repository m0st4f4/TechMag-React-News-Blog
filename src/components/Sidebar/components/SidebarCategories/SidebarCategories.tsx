import { type ReactNode } from "react";

import { useTranslation } from "react-i18next";

import { useGetCategories } from "@/components/Category/hooks/useGetCategories.ts";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage.tsx";
import { SidebarGroup } from "@/components/Sidebar/components/SidebarGroup/SidebarGroup.tsx";
import { SidebarMenuList } from "@/components/Sidebar/components/SidebarMenuList/SidebarMenuList.tsx";
import { SidebarMenuListSkeleton } from "@/components/Sidebar/components/SidebarMenuList/SidebarMenuListSkeleton.tsx";

import type { SidebarNavigationType } from "@/types/navigation.types.ts";

type Props = {
  className?: string;
};

export const SidebarCategories = ({ className }: Props): ReactNode => {
  const { data, isPending, isError, error, refetch } = useGetCategories();
  const { t } = useTranslation();

  const items: SidebarNavigationType[] | undefined = data?.map((category) => {
    return { titleKey: category.name, href: `${category.id}` };
  });

  if (isPending) {
    return (
      <SidebarGroup title={t("sidebar.category.title")} className={className}>
        <SidebarMenuListSkeleton />
      </SidebarGroup>
    );
  }

  if (isError && error) {
    return <ErrorMessage error={error} onRetry={refetch} />;
  }

  return (
    <SidebarGroup title={t("sidebar.category.title")} className={className}>
      <SidebarMenuList items={items} />
    </SidebarGroup>
  );
};
