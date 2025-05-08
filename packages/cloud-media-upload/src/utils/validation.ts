import { z } from "zod";

export const credentialSchema = z.object({
  projectId: z.string().or(z.number()),
  token: z.string({ required_error: "Token is required" }),
});
