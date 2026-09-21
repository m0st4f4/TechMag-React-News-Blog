import { type ReactNode } from "react";

import { AuthorDetailsSkeleton } from "@/components/AuthorDetails/AuthorDetailsSkeleton.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";

export const ArticleDetailsSkeleton = (): ReactNode => {
  return (
    <article>
      <div className="relative">
        <Skeleton className="w-full rounded aspect-video" />
      </div>
      <div className="my-12">
        <div>
          <Skeleton className="w-2xl h-4" />
          <div className="flex items-end justify-between mt-4 mb-4">
            <AuthorDetailsSkeleton />
            <div className="flex gap-4">
              <div className="flex gap-1 text-sm">
                <Skeleton className="size-3 rounded-full" />
                <Skeleton className="w-[50px]" />
              </div>
              <div className="flex gap-1 text-sm">
                <Skeleton className="size-3 rounded-full" />
                <Skeleton className="w-[50px]" />
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        <div className="flex w-full  flex-col gap-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
    </article>
  );
};
