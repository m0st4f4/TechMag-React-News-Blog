import { type ReactNode } from "react";

import { Link } from "react-router";

import { useTranslation } from "react-i18next";

import { CategoryCardTopImg } from "@/components/Category/components/CategoryCardTopImg/CategoryCardTopImg.tsx";

import { cn } from "@/lib/utils.ts";

import type { CategoryType } from "@/types/article.types.ts";

type Props = {
  className?: string;
  data: CategoryType[];
};

export const CategoryList = ({ className = "", data }: Props): ReactNode => {
  const { t } = useTranslation();
  if (data.length === 0) {
    return (
      <p className={cn("text-center", className)}>{t("category.noResult")}</p>
    );
  }
  return (
    <div className={cn("grid gap-4 grid-cols-1  md:grid-cols-3", className)}>
      {data.map((item) => (
        <Link key={item.id} to={`/category/${item.id}`}>
          <CategoryCardTopImg item={item} />
        </Link>
      ))}
    </div>
  );
};
