import { z } from "@/i18n";

export const UsernameSchema = z
  .string()
  .trim()
  .nonempty()
  .regex(/^[a-zA-Z0-9_]{3,20}$/);
