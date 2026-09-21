import { z } from "zod";

import { AvatarSchema } from "@/schema/avatar-schema.ts";
import { BioSchema } from "@/schema/bio-schema.ts";
import { EmailSchema } from "@/schema/email-schema.ts";
import { NameSchema } from "@/schema/name-schema.ts";
import { PasswordSchema } from "@/schema/password-schema.ts";
import { UsernameSchema } from "@/schema/username-schema.ts";

const UserBaseSchema = z.object({
  email: EmailSchema.optional(),
  password: PasswordSchema.optional(),
  confirmPassword: z.string().min(1).optional(),
  name: NameSchema.optional(),
  username: UsernameSchema.optional(),
  avatar: AvatarSchema.optional(),
  bio: BioSchema.optional(),
});
export const UserSchema = UserBaseSchema.refine(
  (data) => data.password === data.confirmPassword,
  {
    message: "Password is required",
    path: ["confirmPassword"],
  }
);

export const UserPayloadSchema = UserBaseSchema.omit({
  confirmPassword: true,
});
