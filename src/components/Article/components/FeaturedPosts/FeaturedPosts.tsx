import { type ReactNode } from "react";

import { Link } from "react-router";

import { PostCardFullImg } from "@/components/Article/components/PostCardFullImg/PostCardFullImg.tsx";
import { useGetFeaturedArticles } from "@/components/Article/hooks/useGetFeaturedArticles.ts";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";

import { cn } from "@/lib/utils.ts";

type Props = {
  className?: string;
};

const FEATURED_COUNT = 5;

const GRID_CLASS =
  "grid grid-cols-1 gap-4 auto-rows-[12rem] md:grid-cols-3 md:auto-rows-[14rem]";

const getItemClass = (index: number): string => {
  if (index === 0) return "row-span-2 md:col-span-2";
  if (index === 1) return "row-span-2";
  return "";
};

export const FeaturedPosts = ({ className }: Props): ReactNode => {
  const { data, isPending, isError, error, refetch } = useGetFeaturedArticles();

  if (isError && error) {
    return <ErrorMessage error={error} onRetry={refetch} />;
  }

  if (isPending) {
    return (
      <div className={cn(GRID_CLASS, className, "auto-rows-[12rem]")}>
        {Array.from({ length: FEATURED_COUNT }).map((_, index) => (
          <Skeleton
            key={index}
            className={cn("h-full w-full", getItemClass(index))}
          />
        ))}
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className={cn(GRID_CLASS, className)}>
      {data.slice(0, FEATURED_COUNT).map((item, index) => (
        <Link
          key={item.id}
          to={`/article/${item.id}`}
          className={cn("block h-full w-full", getItemClass(index))}
        >
          <PostCardFullImg item={item} priority={index === 0 || index === 1} />
        </Link>
      ))}
    </div>
  );
};
