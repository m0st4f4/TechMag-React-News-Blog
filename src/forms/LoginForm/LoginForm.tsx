import { type ComponentProps, type ReactNode } from "react";

import { Controller, type UseFormReturn } from "react-hook-form";

import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field.tsx";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";

import type { UserLoginType } from "@/types/auth.types.ts";

type Props = ComponentProps<"form"> & {
  form: UseFormReturn<UserLoginType>;
  isPending: boolean;
};

export const LoginForm = ({
  onSubmit,
  form,
  isPending,
  ...otherProps
}: Props): ReactNode => {
  const { t } = useTranslation();
  return (
    <form onSubmit={onSubmit} {...otherProps}>
      <FieldGroup>
        <Controller
          name="username"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                {t("auth.fields.userName")}
              </FieldLabel>
              <Input
                {...field}
                type="text"
                id={field.name}
                aria-invalid={fieldState.invalid}
                aria-label={field.name}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                {t("auth.fields.password")}
              </FieldLabel>
              <Input
                {...field}
                type="password"
                id={field.name}
                aria-invalid={fieldState.invalid}
                aria-label={field.name}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <div className="flex gap-2 mt-4 items-center justify-start">
        <Button
          variant="outline"
          type="button"
          onClick={() => {
            form.reset();
          }}
          disabled={isPending}
        >
          {t("auth.actions.reset")}
        </Button>
        <Button variant="default" type="submit" disabled={isPending}>
          {isPending ? (
            <>
              <Spinner data-icon="inline-start" />
              {t("auth.actions.login")}...
            </>
          ) : (
            t("auth.actions.login")
          )}
        </Button>
      </div>
    </form>
  );
};
