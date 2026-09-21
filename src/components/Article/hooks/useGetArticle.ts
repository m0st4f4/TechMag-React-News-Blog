import { useQuery } from "@tanstack/react-query";

import { fetchArticleById } from "@/services/articleService.ts";

import type { ApiError } from "@/types/api.types.ts";
import type { ArticleType } from "@/types/article.types.ts";

export const useGetArticle = (id?: string | number) => {
  return useQuery<ArticleType, ApiError>({
    enabled: Boolean(id),
    queryKey: ["article", id],
    queryFn: ({ signal }) => {
      return fetchArticleById(id!, signal);
    },
  });
};
