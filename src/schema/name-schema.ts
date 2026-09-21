import { z } from "zod";

export const NameSchema = z.string().trim().nonempty();
