import { type ReactNode } from "react";

import { Link } from "react-router";

import { PostCardFullImg } from "@/components/Article/components/PostCardFullImg/PostCardFullImg.tsx";
import { useGetFeaturedArticles } from "@/components/Article/hooks/useGetFeaturedArticles.ts";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage.tsx";

import { cn } from "@/lib/utils.ts";

type Props = {
  className?: string;
};

export const FeaturedPosts = ({ className }: Props): ReactNode => {
  const { data, isPending, isError, error, refetch } = useGetFeaturedArticles();

  if (isError && error) {
    return <ErrorMessage error={error} onRetry={refetch} />;
  }

  if (!data) {
    return null;
  }

  return (
    <div
      className={cn(
        "grid gap-4 grid-cols-1 grid-rows-5 md:grid-cols-3 md:grid-rows-3",
        className
      )}
    >
      {data.map((item, index) => {
        const className =
          index == 0
            ? "md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3"
            : index == 1
              ? "md:row-start-1 md:row-end-3"
              : "";

        return (
          <Link key={item.id} to={`/article/${item.id}`} className={className}>
            <PostCardFullImg item={item} isPending={isPending} />
          </Link>
        );
      })}
    </div>
  );
};
