import { type ReactNode } from "react";

import { useParams } from "react-router";

import { useTranslation } from "react-i18next";

import { LatestPosts } from "@/components/Article/components/LatestPosts/LatestPosts";
import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";

import { useFetchUser } from "@/hooks/useFetchUser";

type Props = {
  className?: string;
};

export const UserPage = ({ className = "" }: Props): ReactNode => {
  const params = useParams<{ username: string }>();
  const { data, error, isError, isPending, refetch } = useFetchUser(
    params.username ?? ""
  );
  const { t } = useTranslation();

  if (!params.username) {
    return (
      <div className={className}>
        <div>{t("user.notFound")}</div>
      </div>
    );
  }

  if (isError && error) {
    return (
      <div className={className}>
        <ErrorMessage error={error} onRetry={refetch} />
      </div>
    );
  }

  return (
    <div className={className}>
      {data && <LatestPosts params={{ userId: data.id }} />}
    </div>
  );
};
