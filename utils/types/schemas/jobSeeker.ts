import { z } from "zod";
import { userSchema, UserType } from "./user";

export const jobSeekerSchema = userSchema.extend({
  userType: z.literal(UserType.JobSeeker),
  resumeUrl: z.string().url().optional(),
  skills: z.array(z.string()),
  workExperience: z.array(z.string()),
  educationHistroy: z.array(z.string()),
  interest: z.array(z.string()).optional(),
  portfolioUrl: z.string().url().optional(),
});

export type JobSeeker = z.infer<typeof jobSeekerSchema>;