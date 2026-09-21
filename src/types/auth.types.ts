import { z } from "@/i18n.ts";
import { LoginSchema } from "@/schema/login-schema.ts";
import { RegisterSchema } from "@/schema/register-schema.ts";

import type { UserType } from "@/types/user.types.ts";

export type RefreshResponseType = {
  accessToken: string;
  refreshToken: string;
};
export type AuthResponseType = {
  accessToken: string;
  refreshToken: string;
  user: UserType;
};
export type UserLoginType = z.infer<typeof LoginSchema>;
export type UserRegisterType = z.infer<typeof RegisterSchema>;
