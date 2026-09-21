import { type ReactNode } from "react";

import { SidebarCategories } from "@/components/Sidebar/components/SidebarCategories/SidebarCategories.tsx";
import { SidebarSearch } from "@/components/Sidebar/components/SidebarSearch/SidebarSearch.tsx";

import { cn } from "@/lib/utils.ts";

type Props = {
  className?: string;
};

export const SidebarArticle = ({ className = "" }: Props): ReactNode => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <SidebarSearch />
      <SidebarCategories />
    </div>
  );
};
