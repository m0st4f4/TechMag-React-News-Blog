import { type ReactNode } from "react";

import { Skeleton } from "@/components/ui/skeleton";

import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

export const UserInfoCardSkeleton = ({ className }: Props): ReactNode => {
  return (
    <div
      className={cn(className, "flex flex-col items-center gap-2 text-center")}
    >
      <div className="flex justify-center items-center w-full aspect-square  overflow-hidden p-6">
        <Skeleton className="rounded-full size-full" />
      </div>
      <Skeleton className="h-4 w-1/2" />
      <Skeleton className="h-3 w-full rounded  mbe-4" />

      <Skeleton className="h-3 w-2/3 rounded" />
      <Skeleton className="h-3 w-full rounded" />
      <Skeleton className="h-3 w-2/3 rounded" />
    </div>
  );
};
