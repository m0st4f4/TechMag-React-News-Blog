import type { ReactNode } from "react";

import { Link } from "react-router";

import { useTranslation } from "react-i18next";

type Props = {
  className?: string;
};
export const SiteLogo = ({ className }: Props): ReactNode => {
  const { t } = useTranslation();
  return (
    <div className={className}>
      <Link to="/">
        <span className="text-3xl font-bold text-shadow-2xs text-accent">
          {t("common.siteName")}
        </span>
      </Link>
    </div>
  );
};
