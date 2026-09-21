import { type ReactNode } from "react";

import { CategoryCardTopImgSkeleton } from "@/components/Category/components/CategoryCardTopImg/CategoryCardTopImgSkeleton.tsx";
import { CategoryList } from "@/components/Category/components/CategoryList/CategoryList.tsx";
import { useGetCategories } from "@/components/Category/hooks/useGetCategories.ts";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage.tsx";

import { cn } from "@/lib/utils.ts";

type Props = {
  className?: string;
};

export const Categories = ({ className = "" }: Props): ReactNode => {
  const { data, isPending, isError, error, refetch } = useGetCategories();

  if (isPending) {
    return (
      <div className={cn("grid gap-4 grid-cols-1  md:grid-cols-3", className)}>
        {Array.from({ length: 3 }).map((_, index) => (
          <CategoryCardTopImgSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError && error) {
    return <ErrorMessage onRetry={refetch} error={error} />;
  }

  return <CategoryList data={data} className={className} />;
};
