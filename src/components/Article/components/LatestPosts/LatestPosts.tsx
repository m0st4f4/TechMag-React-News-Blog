import { type ReactNode } from "react";

import { Link } from "react-router";

import { useTranslation } from "react-i18next";

import { PostCardTopImg } from "@/components/Article/components/PostCardTopImg/PostCardTopImg.tsx";
import { PostCardTopImgSkeleton } from "@/components/Article/components/PostCardTopImg/PostCardTopImgSkeleton.tsx";
import { useGetLatestArticles } from "@/components/Article/hooks/useGetLatestArticles.ts";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage.tsx";

import { cn } from "@/lib/utils.ts";

import type { fetchArticlesParamsType } from "@/types/article.types.ts";

type Props = {
  className?: string;
  params?: fetchArticlesParamsType;
};

const SKELETON_COUNT = 6;

const GRID_CLASS = "grid grid-cols-1 gap-4 md:grid-cols-3";

export const LatestPosts = ({ className, params }: Props): ReactNode => {
  const { data, isPending, isError, error, refetch } =
    useGetLatestArticles(params);
  const { t } = useTranslation();

  if (isError && error) {
    return <ErrorMessage error={error} onRetry={refetch} />;
  }

  if (!isPending && !data) {
    return null;
  }

  return (
    <section className={cn(className)}>
      <h2 className="text-2xl border-s-2 border-accent mbe-4 ps-4 font-bold">
        {t("latestArticle.heading")}
      </h2>
      <div className={GRID_CLASS}>
        {isPending
          ? Array.from({ length: SKELETON_COUNT }).map((_, index) => (
              <PostCardTopImgSkeleton key={index} />
            ))
          : data?.map((item, index) => (
              <Link
                key={item.id}
                to={`/article/${item.id}`}
                className="block h-full"
              >
                <PostCardTopImg item={item} priority={index < 3} />
              </Link>
            ))}
      </div>
    </section>
  );
};
