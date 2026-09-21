import { type ReactNode } from "react";

import { useTranslation } from "react-i18next";

import { SearchForm } from "@/components/SearchForm/SearchForm.tsx";
import { SidebarGroup } from "@/components/Sidebar/components/SidebarGroup/SidebarGroup.tsx";

type Props = {
  className?: string;
};

export const SidebarSearch = ({ className = "" }: Props): ReactNode => {
  const { t } = useTranslation();
  return (
    <SidebarGroup className={className} title={t("sidebar.search.title")}>
      <SearchForm />
    </SidebarGroup>
  );
};
