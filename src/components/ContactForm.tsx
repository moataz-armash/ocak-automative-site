"use client";
import { mailAction } from "@/app/[locale]/iletisim/action";
import { mailSchema } from "@/lib/mailValidation";
import { useTranslations } from "next-intl";
import { useActionState, useEffect, useState } from "react";
import { ValidatedInput } from "./ui/ValidateInput";
import toast from "react-hot-toast";
import { inputFields } from "@/app/lib/inputFields";

type MessageState = "idle" | "loading" | "success" | "error" | "sent";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [messageState, setMessageState] = useState<MessageState>("idle");

  const [state, action, isPending] = useActionState(mailAction, {});

  useEffect(() => {
    if (messageState === "success") {
      setMessageState("idle");

      const timer = setTimeout(() => {
        setMessageState("sent");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [messageState]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setWasSubmitted(true);
    setMessageState("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const validationResult = mailSchema.safeParse(data);
    if (!validationResult.success) {
      setMessageState("error");
      return;
    }
    const res = await fetch("/api/contact", { method: "POST", body: formData });

    if (res.ok) {
      setMessageState("success");
      toast.success(t("messages.sent"));
      setMsg(t("messages.sent"));
      form.reset();
      setWasSubmitted(false);
    } else {
      setMessageState("error");
      setMsg(t("messages.error"));
    }
  }

  const isLoading = messageState === "loading" || isPending;
  return (
    <div className="grid gap-8 lg:grid-cols-2 mt-8 items-center">
      {/* Map */}
      <div className="rounded-2xl overflow-hidden shadow-sm border border-secondary-bg p-4">
        <iframe
          title={t("mapTitle")}
          className="w-full h-[480px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d24062.357984495025!2d28.808835000000002!3d41.073479!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDA0JzI2LjIiTiAyOMKwNDgnMjcuNyJF!5e0!3m2!1sen!2str!4v1758518281205!5m2!1sen!2str`}
        />
      </div>

      {/* Form */}
      <form
        onSubmit={onSubmit}
        action={action}
        className="space-y-5 p-4"
        noValidate>
        {/* Honeypot */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        {inputFields.map(({ id, name, type }) => (
          <div key={id}>
            <label className="mb-1 block text-sm font-medium">
              {t(`labels.${name}`)} <span className="text-red-500">*</span>
            </label>
            <ValidatedInput
              type={name}
              name={name}
              className={`${type} ${type}-bordered w-full`}
              placeholder={t(`placeholders.${name}`)}
              wasSubmitted={wasSubmitted}
              fieldSchema={mailSchema.shape[name]}
              defaultValue={state.form?.[name]}
              errors={state.errors?.[name]}
              disabled={isLoading}
              rows={type === "textarea" && 5}
            />
          </div>
        ))}

        <button
          type="submit"
          disabled={isLoading}
          className={`btn w-full text-white rounded-xl transition-all duration-200 ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-gradient-to-l to-primary-btn-hover from-third-bg hover:shadow-lg"
          }`}>
          <div className="flex items-center justify-center gap-2">
            <span>{isLoading ? t("buttons.sending") : t("buttons.send")}</span>
            {isLoading && (
              <span className="loading loading-spinner loading-xs"></span>
            )}
          </div>
        </button>
      </form>
    </div>
  );
}
