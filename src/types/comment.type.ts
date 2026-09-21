import { z } from "zod";

import type { CommentSchema } from "@/schema/comment-schema.ts";

import type { UserType } from "@/types/user.types.ts";

export type CommentType = {
  id: string;
  articleId: string;
  userId: string;
  parentId: null | string;
  content: string;
  status: CommentStatusType;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
};

type CommentStatusType = "approved" | "pending";

export type CommentSchemaType = z.infer<typeof CommentSchema>;

export type CommentPayloadType = CommentSchemaType & {
  articleId: string;
};

export type CommentParamsType = Partial<
  Pick<CommentType, "id" | "articleId" | "userId" | "parentId" | "status"> & {
    q: string;
    _sort: string;
    _order: "desc" | "asc";
    _embed: string[];
    _expand: string[];
    _page: number;
    _limit: number;
  }
>;

export type CommentResponseType = CommentType & {
  user?: UserType;
};
