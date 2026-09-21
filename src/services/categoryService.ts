import apiInstance from "@/services/api.ts";
import type { AxiosResponse } from "axios";

import type { CategoryType } from "@/types/article.types.ts";

export const fetchCategoryById = async (
  id: string,
  signal?: AbortSignal
): Promise<CategoryType> => {
  const response: AxiosResponse<CategoryType> = await apiInstance.get(
    `/categories/${id}`,
    { signal }
  );
  return response.data;
};
export const fetchCategories = async (
  signal?: AbortSignal
): Promise<CategoryType[]> => {
  const response: AxiosResponse<CategoryType[]> = await apiInstance.get(
    "/categories",
    { signal }
  );
  return response.data;
};
