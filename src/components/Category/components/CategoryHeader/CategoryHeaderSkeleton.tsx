import { type ReactNode } from "react";

import { Skeleton } from "@/components/ui/skeleton.tsx";

type Props = {
  className?: string;
};

const CategoryHeaderSkeleton = ({ className = "" }: Props): ReactNode => {
  return (
    <div className={className}>
      <Skeleton className="w-full h-48 object-cover rounded-lg" />
      <Skeleton className="w-1/4 h-4 my-4" />
      <Skeleton className="w-1/2 h-4" />
    </div>
  );
};

export default CategoryHeaderSkeleton;
