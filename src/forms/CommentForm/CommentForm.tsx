import { type ComponentProps, type ReactNode } from "react";

import { Controller, type UseFormReturn } from "react-hook-form";

import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button.tsx";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field.tsx";
import { Spinner } from "@/components/ui/spinner.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";

import type { CommentSchemaType } from "@/types/comment.type.ts";

type Props = ComponentProps<"form"> & {
  form: UseFormReturn<CommentSchemaType>;
  className?: string;
  isPending?: boolean;
};

export const CommentForm = ({
  className = "",
  form,
  onSubmit,
  isPending,
  ...otherProps
}: Props): ReactNode => {
  const { t } = useTranslation();
  return (
    <form onSubmit={onSubmit} className={className} {...otherProps}>
      <FieldGroup className="">
        <Controller
          name="content"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor={field.name}>
                {t("comment.fields.content")}
              </FieldLabel>
              <Textarea
                {...field}
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
          {t("comment.actions.reset")}
        </Button>
        <Button variant="default" type="submit" disabled={isPending}>
          {isPending ? (
            <>
              <Spinner data-icon="inline-start" />
              {t("comment.actions.submit")}...
            </>
          ) : (
            t("comment.actions.submit")
          )}
        </Button>
      </div>
    </form>
  );
};
