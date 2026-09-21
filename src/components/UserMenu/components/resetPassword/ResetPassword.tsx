import { type ReactNode } from "react";

import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button.tsx";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.tsx";
import { Field, FieldGroup } from "@/components/ui/field.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";

type Props = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  extraButtons?: ReactNode[];
};

export const ResetPassword = ({
  isOpen,
  onOpenChange,
  extraButtons,
}: Props): ReactNode => {
  const { t } = useTranslation();

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <form>
        <DialogTrigger />
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>{t("auth.resetPass.title")}</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="username">{t("auth.fields.email")}</Label>
              <Input
                id="email"
                name="email"
                defaultValue=""
                aria-label="email"
                type="email"
              />
            </Field>

            <Field orientation="vertical">
              {extraButtons?.map((button) => button)}
            </Field>
          </FieldGroup>
          <DialogFooter>
            <Button type="submit">{t("auth.actions.reset")}</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
