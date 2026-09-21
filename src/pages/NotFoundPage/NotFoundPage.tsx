import type { ReactNode } from "react";

import { Link } from "react-router";

import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";

export const NotFoundPage = (): ReactNode => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full h-auto">
      <h1 className="text-6xl">404</h1>
      <h2 className="text-4xl">{t("page.notFound.heading")}</h2>
      <p className="text-base">{t("page.notFound.description")}</p>
      <Button asChild>
        <Link to="/">{t("page.notFound.backToHome")}</Link>
      </Button>
    </div>
  );
};
