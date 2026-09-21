import { type ReactNode, useRef } from "react";

import { useParams } from "react-router";

import { useTranslation } from "react-i18next";

import { ArticleDetails } from "@/components/Article/components/ArticleDetails/ArticleDetails.tsx";
import { ArticleDetailsSkeleton } from "@/components/Article/components/ArticleDetails/ArticleDetailsSkeleton.tsx";
import { useGetArticle } from "@/components/Article/hooks/useGetArticle.ts";
import { Comments } from "@/components/Comments/components/Comments/Comments.tsx";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage.tsx";

export const ArticlePage = (): ReactNode => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const { data, isPending, isError, error } = useGetArticle(id);

  const commentSectionRef = useRef<HTMLDivElement>(null);
  const handleCommentButtonClick = () => {
    commentSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  if (!id) {
    return (
      <div className="text-lg text-center p-5">
        <p>{t("page.article.notfound")}</p>
      </div>
    );
  }

  if (isPending) {
    return <ArticleDetailsSkeleton />;
  }

  if (isError && error) {
    return <ErrorMessage error={error} />;
  }

  if (!data) {
    return (
      <div className="text-lg text-center p-5">
        <p>{t("page.article.notfound")}</p>
      </div>
    );
  }
  return (
    <>
      <ArticleDetails item={data} onCommentClick={handleCommentButtonClick} />
      <Comments articleId={id} ref={commentSectionRef} />
    </>
  );
};
