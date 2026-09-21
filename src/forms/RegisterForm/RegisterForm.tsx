import { type ComponentProps, type ReactNode } from "react";

import { Controller, type UseFormReturn } from "react-hook-form";

import type { RegisterUserType } from "@/services/userService.ts";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button.tsx";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Spinner } from "@/components/ui/spinner";

type Props = ComponentProps<"form"> & {
  form: UseFormReturn<RegisterUserType>;
  isPending: boolean;
};

export const RegisterForm = ({
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
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                {t("auth.fields.email")}
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
                id={field.name}
                type="password"
                aria-invalid={fieldState.invalid}
                {...field}
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
          onClick={() => form.reset()}
          disabled={isPending}
        >
          {t("auth.actions.reset")}
        </Button>
        <Button variant="default" type="submit" disabled={isPending}>
          {isPending ? (
            <>
              <Spinner data-icon="inline-start" />
              {t("auth.actions.register")}...
            </>
          ) : (
            t("auth.actions.register")
          )}
        </Button>
      </div>
    </form>
  );
};
