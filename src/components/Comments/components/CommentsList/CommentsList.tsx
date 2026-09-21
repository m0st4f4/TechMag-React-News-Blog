import { type ReactNode } from "react";

import { CommentItem } from "@/components/Comments/components/ComponentItem/CommentItem.tsx";

import type { CommentType } from "@/types/comment.type.ts";

type Props = {
  comments: CommentType[];
  className?: string;
};
export const CommentsList = ({
  className = "",
  comments,
}: Props): ReactNode => {
  return (
    <div className={className}>
      {comments?.map((item) => {
        return <CommentItem key={item.id} item={item} />;
      })}
    </div>
  );
};
