import type { ReactNode } from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const CategoryCardTopImgSkeleton = (): ReactNode => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 hover:shadow transition-shadow duration-300">
      <Skeleton className="aspect-video w-full" />
      <CardHeader>
        <CardTitle>
          <Skeleton className="w-1/2 h-4" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="w-3/4 h-4" />
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
