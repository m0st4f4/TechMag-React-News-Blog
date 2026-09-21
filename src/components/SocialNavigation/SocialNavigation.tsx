import { type ReactNode } from "react";

import { useTranslation } from "react-i18next";

import { socialNavigation } from "@/config/navigation.ts";

import { cn } from "@/lib/utils.ts";

type Props = {
  className?: string;
  iconClass?: string;
};

export const SocialNavigation = ({
  className = "flex gap-4",
  iconClass = "w-6 h-6",
}: Props): ReactNode => {
  const { t } = useTranslation();

  return (
    <div className={cn(className)}>
      {socialNavigation.map((item) => {
        const IconComponent = item.icon;
        return (
          <a
            key={item.titleKey}
            title={t(item.titleKey)}
            href={item.href}
            className="border rounded-full p-1 hover:text-accent hover:border-accent"
          >
            {IconComponent && <IconComponent className={cn(iconClass)} />}
          </a>
        );
      })}
    </div>
  );
};
