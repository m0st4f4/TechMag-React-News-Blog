import { type ComponentProps, type ReactNode } from "react";

import { Controller, type UseFormReturn } from "react-hook-form";

import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button.tsx";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Spinner } from "@/components/ui/spinner.tsx";

import type { UserInfoType } from "@/types/user.types.ts";

type Props = ComponentProps<"form"> & {
  form: UseFormReturn<UserInfoType>;
  isPending: boolean;
};

export const UserInfoForm = ({
  onSubmit,
  form,
  isPending,
  ...otherProps
}: Props): ReactNode => {
  const { t } = useTranslation();
  return (
    <form onSubmit={onSubmit} {...otherProps}>
      <FieldGroup className="grid grid-cols-3 ">
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                {t("auth.fields.name")}
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
                dir="ltr"
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
                dir="ltr"
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>
      <FieldSeparator className="my-4" />
      <FieldGroup className="grid grid-cols-2 ">
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
        <Controller
          name="confirmPassword"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                {t("auth.fields.confirmPassword")}
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
      <FieldSeparator className="my-4" />
      <FieldGroup className="grid grid-cols-2 ">
        <Controller
          name="bio"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                {t("auth.fields.bio")}
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
          name="avatar"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                {t("auth.fields.avatar")}
              </FieldLabel>
              <Input
                {...field}
                type="text"
                id={field.name}
                aria-invalid={fieldState.invalid}
                aria-label={field.name}
                dir="ltr"
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
              {t("auth.actions.submit")}...
            </>
          ) : (
            t("auth.actions.submit")
          )}
        </Button>
      </div>
    </form>
  );
};
