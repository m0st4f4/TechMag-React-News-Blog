import { useQuery } from "@tanstack/react-query";

import { fetchArticles } from "@/services/articleService.ts";

import type { ApiError } from "@/types/api.types.ts";
import type { ArticleType } from "@/types/article.types.ts";

export const useGetArticlesByCategory = (categoryId: string) => {
  return useQuery<ArticleType[], ApiError>({
    queryKey: ["articlesByCategoryId", categoryId],
    queryFn: ({ signal }) => {
      return fetchArticles(
        {
          categoryId: categoryId,
          status: "published",
          _expand: ["user", "category"],
          _page: 1,
          _limit: 50,
          _sort: "id",
          _order: "desc",
        },
        signal
      );
    },
  });
};
