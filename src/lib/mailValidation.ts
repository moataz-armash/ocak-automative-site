import { z } from "zod";
import validator from "validator";

export const mailSchema = z.object({
  name: z.string().min(4, { message: "At least must be 4 charachter" }).trim(),

  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  phone: z.string().refine(validator.isMobilePhone, {
    message: "Please enter a valid phone number",
  }),
  message: z.string().min(12, { message: "Please add more details" }).trim(),
});

export type mailActionState = {
  form?: { name?: string; phone?: string; email?: string; message?: string };
  errors?: {
    name?: string[];
    phone?: string[];
    email?: string[];
    message?: string[];
  };
};
