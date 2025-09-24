"use server";

import { mailActionState, mailSchema } from "@/lib/mailValidation";
import { redirect } from "next/navigation";

export async function mailAction(
  _prev: mailActionState,
  formData: FormData
): Promise<mailActionState> {
  const form = Object.fromEntries(formData);
  const validationResult = mailSchema.safeParse(form);
  if (!validationResult.success) {
    return {
      form,
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  redirect("/");
}
