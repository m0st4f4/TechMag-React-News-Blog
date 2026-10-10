import { type ComponentProps, type ReactNode } from "react";

import { AuthorDetails } from "@/components/AuthorDetails/AuthorDetails.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx";
import { Picture } from "@/components/ui/picture/picture.tsx";

import { cn } from "@/lib/utils.ts";

import type { ArticleType } from "@/types/article.types.ts";

type Props = ComponentProps<typeof Card> & {
  item: ArticleType;
  priority?: boolean;
};

const IMAGE_WIDTH = 640;
const IMAGE_HEIGHT = 360;

export const PostCardTopImg = ({
  item,
  priority = false,
  className,
  ...otherProps
}: Props): ReactNode => {
  const webpImageUrl = `${item.featuredImage}/${IMAGE_WIDTH}/${IMAGE_HEIGHT}.webp`;
  const jpgImageUrl = `${item.featuredImage}/${IMAGE_WIDTH}/${IMAGE_HEIGHT}.jpg`;
  return (
    <Card
      className={cn(
        "mx-auto h-full w-full max-w-sm pt-0 transition-shadow duration-300 hover:shadow",
        className
      )}
      {...otherProps}
    >
      <Picture
        jpgSrc={jpgImageUrl}
        webpSrc={webpImageUrl}
        alt={item.title}
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding={priority ? "auto" : "async"}
        imgClassName="aspect-video w-full object-cover"
      />
      <CardHeader>
        <CardAction>
          {item.category && (
            <Badge variant="secondary">{item.category.name}</Badge>
          )}
        </CardAction>
        <CardTitle>{item.title}</CardTitle>
        <CardDescription>{item.excerpt}</CardDescription>
      </CardHeader>
      <CardFooter className="bg-card">
        <AuthorDetails item={item.user} size="default" />
      </CardFooter>
    </Card>
  );
};
