import { type ReactNode } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";

import { UserSchema } from "@/schema/user-schema.ts";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

import { ErrorMessage } from "@/components/ErrorMessage/ErrorMessage.tsx";

import { UserInfoForm } from "@/forms/UserInfoForm/UserInfoForm.tsx";

import { useAuth } from "@/hooks/useAuth.ts";
import { useChangeUserInfo } from "@/hooks/useChangeUserInfo.ts";

import type { UserInfoType, UserPayloadType } from "@/types/user.types.ts";

type Props = {
  className?: string;
};

export const UserInfoPage = ({ className = "" }: Props): ReactNode => {
  const { user } = useAuth();
  const { t } = useTranslation();
  const { isError, error, mutateAsync, isPending } = useChangeUserInfo();
  const form = useForm<UserInfoType>({
    values: user ?? undefined,
    resolver: zodResolver(UserSchema),
    mode: "onChange",
  });
  const {
    formState: { dirtyFields },
  } = form;
  const HandleFormSubmit: SubmitHandler<UserInfoType> = async (
    values: UserInfoType
  ) => {
    if (!user) {
      return;
    }

    const { confirmPassword, ...payload } = values;

    const changedValues = (
      Object.keys(dirtyFields) as Array<keyof UserPayloadType>
    ).reduce<Partial<UserPayloadType>>((acc, key) => {
      acc[key] = payload[key];
      return acc;
    }, {});

    if (Object.keys(changedValues).length === 0) {
      toast.info(t("form.noChangeToSave"));
      return;
    }

    const info = {
      data: changedValues,
      userId: user.id,
    };
    await mutateAsync(info);
    toast.success("Successfully updated user");
  };
  return (
    <div className={className}>
      {isError && <ErrorMessage error={error} className="mt-4" />}
      <UserInfoForm
        form={form}
        isPending={isPending}
        onSubmit={form.handleSubmit(HandleFormSubmit)}
      />
    </div>
  );
};
