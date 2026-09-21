import { type ReactNode } from "react";

import { Skeleton } from "@/components/ui/skeleton.tsx";

export const AuthorDetailsSkeleton = (): ReactNode => {
  return (
    <div className="flex gap-2">
      <Skeleton className="size-10 shrink-0 rounded-full" />
      <div className="grid justify-between">
        <Skeleton className="h-4 w-[150px]" />
        <Skeleton className="h-4 w-[100px]" />
      </div>
    </div>
  );
};
