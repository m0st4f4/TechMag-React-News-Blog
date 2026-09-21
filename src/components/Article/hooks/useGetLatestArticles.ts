import { useQuery } from "@tanstack/react-query";

import { fetchArticles } from "@/services/articleService.ts";

import type { ApiError } from "@/types/api.types.ts";
import type {
  ArticleType,
  fetchArticlesParamsType,
} from "@/types/article.types.ts";

export const useGetLatestArticles = (params?: fetchArticlesParamsType) => {
  return useQuery<ArticleType[], ApiError>({
    queryKey: ["articles", "latest", params ?? {}],
    queryFn: ({ signal }) =>
      fetchArticles(
        {
          ...{
            _sort: "id",
            _order: "desc",
            status: "published",
            _expand: ["category", "user"],
            _page: 1,
            _limit: 6,
          },
          ...params,
        },
        signal
      ),
  });
};
