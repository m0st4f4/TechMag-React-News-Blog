import { type ReactNode } from "react";

import { Badge } from "@/components/ui/badge.tsx";

import { useLocalizedDate } from "@/hooks/useLocalizedDate.ts";

import { cn } from "@/lib/utils.ts";

import type { ArticleType } from "@/types/article.types.ts";

type Props = {
  item: ArticleType;
  className?: string;
  priority?: boolean;
};

const IMAGE_WIDTH = 100;
const IMAGE_HEIGHT = 100;

export const PostCardFullImg = ({
  className,
  item,
  priority = false,
}: Props): ReactNode => {
  const { formatDate } = useLocalizedDate();

  return (
    <div
      className={cn(
        "group relative h-full w-full overflow-hidden rounded-lg",
        className
      )}
    >
      <img
        src={item.featuredImage}
        alt={item.title}
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
      />

      <div className="absolute inset-be-0 inset-e-0 inset-s-0 flex flex-col gap-4 items-start justify-end bg-linear-to-t from-black/80 to-black/0 p-4">
        <div className="flex gap-2 items-center">
          {item.category && (
            <Badge variant="secondary">{item.category.name}</Badge>
          )}
          <span className="text-white text-xs">
            {formatDate(item.createdAt, "medium")}
          </span>
        </div>
        <p className="line-clamp-2 text-md font-medium text-white">
          {item.title}
        </p>
      </div>
    </div>
  );
};
