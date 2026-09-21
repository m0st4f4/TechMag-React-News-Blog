import { z } from "zod";

export const BioSchema = z.string().trim().max(500);
