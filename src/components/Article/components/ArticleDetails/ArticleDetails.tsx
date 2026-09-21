import type { ReactNode } from "react";

import DOMPurify from "dompurify";
import { useTranslation } from "react-i18next";

import { AuthorDetails } from "@/components/AuthorDetails/AuthorDetails.tsx";
import { CategoryButton } from "@/components/Category/components/CategoryButton/CategoryButton.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Separator } from "@/components/ui/separator.tsx";

import { useLocalizedDate } from "@/hooks/useLocalizedDate.ts";

import MingcuteCalendar2Line from "@/icons/MingcuteCalendar2Line.tsx";
import MingcuteCommentLine from "@/icons/MingcuteCommentLine.tsx";
import MingcuteTimeDurationLine from "@/icons/MingcuteTimeDurationLine.tsx";

import type { ArticleType } from "@/types/article.types.ts";

type Props = {
  item: ArticleType;
  onCommentClick?: () => void;
};
export const ArticleDetails = ({ item, onCommentClick }: Props): ReactNode => {
  const sanitizedHtml = DOMPurify.sanitize(item.content);

  const { t } = useTranslation();
  const { formatDate } = useLocalizedDate();
  return (
    <article>
      <div className="relative">
        <img
          className="w-full rounded aspect-video"
          src={item.featuredImage}
          alt={item.title}
        />
        <div className="flex items-center text-primary-foreground gap-2 absolute bottom-0 mbe-4 ms-4 text-sm">
          <CategoryButton item={item.category} />

          <Separator orientation="vertical" className="py-1" />
          <div className="flex items-center gap-1 py-1">
            <MingcuteTimeDurationLine />
            <div className="">
              {t("article.readTime", { count: item.readTime })}
            </div>
          </div>
        </div>
      </div>
      <div className="my-12">
        <div>
          <h1 className="text-2xl font-bold">{item.title}</h1>
          <div className="flex gap-6 flex-col items-start sm:flex-row sm:items-end justify-between mt-4 mb-4 ">
            <AuthorDetails item={item.user} />
            <div className="flex flex-row gap-4 justify-between w-full sm:w-auto items-center">
              <div className="flex gap-1 text-sm">
                <MingcuteCalendar2Line />
                <div>{formatDate(item.createdAt, "medium")}</div>
              </div>
              <Button
                variant="ghost"
                className="flex gap-1 text-sm"
                onClick={onCommentClick}
              >
                <MingcuteCommentLine />
                {t("article.commentsCount", { count: item.commentCount })}
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-6 md:my-12 " />
        <div
          className="prose prose-slate max-w-none dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
        />
      </div>
    </article>
  );
};
