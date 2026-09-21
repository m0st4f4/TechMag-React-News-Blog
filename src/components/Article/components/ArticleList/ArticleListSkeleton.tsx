import { type ReactNode } from "react";

import { PostCardTopImgSkeleton } from "@/components/Article/components/PostCardTopImg/PostCardTopImgSkeleton.tsx";

import { cn } from "@/lib/utils.ts";

type Props = {
  className?: string;
};

const ArticleListSkeleton = ({ className = "" }: Props): ReactNode => {
  return (
    <div className={cn("grid gap-4 grid-cols-1  md:grid-cols-3", className)}>
      {Array.from({ length: 3 }).map((_, index) => (
        <PostCardTopImgSkeleton key={index} />
      ))}
    </div>
  );
};

export default ArticleListSkeleton;
