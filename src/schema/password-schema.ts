import { z } from "@/i18n";

export const PasswordSchema = z.string().trim().nonempty().min(6);
