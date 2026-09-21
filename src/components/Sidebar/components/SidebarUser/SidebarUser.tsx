import { type ReactNode } from "react";

import { useParams } from "react-router";

import { useTranslation } from "react-i18next";

import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage";
import { SidebarGroup } from "@/components/Sidebar/components/SidebarGroup/SidebarGroup.tsx";
import { UserInfoCard } from "@/components/Sidebar/components/UserInfoCard/UserInfoCard";
import { UserInfoCardSkeleton } from "@/components/Sidebar/components/UserInfoCard/UserInfoCardSkeleton";

import { useFetchUser } from "@/hooks/useFetchUser";

type Props = {
  className?: string;
};

export const SidebarUser = ({ className = "" }: Props): ReactNode => {
  const params = useParams<{ username: string }>();
  const { data, error, isError, isPending, refetch } = useFetchUser(
    params.username ?? ""
  );
  const { t } = useTranslation();
  if (!params.username) {
    return (
      <SidebarGroup className={className}>
        <div>{t("user.notFound")}</div>
      </SidebarGroup>
    );
  }

  if (isPending) {
    return (
      <SidebarGroup className={className}>
        <UserInfoCardSkeleton />
      </SidebarGroup>
    );
  }

  if (isError && error) {
    return (
      <SidebarGroup className={className}>
        <ErrorMessage error={error} onRetry={refetch} />
      </SidebarGroup>
    );
  }

  if (!data) {
    return (
      <SidebarGroup className={className}>
        <div>{t("user.notFound")}</div>
      </SidebarGroup>
    );
  }

  return (
    <SidebarGroup className={className}>
      <UserInfoCard user={data} />
    </SidebarGroup>
  );
};
