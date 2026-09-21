import type { ReactNode } from "react";

import { Link } from "react-router";

import { useTranslation } from "react-i18next";

import { FooterNavigation } from "@/config/navigation.ts";

type Props = {
  className?: string;
};
export const FooterNavigationBar = ({ className }: Props): ReactNode => {
  const { t } = useTranslation();
  return (
    <div className={className}>
      {FooterNavigation.map((group) => {
        return (
          <div className="flex-auto" key={group.groupTitleKey}>
            <h4 className="text-base font-bold">{t(group.groupTitleKey)}</h4>
            <ul>
              {group.items.map((item) => {
                return (
                  <li key={item.titleKey} className="text-sm font-normal">
                    <Link to={item.href}>{t(item.titleKey)}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
