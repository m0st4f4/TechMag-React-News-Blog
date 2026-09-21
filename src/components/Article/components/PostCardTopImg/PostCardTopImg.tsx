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

import type { ArticleType } from "@/types/article.types.ts";

type Props = ComponentProps<typeof Card> & {
  item: ArticleType;
};

export const PostCardTopImg = ({ item, ...otherProps }: Props): ReactNode => {
  return (
    <Card
      className="relative mx-auto w-full h-full max-w-sm pt-0 hover:shadow transition-shadow duration-300"
      {...otherProps}
    >
      <div className="absolute inset-0 z-30 aspect-video" />
      <img
        src={item.featuredImage}
        alt={item.title}
        className="relative z-20 aspect-video w-full object-cover"
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
