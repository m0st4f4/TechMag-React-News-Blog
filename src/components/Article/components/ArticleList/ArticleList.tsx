import { type ReactNode } from "react";

import { Link } from "react-router";

import { useTranslation } from "react-i18next";

import { PostCardTopImg } from "@/components/Article/components/PostCardTopImg/PostCardTopImg.tsx";

import { cn } from "@/lib/utils.ts";

import type { ArticleType } from "@/types/article.types.ts";

type Props = {
  className?: string;
  data: ArticleType[];
};

export const ArticleList = ({ className = "", data }: Props): ReactNode => {
  const { t } = useTranslation();
  if (data.length === 0) {
    return (
      <p className={cn("text-center", className)}>{t("article.noResult")}</p>
    );
  }
  return (
    <div className={cn("grid gap-4 grid-cols-1  md:grid-cols-3", className)}>
      {data?.map((item) => (
        <Link key={item.id} to={`/article/${item.id}`}>
          <PostCardTopImg item={item} />
        </Link>
      ))}
    </div>
  );
};
