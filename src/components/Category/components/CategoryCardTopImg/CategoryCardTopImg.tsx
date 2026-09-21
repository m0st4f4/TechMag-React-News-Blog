import { type ComponentProps, type ReactNode } from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";

import { cn } from "@/lib/utils.ts";

import type { CategoryType } from "@/types/article.types.ts";

type Props = ComponentProps<typeof Card> & {
  item: CategoryType;
  className?: string;
};
export const CategoryCardTopImg = ({
  className = "",
  item,
  ...otherProps
}: Props): ReactNode => {
  return (
    <Card
      className={cn(
        "relative mx-auto h-full w-full max-w-sm pt-0 hover:shadow transition-shadow duration-300",
        className
      )}
      {...otherProps}
    >
      <div className="absolute inset-0 z-30 aspect-video" />
      <img
        src={item.image}
        alt={item.name}
        className="relative z-20 aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardTitle>{item.name}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
    </Card>
  );
};
