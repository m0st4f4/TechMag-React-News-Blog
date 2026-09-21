import type { ReactNode } from "react";

import { Link } from "react-router";

import { cn } from "@/lib/utils.ts";

import type { CategoryType } from "@/types/article.types.ts";

type Props = {
  item?: CategoryType;
};
export const CategoryButton = ({ item }: Props): ReactNode => {
  if (!item) {
    return;
  }
  return (
    <Link
      to={`/category/${item.id}`}
      style={{ backgroundColor: item.color }}
      className={cn("rounded py-1 px-4 bg-primary")}
    >
      {item.name}
    </Link>
  );
};
