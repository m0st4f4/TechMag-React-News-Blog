import { type ReactNode, useContext, useEffect } from "react";

import { useParams } from "react-router";

import { useTranslation } from "react-i18next";

import { ArticleList } from "@/components/Article/components/ArticleList/ArticleList.tsx";
import ArticleListSkeleton from "@/components/Article/components/ArticleList/ArticleListSkeleton.tsx";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage.tsx";

import { SearchContext } from "@/context/search-context.ts";

import { useSearchArticle } from "@/hooks/useSearchArticle.ts";

type Props = {
  className?: string;
};

export const SearchPage = ({ className = "" }: Props): ReactNode => {
  const { t } = useTranslation();

  const query =
    useParams<{ query: string }>().query?.trim().toLowerCase() || "";
  const { setQuery } = useContext(SearchContext);
  const { data, isPending, isError, error, refetch } = useSearchArticle(query);

  useEffect(() => {
    setQuery(query);
    document.title =
      t("page.search.title", { siteName: t("common.siteName") }) +
      " " +
      query?.trim().toLowerCase();

    return function () {
      setQuery("");
    };
  }, [query, setQuery, t]);

  if (isPending) {
    return (
      <div className={className}>
        <h1 className="text-center text-2xl mb-8">
          <span> {t("page.search.heading")}</span>
          &nbsp;
          <span className="font-bold ms-1">{query}</span>
        </h1>
        <ArticleListSkeleton />
      </div>
    );
  }

  if (isError && error) {
    return (
      <div className={className}>
        <h1 className="text-center text-2xl mb-8">
          <span> {t("page.search.heading")}</span>
          &nbsp;
          <span className="font-bold ms-1">{query}</span>
        </h1>
        <ErrorMessage onRetry={refetch} error={error} />
      </div>
    );
  }

  return (
    <div className={className}>
      <h1 className="text-center text-2xl mb-8">
        <span> {t("page.search.heading")}</span>
        &nbsp;
        <span className="font-bold ms-1">{query}</span>
      </h1>
      <ArticleList data={data} />
    </div>
  );
};
