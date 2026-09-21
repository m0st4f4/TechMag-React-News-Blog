import { type ComponentPropsWithRef, type ReactNode } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { CommentSchema } from "@/schema/comment-schema.ts";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

import { CommentsList } from "@/components/Comments/components/CommentsList/CommentsList.tsx";
import { CommentItemSkeleton } from "@/components/Comments/components/ComponentItem/CommentItemSkeleton.tsx";
import { useGetComments } from "@/components/Comments/hooks/useGetComments.ts";
import { useSubmitComment } from "@/components/Comments/hooks/useSubmitComment.ts";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage.tsx";

import { CommentForm } from "@/forms/CommentForm/CommentForm.tsx";

import { useAuth } from "@/hooks/useAuth.ts";

import { cn } from "@/lib/utils.ts";

import type {
  CommentPayloadType,
  CommentSchemaType,
} from "@/types/comment.type.ts";

type Props = ComponentPropsWithRef<"div"> & {
  articleId: string;
};

export const Comments = ({
  className = "",
  ref,
  articleId,
}: Props): ReactNode => {
  const { user, isAuthenticated } = useAuth();

  const { data, isPending, isError, error, refetch } = useGetComments({
    articleId,
    _expand: ["user"],
  });
  const submitComment = useSubmitComment();

  const { t } = useTranslation();
  const form = useForm<CommentSchemaType>({
    defaultValues: { content: "" },
    resolver: zodResolver(CommentSchema),
  });

  const handleFormSubmit = async (value: CommentSchemaType) => {
    if (!user?.id || !articleId) {
      return;
    }
    const data: CommentPayloadType = { ...value, articleId };
    await submitComment.mutateAsync(data);
    toast.success(t("comment.successMsg"));
    form.reset();
  };

  if (isError && error) {
    return <ErrorMessage error={error} onRetry={refetch} />;
  }
  return (
    <div ref={ref} className={cn(className, "flex flex-col gap-6")}>
      <div className="flex justify-start gap-2 items-center">
        <h2 className="text-lg font-bold">{t("comment.title")}</h2>
        {data && data?.length > 0 && <span>({data?.length})</span>}
      </div>

      {isAuthenticated ? (
        <CommentForm
          onSubmit={form.handleSubmit(handleFormSubmit)}
          form={form}
          isPending={submitComment.isPending}
        />
      ) : (
        <p className="font-bold text-lg text-center">
          {t("comment.accessMsg")}
        </p>
      )}

      <div className="flex flex-col gap-2">
        {isPending ? (
          Array.from({ length: 6 }).map((_, index) => (
            <CommentItemSkeleton key={index} />
          ))
        ) : (
          <CommentsList comments={data} className="flex flex-col gap-2" />
        )}
      </div>
    </div>
  );
};
