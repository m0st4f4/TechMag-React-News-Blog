import { z } from "zod";

import { UserPayloadSchema, UserSchema } from "@/schema/user-schema.ts";

export type UserType = {
  id: string;
  email: string;
  password?: string;
  name: string;
  username: string;
  avatar?: string;
  bio?: string;
  title?: string;
  role: RoleType;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
export type RoleType = "admin" | "author" | "subscriber";
export type UserPayloadType = z.infer<typeof UserPayloadSchema>;
export type UserInfoType = z.infer<typeof UserSchema>;
export type ChangeUserInfoParams = {
  data: UserInfoType;
  userId: string;
};
