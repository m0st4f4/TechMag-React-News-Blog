import { type ComponentProps, type ReactNode } from "react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Picture } from "@/components/ui/picture/picture.tsx";

import { cn } from "@/lib/utils.ts";

import type { CategoryType } from "@/types/article.types.ts";

type Props = ComponentProps<typeof Card> & {
  item: CategoryType;
  className?: string;
  priority?: boolean;
};
const IMAGE_WIDTH = 800;
const IMAGE_HEIGHT = 450;
export const CategoryCardTopImg = ({
  className = "",
  item,
  priority,
  ...otherProps
}: Props): ReactNode => {
  const webpImageUrl = `${item.image}/${IMAGE_WIDTH}/${IMAGE_HEIGHT}.webp`;
  const jpgImageUrl = `${item.image}/${IMAGE_WIDTH}/${IMAGE_HEIGHT}.jpg`;
  return (
    <Card
      className={cn(
        "relative mx-auto h-full w-full max-w-sm pt-0 hover:shadow transition-shadow duration-300",
        className
      )}
      {...otherProps}
    >

      <Picture
        jpgSrc={jpgImageUrl}
        webpSrc={webpImageUrl}
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        alt={item.name}
        imgClassName="relative z-20 aspect-video w-full object-cover"
        fetchPriority={priority ? "high" : "low"}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
      <CardHeader>
        <CardTitle>{item.name}</CardTitle>
        <CardDescription>{item.description}</CardDescription>
      </CardHeader>
    </Card>
  );
};
