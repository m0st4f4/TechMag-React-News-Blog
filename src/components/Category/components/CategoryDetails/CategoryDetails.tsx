import { type ReactNode } from "react";

import { ArticleList } from "@/components/Article/components/ArticleList/ArticleList.tsx";
import ArticleListSkeleton from "@/components/Article/components/ArticleList/ArticleListSkeleton.tsx";
import { useGetArticlesByCategory } from "@/components/Article/hooks/useGetArticlesByCategory.ts";
import { CategoryHeader } from "@/components/Category/components/CategoryHeader/CategoryHeader.tsx";
import CategoryHeaderSkeleton from "@/components/Category/components/CategoryHeader/CategoryHeaderSkeleton.tsx";
import { useGetCategory } from "@/components/Category/hooks/useGetCategory.ts";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage.tsx";

type Props = {
  className?: string;
  id: string;
};

export const CategoryDetails = ({ className = "", id }: Props): ReactNode => {
  const categoryQuery = useGetCategory(id);
  const articleQuery = useGetArticlesByCategory(id);

  if (categoryQuery.isPending || articleQuery.isPending) {
    return (
      <div className={className}>
        <CategoryHeaderSkeleton className="mb-8" />
        <ArticleListSkeleton />
      </div>
    );
  }

  if (categoryQuery.isError) {
    return (
      <ErrorMessage
        onRetry={categoryQuery.refetch}
        error={categoryQuery.error}
      />
    );
  }

  if (articleQuery.isError) {
    return (
      <ErrorMessage onRetry={articleQuery.refetch} error={articleQuery.error} />
    );
  }

  return (
    <div className={className}>
      <CategoryHeader className="mb-8" data={categoryQuery.data} />
      <ArticleList data={articleQuery.data} />
    </div>
  );
};
