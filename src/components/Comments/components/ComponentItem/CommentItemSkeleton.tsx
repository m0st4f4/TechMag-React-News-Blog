import type { ReactNode } from "react";

import { AuthorDetailsSkeleton } from "@/components/AuthorDetails/AuthorDetailsSkeleton.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";

import { cn } from "@/lib/utils.ts";

type Props = {
  className?: string;
};
export const CommentItemSkeleton = ({ className }: Props): ReactNode => {
  return (
    <div className={cn(className, "p-6")}>
      <div className="flex justify-between">
        <AuthorDetailsSkeleton />

        <Skeleton className="h-4 w-12" />
      </div>

      <Skeleton className="mt-8 mb-2 h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
};
