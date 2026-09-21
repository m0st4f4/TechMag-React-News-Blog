import type { UserType } from "@/types/user.types.ts";

export type ArticleType = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  images: string[];
  userId: string;
  categoryId: string;
  tagId: string | string[];
  status: ArticleStatusType;
  isFeatured: boolean;
  isPremium: boolean;
  viewCount: number;
  likeCount: number;
  commentCount: number;
  readTime: number;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  category?: CategoryType;
  user: UserType;
};
export type ArticleStatusType = "published" | "draft";

export type TagType = {
  id: string;
  name: string;
  slug: string;
  color: string;
};

export type CategoryType = {
  id: string;
  name: string;
  slug: string;
  description: string;
  parentId: string | null;
  image: string;
  color: string;
  isActive: boolean;
  order: number;
  createdAt: string;
};
export type fetchArticlesParamsType = Partial<
  Pick<
    ArticleType,
    | "id"
    | "title"
    | "content"
    | "status"
    | "userId"
    | "categoryId"
    | "isFeatured"
    | "isPremium"
  > & {
    q: string;
    _sort: string;
    _order: "desc" | "asc";
    _embed: string[];
    _expand: string[];
    _page: number;
    _limit: number;
  }
>;
