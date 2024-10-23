import { z } from "zod";
import { userSchema, UserType } from "./user";

export const recruiterSchema = userSchema.extend({
  userType: z.literal(UserType.Recruiter),
  companyName: z.string(),
  companyWebsite: z.string().url().optional(),
  jobPostings: z.number(),
  position: z.string(),
  verified: z.boolean(),
});

export type Recruiter = z.infer<typeof recruiterSchema>;