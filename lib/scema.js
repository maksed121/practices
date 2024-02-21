import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(3,"Invalid name"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10,"Invalid phone"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

