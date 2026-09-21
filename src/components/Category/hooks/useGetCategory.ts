import { useQuery } from "@tanstack/react-query";

import { fetchCategoryById } from "@/services/categoryService.ts";

import type { ApiError } from "@/types/api.types.ts";
import type { CategoryType } from "@/types/article.types.ts";

export const useGetCategory = (id: string) => {
  return useQuery<CategoryType, ApiError>({
    enabled: Boolean(id),
    queryKey: ["category", id],
    queryFn: ({ signal }) => {
      return fetchCategoryById(id, signal);
    },
  });
};
