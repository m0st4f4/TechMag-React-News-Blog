import { type ReactNode } from "react";

import { useTranslation } from "react-i18next";

import { SocialNavigation } from "@/components/SocialNavigation/SocialNavigation.tsx";

type Props = {
  className?: string;
};

export const FooterAbout = ({ className = "" }: Props): ReactNode => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <div className="pt-4">
        <p>{t("footer.about.description")}</p>
      </div>
      <SocialNavigation className="flex gap-2 mt-4" iconClass="w-6 h-6" />
    </div>
  );
};
