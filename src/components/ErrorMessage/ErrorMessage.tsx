import { type ReactNode } from "react";

import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button.tsx";

import { getApiErrorMessage } from "@/lib/getApiErrorMesage.ts";
import { cn } from "@/lib/utils.ts";

import type { ApiError } from "@/types/api.types.ts";

type Props = {
  className?: string;
  onRetry?: () => void;
  error: ApiError;
};

export const ErrorMessage = ({
  className = "",
  onRetry,
  error,
}: Props): ReactNode => {
  const { t } = useTranslation();
  const message = getApiErrorMessage(error);
  return (
    <div className={cn(className, "flex flex-col items-center gap-2")}>
      <p className="text-center text-secondary-foreground p-2">{t(message)}</p>
      {onRetry && (
        <Button variant="secondary" onClick={onRetry} className="w-fit">
          {t("error.action.retry")}
        </Button>
      )}
    </div>
  );
};
