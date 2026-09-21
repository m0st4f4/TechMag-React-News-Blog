import { z } from "zod";

export const AvatarSchema = z.string().trim().nonempty().url();
