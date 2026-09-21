import type { ReactNode } from "react";

import { useTranslation } from "react-i18next";

type Props = {
  className?: string;
};
export const Copyright = ({ className }: Props): ReactNode => {
  const { t } = useTranslation();

  return (
    <div className={className}>
      <div className="container">
        <p>{t("footer.copyright.text")}</p>
        <div className="text-sm">
          {t("footer.copyright.credits")}
          <a href="https://github.com/m0st4f4">m0st4f4</a>
        </div>
      </div>
    </div>
  );
};
