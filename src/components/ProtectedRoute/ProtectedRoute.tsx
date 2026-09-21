import { type ReactNode } from "react";

import { Navigate, Outlet, useLocation } from "react-router";

import { useTranslation } from "react-i18next";

import { Spinner } from "@/components/ui/spinner.tsx";

import { useAuth } from "@/hooks/useAuth.ts";

import type { RoleType } from "@/types/user.types.ts";

type Props = {
  allowedRoles?: RoleType[];
  redirectPath?: string;
};

export const ProtectedRoute = ({
  allowedRoles,
  redirectPath = "/login",
}: Props): ReactNode => {
  const { isAuthenticated, user, isLoading } = useAuth();
  const location = useLocation();
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center gap-2">
        <Spinner /> <span>{t("common.loadingSite")}</span>
      </div>
    );
  }
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} state={{ from: location }} />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};
