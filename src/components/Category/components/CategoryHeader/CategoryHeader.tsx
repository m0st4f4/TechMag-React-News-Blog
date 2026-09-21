import { type ReactNode } from "react";

import { useTranslation } from "react-i18next";

import { cn } from "@/lib/utils.ts";

import type { CategoryType } from "@/types/article.types.ts";

type Props = {
  className?: string;
  data: CategoryType;
};

export const CategoryHeader = ({ className = "", data }: Props): ReactNode => {
  const { t } = useTranslation();
  if (!data) {
    return (
      <p className={cn("text-center", className)}>{t("category.noResult")}</p>
    );
  }
  return (
    <div className={className}>
      <img
        className="w-full h-48 object-cover rounded-lg"
        src={data.image}
        alt={data.name}
      />
      <h1 className="text-2xl font-bold my-4">{data.name}</h1>
      <p className="text-base">{data.description}</p>
    </div>
  );
};
