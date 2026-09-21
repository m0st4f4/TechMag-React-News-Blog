import { z } from "@/i18n";
import { PasswordSchema } from "@/schema/password-schema.ts";
import { UsernameSchema } from "@/schema/username-schema.ts";

export const LoginSchema = z.object({
  username: UsernameSchema,
  password: PasswordSchema,
});
