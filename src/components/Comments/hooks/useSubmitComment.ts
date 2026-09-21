import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postComment } from "@/services/commentService.ts";

import type { ApiError } from "@/types/api.types.ts";
import type {
  CommentPayloadType,
  CommentResponseType,
} from "@/types/comment.type.ts";

export const useSubmitComment = () => {
  const client = useQueryClient();
  return useMutation<CommentResponseType, ApiError, CommentPayloadType>({
    mutationFn: postComment,
    onSuccess: () => {
      client.invalidateQueries({
        queryKey: ["comments"],
      });
    },
  });
};
