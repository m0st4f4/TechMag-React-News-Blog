import apiInstance from "@/services/api.ts";
import { type AxiosResponse } from "axios";

import type {
  CommentParamsType,
  CommentPayloadType,
  CommentResponseType,
} from "@/types/comment.type.ts";

export const getComments = async (
  inputParams?: CommentParamsType,
  signal?: AbortSignal
): Promise<CommentResponseType[]> => {
  const defaultParams: CommentParamsType = {
    _sort: "id",
    _order: "desc",
    _expand: [],
    _page: 1,
    _limit: 5,
  };

  const outputParams: CommentParamsType = { ...defaultParams, ...inputParams };

  const params = new URLSearchParams();
  Object.entries(outputParams).forEach(([key, value]) => {
    if (key == "q" && typeof value === "string" && value.length > 0) {
      params.append(key, value.trim());
      return;
    }
    if (Array.isArray(value)) {
      value.forEach((item) => {
        params.append(key, String(item));
      });
      return;
    }
    params.append(key, String(value));
  });

  const response: AxiosResponse<CommentResponseType[]> = await apiInstance.get(
    `/comments`,
    { params, signal }
  );
  return response.data;
};

export const postComment = async (
  payload: CommentPayloadType
): Promise<CommentResponseType> => {
  const response: AxiosResponse<CommentResponseType> = await apiInstance.post(
    "/comments",
    payload
  );
  return response.data;
};
