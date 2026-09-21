import { useQuery } from "@tanstack/react-query";

import { getComments } from "@/services/commentService.ts";

import type { ApiError } from "@/types/api.types.ts";
import type {
  CommentParamsType,
  CommentResponseType,
} from "@/types/comment.type.ts";

export const useGetComments = (params: CommentParamsType) => {
  return useQuery<CommentResponseType[], ApiError>({
    enabled: !!params.articleId,
    queryKey: ["comments", params],
    queryFn: ({ signal }) => getComments(params, signal),
  });
};
