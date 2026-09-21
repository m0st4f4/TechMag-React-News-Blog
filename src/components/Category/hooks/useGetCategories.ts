import { useQuery } from "@tanstack/react-query";

import { fetchCategories } from "@/services/categoryService.ts";

import type { ApiError } from "@/types/api.types.ts";
import type { CategoryType } from "@/types/article.types.ts";

export const useGetCategories = () => {
  return useQuery<CategoryType[], ApiError>({
    queryKey: ["categories"],
    queryFn: ({ signal }) => fetchCategories(signal),
  });
};
