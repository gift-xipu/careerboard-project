import { z } from "zod";

export const UserType = {
  Recruiter: "recruiter",
  JobSeeker: "job_seeker",
} as const;

export const userSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  email: z.string().email(),
  phoneNumber: z.number(),
  image: z.string().optional(),
  address: z.string().optional(),
  userType: z.enum([UserType.Recruiter, UserType.JobSeeker]),
});

export type User = z.infer<typeof userSchema>;
export type UserType = (typeof UserType)[keyof typeof UserType];