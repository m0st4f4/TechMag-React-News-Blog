import type { ComponentType } from "react";

import type { TranslationKey } from "@/types/i18next";

type BaseNode = {
  titleKey: TranslationKey | string;
  href: string;
  description?: string;
  icon?: ComponentType<{ className?: string }>;
};

export type TopNavigation = Pick<BaseNode, "titleKey" | "href">;
export type SocialNavigationType = Pick<BaseNode, "titleKey" | "href" | "icon">;
export type FooterNavigationType = {
  groupTitleKey: TranslationKey;
  items: Pick<BaseNode, "titleKey" | "href">[];
};
export type SidebarNavigationType = Pick<BaseNode, "titleKey" | "href">;
