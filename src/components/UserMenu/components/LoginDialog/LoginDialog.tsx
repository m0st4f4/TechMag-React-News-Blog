import { type ReactNode } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { LoginSchema } from "@/schema/login-schema.ts";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage.tsx";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.tsx";

import { LoginForm } from "@/forms/LoginForm/LoginForm.tsx";

import { useLoginUser } from "@/hooks/useLoginUser.ts";

type Props = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  extraButtons?: ReactNode[];
};
type Values = z.infer<typeof LoginSchema>;
export const LoginDialog = ({
  isOpen,
  onOpenChange,
  extraButtons,
}: Props): ReactNode => {
  const { t } = useTranslation();
  const { isPending, isError, error, reset, mutateAsync } = useLoginUser();
  const form = useForm<Values>({
    defaultValues: { username: "", password: "" },
    resolver: zodResolver(LoginSchema),
  });
  const handleFormSubmit: SubmitHandler<Values> = (values: Values) => {
    mutateAsync(values).then(() => {
      onOpenChange(false);
      const message = t("auth.login.successMsg");
      toast.success(message, {
        position: "bottom-right",
      });
    });
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        reset();
        form.reset();
        onOpenChange(open);
      }}
    >
      <DialogTrigger />
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>{t("auth.login.title")}</DialogTitle>
        </DialogHeader>
        {isError && <ErrorMessage error={error} className="mt-4" />}
        <LoginForm
          noValidate
          onSubmit={form.handleSubmit(handleFormSubmit)}
          form={form}
          isPending={isPending}
        />
        <div className="flex flex-col w-fit">
          {extraButtons?.map((button) => button)}
        </div>
      </DialogContent>
    </Dialog>
  );
};
