import { type ReactNode } from "react";

import { Skeleton } from "@/components/ui/skeleton.tsx";

type Props = {
  className?: string;
};

export const SidebarMenuListSkeleton = ({
  className = "",
}: Props): ReactNode => {
  return (
    <ul className={className}>
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <Skeleton key={index} className={`h-8 mbe-2 last:mbe-0  w-full`} />
        );
      })}
    </ul>
  );
};
