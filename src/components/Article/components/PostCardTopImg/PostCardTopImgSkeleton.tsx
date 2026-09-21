import type { ReactNode } from "react";

import { AuthorDetailsSkeleton } from "@/components/AuthorDetails/AuthorDetailsSkeleton.tsx";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Skeleton } from "@/components/ui/skeleton.tsx";

export const PostCardTopImgSkeleton = (): ReactNode => {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 hover:shadow transition-shadow duration-300">
      <Skeleton className="aspect-video w-full" />

      <CardHeader>
        <CardAction>
          <Skeleton className="w-8 h-4 rounded-full" />
        </CardAction>
        <CardTitle>
          <Skeleton className="w-1/2 h-4" />
        </CardTitle>
        <CardDescription>
          <Skeleton className="w-3/4 h-4" />
        </CardDescription>
      </CardHeader>
      <CardFooter className="bg-card">
        <AuthorDetailsSkeleton />
      </CardFooter>
    </Card>
  );
};
