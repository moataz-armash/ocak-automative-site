"use client";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [state, setState] = useState<"idle" | "loading" | "sent" | "error">(
    "idle"
  );
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    const form = e.currentTarget;
    const formData = new FormData(form);

    const res = await fetch("/api/contact", { method: "POST", body: formData });

    if (res.ok) {
      setState("sent");
      setMsg(t("messages.sent"));
      form.reset();
    } else {
      setState("error");
      setMsg(t("messages.error"));
    }
  }

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
      <form onSubmit={onSubmit} className="space-y-5 p-4" noValidate>
        {/* Honeypot */}
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div>
          <label className="mb-1 block text-sm font-medium">
            {t("labels.name")} <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            required
            placeholder={t("placeholders.name")}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            {t("labels.email")} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder={t("placeholders.email")}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            {t("labels.phone")} <span className="text-red-500">*</span>
          </label>
          <input
            name="phone"
            required
            placeholder={t("placeholders.phone")}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium">
            {t("labels.message")} <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder={t("placeholders.message")}
            className="textarea textarea-bordered w-full"
          />
        </div>

        <button
          type="submit"
          disabled={state === "loading"}
          className="btn w-full bg-gradient-to-l to-primary-btn-hover from-third-bg text-white rounded-xl">
          {state === "loading" ? t("buttons.sending") : t("buttons.send")}
        </button>

        {msg && (
          <p
            className={`text-sm ${
              state === "sent" ? "text-green-600" : "text-red-600"
            }`}>
            {msg}
          </p>
        )}
      </form>
    </div>
  );
}
